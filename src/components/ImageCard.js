import React from "react";
import "../App.css";

export default class ImageList extends React.Component {
  render() {
    const images = this.props.images.map((image, idx) => (
      <ImageCard image={image} />
    ));
    return <div className="image-list">{images}</div>;
  }
}

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    this.ImageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.ImageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.ImageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
