import React, {useEffect} from 'react'

export default function Info(props) {
  const { name, email, age, handleChange, incrementPage, decrementPage, setFormValues } = props

  useEffect(()=>{
    return(setFormValues({name: '' , age: '', email: ''}))
  },[])


  return (
    <div className="info">
      <h1>Information Form</h1>
      <h4>Please enter your info below...</h4>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your
           Name"
          value={name}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="age"
          placeholder="Your Age"
          value={age}
          onChange={handleChange}
        />
      </form>
      <br></br>
      <div>
        <button onClick = {props.decrementPage}>Back</button>
        <button onClick = {props.incrementPage}>Next</button>
      </div>
    </div>
  )
}
