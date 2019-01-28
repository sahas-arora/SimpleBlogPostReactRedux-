import React, { Component } from "react";
import { connect } from "react-redux";

import UserHeader from "./UserHeader";
import { fetchPostsAndUsers } from "../actions";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.renderedList = this.renderedList.bind(this);
  }

  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderedList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderedList()}</div>;
  }
}

let mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  {
    fetchPostsAndUsers: fetchPostsAndUsers
  }
)(PostList);
