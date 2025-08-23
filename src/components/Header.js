import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // Unsubscribe when components unmount this function will be called 
      return ()=>{
          unsubscribe();
      }
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      {/* Netflix Logo */}
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />

      {/* Show only if user is logged in */}
      {user && (
        <div className="flex items-center gap-4">
          <img
            alt="userIcon"
            className="w-10 h-10 rounded-full"
            src={user.photoURL}
          />
          <button
            onClick={handleSignout}
            className="text-white font-semibold hover:underline"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
