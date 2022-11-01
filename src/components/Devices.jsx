import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import {
    collection,
    query,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot,
    setDoc,
    addDoc,
  } from "firebase/firestore";

const Devices = () => {
    const [phoneData, setPhoneData] = useState()
    useEffect(()=> {
        const fetchDataFromDB = async () => {
            const querySnapshot = await getDocs(collection(db, 'phoneData'))
            let dataWithId = []
            querySnapshot.forEach((doc)=> {
                let data = doc.data()
                data["id"] = doc.id
                dataWithId.push(data)
            })
            setPhoneData(dataWithId)
        }
        fetchDataFromDB()
    }, [])

  return (
    <div>
        <h2>Devices</h2>
        <Link to={'/devices/new'}><button className='btn btn-outline-primary btn-sm'>Add new</button></Link>

            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Storage</th>
                    <th scope="col">Color</th>
                    <th scope="col">Max Price</th>
                  </tr>
                </thead>
                <tbody>
                    {phoneData?.map((data)=>(
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.size.join(', ')}</td>
                            <td>{data.color.join(', ')}</td>
                            <td>${data.maxPrice}</td>     
                            <td><Link to={`/devices/${data.id}`}><button type='button' className='btn btn-outline-primary btn-sm'>Edit</button></Link></td>
                            <td><button type='button' className='btn btn-outline-danger btn-sm'>Delete</button></td>
                            
                        </tr>
                    ))}
                </tbody>
              </table>
            </div>
    </div>
  )
}

export default Devices