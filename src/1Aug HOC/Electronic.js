import React from "react";
import "./Clothing.css"
import HocComponent from "./HocComponent";
class Electronic extends React.Component{
    render(){
        const {result,handleChange,handleSearch}=this.props
        return(
            <div className="Body">
                <form>
                    <h1 className="Welcome">Welcome User!! To a Electronic Store</h1>
                    <h3 className="Text">You can search any item here..</h3>
                    <input type='text'className="search" placeholder="enter product name" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSearch(e)}>search</button>
                </form>
                <div className="products">
                {
                    result.map((item)=>(
                        <div className="Container">
                            <h2 className="title ">Product:{item.Title}</h2>
                            <img src={`${item.Image}`} className="Image" alt="img"/>
                            <p className="price">Price:{item.price}</p>
                            <button className="btn1">Add to Cart</button>
                            <button className='btn'>Buy</button>

                           
                        </div>
                        
                    ))
                    
                }</div>
                
            </div>
        )
    }
}
export default HocComponent(Electronic)