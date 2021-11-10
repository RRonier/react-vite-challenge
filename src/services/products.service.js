import { API } from "../utils/API"

export const getProducts = () => API.get('/')
export const addProduct = () => API.get('/')
export const editProduct = () => API.get('/:productId')
export const deleteProduct = () => API.get('/:productId')