import React from 'react'
import Team from './Team'

const TeamMemberCard = ({props}) => {
  return (
   <Team 
    name={props.name.toUpperCase()}
    img={props.img}
    title={props.title}
    sub={props.sub}
    about={props.about}
   />
  )
}

export default TeamMemberCard