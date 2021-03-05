import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Form from "../../components/Appoinment/Form";

const Create = () => {
  return (
    <Layout>
      <Head>
        <title>Crear cita</title>
      </Head>

      <h2 className="card-title text-center mb-5">
        Llena el formulario para planificar una nueva cita
      </h2>

      <Form />
    </Layout>
  );
};

export default Create;
