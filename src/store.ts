
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { inputReducer } from './redux/features/inputSlice'
import { musicReducer } from './redux/features/musicSlice'

import { rootSaga } from './redux/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();



export const store = configureStore({
  reducer: {
    music: musicReducer,
    inputMusic: inputReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

