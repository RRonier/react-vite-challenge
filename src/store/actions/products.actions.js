import axios from "axios";
import { types } from '../actions/actionTypes'
import {
    getProductsAction,
    selectProductAction,
    deleteProductAction,
    ErrorAction
} from "./creators"
import { getProductsService } from "../../services/products.service"
// import Swal from "sweetalert2";

// get items
export const getItems = () => {
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


//delete item
export const selectItem = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:5000/products/${id}`);
            const data = response.data;
            dispatch({
                type: types.selected,
                selectedItem: data
            });
        } catch (error) {
            return dispatch(
                {
                    type: types.error,
                    msg: "Unable to select item"
                });
        }
    };
}

const sweetAlertConfirmDeleteItem = (id, dispatch) => {
    // Swal.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    // })
    //     .then((result) => {
    //         if (result.isConfirmed) {
    axios.delete(`http://localhost:5000/products/${id}`);
    dispatch({
        type: types.delete,
        deletedItem: { id }
    })
    // Swal.fire(
    //     'Deleted!',
    //     'Your file has been deleted.',
    //     'success'
    // )
    // }
    // })
}

export const getItemDeleteGetItems = (id) => {

    return async (dispatch) => {

        try {
            dispatch(selectItem(id))
            sweetAlertConfirmDeleteItem(id, dispatch)


        } catch (error) {
            return dispatch(
                {
                    type: types.error,
                    msg: "Unable to delete item"
                });
        }
    };
};


//modify item
export const modifyItem = async (
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