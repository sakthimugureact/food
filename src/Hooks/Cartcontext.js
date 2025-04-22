
import { createContext, useEffect, useRef, useState } from "react";

export  const Addtocart = createContext()

export  const Cartvalue = ({children}) =>{
    const [items,setItems] = useState([]);
    const [quantities, setQuantities] = useState(1);
    const [finalprice,setFinalprice] = useState();
    const discountamt = finalprice*0.10
    const [finaltop,setfinaltop] = useState();
    const [showdis,setShowdis] = useState(false)
    const coupon = useRef();

 
    

    const add = (product,quan) =>{
        setItems((pre)=>[...pre,product])
        alert('item added');
       
        
       setTimeout(()=>{
            setItems((pre) => pre.map(item=>item.id===quan?{...item,quantity:quantities}:item))
            setItems((pre)=>pre.map(item=>item.id===quan?{...item,totalprice:item.price*item.quantity}:item))
        },1000)
       

        setTimeout(() => {
            setQuantities(1)
        }, 2000);
    }   
    

    const remove = (id) =>{
        setItems((pre)=>pre.filter(p => p.id !== id));
    }

    const increment = (id) => {
        setQuantities((pre)=>pre+1)
    }
    
    const decrement = () => {
        setQuantities((pre) => pre === 1 ? pre = 1 : pre - 1);
    }

    const increase = (id)=>{
        setItems((pre)=>pre.map(item=>item.id===id?{...item,quantity:item.quantity+1}:item))
        setTimeout(()=>{
          setItems((pre)=>pre.map(item=>item.id===id?{...item,totalprice:item.price*item.quantity}:item))
        },1000)
    }
    const decrease = (id)=>{
      setItems((pre)=>pre.map(item=>item.id===id?{...item,quantity:item.quantity-1}:item))
      setTimeout(()=>{
        setItems((pre)=>pre.map(item=>item.id===id?{...item,totalprice:item.price*item.quantity}:item))
      },1000)
    }

    const discount = () => {
       if(coupon.current.value==="food10"){
        setfinaltop(finalprice-discountamt);
        alert("Coupon Applied");
        setShowdis(true)
       }
       else{
        alert("Invalid Coupon")
        setShowdis(false)
       }
    }

    useEffect(()=>{
        const ff =  items.reduce((sum, get) => sum + get.totalprice, 0);
        setFinalprice(ff)
        setTimeout(()=>{setShowdis(false)},1000)
    },[items])

    return(
        <Addtocart.Provider value={{items,quantities,add,remove,increment,decrement,setItems,increase,decrease,showdis,finalprice,discount,finaltop,coupon}}>
            {children}
        </Addtocart.Provider>
    )
}