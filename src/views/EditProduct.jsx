import React, { useEffect } from 'react'
// import ProductForm from '../components/forms/productsForm'
import NavBar from '../components/shared/NavBar/NavBar'
import { modifyItem } from "../store/actions/products.actions"
import { TextField } from '@mui/material'
import CustomButton from '../components/shared/CustomButton/CustomButton'
import { useForm } from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';

const EditProductView = () => {

    const { selected } = useSelector(state => state.axiosDataReducer)
    const history = useNavigate()
    const dispatch = useDispatch()

    const id = selected?.id
    const name = selected?.name
    const cost = selected?.cost
    const department = selected?.department[0].name
    const departmentId = selected?.department[0].identification
    const category = selected?.category[0].name
    const categoryId = selected?.category[0].id

    const [formValues, onChange] = useForm({
        formName: name,
        formCost: cost,
        formDepartment: department,
        formDepartmentId: departmentId,
        formCategory: category,
        formCategoryId: categoryId,
    })

    const {
        formName,
        formCost,
        formDepartment,
        formDepartmentId,
        formCategory,
        formCategoryId } = formValues

    const handleUpdate = (e) => {
        console.log("Values:")
        console.log(formValues)
        e.preventDefault()
        modifyItem(
            id,
            formName,
            formCost,
            formDepartment,
            formDepartmentId,
            formCategory,
            formCategoryId,
            dispatch,
            history
        )

    }
    return (
        <div style={{ marginTop: '90px' }}>
            <NavBar title="Edit Product" />
            {/* <ProductForm type="edit" /> */}
            <form
                onSubmit={handleUpdate}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '15px', columnGap: '15px', width: '35%' }}>
                    {/* <TextField
                        name="id"
                        label="Id"
                        type="text"
                        onChange={onChange}
                        value={id}
                    /> */}
                    <TextField
                        name="formName"
                        label="Name"
                        type="text"
                        onChange={onChange}
                        value={formName}
                    />
                    <TextField
                        name="formCost"
                        label="Cost"
                        type="number"
                        onChange={onChange}
                        value={formCost}
                    />
                    <TextField
                        name="formDepartment"
                        label="Department"
                        type="text"
                        onChange={onChange}
                        value={formDepartment}
                    />
                    <TextField
                        name="formDepartmentId"
                        label="Department ID"
                        type="number"
                        onChange={onChange}
                        value={formDepartmentId}
                    />
                    <TextField
                        name="formCategory"
                        label="Category"
                        type="text"
                        onChange={onChange}
                        value={formCategory}
                    />
                    <TextField
                        name="formCategoryId"
                        label="Category ID"
                        type="number"
                        onChange={onChange}
                        value={formCategoryId}

                    />
                </div>
                <CustomButton type="edit" />
            </form>
        </div >
    )
}
export default EditProductView