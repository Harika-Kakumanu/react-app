import {computed,observable,action} from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {ProductModel} from '../models/ProductModel/product.js';
import {API_INITIAL,API_FAILED,API_SUCCESS,API_FETCHING} from '@ib/api-constants';

class ProductStore{
    @observable productList;
    @observable getProductListAPIStatus;
    @observable getProductListAPIError
    productsAPIService
    @observable sizeFilter
    @observable sortBy
    
    constructor(productsAPIService){
        this.productsAPIService=productsAPIService;
        this.init();
        
    }
    
    @action.bound
    init(){
        this.productList=[]
       this.getProductListAPIStatus='API_INITIAL';
       this.getProductListAPIError=null;
       this.sortBy='SELECT';
       this.sizeFilter=[];
    }
    
    @action.bound
    getProductList(){
        const productPromise=this.productsAPIService.getProductsApi();
        return bindPromiseWithOnSuccess(productPromise)
        .to(this.setGetProductListAPIStatus,this.setProductListResponse)
        .catch(this.setGetProductListAPIError)
    }
    
    @action.bound
    setProductListResponse(productResponse){
        productResponse.map((product)=>{
            const productModel=new ProductModel(product);
            this.productList.push(productModel);
        });
    }
    
    @action.bound
    setGetProductListAPIError(error){
        this.getProductListAPIError=error;
    }
    
    @action.bound
    setGetProductListAPIStatus(apiStatus){
        this.getProductListAPIStatus=apiStatus;
    }
    
    @action.bound
    onChangeSortBy(value){
        if(value==='Lowest to highest'){
            this.sortBy='ASCENDING';
        }
        else if(value==='Highest to lowest'){
            this.sortBy='DESCENDING';
        }
        else{
          this.sortBy='SELECT';
        }
    }
    
    @action.bound
    onSelectSize(value){
        this.sizeFilter.push(value);
    }
    
    @computed get products(){
        if(this.sortBy==='ASCENDING'){
           let ascendingList=this.productList.slice().sort((firstProduct,secondProduct)=>{
                return firstProduct.price>secondProduct.price?1:-1;
            });
            return ascendingList;
            
        }
        else if(this.sortBy==='DESCENDING'){
           let descendingList=this.productList.slice().sort((firstProduct,secondProduct)=>{
                return firstProduct.price<secondProduct.price?1:-1;
            });
            return descendingList;
        }
        else{
             
            return this.productList;
        }
    }
    
    @computed get sortedAndFilteredProducts(){
        if(this.sizeFilter.length===0){
            return this.products;
        }
        else{
            let updatedList=[];
        for(let i=0;i<this.products.length;i++)
        {
                for(let k=0;k<this.products[i].availableSizes.length;k++){
                    for(let j=0;j<this.sizeFilter.length;j++){
                   if(this.sizeFilter[j]===this.products[i].availableSizes[k]){
                       if(updatedList.indexOf(this.products[i])===-1){
                             updatedList.push(this.products[i]);
                       }
                        break;
                   }
                }
            }
        }
        return updatedList;
    }
    }
    
    @computed get totalNoOfProductsDisplayed(){
        return this.sortedAndFilteredProducts.length;
    }
}

export { ProductStore };