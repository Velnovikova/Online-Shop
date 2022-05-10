export const addNewProduct = (product,amount, id) => ({
    type: 'PRODUCT_ADD',
    payload: {
        product,
        amount,
        id,
    }
})
export const removeProductFromCart = (id) => ({
    type: 'PRODUCT_REMOVE',
    payload: {
        id,
        
    
    }
})
export const updateAmountProduct =(amount)=>({
    type:'UPDATE_AMOUNT',
    payload:{
        amount
    }
})