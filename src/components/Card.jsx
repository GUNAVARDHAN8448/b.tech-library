import React, { useState } from 'react'
import { useDispatchCart} from './contextReducer'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Card(props) {
  let dispatch=useDispatchCart();
  const [qty,setQty]= useState(1)
  const handleAddToCart = async () => {
      await dispatch({type:"ADD",id:props.bookItem._id,name:props.bookItem.name,price:props.price,qty:qty})
      // console.log(data)
  }
  let result = props.price.replace(/[^0-9]/g,"");
  let finalPrice = (qty*result)/100;
  return (
    <div>
      <div className="card mt-3" style={{ "width": "18rem"}}>
        <img src={props.bookItem.img} className="card-img-top" alt="..." style={{height:"360px",objectFit:"fill"}}/>
        <div className="card-body">
          <h5 className="card-title"  style={{ "height": "70px" }}>{props.bookItem.name}</h5>
          {/* <p className="card-text " >{props.description}</p> */}
          <div className='container w-100 m-0 p-0'>
            <select className='m-2 h-100 bg-info rounded' onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6),(e,i) => {
                return (
                  <option key={i+1} value={i+1}>{i+1}</option>
                )
              })}
            </select>
            <div className='d-inline h-100 fs-5'>
            Price: ₹{finalPrice}/-
          </div>
          </div>
          <hr></hr>
          <button className='btn btn-info text-black justify-centre ms-2' onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;