# LendSqr Web Application
## About The Project

Lendsqr is a cloud-based, Lending Platform designed for small and medium-sized lenders, providing smart features at a zero upfront cost, situated in Lagos, Nigeria.

![Lendsqr logo](/src/Assets/logo.svg)

### Technologies
* React.js
* Typescript
* React-icons
* Scss
* React Router
* Context-Api - For State Management.

### Routes In This App
* `/` - This Route displays the welcome screen(Login Page).
* `/users` - This Route displays every user in a tabular form(the dashboard).
* `/user/:id` - This route displays a single information of a single user.
* `*` - This Route displays a page that shows the user has navigated to a page or route that doesn't exist within the web application.

### Folder Structure

In the `Src`, folder structure goes:

* `API` folder contains Methods for calling API with axios.
* `Components` - This folder contains a sub-folder for different components used within our pages.
* `Context` - This folder contains data that needs to be transferred to two or more elements, it handles state management.
* `Pages` Folder Contains the Route Element Component.
* `Styles` Folder contains `scss` styling for individual components.
* `Props` - Folder Stores all typescript props.

### NOTE:
Authentication isn't connected to a backend server, so any visiting user can login with random data so as to enable them get access to information and be able to route web application.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
