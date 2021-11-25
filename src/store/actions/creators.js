import { types } from "./actionTypes"

export const getProductsAction = (data) => {
    return (
        {
            type: types.get,
            data: data
        })
}

export const ErrorAction = (error) => {
    return (
        {
            type: types.error,
            msg: `An error has ocurred: ${error}`
        }
    )
}

export const selectProductAction = (data) => {
    return ({
        type: types.selected,
        selectedItem: data
    })
}

export const deleteProductAction = (id) => {
    return (
        {
            type: types.delete,
            deletedItem: id
        }
    )
}