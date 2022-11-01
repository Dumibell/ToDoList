import { Routes, BrowserRouter, Route } from "react-router-dom";
import { LogIn } from "../Routes/LogIn";
import { Home } from "../Routes/Home";

export const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          {isLoggedIn ? (
            <Route
              exact
              path="/"
              element={<Home userObj={userObj} refreshUser={refreshUser} />}
            />
          ) : (
            <Route exact path="/" element={<LogIn userObj={userObj} />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
