import React, { useEffect, useState } from 'react'
import '../Assets/Css/Home.css'
import { Button } from 'react-bootstrap'
import Briyani from '../Assets/images/bannerimg.png'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-bootstrap-icons'
import Deliver from '../Assets/images/deliver.png'
import Items from '../Assets/images/items.png'
import Quality from '../Assets/images/quality.png'
import Offer from '../Assets/images/15percent.png'
function Home() {

  const [category,setCategory] = useState([]);
  const [customer,setCustomer] = useState([]);
  const [hotel,setHotel] = useState([]);
  const [search,setSearch] = useState([]);
  const [opt,setOpt] = useState('');
  console.log(opt);
  const [results,setResults] = useState([])
  // console.log(search);
  

  const handleSearch= (e) =>{
    setOpt(e.target.value)
    const result = search.filter(item=>
      item.innerTitle.toLowerCase().includes(opt.toLowerCase())
    )
    setResults(result)
    console.log(result);
    
  }
  useEffect(()=>{
    fetch('/category.json').then(res=>res.json()).then(data=>setCategory(data.splice(0,6)))
    fetch('/data.json').then(res=>res.json()).then(data=>setCustomer(data.users))
    fetch('/data.json').then(res=>res.json()).then(data=>setHotel(data.hotels))
    fetch('./category.json').then(res=>res.json()).then(data=>setSearch(data))
  },[])
  return (
    <>
    <div style={{background:"#118949"}} className='z-1'>
        <input className="homeSearch d-block mx-auto " type="search" placeholder='🔎Search' aria-label="Search" onKeyUp={(e)=>handleSearch(e)} />
        <ul className=' fs-3 z-3' style={{listStyle:"none"}}>
         {results&&results.map((val,index)=>(
          <Link to={`/categoryshow/${val.id}`}  key={index} className='text-dark fw-bold' style={{textDecoration:"none"}}><li className='homeSearch mx-auto '>{val.innerTitle}</li></Link>
         ))}
        </ul>
    </div>

    {/* Banner */}
    <div style={{background:"#118949",height:"auto"}}>
        <div className='container mx-auto'>
            <div className='row'>
              <div className='col-md-6 leaf'>
              <h2 className='ms-0 ms-md-4 pt-5 fw-bold fs-1 ps-5 headfast'>Fast Food</h2>
            <h1 className='ms-0 ms-md-4 text-white fw-bold fs-1 ps-5 fastfood'>Foodie's</h1>
            <h1 className='ms-0 ms-md-4 text-white fw-bold fs-1 ps-5 fastfood'>Delicious &</h1>
            <h1 className='ms-0 ms-md-4 text-white fw-bold fs-1 ps-5 fastfood'>Crispy Foods</h1>
            <p className='ms-0 ms-md-4 pt-2 text-white fs-6 ps-5 fastpara'>The fabric of Food was born out of love and <br></br> respect for these humble deli<br></br> creations, met with a desire to bring quality <br></br> ingredients to the table</p>
           <Link to="/category" style={{textDecoration:"none"}}><Button className='orderbtn d-block mx-auto'>ORDER NOW</Button></Link> 
              </div>
              <div className='col-md-6 bannerimg'>
                <img src={Briyani} className='d-block mx-auto briyani' alt="home"></img>
              </div>
            </div>
        </div>
    </div>

{/* //Category */}

    <div className='container mx-auto mt-5 pt-5'>
    <h1 className='text-center text-white fs-3 fw-bold' style={{letterSpacing:"2px"}}>CATEGORY</h1>
    <div className='row'>
      {category.map((val)=>(
        <div className='col-md-4 col-lg-4 col-xl-2' key={val.id}>
          <div style={{width:"200px",height:"200px"}} className='bg-light rounded-circle p-3 d-block mx-auto mt-5'>
            <Link to={`/categoryshow/${val.id}`}><img src={val.outersrc} style={{width:"100%",height:"100%",objectFit:'cover'}} className='d-block mx-auto img-fluid' alt="category"></img></Link>
            </div>
            <h4 className='text-center text-white pt-4 fw-bold' style={{letterSpacing:"2px"}}>{val.title}</h4>
        </div>
      ))}
      <Link to="/category" style={{textDecoration:"none"}}><h3 className='text-end fs-5 pt-5 mt-2 text-white fw-bold' style={{letterSpacing:"2px"}}>View All <ArrowRight/></h3></Link>
    </div>
    </div>

    {/* Why Choose Us */}
    <div className='container mx-auto pt-5 mt-5'>
      <h1 className='text-center fs-3 text-white fw-bold' style={{letterSpacing:"2px"}}>WHY CHOOSE US?</h1>
      <div className='row mt-5'>
        <div className='col-md-4'>
          <img src={Deliver} className='bg-white rounded d-block mx-auto choose p-3' width="250" alt='deliver'></img>
          <p className='text-white text-center fs-4 pt-2'>Friendly Delivery</p>
        </div>
        <div className='col-md-4'>
        <img src={Items}  className='bg-white rounded d-block mx-auto choose p-3' width="250" alt="pack"></img>
        <p className='text-white text-center fs-4 pt-2'>Automatic Packing</p>
        </div>
        <div className='col-md-4'>
        <img src={Quality}  className='bg-white rounded d-block mx-auto choose p-3' width="250" alt='quality'></img>
        <p className='text-white text-center fs-4 pt-2'>100% Quality</p>
        </div>
      </div>
    </div>

      {/* hotels */}
      <div className='container mx-auto p-4 mt-5'>
      <h5 className='text-center text-white fs-3 fw-bold pb-5 mt-5' style={{letterSpacing:"5px"}}>ORDER YOUR FOOD WITH <br></br>FAVOUR <span className='text-danger'>RESTAURANT</span></h5>
        <div className='row'>
      {hotel.map((val)=>(
        <div className='col-md-4' key={val.id}>
          <Link to={`/hotel/${val.id}`}><img src={val.hotelsrc} alt="hotels" className='hotelimg'/></Link>
        </div>
      ))}
      </div>
      </div>


    {/* offer food */}
    <div className='container mx-auto mt-5 pt-5 position-relative d-none d-md-block'>
     
      <div className='container offerdiv'>
        <div className='d-flex'>
          <div className='col-2'>
          <img src={Briyani} alt='f1' width="150" className='mx-auto d-block'></img>
          </div>
          <div className='col-5'>
          <h1 className='fs-3 ps-5 pt-4'>Chicken Briyani</h1>
          <p className='fs-6 ps-5 '>Get more with online orders <br/>up to 15% offers</p>
          </div>
          <div className='col-2'>
          <img src={Offer} alt="f2" width="100"></img>
          </div>
        </div>
      </div>

      <div className='container offerdiv2 mt-5 position-absolute end-0'>
        <div className='d-flex'>
          <div className='col-4  ms-5 ps-5 orderfood'>
          <img src={Briyani} alt='f1' width="150" className='mx-auto d-block'></img>
          </div>
          <div className='col-5'>
          <h1 className='fs-3 ps-5 pt-4'>Chicken Briyani</h1>
          <p className='fs-6 ps-5 '>Get more with online orders <br/>up to 15% offers</p>
          </div>
          <div className='col-2'>
          <img src={Offer} alt="f2" width="100"></img>
          </div>
        </div>
      </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      <div className='container offerdiv mt-5'>
        <div className='d-flex'>
          <div className='col-2'>
          <img src={Briyani} alt='f1' width="150" className='mx-auto d-block '></img>
          </div>
          <div className='col-5'>
          <h1 className='fs-3 ps-5 pt-4'>Chicken Briyani</h1>
          <p className='fs-6 ps-5 '>Get more with online orders <br/>up to 15% offers</p>
          </div>
          <div className='col-2'>
          <img src={Offer} alt="f2" width="100"></img>
          </div>
        </div>
      </div>

      <div className='container offerdiv2 position-absolute end-0 mt-5'>
        <div className='d-flex'>
          <div className='col-4 orderfood'>
          <img src={Briyani} alt='f1' width="150" className='mx-auto d-block '></img>
          </div>
          <div className='col-5'>
          <h1 className='fs-3 ps-5 pt-4'>Chicken Briyani</h1>
          <p className='fs-6 ps-5 '>Get more with online orders <br/>up to 15% offers</p>
          </div>
          <div className='col-2'>
          <img src={Offer} alt="f2" width="100"></img>
          </div>
        </div>
      </div>
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>


    {/* Customer Says */}
    <div className='container-fluid mx-auto mt-5 pt-5'>
      <h3 className='text-center text-white fw-bold fs-1' style={{letterSpacing:"3px"}}>WHAT OUT CUSTOMER SAYS</h3>
      <div className='row p-5 gap-0 mt-2  justify-content-center '>
      {customer&&customer.map((val)=>(
        <div className='col-md-6 col-lg-3 bg-light profilediv mt-5' key={val.id} >
          <img src={val.userimg} className='d-block mx-auto bg-white rounded-circle propic' alt="f3" width="150" height="150"></img>
         <div className='d-flex justify-content-center mt-2 '> <h5 className='customername fw-bold'>{val.username}</h5>
         <h5 className='customername ps-3'>⭐({val.rating})</h5></div>
          <p className='text-center mt-1 fs-6 usercontent'>{val.usercontent}</p>
        </div>
      ))}
      </div>
    </div>

    <Footer/>    
    </>
  )
}

export default Home