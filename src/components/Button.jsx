import React, { Children } from 'react'

export const Button = ({onclick,
    children,
    disabled}) => {
    
  return (
    <button style={{
        padding: "1rem",
        border: 0,
        borderWidth: 0,
        fontWeight: "bold",
        backgroundColor: "tomato",
        color: "white"
        
    }} disabled={disabled} onClick={onclick}
    >
        {children}
        </button>
  )
}
