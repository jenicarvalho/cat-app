import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from '@/components/Container';
import DetailInfo from '@/components/DetailInfo';

const Detail = () => {

  const { query } = useRouter();

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

export default Detail;