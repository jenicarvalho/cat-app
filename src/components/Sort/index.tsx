import React from 'react';

import { SortStyled } from './styles';

import { sort } from '@/store/features/cats/slice';
import { useAppDispatch } from '@/store/hooks';

const Sort = () => {

  const dispatch = useAppDispatch();

  const sortData = (sortBy: string) => {
    dispatch(sort(sortBy))
  }

  return (
    <SortStyled>
      <label htmlFor='sort'>Sort items by</label>
      <select name='sort' id='sort' onChange={(e) => sortData(e.target.value)}>
        <option value='name'>Name/Breed</option>
        <option value='life_span'>Lifespan</option>
        <option value='origin'>Origin</option>
        <option value='weight'>Weight</option>
      </select>
    </SortStyled>
  );
}

export default Sort;