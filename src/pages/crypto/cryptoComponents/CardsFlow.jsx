import React, { useEffect } from 'react'
import { project_files } from '../../../constants/ProjectFiles'
import { Link } from 'react-router-dom'


const CardsFlow = ({currencyData}) => {

    useEffect(()=>{
    })
  return (
    currencyData ? (
    <div>
        <div className='head-text flex flex-col items-center justify-center crypto-page'>
            Top-Rated NFTs today: 
        </div>
    
    <div className='w-auto h-auto flex flex-col justify-between ml-[15%]'>
        {currencyData.nfts.map((nft)=>(
            <div key={nft.id} className='nft-box text-sm'>
                <div className='w-[50px] h-[50px] m-auto ml-1 mr-2 justify-between'>
                <Link to={`https://www.google.com/search?q=${nft.id}`}><img src={nft.thumb} alt='nft image' /></Link>
                </div> 
                <div className='m-auto w-[200px]'>
                    Name: <p className='m-auto text-[#F28500] text-bold'>{nft.name}</p>
                </div>
                <div className='m-auto w-[100px]'>
                    Price: <p className='text-[#F28500]'>{nft.data.floor_price}</p>
                </div>
                <div className='m-auto w-[100px]'>
                    Av 24h price: <p className='text-[#F28500]'>{nft.data.h24_average_sale_price}</p>
                </div>
                <div className='mt-[20px] p-2 w-[150px]'>
                    <img src={nft.data.sparkline}/>
                </div>
                <div className='m-auto w-[150px]'>
                    Floor 24h change %
                    <p className='text-[#F28500]'>{nft.floor_price_24h_percentage_change.toFixed(2)}</p>
                </div>
            </div>
        ))}
    </div>
    </div>)
    : <div>Loading...</div>
  ) 
}

export default CardsFlow
