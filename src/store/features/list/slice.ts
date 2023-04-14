'use client';

import { createSlice, current } from '@reduxjs/toolkit';
import { addFavoritedToState, catFavorited, sortCats } from './actions';

export interface SortState {
	cats: any[] | any,
	status?: string
};

const initialState: SortState = {
	cats: [],
	status: ''
};

export const catsSlice = createSlice({
	name: 'cats',
	initialState,
	reducers: {
		save: (state, action) => { state.cats = action.payload },
		sort: (state, action) => {
			const array = [...current(state.cats)]
			state.cats = sortCats(array, action.payload)
		},
	},
	extraReducers: (builder) => {
			builder.addCase(catFavorited.pending, (state: SortState) => {
				state.status = "loading";
			});
			builder.addCase(
					catFavorited.fulfilled, (state: SortState, action) => {
						state.cats = addFavoritedToState(state.cats, action.payload)
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