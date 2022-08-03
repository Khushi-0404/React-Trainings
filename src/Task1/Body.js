import image from './lonely.jpg';
function Body(){
    return(
        <>
        <h1>Body of the application starts here</h1>
        </>
    )
}
function Aim(){
    return(
        <>
        <h3>Our aim is to learn about the components
            </h3></>
    )
}
function About(){
    return(
        <>
        <h4>We are dealing with the components of React</h4></>
    )
}
function Gallery(){
    return(
        <>
        <img alt="Gallery"
        src={image} height={100} width={100}/>
        </>
    )
}
export default Body
export {Aim,About,Gallery}

