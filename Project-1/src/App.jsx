import "./App.css"
import Navigation from "./component/Navigation"
import HeroSection from "./component/HeroSection"
const App = () =>{
 
  return(
   <div>
    {/* here we are calling componenets */}
    <Navigation/>
    <HeroSection/>
   </div>
  );
}
export default App;
