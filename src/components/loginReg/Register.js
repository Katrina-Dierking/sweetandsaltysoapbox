import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import "../../assets/styles/register.scss";

const formSchema = yup.object({
  name: yup
    .string()
    .required("* Full name is required"),
  username: yup
    .string()
    .required("* Username is required"),
  email: yup
    .string()
    .required("* Email is required")
    .email("* Please give a valid email"),
  password: yup
    .string()
    .min(6, "* Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match"),
});



const Register = () => {

    const {
      register, 
      handleSubmit, 
      formState: {errors}
    } = useForm({
      resolver: yupResolver(formSchema),
    });
    const onFormSubmit = (data) => {
      console.log(data)
    }

    console.log(errors)

  return (
    <>
      <section className="regContainer" onSubmit={handleSubmit(onFormSubmit)}>
        <h3> Register</h3>
        <form>
          <section className="details">
        
            <input
              type="text"
              placeholder='Full name'
              className="input"
              id="name"
              {...register("name")}
            />
            <p className="error-message">{errors?.name?.message}</p>
          </section>
          <section className="details">
            <input
              type="text"
              placeholder='Username'
              className="input"
              id="username"
              {...register("username")}
            />
            <p className="error-message">{errors?.username?.message}</p>
          </section>

          <section className="details">
            <input
              type="email"
              placeholder='Email'
              className="input"
              id="email"
              {...register("email")}
            />
            <p className="error-message">{errors?.email?.message}</p>
          </section>

          <section className="details">
            <input
              type="password"
              placeholder='Password'
              className="input"
              id="password"
              {...register("password")}
            />
            <p className="error-message">{errors?.password?.message}</p>
          </section>

          <section className="details">
            <input
              type="password"
              placeholder='Confirm Passord'
              className="input"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            <p className="error-message">{errors?.confirmPassword?.message}</p>
          </section>

          <button type="submit">Submit</button>
        </form>
      </section>
      <p>Already have an account? Login here.</p>
    </>
  );
}

export default Register