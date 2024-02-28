import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postlist: [],
  addpost: () => {},
  deletepost: () => {},
});

const postlistreducer = (currpostlist, action) => {
  let newpostlist = currpostlist;
  if (action.type === 'DELETEPOST') {
    newpostlist=currpostlist.filter((post) => post.id !== action.payload.postid);
  }
  else if(action.type ==='ADDPOST'){
    newpostlist=[action.payload,...currpostlist,];
  }
  return  newpostlist;
};

const Postlistprovider = ({ children }) => {
  let [postlist, dispatchpostlist] = useReducer(
    postlistreducer,
    DEFAULT_POST_LIST
  );

  const addpost = (userid, posttitle, postbody, reactions, tags) => {
    dispatchpostlist({
        type: "ADDPOST",
        payload: {
            id:Date.now(), 
            title:posttitle, 
            body:postbody, 
            reactions:reactions, 
            userId:userid,
            tags:tags}
    })
  };

  const deletepost = (postid) => {
    dispatchpostlist({
      type: "DELETEPOST",
      payload: {
        postid
      }
    });
  };
  return (
    <Postlist.Provider value={{ postlist, addpost, deletepost }}>
      {children}
    </Postlist.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default Postlistprovider;
