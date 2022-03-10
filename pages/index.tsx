import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {  CurrencyEuroIcon,  HomeIcon, LogoutIcon, UserIcon } from '@heroicons/react/solid';
import { useState } from 'react';

const Home: NextPage = () => {

  const home = {
    jerseyColor: 'bg-white',
    textColor: 'text-black',
    nameColor: 'text-blue-600',
    borderIn: 'border-amber-300',
    borderOut: 'border-blue-600'
  } 
  const away = {
    jerseyColor: 'bg-blue-800',
    textColor: 'text-white',
    nameColor: 'text-white',
    borderIn: 'border-orange-500',
    borderOut: 'border-orange-500'
  } 
  const third = {
    jerseyColor: 'bg-teal-600',
    textColor: 'text-white',
    nameColor: 'text-white',
    borderIn: 'border-black',
    borderOut: 'border-black'
  } 
  const human = {
    jerseyColor: 'bg-black',
    textColor: 'text-white',
    nameColor: 'text-white',
    borderIn: 'border-white',
    borderOut: 'border-white'
  } 
  const [kit, setKit] = useState(home);

  return (
    <div className={`flex h-screen flex-col items-center justify-center w-screen overflow-hidden font-body
    ${kit.jerseyColor} ${kit.textColor}`}>
      <Head>
        <title>Hala Madrid!</title>
        <link rel="icon" href="/MadridReal.png" />
      </Head>

      <header className="flex items-center p-4 space-x-3">
      <nav>
        <div className="flex items-center space-x-4">
          <button 
          onClick={() => setKit(home)}
          className='kit-button'>
            <HomeIcon className="w-8 h-8"/>
            <p className="hidden lg:inline">Home</p>
          </button>
          <button 
          onClick={() => setKit(away)}
          className='kit-button'>
            <LogoutIcon className="w-8 h-8"/>
            <p className="hidden lg:inline">Away</p>
          </button>
        </div>
        </nav>
        
        <div className={`flex justify-center border-b-8 ${kit.borderOut} w-80 rounded-b-full`}>
        <div className={`flex justify-center border-4 ${kit.borderIn} w-80 rounded-b-full rounded-t-3xl p-6`}>
          <Link href="/"><a className="flex flex-col justify-center items-center">
            <img className="w-32" src="/MadridReal.png"/>
            <span className="text-2xl">¡Hala Madrid!</span>
          </a></Link>
        </div>
        </div>

        <nav >
        <div className="flex items-center space-x-3">
          <button 
          onClick={() => setKit(third)}
          className='kit-button'>
            <CurrencyEuroIcon className="w-8 h-8"/>
            <p className="hidden lg:inline">Third</p>
            </button>
          <button 
          onClick={() => setKit(human)}
          className='kit-button'>
            <UserIcon className="w-8 h-8"/>
            <p className="hidden lg:inline">Human</p>
          </button>
        </div>
        </nav>

      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
      <img className="fixed top-1/3 right-2 w-40 md:w-52 lg:w-64" src="/MadridReal.png"/>
      <div className="fixed top-2/3">
      <div className={`flex flex-col items-center justify-center ${kit.nameColor}`}>
        <span className="text-5xl font-bold uppercase">Benzema</span>
        <span className="text-9xl font-bold">9</span>
      </div>
      </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
      <img className="w-20" src="/MadridUcl.png"/>
      </footer>
    </div>
  )
}

export default Home
