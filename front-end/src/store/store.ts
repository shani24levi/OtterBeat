import {
  combineReducers,
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import userReducer from './features/user/userSlice';
import songsReducer from './features/songs/songsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  songs: songsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isSerializable = (value: any) => isPlain(false);
const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
});

export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  },
  // middleware: [serializableMiddleware],
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
