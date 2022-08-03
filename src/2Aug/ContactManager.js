import React from "react"
import './ContactManager.css'
class ContactManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contactinfo:this.props.data,
            ipUser:"",
            ipPhone:"",
            ipEmail:"",
            ipAddress:"",
            update:false,
            uid:-1
        }
    }
   handleChange=(e,key)=>{
    if(key==='uname')
    this.setState({ipUser:e.target.value})
    if(key==='phone')
    this.setState({ipPhone:e.target.value})
    if(key==='email')
    this.setState({ipEmail:e.target.value})
    if(key==='addr')
    this.setState({ipAddress:e.target.value})    
   }
    
    handleContact=(e)=>{
        e.preventDefault()
        const obj={
            id:Date.now(),
            fname:this.state.ipUser,
            phone:this.state.ipPhone,
            email:this.state.ipEmail,
            address:this.state.ipAddress
        }
        let newData=[...this.state.contactinfo,obj]
        this.setState({contactinfo:newData})   
    }
    handleDelete=(e,itemid)=>{
      const result=this.state.contactinfo.filter((item)=>item.id!==itemid)
      this.setState({contactinfo:result})
    }
    toggleUpdate=()=>{
        this.setState({update:!this.state.update})
    }
    setUpdateMsg=(e,itemid)=>{
        e.preventDefault()
        this.toggleUpdate()   
        this.setState({uid:itemid})
    }
    handleUpdate=(e)=>{
        e.preventDefault()
        let temp=[...this.state.contactinfo]
        let obj=temp.find((item)=>item.id===this.state.uid)
        obj.fname=this.state.ipUser
        this.setState({contactinfo:temp})
        this.setState({uid:-1})
        this.toggleUpdate()
    }
    render(){
        return(
            <div className="body">
                <h2 className="Manager"> Manager Details:</h2>
            <div className="Container">
                
            {
                this.state.contactinfo.map((item)=>(
                    <div className="card">
                        <h2>Name:{item.fname}</h2>
                        <h3>Phone No.:{item.phone} </h3>
                        <h3>Email:{item.email}</h3>
                        <h3>Address:{item.address}</h3>
                        <button onClick={(e)=>this.handleDelete(e,item.id)}>delete</button>
                        <button onClick={(e)=>this.setUpdateMsg(e,item.id)}>update</button>
                    </div>
                ))
            }</div>
                {
                this.state.update?<h1 className="attn-msg">Attention:Updating ypur contact</h1>:<h1></h1>
                }
                <form>
                Username:<input type='text' onChange={(e)=>this.handleChange(e,'uname')}></input>
                Phone:<input type='text' onChange={(e)=>this.handleChange(e,'phone')}></input>
                Email:<input type='text' onChange={(e)=>this.handleChange(e,'email')}></input>
                Address:<input type='text' onChange={(e)=>this.handleChange(e,'addr')}></input>
                {
                    this.state.update?<button onClick={(e)=>this.handleUpdate(e)}>update contact</button>:<button onClick={(e)=>this.handleContact(e)}>add contact</button>
                }
                
                </form>
            
            </div>
        )
    }
}
export default ContactManager