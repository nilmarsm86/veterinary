import React, { useReducer } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useFormModel, validateFormModel } from "../../hooks/form";
import { reducer, getLocalStorageData } from "../../lib/reducer";

const Create = () => {
  const [state, dispatch] = useReducer(reducer, [], getLocalStorageData);

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

  return (
    <Layout>
      <Head>
        <title>Crear cita</title>
      </Head>

      <h2 className="card-title text-center mb-5">
        Llena el formulario para planificar una nueva cita
      </h2>

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
    </Layout>
  );
};

export default Create;
