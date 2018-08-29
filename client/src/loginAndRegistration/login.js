import React, { Component } from "react";

export class Login extends Component{
  render() {
    return (
      <div className="container">
        <div>
            <h1><span className="fa fa-sign-in"></span> Login</h1>
            <div className="alert alert-danger"></div>
            <form action="/flicks/login" method="post">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password"/>
                </div>
                <button type="submit" className="btn btn-warning btn-lg">Login</button>
            </form>
            <hr/>
            <p>Need an account? <a href="/flicks/signup">Signup</a></p>
            <p>Or go <a href="/flicks/home">home</a>.</p>
            <p><a href="/flicks/auth/google" class="btn btn-danger"><span class="fa fa-google-plus"></span> Google</a></p>
        </div>
      </div>
    );
  }
}
