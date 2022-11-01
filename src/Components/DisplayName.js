import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { authService, dbService } from "../firebase";
import { updateProfile } from "firebase/auth";

export const DisplayName = ({ userObj, todo }) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(userObj.displayName);

  // const TodoRef = doc(dbService, `${userObj.uid}`, `${todo.id}`);

  const onChangeEdit = (e) => {
    const {
      target: { value },
    } = e;
    setNewName(value);
  };

  console.log(newName);

  const onSubmitEdit = async (event) => {
    event.preventDefault();
    await updateProfile(authService.currentUser, {
      displayName: newName,
    });
    setEditing(false);
  };

  // const showName = () => {
  //   if (editing) {
  //     return (
  //       <form onSubmit={onSubmitEdit}>
  //         <input
  //           type="text"
  //           value={newName}
  //           className="w-12 outline-none animate-pulse"
  //           onChange={onChangeEdit}
  //         />
  //       </form>
  //     );
  //   } else {
  //     if (userObj.displayName) {
  //       return <span>{newName}</span>;
  //     } else {
  //       return <span>익명</span>;
  //     }
  //   }
  // };

  return (
    <>
      <span className="font-bold flex" onClick={() => setEditing(true)}>
        <span className="mr-1">✏️</span>
        {editing ? (
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
        )}
        의 To Do List
      </span>
    </>
  );
};
