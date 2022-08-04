import React from "react";
import _isEqual from 'lodash/isEqual'
import './PendingComponent.css'
class BinComponent extends React.PureComponent{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(_isEqual(nextProps.deletedTask,this.props.deletedTask)){
            return false
        }
        else{
            return true
        }
    }
    render(){
        console.log("In Bin Component")
        const {deletedTask,deleteTask}=this.props
        return(<div>
              <h2 className="heading">Deleted Tasks</h2>
        
            <div className="container">
              
                {
                    deletedTask.map((item)=>(
                        <div className="card">
                            <h3 className="taskname">{item.taskname}</h3>
                            <h4>{item.taskdesc}</h4>
                            <button className='btn btn-primary' onClick={()=>deleteTask(item.id)}>restore</button>
                        </div>
                    ))
                }
            </div></div>

        )
    }
}
export default BinComponent