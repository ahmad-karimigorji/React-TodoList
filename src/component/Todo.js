import { BiEditAlt, BiTrash } from "react-icons/bi";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import styles from "./Todo.module.css";
import TodoForm from "./TodoForm";

const Todo = ({
  todo,
  onCompleted,
  onDelete,
  edit,
  onEdit,
  todosHandler,
  onCancel,
}) => {
  return (
    <div>
      <div
        className={`${styles.todoContainer} ${
          todo.isComplete && styles.completed
        }`}
      >
        <div className={styles.textBox}>
          <button className={styles.btn} onClick={onCompleted}>
            {todo.isComplete ? <GrCheckboxSelected /> : <GrCheckbox />}
          </button>
          <p>{todo.text}</p>
        </div>
        <div className={styles.iconBox}>
          <button
            className={`${styles.editIcon} ${styles.btn}`}
            onClick={onEdit}
          >
            <BiEditAlt />
          </button>
          <button
            className={`${styles.trashIcon} ${styles.btn}`}
            onClick={onDelete}
          >
            <BiTrash />
          </button>
        </div>
      </div>
      {edit.id === todo.id && (
        <TodoForm todosHandler={todosHandler} onCancel={onCancel} edit={edit} />
      )}
    </div>
  );
};

export default Todo;
