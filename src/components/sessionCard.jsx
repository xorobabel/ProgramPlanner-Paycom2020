import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class SessionCard extends Component {
  state = {};
  render() {
    const { id, title, date, desc, attendeeCount } = this.props;
    let editState = true;
    return (
      <div className="container bg-light my-4 p-3 rounded shadow-sm">
        <div className="row">
          <div className="col col-10">
            <span>
              <h2>
                <span contentEditable={editState}>{title}</span>
              </h2>
            </span>
            <h5 className="text-secondary">
              <span contentEditable={editState}>{date}</span>
            </h5>
            <p className="mt-4" contentEditable={editState}>
              <span>{desc}</span>
            </p>
            <span className="mt-4 text-muted font-italic">
              Attendees:{" "}
              <span contentEditable={editState}>{attendeeCount}</span>
            </span>
          </div>
          <div className="col col-2 text-secondary">
            <div>
              <button
                type="button"
                className="btn btn-light float-right text-danger"
                onClick={() => {
                  window.confirm("Is it okay to delete the session?") &&
                    this.props.onDelete(id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button type="button" className="btn btn-light float-right">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionCard;
