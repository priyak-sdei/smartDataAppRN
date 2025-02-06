import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore, Middleware} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistPartial} from 'redux-persist/es/persistReducer';
import {clientApi} from '../rtkAPI/clientAPI';
import counterSlice from '../slices/counterSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    //   whitelist: ['auth', 'config'],
};

const rootReducer = combineReducers({
    counter: counterSlice,
    [clientApi.reducerPath]: clientApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware: Middleware[] = [clientApi.middleware];

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }).concat(middleware),
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

export {persistor, store};
export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
export type AppDispatch = typeof store.dispatch;
