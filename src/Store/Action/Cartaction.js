import {ADD_TO_CART} from './Types'


export const addCart = (item) => ({
    type: ADD_TO_CART,
        item
})