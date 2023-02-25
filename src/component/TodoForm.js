import { useEffect, useRef, useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ todosHandler, edit, onCancel }) => {
  const [inputValue, setInputValue] = useState("");
  const textRef = useRef();
  const formRef = useRef();
  const inputRef = useRef();

  const changeHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (!value) {
      textRef.current.innerText = "Enter Todo !";
      return;
    }
    todosHandler(value);
    setInputValue("");
    blurHandler();
    textRef.current.innerText = "";
  };
  const focusHandler = () => {
    formRef.current.classList.add(styles.formFocus);
    textRef.current.innerText = "";
  };
  const blurHandler = () => {
    formRef.current.classList.remove(styles.formFocus);
  };

  useEffect(() => {
    formRef.current.classList.add(styles.formFocus);
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.formContainer}>
      <form
        onSubmit={submitHandler}
        onClick={focusHandler}
        onBlur={blurHandler}
        ref={formRef}
      >
        <input
          type="text"
          className={styles.formInput}
          ref={inputRef}
          value={inputValue}
          onChange={changeHandler}
          placeholder={
            edit
              ? edit.text.length > 20
                ? edit.text.slice(0, 12) + "..."
                : edit.text
              : "new todo..."
          }
        />
        {edit && (
          <button
            type="button"
            className={`${styles.formBtn} ${styles.cancelBtn}`}
            onClick={onCancel}
          >
            cancel
          </button>
        )}
        <button type="submit" className={styles.formBtn}>
          {edit ? "update" : "Add"}
        </button>
      </form>
      <p className={styles.errorMessage} ref={textRef}></p>
    </div>
  );
};

export default TodoForm;
