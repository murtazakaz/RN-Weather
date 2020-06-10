import React, {Component} from 'react';
import {Text, View, ImageBackground, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import {color} from '../../theme';
//
export default class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('assets/imgs/bg.png')}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={styles.closeImg}
              source={require('assets/imgs/close.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.liveButton} onPress={() => {}}>
            <Text style={styles.liveButtonText}>Live</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.currentLocationBox}>
            <Image
              style={styles.currentLocationBoxImg}
              source={require('assets/imgs/mark.png')}
            />
            <Text style={styles.currentLocationBoxText}>CURRENT LOCATION</Text>
          </View>
          <View>
            <Text style={styles.heading}>New York,</Text>
            <Text style={styles.heading}>United States</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
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
