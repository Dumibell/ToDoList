import { useState } from "react";
import { dbService } from "../firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todo, userObj, date }) => {
  const [editing, setEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.text);
  const [done, setDone] = useState(false);

  const TodoRef = doc(dbService, `${userObj.uid}`, `${todo.id}`);

  const onDeleteClick = async () => {
    const ok = window.confirm("정말 이 todo를 삭제하시겠습니까?");
    if (ok) {
      await deleteDoc(TodoRef);
    }
  };

  const onChangeEdit = (e) => {
    const {
      target: { value },
    } = e;
    setNewTodo(value);
  };

  const onSubmitEdit = async (event) => {
    event.preventDefault();
    await updateDoc(TodoRef, { text: newTodo });
    setEditing(false);
  };

  const check = async (e) => {
    e.preventDefault();
    await updateDoc(TodoRef, { checked: done });
  };

  const showText = () => {
    if (todo.checked) {
      return <span className="mx-2 line-through">{todo.text}</span>;
    } else if (editing) {
      return (
        <form onSubmit={onSubmitEdit} className="mx-2 flex">
          <input
            type="text"
            value={newTodo}
            onChange={onChangeEdit}
            className="w-40 outline-none animate-pulse"
          />
        </form>
      );
    } else {
      return <span className="mx-2 text-sm">{todo.text}</span>;
    }
  };

  return (
    <div>
      {todo.date === date.format("YYYY.MM.DD") ? (
        <div className="flex">
          <div className="my-2 p-2 rounded-lg bg-white w-full flex items-center text-black flex justify-between">
            <div className="text-sm flex">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => {
                  setDone(!done);
                }}
                onClick={check}
              />
              {showText()}
            </div>
            <div className="flex">
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="mr-2 hover:cursor-pointer"
                onClick={() => setEditing(!editing)}
              />
              <FontAwesomeIcon
                icon={faDeleteLeft}
                onClick={onDeleteClick}
                className="hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
