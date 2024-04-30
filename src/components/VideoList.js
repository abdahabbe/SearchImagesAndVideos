import React from "react";

class VideoListContainer extends React.Component {
  onClick = () => {
    this.props.onSelect(this.props.video);
  };

  render() {
    const video = this.props.video;
    return (
      <div onClick={this.onClick} style={{ marginBottom: "5px", marginTop:"10px", cursor:"pointer" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1" }}>
            <img
              className="image"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ flex: "1" }}>
            <h4 style={{ width: "100%", marginLeft: "10px" }}>
              {video.snippet.title}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default class VideoList extends React.Component {
  render() {
    const videos = this.props.videos.map((video, index) => {
      return (
        <div>
          <VideoListContainer
            key={video.id.videoId + Date()}
            video={video}
            onSelect={this.props.onSelect}
          />
          {index !== this.props.videos.length - 1 && <hr />}
        </div>
      );
    });

    return <div>{videos}</div>;
  }
}
