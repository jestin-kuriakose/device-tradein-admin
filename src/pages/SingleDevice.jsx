import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { db } from '../firebase';
import {
  collection,
  query,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  addDoc,
} from "firebase/firestore";

const SingleDevice = () => {
  const location = useLocation()
  const phoneId = location.pathname.split('/')[2]
  const navigate = useNavigate()


  const [phoneData, setPhoneData] = useState()

  useEffect(()=> {
      const fetchDataFromDB = async () => {
          const querySnapshot = await getDoc(doc(db, 'phoneData', phoneId))
          if(querySnapshot.exists()) {
            setPhoneData(querySnapshot.data())
          } else {
            console.log("No document found")
          }
      }
      fetchDataFromDB()
  }, [])

  const handleChange = (e) => {
    if(e.target.id === 'size') {
      const value = e.target.value
      const sizeArray = value.split(',')
      setPhoneData({...phoneData, size: sizeArray})
    } else if(e.target.id === 'color') {
      const value = e.target.value
      const colorArray = value.split(',')
      setPhoneData({...phoneData, color: colorArray})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendDataToDB(phoneData)
    navigate('/devices')
  }

  const sendDataToDB = async(data) => {
    await setDoc(doc(db, "phoneData", phoneId), {
      name: data.name,
      maxPrice: data.maxPrice,
      size: data.size,
      color: data.color
    })
  }

  return (
    <div>
        <Header/>
        <div className="container-fluid">
            <div className="row">
            <Sidebar/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                
                <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Edit</h4>
                
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="" value={phoneData?.name} onChange={(e)=>setPhoneData({...phoneData, name: e.target.value})}/>
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label">Max. Price</label>
                      <input type="number" className="form-control" id="maxPrice" placeholder="" value={phoneData?.maxPrice} onChange={(e)=>setPhoneData({...phoneData, maxPrice: e.target.value})}/>
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label">Size</label>
                      <input type="text" className="form-control" id="size" placeholder="" value={phoneData?.size} onChange={handleChange}/>
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label">Color</label>
                      <input type="text" className="form-control" id="color" placeholder="" value={phoneData?.color} onChange={handleChange}/>
                    </div>

                    <button type='submit' onClick={handleSubmit} className='w-25 btn btn-primary btn-lg'>Save</button>
                  </div>
              </div> 
            
            </main>
          </div>
        </div>
    </div>


  )
}

export default SingleDevice