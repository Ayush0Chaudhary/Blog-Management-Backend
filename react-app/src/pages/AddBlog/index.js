import React, { Component } from "react";
import axios from "axios";

class AddBlog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      const article = { title: this.state.value, content: "blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1", created_at: "2022-09-01T19:54:46Z", published_at: null };
        axios.post('http://127.0.0.1:8000/blog/', article)
        .then(response => {console.log(response);});
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default AddBlog