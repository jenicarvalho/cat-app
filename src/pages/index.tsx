import axios from 'axios'
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { lazy, Suspense, useEffect } from 'react';

import Filter from '@/components/Filter';
import Container from '@/components/Container';
import Sort from '@/components/Sort';
import { save } from '@/store/features/list/slice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { normalizeData } from '@/utils/normalize';
import Loader from '@/components/Loader';

const Card = lazy(() => import('@/components/Card'));

export default function Home({ cats }: any) {

  const { cats: catsList, catsFiltered } = useAppSelector(state => state.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dataNormalized = normalizeData(cats)
    dispatch(save(dataNormalized))
  }, [])

  const showCards = (item) => (
    <Suspense fallback={<Loader />}>
      <Card content={item} key={item.id} />
    </Suspense>
  )

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
        {catsFiltered.length > 0 ?
          catsFiltered.map((item: any) => showCards(item)) :
          catsList && catsList.map((item: any) => showCards(item))
        }
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `&sub_id=cat-app&has_breeds=1&order=asc&limit=400&api_key=${process.env.API_KEY}`;
  const response = await axios.get(`${process.env.API_URL}/search?${query}`);

  return {
    props: {
      cats: response.data
    },
    revalidate: 60 * 30 // 30 minutes,
  }
}

