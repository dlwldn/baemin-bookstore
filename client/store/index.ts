import { configureStore } from '@reduxjs/toolkit';
import reducer from './module';

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
