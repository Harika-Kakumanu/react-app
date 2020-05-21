import React from 'react';

class Button extends React.Component{
    
    render(){
        const {children}=this.props
        return(
            <div>
                <button>{children}</button>
            </div>
            );
    }
}
export default Button;