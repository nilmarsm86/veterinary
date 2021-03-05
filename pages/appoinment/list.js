import Head from "next/head";
import Layout from "../../components/Layout";
import { reducer, getLocalStorageData } from "../../lib/reducer";
import Appointment from "../../components/Appointment";
import React, { useReducer } from "react";

export default function List() {
  const [state, dispatch] = useReducer(reducer, [], getLocalStorageData);

  let title =
    state.data.length > 0
      ? "Administra las citas (" + state.data.length + ")"
      : "Agregue las citas aqui.";

  return (
    <Layout>
      <Head>
        <title>Test next</title>
      </Head>

      <h2 className="card-title text-center mb-5">{title}</h2>

      <div className="lista-citas">
        {state.data.map((appointment) => (
          <Appointment key={appointment.id} data={appointment} />
        ))}
      </div>
    </Layout>
  );
}
