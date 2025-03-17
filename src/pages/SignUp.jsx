import { Form } from '../components/FormikForm'
import React, { useEffect } from 'react'
import "../pages/Auth.css"
import { handleValidation } from '../schema/ValidateForm'
import { saveinLocalstorage } from '../api/localStorage'
// import { postApi } from '../api/authapi';
import { toastemitter } from '../utils/toastemitter'
import { Link } from 'react-router-dom'



    const initialValues = {
        myname : "",
        email : "",
        password : "",
        confirm_password :""
    }

    const fields = [
        {name:"myname",label:"FullName",type:"text",placeholder:"Enter Name"},
        {name:"email",label:"Email",type:"email",placeholder:"Enter Email"},
        {name:"password",label:"Password",type:"password",placeholder:"Enter Password"},
        {name:"confirm_password",label:"Confirm Password",type:"password",placeholder:"Confirm Password Again"}]

        const Signup =()=> {
   useEffect(()=>{
            sessionStorage.removeItem("isLogged")
          },[])
       const onSubmit = (values,{resetForm})=>{
            
          const isStored = saveinLocalstorage("formdata",values)
           if(isStored){
            toastemitter("Created Successfully")
            }
           else{
            toastemitter("user already exists")
           }
             resetForm();
        
             
        
    }
    return (
        <div>
    <div className='background_image'>
    <div className="form-container">
       

        <Form  
        initialValues={initialValues} 
        validationSchema={handleValidation("signup")} 
        onSubmit={onSubmit} 
        fields={fields} 
        buttonText={"Signup Now"}/>
        <div>
        <span>Already have an account?</span>
        <Link to="/login" style={{ color: "green" }}>Login</Link>
      </div>
    </div>
    </div>
    </div>
  )
}
export default Signup;

