## ReactJS - Recipe api search app.

### Introduction

This is a sample app/project which demonstrates the usage of API call and rendering of response in ReactJS.
API used is [https://developer.edamam.com/edamam-docs-recipe-api](https://developer.edamam.com/edamam-docs-recipe-api)

This app is developed in functional components approach and it uses react hooks.

In the App component, a Container component is used, which holds the state and logic to fetch the data from api. getRecipes() method is used to make fetch api call to get the response, response is then stored in state, it stores upto 5 user searches, so that we don't have to make api call on each search.

Container component renders SearchBox and SearchResult components. The SearchBox component hosts the user input fields to search the result.

SearchBox also makes the use of CheckBoxGroup component, which accepts the array containing group of items and renders the checkboxes for that group.

SearchResult will conditionally load RecipeList component or display no result found if api doesn't return any response for the input.
RecipeList renders the response from api by looping over the data.

Note: `Do not add your API keys in .env file, there is no backend for this app hence api keys are added in .env file, so that it can be directly used.`

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

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