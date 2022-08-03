import React from "react";
import './Clothing.css'
import HocComponent from "./HocComponent";
class Clothing extends React.Component{
    render(){
        const {result,handleChange,handleSearch}=this.props
        return(
            <div className="Body">
                <form>
                    <h1 className="Welcome">Welcome User!! to a Clothing Store</h1>
                    <h3 className="Text">You can search any item here..</h3>
                    <input className="search" type='text' placeholder="enter product name" onChange={(e)=>handleChange(e)}></input>
                    <button  onClick={(e)=>handleSearch(e)}>Search</button>
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
export default HocComponent(Clothing)