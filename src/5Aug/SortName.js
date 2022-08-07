import React from "react";
import response from "./response";
import "./LeaderBoard.css"
import Header from "./Header";
class SortName extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.setState({data:response.list})
    }
    render(){
        return(
            <div>
                <Header value={1}></Header>
                <h2 className="heading">Data is not in specific order</h2>
                <div>
                    <table>
                        <thead>
                            <tr className="sub-heading">
                                <th className="rank">Rank</th>
                                <th className="name">Name</th>
                                <th className="age">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item)=>(
                                    <tr className="sub-heading-2">
                                        <td className="sub-rank">{item.rank}</td>
                                        <td className="sub-name">{item.name}</td>
                                        <td className="sub-age">{item.age}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}
export default SortName