import '../Assets/Css/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import useForm from '../Hooks/useForm'

function Register() {
  const {values,error,getValues,validateForm} = useForm()
  const navi = useNavigate()

  const formSubmit = (e) =>{
    e.preventDefault();
    
    if(validateForm()){
      let exist =localStorage.getItem('signup');
      console.log(exist);
      
      let loadSignup = exist?JSON.parse(exist):[];
      if(loadSignup.some(users=>users.email===values.email)){
       alert("Email Already Registerd")
      }
      else if(loadSignup.some(users=>users.phone===values.phone)){
        alert("Phone Number Already Registered")
      }
      else{
        loadSignup.push(values);
        localStorage.setItem("signup",JSON.stringify(loadSignup));
        navi('/login')
      }
    }
  }



  return (
    <div className='bg-image'>
      <div className='mx-auto container loginpage' style={{width:"560px",height:"500px"}} >

<div className='first-head positon-relative'>
<h4 className='fw-bold fs-2 text-center pt-1 mb-5 mt-2' style={{letterSpacing:"2px"}}>Sign Up <br></br> <span className='text-center fs-6 sgincontent text-secondary' style={{letterSpacing:"1px"}}>Sign Up & Get 15% Discount Instant</span></h4>
</div>
<Link to="/login"><button className='btn btn-tranparent fw-light fs-4 position-absolute top-0 end-0' style={{color:"#a8a8a8"}}>X</button></Link>

<div className='loginForm'>
 <form onSubmit={(e)=>formSubmit(e)}>
 <input type='text' name="name" className='username' placeholder='Enter Your Name' value={values.name} onChange={getValues} ></input>
 {error.name && <p className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{error.name}</p>}<br></br>
  <input type='email' name="email" className='username' placeholder='Enter Your Email-id' value={values.email} onChange={getValues}></input>
  {error.email && <p  className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{error.email}</p>}<br></br>
  <input type='tel' name="phone" className='username' placeholder='Enter Your Phone Number' value={values.phone} onChange={getValues}></input>
  {error.phone && <p  className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{error.phone}</p>}<br></br>
  <input type='password' name="password" className='username' placeholder='Enter Your Password' value={values.password} onChange={getValues}></input>
  {error.password && <p  className='ps-2 ms-2 ps-md-5' style={{ color: 'red' }}>{error.password}</p>}<br></br>
<Button type='submit' className='btn loginbtn btn-lg d-block mx-auto px-5 fs-6 py-2'>SIGN UP</Button>
 </form>
</div>

<p className='text-center pt-2' style={{fontSize:"13px"}}>Already Have an Account <Link to="/login" style={{textDecoration:"none"}}>Sign In</Link></p>
</div>
    </div>
  )
}

export default Register