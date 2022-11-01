import { authService } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthForm } from "../Components/AuthForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { SignUpModal } from "../Components/SignUpModal";

export const LogIn = () => {
  const [modal, setModal] = useState(false);

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-80 bg-[#364fc7] h-72 flex flex-col justify-center items-center">
        <div>
          <AuthForm />
          <button
            onClick={onSocialClick}
            name="google"
            className="w-full mt-2 bg-[#161F50] text-white rounded-md h-8"
          >
            Continue with Google <FontAwesomeIcon icon={faGoogle} />
          </button>
        </div>
        {modal ? (
          <></>
        ) : (
          <p
            className="relative top-[30px] text-white underline opacity-90 hover:cursor-pointer"
            onClick={() => setModal(true)}
          >
            Create an Account
          </p>
        )}

        {modal ? <SignUpModal setModal={setModal} /> : <></>}
      </div>
    </div>
  );
};
