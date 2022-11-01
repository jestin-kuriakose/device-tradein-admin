import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation()
    const pathname = location.pathname
    const path = location.pathname.split('/')[1]
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
        <ul className="nav flex-column">
            <li className="nav-item">
            <Link to={'/'} className={"nav-link " + (pathname==='/' ?  "active": "")} aria-current="page" href="#">
                <span data-feather="home"></span>
                Dashboard
            </Link>
            </li>
            <li className="nav-item">
            <Link to={'/devices'} className={"nav-link " + (path === 'devices' &&  "active")} href="#">
                <span data-feather="file"></span>
                Devices
            </Link>
            </li>
            <li className="nav-item">
            <Link to={'/quotes'} className={"nav-link " + (path === 'quotes' &&  "active")} href="#">
                <span data-feather="shopping-cart"></span>
                Quotes
            </Link>
            </li>
            <li className="nav-item">
            <Link to={'/customers'} className={"nav-link " + (path === 'customers' &&  "active")} href="#">
                <span data-feather="users"></span>
                Customers
            </Link>
            </li>
            <li className="nav-item">
            <Link to={'/'} className={"nav-link " + (path === 'reports' &&  "active")} href="#">
                <span data-feather="bar-chart-2"></span>
                Reports
            </Link>
            </li>
        </ul>

        </div>
  </nav>
  )
}

export default Sidebar