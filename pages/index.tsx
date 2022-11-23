import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Trending from '../components/Trending/trending'
import MainTable from '../components/krypto-table/mainTable'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
    <Header />
    <div className='mt-10' />
     <Trending /> 
    <div className='mt-20' />
    <MainTable />
  </div>
  )
}

export default Home
