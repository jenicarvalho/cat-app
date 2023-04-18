'use client';

import { createSlice, current } from '@reduxjs/toolkit';
import { addFavoritedToListState, filterCats, filterFavCats, removeFavoritedToListState, sortCats } from './actions';
import { addCatFavorited, removeCatFavorited } from './thunks';

export interface SortState {
	cats: any[] | any,
	catsFiltered: any[],
	status?: string
};

const initialState: SortState = {
	cats: [],
	catsFiltered: [],
	status: ''
};

const getState = (state) => {
	const cats = [...current(state.cats)];
	const catsFiltered = [...current(state.catsFiltered)];
	return catsFiltered.length > 0 ? catsFiltered : cats;
}

export const catsSlice = createSlice({
	name: 'cats',
	initialState,
	reducers: {
		save: (state, action) => { state.cats = action.payload },
		sort: (state, action) => {
			state.cats = sortCats(getState(state), action.payload);
		},
		filter: (state, action) => {
			state.catsFiltered = filterCats(getState(state), action.payload);
		},
		filterFavs: (state) => {
			state.catsFiltered = filterFavCats(getState(state));
		},
		filterNonFavs: (state) => {
			const cats = [...current(state.cats)];
			state.catsFiltered = cats.filter(item => item.favourite === undefined)
		},
		reset: (state) => {
			state.catsFiltered = []
		}
	},
	extraReducers: (builder) => {
			builder.addCase(
					addCatFavorited.fulfilled, (state: SortState, action) => {
						state.cats = addFavoritedToListState(state.cats, action.payload)
						state.status = "loaded";
			});
			builder.addCase(
					removeCatFavorited.fulfilled, (state: SortState, action) => {
						state.cats = removeFavoritedToListState(state.cats, action.payload)
						state.status = "loaded";
			});
		}    
});

export const { save, sort, filter, filterFavs, filterNonFavs, reset } = catsSlice.actions;

export default catsSlice.reducer;