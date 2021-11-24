import { useEffect } from 'react'
import {
    TextField,
} from "@mui/material"
import CustomButton from '../shared/CustomButton/CustomButton'

const ProductForm = ({
    type,
    onSubmit,
    id,
    name,
    cost,
    department,
    departmentId,
    category,
    categoryId,
    onChange,
    reset
}) => {

    useEffect(() => {
        reset()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, name, cost, department, departmentId, category, categoryId])
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
            <CustomButton type={type} />
        </form>
    )
}

export default ProductForm