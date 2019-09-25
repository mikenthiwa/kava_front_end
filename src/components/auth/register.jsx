import React, {Component, Fragment} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.scss';

import axios from 'axios';


class Register extends Component {

  state = {
    auth: {
      username: '',
      email: '',
      password: '',
    },
    message: ''
  };

  notify = () => toast.success(this.state.message);

  handleOnchange = (event)  => {
    const { target: { name, value } } = event;
    this.setState((prevState) => ({
      ...prevState, auth: {...prevState.auth, [name]: value}
    }))
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const {auth} = this.state;
      const response = await axios.post('http://localhost:9200/register', { ...auth });
      console.log(response);
      const {data: {message}} = response;
      this.setState(prevState => ({...prevState, message}))
      if (this.state.message) {
        this.notify()
      }
    } catch(error) {
      console.log(error)
    }
  };

  render() {
    return (
      <div className="registerFormContainer">
        <form>
          <div className='formHeader'>Register to join</div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter email"
              onChange={this.handleOnchange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={this.handleOnchange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
              onChange={this.handleOnchange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary submit"
            onClick={this.handleSubmit}
          >Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
