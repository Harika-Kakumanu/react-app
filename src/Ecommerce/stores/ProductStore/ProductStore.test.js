import ProductStore from '.';
import ProductService from '../../services/ProductService/'
import {API_INITIAL,API_FETCHING} from '@ib/api-constants';
import ProductDataJson from '../../fixtures/ProductsData.json';

describe('ProductStore',()=>{
    let productStore;
    let productService;
    
    beforeEach(()=>{
         productService=new ProductService();
         productStore=new ProductStore(productService);
    });
    
    test('ProductStore initial status',()=>{
       expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
       expect(productStore.getProductListAPIError).toBe(null);
    });
    
    test('ProductStore ApiError',()=>{
        productStore.setGetProductListAPIError('Error')
        expect(productStore.getProductListAPIError).toBe('Error')
    })
    
    test('ProductStore ApiStatus',()=>{
       productStore.setGetProductListAPIStatus('Success');
       expect(productStore.getProductListAPIStatus).toBe('Success');
    });
    
    test('productStore sortedAndFilteredProducts',()=>{
        productStore.productList=ProductDataJson;
        expect(productStore.sortedAndFilteredProducts.length).toBe(16);
        
        productStore.onSelectSize('XS');
        expect(productStore.sortedAndFilteredProducts.length).toBe(2);
        
        productStore.onSelectSize('XS');
        expect(productStore.sortedAndFilteredProducts.length).toBe(16);
        
        productStore.onSelectSize('XS');
        productStore.onChangeSortBy('Highest to lowest');
        let list=[];
        list=productStore.sortedAndFilteredProducts.map(each=>{
            return each.id;
        });
        let dummyList=[2,12];
        expect(list).toEqual(dummyList);
        
        productStore.onSelectSize('XS');
        productStore.onChangeSortBy('SELECT');
        expect(productStore.sortedAndFilteredProducts.length).toBe(16);
    });
    
})