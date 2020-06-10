import {PermissionsAndroid, Platform} from 'react-native';

export const requestAndroidPermission = async () => {
  //
  if (Platform.OS == 'ios') {
  } else {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        // PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        // PermissionsAndroid.PERMISSIONS.SEND_SMS,
        // PermissionsAndroid.PERMISSIONS.READ_SMS,
        // PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
        // PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        // PermissionsAndroid.PERMISSIONS.CAMERA,
        // PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        // PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        // PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]);
      //
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //success
        return true;
      } else {
        //err
        return true;
      }
    } catch (err) {
      return false;
      console.warn(err);
      alert(
        'Please goto settings and allow permission that are required to used HRMS app' +
          err,
      );
    }
  }
};
