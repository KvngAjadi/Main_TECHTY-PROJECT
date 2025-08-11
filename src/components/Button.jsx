import React from 'react'

const Button = ({name, style}) => {
  return (
    <div className={`p-2 ${style}`}>{name}</div>
  )
}

export default Button