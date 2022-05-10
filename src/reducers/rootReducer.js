
import { combineReducers } from "redux";
const cart = (state = [], action) => {
    switch (action.type) {
        case 'PRODUCT_ADD': {
            if(action.payload.amount===0){
                return state;
            }
           if(state.includes(action.payload.product)){
             return state.map((item)=>{
                 if(item.id===action.payload.id){
                     item.amount=Number(action.payload.amount)
                 }
                 return item;
             })
           }
           else{
               return [action.payload.product,...state]
           }

               
           
        }
        case 'PRODUCT_REMOVE': {
         return state.filter((product) => product.id !== action.payload.id)
            
        }
        default:
            return state;
    }

}
const productAmount=(state='',action)=>{
    switch(action.type){
        case 'UPDATE_AMOUNT':{
            return action.payload.amount
        }
        case 'PRODUCT_REMOVE':{
            return ''
        }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    cart,
    productAmount
})