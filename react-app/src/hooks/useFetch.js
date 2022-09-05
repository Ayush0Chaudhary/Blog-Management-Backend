import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function useFetch(URL){

    const [data, setdata] = useState(null);
    const [loading , setloading] = useState(false);
    const [error, seterror]  =useState(null);
    useEffect(()=>{
        setloading(true);
        axios.get(URL)
        .then((res)=>{
            // console.log(res.data);
            setdata(res.data);  
        })
        .catch((err)=> {
            console.log(err);
            seterror(err);
        })
        .finally(()=>{
            console.log("call completed");
            setloading(false);
        });
    
    
    
    });
    
    return {data, loading, error};

}

export default useFetch;