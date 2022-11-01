import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authService } from "../firebase";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SignUpModal = ({ setModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const SignUp = async (e) => {
    e.preventDefault();
    let data;
    data = await createUserWithEmailAndPassword(authService, email, password);
    alert("회원가입에 성공하였습니다!");
    setModal(false);
    console.log(data);
  };

  return (
    <div className="w-72 h-48 fixed bg-white flex flex-col justify-center">
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="absolute top-[-5px] left-[280px] hover:cursor-pointer"
        onClick={() => setModal(false)}
      />
      <form
        onSubmit={SignUp}
        className="flex flex-col m-2 p-3 border border-[#161F50]"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className="my-1 h-10 outline-none px-2 border"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          value={password}
          onChange={onChange}
          className="my-1 h-10 outline-none px-2 border"
        />
        <input
          type="submit"
          value="Sign Up"
          className="bg-[#161F50] text-white rounded-md h-8  shadow-sm hover:cursor-pointer mt-4"
        />
      </form>
    </div>
  );
};
