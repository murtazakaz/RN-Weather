import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import SQLiteStorage from 'redux-persist-sqlite-storage';
import SQLite from 'react-native-sqlite-storage';

const config = {
  name: 'enc123',
  location: 'default',
};

const storeEngine = SQLiteStorage(SQLite, config);

const persistConfig = {
  key: 'root',
  storage: storeEngine,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
