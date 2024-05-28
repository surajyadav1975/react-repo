import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Fetchitem from "../components/Fetchitem";

function App() {
  
  return (
    <>
      <Header />
      <Fetchitem/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
