import React, { useEffect, useState } from 'react'
import '../Assets/Css/login.css'
import { Link, useNavigate } from 'react-router-dom'
import Google from '../Assets/images/google.png'
import Facebook from '../Assets/images/fb.png'
import Twitter from '../Assets/images/twiter.png'
import Insta from '../Assets/images/insta.png'
import { Button } from 'react-bootstrap'
import useForm from '../Hooks/useForm'

function Login() {
  const [showlogin,setShowlogin] = useState(false)
  const {loginerr,loginvalues,getLoginvalues,validateLogin,setLoginerr} = useForm()
  const navi = useNavigate()

  useEffect(()=>{
    localStorage.setItem("login",showlogin)
  },[showlogin])
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validateLogin()){
      const user = JSON.parse(localStorage.getItem('signup'));
      const userfind = user.find(u=>u.email===loginvalues.email&&u.password===loginvalues.password)
      console.log(userfind);
      
      if(userfind){
        navi("/");
        setShowlogin(true)
        localStorage.setItem('user',JSON.stringify(userfind))
      }
      else{
        setLoginerr({...loginerr,loginer : "Invalid Password"})
      }
    }
  }
  return (
    <div className='bg-image'>
      <div className='mx-auto container loginpage' style={{width:"560px",height:"500px"}} >

        <div className='first-head positon-relative'>
        <h4 className='fw-bold fs-2 text-center pt-1 mb-5 mt-2' style={{letterSpacing:"2px"}}>Login <br></br> <span className='text-center fs-6 text-secondary' style={{letterSpacing:"1px"}}>Sign Up & Get 15% Discount Instant</span></h4>
        </div>
        <Link to="/"><button className='btn btn-tranparent fw-light fs-4 position-absolute top-0 end-0' style={{color:"#a8a8a8"}}>X</button></Link>

        <div className='loginForm'>
         <form onSubmit={(e)=>handleSubmit(e)}>
          <input type='email' className='username' name="email" placeholder='username' value={loginvalues.email} onChange={getLoginvalues}></input>
          {loginerr.email && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.email}</p>}<br></br>
          
          <input type='password' className='username' name="password" placeholder='password' value={loginvalues.password} onChange={getLoginvalues}></input>
          {loginerr.password && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.password}</p>}
          {loginerr.loginer && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{loginerr.loginer}</p>}<br></br>
          <Button type='submit' className='btn loginbtn btn-lg d-block mx-auto px-5 fs-6 py-2'>LOGIN</Button>
         </form>
        </div>

        <p style={{textAlign:"center"}} className='pt-3 fs-5'>Or</p>
        <h5 className='pt-3 text-center' style={{letterSpacing:"1.5px"}}>Signup With Using</h5>

        <div className='icons mt-3 mx-auto'>
          <div className='d-flex justify-content-between'>
          <Link to={"/social/1"}><img src={Google} alt='google'></img></Link>
          <Link to={"/social/2"}><img src={Facebook} alt="fb"/></Link>
          <Link to={"/social/3"}><img src={Twitter} alt="x"/></Link>
          <Link to={"/social/4"}><img src={Insta} alt='insta'/></Link>
          </div>
        </div>

        <p className='text-center pt-2' style={{fontSize:"13px"}}>Don't have Account? <Link to="/register" style={{textDecoration:"none"}}>Create new Account</Link></p>
      </div>
    </div>
  )
}

export default Login