import React, {Component, useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useNavigationParam} from 'react-navigation-hooks';
import {moderateScale} from 'react-native-size-matters';
import {color} from '../../theme';
import {requestAndroidPermission} from '../../services/permissionService';
import Geolocation from '@react-native-community/geolocation';
import {_getWeatherByLocation} from '../../services/weatherServices';
import {useSelector, useDispatch} from 'react-redux';
import {storeWeather, updatelocation} from '../../store/actions';

export default function WelcomeScreen() {
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

      if (isGranted) {
        getCurrentLocation();
      }
    }
    checkForPermissions();
  }, []);

  useEffect(() => {
    async function getWeatherDetails() {
      setLoading(true);
      console.log('getWeatherDetails', location);
      let weather = await _getWeatherByLocation(location);
      console.log('_getWeatherByLocation', weather);
      setLoading(false);
      getWeather(weather);
      // setWeather(weatherResponse);
    }
    getWeatherDetails();
  }, [location]);

  function getCurrentLocation() {
    Geolocation.getCurrentPosition(location => {
      getLocation(location);
    });
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
      return <Text style={styles.heading}>Loading</Text>;
    } else if (!weather) {
      return <Text style={styles.heading}>Couldn't get current location</Text>;
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            navigate('Detail');
          }}>
          <Text style={styles.heading}>{` ${weather.name},`}</Text>
          <Text style={styles.heading}>{` ${weather.sys.country}`}</Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <ImageBackground
      source={require('assets/imgs/bg.png')}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            getCurrentLocation();
          }}>
          <Image
            style={styles.closeImg}
            source={require('assets/imgs/close.png')}
          />
        </TouchableOpacity>

        <View style={styles.liveButton}>
          <Text style={styles.liveButtonText}>Live</Text>
        </View>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.currentLocationBox}>
          <Image
            style={styles.currentLocationBoxImg}
            source={require('assets/imgs/mark.png')}
          />
          <Text style={styles.currentLocationBoxText}>CURRENT LOCATION</Text>
        </TouchableOpacity>

        {renderLocation()}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(15),
    marginBottom: moderateScale(110),
  },
  closeImg: {
    height: moderateScale(17),
    width: moderateScale(17),
  },
  liveButton: {
    backgroundColor: color.palette.ThemePink,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
    borderRadius: moderateScale(7),
  },
  liveButtonText: {
    color: color.palette.white,
    fontSize: moderateScale(12),
  },
  content: {
    paddingHorizontal: moderateScale(10),
  },
  currentLocationBox: {
    borderRadius: moderateScale(7),
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingVertical: moderateScale(7),
    paddingHorizontal: moderateScale(15),
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginBottom: moderateScale(40),
  },
  currentLocationBoxImg: {
    height: moderateScale(15),
    width: moderateScale(20),
    resizeMode: 'contain',
  },
  currentLocationBoxText: {
    color: color.palette.white,
    fontSize: moderateScale(12),
    marginLeft: moderateScale(5),
  },
  heading: {
    color: color.palette.white,
    fontSize: moderateScale(35),
  },
});
