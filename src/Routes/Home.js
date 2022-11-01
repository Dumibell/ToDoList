import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { dbService } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore";
import { Todo } from "../Components/Todo";
import { Date } from "../Components/Date";
import dayjs from "dayjs";
import { DisplayName } from "../Components/DisplayName";

export const Home = ({ userObj }) => {
  let today = dayjs();
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(today);

  useEffect(() => {
    const q = query(
      collection(dbService, userObj.uid),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const todoArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todoArr);
      console.log(todoArr);
    });
  }, []);

  const navigate = useNavigate();
  const onLogOutClick = () => {
    signOut(getAuth());
    navigate("/");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    await addDoc(collection(dbService, userObj.uid), {
      text: todo,
      createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      creatorId: userObj.uid,
      date: date.format("YYYY.MM.DD"),
      checked: Boolean(false),
    });
    setTodo("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTodo(value);
  };

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="w-80 flex flex-col">
          {/* <p className="text-sm">🔻클릭하여 닉네임을 변경하세요!</p> */}
          <div className="mb-5 text-xl flex justify-between">
            <DisplayName userObj={userObj} todo={todo} />
            <button
              onClick={onLogOutClick}
              className="border border-1.5 border-[#364fc7] text-sm rounded-md px-2"
            >
              Log Out
            </button>
          </div>
          <div className="border rounded-sm bg-[#364fc7] ">
            <Date date={date} setDate={setDate} />

            <div className="p-2">
              <div className="h-[23rem] overflow-scroll scrollbar-hide">
                {todos.map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      userObj={userObj}
                      date={date}
                    />
                  );
                })}
              </div>
              <form
                onSubmit={onSubmit}
                className="p-1 py-2 mx-[-8px] mb-[-8px] bg-white flex"
              >
                <input
                  type="text"
                  placeholder="오늘의 할일은?"
                  value={todo}
                  required
                  autoFocus
                  onChange={onChange}
                  className="border w-64 outline-none flex-1 px-2"
                />
                <button className="ml-2 px-2 bg-white rounded-md bg-[#364fc7] text-white ">
                  add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
