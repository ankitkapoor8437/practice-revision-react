import React from 'react'
import '../functional-component/testf.css'

// Using props
// const Student = (props) => {
//     return (
//         <div className="student">
//             <h3>Functional Component</h3>
//             <h1>Name : {props.name} </h1>
//             <span>Class: {props.class} </span>
//             <span>Phone Number: {props.contact} </span>
//             <span>Email: {props.email} </span>
//         </div>
//     )
// }

// export default Student;

// Using Destructuring
const Student = (props) => {
    const {name, classPosition } = props;
    return (
        <div className="student">
            <h3>Functional Component</h3>
            <h1>Name : {name} </h1>
            <span>Class: {classPosition} </span>
            <span>Phone Number: {props.contact} </span>
            <span>Email: {props.email} </span>
        </div>
    )
}

export default Student;
