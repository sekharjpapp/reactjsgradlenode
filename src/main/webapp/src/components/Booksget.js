import axios from "axios";
import React,{useEffect,useState} from "react";

const Booksget = () => {

    const [data, setData] = useState([]);
    useEffect(()=>{
    fetch("http://localhost:8080/getHealth").then(
       response => response.json()).then(json => setData(json))
  },[])

  return (
    <div> {data.map(item => <li key={item.id}>{item.bookName} </li>)}
    </div>
    )
  }

export default Booksget;