import React from "react"
import BinComponent from "./BinComponent"
import CompletedComponent from "./CompletedComponent"
import PendingComponent from "./PendingComponent"
import './PendingComponent.css'
class TaskManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tasks:this.props.data
        }
    }
    getCompletedItems=()=>{
       const result= this.state.tasks.filter((item)=>item.completion===true&&item.deletion===false)
       return result
    }
    getPendingItems=()=>{
        const result= this.state.tasks.filter((item)=>item.completion===false&&item.deletion===false)
        return result
     }
     changeCompletionStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.completion=!obj.completion
        this.setState({tasks:temp}) 
     }
     changeDeletionStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.deletion=!obj.deletion
        this.setState({tasks:temp}) 
     }
     /*deleteTask=(itemid)=>{
        const result=this.state.tasks.filter((item)=>item.id!==itemid)
        this.setState({tasks:result})
     }*/
     
     getDeletedTask=()=>{
        const result= this.state.tasks.filter((item)=>item.deletion===true)
        return result
     }
    render(){
        console.log("render")
        return(
            <div>
                <h1 className="head">Task Manager</h1>
                <PendingComponent pendingTask={this.getPendingItems()} changeCompletion={this.changeCompletionStatus} deleteTask={this.changeDeletionStatus}></PendingComponent>
                <CompletedComponent completedTask={this.getCompletedItems()} changeCompletion={this.changeCompletionStatus} deleteTask={this.changeDeletionStatus}></CompletedComponent>
                <BinComponent deletedTask={this.getDeletedTask()} deleteTask={this.changeDeletionStatus}></BinComponent>
            </div>
        )
    }
}
export default TaskManager