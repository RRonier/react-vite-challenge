import * as React from 'react'
import {
    TextField,
} from "@mui/material"
import CustomButton from '../shared/CustomButton/CustomButton'

const AddProductForm = ({ type, onSubmit }) => {
    return (
        <form
            onSubmit={onSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '15px', columnGap: '15px', width: '35%' }}>
                {type === "add" &&
                    <TextField
                        required
                        id="product-id"
                        label="Id"
                        type="number"
                    />}
                <TextField
                    id="product-name"
                    label="Name"
                    type="text"
                />
                <TextField
                    id="product-cost"
                    label="Cost"
                    type="number"
                />
                <TextField
                    id="product-department"
                    label="Department"
                    type="text"
                />
                <TextField
                    id="department-id"
                    label="Department ID"
                    type="number"
                />
                <TextField
                    id="product-category"
                    label="Category"
                    type="text"
                />
                <div style={{ display: 'grid' }}>
                    <TextField
                        id="category-id"
                        label="Category ID"
                        type="number"
                        fullWidth
                    />
                </div>
            </div>
            <CustomButton type={type} />
        </form>
    )
}

export default AddProductForm