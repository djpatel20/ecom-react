import React, { useEffect } from 'react'
import { Form } from '../components/FormikForm'
import { handleValidation } from '../schema/ValidateForm'
import { useNavigate } from 'react-router-dom'
import { toastemitter } from '../utils/toastemitter'



const initialValues = {
  email : "",
  password : ""
}

const fields = [
  {name:"email", label:"Email", type : "email", placeholder: "Enter Email"},
  {name:"password", label:"Password", type : "password", placeholder: "Enter Password"},
]

export const Login = () =>{
  useEffect(()=>{
    sessionStorage.removeItem("isLogged")
  },[])
  const navigate = useNavigate(); 
  const onSubmit = (values , {resetForm}) => {
      const storageData = JSON.parse(localStorage.getItem("formdata")) || [];
      const user = storageData.find(user => user.email === values.email && user.password === values.password);
       if(user){
        sessionStorage.setItem("isLogged",true);
        toastemitter("Verified")
        navigate("/")

       }
       else{
        toastemitter("invalid creditals")
       }
       resetForm();
     
     

  }

  return(
    <div>
     <div className='background_image'>
     <div className="form-container">
      <Form
      initialValues={initialValues}
      fields={fields}
      buttonText={"Login"}
      onSubmit={onSubmit}
      validationSchema={handleValidation("login")}
      />

     </div>

    </div>

  </div>
)
}