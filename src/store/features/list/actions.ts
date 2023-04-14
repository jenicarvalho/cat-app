'use client';

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const catFavorited = createAsyncThunk(
	'cats/favorite', async (id: string) => {
		try {
			
			const url = 'https://api.thecatapi.com/v1/favourites'
			await axios.post(url, 
					{ image_id: id, sub_id: 'cat-app' },
					{ headers: {
						'x-api-key': 'live_soU1pvzkkB27t1iGJvPjwiE4Ue5THViNRwPnXJlTjzGAc9jpSWrm9J3O61h8Xuqa'
					}}
				);
			return id
		} catch (error) {
				return error
		}
});

export const addFavoritedToState = (state, id) => {
	return state.map((item: any) => {
		return item.id === id ? { ...item, favourite: 'true' } : { ...item }
	})
}

export const sortCats = (array, orderBy) => {
	return array.sort((a, b) => a.breeds[orderBy].localeCompare(b.breeds[orderBy]))
}