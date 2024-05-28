import Homeitems from "../components/Homeitems";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <>
      <main>
        <div className="items-container">
          {items.map(item=><Homeitems item={item} key={item.id}/>)}
        </div>
      </main>
    </>
  );
};

export default Home;
