import React, {Component} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './register.scss';
import Routes from "../../routes";



class Login extends Component {

  state = {
    auth: {
      email: '',
      password: ''
    },
    message: ''
  }

  notify = () => toast.success(this.state.message);
  handleOnchange = (event) => {
    const { target: { name, value } } = event;
    this.setState((prevState) => ({
      ...prevState, auth: {...prevState.auth, [name]: value}
    }))
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {auth} = this.state;
    const response = await axios.post('http://localhost:9200/login', { ...auth });
    const {data: {message}} = response;
    console.log(message);
    this.setState(prevState => ({...prevState, message}))
    if (this.state.message) {
      this.notify()
    }
  }

  render() {

    return (
      <div className="loginPage">
        <div className="header">
          <div className="registerFormContainer">
            <form>
              <div className='formHeader'>Login</div>

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
              >Login</button>
              <ToastContainer />

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login
