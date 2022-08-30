import React from 'react'
import LandingPage from './LandingPage'
import Info from './Info'

export default function Form(props) {
  const { currentPage, name, age, email, incrementPage, handleChange } = props


if(currentPage === 0){
  return (<LandingPage incrementPage = {incrementPage}/>)
}
if(currentPage === 1){
  return (<Info props = {props}/>

  )
}
  
  return (
    <div>
    </div>
  )
}
