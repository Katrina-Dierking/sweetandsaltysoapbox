import React from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import "../../assets/styles/register.scss";

const formSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  username: z.string().min(1, "Username is required"),
  email: 
    z.string()
    .min(1, "Email is required")
    .email("Please give a valid email"),
});



const Register = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: zodResolver(formSchema)
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
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="input"
              id="name"
              {...register("name")}
            />
            <p className="error-message">{errors?.name?.message}</p>
          </section>
          <section className="details">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="input"
              id="username"
              {...register("username")}
            />
            <p className="error-message">{errors?.username?.message}</p>
          </section>

          <section className="details">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="input"
              id="email"
              {...register("email")}
            />
            <p className="error-message">{errors?.email?.message}</p>
          </section>

          <button type="submit">Submit</button>
        </form>
      </section>
      <p>Already have an account? Login here.</p>
    </>
  );
}

export default Register