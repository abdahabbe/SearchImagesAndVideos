import React, { Component } from "react"; // define & connect 1component
import { faker } from "@faker-js/faker";
import ButtonContainer from "./Button";

// tidak perlu length
const generateRandomComments = () => {
  const generateRandomDate = () => {
    const startDate = new Date(2023, 0, 1); // January 1, 2023
    const endDate = new Date(); // Current date
    const timestamp =
      startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(timestamp);
  };

  const min = 1,
    max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  const comments = [];
  for (let i = 0; i < randomNumber; i++) {
    comments.push({
      avatar: faker.image.avatar(),
      name: faker.person.fullName(),
      sentence: faker.lorem.sentences(),
      date: generateRandomDate().toLocaleDateString(),
    });
  }

  comments.sort((c1, c2) => new Date(c1.date) - new Date(c2.date));
  return { comments, length: randomNumber };
};

class CommentContainer extends Component {
  render() {
    return (
      <div className="ui container comments" key={this.props.key}>
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={this.props.avatar} />
          </a>
          <div className="content">
            <a href="/" className="author">
              {this.props.name}
            </a>
            <div className="metadata">
              {/* faker.date.recent(): Third-party cookie will be blocked. Learn more in the Issues tab. */}
              <span className="date">{this.props.date}</span>
            </div>
            {/* <div className="metadata">
              <span className="like">{this.props.like}</span>
            </div> */}
            <div className="text">{this.props.sentence}</div>
            <ButtonContainer text={"Like"} />
          </div>
        </div>
      </div>
    );
  }
  // );
}

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data.comments,
      length: props.data.length,
    //  like: 0,
    };
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <h1>{comments.length} Contacts</h1>
        {comments.map((comment, index) => (
          <CommentContainer
            key={index}
            avatar={comment.avatar}
            name={comment.name}
            sentence={comment.sentence}
            date={comment.date}
           // like={}
          />
        ))}
        ;
      </div>
    );
  }
}

const RandomComments = () => {
  return <Comments data={generateRandomComments()} />;
};

export default RandomComments;
