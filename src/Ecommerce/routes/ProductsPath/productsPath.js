import React from 'react'
import {Route} from 'react-router-dom'
import ProductsPage from '../../components/ProductsPage';
import {E_COMMERCE_PRODUCTS_PATH}  from '../../constants/Product_Path.js';

const routes=  <Route path={E_COMMERCE_PRODUCTS_PATH} component={ProductsPage}/>
    
    

export default routes;
