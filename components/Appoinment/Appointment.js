import React from "react";

const Appointment = ({ data, handler }) => (
  <div className="card mt-2 py-5" style={{ padding: "10px" }}>
    <div className="card-body">
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{data.mascot}</h3>
          <p className="card-text">
            <b>Nombre Dueño:</b>
            {data.owner}
          </p>
          <p className="card-text">
            <b>Fecha:</b>
            {data.date}
          </p>
          <p className="card-text">
            <b>Hora:</b>
            {data.time}
          </p>
          <p className="card-text">
            <b>Síntomas:</b>
          </p>
          <p>{data.symptoms}</p>

          <button
            className="btn btn-danger"
            onClick={() => handler({ type: "delete", data: data })}
          >
            Borrar &times;
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Appointment;
