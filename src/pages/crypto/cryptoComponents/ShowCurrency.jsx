import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar,  Area, ResponsiveContainer, AreaChart, Legend } from 'recharts'
import CryptoFooter from './CryptoFooter'

const showCurrency = ({setShowNavBar, currencyData, ...props}) => {
    const params = useParams()
    const [coinInfo, setCoinInfo] = useState([])
    const [marketCap, setMarketCap] = useState([])

    const fetchCoins = async() => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=14`);
            const data = await response.json();
            setCoinInfo(data.prices.map((price)=>{
                const [timestamp, p] = price;
                const date = new Date(timestamp).toLocaleDateString();
                return {
                    date: date,
                    price: p
                }
            }))
            setMarketCap((data.market_caps.map((marCap)=>{
                const [timestamp, marC] = marCap;
                const date = new Date(timestamp).toLocaleDateString();
                const editedCap = (marC * 0.00001).toFixed(2)
                return {
                    date: date,
                    market_cap: editedCap,
                }
            }
            )))

        } catch (error) {
            console.error(error)
        }
    }


    useEffect(()=>{
        setShowNavBar(false)
        fetchCoins()
    }, [setShowNavBar])

    const getIntroOfPage = (label) => {

    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip bg-[#EEEEEE] rounded-lg text-sm">
              <p className="label">{`${label} : ${payload[0].value}`}</p>
              <p className="intro">{getIntroOfPage(label)}</p>
            </div>
          );
        }
      
        return null;
      };

  return (
    <div className='crypto-page'>
        <Link to='/crypto'  className='fixed ml-[3%] mt-[5px] bg-[#CCCCCC] p-[0.5%] rounded-xl text-[#EEEEEE] '>Back</Link>
        <div className='flex flex-col items-center justify-center'>
            <span className='crypto-head-text'>Single Currency Detail: {params.id}</span>
            <span className='text-sm w-[80%]'>Prices represented in US Dollar (USD) <br/> (For example, if you say the price of Bitcoin is $50,000, it means one Bitcoin is currently valued at $50,000 in the chosen currency.)</span>
            

        </div>
      <div className='w-auto h-auto m-5 p-5 flex flex-col items-center'>
            <LineChart width={800} height={400} data={coinInfo}>
                <CartesianGrid stroke='#ccc' strokeDasharray="3 3"/>
                <XAxis dataKey='date'/>
                <YAxis dataKey='price'/>
                <Line type='monotone' dataKey='price' stroke='#F28500'/>
                <Tooltip content={<CustomTooltip />}/>
                <Legend/>
            </LineChart>
      </div>
        <div className='flex flex-col items-center justify-center'>
            <span className='crypto-head-text'>Market cap</span>
            <span className='text-sm w-[80%]'>
                Market capitalization (market cap) in the context of cryptocurrency refers to the total value of a particular cryptocurrency's circulating supply in the market. It is calculated by multiplying the current price of one unit of the cryptocurrency by the total number of units in circulation. The formula for market cap is: 
                <br/>
                <br/>
                <p className='text-xl font-bold'>Market Cap = Current Price × Circulating Supply </p><br/>
                For example, if a cryptocurrency has a current price of $100 and there are 1 million units in circulation, the market cap would be $100 million.
                </span>
        </div>
      <div className='w-auto h-auto m-5 p-5 flex flex-col items-center'>
        <BarChart
          width={820}
          height={300}
          data={marketCap}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="market_cap" tickFormatter={(value)=>`${value.toFixed(2)}`}/>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="market_cap" barSize={20} fill="#F28500" />
        </BarChart>
    </div>
    <CryptoFooter/>
    </div>
  )
}

export default showCurrency
