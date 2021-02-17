# `Expense-Tracker`

This app lets you manage your expenses in a hassle-free way. You can add/view/delete your transactions and can also see the flow of income/expenses. All you need to do is to sign in with your google account.<br><br>
https://track-expense-react.netlify.app/login

## `Technology Stack used`

1. ReactJS 
2. Firebase

## `Overview`

- This app is created with `ReactJS` and backend has been served on `Firebase`
- On the home page you can find `Google Authentication`. Only after logging in you can add/view/delete the expenses.
- Data is saved on firebase NoSQL database.
- Used `Context API` for prop drilling. 
  - `AuthProvider` is used to pass down the `Current User` information.
  - `TransactionContext` is used to pass down the `Expense` state that stores the expense details.
- Have used `React Hooks` to effectively manage states and rendering of components.

______________________________________________________________________________________________________________________

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

