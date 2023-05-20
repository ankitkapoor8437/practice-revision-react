import React from 'react'
import '../functional-component/testf.css'

export const StudentArrow = (props) => {
  return (
    <div className="student">
      <h3>Arrow Component</h3>
      <h1>Name : {props.name} </h1>
      <span>Class: {props.class} </span>
      <span>Phone Number: {props.contact} </span>
      <span>Email: {props.email} </span>
    </div>
  )
}