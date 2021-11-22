import React from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import ProductsForm from "../components/forms/productsForm"
import { useDispatch } from 'react-redux'
import { createNewItem } from "../store/actions/products.actions"
import { useForm } from '../hooks/useForm'
import { TextField } from '@mui/material'
import CustomButton from '../components/shared/CustomButton/CustomButton'
import { useNavigate } from 'react-router-dom'

const CreateProductView = () => {
    const dispatch = useDispatch()
    const history = useNavigate()

    const [formValues, onChange] = useForm({
        id: '',
        name: '',
        cost: '',
        department: '',
        departmentId: '',
        category: '',
        categoryId: ''
    })

    const {
        id,
        name,
        cost,
        department,
        departmentId,
        category,
        categoryId
    } = formValues

    const onSubmit = (e) => {
        e.preventDefault()
        createNewItem(
            id,
            name,
            cost,
            department,
            departmentId,
            category,
            categoryId,
            dispatch,
            history
        ).then(() => history("/"))
    }
    return (
        <div style={{ marginTop: '90px' }}>
            <NavBar title="Add Product" />
            {/* <ProductsForm type="add" onSubmit={onSubmit} /> */}
            <form
                onSubmit={onSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '15px', columnGap: '15px', width: '35%' }}>
                    <TextField
                        name="id"
                        label="id"
                        type="text"
                        onChange={onChange}
                        value={id}
                    />
                    <TextField
                        name="name"
                        label="Name"
                        type="text"
                        onChange={onChange}
                        value={name}
                    />
                    <TextField
                        name="cost"
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
                    <TextField
                        name="categoryId"
                        label="Category ID"
                        type="number"
                        onChange={onChange}
                        value={categoryId}

                    />
                </div>
                <CustomButton type="add" />
            </form>
        </div>
    )
}

export default CreateProductView