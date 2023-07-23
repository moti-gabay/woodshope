import React from 'react'
import { useSelector } from 'react-redux'
import { apiPost, apiRequest } from '../constants/Requests';
import { MAILER_URL } from '../constants/url';

const CartPayment = () => {
  
  const { user} = useSelector(stor => stor.authReducer);
  
  // console.log(user.email);
  const mailer = async(email) => {
    console.log("mailer");
  const res  = await apiPost("http://localhost:3000/api/product/getbill",email)
console.log(res);
console.log("email send");
  }
    
  return (
    <div className='min-h-screen'>
      CartPayment

      {/* <p>{user.email}</p> */}
<button className='btn btn-primary' onClick={() => mailer(user.email)}>pay</button>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eius, labore quibusdam iusto quod commodi accusantium dolores odio molestias nisi error dicta distinctio ipsum doloremque facere sint natus culpa rem?</p>
    </div>
  )
}

export default CartPayment