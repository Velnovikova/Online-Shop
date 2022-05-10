import React from 'react';
import Product from '../Components/Product'
const MilkPage=(props)=>{
    const milkproducts=props.sortFunction('milk')
    console.log(milkproducts);
    return (
        <div>
        <div className='background'>
      <div className="card-list">{milkproducts.map((product) => (<div key={product.id}><Product product={product} handleAdd={props.handleAddProduct} /></div>))}</div>
    </div>
    </div>
    )

}
export default MilkPage;