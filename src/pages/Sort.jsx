import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({setShowNavBar}) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }


  useEffect(() => {
    setShowNavBar(false)
    }, [setShowNavBar])

  return (
    <>
    <div>
      <button 
        className='btn top-0 left-0 right-0 bottom-0'
        onClick={toggleModal}
      > 
        open
      </button>
    </div>
    {modal && (
      <div className="modal w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed">
      <div 
      onClick={toggleModal}
      className="overlay w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed bg-slate-100" 
      >
       <div className="modal-content absolute items-center top-[40%] bg-white">
         <h2 className="">Hello Modal</h2>
         <p>Using dynamic import() to code-split the application
           - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
           - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
         </p>
         <button 
           className='btn'
           onClick={toggleModal}
         >close</button>
       </div>
      </div>
     </div>
    )}
    
    </>
  )
}

export default Modal;