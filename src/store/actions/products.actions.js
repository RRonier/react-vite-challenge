import axios from "axios";
import { types } from '../actions/actionTypes'
// import Swal from "sweetalert2";

// get items
export const getItems = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:5000/products");
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
    formName,
    formCost,
    formDepartment,
    formDepartmentId,
    formCategory,
    formCategoryId,
    dispatch,
    history
) => {
    try {
        await axios.put(`http://localhost:5000/products/${id}`, {
            "id": +id,
            "name": formName,
            "cost": +formCost,
            "department": [
                {
                    "name": formDepartment,
                    "identification": formDepartmentId
                }
            ],
            "category": [
                {
                    "name": formCategory,
                    "id": +formCategoryId
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
    if (!isNaN(id) && id !== '') {
        try {
            await axios.post("http://localhost:5000/products", {
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
            const selected = await axios.get(`http://localhost:5000/products/${id}`)
            const { data } = selected

            dispatch({
                type: types.created,
                createdItem: data
            });

            // Swal.fire({
            //     icon: 'success',
            //     title: 'Your new item has been created',
            //     showConfirmButton: false,
            //     timer: 1500
            // })

            history('/')

        } catch (error) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong!',
            //     footer: 'Please enter a unique ID'
            // })
            return dispatch({
                type: types.error,
                msg: 'Unable to create new item'

            })
        }
    } else {
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'Something went wrong!',
        //     footer: 'Please enter valid ID'
        // })
    }

};