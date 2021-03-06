 
import { ADD_TO_CART } from '../Action/Types'
// import update from 'immutability-helper';

const initialState = {
  products: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
    //   let allProducts = state?.products
    //   let modifier = state?.products?.findIndex((product) => {
    //     return product?.id == action?.payload?.id
    //   })
    //   if (modifier !== -1 && allProducts?.length) {
    //     //
    //   } else {
    //     action.payload.quantity = 1
        return {
          ...state,
          products: state.products.concat(action.item),
        }
      
    }
   
 
 
    /**xw
     * Now save the newly modified array of all orders
     * into our redux store
     */
    default:
      return state
  }
}
export default cartReducer;