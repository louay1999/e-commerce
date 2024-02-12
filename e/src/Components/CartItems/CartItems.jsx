import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/Navbar/cart_cross_icon.png'





const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  
    return (
    
    <div className='cartitems'>
    <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <hr />
    {all_product.map((e)=>{
     if(cartItems[e.id]>0)
     {
      return  <div key={e.id}>
      <div className="cartitems-format cartitems-format-main">
        <img src={e.image} alt="" className='carticon-product-icon' />
        <p>{e.name}</p>
        <p> DT {e.new_price}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>DT {e.new_price*cartItems[e.id]}</p>
        <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>(removeFromCart(e.id))} alt="" />
      </div>
      <hr />
    </div>
     }
     return null;
    })}
    <div className="cartitems-down">
      <div className="cartitems-total">
        <h1>cart Totals</h1>
        <div>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>Dt {getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shopping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3> DT {getTotalCartAmount()}</h3>
          </div>
          <h1>Complete The Empty</h1>
          <div className="cartitems-total-item">
      <input type="text" placeholder="Size" />
    </div>
          <div className="cartitems-total-item">
      <input type="text" placeholder="Name" />
    </div>
    <div className="cartitems-total-item">
      <input type="text" placeholder="Number" />
    </div>
    <div className="cartitems-total-item">
      <input type="text" placeholder="Location" />
    </div>
    <div className="cartitems-total-item">
      <input type="text" placeholder="Message" />
    </div>
        </div>
        <button >PROCEED TO CHECKOUT</button>
      </div>
      <div className="cartitems-promocode">
        <p>IF you have a promo code, Entre it here</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder='promo code' />
          <button>Submit</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CartItems