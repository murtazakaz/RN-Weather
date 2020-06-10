import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {requestAndroidPermission} from '../../services/permissionService';
import Geolocation from '@react-native-community/geolocation';
import {_getWeatherByLocation} from '../../services/weatherServices';
import {useSelector, useDispatch} from 'react-redux';
import {storeWeather, updatelocation} from '../../store/actions';
import {HomeStyles} from './HomeScreenStyles';

//functional components with hooks
export default function HomeScreen() {
  const {navigate} = useNavigation();
  const [loading, setLoading] = useState(false);
  const weather = useSelector(state => state.weather);
  const location = useSelector(state => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkForPermissions() {
      // You can await here
      let isGranted = await requestAndroidPermission();
      console.log('permission', isGranted);

      if (isGranted || Platform.OS == 'ios') {
        getCurrentLocation();
      }
    }
    checkForPermissions();
  }, []);

  useEffect(() => {
    async function getWeatherDetails() {
      let weather = await _getWeatherByLocation(location);

      setLoading(false);
      if (weather) getWeather(weather);
    }
    getWeatherDetails();
  }, [location]);

  function getCurrentLocation() {
    setLoading(true);
    Geolocation.getCurrentPosition(
      location => {
        getLocation(location);
      },
      error => {
        console.log('err', error);
        setLoading(false);
      },
    );
  }

  const getWeather = useCallback(data => dispatch(storeWeather(data)), [
    dispatch,
  ]);

  const getLocation = useCallback(data => dispatch(updatelocation(data)), [
    dispatch,
  ]);

  function renderLocation() {
    console.log('renderLocation', weather);
    if (loading) {
      return <Text style={HomeStyles.heading}>Loading</Text>;
    } else if (!location || !weather) {
      return (
        <Text style={HomeStyles.heading}>Couldn't get current location</Text>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            navigate('Detail');
          }}>
          <Text style={HomeStyles.heading}>{` ${weather.name},`}</Text>
          <Text style={HomeStyles.heading}>{` ${weather.sys.country}`}</Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <ImageBackground
      source={require('assets/imgs/bg.png')}
      resizeMode="cover"
      style={HomeStyles.container}>
      <View style={HomeStyles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={HomeStyles.closeImg}
            source={require('assets/imgs/close.png')}
          />
        </TouchableOpacity>

        <View style={HomeStyles.liveButton}>
          <Text style={HomeStyles.liveButtonText}>Live</Text>
        </View>
      </View>

      <View style={HomeStyles.content}>
        <TouchableOpacity
          onPress={() => getCurrentLocation()}
          style={HomeStyles.currentLocationBox}>
          <Image
            style={HomeStyles.currentLocationBoxImg}
            source={require('assets/imgs/mark.png')}
          />
          <Text style={HomeStyles.currentLocationBoxText}>
            CURRENT LOCATION
          </Text>
        </TouchableOpacity>

        {renderLocation()}
      </View>
    </ImageBackground>
  );
}
