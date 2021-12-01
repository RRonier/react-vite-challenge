import { API } from "../utils/API"

export const getProductsService = () => API.get('/')
export const selectProductService = (id) => API.get(`/${id}`)
export const addProductService = (payload) => API.post('/', payload)
export const editProductService = (id, payload) => API.put(`/${id}`, payload)
export const deleteProductService = (id) => API.delete(`/${id}`)