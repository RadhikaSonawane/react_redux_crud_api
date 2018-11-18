import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost, deletePost } from './actions';
class Post extends Component {
  render() {
    const {post, dispatch} = this.props;
    return (
      <div className="post">
        <h2 className="post_title">{post.title}</h2>
        <p className="post_message">{post.message}</p>
        <div className="control-buttons">
          <button className="edit"
            onClick={() => dispatch(editPost(post.id))
            }
          >Edit</button>
          <button className="delete"
            onClick={() => dispatch(deletePost(post.id))}
          >Delete</button>
        </div>
      </div>
    );
  }
}
export default connect()(Post);
