import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify'

const Currency = ({handleCurrencyData, ...props}) => {
    const [coins, setCoins] = useState([])
    const [loadCoins, setLoadCoins] = useState([])
    const [query, setQuery] = useState('')
    const queryRef = useRef()



    const fetchCoins = async() => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
            const data = await response.json();
            setCoins(data.coins.map(coin=>{
                return {
                    id: coin.item.id,
                    name: coin.item.name,
                    image: coin.item.large,
                    price: coin.item.price_btc,
                    market_cap_rank: coin.item.market_cap_rank
                }
            }))
            handleCurrencyData(data);
        } catch (error) {
            setCoins(coins)
        }
    }

    const searchCoins = async() => {
    try {
        if (query.length > 2){
        const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`);
        const data = await response.json();
        setCoins(data.coins.map(coin=>{
            return {
                id: coin.id,
                name: coin.name,
                image: coin.large,
                price: '---',
                market_cap_rank: coin.market_cap_rank
            }}
        ))}else{
            console.log('PROCESS STOPPED')
            setCoins(loadCoins)
        }
    } catch (error) {
        console.error('Error fetching coin', error)
    }}

    useEffect(()=>{
        fetchCoins()
        setLoadCoins(coins)
    }, [])

  return (
    <div className='crypto-page'>
        <div className='flex justify-center items-center'>
            <div className='head-text flex flex-col items-center justify-center crypto-page'>
                <p>Explore the cryptoeconomy</p>
                <p className='text-sm'>Here & Now</p>
                <span className='text-sm'>Click Coin Name for details</span>
            </div>
        </div>
    <div className='search flex flex-row justify-end '>
      <input className='search-input' ref={queryRef} type='text' onChange={()=>
        setQuery(queryRef.current.value)
        }/>
      <button className='search-btn' onClick={()=>searchCoins()}>Search</button>
    </div>
        <table className='table w-[90%]'>
            <thead>
                <tr>
                    <th> </th>
                    <th>Coin </th>
                    <th>Rank</th>
                    <th>Price</th> 
                </tr>
            </thead>
            <tbody>
                {coins.map((coin)=>(
                    <tr key={coin.id}>
                        <td className='flex justify-center '>
                            <img src={coin.image} className='coin_image' alt={coin.name}/>
                        </td>
                        <td>
                        <Link className='text-bold' to={`${coin.id}`}>
                            {coin.name}
                        </Link>
                        </td> 
                        <td>
                            {coin.market_cap_rank}
                        </td>
                        <td>
                            {coin.price}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      
      <div className='flex flex-wrap justify-around'>

      </div>
    </div>
  )
}

export default Currency
