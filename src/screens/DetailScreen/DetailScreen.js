import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {color} from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import {ScrollView} from 'react-native-gesture-handler';
export default class DetailScreen extends Component {
  wetherStatus(CurrentWether) {
    switch (CurrentWether) {
      case 'weather-mostly-cloud':
        return (
          <Image
            style={styles.wetherImg}
            source={require('assets/imgs/weather_mostly_cloud_medium.png')}
          />
        );
      case 'weather-clouds':
        return (
          <Image
            style={styles.wetherImg}
            source={require('assets/imgs/weather-clouds_medium.png')}
          />
        );
      case 'weather-cloud-thunder-rain':
        return (
          <Image
            style={styles.wetherImg}
            source={require('assets/imgs/weather-cloud-thunder-rain_medium.png')}
          />
        );
      case 'weather-sun':
        return (
          <Image
            style={styles.wetherImg}
            source={require('assets/imgs/weather-sun_medium.png')}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={styles.menuImg}
              source={require('assets/imgs/menu_medium.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={styles.searchImg}
              source={require('assets/imgs/search_medium.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.countryBox}>
              <View style={styles.countryNameBox}>
                <Text style={styles.title}>New York,</Text>
                <Text style={styles.title}>United States</Text>
                <Text style={styles.subTitle}>Oct 04, 2019</Text>
              </View>
              <View style={styles.countryImgBox}>
                <Image
                  style={styles.countryImg}
                  source={require('assets/imgs/bg.png')}
                />
              </View>
            </View>
            <View style={styles.dayWeather}>
              <View
                style={[
                  styles.wetherDetail,
                  {backgroundColor: 'rgba(255, 255, 255, 0.1)'},
                ]}>
                <Text style={styles.wetherTimeText}>12:00</Text>
                {this.wetherStatus('weather-clouds')}
                <Text style={styles.wetherTemperature}>24</Text>
              </View>
              <View style={styles.wetherDetail}>
                <Text style={styles.wetherTimeText}>12:00</Text>
                {this.wetherStatus('weather-cloud-thunder-rain')}
                <Text style={styles.wetherTemperature}>24</Text>
              </View>
              <View style={styles.wetherDetail}>
                <Text style={styles.wetherTimeText}>12:00</Text>
                {this.wetherStatus('weather-mostly-cloud')}
                <Text style={styles.wetherTemperature}>24</Text>
              </View>
              <View style={styles.wetherDetail}>
                <Text style={styles.wetherTimeText}>12:00</Text>
                {this.wetherStatus('weather-sun')}
                <Text style={styles.wetherTemperature}>24</Text>
              </View>
              <View style={styles.wetherDetail}>
                <Text style={styles.wetherTimeText}>12:00</Text>
                {this.wetherStatus('weather-clouds')}
                <Text style={styles.wetherTemperature}>24</Text>
              </View>
            </View>
            <View style={styles.additionalInfoBox}>
              <Text style={styles.additionalTitle}>Additional Info</Text>
              <View style={styles.additionalDetailBox}>
                <View style={styles.additionalDetail}>
                  <Text style={styles.additionalDetailSubTitle}>
                    Precipitation
                  </Text>
                  <Text style={styles.additionalDetailText}>3%</Text>
                </View>
                <View style={styles.additionalDetail}>
                  <Text style={styles.additionalDetailSubTitle}>Humidity</Text>
                  <Text style={styles.additionalDetailText}>74%</Text>
                </View>
                <View style={styles.additionalDetail}>
                  <Text style={styles.additionalDetailSubTitle}>Windly</Text>
                  <Text style={styles.additionalDetailText}>18 km/h</Text>
                </View>
              </View>
            </View>
            <View style={styles.temperatureBox}>
              <Text style={styles.temperatureTitle}>Temperature</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.palette.white,
    paddingHorizontal: moderateScale(15),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(15),
    marginBottom: moderateScale(10),
  },
  menuImg: {
    height: moderateScale(10),
    width: moderateScale(20),
    resizeMode: 'stretch',
  },
  searchImg: {
    height: moderateScale(15),
    width: moderateScale(15),
    resizeMode: 'stretch',
  },
  content: {},
  countryBox: {flexDirection: 'row'},
  countryNameBox: {
    flex: 0.6,
  },
  countryImgBox: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  countryImg: {
    height: moderateScale(90),
    width: moderateScale(110),
    overflow: 'hidden',
    borderRadius: moderateScale(20),
  },
  title: {
    color: color.palette.ThemeCoralCandy,
    fontSize: moderateScale(20),
    fontWeight: '600',
  },
  subTitle: {
    color: color.palette.ThemeGray,
    fontSize: moderateScale(12),
    marginTop: moderateScale(5),
  },
  dayWeather: {
    flexDirection: 'row',
    height: moderateScale(93),
    borderRadius: moderateScale(20),
    backgroundColor: color.palette.ThemeCoralCandy,
    marginTop: moderateScale(40),
    marginBottom: moderateScale(45),
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(15),
  },
  wetherDetail: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(80),
    borderRadius: moderateScale(20),
    flex: 1,
  },
  wetherTimeText: {
    color: color.palette.white,
  },
  wetherImg: {
    height: moderateScale(26),
    width: moderateScale(26),
    resizeMode: 'stretch',
    marginVertical: moderateScale(7),
  },
  wetherTemperature: {
    color: color.palette.white,
  },
  additionalInfoBox: {
    borderTopColor: color.palette.offWhite,
    borderTopWidth: moderateScale(1),
    borderBottomColor: color.palette.offWhite,
    borderBottomWidth: moderateScale(1),
    paddingVertical: moderateScale(18),
    marginBottom: moderateScale(15),
  },
  additionalTitle: {
    color: color.palette.ThemeCoralCandy,
    fontSize: moderateScale(18),
    fontWeight: '600',
    marginBottom: moderateScale(10),
  },
  additionalDetailBox: {
    flexDirection: 'row',
  },
  additionalDetail: {
    flex: 1,
  },
  additionalDetailSubTitle: {
    color: color.palette.ThemeGray,
    fontSize: moderateScale(14),
    marginBottom: moderateScale(5),
  },
  additionalDetailText: {
    color: color.palette.ThemeCoralCandy,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  temperatureTitle: {
    color: color.palette.ThemeCoralCandy,
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginBottom: moderateScale(10),
  },
});
