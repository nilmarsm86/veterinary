import React from "react";
import LibNews from "../../lib/News";
import Layout from "../../components/Layout";
import Head from "next/head";

const NewsData = ({ news }) => {
  return (
    <Layout>
      <Head>
        <title>{news.title}</title>
      </Head>
      <h2>{news.title}</h2>
    </Layout>
  );
};

export default NewsData;

export async function getStaticPaths() {
  const url =
    "http://newsapi.org/v2/everything?q=veterinaria&from=2021-03-02&to=2021-03-02&apiKey=7466171532e94554a7775e7f8ccc7d8a";
  //const url = "http://localhost:3000/us_health.json";
  const paths = await LibNews.getIds(url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const url =
    "http://newsapi.org/v2/everything?q=veterinaria&from=2021-03-02&to=2021-03-02&apiKey=7466171532e94554a7775e7f8ccc7d8a";
  //const url = "http://localhost:3000/us_health.json";
  const news = await LibNews.getNewsById(url, params.id);
  return {
    props: {
      news,
    },
  };
}
