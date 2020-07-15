import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './root-reducer';

export default function configureStore() {
  const composeEnhancers =
    (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const middlewares = [ReduxThunk];
  const enhancers = [applyMiddleware(...middlewares)];

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['app'],
  };
  const pReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(pReducer, composeEnhancers(...enhancers));

  const persistor = persistStore(store);

  return {store, persistor};
}
