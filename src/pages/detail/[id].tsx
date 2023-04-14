import React, { useEffect } from 'react';
import Head from 'next/head';
import Container from '@/components/Container';
import DetailInfo from '@/components/DetailInfo';
import { GetServerSideProps } from 'next/types';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { normalizeData } from '@/utils/normalize';
import { saveCat } from '@/store/features/detail/slice';

export default function Detail({ cat }: any) {

  const { detail } = useAppSelector(state => state);
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
        {cat && <DetailInfo content={detail?.cat} />}
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const response = await axios.get(`${process.env.API_URL}/${context.query.id}?sub_id=cat-app&include_favourite`);

  return {
    props: {
      cat: response.data
    }
  }
}