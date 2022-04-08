import React, { useState } from "react";

const Form = () => {
  const [number, setNumber] = useState(0)
  const [error, setError] = useState(null)

  const handleNumberChange = (e) => {
    const newNumber = parseInt(e.target.value)
    if (newNumber <= 5 && newNumber >= 0) {
      setNumber(newNumber)
      setError(null)
    }else{
      setError(`${newNumber} is not a valid Number!`)
    }
  }


  return (
    <form>
      <input type="number" value={number} onChange={handleNumberChange} />
      {error ? <span style={{color : "red"}}>{error}</span> : null }
    </form>
  )
}

//   {
//   handleFirstNameChange, 
//   handleLastNameChange, 
//   firstName, 
//   lastName
// }) {

//   return (
//     <form>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

export default Form;
