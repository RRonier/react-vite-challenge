import React from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import { modifyItem } from "../store/actions/products.actions"
import { useForm } from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../components/shared/CustomButton/CustomButton'
import { TextField } from "@mui/material"

import { useSelector, useDispatch } from 'react-redux';

const EditProductView = () => {

    const { selected } = useSelector(state => state.axiosDataReducer)
    const history = useNavigate()
    const dispatch = useDispatch()

    const id = selected?.id
    const formName = selected?.name
    const formCost = selected?.cost
    const formDepartment = selected?.department[0].name
    const formDepartmentId = selected?.department[0].identification
    const formCategory = selected?.category[0].name
    const formCategoryId = selected?.category[0].id

    const [formValues, onChange, reset] = useForm({
        name: formName,
        cost: formCost,
        department: formDepartment,
        departmentId: formDepartmentId,
        category: formCategory,
        categoryId: formCategoryId,
    })

    const resetForm = () => reset()

    const {
        name,
        cost,
        department,
        departmentId,
        category,
        categoryId } = formValues

    const submit = (e) => {
        e.preventDefault()
        modifyItem(
            id,
            name,
            cost,
            department,
            departmentId,
            category,
            categoryId,
            dispatch,
            history
        )

    }
    return (
        <div style={{ marginTop: '90px' }}>
            <NavBar title="Edit Product" />
            {!selected ? "Loading..." :
                <form
                    onSubmit={submit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '15px', columnGap: '15px', width: '35%' }}>
                        {id &&
                            <TextField
                                required
                                name="id"
                                label="Id"
                                type="number"
                                onChange={onChange}
                                value={id}
                            />}
                        <TextField
                            name="name"
                            label="Name"
                            type="text"
                            onChange={onChange}
                            value={name}
                        />
                        <TextField
                            name="  "
                            label="Cost"
                            type="number"
                            onChange={onChange}
                            value={cost}
                        />
                        <TextField
                            name="department"
                            label="Department"
                            type="text"
                            onChange={onChange}
                            value={department}
                        />
                        <TextField
                            name="departmentId"
                            label="Department ID"
                            type="number"
                            onChange={onChange}
                            value={departmentId}
                        />
                        <TextField
                            name="category"
                            label="Category"
                            type="text"
                            onChange={onChange}
                            value={category}
                        />
                        <div style={{ display: 'grid' }}>
                            <TextField
                                name="categoryId"
                                label="Category ID"
                                type="number"
                                onChange={onChange}
                                value={categoryId}
                            />
                        </div>
                    </div>
                    <CustomButton type="edit" />
                </form>
            }
        </div >
    )
}
export default EditProductView