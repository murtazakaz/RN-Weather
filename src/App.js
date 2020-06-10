import React, {useEffect} from 'react';
import {View, Button, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';

enableScreens();

import {store, persistor} from './store/store';
import {Text} from './components';
import AppContainer from './navigation/rootNavigation';
import {PersistGate} from 'redux-persist/integration/react';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        <Text text="Home Screen" />
        <Button
          title="details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen!!</Text>
      </View>
    );
  }
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <AppContainer />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
