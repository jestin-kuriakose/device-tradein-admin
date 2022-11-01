import React from 'react'
import Header from '../components/Header'
import Quotes from '../components/Quotes'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const QuotesList = () => {
  return (
    <div>
        <Header/>
        <div className="container-fluid">
            <div className="row">
            <Sidebar/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Quotes/>
                
            </main>
            </div>
        </div>
    </div>
  )
}

export default QuotesList