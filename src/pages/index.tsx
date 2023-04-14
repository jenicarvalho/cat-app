import axios from 'axios'
import { GetStaticProps } from 'next';
import Head from 'next/head';

import Card from '@/components/Card';
import Filter from '@/components/Filter';
import Container from '@/components/Container';
import Sort from '@/components/Sort';
import { save } from '@/store/features/list/slice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';
import { normalizeData } from '@/utils/normalize';

export default function Home({ cats }: any) {

  const catsList = useAppSelector(state => state.list.cats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dataNormalized = normalizeData(cats)
    dispatch(save(dataNormalized))
  }, [])

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
        {catsList && catsList.map((cat: any) => (
          <Card content={cat} key={cat.id} />
        ))}
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `&sub_id=cat-app&has_breeds=1&order=asc&limit=200&api_key=${process.env.API_KEY}`;
  const response = await axios.get(`${process.env.API_URL}/search?${query}`);

  return {
    props: {
      cats: response.data
    },
    revalidate: 60 * 30 // 30 minutes,
  }
}

