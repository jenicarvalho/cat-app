'use client';

import { CatTypeDetail } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export interface DetailState {
	cat: CatTypeDetail | any,
};

const initialState: DetailState = {
	cat: {
		breeds: [],
		id: '',
		url: '',
		width: 0,
		height: 0,
	},
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