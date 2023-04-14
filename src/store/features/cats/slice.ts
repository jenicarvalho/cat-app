'use client';

import { createSlice, current } from '@reduxjs/toolkit';
import { addFavoritedToState, catFavorited, sortCats } from './actions';

export interface SortState {
	catsList: any[] | any,
	status?: string
};

const initialState: SortState = {
	catsList: [],
	status: ''
};

export const catsSlice = createSlice({
	name: 'cats',
	initialState,
	reducers: {
		save: (state, action) => { state.catsList = action.payload },
		sort: (state, action) => {
			const array = [...current(state.catsList)]
			state.catsList = sortCats(array, action.payload)
		},
	},
	extraReducers: (builder) => {
			builder.addCase(catFavorited.pending, (state: SortState) => {
				state.status = "loading";
			});
			builder.addCase(
					catFavorited.fulfilled, (state: SortState, action) => {
						state.catsList = addFavoritedToState(state.catsList, action.payload)
						state.status = "loaded";
			});
			builder.addCase(
					catFavorited.rejected, (state: SortState) => {
						state.status = "failed";
						
			});
		}    
})

export const { save, sort } = catsSlice.actions;

export default catsSlice.reducer;