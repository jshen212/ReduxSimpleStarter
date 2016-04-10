import React from "react";
import ReactDOM from "react-dom";

// create a new component
// this component should produce some html
const App = () => {
  return <div>Hello World!</div>;
};

// take this component's generated html
  // put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
