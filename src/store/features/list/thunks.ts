'use client';

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// add fav
export const addCatFavorited = createAsyncThunk(
	'cats/AddFavorite', async (id: string) => {
		try {
			const url = 'https://api.thecatapi.com/v1/favourites'
			await axios.post(url, 
					{ image_id: id, sub_id: 'cat-app' },
					{ headers: {'x-api-key': 'live_soU1pvzkkB27t1iGJvPjwiE4Ue5THViNRwPnXJlTjzGAc9jpSWrm9J3O61h8Xuqa'}}
				);
			
			const params = new URLSearchParams(window.location.search);

			if(params.has('fav')){
					params.set('fav', 'true');
					window.history.replaceState({}, '', `${location.pathname}?${params}`);
				}

			return id
		} catch (error) {
				return error
		}
});
 
// delete fav
export const removeCatFavorited = createAsyncThunk(
	'cats/removeFavorite', async (id: string) => {
		try {
			const url = `https://api.thecatapi.com/v1/favourites/${id}`
			await axios.delete(url, 
					{ headers: {'x-api-key': 'live_soU1pvzkkB27t1iGJvPjwiE4Ue5THViNRwPnXJlTjzGAc9jpSWrm9J3O61h8Xuqa'}}
				);
			
			const params = new URLSearchParams(window.location.search);

			if(params.has('fav')){
					params.set('fav', 'false');
					window.history.replaceState({}, '', `${location.pathname}?${params}`);
				}

			return id
		} catch (error) {
				return error
		}
});