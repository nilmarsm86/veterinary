import Head from "next/head";
import Layout from "../components/Layout";

export default function e404() {
  return (
    <Layout>
      <Head>
        <title>Error 404</title>
      </Head>

      <h1 style={{ textAlign: "center" }}>Página no encontrada.</h1>
    </Layout>
  );
}
