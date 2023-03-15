import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const navigate=useNavigate();
  const [orderData, setorderData] = useState({})
  const handleclick = async () => {
     navigate("/")
  }
  const fetchMyOrder = async () => {
    await fetch("http://localhost:5000/api/myOrderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: localStorage.getItem('userEmail')
      })
    }).then(async (res) => {
      let response = await res.json()
      await setorderData(response)
    })
  }
  useEffect(() => {
    fetchMyOrder()
  }, [])
  // console.log(orderData)
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <div className='row'>
          {orderData !== {} ? Array(orderData).map(data => {
            return (
              data.orderData ?
                data.orderData.order_data.slice(0).reverse().map((item) => {
                  return (
                    item.map((arrayData) => {
                      return (
                        <div  >
                          {arrayData.Order_date ? <div className='m-auto mt-5'>
                            {data = arrayData.Order_date}
                            <hr />
                          </div> :
                            <div className='col-12 col-md-6 col-lg-3' >
                              <div className="card mt-3 bg-info text-black" style={{ width: "17rem" }}>
                                <div className="card-body">
                                  <h5 className="card-title">{arrayData.name}</h5>
                                  <div className='container w-100 p-0' style={{ height: "50px" }}>
                                    <p className='m-1'>Qty: {arrayData.qty}</p>
                                    <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                      Price : ₹ {arrayData.qty * (parseInt(arrayData.price.replace(/[^0-9]/g, "") / 100))}/-
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          }
                        </div>
                      )
                    })
                  )
                }) : <div>
                  <h3 className='m-5' style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    Haven't Ordered Anything 😔😔
                  </h3>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                  <button type="button" className='btn bg-info text-black' onClick={handleclick}>Continue Shopping</button>
                  </div>
                </div>
            )
          }) :
            ""
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}