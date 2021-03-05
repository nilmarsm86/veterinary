import React from "react";

const Appointment = (props) => (
  <div className="card mt-2 py-5">
    <div className="card-body">
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{props.data.mascot}</h3>
          <p className="card-text">
            <span>Nombre Dueño:</span>
            {props.data.owner}
          </p>
          <p className="card-text">
            <span>Fecha:</span>
            {props.data.date}
          </p>
          <p className="card-text">
            <span>Hora:</span>
            {props.data.time}
          </p>
          <p className="card-text">
            <span>Sintomas:</span>
          </p>
          <p>{props.data.symptoms}</p>

          <button
            className="btn btn-danger"
            onClick={() => props.delete(props.data.id)}
          >
            Borrar &times;
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Appointment;
