import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '@/slices/employeeSlice';

const reducer = {
  employees: employeeReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
