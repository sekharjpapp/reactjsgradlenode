import React, { Component } from 'react'
import ReactDOM from "react-dom";

export class Bookclass extends Component {
    constructor() {
        super();
        this.state = { data: [] };
      }
      async componentDidMount() {
          const response = await fetch(`http://localhost:8080/getHealth`);
          const json = await response.json();
          this.setState({ data: json });
        }
  render() {
   return (
         <div>
          <h1> Class Component </h1>
           <ul>
             {this.state.data.map(el => (
               <li>
                 {el.id} : {el.bookName}
               </li>
             ))}
           </ul>
         </div>
       );
  }
}

export default Bookclass