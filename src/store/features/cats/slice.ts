'use client';

import { createSlice, current } from '@reduxjs/toolkit';

export interface SortState {
    catsList: any[] | any
}

const initialState: SortState = {
    catsList: []
}

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        save: (state, action) => { state.catsList = action.payload },
        sort: (state, action) => {
            const array = [...current(state.catsList)]
            state.catsList = array.sort((a, b) => a.breeds[action.payload].localeCompare(b.breeds[action.payload]))
        }
    }
})

export const { save, sort } = catsSlice.actions;

export default catsSlice.reducer;