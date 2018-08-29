import React, { Component } from "react";

export class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div>
            <h1><span className="fa fa-sign-in"></span> Signup</h1>
            <div className="alert alert-danger"></div>
            <form action="/flicks/signup" method="post">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password"/>
                </div>
                <button type="submit" className="btn btn-warning btn-lg">Signup</button>
            </form>
            <hr/>
            <p>Already have an account? <a href="/flicks/login">Login</a></p>
            <p>Or go <a href="/flicks/home">home</a>.</p>

        </div>
      </div>
    );
  }
}
