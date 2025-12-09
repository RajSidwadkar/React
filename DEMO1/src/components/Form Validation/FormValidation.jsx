import React, { use } from 'react'
import {useFormik} from 'formik'
import { signUpValidation } from './signUpValidation'


const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const FormValidation = () => {
    const {handleSubmit , handleBlur, handleChange, values, errors} = useFormik({
        initialValues : initialValues,
        onSubmit: (values) => {
            console.log('Form data', values);
        },
        validationSchema: signUpValidation
    });
  return (
    <div>
        <form style={{margin: '50px'}} onSubmit={handleSubmit}>
           <div> <label htmlFor="Name">Name: </label>
            <input type="text" name="name" placeholder="Enter your name" onBlur={handleBlur} onChange={handleChange}  />
           </div>
           {errors.name && <small>{errors.name}</small>}   <br />        <br />

           <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" placeholder="Enter your email" onBlur={handleBlur} onChange={handleChange}  />
           </div>
           {errors.email && <small>{errors.email}</small>}           <br />
           <br />
           <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Enter your password" onBlur={handleBlur} onChange={handleChange}  />
           </div>
           {errors.password && <small>{errors.password}</small>}  <br /> <br />

           <div>
           <label htmlFor="confirmPassword">Confirm Password: </label>
              <input type="password" name="confirmPassword" placeholder="Confirm your password" onBlur={handleBlur} onChange={handleChange}  />
           </div>
           {errors.confirmPassword && <small>{errors.confirmPassword}</small>}           <br />           <br />
           <br />           <br />

              <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default FormValidation




