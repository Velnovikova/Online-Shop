import React, { useState } from 'react'
import { Card, InputNumber, Button } from 'antd'
import '../css/Product.css'
export default function Product(props) {
    const [count, setCount] = useState(0)



    return (
        <div className='card'>
            <Card cover={<img alt='bhbjhb' className='image' src={props.product.picture} />}>
                <Card.Meta className='description' title={props.product.name} description={props.product.description} />
                <div className='price'>{props.product.price}$</div>
                <InputNumber className='input-count' value={count} min='1' max='10' onChange={(value) => { setCount(value) }} />
                <Button type='primary' onClick={props.handleAdd(props.product, count, props.product.id)}>Add</Button>
            </Card>
        </div>
    )
}