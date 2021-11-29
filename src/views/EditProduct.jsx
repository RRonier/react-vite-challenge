import React, { useEffect } from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import { editProduct, selectItem } from "../store/actions/products.actions"
import { useForm } from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../components/shared/CustomButton/CustomButton'
import { TextField } from "@mui/material"
import ProductForm from "../components/forms/productsForm"

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

    const [formValues, onChange, reset] = useForm({
        formId: id,
        formName: name,
        formCost: cost,
        formDepartment: department,
        formDepartmentId: departmentId,
        formCategory: category,
        formCategoryId: categoryId,
    })

    useEffect(() => {
        // dispatch(selectItem(formId))
        reset()
    }, [
        id,
        name,
        cost,
        department,
        departmentId,
        category,
        categoryId])

    const {
        formId,
        formName,
        formCost,
        formDepartment,
        formDepartmentId,
        formCategory,
        formCategoryId } = formValues

    const submit = (e) => {
        e.preventDefault()
        editProduct(
            formId,
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
                        <TextField
                            required
                            name="formId"
                            label="Id"
                            type="number"
                            onChange={onChange}
                            value={formId}
                        />
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
                        <div style={{ display: 'grid' }}>
                            <TextField
                                name="formCategoryId"
                                label="Category ID"
                                type="number"
                                onChange={onChange}
                                value={formCategoryId}
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