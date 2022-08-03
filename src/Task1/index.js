import Header from "./Header";
import Body from "./Body"
import {Aim,About,Gallery} from "./Body"
import Contact from "./Contact";
import Footer from "./Footer";
function CompleteApp(){
    return(
        <>
        <Header></Header>
        <Body></Body>
        <Aim></Aim>
        <About></About>
        <Gallery></Gallery>
        <Contact></Contact>
        <Footer></Footer>
        </>
    )
}
export default CompleteApp