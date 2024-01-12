import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal/SubTotal";
import { useStateValue } from "../../state/StateProvider";
import Product from "../Product/Product";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  console.log("basket checkout",basket);

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">
            {basket.map((val,index) => {
              return (
                <CheckoutProduct
                  id={val.id}
                  title={val.title}
                  price={val.price}
                  rating={val.rating}
                  image={val.image}
                  index={index}
                />
              );
            })}
          </h2>
        </div>
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}


function CheckoutProduct({index,id,title,price,image,rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket=()=>{
        console.log("index",index);
        dispatch({
            type:"REMOVE_FROM_BASKET",
            index:index
        })
    }

    return (
      <div className='checkoutProduct'>
      <img className='checkoutProduct_img' src={image} />

      <div className='checkoutProduct_info'>
          <p className='checkoutProduct_title'>{title}</p>
          <p className="checkoutProduct_price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className="checkoutProduct_rating">
              {Array(rating)
              .fill()
              .map((_, i) => (
                  <p>🌟</p>
              ))}
          </div>
              <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
  </div>
      );
}




export default Checkout;
