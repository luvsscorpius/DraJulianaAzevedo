import { Footer } from "./Components/Footer/Footer";
import { GlobalStyle } from "./Components/GlobalStyle/GlobalStyle";
import { Header } from "./Components/Header/Header";
import { Home } from "./Pages/Home/Home";
import "leaflet/dist/leaflet.css";

function App() {
  return (
   <>
    <GlobalStyle/>
    <Header/>
    <Home/>
    <Footer/>
   </>
  );
  //teste 
}

export default App;
