import React from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import { useDispatch } from 'react-redux'
import { createNewItem } from "../store/actions/products.actions"
import { useForm } from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { TextField } from "@mui/material"
import CustomButton from '../components/shared/CustomButton/CustomButton'

const CreateProductView = () => {
    const dispatch = useDispatch()
    const history = useNavigate()

    const [formValues, onChange] = useForm({
        id: '',
        name: '',
        cost: 0,
        department: '',
        departmentId: 0,
        category: '',
        categoryId: 0
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

    const submit = (e) => {
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
                        name="id"
                        label="Id"
                        type="number"
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
                <CustomButton type="add" />
            </form>
        </div>
    )
}

export default CreateProductView