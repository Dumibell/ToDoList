import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authService } from "../firebase";

export const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  const SignIn = async (e) => {
    e.preventDefault();
    try {
      let data;
      data = await signInWithEmailAndPassword(authService, email, password);
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("일치하는 회원정보가 없습니다.");
    }
  };

  return (
    <div className="w-72">
      <form onSubmit={SignIn} className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className="my-1 h-10 outline-none px-2"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          value={password}
          onChange={onChange}
          className="my-1 h-10 outline-none px-2"
        />
        <input
          type="submit"
          value="Log In"
          className="bg-[#161F50] text-white mt-2 rounded-md h-8  shadow-sm hover:cursor-pointer"
        />
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};
