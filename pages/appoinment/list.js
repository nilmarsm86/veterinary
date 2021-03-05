import Head from "next/head";
import Layout from "../../components/Layout";
import AppoinmentList from "../../components/Appoinment/AppoinmentList";
import React from "react";

const List = () => (
  <Layout>
    <Head>
      <title>Citas planificadas</title>
    </Head>

    <h2 className="card-title text-center mb-5">Administra las citas</h2>
    <AppoinmentList />
  </Layout>
);

export default List;
