import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import monitoringReducer from './monitoring/monitoring.reducer';
import AppApiReducer from './app_api/app_api.reducer';
import LoaderReducer from './loader/loader.reducer';
// import cartReducer from './cart/cart.reducer';
// import directoryReducer from './directory/directory.reducer';
// import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  user: userReducer,
  monitoring:monitoringReducer,
  app_api:AppApiReducer,
  loader:LoaderReducer
});

export default persistReducer(persistConfig, rootReducer);