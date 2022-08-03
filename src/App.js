import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import ContactManager from './3Aug/ContactManager';
import App from "./28July_Task2/App"
import './App.css'
function MainApp(){
  return(
    <div>
      <BrowserRouter>
      <nav>
      
      <button className='search'><Link to='/search'>Contact Manager</Link></button>
      <button className='counter'><Link to='/counter'>Counter</Link></button>
      
      </nav>
      <Routes>
        <Route path='/search' element={<ContactManager></ContactManager>}></Route>
        <Route path='/counter' element={<App></App>}></Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  )
}
export default MainApp;