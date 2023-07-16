import React from 'react'
import {qbu} from '../../assets/images/index'
import '../../assets/styles/university.scss'

import Footer from '../../components/footer/Footer'
// import Login from '../../components/loginReg/Login'
import Reg from '../../components/loginReg/Reg'



const University = () => {
  return (
    <section className="universityContainer">
      <section className="uniHeader">
        <img src={qbu} alt="queen bean design university"></img>
        <h2>Queen Bean Design University</h2>
      </section>
      <section className="uniInfo">
        <form>
          <div>
            <label for="courses">Courses: </label>
            <select name="courses" id="courses">
              <option value="soap-making">Soap Making for Beginners</option>
              <option value="soap-making-business">
                Building a Soap Making Business
              </option>
              <option value="online-business">
                Starting an Online Business
              </option>
              <option value="build-website">
                Building Your Own Website From Scratch
              </option>
            </select>
          </div>

          <div>
            <label for="campus-options">Campus Options:</label>
            <select name="campus" id="campus">
              <option value="self-pace">Self-Paced</option>
              <option value="live-group">Live Group</option>
            </select>
          </div>

          <button>Login</button>
        </form>
      </section>
      <Reg />
      <hr></hr>

      <Footer />
    </section>
  );
}
 
export default University