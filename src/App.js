import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Youtube from "./api/youtube";
import { SearchBar, VideoDetails, VideoList } from "./components";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit("Youtube Rewinds");
  }

  handleSubmit = async (searchTerm) => {
    const response = await Youtube.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: "AIzaSyBpbTRGq7Xo9Yh99UiK0Pjua-MIFvFz6rs",
        q: searchTerm,
      },
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>

            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>

            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
