import React from 'react'
import { Button } from './Button'

export const Quanity = ({
    qty,
    changeCount,
    id

}) => {
  return (
    <div style={{
        display: "flex",
        gap: "1rem"
    }}>
    <Button disabled={qty===0} onclick={() => changeCount(id,-1)}>-</Button>
    <div>
        <h4> {qty}</h4>
       </div>
    <Button onclick={() => changeCount(id,+1)}>+</Button>
    </div>
  )
}
