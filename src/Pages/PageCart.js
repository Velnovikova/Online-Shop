import React from "react";
import Cart from "../Components/Cart";
import ModalButton from "../Components/form";


//import { connect } from "react-redux";


const PageCart = (props) => {
    if (props.cart.length === 0) {
        return (<div>
            <h2 className='empty-cart'style={{color:'black'}}> Cart is empty </h2>
        </div>
        )
    }
    else{
    return (
        <div>
            <div>{props.cart.map((productcart) => (<div key={productcart.id}>
                <Cart value={productcart}
                    onRemove={props.handleRemoveProductFromCart(productcart.id)}
                    changeAmount={props.changeAmount} /></div >))}
            </div>
            <div className='total-amount'> Total amount {props.cart.reduce((acc, item) => acc + item.price * item.amount, 0)}$ </div>
            <ModalButton />
        </div >
    )
            }
}
export default PageCart;

// <div>{cart.map((productcart) => (<div key={productcart.id}><Cart value={productcart} onRemove={handleRemoveProductFromCart(productcart.id)} /></div>))}</div>