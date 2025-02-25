import {combineReducers, configureStore, Middleware} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistPartial} from 'redux-persist/es/persistReducer';
import {clientApi} from '../rtkAPI/clientAPI';
import counterSlice from '../slices/counterSlice';
import {reduxPersistStorage} from 'src/utils/storage';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Reactotron} from 'src/devtools/ReactotronClient';

const persistConfig = {
    key: 'root',
    storage: reduxPersistStorage,
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
    enhancers: getDefaultEnhancers =>
        __DEV__ ? getDefaultEnhancers().concat(Reactotron.createEnhancer()) : getDefaultEnhancers(),
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

export {persistor, store};
export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
