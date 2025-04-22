import React, { useEffect, useState } from 'react'
import { PencilFill,BoxArrowRight } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'

function Profile() {

  const [gotvalues,setGotvalues] = useState({})
  const [login,setLogin] = useState(true)
  const navi = useNavigate()
  
  const [edit,setEdit] = useState(true)
  console.log(edit);


  const logout = () =>{
    setLogin(false);
    navi("/")
  }

  useEffect(()=>{
    localStorage.setItem('login',login)
  },[login])
  
  useEffect(()=>{
    const getItem = JSON.parse(localStorage.getItem('user'));
    setGotvalues(getItem)
  },[])
  
  return (
    <div className='bg-green' style={{backgroundColor:"#118949",height:"100vh"}}>
      <h3 className="mb-5 pb-3 profiehead text-center text-white fw-bold" style={{letterSpacing:"3px"}}>PROFILE</h3>
    <div className="container mx-auto profile-container">
      <div className="row profileDiv">
        {/* Left Column */}
        <div className="col-md-6 formprofile">
          <div className="mb-1 mb-lg-4">
            <label className="form-label">Name</label><br></br>
            <input type="text" className="profilebox" value={gotvalues.name} readOnly={edit} />
          </div>
          <div className="mb-1 mb-lg-4">
            <label className="form-label">E-Mail</label><br></br>
            <input type="email" className="profilebox" value={gotvalues.email} readOnly={edit} />
          </div>
          <div className="mb-1 mb-lg-4">
            <label className="form-label">Password</label><br></br>
            <input type="password" className="profilebox" value={gotvalues.password} readOnly={edit} />
          </div>
          <div className="mb-1 mb-lg-4">
            <label className="form-label">Location</label><br></br>
            <input
              type="text"
              className="profilebox"
              value="10/224, bus stand road, ammaiyapuram."
              readOnly
            />
          </div>
          <div className="mb-1 mb-lg-4">
            <label className="form-label">Phone Number</label><br></br>
            <input type="text" className="profilebox" value={gotvalues.phone} readOnly={edit} />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-center">
          
          <div className="position-relative d-inline-block mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              className="profile-pic rounded-circle"
              alt="Profile"
              width="300px"
            />
          </div>
          <div className="d-flex justify-content-evenly mb-3">
            <button className="btn btn-light px-2 py-2" onClick={()=>setEdit(false)} style={{letterSpacing:"2px"}}>
              Edit Profile <PencilFill/>
            </button>
            <Link to="/"><button className="btn save-btn btn-light  py-2">Save</button></Link>
          </div>
          <button className="btn btn-dark px-3 px-md-5 py-2 mt-1"onClick={()=>logout()} style={{letterSpacing:"2px"}}>
            Logout <BoxArrowRight/>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile