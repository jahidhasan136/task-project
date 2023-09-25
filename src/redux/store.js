import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './Features/Tasks/tasksSlice';

const store = configureStore({
    reducer: {
        tasksSlice: tasksSlice,
    },
})


export default store;