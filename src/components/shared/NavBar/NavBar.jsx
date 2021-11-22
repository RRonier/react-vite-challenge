import React from 'react'
// import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     })
// }))

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