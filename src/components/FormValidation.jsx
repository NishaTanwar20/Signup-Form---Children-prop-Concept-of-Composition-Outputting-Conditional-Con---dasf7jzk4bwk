import React , {useState} from 'react'

const FormValidation = () => {
    const [InputValue,setInputValue] = useState("");
    const [Error , setError] = useState("");
    const handleInputs = (e) => {
        setInputValue(e.target.value);
    }

    const checkValidation = (event) => {

    }
    
  return (
    
  )
}

export default FormValidation