import React from "react"
class Mounting extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:"Ram"
        }
    }

    /*static getDerivedStateFromProps(props,state){
        console.log("inside DS",props)
        return {fname:props.newName};
    }*/
    componentDidMount(){
        console.log("inside didMount")
        this.setState({fname:"john"})
    }
   
    render(){
        console.log('inside render')
        return(
            <div>
                <h1>LifeCycleMethods</h1>
                <h2>My name is :{this.state.fname}</h2>
            </div>
        )
    }
}
export default Mounting