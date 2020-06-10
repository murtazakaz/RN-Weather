import {StyleSheet} from 'react-native';
import {color} from '../../theme';
import {moderateScale} from 'react-native-size-matters';

export const HomeStyles = StyleSheet.create({
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
