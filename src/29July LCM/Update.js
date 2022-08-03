import React from "react"
class Update extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: "Ram"};
    }
    static getDerivedStateFromProps(props,state){
        console.log("inside DS",props)
        return {fname:props.newName};
    }
    shouldComponentUpdate() {
    return true;
    }
    changeName = () => {
      this.setState({name: "john"});
    }
    render() {
        console.log("inside render")
      return (
        <div>
        <h1>My name is {this.state.name}</h1>
        <button type="button" onClick={this.changeName}>Edit</button>
        </div>
      );
    }
  }
  export default Update
  