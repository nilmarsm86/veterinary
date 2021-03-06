import React, { useReducer, useEffect } from "react";
import { useFormModel, validateFormModel } from "../../hooks/form";
import { reducer, getLocalStorageData } from "../../lib/reducer";

const Form = () => {
  const [state, dispatch] = useReducer(reducer, [], (initial) => {
    /*return !!window
      ? JSON.parse(localStorage.getItem("appointments"))
      : initial;*/
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("appointments"));
    } else {
      return initial;
    }
  });

  const formInitialData = {
    mascot: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  };
  let [formAttrs, setFormModel] = useFormModel(formInitialData);
  let error = validateFormModel(formAttrs, {
    mascot: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const submitForm = (e) => {
    e.preventDefault();

    if (error) {
      return;
    }

    const { mascot, owner, date, time, symptoms } = formAttrs;

    let newAppoinment = {
      id: Date.now(),
      mascot: mascot.value,
      owner: owner.value,
      date: date.value,
      time: time.value,
      symptoms: symptoms.value,
    };
    dispatch({ type: "add", data: newAppoinment });
    setFormModel(formInitialData);
  };

  useEffect(() => {
    //!!window ? localStorage.setItem("appointments", JSON.stringify(state)) : "";
    if (typeof window !== "undefined") {
      localStorage.setItem("appointments", JSON.stringify(state));
    }
  }, [state]);

  return (
    <>
      {error && (
        <div
          className="alert alert-danger mt-2 mb-5 text-center red"
          style={{
            borderRadius: "5px",
            color: "white",
            padding: "3px",
            fontWeight: "bold",
          }}
        >
          (*) Todos los campos son obligatorios
        </div>
      )}

      <form onSubmit={submitForm.bind(this)} style={{ marginBottom: "10px" }}>
        <div className="input-field col s10">
          <input
            type="text"
            placeholder="Mascot Name"
            className="form-control"
            {...formAttrs.mascot}
          />
        </div>

        <div className="input-field col s10">
          <input
            type="text"
            placeholder="Owner Name"
            className="form-control"
            {...formAttrs.owner}
          />
        </div>

        <div className="input-field col s10">
          <input type="date" className="form-control" {...formAttrs.date} />
        </div>

        <div className="input-field col s10">
          <input type="time" className="form-control" {...formAttrs.time} />
        </div>

        <div className="input-field col s10">
          <textarea
            className="form-control"
            placeholder="Description"
            {...formAttrs.symptoms}
          ></textarea>
        </div>

        <input
          type="submit"
          className="btn btn-success btn-block py-3 nt-2"
          value="Add new appointment"
          style={{ marginLeft: "10px" }}
        />
      </form>
    </>
  );
};

export default Form;
