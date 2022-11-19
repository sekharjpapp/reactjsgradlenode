import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      <div>
        <form onSubmit={this.submitHandler}>
                    <div>
                        Id:
                        <input type="text" name="id" value={id}
                        onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        Name :
                        <input type="text" name="name" value={name}
                        onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        Age
                        <input type="text" name="age" value={age}
                        onChange={this.changeHandler}></input>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                          </Form.Group>
                    <button type="submit">Go</button>
                </form>
      </div>
    )
  }
}

export default PostForm