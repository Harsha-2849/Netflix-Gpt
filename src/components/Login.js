import React, {  useRef, useState } from "react";
import Header from "../components/Header";
import { checkValidData } from "../utils/validation";
export const Login = () => {

  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage,setErrormessage]= useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);


  const handlevalid = ()=>{
    const message = checkValidData(email.current.value,password.current.value,fullname.current.value);
    setErrormessage(message);



    // console.log(email.current.value);
    // console.log(password.current.value);
  }

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
      <form onSubmit={(e)=>{
        e.preventDefault()
      }}
      className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
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
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handlevalid}>
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
