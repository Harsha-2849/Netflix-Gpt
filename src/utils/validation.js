export const checkValidData = (email, password,fullname) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^(?=.{1,5}$)[A-Za-z0-9]+(?:\s[A-Za-z0-9]+)?$/.test(fullname)



    if(!isEmailValid) return "Email is Not Valid"
    if(!isPasswordValid) return "Password is not Valid"
    if(!isNameValid) return "Name is Required"

    return null;
};
