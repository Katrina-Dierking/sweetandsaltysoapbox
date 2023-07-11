import React, {useState} from 'react'
import Layout from '../../components/layout/Layout'
import { teamMembers } from '../../assets/data'
import '../../assets/styles/about.scss'
import TeamMemberCard from './TeamMemberCard'

const About = () => {

const [data] = useState(teamMembers)

  return (
    <Layout>
      <main>
        <section className="blueContent">
        <h2>MEET THE TEAM:</h2>
        <section className="teamMembers">
        
        {data.map((mem, index)=> (
          <TeamMemberCard props={mem} key={index} />
        ))}
        </section>
        </section>

        <section className="greenContent">
          <section className="blueDiagonal"></section>
            <section className="whiteDiagonal"></section>
              <section className="aboutSelena">
              
              <h3>SELENA'S CHANCE</h3>
              <img src="" alt="Selena Wampler"/>
              <p>Selena is my daughter-in-law. She was an amazing mom, wife, and daughter.</p>
          
              <p>
              Selena also had a drug addiction she battled for a long time. In 2020, she lost that battle. We tried hard to get her into rehab but the ones with availability wouldn't take her because they didn't take medicaid. We lost her because we couldn't afford to pay for her treatment. 
              </p>
        
              <p>
              I decided then I didn't want that to be the reason anyone lost their loved one. 
              </p>
        
              <p>
              Sweet and Salty Soapbox donates 10% of all profits to a scholarship in Selena's name to help moms battling addiction. We will announce when we are accepting nominations for Selena's Chance recipients. 
              </p>
              </section>
          </section>

        <section className="whiteContent">
          <h3>3:1</h3>
          <p>For every three bars of soap sold at Sweet & Salty Soapbox, one will be donated to local homeless shelters.</p>
          <p>We believe everyone deserves a luxurious bar of soap regardless of their situation. </p>
          <p>Follow us to see how many bars we've given away.</p>
        </section>

        <section className="bottom">
          <h3>INTERNSHIPS</h3>
          <p>Sweet & Salty Soapbox will be opening up positions for internships in 2024 for the following positions: </p>
    
            <li>Video Editor</li>
            <li>Social Media Marketing</li>
            <li>Frontend Software Engineer</li>
            <li>Email Marketer</li>
            <li>Virtual Assistant</li>
            
          <p>These positions will be 6-month paid internships with the possibility of becoming full-time positions.</p>
        </section>
      </main>
    </Layout>
  );
}

export default About