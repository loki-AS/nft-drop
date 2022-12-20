import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-2xl text-red-500'>Hello</h1>
    </div>
  )
}

export default Home
