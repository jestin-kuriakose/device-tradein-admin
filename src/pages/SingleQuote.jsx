import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const SingleQuote = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className='container'>
            <div className='row g-3'>
                <div className='col-4'>
                    <label>Name</label>
                </div>
                <div className='col-4'>
                    <label>Price</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleQuote