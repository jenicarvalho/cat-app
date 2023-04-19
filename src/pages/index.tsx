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
import { CatTypeDetail, CatTypes } from '@/types';
const Card = lazy(() => import('../components/Card'));

type Props = {
  cats: CatTypes
}

export default function Home({ cats }: Props) {

  const { cats: catsList, catsFiltered } = useAppSelector(state => state.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dataNormalized = normalizeData(cats)
    dispatch(save(dataNormalized))
  }, [])

  const showCards = (item: CatTypeDetail) => (
    <Suspense fallback={<Loader />} key={item.id}>
      <Card content={item} />
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
  const response = await axios.get(`https://api.thecatapi.com/v1/images/search?&sub_id=cat-app2&has_breeds=1&order=asc&limit=400&api_key=live_soU1pvzkkB27t1iGJvPjwiE4Ue5THViNRwPnXJlTjzGAc9jpSWrm9J3O61h8Xuqa`);

  return {
    props: {
      cats: response.data
    },
    revalidate: 60 * 30 // 30 minutes,
  }
}

