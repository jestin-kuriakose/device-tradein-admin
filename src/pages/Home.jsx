import React from 'react'
import DashboardSummary from '../components/DashboardSummary'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className="container-fluid">
            <div className="row">
            <Sidebar/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Topbar/>

            </main>
            </div>
        </div>
    </div>
  )
}

export default Home