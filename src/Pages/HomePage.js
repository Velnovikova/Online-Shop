import React from 'react';
import '../css/HomePage.css'
import Product from '../Components/Product';




export default function HomePage(props){
    
    return (<div>
        <div className='background'>
      <div className="card-list">{props.products.map((product) => (<div key={product.id}><Product product={product} handleAdd={props.handleAddProduct} /></div>))}</div>
    </div>
    </div>
    )
}
