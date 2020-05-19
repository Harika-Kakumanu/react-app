import React from 'react';
import {observer} from 'mobx-react';
import {observable,action} from 'mobx';

function withScreenSizeDetectors(WrappedComponent){
    return observer(
            class extends React.Component{
               @observable width='';
               componentDidMount(){
                   this.updateWindowDimensions();
                   window.addEventListener("resize", this.updateWindowDimensions);
               }
               componentWillUnmount(){
                   window.removeEventListener("resize", this.updateWindowDimensions);
               }
                @action.bound
                updateWindowDimensions(){
                     this.width= window.innerWidth;
                };
                
                render(){
                    return(
                        <WrappedComponent 
                        {...this.props}
                        isMobile={this.width<576} 
                        isTablet={this.width>=576 && this.width<992} 
                        isDesktop={this.width>=992} />
                        );
                }
            }
        );
}
export {withScreenSizeDetectors};