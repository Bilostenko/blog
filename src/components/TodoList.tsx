import React, { useEffect } from "react";
import { useTypedSelector } from "../store/reducers";
import { useTypedDispatch } from "./Hooks";
import { fetchTodos, setTodoPage } from "../store/action-creators/todo";

const TodoList: React.FC = () => {

  const { page, loading, error, limit, todos } = useTypedSelector((state: any) => state.todo);
  const dispatch = useTypedDispatch();
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    dispatch(fetchTodos(page, limit));
  }, [dispatch, page, limit]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo: any) =>
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      )}
      <div style={{ display: "flex" }}>
        {pages.map(p =>
          <div
            onClick={() => dispatch(setTodoPage(p))}
            style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}
          >
            {p}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
