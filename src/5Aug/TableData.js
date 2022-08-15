import React from "react";
import './LeaderBoard.css'
class TableData extends React.Component{
    constructor(props){
        super(props) 
    }
    render(){
        console.log('render of table')
        return(
        <div>
        <table>
            <thead>
            <tr className="sub-heading">
                                <th className="rank">Rank</th>
                                <th className="name">Name</th>
                                <th className="age">Age</th>
                                <th className="scores">Score</th>
                                <th className="rating">Ratings</th>

                            </tr>
            </thead>
            <tbody>
                {
                    this.props.tabledata.map((item)=>(
                        <tr className="sub-heading-2">
                                        <td>{item.rank}</td>
                                        <td >{item.name}</td>
                                        <td >{item.age}</td>
                                        <td >{item.points}</td>
                                        <td>
                                    
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                     <span className="fa fa-star"></span>
                                       <span className="fa fa-star"></span>
                                      </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        )
    }
}
export default TableData