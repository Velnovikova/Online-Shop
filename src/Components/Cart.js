import React from "react";
//import { addNewProduct } from './actions/actions.js'
import { useState } from "react";
import { List, Avatar, Button, Input, InputNumber } from 'antd';
import '../css/Cart.css';
export default function Cart(props) {
    const [count,setCount]=useState(props.value.amount)
    

    return (
        <div>

            <List >
                <List.Item className='item'>
                    <Avatar className='image' src={props.value.picture} />
                    <List.Item.Meta className='item-name' title={props.value.name} />
                    <Input placeholder={props.value.price} disabled className='input-price' />
                    <InputNumber className='input-count' value={count} type="number" min="1" max="10" onChange={(value)=>{setCount(value)}}/>
                    <Button type='primary'onClick={props.changeAmount(props.value,count,props.value.id)}>Edit</Button>
                    <Button type='danger' onClick={props.onRemove}>Delete</Button>
                </List.Item>
                <hr color='white' />
            </List>
        </div>
    )
}