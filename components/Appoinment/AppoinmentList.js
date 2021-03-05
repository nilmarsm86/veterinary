import React, { useReducer, useEffect } from "react";
import Appointment from "./Appointment";
import { reducer } from "../../lib/reducer";

const AppoinmentList = () => {
  const [state, dispatch] = useReducer(reducer, [], (initial) => {
    return JSON.parse(localStorage.getItem("appointments")) || initial;
  });
  console.log(state);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(state));
  }, [state]);

  return (
    <div className="lista-citas">
      {state.map((appointment) => (
        <Appointment
          key={appointment.id}
          data={appointment}
          handler={dispatch}
        />
      ))}
    </div>
  );
};

export default AppoinmentList;
