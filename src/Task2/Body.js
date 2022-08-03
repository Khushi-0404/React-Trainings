import React from 'react'
import './body.css'
import Data from './object'
function Body() {
    return (

        <div className="Body">
            {

                Data.map((ele) => {
                    return (

                        <div className='Container'>
                            <div className='Image'>
                                <img src={`${ele.Image}`}  alt="img"/>
                            </div>
                            <div className='Details'>
                                <div className='Title'>{ele.Title}</div>
                                <div className='price'>{ele.price}</div>
                               
                                

                            </div>
                        </div>

                    )
                })


            }
        </div>

    )
}

export default Body