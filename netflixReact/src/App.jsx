import LandingPage from "./pages/LandingPage"
import MordernLanding from "./pages/MordernLanding"

function App() {
 
  const landing=false;
  return (
    <>
       {landing?<LandingPage/>:<MordernLanding/> }  
    </>
  )
}

export default App
