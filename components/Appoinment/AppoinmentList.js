import React, { useReducer, useState } from "react";
import Appointment from "./Appointment";
import { reducer, getLocalStorageData } from "../../lib/reducer";

const AppoinmentList = () => {
  const [state, dispatch] = useReducer(reducer, [], getLocalStorageData);

  return (
    <div className="lista-citas">
      {state.data.map((appointment) => (
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
