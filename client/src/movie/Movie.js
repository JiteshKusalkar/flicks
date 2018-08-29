import React, { Component } from 'react';
import { Modal } from '../commonComponents/modal';
import { Collapse } from '../commonComponents/collapse';
import SeatMap from '../commonComponents/seatMap';

export class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = { rating: this.props.movieDetail.rating, trailer: false, seatMap: false };
    }

    openModalWith = (content) => {
        switch (content) {
            case 'trailer':
                this.setState({ trailer: !this.state.trailer });
                break;
            default: this.setState({ seatMap: !this.state.seatMap });
                break;
        }
    }

    resetModalContent = () => {
        this.setState({
            trailer: false,
            seatMap: false
        });
    }

    render() {
        const seatMapArray = [
            [1, 2, 3, 4, 5, 6, 7, 8,],
            [9, 10, 11, 12, 13, 14, 15,16],
            [17, 18, 19, 20, 21, 22, 23, 24],
            [25, 26, 27, 28, 29, 30, 31, 32],
            [33, 34, 35, 36, 37, 38, 39, 40]
        ];
        return (
            <div className="col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span title="Ratings" className={("badge badge-pill badge-" + (this.state.rating <= 1.5 ? "danger" : (this.state.rating <= 3 ? "warning" : "success")))}>{this.state.rating}</span>&nbsp;
                    <a className="navbar-brand" href="#" >{this.props.movieDetail.name}</a>
                    <div className="collapse navbar-collapse" id="navContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link">{this.props.movieDetail.status?this.props.movieDetail.status:"--"}&nbsp;
                                    <span className="badge badge-pill badge-primary align-top">Status</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">{this.props.movieDetail.genre?this.props.movieDetail.genre:"--"}&nbsp;
                                    <span className="badge badge-pill badge-info align-top">Genre</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">{this.props.movieDetail.budget?this.props.movieDetail.budget:"--"}&nbsp;
                                    <span className="badge badge-pill badge-dark align-top">Bugdet</span>
                                </a>
                            </li>
                        </ul>
                        <div className="nav-item ">
                            <button onClick={() => { this.openModalWith('seatMap') }} type="button" className="btn btn-light" data-toggle="modal" data-target={("#modal" + this.props.movieDetail._id)}>Grab My Seat</button>
                        </div>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="collapse" href={("#collapse" + this.props.movieDetail._id)} role="button" aria-expanded="false"></a>
                        </div>
                    </div>
                </nav>
                <Modal modalClose={this.resetModalContent} modalId={("modal" + this.props.movieDetail._id)} detail={this.props.movieDetail} modalTitle={this.state.trailer?"Trailer":(this.state.seatMap?"Grab Seats!!":"TBD")}>
                    {this.state.trailer ? <video className="movie-trailer" src={this.props.movieDetail.trailerUrl} type="video/mp4" controls /> : null}
                    {this.state.seatMap ? <SeatMap seatMapArray={seatMapArray} /> : null}
                </Modal>
                <Collapse posterClick={this.openModalWith} collapseId={("collapse" + this.props.movieDetail._id)} detail={this.props.movieDetail}></Collapse>
            </div>
        )
    }
}
