import axios from "axios";
import { useState } from "react";


var data
var json

const getAllBlogs = () => {
    
    axios({
        method:"get",
        url:'http://127.0.0.1:8000/blog/',
        headers: {"Content-Type": "application/json"},
    })
    .then(function(res){
        // console.log("response.... "+res.data);
        // console.log(JSON.stringify(res.data))
        data =  JSON.stringify(res.data);
        json = JSON.parse(data)
        return json;
    })
    .catch(function(err){
        console.log("er....." + err)
    })
}

export { getAllBlogs , json}