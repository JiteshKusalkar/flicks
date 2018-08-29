import React, { Component } from "react";

export class Profile extends Component{
    render(){
      return(
        <div className="container">
          <div className="page-header text-center">
            <h1><span className="fa fa-anchor"></span> Profile Page</h1>
            <a href="/flicks/logout" className="btn btn-default btn-sm">Logout</a>
          </div>
          <div className="row">
              <div className="col-sm-6">
                  <div className="well">
                      <h3><span className="fa fa-user"></span> Local</h3>
                      <p>
                          <strong>id</strong>:
                          <strong>email</strong>:
                          <strong>password</strong>:
                      </p>
                  </div>
              </div>
          </div>
        </div>
    )
  }
}
