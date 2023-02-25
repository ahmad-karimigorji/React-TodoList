import TodoForm from "./TodoForm";
import styles from "./TodoApp.module.css";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    filterTodos(selectedOption);
  }, [todos, selectedOption]);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      {
        id: new Date().getTime(),
        text: todo,
        isComplete: false,
        AtCreate: new Date().toISOString(),
      },
    ];
    const sortedTodos = newTodos.sort(
      (a, b) => new Date(b.AtCreate) - new Date(a.AtCreate)
    );

    setTodos(sortedTodos);
  };

  const completedTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isComplete = !selectedTodo.isComplete;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const editTodo = (id, newValue) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    selectedTodo.AtCreate = new Date().toISOString();
    const updateTodos = [...todos];
    updateTodos[index] = selectedTodo;
    const sortedUpdateTodos = updateTodos.sort(
      (a, b) => new Date(b.AtCreate) - new Date(a.AtCreate)
    );

    setTodos(sortedUpdateTodos);
  };

  const filterTodos = (selectedOption) => {
    if (!selectedOption.value) {
      setFilteredTodos(todos);
    } else if (selectedOption.value === "completed") {
      const selectedTodos = todos.filter((todo) => todo.isComplete);
      setFilteredTodos(selectedTodos);
    } else {
      const selectedTodos = todos.filter((todo) => !todo.isComplete);
      setFilteredTodos(selectedTodos);
    }
  };

  const selectedHandler = (selectedOption) => {
    setSelectedOption(selectedOption);
    filterTodos(selectedOption);
  };

  return (
    <>
      <TodoHeader todos={todos} />
      <div className={styles.container}>
        <TodoForm todosHandler={addTodo} />
        <TodoList
          todos={todos}
          filteredTodos={filteredTodos}
          editTodo={editTodo}
          onCompleted={completedTodo}
          onDelete={deleteHandler}
          onSelected={selectedHandler}
          selectedOption={selectedOption}
        />
      </div>
    </>
  );
};

export default TodoApp;
