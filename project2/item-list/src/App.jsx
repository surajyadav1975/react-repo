import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Foodinput from "./components/foodinput";
import Errormassage from "./components/Errormassage";
import Itemlist from "./components/Itemlist";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  let [fooditems, setfooditems] = useState([]);
  const handlekeydown = (event) => {
    if(event.key==="Enter"){
      let newFoodItem = event.target.value;
      event.target.value = "";
      const newitems=[...fooditems,newFoodItem];
      setfooditems(newitems);
    }
  };
  return (
    <center className="position-absolute top-50 start-50 translate-middle">
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <Foodinput handlekeydown={handlekeydown}></Foodinput>
        <Errormassage items={fooditems}></Errormassage>
        <Itemlist items={fooditems}></Itemlist>
      </Container>
    </center>
  );
}

export default App;
