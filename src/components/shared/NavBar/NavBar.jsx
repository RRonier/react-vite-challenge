import React from 'react'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const NavBar = ({ title }) => (
    <MuiAppBar position="absolute">
        <Toolbar
            sx={{
                pr: '24px',
            }}
        >
            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
            >
                {title ? title : "Products List"}
            </Typography>
        </Toolbar>
    </MuiAppBar>
)

export default NavBar