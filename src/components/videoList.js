import React from "react";
import { Grid } from "@material-ui/core";
import VideoItems from "./videoItems";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideo = videos.map((video, id) => (
    <VideoItems onVideoSelect={onVideoSelect} key={id} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      {listOfVideo}
    </Grid>
  );
};

export default VideoList;
