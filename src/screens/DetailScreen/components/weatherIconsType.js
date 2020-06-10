import React, {Component, useState, useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import {DetailStyle} from '../DetailScreenStyles';
import moment from 'moment';

const weatherStatus = CurrentWether => {
  switch (CurrentWether) {
    case 'broken clouds':
      return require('assets/imgs/weather_mostly_cloud_medium.png');
    case 'overcast clouds':
      return require('assets/imgs/weather-clouds_medium.png');
    case 'light rain':
      return require('assets/imgs/weather-cloud-thunder-rain_medium.png');
    case 'scattered clouds':
      return require('assets/imgs/weather-sun_medium.png');
    case 'clear sky':
      return require('assets/imgs/weather-sun_medium.png');
    default:
      return require('assets/imgs/weather-sun_medium.png');
  }
};

export function RenderByWeatherTypes({data}) {
  let {item, index} = data;
  return (
    <View
      style={[
        DetailStyle.wetherDetail,
        {
          backgroundColor:
            index == 0 ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        },
      ]}>
      <View style={DetailStyle.wetherDetail}>
        <Text style={DetailStyle.wetherTimeText}>
          {moment().format('hh:mm')}
        </Text>
        <Image
          style={DetailStyle.wetherImg}
          source={weatherStatus(
            item.weather.length > 0 ? item.weather[0].description : '',
          )}
        />
        <Text style={DetailStyle.wetherTemperature}>{`${item.temp.day}`}</Text>
      </View>
    </View>
  );
}
