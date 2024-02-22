import Item from "./item";
import { useState } from "react";

function Itemlist({items}) {
    let [activeItems, setActiveItems] = useState([]);

    const buybutton=(event,item)=>{
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    }

    return (
        <ul className="list-group">
        {items.map((item) => (
            <Item fooditem={item} key={item} bought={activeItems.includes(item)} 
            handleclick={(event)=>buybutton(event,item)
            }
            ></Item>
        ))}
        </ul>
    );
}
export default Itemlist;
