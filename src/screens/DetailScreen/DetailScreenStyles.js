import {StyleSheet} from 'react-native';
import {color} from '../../theme';
import {moderateScale} from 'react-native-size-matters';

export const DetailStyle = StyleSheet.create({
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
