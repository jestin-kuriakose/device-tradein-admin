import React from 'react'
import Devices from '../components/Devices'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const DeviceList = () => {
  return (
    <div>
        <Header/>
        <div className="container-fluid">
            <div className="row">
            <Sidebar/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Devices/>
            </main>
            </div>
        </div>
    </div>
  )
}

export default DeviceList