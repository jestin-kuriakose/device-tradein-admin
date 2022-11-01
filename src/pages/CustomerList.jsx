import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const CustomerList = () => {
  return (
    <div>
        <Header/>
        <div className="container-fluid">
            <div className="row">
            <Sidebar/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Topbar/>
                <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
                
            </main>
            </div>
        </div>
    </div>
  )
}

export default CustomerList