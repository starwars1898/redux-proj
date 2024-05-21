import { MobileMenuModel } from "../../utils/models"
import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    ...MobileMenuModel
}

export const menuReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('ISVISIBLE_TRUE', (state, action) => {
            state.isVisible = true
        })
        .addCase('ISVISIBLE_FALSE', (state, action) => {
            state.isVisible = false
        })
}) 