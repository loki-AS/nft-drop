import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

const NFTDrop = () => {

  // auth
  const connectwithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  console.log(address)

  return (
    <div className='flex h-screen scrollbar flex-col lg:grid lg:grid-cols-10'>
      
      <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4 rounded-b-3xl lg:rounded-bl-none  lg:rounded-r-3xl'>
        <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
          <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
          <img 
          className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
          src="https://wallpapercave.com/dwp2x/wp10537276.png" 
          alt="nft" 
          />            
          </div>
        <div className='text-center p-5 space-y-2'>
          <h1 className='text-4xl font-bold text-white'>New Age Apes</h1>
          <h2 className='text-xl text-gray-300'>A collection of New Age Apes who lives</h2>
        </div>
        </div>
      </div>

      <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
        <header className='flex items-center justify-between'>
          <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The <span className='font-extrabold uppercase underline decoration-pink-600/50'>Apes</span> NFT Market Place</h1>

          <button 
          onClick={() => address ? disconnect() : connectwithMetamask()}
          className='rounded-full bg-rose-500 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>
          {address ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className='my-2 bg-gray-100' />

        {address && (
          <p className='text-center text-sm text-rose-400'>You're logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>
        )}

        <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
          <img 
          className='w-80 object-cover pb-10 lg:h-40'
          src="https://links.papareact.com/bdy" alt="bg" />

          <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The Ape Coding Club | NFT Drop</h1>

          <p className='pt-2 text-xl text-green-500'>13 / 21 NFT's claimed</p>
        </div>

        <div>
          <button className='h-16 bg-rose-500 w-full text-white rounded-full mt-2 font-md'>Mint NFT (0.01 ETH)</button>
        </div>
      </div>
    </div>
  )
}

export default NFTDrop