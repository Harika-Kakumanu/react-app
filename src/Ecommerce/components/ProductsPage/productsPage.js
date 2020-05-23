import React from 'react';
import {inject,observer} from 'mobx-react';
import {action} from 'mobx'; 
import {v4 as uuidv4} from 'uuid';
import ProductList from '../ProductList/';
import Header from '../Header/';
import SizeFilter from '../SizeFilter/';
import ProductCart from '../../../CartModule/components/ProductCart/';
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'; 
import Pagination from '../Pagination/'
import {MainProductPage,MainHeader,SignOutButton,DisplaySizesAndProducts,
        DisplayProducts} from './styledComponents.js';

@inject('authStore','productStore','history','cartStore')
@observer
class ProductsPage extends React.Component{
    componentDidMount(){
        this.doNetworkCalls();
    }
    
    @action.bound
    getProductstore(){
        return this.props.productStore;
    }
    
    @action.bound
    getCartStore(){
        return this.props.cartStore;
    }
    
    @action.bound
    doNetworkCalls(){
        this.getProductstore().getProductList();
    }
    
    @action.bound
    onClickSignOut(){
       console.log('signout'); 
    }
    
    renderList=observer(()=>{
     return(
        <MainProductPage>
          <MainHeader>
            <SignOutButton onClick={this.onClickSignOut}>SignOut</SignOutButton>
             <ProductCart/>
          </MainHeader>
          <DisplaySizesAndProducts>
                <SizeFilter onSelectSize={this.getProductstore().onSelectSize}/>
                <DisplayProducts>
                     <Header productsCount={this.getProductstore().totalNoOfProductsDisplayed} 
                     onSelectSortBy={this.getProductstore().onChangeSortBy}></Header>
                     <ProductList products={this.getProductstore().sortedAndFilteredProducts} 
                     onClickAddToCart={this.getCartStore().onClickAddToCart}/>
                </DisplayProducts>

          </DisplaySizesAndProducts>
          <Pagination/>
        </MainProductPage>
            );

    })

    render(){
        
        const {getProductListAPIError,getProductListAPIStatus} = this.getProductstore();
        return(
            <LoadingWrapperWithFailure key={uuidv4()} apiError={getProductListAPIError} apiStatus={getProductListAPIStatus}
            onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderList}/> 
            );
    }
}
export {ProductsPage};