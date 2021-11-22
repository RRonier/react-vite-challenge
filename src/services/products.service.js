import { API } from "../utils/API"

export const getProductsService = () => API.get('/')
export const addProductService = (payload) => API.post('/', payload)
export const editProductService = (id) => API.put(`/:${id}`)
export const deleteProductService = (id) => API.delete(`/:${id}`)