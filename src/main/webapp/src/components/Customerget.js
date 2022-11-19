import React, { Component } from 'react'

export class Customerget extends Component {
    constructor() {
        super();
        this.state = { data: [] };
      }

       async componentDidMount() {
          const response = await fetch(`http://localhost:8080/getCustomerRecords`);
          const json = await response.json();
          this.setState({ data: json });
        }
  render() {
   return (
         <div>
           <ul>
             {this.state.data.map(el => (
               <li>
                 {el.id}: {el.name} : {el.age} : {el.createdDate}
               </li>
             ))}
           </ul>
         </div>
       );
  }
}

export default Customerget