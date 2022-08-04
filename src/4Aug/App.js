import TaskManager from "./TaskManager";
import data from "./TaskManagerData";
function App(){
  return(
    <div>
      <TaskManager data={data}></TaskManager>
   
    </div>
  )
}
export default App;