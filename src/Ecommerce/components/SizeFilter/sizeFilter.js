import React from  'react';
import {observer} from 'mobx-react';
import {DisplaySizes,Button} from './styledComponents'

@observer
class SizeFilter extends React.Component{
    
    onSelectSize=(event)=>{
        const {onSelectSize}=this.props;
        onSelectSize(event.target.value);
    }
    render(){
        return(
            <DisplaySizes>
                <Button value='XS' onClick={this.onSelectSize}>XS</Button>
                <Button value='S' onClick={this.onSelectSize} >S</Button>
                <Button value='M' onClick={this.onSelectSize}>M</Button>
                <Button value='L' onClick={this.onSelectSize}>L</Button>
                <Button value='XL' onClick={this.onSelectSize}>XL</Button>
                <Button value='XXL' onClick={this.onSelectSize}>XXL</Button>
            </DisplaySizes>
            );
    }
}

export {SizeFilter};

