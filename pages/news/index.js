import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import LibNews from "../../lib/News";
import NewsListComponent from "../../components/NewsList";

const NewsList = ({ newsList }) => {
  //console.log(newsList);
  return (
    <Layout>
      <Head>
        <title>Test next</title>
      </Head>
      <h2>Listado de noticias veterinarias</h2>
      <NewsListComponent newsList={newsList} />
    </Layout>
  );
};

export default NewsList;

export async function getStaticProps() {
  const url =
    "http://newsapi.org/v2/everything?q=veterinaria&from=2021-03-02&to=2021-03-02&apiKey=7466171532e94554a7775e7f8ccc7d8a";
  //const url = "http://localhost:3000/us_health.json";
  const newsList = await LibNews.getList(url);
  return {
    props: {
      newsList: newsList,
    },
  };
}
