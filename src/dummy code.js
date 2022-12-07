//*import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import NotFound from "./components/NotFound"
function App(){
  return(
     <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
         <Route path="/"element={<Home/>}/>
         <Route path="/about"element={<About/>}/>
         <Route path="/contact"element={<Contact/>}/>
         <Route path="*"element={<NotFound/>}/>
         </Routes>
         </BrowserRouter> 
         </div>
    )
}
export default App
/*import Events from './Events'
//function App(){
//return(//<div><Events/><div>
//)
//}
export default App
  /*import ClassComponent from "./ClassComponent"
import ClassComponent1 from "./ClassComponent1"
function Demo(){
  return(
   <section>
   <ClassComponent1/>
   <img src="https://images7.alphacoders.com/411/411820.jpg" alt="nature"  width="40%"/>
   <p>Hello fellows</p>
   <h1>This is h1 tag</h1>
   <ClassComponent/>
   </section>
   )
}
export default Demo*/
//import FunctionPropExample from './FunctionPropExample'
function App(){
  return(
    <div>
    <h1>This is about props example</h1>
    {/*PropsExample name="chinni" age="20"/>
    {PropsExample name="nani" age="22"/>          
    <FunctionPropsExample framework="react"mumber="23"/>
    </div>
    )
}
export default App

