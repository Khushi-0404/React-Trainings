import ContactManager from "./ContactManager";
import ContactDetails from "./ContactDetails";
function App(){
  return(
    <div>
    <ContactManager data={ContactDetails}></ContactManager>
    </div>
  )
}
export default App;