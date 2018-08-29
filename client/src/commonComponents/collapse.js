
import React, { Component } from 'react';

export class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = { showMore: false, index: -1 };
    this.showRole = this.showRole.bind(this);
  }

  showRole(index) {
    this.setState({ index });
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id={this.props.collapseId}>
            <div className="card card-body">
              <div className="row">
                <div className="col-md-12 ml-auto">
                  <div className="card">
                    <img style={{height: '400px'}} onClick={() => { this.props.posterClick('trailer'); }} src={this.props.detail.posterUrl} className="rounded float-left cursor-ptr" alt="..." data-toggle="modal" data-target={(`#modal${this.props.detail._id}`)} />
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <p>Description :</p>
                <p className="text-secondary">{this.props.detail.description}</p>
              </div>
              <div className="collapse" id={(`${this.props.collapseId}Info`)}>
                <hr />
                <div>
                  <p>Cast and Crew :</p>
                  <div className="scrollmenu text-secondary">
                    {this.props.detail.cast.map((val, index) => (<a onMouseOver={() => { this.showRole(index); }} onMouseOut={() => { this.showRole(-1); }} target="_blank" className="anchor" key={index}><p className={`text-overflow margin-btm ${(index == this.state.index) || 'd-hide'}`}>{val.role}</p><img className="img img-thumbnail" src="https://www.w3schools.com/bootstrap/cinqueterre.jpg" alt={val.name} />&nbsp;<p className="text-overflow margin-btm">{val.name}</p></a>))}
                  </div>
                </div>
                <hr />
                <div>
                  <p>U/A Certification :</p>
                  <p className="text-secondary">{this.props.detail.rating}</p>
                </div>
                <hr />
                <div>
                  <p>Release Date :</p>
                  <p className="text-secondary">{this.props.detail.releaseDate}</p>
                </div>
              </div>
              <div className="text-center">
                <p>
                  <button className={(`btn btn-${!this.state.showMore ? 'info' : 'primary'}`)} onClick={() => this.setState({ showMore: !this.state.showMore })} type="button" data-toggle="collapse" data-target={`#${this.props.collapseId}Info`} aria-expanded="false" aria-controls="collapseExample">
                    {!this.state.showMore ? 'Show More' : 'Show Less'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
