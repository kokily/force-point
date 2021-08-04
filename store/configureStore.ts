import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import rootReducer from './modules';
import rootSaga from '../saga';

interface SagaStore extends Store {
  sagaTask?: Task;
}

const isDev = process.env.NODE_ENV === 'development';

const store = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: isDev,
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(store, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
