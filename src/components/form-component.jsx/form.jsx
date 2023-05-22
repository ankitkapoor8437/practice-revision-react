import React, { useState } from 'react'
import '../functional-component/testf.css'


const FormCompopent = () => {
    const [formData, setData] = useState({ firstname: "", lastname: "" })
    const handleFirstNameChange = (event) => {
        setData({
            firstname: event.target.value,
        })
        console.log(formData.firstname)
    }
    const handleLastnameChange = (event) => {
        setData({
            lastname: event.target.value,
        })
        console.log(formData.lastname)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            fname: formData.firstname,
            lname: formData.lastname
        });
    }
    return (
        <div className='student'>
            <form onSubmit={handleSubmit}>
                <input onChange={handleFirstNameChange} type="text" placeholder="Firstname" value={formData.firstname} />
                <input onChange={handleLastnameChange} type="text" placeholder="Lastname" value={formData.lastname} />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default FormCompopent;