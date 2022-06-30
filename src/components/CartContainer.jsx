import React, { useState } from 'react'
import { CartItem } from './CartItem'
import { Total } from './Total';

const initData = [
    {
        id: 1,
        product: "Noodles",
        price: 30,
        qty: 1
    },
    {
        id: 2,
        product: "Biriyani",
        price: 90,
        qty: 2
    },
    {
        id: 3,
        product: "Chips",
        price: 10,
        qty:3

    }
]

function calculateTotal(products){
 return   products.reduce((acc, c) => acc+ (c.price*c.qty) , 0)
}

export const CartContainer = () => {
    const [data, setData] = useState(initData)


    const handelChangeQty = (id,amount) => {
let updatedData = data.map(item => {
    if(item.id === id){
        return {
            ...item, 
            qty: item.qty+amount
        }
    }
    else{
        return item
    }
})
setData(updatedData)
    }

  return (
    <div>
        {
            data.map(item => <CartItem 
            key={item.id}
            id={item.id}
            label={item.product}
            qty = {item.qty}
            price = {item.price}
            handelChangeQty = {handelChangeQty}
            />
            )
        }

        


        <Total  total={calculateTotal(data)}/>
    </div>
  )
}
