import React from "react";
import JustSort from "./JustSort";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
 
function LeaderBoard(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/name'element={<JustSort userkey='name' value={1}></JustSort>}></Route>
            <Route path='/age' element={<JustSort userkey='age' value={2}></JustSort>}></Route>
            <Route path='/' element={<JustSort userkey='rank' value={3}></JustSort>}></Route>
            <Route path='/score' element={<JustSort userkey='points' value={4}></JustSort>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  export default LeaderBoard