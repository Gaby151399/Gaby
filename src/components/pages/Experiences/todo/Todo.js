
import HeadTodo from "./headtodo";
import Todolist from "./todolist";

const Todo = () => {
    return ( <>
    <div className="todo container-sm text-center">
      <HeadTodo />
      <Todolist />
    </div>
    </> );
}
 
export default Todo;