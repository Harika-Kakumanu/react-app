import {observable} from 'mobx';

class ProductModel{
    @observable productId;
    @observable availableSizes;
        @observable currencyFormat;
        @observable currencyId;
       @observable description;
      @observable  installmentsCount
      @observable  isFreeShipping
      @observable  price
       @observable printStyle
       @observable title
       @observable imageURL
    
    constructor(props){
        this.init(props);
    }
    init(props){
        this.productId=props.id;
        this.availableSizes=props.availableSizes;
        this.currencyFormat=props.currencyFormat;
        this.currencyId=props.currencyId;
        this.description=props.description;
        this.installmentsCount=props.installments;
        this.isFreeShipping=props.isFreeShipping;
        this.price=props.price;
        this.printStyle=props.style;
        this.title=props.title;
        this.imageURL=props.image;
        
    }
    
}
export {ProductModel}