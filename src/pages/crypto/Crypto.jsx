import React, { useEffect, useState } from 'react'
import Currency from './cryptoComponents/Currency'
import Graphics from './cryptoComponents/Graphics'
import CardsFlow from './cryptoComponents/CardsFlow'
import News from './cryptoComponents/News'
import CryptoFooter from './cryptoComponents/CryptoFooter'
import { Link } from 'react-router-dom'


const Crypto = ({setShowNavBar, ...props}) => {
    const api = import.meta.env.VITE_APP_API_URL
    const [products, setProducts] = useState([])
    const [currencyData, setCurrencyData] = useState()

    const handleCurrencyData = (data) => {
      setCurrencyData(data)
    }

  useEffect(()=>{
    // fetchProducts()

    setShowNavBar(false)
  }, [setShowNavBar])


  return (
    <div className='crypto-page min-h-screen'>
      <Link to='/'>
        <div className='absolute ml-[90%] text-sm text-[#F28500]' onClick={()=>setShowNavBar(true)}>Back to main site</div>
      </Link>
      <Currency 
      handleCurrencyData={handleCurrencyData}
      currencyData={currencyData}
      />
      <CardsFlow currencyData={currencyData}/>
      <News 
        currencyData={currencyData}
        products={products}/>
      <CryptoFooter/>
    </div>
  )
}

export default Crypto
