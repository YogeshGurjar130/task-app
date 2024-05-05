import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import taskReducer from './reducers';

const persistConfig = {
  key: 'task',
  storage,
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);