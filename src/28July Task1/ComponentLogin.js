import React from "react";
import './css1.css'
import signIn from './SignIn'
export class ComponentLogin extends React.Component{
    constructor(props){
        super(props)
        this.state={
        } 
    }
    
    render(){
        return(
            <div className="Container">
               {<>
                <h2 className="text">Welcome User!</h2>
                <button onClick={this.renderForm}>Sign in</button>
                <button >Sing up</button>
                </>
               } 
            </div>
        )
    }
}
