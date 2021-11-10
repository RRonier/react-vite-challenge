import * as actionTypes from '../actions/actionTypes'

import { updateObject } from '../../utils/utility'

const initialState = {
    products: [],
    error: null,
    loading: false
}

const getProductsStart = (state, action) => {
    return updateObject(state, { loading: true })
}

const getProductsSuccess = (state, action) => {
    return updateObject(state, {
        products: action.products,
        error: null,
        loading: false
    })
}

const getProductsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: true
    })
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_START: return getProductsStart(state, action)
        case actionTypes.GET_PRODUCTS_SUCCESS: return getProductsSuccess(state, action)
        case actionTypes.GET_PRODUCTS_FAIL: return getProductsFail(state, action)
        default:
            return state
    }
}
