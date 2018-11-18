import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import { getBooks } from './middleware/api'
class App extends Component {

  componentDidMount() {
    console.log('App mounted, fetch all data from server');
    getBooks().then(books => {
      console.log(books);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Post It</h2>
        </div>
        <PostForm />
        <AllPost />
      </div>
    );
  }
}
export default App;
