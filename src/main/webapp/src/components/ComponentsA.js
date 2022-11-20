import React,{useContext} from 'react'
import {store} from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentsA = () => {
    const [data,setData] = useContext(store)
  return (

    <div className="card">
        <div className="card-body">
        Components A :: {data}
        </div>
    </div>
  )
}

export default ComponentsA