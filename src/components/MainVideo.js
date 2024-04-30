import React from "react";

export default class MainVideo extends React.Component {
  render() {
    const urlEmbed = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;
    return (
      <div>
        <div>
          <iframe
            title="main video"
            src={urlEmbed}
            style={{
              width: "100%",
              maxWidth: "860px",
              height: "calc(100vw * 9 / 16)",
              maxHeight: "480px",
            }}
            allowFullScreen
          />
        </div>
        <div
          style={{
            border: "1px solid #CCCCCC",
            padding: "10px",
            borderRadius: "2px",
          }}
        >
          <h2 className="header">{this.props.selectedVideo.snippet.title}</h2>
          <p>{this.props.selectedVideo.snippet.description}</p>
        </div>
      </div>
    );
  }
}
