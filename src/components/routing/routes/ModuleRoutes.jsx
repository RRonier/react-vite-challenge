import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateProductView from '../../../views/createProduct/CreateProduct'
import EditProductView from '../../../views/editProduct/EditProduct'

import Store from '../../../views/Productstore'


const ModuleRoutes = () =>
(
    <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/createProduct' element={<CreateProductView />} />
        <Route path='/editProduct/:id' element={<EditProductView />} />
    </Routes>
)
export default ModuleRoutes