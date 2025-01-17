import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import catsReducer from './Cats/catsSlice';
import catsSaga from './Cats/catsSaga';


const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats: catsReducer
  },
  middleware: () => [saga]
});

saga.run(catsSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

