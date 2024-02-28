import { useContext } from "react";
import Post from "./Post";
import { Postlist as Postlistdata} from "../store/post-list-store";

const Postlist =()=>{
    const {postlist}=useContext(Postlistdata);
    return (
        <>
         {postlist.map((post)=>(
            <Post key={post.id} post={post}></Post>
         ))}
        </>
    );
}

export default Postlist;