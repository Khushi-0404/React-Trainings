import React from "react";

import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import App from "./4Aug/App"
import AppScoreboard from "./5Aug/AppScoreboard"
import ContactManager from './3Aug/ContactManager';
import Complete from "./Task2/Task2";
 
function Router(){
    return(
      <div>
        <BrowserRouter>
        <button className='taskmanager'><Link to='/TaskManager'>Task Manager</Link></button>
        <button className='scoreboard'><Link to='/Scoreboard'>Scoreboard</Link></button>
        <button className='search'><Link to='/search'>Contact Manager</Link></button>
        <button className='product'><Link to='/productCatalog'>Product Catalog</Link></button>

          <Routes>
            <Route path= '/TaskManager' element={<App></App>}></Route>
            <Route path= '/Scoreboard' element={<AppScoreboard></AppScoreboard>}></Route>
            <Route path='/search' element={<ContactManager></ContactManager>}></Route>
            <Route path='/productCataolg' element={<Complete></Complete>}></Route>
            
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  export default Router