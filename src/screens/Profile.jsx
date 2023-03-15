import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Profile() {
  const [profileData,setProfileData] = useState([]);
  const fetchProfile = async () => {
    await fetch("http://localhost:5000/api/profiledata",{
      method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: localStorage.getItem('userEmail')
       })
    }).then(async (res) => {
      let response= await res.json()
      await setProfileData(response)
    })
  }

  useEffect(() => {
    fetchProfile()
  },[])
  console.log(profileData)
  return (
    < >
    <div>
      <Navbar />
    </div>
      <div className='container bg-info text-black rounded mt-5 p-2 m-auto w-50 '>
        
          <div className="m-3 d-flex">
         <h3>   Username:  {profileData.name}</h3>
          </div>
          <div className="m-3">
            <h3>Email: {localStorage.getItem('userEmail')}</h3>
          </div>
          <div className="m-3">
            <h3>Address: {profileData.location} </h3>
          </div>
          <span>
          <Link to="/myOrder" className='m-3 btn btn-dark'>My Orders</Link>
          </span>
          <Link to="/" className='m-3 btn btn-dark'>Continue Shopping</Link>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
