import axios from 'axios'

import Card from '@/components/Card';
import Filter from '@/components/Filter';
import Container from '@/components/Container';
import Sort from '@/components/Sort';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

export default function Home({ cats }: any) {

  return (
    <>
      <Head>
        <title>Cat App</title>
      </Head>

      <Container plain>
        <Filter />
        <Sort />
      </Container>

      <Container grid>
        {cats && cats.map((cat: any) => (
          <Card content={cat} key={cat.id} />
        ))}
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `has_breeds=1&order=asc&limit=20&api_key=${process.env.API_KEY}`;
  const response = await axios.get(`${process.env.API_URL}${query}`);

  return {
    props: {
      cats: response.data
    }
  }
}

