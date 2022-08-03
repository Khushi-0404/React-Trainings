import React from "react"
import axios from 'axios'
import './ContactManager.css'
class ContactManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[],
            statusText:'',
            ipUser:"",
            ipPhone:"",
            ipEmail:"",
            updateFlag: false,
            updateID: -1
            
        }
    }
    clearForm = () => {
        this.setState({id: -1});
        this.setState({ipUser: ''});
        this.setState({ipPhone: ''});
        this.setState({ipEmail: ''});
    }
    toggleFlag = () => {
        this.setState({updateFlag:!this.state.updateFlag});
    }
   componentDidMount=()=>{
      axios.get('http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
    }
    handleChange = (event, key)=>{
        if(key === 'fname') this.setState({ipUser: event.target.value})
        if(key === 'phone') this.setState({ipPhone: event.target.value})
        if(key === 'email') this.setState({ipEmail: event.target.value})
    }
    createUser= (event) => {
        event.preventDefault();
        const newObj = {
            id: Date.now(),
            fname: this.state.ipUser,
            phone: this.state.ipPhone,
            email: this.state.ipEmail,
        }
        this.setState({results: [...this.state.results, newObj]});
        this.clearForm()
        axios.post('http://localhost:3001/empDetails', newObj).then((res)=>{
            console.log(res.data);
            this.setState({statusText:"Your contact is Added"})
        }).catch((err)=>console.log(err));
    }

        
    
   

    deleteUser=(e,itemid)=>{
        e.preventDefault()
        axios.delete(`http://localhost:3001/empDetails/${itemid}`).then((res)=>
        this.setState({statusText:"Your contact is deleted"}
        )).catch((err)=>console.log(err))
        axios.get('http://localhost:3001/empDetails').then((res)=>
        this.setState({results:res.data}
            )).catch((err)=>console.log(err))
    }
    enableUpdateBtn = (event, item) => {
        event.preventDefault();
        this.toggleFlag();
        this.setState({updateID: item.id});
        this.setState({ipUser: item.fname});
        this.setState({ipPhone: item.phone});
        this.setState({ipEmail: item.email});
    }
    handleUpdate = (event) => {
        event.preventDefault();
        let temp = [...this.state.results]
        let newObj = temp.find((item)=>item.id === this.state.updateID)
        newObj.fname = this.state.ipUser
        newObj.phone = this.state.ipPhone
        newObj.email = this.state.ipEmail
        this.setState({results: temp})
        axios.patch(`http://localhost:3001/empDetails/${this.state.updateID}`,{
            fname: this.state.ipUser,
            email: this.state.email,
            phone: this.state.ipPhone,
        }).then((res)=>this.setState({statusText:" Your contact is Updated"})).catch((err)=>console.log(err))

        // after update is done, resetting the values for future
        this.clearForm();
        this.toggleFlag();
    }
    render() {
        return(
             <div className="body">  
                <h1 className="heading-1">API Calls</h1>
                <div className="container">
                {
                    this.state.results.map((item)=>(
                        <div className="card">
                            <h2>{item.fname}</h2>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                            <button onClick={(e)=>this.deleteUser(e,item.id)}>delete</button>
                            <button onClick={(e)=>this.enableUpdateBtn(e, item)}>Update</button>
                        </div>
                    ))
                }</div>
                 <h3 className="msg"> {this.state.statusText}</h3>
                <form className="form">
                    <h3 className="h-3">Add Contact Form </h3>
                Username:
                <input type='text' className="username" placeholder="Enter Username"  onChange={(e)=>this.handleChange(e,'fname')} value={this.state.ipUser}></input>
                Phone:
                <input type='text'className="phone" placeholder="Enter Phone No."  onChange={(e)=>this.handleChange(e,'phone')} value={this.state.ipPhone}></input>
                Email:
                <input type='text' className="email" placeholder="Enter Email" onChange={(e)=>this.handleChange(e,'email')} value={this.state.ipEmail}></input>
                {
                        this.state.updateFlag ? <button className="button-update" onClick={(e)=>this.handleUpdate(e)}>Update contact</button> : <button className="button-add" onClick={(e)=>this.createUser(e)}>Add contact</button>
                    }
               
                
                </form>

                 </div>  

                

           

        )
    }}

export default ContactManager
