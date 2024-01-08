
import React from 'react'
import CurrencyFormat from "react-currency-format"
import './SubTotal.css'
import { useStateValue } from '../../../state/StateProvider';

function SubTotal() {
    const [{ basket, user }, dispatch] = useStateValue();
    const price=basket.reduce((a,b)=>a+b.price,0);
  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value)=>(
        <>
        <p>
            SubTotal ({basket.length} items):<strong>{price}</strong>
        </p>
        <small className='subtotal_gift'>
            <input type="checkbox" />
            This order contains a gift
        </small>
        </>
  )}
      decimalScale={2}
      value={0}
      displayType={"text"}
      thousandSeparator={"true"}
      prefix={'$'}
      />
      <button>Proceed To Checkout</button>
    </div>
  )
}

export default SubTotal
