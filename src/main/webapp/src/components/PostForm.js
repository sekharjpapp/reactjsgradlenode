import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

export class PostForm extends Component {
 constructor(props) {
      super(props)

      this.state = {
         id: '',
         name: '',
         age: ''
      }
    }
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault ()
        console.log(this.state)
        axios.post("http://localhost:8080/add",this.state).then(response => {console.log(response)})
                .catch(error => {console.log(error)})
    }
  render() {
    const {id,name,age} =this.state
    return (
      <div >

      </div>
    )
  }
}

export default PostForm