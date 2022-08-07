import React from "react";
import {Link, NavLink} from 'react-router-dom'
import './Header.css'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:false,
            age:false,
            rank:false,
            score:false
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.value===1){
            return({fname:true})
        }
        if(props.value===2){
            return({age:true})
        }
        if(props.value===3){
            return({rank:true})
        }
        if(props.value===4){
            return({score:true})
        }
    }

    render(){
        const {fname,age,rank,score}=this.state
        return(
            <div className="container">
                <Link to='/'><button className={rank?'btn-primary':'btn-secondary'}>Rank</button></Link>
                <Link to='/name'><button className={fname?'btn-primary':'btn-secondary'}>Name</button></Link>
                <Link to='/age'><button className={age?'btn-primary':'btn-secondary'}>Age</button></Link>
                <Link to='/score'><button className={score?'btn-primary':'btn-secondary'}>Score</button></Link>
            </div>
        )
    }
}
export default Header