import axios from "axios";
import { types } from '../actions/actionTypes'
import {
    getProductsAction,
    selectProductAction,
    deleteProductAction,
    errorAction
} from "./creators"
import { getProductsService, selectProductService, deleteProductService } from "../../services/products.service"
// import Swal from "sweetalert2";

// get products
export const getProductsData = () => {
    return async (dispatch) => {
        getProductsService().then(
            ({ data }) => {
                dispatch(getProductsAction(data));
            },
            (error) => {
                return dispatch(ErrorAction(error));
            }
        )
    };
};

//select one single product
export const selectItem = (id) => {
    return async (dispatch) => {
        selectProductService(id).then(
            ({ data }) => {
                dispatch(selectProductAction(data))
            },
            (error) => {
                dispatch(errorAction(error))
            }
        )
    };
}

//delete product
export const deleteProduct = (id) => {
    return async (dispatch) => {
        try {
            dispatch(selectItem(id))
            deleteProductService(id).then((response) => {
                dispatch(getProductsData())
            })
        } catch (error) {
            return dispatch(
                {
                    type: types.error,
                    msg: "Unable to delete item"
                });
        }
    };
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
    try {
        await axios.put(`http://localhost:5000/products/${id}`, {
            "id": +id,
            "name": name,
            "cost": +cost,
            "department": [
                {
                    "name": department,
                    "identification": departmentId
                }
            ],
            "category": [
                {
                    "name": category,
                    "id": +categoryId
                }
            ]
        })
        const modified = await axios.get(`http://localhost:5000/products/${id}`)
        const { selected } = modified

        dispatch({
            type: types.modify,
            modifiedItem: selected
        });
        // Swal.fire({
        //     icon: 'success',
        //     title: 'Your item has been modified',
        //     showConfirmButton: false,
        //     timer: 1500
        // })

        setTimeout(() => {
            history('/')
        }, 1500);

    } catch (error) {
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'Something went wrong!',
        //     footer: 'Unable to modify item, who passes the id?'
        // })
        console.log(`error ${error}`)
        return dispatch({
            type: types.error,
            msg: 'Unable to modify item'
        })
    }

};


//create item
export const createNewItem = async (id, name, cost, department, departmentId, category, categoryId, dispatch, history) => {
    axios.post("http://localhost:5000/products", {
        "id": +id,
        "name": name,
        "cost": +cost,
        "department": [
            {
                "name": department,
                "identification": departmentId
            }
        ],
        "category": [
            {
                "name": category,
                "id": +categoryId
            }
        ]
    }).then(({ data }) => {
        dispatch({
            type: types.created,
            createdItem: data
        });
        history('/')
    },
        () => {
            dispatch({
                type: types.error,
                msg: 'Unable to create new item'
            })
        })

}