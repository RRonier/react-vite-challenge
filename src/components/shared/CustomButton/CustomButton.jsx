import React from 'react'
import { Button } from "@mui/material"

const CustomButton = ({ type, onClick }) => (
    <div style={{ marginTop: '15px' }}>
        <Button variant="contained" type="submit" onClick={onClick}>
            {
                type === "add" ? "Add Product"
                    : type === "edit" ? "Edit Product"
                        : Button
            }
        </Button>
    </div>
)

export default CustomButton