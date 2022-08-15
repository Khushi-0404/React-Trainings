import React from "react";
import _isEqual from 'lodash/isEqual'
import './PendingComponent.css'
class PendingComponent extends React.PureComponent{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(_isEqual(nextProps.pendingTask,this.props.pendingTask)){
            return false
        }
        else{
            return true
        }
    }
    render(){
      console.log("In Pending Component")
        const {pendingTask,changeCompletion,deleteTask}=this.props
        return(
            <div>
            <h2 className="heading">Pending Tasks</h2>
            <div className="container">
                
                {
                    pendingTask.map((item)=>(
                        <div className="card" >
                            <h3 className="taskname">{item.taskname}</h3>
                            <div className="capsule">
                            <div className="right">50%</div>
                            </div>
                            <h5>{item.taskdesc}</h5>
                            <button className='btn btn-primary' onClick={()=>changeCompletion(item.id)}>mark completed</button>
                            <button className='btn btn-primary'onClick={()=>deleteTask(item.id)}>move to trash</button>
                        </div>
                    ))
                }
            </div></div>

        )
    }
}
export default PendingComponent