import React, { Component } from 'react';
import { Movie } from '../movie/Movie';
import { Modal } from '../commonComponents/modal';
import { API } from '../service/movieService';
import { Login } from '../loginAndRegistration/login';
import { SignUp } from '../loginAndRegistration/signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '', movieDetails: [], target: '' };

    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.loginOrSignup = this.loginOrSignup.bind(this);
    this.filterDetails = this.filterDetails.bind(this);
  }

  componentWillMount() {
    this.getMovieDetails();
  }

  filterDetails = (ev) => {
    this.getMovieDetails(ev.target.value.toLowerCase());
  }

  loginOrSignup = (ev, target) => {
    this.setState({ target: target })
  }

  getMovieDetails(query) {
    let url = `/api/v1/movie/${query ? query : ''}`;
    API.get(url).then((response) => {
      this.setState({ movieDetails: response.data });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="card card-default row">
          <div className="dropdown dropdown-custom">
            <button type="button" className="btn btn-success login-btn fa fa-gears" data-toggle="dropdown">
            </button>
            <div className="dropdown-menu dropdown-custom-menu">
              <div>
                <a href="#" data-toggle="modal" data-target="#modal-login" onClick={(ev) => (this.loginOrSignup(ev, "login"))}><i className="fa fa-sign-in"></i>&nbsp;Login</a>&nbsp;/&nbsp;
                <a href="#" data-toggle="modal" data-target="#modal-signup" onClick={(ev) => (this.loginOrSignup(ev, "signup"))}>Signup&nbsp;<i className="fa fa-user-plus"></i></a>
              </div>
              <div>
                <a><i className="fa fa-user-circle"></i>&nbsp;Name</a> /
                <a href="#">Logout&nbsp;<i className="fa fa-sign-out"></i></a>
              </div>
            </div>
          </div>
          <Modal modalId={"modal-" + this.state.target} modalTitle={this.state.target == "login" ? "Login" : (this.state.target == "signup" ? "Signup" : "TBD")}>
            {this.state.target === "login" && <Login></Login>}
            {this.state.target === "signup" && <SignUp></SignUp>}
          </Modal>
          <div className="card-body row padding-tp">
            <div id="carousel" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                {/* <li data-target="#carousel" data-slide-to="2"></li> */}
              </ul>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://cdn.thearthunters.com/wp-content/uploads/old/201205272/4.jpg" alt="loading..." width="1100" height="500"></img>
                </div>
                <div className="carousel-item">
                  <img src="http://knotcause.com/wp-content/uploads/2018/05/landscape-movie-posters-view-large-poster-large-landscape-movie-posters.jpg" alt="loading..." width="1100" height="500"></img>
                </div>
                {/* <div className="carousel-item">
                  <img src="http://xlineknr.com/wp-content/uploads/2017/11/large-landscape-posters-other-sizes-a-world-war-z-movie-poster-large-landscape-photography-posters.jpg" alt="loading..." width="1100" height="500"></img>
                </div> */}
              </div>
              <a className="carousel-control-prev" href="#carousel" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a className="carousel-control-next" href="#carousel" data-slide="next">
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
            <div className="form-group col-sm-12 white-bg">
              <div className="col-sm-4 row">
                <label htmlFor="searchMovie">Search Movies</label>
                <input type="text" className="form-control" placeholder="Movie Search" name="searchMovie" id="searchMovie" onChange={this.filterDetails} />
              </div>
            </div>
            {this.state.movieDetails.length ? this.state.movieDetails.map((val, index) => (<Movie movieDetail={val} key={index} />)) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
