'use client';

import { favCat } from '@/store/features/detail/slice';
import { addCatFavorited, removeCatFavorited } from '@/store/features/list/thunks';
import { useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/router';
import React from 'react';

import { HeartStyled } from './styles';
interface Props {
  favorited: boolean | string,
  id: string
}

const Heart = ({ favorited = false, id }: Props) => {

  const dispatch = useAppDispatch();
  const router = useRouter();
  const { fav } = router.query;

  const isFav = favorited ? favorited : fav;

  const handleClick = () => {
    if (isFav) {
      dispatch(removeCatFavorited(id))
    } else {
      dispatch(addCatFavorited(id))
      dispatch(favCat())
    }
  }

  return (
    <HeartStyled onClick={handleClick} favorited={isFav} />
  );
}

export default Heart;