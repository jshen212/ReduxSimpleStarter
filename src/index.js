import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar.js";
import VideoDetail from "./components/video_detail"
import VideoList from "./components/video_list";

import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyCXN3QDrz6woo449vlRXK0kuAqVY5bKslo";


// create a new component
// this component should produce some html
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    );
  }
};

// take this component's generated html
// put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
