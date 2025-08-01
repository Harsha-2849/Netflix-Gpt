import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
export const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrormessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const handlevalid = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignForm ? null : fullname.current?.value
    );
    setErrormessage(message);

    if (message) return;

    if (!isSignForm) {
      //Sign Up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/186081820?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              navigate("/Browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrormessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(error.code + "-" + error.message);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
          navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(error.code + " - " + error.message);
        });
    }

    // console.log(email.current.value);
    // console.log(password.current.value);
  };

  const toggleSignInform = () => {
    setIsSignForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700 "
        />
        <p className="text-red-600"> {errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handlevalid}
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=" py-4 cursor-pointer" onClick={toggleSignInform}>
          {isSignForm
            ? "New to Netflix ? Sign Up Now"
            : "Already registered ? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
