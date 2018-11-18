import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from './actions';
class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    }
    this.props.dispatch(addPost(data));
    this.getTitle.value = '';
    this.getMessage.value = '';
  }
  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Add Book</h1>
        <form className="form" onSubmit={this.handleSubmit} >
          <input required type="text" ref={(input) => this.getTitle = input}
            placeholder="Enter Book Title" /><br /><br />
          <textarea required rows="5" ref={(input) => this.getMessage = input}
            cols="28" placeholder="Enter Book Discription" /><br /><br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
