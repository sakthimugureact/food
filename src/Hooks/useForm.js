import  { useState } from 'react'

function useForm() {
    const [values,setValues] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })
    const [error,setError] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
})

const [loginvalues,setLoginvalues] = useState({
  email:"",
  password:""
})
const [loginerr,setLoginerr] = useState({
  email:"",
  password:""
})

    const getValues = (e) =>{
        const {name,value} = e.target;
        setValues({...values,[name]:value});
        setError({...error,[name]:""})
    }

    const getLoginvalues = (e) =>{
      const {name,value} = e.target;
      setLoginvalues({...loginvalues,[name]:value});
      setLoginerr({...loginerr,[name]:""})
    }

    const validateLogin = (e) =>{
      let newErr = {};
      let isVal = true;

      if (!loginvalues.email.trim()) {
        newErr.email = 'Email Required';
        isVal = false;
      } 
      else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(loginvalues.email)) {
        newErr.email = 'Enter a Valid Email';
        isVal = false;
      }

      if (!loginvalues.password.trim()) {
        newErr.password = 'Password Required';
        isVal = false;
      } 

      setLoginerr(newErr)
      return isVal;
    }



    const validateForm = () => {
    
        let newErrors = {};
        let isValid = true;
    
        if (!values.name.trim()) {
          newErrors.name = 'Name Required';
          isValid = false;
        }
    
        if (!values.email.trim()) {
          newErrors.email = 'Email Required';
          isValid = false;
        } 
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
          newErrors.email = 'Enter a Valid Email';
          isValid = false;
        }
        
        if(!values.phone.trim()){
            newErrors.phone = "Phone Number Required"
            isValid = false;
        }
        else if(!/^\d{10}$/.test(values.phone)){
            newErrors.phone = "Enter a Valid Number"
            isValid = false;
        }

        if (!values.password.trim()) {
          newErrors.password = 'Password Required';
          isValid = false;
        } 
        setError(newErrors);
        return isValid;
      };
    return {values,error,getValues,validateForm,loginerr,loginvalues,getLoginvalues,validateLogin,setLoginerr}
}

export default useForm