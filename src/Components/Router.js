import { Routes, BrowserRouter, Route } from "react-router-dom";
import { LogIn } from "../Routes/LogIn";
import { Home } from "../Routes/Home";

export const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          {isLoggedIn ? (
            <Route exact path="/" element={<Home userObj={userObj} />} />
          ) : (
            <Route exact path="/" element={<LogIn userObj={userObj} />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
