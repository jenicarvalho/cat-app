'use client';

import { createSlice, current } from '@reduxjs/toolkit';
import { addFavoritedToListState, addCatFavorited, removeCatFavorited, sortCats, removeFavoritedToListState } from './actions';

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
			builder.addCase(addCatFavorited.pending, (state: SortState) => {
				state.status = "loading";
			});
			builder.addCase(
					addCatFavorited.fulfilled, (state: SortState, action) => {
						state.cats = addFavoritedToListState(state.cats, action.payload)
						state.status = "loaded";
			});
			builder.addCase(removeCatFavorited.pending, (state: SortState) => {
				state.status = "loading";
			});
			builder.addCase(
					removeCatFavorited.fulfilled, (state: SortState, action) => {
						state.cats = removeFavoritedToListState(state.cats, action.payload)
						state.status = "loaded";
			});
		}    
})

export const { save, sort } = catsSlice.actions;

export default catsSlice.reducer;