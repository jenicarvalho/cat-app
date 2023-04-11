import React from 'react';

import { FilterStyled, Item } from './styles';

const Filter = () => {

  return (
    <FilterStyled>
      <Item>
        <label htmlFor='breed'>Select Breed</label>
        <select name='breed' id='breed'>
          <option>select</option>
          <option value='persa'>Persa</option>
          <option value='viralata'>Vira lata</option>
        </select>
      </Item>
      <Item>
        <label htmlFor='origin'>Select Origin</label>
        <select name='origin' id='origin'>
          <option>select</option>
          <option value='brazil'>Brazil</option>
          <option value='argentina'>Argentina</option>
        </select>
      </Item>
      <Item>
        <label htmlFor='weight'>Select weight</label>
        <input type='range' id='weight' name='weight' min='3' max='100' value='5' step='5' />
      </Item>
      <Item>
        <label htmlFor='age'>Select age</label>
        <input type='range' id='age' name='age' min='3' max='40' value='5' step='5' />
      </Item>
      <Item>
        <label htmlFor='fav'>Favorites</label>
        <input type='checkbox' id='fav' name='fav' />
      </Item>
      <button>Apply</button>
    </FilterStyled>
  );
}

export default Filter;