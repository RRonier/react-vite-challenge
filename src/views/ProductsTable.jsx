import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Fab
} from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Spinner from "../components/shared/Spinner/Spinner"
import { getProductsData, deleteProduct, selectProduct } from "../store/actions/products.actions"
import { useNavigate } from 'react-router-dom'

const ProductsTable = () => {
    const { data } = useSelector((state) => state.axiosDataReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getProductsData())
    }, [])

    const onCreateProduct = () => {
        navigate("/createProduct")
    }
    const onEditProduct = (id) => {
        dispatch(selectProduct(id))
        navigate(`/editProduct/:${id}`)
    }
    const onDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <>
            {
                !data ? (
                    <p>Loading...</p>
                ) : (
                    <TableContainer style={{ marginTop: '70px' }}>
                        <Table aria-label="simple table" id="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">
                                        ID
                                    </TableCell>
                                    <TableCell align="center">
                                        Name
                                    </TableCell>
                                    <TableCell align="center">
                                        Price
                                    </TableCell>
                                    <TableCell align="center">
                                        Departament
                                    </TableCell>
                                    <TableCell align="center">
                                        Category
                                    </TableCell>
                                    <TableCell align="center">
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data.map(({ id, name, cost, category, department }) => (
                                        <TableRow key={id}>
                                            <TableCell align="center">{id}</TableCell>
                                            <TableCell align="center">{name}</TableCell>
                                            <TableCell align="center">{department[0].name}</TableCell>
                                            <TableCell align="center">{category[0].name}</TableCell>
                                            <TableCell align="center">{`$${cost}`}</TableCell>
                                            <TableCell align="center">
                                                <EditIcon sx={{ margin: '0 10px', cursor: 'pointer' }}
                                                    onClick={() => onEditProduct(id)}
                                                />
                                                <DeleteIcon sx={{ margin: '0 10px', cursor: 'pointer' }}
                                                    onClick={() => onDeleteProduct(id)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            <Fab
                color="primary"
                sx={{
                    position: "fixed",
                    bottom: '15px',
                    right: '20px'
                }}
                onClick={onCreateProduct}
            >
                <AddIcon />
            </Fab>
        </>
    );
};

export default ProductsTable;
