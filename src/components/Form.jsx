import React, {useEffect} from 'react'
import LandingPage from './LandingPage'
import Info from './Info'
import Thanks from './Thanks'
import ErrorPage from './ErrorPage'

export default function Form(props) {
  const { currentPage, name, age, email, incrementPage, handleChange, decrementPage , setCurrentPage,setFormValues} = props

if(currentPage === 0){
  return (<LandingPage incrementPage = {incrementPage}/>)
}
if(currentPage === 1){
  return (<Info incrementPage = {incrementPage} decrementPage = {decrementPage} handleChange = {handleChange} setFormValues = {setFormValues}/>)
}

if(currentPage === 2 && name != '' && email != '' && age != ''){
  if(age < 18 ){
    return(<ErrorPage decrementPage = {decrementPage} setFormValues = {setFormValues} />)
  }else{
    return(<Thanks decrementPage = {decrementPage} setFormValues = {setFormValues}/>)
  }
}else if(currentPage === 2){
  setCurrentPage(1);
  return (<Info incrementPage = {incrementPage} decrementPage = {decrementPage} handleChange = {handleChange} setFormValues = {setFormValues}/>)
}
  
  return (
    <div>
    </div>
  )
}
 