import React from 'react'
import response from './response'
import Header from './Header'
import TableData from './TableData'
import './LeaderBoard.css'
class JustSort extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[] , 
        }
    }
  
        static getDerivedStateFromProps(props, state) {
            console.log("get derived");
            if(props.value === 1) {
                const sorteddata=[...response.list].sort((a,b)=>a.name.localeCompare(b.name))
                //console.log(sorteddata);
                return ({data:sorteddata})
            } 
    
            if(props.value === 2) {
                const sorteddata=[...response.list].sort((a,b)=>{
                    return Number(a.age)-Number(b.age)
                })
                return ({data:sorteddata})
            }
            if(props.value === 3) {
                const sorteddata=[...response.list].sort((a,b)=>Number(a.rank)-Number(b.rank))
                return ({data:sorteddata})
            }
            if(props.value === 4) {
                const sorteddata=[...response.list].sort((a,b)=>Number(b.points)-Number(a.points))
                return ({data:sorteddata})
            }
        }
    render(){
      
        return(
            <div>
                <Header value={this.props.value}></Header>
                <h2 className='Head'>Sorted based on {this.props.userkey} </h2>
                <TableData tabledata={this.state.data}></TableData>
            </div>
        )
    }
}
export default JustSort