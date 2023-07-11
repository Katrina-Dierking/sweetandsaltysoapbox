import React from 'react'
import Team from './Team'

const TeamMemberCard = ({props}) => {
  return (
   <Team 
    name={props.name.toUpperCase()}
    title={props.title}
    about={props.about}
   />
  )
}

export default TeamMemberCard