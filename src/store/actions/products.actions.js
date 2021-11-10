import { getProducts } from "../../services/products.service"
import * as actionTypes from "./actionTypes"

export const getProductsStart = () => {
    return {
        type: actionTypes.GET_PRODUCTS_START
    }
}

export const getProductsSuccess = (products) => {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        products: products
    }
}

export const getProductsFail = (error) => {
    return {
        type: actionTypes.GET_PRODUCTS_FAIL,
        error: error
    }
}

// get products
export const getProductsData = () => {
    return dispatch => {
        dispatch(getProductsStart())
        getProducts()
            .then(({ data }) => {
                dispatch(getProductsSuccess(data))
            },
                (error) => dispatch(getProductsFail(error))
            )
            .catch(err => {
                console.log(err)
            })
    }
}
