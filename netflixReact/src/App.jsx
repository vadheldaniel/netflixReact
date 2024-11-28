import LandingPage from "./pages/landingPage/LandingPage";
import MordernLanding from "./pages/landingPage/MordernLanding";


function App() {
 
  const landing=false;
  return (
    <>
       {landing?<LandingPage/>:<MordernLanding/> }  
    </>
  )
}

export default App
