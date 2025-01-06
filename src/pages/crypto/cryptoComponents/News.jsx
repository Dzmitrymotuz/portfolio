import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const News = ({currencyData, ...props}) => {
    const [news, setNews] = useState([])
    const apiKey = '31ba2d750b1f47ae834f6cd53329e738'


    const fetchNews = async () => {
        try {
          const response = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=5');
            
          const data = await response.json();
          // console.log(data)
          setNews(data.map((item)=>{
            return {
              id: item.id,
              name: item.name,
              urlToImage: item.image, 
              url: item.url,
              trust_score: item.trust_score,
              year: item.year_established,
              description: item.description,
              country: item.country,
            }
          }));
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      };


    useEffect(()=>{
        fetchNews()
    }, [])

  return (
    <>
    <div className='flex flex-col items-center '>
        <span className='crypto-head-text justify-center'>Top-5 places to buy currency today</span>
      </div>
    <div className='w-[92%] h-auto m-auto flex flex-row align-bottom justify-center'>
      <div className='parent-container-news'>
      {news.map((item, index)=>(
        <div key={index} className='news-block'>
            <div className='h-[90%]'>
                {item.urlToImage != null ? <img src={item.urlToImage} alt='news image' className='news-image'/> : ''}
                <p className='text-xl text-bold '>{item.name}</p>
                Trust Score: <span className='m-auto text-[#F28500] text-bold'>{item.trust_score}</span><br/>
                {item.year ? <span> Year Established:<span className='m-auto text-[#F28500] text-bold'>{item.year}</span><br/></span> : ''}
                Country: <span className='m-auto text-[#F28500] text-bold'>{item.country}</span><br/>
            </div>
            <div className='flex justify-end mt-[00px] text-[#F28500]'>
                <Link to={item.url} className='text-sm'>
                    Trade
                </Link>
            </div>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default News
