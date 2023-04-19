import React, { useEffect } from 'react';
import Head from 'next/head';
import Container from '@/components/Container';
import DetailInfo from '@/components/DetailInfo';
import { GetServerSideProps } from 'next/types';
import axios from 'axios';
import { useAppDispatch } from '@/store/hooks';
import { normalizeData } from '@/utils/normalize';
import { saveCat } from '@/store/features/detail/slice';

export default function Detail({ cat }: any) {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const dataNormalized = normalizeData([cat])
    dispatch(saveCat(dataNormalized[0]))
  }, [])

  return (
    <>
      <Head>
        <title>Detail | Cat App</title>
      </Head>

      <Container plain>
        <DetailInfo />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  // it doesnt not return fav thats why the ?fav=bool
  const response = await axios.get(`https://api.thecatapi.com/v1/images/${context.query.id}?sub_id=cat-app2&include_favourite=1`);

  return {
    props: {
      cat: response.data
    }
  }
}