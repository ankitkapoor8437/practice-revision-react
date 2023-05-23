import React from 'react'

export const ListTodo = (props) => {
    const {key, todoDetails} = props
  return (
    <h3 key={key}>{todoDetails}</h3>
  )
}
 