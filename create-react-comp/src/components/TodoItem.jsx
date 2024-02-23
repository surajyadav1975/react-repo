import Todoitems from "./Todoitems1";

function TodoItem({ todoItems ,handleclickdelete}) {

  return (
    <div>
      {todoItems.map((item) => (
        <Todoitems
          key={item.name}
          duename={item.name}
          duedate={item.dueDate}
          handleclickdelete={handleclickdelete}
        ></Todoitems>
      ))}
    </div>
  );
}

export default TodoItem;
