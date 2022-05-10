import React from 'react';
import Product from '../Components/Product'
const MeatPage=(props)=>{
    const meatproducts=props.sortFunction('meat')
    console.log(meatproducts);
    return (
        <div>
        <div className='background'>
      <div className="card-list">{meatproducts.map((product) => (<div key={product.id}><Product product={product} handleAdd={props.handleAddProduct} /></div>))}</div>
    </div>
    </div>
    )

}
export default MeatPage;