import React from "react";
import './styling.css'
class CloseTickets extends React.PureComponent{
    constructor(props){
        super(props) 
    }
  
    render(){
        console.log("In Close Component")
        const {close, changeCompletionto}=this.props
        console.log(close)
       
        return(
            <div>
                <h2 className="heading">Closed Tickets</h2>
            <div className="container">
                
                {
                    close.map((item)=>(
                        <div className="card">
                            
                        <h3 className="taskname">{item.ticketdesc}</h3>
                        
                            <h3 className="timpespan">Raised Time:{item.timespan}</h3>
                            <h3 className="priority">Priority:{item.priority}</h3>
                            <h5 className="status-resolved">Status:Resolved</h5>
                            <i className="fa fa-refresh fa-2x"onClick={()=>changeCompletionto(item.id)}></i>
                            
                            
                        </div>
                    ))
                }
            </div></div>

        )
    }
}
export default CloseTickets