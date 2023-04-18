'use client';

import { createSlice } from '@reduxjs/toolkit';

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
		favCat: (state) => {
			state.cat = { ...state.cat, favourite: 'true' }
		}
	},  
})

export const { saveCat, favCat } = detailSlice.actions;

export default detailSlice.reducer;