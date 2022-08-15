import React from "react";
import './styling.css';
class OpenTicket extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            openTicket : this.props.open
        }
    } 
   
    render(){
      console.log("In Open Ticket  Component");
      console.log(this.state.openTicket)
      const {changeStatus}=this.props
      
        return(
            <div>
            <h2 className="heading">Open Tickets
            </h2>

            <div className="container">
                
            {
                    this.state.openTicket.filter(item => item.priority === 1&&item.ticketStatus===true).map((item) =>(
                        <div className="card-1" >
                            <h3 className="taskname">{item.ticketdesc}</h3>
                            <h3 className="timpespan">Raised Time:{item.timespan}</h3>
                            <h3 className="priority">Priority{item.priority}</h3>
                            <p className="status">Status</p>
                            <div className="capsule">
                            <div className="right-1">60%</div>
                            <i class="fa fa-trash fa-2x" onClick={()=>changeStatus(item.id)}></i>
                            </div>
                           
                            
                        </div>
                       
                    ))
                }
                {
                    this.state.openTicket.filter(item => item.priority === 2&&item.ticketStatus===true).map((item) =>(
                        <div className="card-2" >
                            <h3 className="taskname">{item.ticketdesc}</h3>
                            <h3 className="timpespan">Raised Time:{item.timespan}</h3>
                            <h3 className="priority">Priority{item.priority}</h3>
                            <p className="status">Status</p>
                            <div className="capsule">
                            <div className="right-2">80%</div>
                            <i class="fa fa-trash fa-2x" onClick={()=>changeStatus(item.id)}></i>
                            </div>
                            
                        </div>
                    ))
                }
                {
                    this.state.openTicket.filter(item => item.priority === 3&&item.ticketStatus===true).map((item) =>(
                        <div className="card-3" >
                            <h3 className="taskname">{item.ticketdesc}</h3>
                            <h3 className="timpespan">Raised Time:{item.timespan}</h3>
                            <h3 className="priority">Priority{item.priority}</h3>
                            <p className="status">Status</p>
                            <div className="capsule">
                            <div className="right-3">50%</div>
                            <i class="fa fa-trash fa-2x" onClick={()=>changeStatus(item.id)}></i>
                            </div>
                            
                        </div>
                    ))
                }
                {
                    this.state.openTicket.filter(item => item.priority === 4&&item.ticketStatus===true).map((item) =>(
                        <div className="card-4" >
                            <h3 className="taskname">{item.ticketdesc}</h3>
                            <h3 className="timpespan">Raised Time:{item.timespan}</h3>
                            <h3 className="priority">Priority{item.priority}</h3>
                            <p className="status">Status</p>
                            <div className="capsule">
                            <div className="right-4"><p>20%</p></div>
                            <i className="fa fa-trash fa-2x" onClick={()=>changeStatus(item.id)}></i>
</div>
                            
                        </div>
                    ))
                }
            </div>
        
            </div>

        )
    }
}
export default OpenTicket