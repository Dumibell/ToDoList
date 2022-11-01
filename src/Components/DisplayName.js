import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { authService, dbService } from "../firebase";
import { updateProfile } from "firebase/auth";

export const DisplayName = ({ userObj, todo, refreshUser }) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(userObj.displayName);

  const onChangeEdit = (e) => {
    const {
      target: { value },
    } = e;
    setNewName(value);
  };

  const onSubmitEdit = async (event) => {
    event.preventDefault();
    await updateProfile(authService.currentUser, {
      displayName: newName,
    });
    setEditing(false);
    refreshUser();
  };

  const showName = () => {
    if (editing) {
      return (
        <form onSubmit={onSubmitEdit}>
          <input
            type="text"
            value={newName}
            className="w-20 outline-none"
            onChange={onChangeEdit}
          />
        </form>
      );
    } else {
      if (userObj.displayName) {
        return <span>{newName}</span>;
      } else {
        return (
          <span className="animate-bounce hover:cursor-pointer">이름 입력</span>
        );
      }
    }
  };

  return (
    <>
      <span className="font-bold flex" onClick={() => setEditing(true)}>
        <span className="mr-1">✏️</span>
        {/* {editing ? (
          <form onSubmit={onSubmitEdit}>
            <input
              type="text"
              value={newName}
              className="w-16 outline-none animate-pulse"
              onChange={onChangeEdit}
            />
          </form>
        ) : (
          <span>{newName}</span>
        )} */}
        {showName()}의 To Do List
      </span>
    </>
  );
};
