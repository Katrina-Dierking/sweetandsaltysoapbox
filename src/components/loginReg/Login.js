
import React , {useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState(''); 
    const [pwd, setPwd] = useState(''); 
    const [errMsg, setErrMsg] = useState(''); 

    //this will be replaced with routing to new page
    const [success, setSuccess] = useState(false)

    useEffect(()=> {
        userRef.current.focus();
    }, [])

    useEffect(()=> {
        setErrMsg('')
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,pwd)
        setUser('');
        setPwd('');
        setSuccess(true)
    }
  return (
    <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br></br>
                <p>
                    <Link to="/dashboard">Go to your Dashboard</Link>
                </p>
            </section>
        ) : (
      <section className="regContainer">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />

          <button>Login</button>
          <p> Need an Account? </p>
          <Link to="/register">Register</Link>
        </form>
      </section>
        )}
    </>
  );
}

export default Login