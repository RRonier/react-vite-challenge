import { types } from "../actions/actionTypes";

const initialState = {
    data: [],
    selected: null,
    deleted: null,
    created: null,
    modified: null,
    error: ''
}

export const axiosDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.get:
            return {
                ...state,
                data: action.data
            }
        case types.selected:
            return {
                ...state,
                selected: action.selectedItem
            }
        case types.delete:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.deletedItem.id),
                deleted: action.deletedItem
            }
        case types.created:
            return {
                ...state,
                created: action.createdItem
            }
        case types.modified:
            return {
                ...state,
                modified: action.modifiedItem
            }

        case types.error:
            return {
                ...state,
                error: action.msg
            }
        default:
            return state;
    }
}
