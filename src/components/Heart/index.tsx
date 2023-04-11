import React from 'react';

import { HeartStyled } from './styles';

interface Props {
  favorited: boolean
}

const Heart = ({ favorited = false }: Props) => {

  const handleClick = () => {
    console.log('click')
  }

  return (
    <HeartStyled onClick={handleClick} favorited={favorited} />
  );
}

export default Heart;