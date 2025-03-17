import { useFormik } from 'formik'

export const Form = ({initialValues , validationSchema , onSubmit , fields ,buttonText}) => {
   
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit : (values,{resetForm})=>{
            onSubmit(values,{resetForm});

        }
    })
  return (
     
        <form onSubmit={formik.handleSubmit}>
            {
                fields.map((field)=>(
                    <div className='form-group' key={field.name}>
                        <label htmlFor={field.name}></label>
                        <input type={field.type}
                               name={field.name} 
                               id={field.name} 
                               placeholder={field.placeholder}
                                value={formik.values[field.name]}
                                onChange={formik.handleChange}
                                />
                          <p className='error'>{formik.errors[field.name]}</p>     
                    </div>
                ))}
                <div>
                    <input type="submit" value={buttonText} />
                </div>
        </form>

     
  )
}
