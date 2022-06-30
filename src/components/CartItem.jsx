import React from 'react'
import { LabelPrice } from './LabelPrice'
import { Quanity } from './Quanity'

export const CartItem = ({
    label,
    price,
    qty,
    handelChangeQty,
    id
}) => {
  return (
    <div style={{
        display: "flex",
        gap: "1rem",
        padding: "2rem",
        justifyContent: "center",
        alignContent: "center"
    }}>
        <LabelPrice label={label} price={price} />
        <Quanity id={id} qty={qty} changeCount={handelChangeQty} />
    </div>
  )
}
