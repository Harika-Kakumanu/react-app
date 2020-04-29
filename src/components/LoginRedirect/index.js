import React from 'react'
import {Redirect} from 'react-router-dom'

class LoginForm extends React.Component{
    
    gotoGridScreenIfLogged=()=>{
	return 
		<Redirect to={{pathname:'/grid-game'}}/>
    }
    render(){
        if(this.accessTokens){
            return this.gotoGridScreenIfLogged();
        } 
        return(
                <div>
                      <input type='text' placeHolder='UserName'/>
                      <input type='password' placeholder='Password'/>
                      <button onClick={this.gotoGridScreenIfLogged()}>Login</button>
                </div>
            )
     
    }
}
export default LoginForm