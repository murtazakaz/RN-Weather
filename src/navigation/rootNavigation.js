import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  LoginContainer,
  CreateAccountContainer,
  WelcomeScreen,
} from '../screens';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Login: {
      screen: LoginContainer,
    },
    CreateAccount: {
      screen: CreateAccountContainer,
      navigationOptions: {
        headerTitle: 'Create Account',
      },
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
