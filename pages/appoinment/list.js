import Head from "next/head";
import Layout from "../../components/Layout";
import { reducer, getLocalStorageData } from "../../lib/reducer";
import AppoinmentList from "../../components/Appoinment/AppoinmentList";
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
        <title>Citas planificadas</title>
      </Head>

      <h2 className="card-title text-center mb-5">{title}</h2>
      <AppoinmentList />
    </Layout>
  );
}
