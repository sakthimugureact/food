import React, { useEffect, useState } from 'react'
import { useLocation,Routes,Route } from 'react-router-dom';
import HeadNav from './HeadNav';
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import Shop from '../Pages/Shop'
import Cart from '../Pages/Cart'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import SocialLogin from '../Pages/SocialLogin';
import Profile from '../Pages/Profile'
import CategoryShow from '../Pages/CategoryShow';
import Checkout from '../Pages/Checkout';
import Hotel from '../Pages/Hotel';

function Displaynav() {
    const [show,setShow] = useState(true);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname==="/login"){
            setShow(false)
        }
        else if(location.pathname==="/register"){
            setShow(false)
        }
        else if(location.pathname===`/social/1`){
            setShow(false)
        }
        else if(location.pathname===`/social/2`){
            setShow(false)
        }
        else if(location.pathname===`/social/3`){
            setShow(false)
        }
        else if(location.pathname===`/social/4`){
            setShow(false)
        }
        else if(location.pathname===`/profile`){
            setShow(false)
        }
        else if(location.pathname===`/cart`){
            setShow(false)
        }
        else{
            setShow(true)
        }
    },[location])
  return (
    <div>
        {show&&<HeadNav/>}
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/social/:id' element={<SocialLogin/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/categoryshow/:id' element={<CategoryShow/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/hotel/:id' element={<Hotel/>}></Route>
        </Routes>
    </div>
  )
}

export default Displaynav