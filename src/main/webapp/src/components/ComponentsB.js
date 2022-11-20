import React,{useContext} from 'react'
import {store} from '../App'
const ComponentsB = () => {
    const [data,setData] = useContext(store)
  return (
    <div className="card">
        <div className="card-body">
        Components B:: {data}
        </div>
    </div>
  )
}

export default ComponentsB