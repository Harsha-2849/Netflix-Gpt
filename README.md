# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




# React Netflix-Gpt

* Create React app
* Configured Tailwind css
* Header
* Routing
* Login Form
* Signup Form
* Form validation 
* useRef Hook
* Firebase Setup
* deploying our app to production
* Create SignIn/SignUp Form
* Implement Sign in User Api
* Created Redux Store with UserSlice
* Bugfix Sign up User Display name and Profile picture Update 
* Bugfix if the user  is not logged in redirect /browse to login page  and vice-versa
* Unsubscribe to the on onAuthStateChanged callback

* onAuthStateChanged()  is a Firebase Authentication listener that monitors the user's login state. It automatically triggers a callback whenever the user's authentication status changes (i.e., they sign in, sign out, or their session is restored).

* why only this means Because Firebase auth is asynchronous and persistent, it stores a user's session in the browser (even after a refresh). onAuthStateChanged() helps you:

1. Automatically restore the user session when the app reloads.

2. Protect routes by checking if the user is logged in.

3. Set user info in Redux/Context when login state changes.

4. React to sign-out instantly in the UI.

* Implemented Signout
* Update Profile 
* Fetch from Tmdb Movies





# Features
--Login/SignUp page
  -- Sign In / Sign up Form
  --Redirect To /Browser page

--Browse(After authentication)
  --Header
  --Main movie
     -- Trailer in background
     --Title & Description 

     --movie Suggestion 
        -- Movie Lists * N


    -NetFlixGpt
        --Search Bar
        --Movie Suggestion
------------------------------------
        git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:YourUsername/YourRepoName.git
git push -u origin main

---------------------------------
rafce- React arrow function export component shortcut 
