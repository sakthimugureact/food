import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft,XLg,TrashFill } from 'react-bootstrap-icons'
import { Addtocart } from '../Hooks/Cartcontext'

function Cart() {
  const {remove,items,increase,decrease,finalprice,discount,finaltop,coupon,showdis} = useContext(Addtocart);

  return (
    <>
    <div style={{height:"100vh"}} className='bounce-in-right'>
    <div style={{background:"#118949",borderRadius:"30px",height:"100vh"}} className='innercon'>
    <div className="d-flex justify-content-between align-items-center mb-4 pt-5 container mx-auto starting">
                  <Link to="/" className='text-white fs-2 fw-bold'><ArrowLeft/></Link>
                    <h2 className="text-white mb-0 fs-4 fw-bold" style={{letterSpacing:"2px"}}>CART</h2>
                    <Link to="/" className='text-white fs-2 fw-bold'><XLg/></Link>
                </div>
     <div className="container  cart-container mt-5 pt-4 mx-auto p-5">
        <div className="row ">
        <div className="col-lg-6 cart-items-container ">
            {items.length===0?<p className='text-white fs-2 text-center'>Your cart is empty!</p>:items.map((val,index)=>(
           
           <div key={index} className="food-item d-flex justify-content-betweem align-items-center mt-3 p-2 cartitmslist">
               <img src={val.innersrc} alt="Sausage" className="food-img"/>
               <div className="flex-grow-1 mx-3 mt-1">
                   <h5 className="mb-1 fs-6 fw-bold">{val.innerTitle}</h5>
                   <p className="text-muted mb-0 small">Minus eaque omnis aut autem deleniti est. Dolores earum...</p>
               </div>
               <div className="d-flex align-items-center gap-4">
                   <div className="quantity-control">
                       <button className="btn btn-danger btn-md  fs-6 rounded-circle fw-bold" style={{height:"25px",width:"25px"}} onClick={()=>increase(val.id)}>+</button>
                       <span>{val.quantity}</span>
                       <button className="btn btn-light border-dark btn-md fs-6 rounded-circle fw-bold" style={{height:"25px",width:"25px"}} onClick={()=>decrease(val.id)}>-</button>
                   </div>
                   <span className="fw-bold">₹{val.totalprice}</span>
                   <button className="cart-btn" onClick={()=>remove(val.id)}><TrashFill/></button>
               </div>
           </div>
       
        ))}
           
           </div>
           
            <div className="col-lg-6">
                <div className="bg-transparent p-6 rounded-3">
                    <div className="mb-4 input-group ms-0 ms-md-5">
                        <input type="text" className=" p-0 p-lg-3 coupon bg-transparent" placeholder="ENTER COUPON CODE" ref={coupon}/>
                        <button className="btn btn-light apply" onClick={()=>discount()} >APPLY</button>
                    </div>

                    <div>
                    <div className='d-flex mx-auto pricelist' style={{width:"70%"}}>
                    <div className='col-md-8 text-white' style={{letterSpacing:"2px"}}>
                    <h3 className='pt-4 fw-bold fs-4'>Subtotal Rs.</h3>
                    <h3 className='pt-4 fw-bold fs-4'>Tax and Fees</h3>
                    <h3 className='pt-4 fw-bold fs-4'>Delivery</h3>
                    </div>
                    <div className='col-md-4 text-white fw-bold' style={{letterSpacing:"2px"}}>
                    <h3 className='pt-4 text-end fw-bold fs-4'>₹{finalprice}</h3>
                    <h3 className='pt-4 text-end fw-bold fs-4'>₹69</h3>
                    <h3 className='pt-4 text-end fw-bold fs-4'>₹30</h3>
                    </div>
                    </div>
                    <hr className='text-white mx-auto mt-3' style={{height:"5px",width:"90%",background:"white"}}/>
                    <div className="mb-4 d-flex mx-auto mt-3 justify-content-between fw-bold" style={{width:"70%"}}>
                        <h2 className='fs-2 fw-bold text-white'>TOTAL</h2>
                        <h2 className='fs-2 fw-bold text-white'>₹{showdis?finaltop:finalprice+69+30}</h2>
                    </div>
                    <hr className='text-white mx-auto mt-2' style={{height:"5px",width:"90%",background:"white"}}/>
                    </div>

                    <Link to="/checkout" style={{textDecoration:"none"}}><button className="btn checkout w-50 mt-4 py-3 d-block mx-auto">CHECKOUT</button></Link>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Cart