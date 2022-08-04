import React from "react";
import _isEqual from 'lodash/isEqual'
import './PendingComponent.css'
class CompletedComponent extends React.PureComponent{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(_isEqual(nextProps.completedTask,this.props.completedTask)){
            return false
        }
        else{
            return true
        }
    }
    render(){
        console.log("In Completed Component")
        const {completedTask,changeCompletion,deleteTask}=this.props
        return(
            <div>
                <h2 className="heading">Completed Tasks</h2>
            <div className="container">
                
                {
                    completedTask.map((item)=>(
                        <div className="card">
                            <h3 className="taskname">{item.taskname}</h3>
                            <h4>{item.taskdesc}</h4>
                            <button className='btn btn-primary'onClick={()=>deleteTask(item.id)}>move to trash</button>
                            <button  className='btn btn-primary' onClick={()=>changeCompletion(item.id)}>mark incomplete</button>
                        </div>
                    ))
                }
            </div></div>

        )
    }
}
export default CompletedComponent