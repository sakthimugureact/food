
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ArrowLeft, Facebook, Twitter } from 'react-bootstrap-icons';
import insta from '../Assets/images/insta.png'
import useForm from '../Hooks/useForm';
import { useEffect, useState } from 'react';
function SocialLogin() {
    let { id } = useParams();
    const { loginerr, loginvalues, getLoginvalues, validateLogin, setLoginerr } = useForm()
    const navi = useNavigate()
    const [showpass,setShowpass] = useState("password");
    const [robot,setRobot] = useState(true)
    const [showlogin,setShowlogin] = useState(false);
 useEffect(()=>{
    localStorage.setItem("login",showlogin)
  },[showlogin])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateLogin()) {
            const user = JSON.parse(localStorage.getItem('signup'));
            const userfind = user.find(u => u.email === loginvalues.email && u.password === loginvalues.password)
            if (userfind) {
                navi("/");
                setShowlogin(true)
            }
            else {
                setLoginerr({ ...loginerr, loginer: "Invalid Password" })
            }
        }
    }
    return (
        <div className='sociallogin'>
            {id === "1" &&
                <>
                    <div className='mx-auto container socialpage sociallogin py-3' style={{ width: "560px", height: "500px" }} >

                        <div className='first-head positon-relative'>
                            <h4 className='fw-bold fs-2 text-center pt-1 mb-5' style={{ letterSpacing: "5px" }}><span style={{ color: "blue" }}>G</span><span className='text-danger'>o</span><span className='text-warning'>o</span><span style={{ color: "blue" }}>g</span><span className='text-success'>l</span><span className='text-danger'>e</span></h4>
                        </div>
                        <Link to="/login"><button className='btn btn-tranparent fw-light fs-4 position-absolute top-0 start-0 mt-2' style={{ color: "#a8a8a8" }}><ArrowLeft /></button></Link>

                        <h5 className='fs-5 ms-3 ps-md-5 pt-3 mb-5' style={{ letterSpacing: "2px" }}>Sign In</h5>
                        <div className='loginForm'>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <input type='email' className='username' placeholder='Enter Your Email-id' name="email" value={loginvalues.value} onChange={getLoginvalues}></input>
                                {loginerr.email && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.email}</p>}
                                <br></br>
                                <input type={showpass} className='username' placeholder='Enter Your Password' name="password" value={loginvalues.value} onChange={getLoginvalues}></input>
                                {loginerr.password && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.password}</p>}
                                {loginerr.loginer && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.loginer}</p>}
                                <br></br>
                                <input type='checkbox' onClick={()=>setShowpass(showpass==="password"?"text":"password")} className='mt-3 ms-5 mb-4' style={{ color: "grey", width: "30px" }} />Show Password<br></br>
                                <div className="recaptcha-box shadow-sm bg-white mx-auto">
                                    <input type="checkbox" onClick={()=>setRobot(robot?false:true)} id="notRobot" className='ms-4' />
                                    <label className="mb-0 fs-5 px-2">I am not a robot</label>
                                    <div className="recaptcha-logo">
                                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA logo" />
                                    </div>
                                </div>

                                <div className='d-flex justify-content-evenly mt-4 mx-auto'>
                                    <Link className='pt-3' style={{ textDecoration: "none" }}>Forgot Password?</Link>
                                    <Button type='submit' disabled={robot} className='btn  btn-sm  px-5 fs-6 py-2'>Login</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            }


            {id === "2" &&
                <>
                    <div className='mx-auto container socialpage sociallogin py-3' style={{ width: "560px", height: "500px" }} >

                        <div className='first-head positon-relative'>
                            <h4 className='fw-bold fs-2 text-center pt-1 mb-5 text-primary' style={{ letterSpacing: "5px" }}>Facebook</h4>
                        </div>
                        <Link to="/login"><button className='btn btn-tranparent fw-light fs-4 position-absolute top-0 start-0 mt-2' style={{ color: "#a8a8a8" }}><ArrowLeft /></button></Link>

                        <p className='fs-6 text-center ms-2 pt-3 mb-5' style={{ color: "grey" }}>Connect with one friend and the world around you on Facebook you connect and share the people</p>
                        <div className='loginForm'>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <input type='email' className='username' placeholder='Enter Your Email-id' name='email' value={loginvalues.email} onChange={getLoginvalues}></input>
                                {loginerr.email && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.email}</p>}
                                <br></br>
                                <input type='password' className='username' placeholder='Enter Your Password' name='password' value={loginvalues.password} onChange={getLoginvalues}></input>
                                {loginerr.password && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.password}</p>}
                                {loginerr.loginer && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.loginer}</p>}
                                <br></br>


                                <div className='d-flex flex-column align-items-center mt-4 mx-auto'>
                                    <Button type='submit' className='btn fbBtn px-2 fs-6 py-2'>Next</Button>
                                    <Link className='pt-3 text-center' style={{ textDecoration: "none" }}>Forgot Password?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </>}


            {id === "3" && <>
                <div className='mx-auto container socialpage sociallogin py-3' style={{ width: "560px", height: "500px" }} >

                    <div className='first-head positon-relative'>
                        <h4 className='fw-bold fs-1 text-center pt-1 mb-5 text-primary'><Twitter /></h4>
                    </div>
                    <Link to="/login"><button className='btn btn-tranparent fw-light fs-4 position-absolute top-0 start-0 mt-2' style={{ color: "#a8a8a8" }}><ArrowLeft /></button></Link>

                    <h4 className='fs-4 text-center ms-2 pt-3 mb-5' >Welcome Back</h4>
                    <div className='loginForm'>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input type='email' className='username' placeholder='Enter Your Email-id' name="email" value={loginvalues.name} onChange={getLoginvalues}></input>
                            {loginerr.email && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.email}</p>}
                            <br></br>
                            <input type='password' className='username' placeholder='Enter Your Password' name="password" value={loginvalues.password} onChange={getLoginvalues}></input>
                            {loginerr.password && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.password}</p>}
                            {loginerr.loginer && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.loginer}</p>}
                            <br></br>
                            <Link className='ps-5 ms-1' style={{ textDecoration: "none" }}>Forgot Password?</Link><br></br>


                            <Button type='submit' className='btn d-block mx-auto mt-3 px-2 fs-6 py-2 ' style={{ width: "60%" }}>Login</Button>


                        </form>
                    </div>
                </div>
            </>}


            {id === "4" &&
                <>
                    <div className='mx-auto container socialpage sociallogin py-3' style={{ width: "560px", height: "500px" }} >

                        <div className='first-head positon-relative'>
                            <h4 className='fw-bold fs-1 text-center pt-1 mb-5 '><img src={insta} width="50px" alt="insta" /></h4>
                        </div>
                        <Link to="/login"><button className='btn btn-tranparent fw-light fs-4 position-absolute top-0 start-0 mt-2' style={{ color: "#a8a8a8" }}><ArrowLeft /></button></Link>

                        <div className='loginForm pt-3'>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <input type='email' className='username' placeholder='Enter Your Email-id' name="email" value={loginvalues.email} onChange={getLoginvalues}></input>
                                {loginerr.email && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.email}</p>}
                                <br></br>
                                <input type='password' className='username' placeholder='Enter Your Password' name="password" value={loginvalues.password} onChange={getLoginvalues}></input>
                                {loginerr.password && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.password}</p>}
                                {loginerr.loginer && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.loginer}</p>}<br></br>
                                <Link className='ps-5 ms-1' style={{ textDecoration: "none" }}>Forgot Password?</Link><br></br>
                                <Button type='submit' className='btn d-block mx-auto mt-3 px-2 fs-6 py-2 ' style={{ width: "60%" }}>Login</Button>
                            </form>

                            <h4 className='text-center pt-4 fs-5'><svg height="20" width="150" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="10" x2="250" y2="10" style={{ stroke: "black", strokeWidth: "2" }} />
                            </svg> or <svg height="20" width="150" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0" y1="10" x2="250" y2="10" style={{ stroke: "black", strokeWidth: "2" }} />
                                </svg></h4>

                            <Link to="/social/2" style={{ textDecoration: "none" }}><p className='mt-5 text-center fs-5'><Facebook className='fs-2' /> Log in with FaceBook</p></Link>
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default SocialLogin