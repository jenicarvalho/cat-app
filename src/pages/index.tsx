import Card from '@/components/Card'
import List from '@/components/List'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat App</title>
      </Head>
      <List>
        <Card />
        <Card />
        <Card />
        <Card />
      </List>
    </>
  )
}
