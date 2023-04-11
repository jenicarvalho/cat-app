import React from 'react';

import { SortStyled } from './styles';

const Sort = () => {

  return (
    <SortStyled>
      <label htmlFor='sort'>Sort items by</label>
      <select name='sort' id='sort'>
        <option value='name'>Name (asc.)</option>
        <option value='breed'>Breed</option>
        <option value='origin'>Origin</option>
        <option value='weight'>Weight</option>
      </select>
    </SortStyled>
  );
}

export default Sort;