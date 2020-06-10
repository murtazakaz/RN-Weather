import {Platform} from 'react-native';
import Toast from 'react-native-tiny-toast';

export const showToast = msg => {
  if (Platform.OS === 'ios') {
    Toast.show(msg, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
    });
  } else {
    Toast.show(msg, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
    });
  }
};
