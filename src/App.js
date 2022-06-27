import Bottom from "./Component/Bottom";
import Category from "./Component/Category";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Jobarea from "./Component/Jobarea";
import Jobportal from "./Component/Jobportal";
import Navbar from "./Component/Navbar";
import Profile from "./Component/Profile";
import SliderProfile from'./Component/SliderProfile'
function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Category/>
    <Jobarea/>
    <Profile/>
    <Jobportal/>
    <SliderProfile/>
    <Bottom/>
    <Footer/>
   </div>
  );
}

export default App;
