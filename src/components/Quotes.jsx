import React, { useState } from 'react'
import { useEffect } from 'react'
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

const Quotes = () => {
    const [quoteData, setQuoteData] = useState()
    useEffect(()=> {
        const fetchDataFromDB = async () => {
            const querySnapshot = await getDocs(collection(db, 'customerSelection'))
            let dataWithId = []
            querySnapshot.forEach((doc)=> {
                let data = doc.data()
                data["id"] = doc.id
                dataWithId.push(data)
            })
            setQuoteData(dataWithId)
        }
        fetchDataFromDB()
    }, [])

  return (
    <div>
    <h2>Quotes</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Storage</th>
                <th scope="col">Color</th>
                <th scope="col">Condition</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
                {quoteData?.map((data)=>(
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.size}</td>
                        <td>{data.color}</td>
                        <td>{data.condition}</td>
                        <td>Status</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Quotes