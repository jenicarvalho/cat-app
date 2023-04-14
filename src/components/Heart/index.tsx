'use client';

import { catFavorited } from '@/store/features/cats/actions';
import { useAppDispatch } from '@/store/hooks';
import React from 'react';

import { HeartStyled } from './styles';
interface Props {
  favorited: boolean,
  id: string
}

const Heart = ({ favorited = false, id }: Props) => {

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(catFavorited(id))
  }

  return (
    <HeartStyled onClick={handleClick} favorited={favorited} />
  );
}

export default Heart;