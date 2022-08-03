import React from "react";
import './Product.css'
class Products extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productDetails:[],
            search:'',
            result:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return {productDetails:props.data}
    }
    handleChange=(event)=>{
        //console.log(event.target.value)
        this.setState({search:event.target.value})
    }
    handleSearch=(event)=>{
        event.preventDefault()
        let data=this.state.productDetails.filter((item)=>item.Title===this.state.search)
        this.setState({result:data}) 
    }
    render(){
      
        return(
            <div className="Body">
                <form>
                    <h1 className="Welcome">Welcome User!!</h1>
                    <h3 className="Text">You can search any item here..</h3>
                    <input className="search" type='text' placeholder="enter product name" onChange={(e)=>this.handleChange(e)}></input>
                    <button  onClick={(e)=>this.handleSearch(e)}>Search</button>
                </form>
                <div className="products">
                {
                    this.state.result.map((item)=>(
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
export default Products