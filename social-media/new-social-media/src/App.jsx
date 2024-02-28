import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from "./components/Createpost";
import Postlist from "./components/Postlist";
import Postlistprovider from "./store/post-list-store";
import { useState } from "react";

function App() {
  let [selectedtab, setselectedtab] = useState("Home");

  const handleclick=(event)=>{
      setselectedtab(event.target.lastChild.data);
  }

  return (
    <>
      <Postlistprovider>
      <div className="app-container">
        <Sidebar selectedtab={selectedtab} handleclick={handleclick}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedtab === "Home" ? (
            <Postlist></Postlist>
          ) : (
            <Createpost></Createpost>
          )}
          <Footer></Footer>
        </div>
      </div>
      </Postlistprovider>
    </>
  );
}

export default App;
