// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // Optionally configure middleware, dev tools, etc.
});

export default store;
