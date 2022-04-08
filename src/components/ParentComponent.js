import React, { useState } from 'react'
import DisplayData from './DisplayData';
import Form from './Form'

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    return (
        <div>
            <Form 
            handleFirstNameChange={handleFirstNameChange} 
            handleLastNameChange={handleLastNameChange} 
            firstName = {firstName}
            lastName = {lastName}
            />
            <DisplayData firstName={firstName} lastName={lastName} />
        </div>
    )
}

export default ParentComponent