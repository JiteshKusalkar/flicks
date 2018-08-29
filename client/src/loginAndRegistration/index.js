import React, { Component } from "react";

export class IndexHome extends Component{
  render(){
    return (
      <div className="container">
          <div className="jumbotron text-center">
              <h1><span className="fa fa-lock"></span> Node Authentication</h1>
              <p>Login or Register with:</p>
              <a href="/flicks/login" className="btn btn-default"><span className="fa fa-user"></span> Local Login</a>
              <a href="/flicks/signup" className="btn btn-default"><span className="fa fa-user"></span> Local Signup</a>
              <a href="/flicks/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google</a>
          </div>
      </div>
    );
  }
}
