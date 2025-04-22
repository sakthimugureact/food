import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ArrowLeft, PlusCircleFill, DashCircle,CartFill } from 'react-bootstrap-icons';
import Footer from '../Components/Footer';
import { Addtocart } from '../Hooks/Cartcontext';


function CategoryShow() {
    const {add,quantities,increment,decrement} = useContext(Addtocart)

    let { id } = useParams()

    const [show, setShow] = useState(null);

   
    const navitocheck = useNavigate()
  

    const [related, setRelated] = useState([]);
    useEffect(() => {
        fetch('/category.json').then((res) => res.json()).then((data) => {
            const relatedData = data.slice(0, 8)
            setRelated(relatedData)
        })
    }, [])
 



    useEffect(() => {
        fetch('/category.json').then((res) => res.json()).then((data) => {
            const showProduct = data.find((p) => p.id === parseInt(id));
            setShow(showProduct)
        })
    }, [id])

    return (
        <>
            <div style={{ backgroundColor: "#118949" }}>
                <Link to='/category' className='ms-5 text-white mt-5 pt-5 fs-3 fw-bold ps-5'><ArrowLeft /></Link>
                <div>
                    {show && <div className="container mx-auto food-container text-white">
                        <div className="row justify-content-center mb-4">
                            <div className="col-12 col-md-6 text-center">
                                <img src={show.innersrc} alt={show.innerTitle} className="img-fluid rounded-circle" width="270px" />
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-3 ms-0 ms-md-5">
                            <div className="quantity-control">
                                <button className="increase-btn text-dark bg-transparent" onClick={() => decrement(show.id)}>
                                    <DashCircle />
                                </button>
                                <span className="fs-3 fw-bold ps-4">{quantities}</span>
                                <button className="decrease-btn text-dark mx-4" onClick={() => increment(show.id)}>
                                    <PlusCircleFill />
                                </button>
                            </div>
                            <div className="price-section">
                                <span className="fs-1 showprice fw-bold" style={{ letterSpacing: "3px" }}>₹ {show.price}</span>
                                <div>
                                    <span className='fs-5'>⭐({show.rating})</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="mb-3 fs-5 fw-bold" style={{ letterSpacing: "2px" }}>{show.innerTitle}</h2>

                        <p className="mb-5 fs-6 d-none d-md-block" style={{ lineHeight: "2.5" }}>
                            {show.innerContent}
                        </p>

                        <div className="d-flex justify-content-between btns">
                            <button className="btn btn-light px-lg-3 px-xl-5 py-2 fs-4 mt-3" style={{ color: "#ff0101", borderRadius: "15px", letterSpacing: "2px" }} onClick={()=>add(show,show.id)}>Add to Cart</button>
                            <button className="btn  px-lg-4 px-xl-5  py-2 text-white fs-4 mt-3" style={{ background: "#ff0101", borderRadius: "15px", letterSpacing: "2px" }} onClick={()=>navitocheck("/checkout")}>Buy Now</button>
                        </div>  

                        <div className='mt-5'>
                            <h5 className='fw-bold' style={{ letterSpacing: "1px" }}>{show.notes} :</h5>
                            {show.points.map((val, index) => (
                                <li key={index} className='fs-6 fw-bold pt-3'>{val}</li>
                            ))}
                        </div>
                    </div>
                    }
                </div>
                <h1 className='text-center fs-4 fw-bold text-white mt-5' style={{ letterSpacing: "2px" }}>RELATED FOODS</h1>
                <hr style={{ width: "20%" }} className='pb-5 mx-auto mt-2 text-white fw-bold'></hr>
                <div className='container mx-auto food-container'>
                <div className='row mt-3'>
                {related && related.map((val)=>(
                    <div key={val.id} className='col-md-5 col-lg-4 col-xl-3 mt-0 mx-auto py-5'>
                    <div className="food-card row justify-content-center mx-auto">
                        <div className='img-food'>
                        <img src={val.outersrc} alt={val.innerTitle} className="food-img rounded-circle d-block mx-auto" />
                        <div className="d-flex flex-column px-4 ">
                            <h6 className="mb-2 fs-6 text-center">{val.innerTitle}</h6>
                            <p className="text-secondary text-center mb-2">Minus eaque omnis aut autem deleniti est. Dolores earum autem deleniti est. ...</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="fs-5 fw-bold text-danger">₹ {val.price}</span>
                                <button className="cart-btn" onClick={()=>add(val)}>
                                    <CartFill/>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    ))
                }
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CategoryShow