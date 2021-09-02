import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
        //user is logged in
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
