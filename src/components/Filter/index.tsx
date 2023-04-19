import { filter, filterFavs, filterNonFavs, reset } from '@/store/features/list/slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getBreeds, getFilterData } from '@/utils/filter';
import React from 'react';

import { FilterStyled, Item } from './styles';

const Filter = () => {
  const dispatch = useAppDispatch();
  const { cats, catsFiltered } = useAppSelector(state => state.list);

  const array = catsFiltered.length > 0 ? catsFiltered : cats;

  const breeds = getBreeds(array);
  const origin = getFilterData(array, 'origin');
  const weight = getFilterData(array, 'weight');
  const lifespan = getFilterData(array, 'life_span');

  const change = (type, value, isBreed = false) => {
    dispatch(filter({ type, value, isBreed }))
  }

  const filterByFav = (e) => {
    e.target.checked ? dispatch(filterFavs()) : dispatch(filterNonFavs())
  }

  return (
    <FilterStyled>
      <Item>
        <label htmlFor='breed'>Select Breed</label>
        <select name='breed' id='breed' onChange={(e) => change('breed', e.target.value, true)}>
          <option>select</option>
          {breeds.map(item => <option value={item[0]} key={item[0]}>{item[0]}</option>)}
        </select>
      </Item>
      <Item>
        <label htmlFor='origin'>Select Origin</label>
        <select name='origin' id='origin' onChange={(e) => change('origin', e.target.value)}>
          <option>select</option>
          {origin.map(item => <option value={item[0]} key={item[0]}>{item[0]}</option>)}
        </select>
      </Item>
      <Item>
        <label htmlFor='weight'>Select weight</label>
        <select name='weight' id='weight' onChange={(e) => change('weight', e.target.value)}>
          <option>select</option>
          {weight.map(item => <option value={item[0]} key={item[0]}>{item[0]}</option>)}
        </select>
      </Item>
      <Item>
        <label htmlFor='lifespan'>Select Lifespan</label>
        <select name='lifespan' id='lifespan' onChange={(e) => change('life_span', e.target.value)}>
          <option>select</option>
          {lifespan.map(item => <option value={item[0]} key={item[0]}>{item[0]}</option>)}
        </select>
      </Item>
      <Item>
        <label htmlFor='fav'>Favorites</label>
        <input type='checkbox' id='fav' name='fav' onChange={(e) => filterByFav(e)} />
      </Item>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </FilterStyled>
  );
}

export default Filter;