import React,{useEffect,useState} from "react";
import axios from "axios";

const Onlybooks = () => {
   const [data,setDate] = useState([]);
      useEffect(()=>{
      async function getStoreData() {
        const response = await axios.get("http://localhost:8080/books");
        console.log(response);
      }
        getStoreData();
    },[]);

    return (
      <div>
      data
      </div>
      )
}

export default Onlybooks