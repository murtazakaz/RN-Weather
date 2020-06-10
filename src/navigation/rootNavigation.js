import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {WelcomeScreen, DetailScreen} from '../screens';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },

    // defaultNavigationOptions: ({navigation}) => {
    //   return {
    //     headerTitle: navigation.state.routeName,
    //   };
    // },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
