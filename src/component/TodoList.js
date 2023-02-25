import { useState } from "react";
import SelectComponent from "./commen/SelectComponent";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

const TodoList = ({
  todos,
  filteredTodos,
  onCompleted,
  onDelete,
  editTodo,
  onSelected,
  selectedOption,
}) => {
  const [edit, setEdit] = useState({ id: null, text: "" });

  const cancelHandler = () => {
    setEdit({ id: null, text: "" });
  };

  const editHandler = (value) => {
    setEdit({ id: null, text: "" });
    editTodo(edit.id, value);
  };

  const renderTodos = () => {
    if (edit.id) {
      return (
        <div className={styles.todos}>
          <Todo
            key={edit.id}
            todo={edit}
            edit={edit}
            onCancel={cancelHandler}
            todosHandler={editHandler}
          />
        </div>
      );
    } else {
      return (
        <div className={styles.todos}>
          {todos.length > 0 && (
            <div className={styles.select}>
              <SelectComponent
                onSelected={onSelected}
                selectedOption={selectedOption}
              />
            </div>
          )}
          {filteredTodos.map((item) => {
            return (
              <Todo
                key={item.id}
                todo={item}
                edit={edit}
                onCancel={cancelHandler}
                todosHandler={editHandler}
                onCompleted={() => onCompleted(item.id)}
                onDelete={() => onDelete(item.id)}
                onEdit={() => setEdit(item)}
              />
            );
          })}
        </div>
      );
    }
  };

  return renderTodos();
};

export default TodoList;
