import React, { Component } from 'react';
export class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal fade" id={this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">{this.props.modalTitle}</h5>
              <button onClick={this.props.modalClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className={`btn btn-primary${(this.props.modalTitle === 'Trailer') ? ' d-none' : ''}`}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
