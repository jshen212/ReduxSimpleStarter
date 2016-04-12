import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar.js";
import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyCXN3QDrz6woo449vlRXK0kuAqVY5bKslo";
import VideoList from "./components/video_list";

// create a new component
// this component should produce some html
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
      this.setState({ videos });
    });
  }



  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

// take this component's generated html
// put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
