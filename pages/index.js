import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout isHome>
      <Head>
        <title>Test next</title>
      </Head>

      <h1>Cuerpo del index</h1>
    </Layout>
  );
}
