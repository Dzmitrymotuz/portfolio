import React, { useState, useEffect, useRef } from 'react'
import { skills } from '../constants'

const Game = () => {
    const [count, setCount] = useState(1)
    const [factoriesCount, setFactoriesCount] = useState(0)
    const [factoryPrice, setFactoryPrice] = useState(100)

    const [beer, setBeer] = useState(0)

    const [workersCount, setWorkersCount] = useState(0)
    const [workersPrice, setWorkersPrice] = useState(10)

    const [beerCaveCount, setBeerCaveCount] = useState(0)
    const [beerCavePrice, setBeerCavePrice] = useState(500)

    const [store, setStore] = useState(false)

    const createFactory = (e) => {
        e.preventDefault();
        if (count>=factoryPrice){
            setCount(prev => prev - factoryPrice)
            setFactoriesCount((prevFactoriesCount) => prevFactoriesCount + 1)
            setFactoryPrice(prev=>prev + factoriesCount * 11)
        }
    }
    const createWorker = (e) => {
        e.preventDefault()
        if (count >= workersPrice && beer >= 5) {
            setCount(prev => prev - workersPrice)
            setBeer(prev=>prev - 5)
            setWorkersCount(prev => prev + 1)
            setWorkersPrice(prev=>prev + workersCount * 5)
        }
    }
    const createBeerCave = (e) => {
        if (count >= beerCavePrice) {
            setCount(prev=>prev - beerCavePrice)
            setBeerCaveCount(prev => prev + 1)
        }
    }
    //BEER
    const buyBeer = (e) => {
        if(count >= 5){
            setCount(prev=>prev - 5)
            setBeer(prev=>prev + 1)
        }
    }
    
    useEffect(()=>{
        const factoryTimer = setInterval(() => {
            setCount((prevCount) => prevCount + factoriesCount * 10)
        }, 3000);
        const workerTimer = setInterval(()=>{
            setCount((prevCount) => prevCount + workersCount * 2)
        }, 2000)
        const beerCaveTimer = setInterval(() => {
            setCount(prev=>prev - beerCaveCount * 10)
            setBeer(prev => prev + beerCaveCount * 1)
        }, 5000)

        return ()=>{
            clearInterval(factoryTimer)
            clearInterval(workerTimer)
            clearInterval(beerCaveTimer)
        }
    }, [factoriesCount, workersCount, beerCaveCount])

    if (count < 0) {
        setBeer(0)
        setCount(0)
        setBeerCaveCount(0)
        setFactoriesCount(0)
        setWorkersCount(0)
    }

  return (
  <section className='bg-white'>
    {(count < 0) && 
        <div className='bg-[#f9bebe] h-1/2 w-1/2 top-1/4 left-1/4 flex flex-col fixed justify-center items-center'> GAME OVER 
        <button className='btn m-10' onClick={() => setCount(1)}>Start Over!</button>
        </div>
    }
    {store && 
    <div className=' h-2/3 mt-20 w-1/4 top-1 left-20 bg-[pink] flex flex-col items-center align-top fixed'>
        <h3>Store</h3>
        <div className='flex flex-col m-2 p-2 w-full h-auto'>
            
            <button className='btn m-1' onClick={(e)=>buyBeer(e)}>Buy Beer $5</button>
        </div>
    </div>}

    
    <div name='base' className='bg-[#fffce8] w-auto h-screen p-5 m-10 mt-20 flex flex-row items-top justify-center '>
        <div className='bg-[#ffefca] w-1/3 h-full flex flex-col'>
            Graphics:
            <div className='flex flex-row h-7 overflow-x-auto max-w-[95%]'>
            {[...Array(factoriesCount)].map((_, index)=>(
                <img className={`w-4 h-4 ${index > 0 ? 'ml-[-10px]' : ''}`} key={index} src={skills[0].imageUrl}/>
            ))}
            </div>
            <div className='flex flex-row h-7 overflow-x-auto max-w-[95%]'>
            {[...Array(workersCount)].map((_, index)=>(
                <img className={`w-4 h-4 ${index > 0 ? 'ml-[-10px]' : ''}`} key={index} src={skills[1].imageUrl}/>
            ))}
            </div>
            <div className='flex flex-row h-7 overflow-x-auto max-w-[95%]'>
            {[...Array(beerCaveCount)].map((_, index)=>(
                <img className={`w-4 h-4 ${index > 0 ? 'ml-[-10px]' : ''}`} key={index} src={skills[2].imageUrl}/>
            ))}
            </div>
        </div>
        <div className='flex flex-col items-center align-center w-1/3 bg-[#f6e8e8]'>
            <div name='count' className='w-100 h-100 mx-auto '>${count}</div>
            <div name='beer' className='w-100 h-100 mx-auto'>Beer: {beer}</div>
            <div>
            <button className='btn m-1' onClick={()=>setCount(count + 1)}>Click for $!</button>
            </div>
        </div>
        <div className='w-1/3'>
            <div className='bg-[white] flex flex-col justify-between items-left'>
                <button className='btn m-1' onClick={() => setStore(!store)}>{!store ? 'Open Store' : 'Close store'}</button>
                <button className='btn m-1' onClick={()=>{setCount(prev=>prev+1000000000), setBeer(1000000000)}}>+1000</button>
                <button className='btn m-1' onClick={(e)=> createWorker(e)}>Worker ${workersPrice} B:5 (own:{workersCount})</button>
                <button className='btn m-1' onClick={(e)=> createFactory(e) }>Factory ${factoryPrice} (own:{factoriesCount})</button>
                <button className='btn m-1' onClick={(e)=> createBeerCave(e)} title={`Each Beer Cave consumes $10 in 5 second, producing 1 beer in 5 seconds`}>Beer Cave ${beerCavePrice} -$10/5sec (own:{beerCaveCount})</button>
            </div>
        </div>
    </div>
    </section>
  )
}


export default Game
