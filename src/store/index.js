import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice';
import roomSlice from './reducers/roomSlice';
import messageHistory from './reducers/messageHistory';


const reducer = combineReducers({
  user: userReducer,
  room:roomSlice,
  messages:messageHistory
  // Add other reducers as needed
});


const store = configureStore({
    reducer: reducer,
  })

export default store;
