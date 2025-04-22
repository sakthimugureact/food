import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft,CartFill } from 'react-bootstrap-icons';
import { Addtocart } from '../Hooks/Cartcontext';


function Hotel() {
  const {add} = useContext(Addtocart);
    const [hotelval,setHotelval] = useState()
    const[list,setList] = useState([])
    let {id} = useParams()

      useEffect(() => {
            fetch('/data.json').then((res) => res.json()).then((data) => {
              const hotelss = data.hotels
                const showProduct = hotelss.find((p) => p.id === parseInt(id));
                setHotelval(showProduct)
            })

            fetch('/category.json').then((res)=>res.json()).then((data)=>setList(data.splice(0,5)))
        }, [id])
  return (
    <>
    <div className='container mx-auto mt-5'>
      <Link to="/" className='text-white fs-2'><ArrowLeft/></Link>
      {hotelval&&<div>
        <img className='d-block mx-auto mt-5 rounded hotelbanner' src={hotelval.banner} alt='banner'></img>
        <h4 className='text-center py-5 text-white fw-bold' style={{letterSpacing:"2px"}}>FOOD MENU</h4>
        <div className='container mx-auto subfood row'>
          <div className='col-md-6 col-lg-3'>
            <div className='bg-light p-4 rounded-circle subitems mx-auto mt-5' ><img src={hotelval.foodlist1} alt="food"></img></div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='bg-light p-4 rounded-circle subitems mx-auto mt-5' ><img src={hotelval.foodlist1} alt="food"></img></div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='bg-light p-4 rounded-circle subitems mx-auto mt-5' ><img src={hotelval.foodlist3} alt="food"></img></div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='bg-light p-4 rounded-circle subitems mx-auto mt-5' ><img src={hotelval.foodlist1} alt="food"></img></div>
          </div>
        </div>
        </div>}

        {list&&list.map((val,index)=>(
                     <div key={index} className="food-item d-flex justify-content-betweem align-items-center mt-3 p-2 subfoodlist">
                         <img src={val.innersrc} alt="Sausage" className="food-img"/>
                         <div className="flex-grow-1 mx-3 mt-1">
                             <h5 className="mb-1 fs-6 fw-bold">{val.innerTitle}</h5>
                             <p className="text-muted mb-0 small">Minus eaque omnis aut autem deleniti est. Dolores earum...</p>
                         </div>
                         <div className="d-flex align-items-center gap-4">
                             <span className="fw-bold">₹{val.price}</span>
                             <button className="cart-btn" onClick={()=>add(val)}><CartFill/></button>
                         </div>
                     </div>
        ))}
    </div>
    </>
  )
}

export default Hotel