import React from 'react'
// import Delete from '@material-ui/icons/Delete'
import { useCart, useDispatchCart } from '../components/contextReducer';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5000/api/OrderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = data.reduce((total, book) => total + parseInt(book.price.replace(/[^0-9]/g,"")/100), 0)
  return (
    <div>

      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-info fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              {/* <th scope='col' >Option</th> */}
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {data.map((book, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{book.name}</td>
                <td>{book.qty}</td>
                {/* <td>{food.size}</td> */}
                <td>{book.price}</td>
                <td ><button type="button" className="btn  p-0"> <DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button></td>
                </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: ₹{totalPrice}/-</h1></div>
        <div>
          <button type="submit" className='btn bg-info mt-5' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>
    </div>
  )
}