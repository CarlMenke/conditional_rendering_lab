import './styles/App.css'
import React, { useState , useEffect} from 'react'
import Form from './components/Form'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [formValues, setFormValues] = useState({ name: '', age: '', email: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    // Uses bracket notation to access a key in state that is a match to the input's name and set's it to the inputs value
  }

  const incrementPage = () => {
    setCurrentPage(currentPage + 1)
  }
  const decrementPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className="App">
      <Form
        currentPage={currentPage}
        name={formValues.name}
        age={formValues.age}
        email={formValues.email}
        incrementPage={incrementPage}
        handleChange={handleChange}
        decrementPage = {decrementPage}
        setCurrentPage = {setCurrentPage}
        setFormValues = {setFormValues}
      />
    </div>
  )
}

export default App
