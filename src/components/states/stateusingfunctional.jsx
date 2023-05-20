
import React, { useState } from 'react'
import '../functional-component/testf.css'


function Stateusingfunctional() {
    const [studentData, setData] = useState({
        name: "Ankit Kapoor",
        class: "Defined",
        contact: "8437926804",
        email: "ankitkapoor8437@gmail.com"
    })

    const newChange = () => {
        setData({
            name: "Ankit changed",
            class: "unDefined",
            contact: "1234567890",
            email: "ankitkapoor@gmail.com"
        })
    }

    return (
        <div className='student'>
            <h3>Class State Component</h3>
            <h1>Name : {studentData.name} </h1>
            <span>Class: {studentData.class} </span>
            <span>Phone Number: {studentData.contact} </span>
            <span>Email: {studentData.email} </span>
            <button onClick={newChange} >TO CHANGE DATA</button>
        </div>

    )
}

export default Stateusingfunctional;