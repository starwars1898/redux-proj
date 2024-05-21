import { configureStore } from '@reduxjs/toolkit'
import { menuReducer } from '../pages/home/reducer'

export const store = configureStore({
    reducer: {
        main: menuReducer
    }
})

export default store