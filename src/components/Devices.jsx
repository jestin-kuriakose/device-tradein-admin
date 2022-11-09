import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const Devices = () => {
    const [phoneData, setPhoneData] = useState()
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState()
    const navigate = useNavigate()

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
    }, [open])

    

    const handleOpen = (id) => {
        setOpen(true); 
        setDeleteId(id)
    }

    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
      const handleDelete = async() => {
        await deleteDoc(doc(db, "phoneData", deleteId))
        console.log("delete")
        setOpen(false)
        
    }
  return (
    <div>
        <h2>Devices</h2>
        <Link to={'/devices/new'}><button className='btn btn-outline-primary btn-sm' onClick={handleOpen}>Add new</button></Link>

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
                            <td><button type='button' className='btn btn-outline-danger btn-sm' onClick={(e)=>handleOpen(data.id)}>Delete</button></td>
                            
                        </tr>
                    ))}
                </tbody>
              </table>
            </div>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <h3 className='lead'>Are you sure you want to delete this ?</h3>
            <button type='button' onClick={handleDelete} className='btn btn-outline-danger m-2'>YES</button>
            <button type='button' onClick={handleClose} className='btn btn-outline-primary m-2'>No</button>
        </Box>
        </Modal>

    </div>
  )
}

export default Devices