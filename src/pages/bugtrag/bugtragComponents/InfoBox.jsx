import React, { useState } from 'react'

const InfoBox = () => {
    const [hidden, setHidden] = useState(false)

    const handleSize = (e) => {
        e.preventDefault()
        setHidden(!hidden)
    }

  return (
    <>
    <button onClick={(e)=>handleSize(e)} className={`${hidden ? 'infoBoxBtn ' : 'infoBoxBtnHidden'}`}> {!hidden ? 'Help' : 'Hide'} </button>
    <div className={`${hidden ? 'infoBox ' : 'infoBoxHidden'}`}>
      <div className='mt-5'>Info Box</div>
      <div className='mt-5'>Lorem Upsum</div>
    </div>
    </>
  )
}

export default InfoBox
