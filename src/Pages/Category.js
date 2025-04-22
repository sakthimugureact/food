import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
// import Jsondata from '../category.json'
import {ArrowLeft } from 'react-bootstrap-icons';
import Footer from '../Components/Footer';

function Category() {

  const [values,setValues] = useState([])

  
  useEffect(()=>{
    fetch("/category.json").then(res=>res.json()).then(data=>setValues(data))
  },[])
  return (
   <>
   <div className='position-relative'>
    <h2 className='text-center text-light fs-4 fw-bold pt-5' style={{letterSpacing:'3px'}}>CATEGORIES</h2>
    <Link to='/' className='position-absolute top-0 ms-5 text-white mt-5 fs-3 fw-bold ps-5'><ArrowLeft/></Link>

    <div className='container cate mx-auto pb-5'>
      <div className='row'>
        {values.map(val=>(
          <div key={val.id} className='col-md-6 col-lg-4   col-xl-3'>
            <div style={{width:"200px",height:"200px"}} className='bg-light rounded-circle p-3 d-block mx-auto mt-5'>
            <Link to={`/categoryshow/${val.id}`}><img src={val.outersrc} style={{width:"100%",height:"100%",objectFit:'cover'}} className='d-block mx-auto img-fluid' alt="category"></img></Link>
            </div>
            <h4 className='text-center text-white pt-4 fw-bold' style={{letterSpacing:"2px"}}>{val.title}</h4>
          </div>
        ))}
      </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default Category