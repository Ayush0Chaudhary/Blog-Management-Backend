import React, { Component, useState } from "react";
import Blog from "../../components/Blog";
import LoginPage from "../Login";
import MainNav from "../../components/MainNav";
import { getAllBlogs, json } from "../../services/django";
import axios from "axios";
import { getByTitle } from "@testing-library/react";
import Modale from '../../components/Modal'
import Modal from "../../components/Modal"
import { Link } from "react-router-dom";
import "./../../index.css"

var blogll = [];
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        title: "",
        content: "",
        author: "",
        created_at: ""
      },
      blogList: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/blog/");
      const blogList = await res.json();

      console.log(blogList);
      this.setState({
        blogList
      });
    } catch (e) {
      console.log(e);
    }
  }
  renderBlogs = () => {
    let i = 0;

    blogll = this.state.blogList;
    return this.state.blogList.map(blog => (
      <ul>
        <h1>{blog.title}</h1>
        <span title={blog.title}>{blog.content.substring(0, 500) + "......"}</span>
        <h6>{"Written by : " + blog.owner}</h6>
        <h6>{"created on:" + blog.created_at}</h6>
        <hr></hr>
      </ul>
    ));
  }

  render() {
    return (
      <div>
        <MainNav />
        <Link className="link" to={{pathname: "/addblog"}}>Add Blog</Link>
        <ul>
          {this.renderBlogs()}
        </ul>
      </div>
    )
  }
}

export { MainPage, blogll }

      //  <!-- <Link to={{
      //     pathname: "/blog",
      //     state: {id: i, title: blog.title, content: blog.content, author: blog.owner, created_at: blog.created_at}
      //   }} className="link" title={blog.title} content= {blog.content} author= {blog.owner} created_at= {blog.created_at}>{++i}{". "+blog.title}</Link>
      //    -->