import styles from "./TodoHeader.module.css";

const TodoHeader = ({ todos }) => {
  const completedTodos = todos.filter((todo) => todo.isComplete);
  const percent = (completedTodos.length / todos.length) * 100 || 0;

  return (
    <header>
      <h1>Todo App</h1>
      <div
        style={{ "--value": `${percent}` }}
        className={styles.progressBar}
      ></div>
    </header>
  );
};

export default TodoHeader;
