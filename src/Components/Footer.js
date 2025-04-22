import React from 'react'
import logo from '../Assets/images/logo.png'
import { GeoAltFill,EnvelopeFill,TelephoneFill } from 'react-bootstrap-icons'
import Insta from '../Assets/images/insta.png'
import Google from '../Assets/images/google.png'
import Facebook from '../Assets/images/fb.png'
import Twitter from '../Assets/images/twiter.png'

function Footer() {
  return (
   <>
   <footer className="py-5" style={{background:"#cdf9e1"}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-lg-4">
                    <img src={logo} alt="Foodie Logo" className="footer-logo mb-3 ms-5 rounded-circle bg-light" width="140px"/>
                    <div className="d-flex flex-column gap-2 ms-3 fw-bold fs-5 location" style={{letterSpacing:"2px"}}>
                        <p className="mb-1">
                           <GeoAltFill/>
                            2972 Westheimer Rd. Santa Ana
                        </p>
                        <p className="mb-1">
                           <EnvelopeFill/>
                            support@example.com
                        </p>
                        <p className="mb-1">
                            <TelephoneFill/>
                            +(084) 456-0789
                        </p>
                    </div>
                </div>

                <div className="col-md-2 col-lg-2 ms- ms-md-0 mt-5 mt-md-0">
                    <h5 className="mb-3 fw-bold fs-5 producthead" style={{letterSpacing:"2px"}}>PRODUCTS</h5>
                    <ul className="list-unstyled fs-6 productsp" style={{letterSpacing:"2px"}}>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Burgers</a></li>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">King Delight Products</a></li>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Crispy Flavors</a></li>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Breakfast Products</a></li>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Kfc Real Time Offers</a></li>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Vegan Role Pista</a></li>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Burger Red Chillies</a></li>
                    </ul>
                </div>

    
                <div className="col-md-2 col-lg-2  ms-md-0 mt-5 mt-md-0">
                    <h5 className="mb-3 fw-bold fs-5 producthead" style={{letterSpacing:"2px"}}>QUICK LINKS</h5>
                    <ul className="list-unstyled fs-6 productsp" style={{letterSpacing:"2px"}}>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Home</a></li>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Categories</a></li>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Shop</a></li>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Cart</a></li>
                        <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Contact</a></li>
                    </ul>
                </div>


                <div className="col-md-3 col-lg-4  ms-md-0 mt-5 mt-md-0">
                    <h5 className="mb-3 fw-bold fs-5 producthead" style={{letterSpacing:"2px"}}>OPENING HOURS</h5>
                    <p className="mb-3 fs-5 productsp" style={{letterSpacing:"2px"}}>MONDAY – FRIDAY: 8AM – 4PM<br/>SATURDAY: 8AM – 12AM</p>
                    
                    <h5 className="mb-3 fw-bold fs-5 producthead" style={{letterSpacing:"2px"}}>FOLLOW US ON :</h5>
                    <div className="d-flex gap-5">
                        <img src={Facebook} alt="social" width="35px"/>
                        <img src={Twitter} alt="social" width="35px"/>
                        <img src={Insta} alt="social" width="35px"/>
                        <img src={Google} alt="social" width="35px"/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   </>
  )
}

export default Footer