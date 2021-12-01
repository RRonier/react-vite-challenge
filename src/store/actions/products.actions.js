import { types } from '../actions/actionTypes'
import { API } from "../../utils/API"
import {
    getProductsAction,
    selectProductAction,
    deleteProductAction,
    createProductAction,
    errorAction
} from "./creators"
import { getProductsService, selectProductService, deleteProductService, addProductService } from "../../services/products.service"

// get products
export const getProductsData = () => {
    return async (dispatch) => {
        try {
            const response = await API.get("/");
            const data = response.data;
            dispatch({
                type: types.get,
                data: data
            });
        } catch (error) {
            return dispatch(
                {
                    type: types.error,
                    msg: "Unable to get items"
                });
        }
    };
    // return async (dispatch) => {
    //     getProductsService().then(
    //         ({ data }) => {
    //             dispatch(getProductsAction(data));
    //         },
    //         (error) => {
    //             return dispatch(errorAction(error));
    //         }
    //     )
    // }
}

//select one single product
export const selectProduct = (id) => {
    // return async (dispatch) => {
    //     selectProductService(id).then(
    //         ({ data }) => {
    //             dispatch(selectProductAction(data))
    //         },
    //         (error) => {
    //             dispatch(errorAction(error))
    //         }
    //     )
    // };
}

//delete product
export const deleteProduct = (id) => {
    // return async (dispatch) => {
    //     try {
    //         dispatch(selectProduct(id))
    //         deleteProductService(id).then(() => {
    //             dispatch(getProductsData())
    //         })
    //     } catch (error) {
    //         return dispatch(errorAction(error));
    //     }
    // };
};

//edit item
export const editProduct = async (
    id,
    name,
    cost,
    department,
    departmentId,
    category,
    categoryId,
    dispatch,
    history
) => {
    // try {
    //     await axios.put(`http://localhost:5000/products/${id}`, {
    //         "id": +id,
    //         "name": name,
    //         "cost": +cost,
    //         "department": [
    //             {
    //                 "name": department,
    //                 "identification": departmentId
    //             }
    //         ],
    //         "category": [
    //             {
    //                 "name": category,
    //                 "id": +categoryId
    //             }
    //         ]
    //     })
    //     const modified = await axios.get(`http://localhost:5000/products/${id}`)
    //     const { selected } = modified

    //     dispatch({
    //         type: types.modify,
    //         modifiedItem: selected
    //     });
    //     // Swal.fire({
    //     //     icon: 'success',
    //     //     title: 'Your item has been modified',
    //     //     showConfirmButton: false,
    //     //     timer: 1500
    //     // })

    //     setTimeout(() => {
    //         history('/')
    //     }, 1500);

    // } catch (error) {
    //     // Swal.fire({
    //     //     icon: 'error',
    //     //     title: 'Oops...',
    //     //     text: 'Something went wrong!',
    //     //     footer: 'Unable to modify item, who passes the id?'
    //     // })
    //     console.log(`error ${error}`)
    //     return dispatch({
    //         type: types.error,
    //         msg: 'Unable to modify item'
    //     })
    // }

};


//create item
export const addProduct = async (id, name, cost, department, departmentId, category, categoryId, dispatch, history) => {
    // const payload = {
    //     "id": +id,
    //     "name": name,
    //     "cost": +cost,
    //     "department": [
    //         {
    //             "name": department,
    //             "identification": departmentId
    //         }
    //     ],
    //     "category": [
    //         {
    //             "name": category,
    //             "id": +categoryId
    //         }
    //     ]
    // }
    // addProductService(payload)
    //     .then(({ data }) => {
    //         dispatch(createProductAction(data))
    //         dispatch(getProductsData())
    //         history('/')
    //     },
    //         (error) => {
    //             dispatch(errorAction(error))
    //         })

}