import React, {Component, useState, useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import {DetailStyle} from './DetailScreenStyles';
import moment from 'moment';
const weatherStatus = CurrentWether => {
  switch (CurrentWether) {
    case 'weather-mostly-cloud':
      return require('assets/imgs/weather_mostly_cloud_medium.png');
    case 'weather-clouds':
      return require('assets/imgs/weather-clouds_medium.png');
    case 'weather-cloud-thunder-rain':
      return require('assets/imgs/weather-cloud-thunder-rain_medium.png');
    case 'weather-sun':
      return require('assets/imgs/weather-sun_medium.png');
    default:
      return require('assets/imgs/weather-sun_medium.png');
  }
};

export function RenderByWeatherTypes(daily, index) {
  let {item} = daily.data;
  let src = weatherStatus('weather-sun');
  console.log('renderByWeatherTypes', index);
  return (
    <View
      style={[
        DetailStyle.wetherDetail,
        {backgroundColor: 'rgba(255, 255, 255, 0.1)'},
      ]}>
      <View style={DetailStyle.wetherDetail}>
        <Text style={DetailStyle.wetherTimeText}>
          {moment().format('hh:mm')}
        </Text>
        <Image style={DetailStyle.wetherImg} source={src} />
        <Text style={DetailStyle.wetherTemperature}>{`${item.temp.day}`}</Text>
      </View>
    </View>
  );
}
