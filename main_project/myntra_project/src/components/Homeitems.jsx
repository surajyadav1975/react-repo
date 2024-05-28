import {useDispatch,useSelector} from "react-redux"
import { bagSliceaction } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";

const Homeitems = ({ item }) => {

  const dispatch=useDispatch();
  const bagitems=useSelector((store)=>store.bag);
  const elementFound = bagitems.indexOf(item.id) >= 0;
  const handleadd=()=>{
    dispatch(bagSliceaction.addtobag(item.id));
  };
  const handleremove=()=>{
    dispatch(bagSliceaction.removefrombag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleremove}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleadd}
        >
          <GrAddCircle /> Add to Bag
        </button>
      )}
      </div>
      `
    </>
  );
};

export default Homeitems;
