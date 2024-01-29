**Questions**
What is NPM? It is a package manager for a node.js environment that allows one to install and delete packages.

What is SPA? A web application that displays a single and static page.

What is the event loop? An event loop handles code execution, event collection and processing, and queued subtask execution.

What is the difference between export x and export default x? How do you import them differently?
export default x: This feature enables a module's default export to be a single main value. It permits the exported value to be represented by a custom name during import.
export x: Enables the export of multiple values with unique names. The precise exported names encased in curly brackets are the only names that can be used for importing.

Why do you use className as a property in React and not class? Class is a reserved keyword in javascript hence use of className

Why should you not write the following? What will happen? 
<button onClick={setCounter(counter + 1)}> +1 </button>
The preceding method of writing the function should not be used as it results in an infinite loop. The reason for the loop is that before the user ever presses the button, the current state stated using 'useState()' is changed because setCounter is called each time the react component is shown. React requires a render every time the state is modified, which leads to an infinite loop that generates issues.

What is object deconstruction and how is it connected to React components (example)? It's a clear method of extracting values into different variables from objects and variables.
const vehicle = { make: "honda", year: 2000 };
const { make, year } = vehicle;
console.log(make); 
console.log(year);
function Person({ make, year }) {
  return <p>Make: {make}, Year: {year}</p>;
}

How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood? JSX is a syntax extension used by React that enables JavaScript code to resemble HTML. React components can combine HTML structure and JavaScript logic because JSX is converted into JavaScript calls that generate React elements.

const element = <h1>Hello, world!</h1>;
const element = React.createElement('h1', null, 'Hello, world!');

function App() {
  const name = 'Mich';
  return <h1>Hello, {name}</h1>;
}
What is async/await? Bring an example
The Async keyword guarantees that the execution thread won't be interrupted and lets you write promises-based code as if it were synchronous. When a promise is not returned, JavaScript automatically wraps it in a promise that is resolved with its value. Await keyword pauses execution until the Promise resolves or rejects.

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
What is a Promise? Bring an example 
In JavaScript, a promise is an object that indicates whether an asynchronous operation will eventually succeed or fail. Instead of passing callbacks into a function, it enables you to attach them.

const myPromise = new Promise((resolve, reject) => {
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});








































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
