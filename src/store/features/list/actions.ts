'use client';

import { CatTypeDetail } from "@/types";

export const addFavoritedToListState = (state, id) => {
	return state.map((item: CatTypeDetail) => {
		return item.id === id ? { ...item, favourite: 'true' } : { ...item }
	})
}
export const removeFavoritedToListState = (state, id) => {
	return state.map((item, { favourite, ...rest }) => { 
		return item.id === id ? { ...rest } : { ...item }
	})
}

export const sortCats = (array, orderBy) => {
	return array.sort((a, b) => a.breeds[orderBy].localeCompare(b.breeds[orderBy]))
}

export const filterCats = (array, filter) => {
	return filter.isBreed ? 
		array.filter(item => item.breeds.name === filter.value) :
		array.filter(item => item.breeds[filter.type] === filter.value)
}

export const filterFavCats = (array) => {
	return array.filter(item => item.favourite !== undefined)
}