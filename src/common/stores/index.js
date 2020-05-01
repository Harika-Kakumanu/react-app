import AuthService from '../../Authentication/services/AuthServices/index.api';
import AuthStore from  '../../Authentication/stores/AuthStore/';

import ProductService from '../../Ecommerce/services/ProductService/productService.js';
import ProductStore from '../../Ecommerce/stores/ProductStore/';

import CartStore from '../../CartModule/stores/CartStore/';


const authService=new AuthService();
const authStore=new AuthStore(authService);

const productService=new ProductService();
const productStore=new ProductStore(productService);


const cartStore=new CartStore(productStore);

export default {authStore,productStore,cartStore};