import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterTerm(state, action) {
            return action.payload
        }
    },
})

export const { filterTerm } = filterSlice.actions
export default filterSlice.reducer