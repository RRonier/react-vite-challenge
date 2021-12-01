import { types } from '../actions/actionTypes'
import { API } from "../../utils/API"
import {
    getProductsAction,
    selectProductAction,
    deleteProductAction,
    createProductAction,
    editProductAction,
    errorAction
} from "./creators"
import {
    getProductsService,
    selectProductService,
    deleteProductService,
    addProductService,
    editProductService
} from "../../services/products.service"

// get products
export const getProductsData = () => {
    return async (dispatch) => {
        getProductsService().then(
            ({ data }) => {
                dispatch(getProductsAction(data));
            },
            (error) => {
                return dispatch(errorAction(error));
            }
        )
    }
}

//select one single product
export const selectProduct = (id) => {
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
            dispatch(selectProduct(id))
            deleteProductService(id).then(() => {
                dispatch(getProductsData())
            })
        } catch (error) {
            return dispatch(errorAction(error));
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
    editProductService(id, {
        "id": id,
        "name": name,
        "cost": cost,
        "department": [
            {
                "name": department,
                "identification": departmentId
            }
        ],
        "category": [
            {
                "name": category,
                "id": categoryId
            }
        ]
    }).then(() => {
        selectProductService(id)
            .then(({ selected }) => {
                dispatch(editProductAction(selected))
                history('/')
            },
                (error) => dispatch(errorAction(error))
            )
    },
        (error) => dispatch(errorAction(error))
    )
}


//create item
export const addProduct = async (id, name, cost, department, departmentId, category, categoryId, dispatch, history) => {
    const payload = {
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
    }
    addProductService(payload)
        .then(({ data }) => {
            dispatch(createProductAction(data))
            dispatch(getProductsData())
            history('/')
        },
            (error) => {
                dispatch(errorAction(error))
            })

}