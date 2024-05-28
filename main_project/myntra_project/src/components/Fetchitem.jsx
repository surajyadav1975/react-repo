import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemSliceaction } from "../store/itemSlice";
import { fetchSliceaction } from "../store/fetchSlice";

const Fetchitem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.Fetchdone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    
    // dispatch(fetchSliceaction.markfetchingstarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        
        // dispatch(fetchSliceaction.markfetchdone());
        // dispatch(fetchSliceaction.markfetchingfinished());
        dispatch(itemSliceaction.addinitialitems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
    </>
  );
};
export default Fetchitem;
