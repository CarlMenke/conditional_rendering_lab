import React, {useEffect} from 'react'

export default function Thanks(props) {
  const { name, email, age, handleChange, incrementPage, decrementPage, setFormValues } = props

  return (
    <div>
      <br></br>
      <img
        alt="thanks"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.smartweb.me%2Fwp-content%2Fuploads%2F2018%2F04%2Fthank-you.png&f=1&nofb=1"
      />
      <br></br>
      <br></br>
      <button onClick = {props.decrementPage}>Back</button>
    </div>
  )
}
