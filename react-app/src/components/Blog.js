import React, { Component } from "react";
import { blogll } from "../pages/Main";

class Blog extends Component{
    render(){
        console.log(this.props.title);
        return(
            <div>{this.props.title}</div>
        )
    }
}

export default Blog