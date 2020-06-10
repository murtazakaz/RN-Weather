import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {_getWeatherByLocationHourly} from '../../services/weatherServices';
import {storeWeatherHourly} from '../../store/actions';
import {RenderByWeatherTypes} from './components/weatherIconsType';
import {DetailStyle} from './DetailScreenStyles';
import {StackedAreaChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {useNavigation} from 'react-navigation-hooks';
//functional components with hooks
export default function DetailScreen() {
  const navigate = useNavigation();
  const weather = useSelector(state => state.weather);
  const location = useSelector(state => state.location);
  const weatherHourly = useSelector(state => state.weatherHourly);
  const [date] = useState(moment().format('MMM DD, YYYY'));
  const dispatch = useDispatch();

  const [dataMaxMin, setDataMaxMin] = useState([]);
  const colors = ['#ffa134', '#ffd9b1'];
  const keys = ['max', 'min'];
  // const dataMaxMin = [
  //   {
  //     date: '06-06-2020',
  //     max: '30',
  //     min: '20',
  //   },
  //   {
  //     date: '07-06-2020',
  //     max: '32',
  //     min: '18',
  //   },
  //   {
  //     date: '08-06-2020',
  //     max: '34',
  //     min: '19',
  //   },
  //   {
  //     date: '09-06-2020',
  //     max: '33',
  //     min: '18',
  //   },
  //   {
  //     date: '010-06-2020',
  //     max: '28',
  //     min: '15',
  //   },
  // ];

  const svgs = [
    {onPress: () => console.log('apples')},
    {onPress: () => console.log('bananas')},
    {onPress: () => console.log('cherries')},
    {onPress: () => console.log('dates')},
  ];

  useEffect(() => {
    async function getWeatherHourly() {
      let hourlyWeather = await _getWeatherByLocationHourly(location);
      if (hourlyWeather) {
        setWeatherHourly(hourlyWeather.daily);
      }
    }

    getWeatherHourly();
  }, []);

  const setWeatherHourly = useCallback(
    data => dispatch(storeWeatherHourly(data)),
    [dispatch],
  );

  return (
    <View style={DetailStyle.container}>
      <View style={DetailStyle.header}>
        <TouchableOpacity
          onPress={() => {
            navigate.goBack();
          }}>
          <Image
            style={DetailStyle.menuImg}
            source={require('assets/imgs/menu_medium.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={DetailStyle.searchImg}
            source={require('assets/imgs/search_medium.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={DetailStyle.content}>
          <View style={DetailStyle.countryBox}>
            <View style={DetailStyle.countryNameBox}>
              <Text style={DetailStyle.title}>{` ${weather.name},`}</Text>
              <Text style={DetailStyle.title}>{` ${
                weather.sys.country
              },`}</Text>
              <Text style={DetailStyle.subTitle}>{date}</Text>
            </View>
            <View style={DetailStyle.countryImgBox}>
              <Image
                style={DetailStyle.countryImg}
                source={require('assets/imgs/bg.png')}
              />
            </View>
          </View>
          <View style={DetailStyle.dayWeather}>
            <FlatList
              data={weatherHourly.slice(0, 5)}
              numColumns={5}
              initialNumToRender={5}
              renderItem={item => {
                return <RenderByWeatherTypes data={item} />;
              }}
            />
          </View>
          <View style={DetailStyle.additionalInfoBox}>
            <Text style={DetailStyle.additionalTitle}>Additional Info</Text>
            <View style={DetailStyle.additionalDetailBox}>
              <View style={DetailStyle.additionalDetail}>
                <Text style={DetailStyle.additionalDetailSubTitle}>
                  Precipitation
                </Text>
                <Text style={DetailStyle.additionalDetailText}>3%</Text>
              </View>
              <View style={DetailStyle.additionalDetail}>
                <Text style={DetailStyle.additionalDetailSubTitle}>
                  Humidity
                </Text>
                <Text style={DetailStyle.additionalDetailText}>{`${
                  weather.main.humidity
                } %`}</Text>
              </View>
              <View style={DetailStyle.additionalDetail}>
                <Text style={DetailStyle.additionalDetailSubTitle}>Windly</Text>
                <Text style={DetailStyle.additionalDetailText}>{`${
                  weather.wind.speed
                } km/h`}</Text>
              </View>
            </View>
          </View>
          <View style={DetailStyle.temperatureBox}>
            <Text style={DetailStyle.temperatureTitle}>Temperature</Text>
            <StackedAreaChart
              style={{height: 200, paddingVertical: 10}}
              data={dataMaxMin}
              keys={keys}
              colors={colors}
              curve={shape.curveNatural}
              showGrid={false}
              svgs={svgs}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
