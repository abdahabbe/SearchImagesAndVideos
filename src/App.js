import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import unsplash from "./api/unsplash";
import youtube from "./api/youtube";
import ImageList from "./components/ImageCard";
import VideoList from "./components/VideoList";
import MainVideo from "./components/MainVideo";

class App extends React.Component {
  state = {
    images: [],
    videos: [],
    selectedVideo: null,
    showVid: false,
    showImg: false,
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  onSearchImg = async (term) => {
    const resp = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ showVid: false });
    this.setState({ showImg: true });
    this.setState({ images: resp.data.results });
    //console.log(resp.data.results);
  };

  onSearchYoutube = async (term) => {
    try {
      const result = await youtube.get("/youtube/v3/search", {
        params: {
          q: term,
        },
      });

      this.setState({ showImg: false });
      this.setState({ showVid: true });
      this.setState({ videos: result.data.items }, () => {
        this.setState({ selectedVideo: this.state.videos[0] });
      });
      this.renderVideo();
    } catch (error) {
      console.error("Error fetching YouTube search results:", error);
      throw error;
    }
  };

  renderImage(key) {
    return <ImageList key={key} images={this.state.images} />;
  }

  renderVideo() {
    return (
      <div style={{ marginTop: "10px", display: "flex" }}>
        <div style={{ flex: "2.5", marginRight: "20px" }}>
          {this.state.videos.length > 0 && (
            <div>
              {this.state.selectedVideo && (
                <div>
                  <MainVideo selectedVideo={this.state.selectedVideo} />
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{ flex: "1" }}>
          {this.state.videos.length > 0 && (
            <VideoList
              videos={this.state.videos}
              onSelect={this.onSelectVideo}
            />
          )}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.onSearchYoutube("one ok rock");
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar label={"Image Search"} onSubmit={this.onSearchImg} />
        <SearchBar label={"Video Search (Youtube)"} onSubmit={this.onSearchYoutube} />
        {this.state.showImg === true && this.renderImage()}
        {this.state.showVid === true && this.renderVideo()}
      </div>
    );
  }
}

export default App;
