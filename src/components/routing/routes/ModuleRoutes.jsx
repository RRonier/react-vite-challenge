import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateProductView from '../../../views/CreateProduct'
import EditProductView from '../../../views/EditProduct'

// import CreateItem from '../screen/CreateItem'
// import ConditionalRenderUpdateItem from '../screen/ConditionalRenderUpdateItem'
import Store from '../../../views/Store'


const ModuleRoutes = () =>
(
    <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/createProduct' element={<CreateProductView />} />
        <Route path='/editProduct/:id' element={<EditProductView />} />
        {/* <Redirect to='/' /> */}
    </Routes>
)
export default ModuleRoutes