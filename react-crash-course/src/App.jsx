import React, { useState, useEffect } from 'react';
import axios from "axios";
const App = () => {

    const [data, setData] = useState("");

    {/* When component loads, do a GET request */}
    useEffect(() => {
      axios.get("http://localhost:8081/api/data")
      .then(res => {
        setData(res.data.message);
      })
      .catch(e => console.error(e))
    }, [])

    return (
        <>
           <h1> {data ? data : "Loading..."} </h1>
        </>
    );
};

export default App;
