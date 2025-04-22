import React, { useState } from 'react'
import Footer from '../Components/Footer'
import { ArrowLeft } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'
import Master from '../Assets/images/master.png'
import Visa from '../Assets/images/visa.png'
import Atm from '../Assets/images/cardde.png'
import Delivery from '../Assets/images/delivery.png'

function Checkout() {

    const [hide,setHide] = useState({display:"none"});

    const [show,setShow] = useState(true)

    const navi = useNavigate()

    function deliver(){
        setShow(false);
        setTimeout(()=>{
            navi('/')
            window.location.reload()
        },2000)
    }

    function disp(){
       setHide({display:"block"})
    }
  return (
    <>
    {show&&<div>
        <div className="mb-4 mx-auto container">
            <Link to="/cart" className='text-white ms-5 ps-5 fs-3 fw-bold'><ArrowLeft/></Link>
            <h4 className="mb-0 text-center fs-2 text-white fw-bold" style={{letterSpacing:"3px"}}>CHECKOUT</h4>
        </div>

    <div className="container checkout-container mx-auto p-5">
        <div className="timeline-item">
            <h5 className="mb-3 text-white ms-4 fs-2" style={{letterSpacing:"2px"}}>Information :</h5>
            <div className="mb-3 mx-4">
                <label className="mb-2 text-white fs-5">Address :</label><br></br>
                <input type="text" className='address' value="12/7342,bush husd sshnqs geagsghasjjd -788 773" readOnly/>
            </div>
            <div className="mb-3 mx-4">
                <label className="mb-2 text-white fs-5">Phone Number :</label> <br></br>
                <input type="text" className='addresss' value="91 7394734894" readOnly/>
            </div>
        </div>

        <div className="timeline-item">
            <h5 className="mb-3 mx-4  text-white fs-2" style={{letterSpacing:"2px"}}>Payment Methods :</h5>
            <div className="payment-method mx-4">
                <div className="form-check">
                    <input  type="radio" name="payment" id="card" value="card" onClick={()=>disp()}/>
                    <label className="form-check-label text-white fs-5 p-3" for="card">
                        Credit / Debit Card Payment
                    </label><br></br>
                    <img src={Master} alt="Mastercard" height="20" className='mx-4'/>
                    <img src={Visa} alt="Visa" height="20"  className='mx-4' />
                    <img src={Atm} alt="Other" height="20"  className='mx-4' /><br></br>
                    <input  type="radio" name="payment" id="cod" value="cod"  onClick={()=>disp()}/>
                    <label className="form-check-label text-white fs-5 p-3" for="cod"  >
                        Cash on Delivery
                    </label><br></br>
                    <input type="radio" name="payment" id="upi" value="upi" onClick={()=>disp()} />
                    <label  for="upi" className='text-white fs-5 p-3'>
                        Pay via UPI
                    </label>

                    <button className='btn btn-warning text-white px-5 mx-4 fs-5 fw-bold' style={hide} onClick={()=>deliver()}>Delivery</button><br></br>
                </div>
            </div>
        </div>

        <div className="timeline-item">
            <h5 className='text-white fs-2 ps-4' style={{letterSpacing:"2px"}}>Order Delivered</h5>
        </div>
    </div>
    <Footer/>
        </div>}
    
    {!show&&<div>
       <img src={Delivery} className='mx-auto d-block' width="20%" alt="deliver"></img>
       <h1 className='text-white text-center fs-5' style={{letterSpacing:"2px"}}>ORDER DELIVERED</h1>
        </div>}

    </>
  )
}

export default Checkout