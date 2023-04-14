'use client';

import { createSlice, current } from '@reduxjs/toolkit';

export interface SortState {
	cat: any,
};

const initialState: SortState = {
	cat: {},
};

export const detailSlice = createSlice({
	name: 'detail',
	initialState,
	reducers: {
		saveCat: (state, action) => { state.cat = action.payload },
	},  
})

export const { saveCat } = detailSlice.actions;

export default detailSlice.reducer;