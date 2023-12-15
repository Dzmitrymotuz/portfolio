import React from 'react'
import { Link } from 'react-router-dom'

const CryptoFooter = () => {
  return (
    <div className='w-screen h-[100px] align-bottom flex flex-row justify-between bg-[#333333]'>
      <div className='m-auto text-[#EEEEEE]'>All rights reserved. </div>
      <div className='m-auto text-[#EEEEEE]'>Powered by <Link to='https://www.coingecko.com/' target='_blank'><span className='text-[#F28500] text-[20px]'>CoinGeckoAPI</span></Link></div>
    </div>
  )
}

export default CryptoFooter
