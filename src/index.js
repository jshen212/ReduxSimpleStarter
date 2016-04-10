import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyCXN3QDrz6woo449vlRXK0kuAqVY5bKslo";

// create a new component
// this component should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// take this component's generated html
// put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
