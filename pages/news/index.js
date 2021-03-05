import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import NewsListComponent from "../../components/News/NewsList";
import News from "../../lib/News";
import Link from "next/link";

const NewsList = ({ newsList }) => {
  return (
    <Layout>
      <Head>
        <title>Veterinaria</title>
      </Head>
      <h2>Listado de noticias veterinarias</h2>
      <NewsListComponent newsList={newsList} />
      <Link href="/api/news_list">
        <a
          target="_blank"
          rel="noreferrer"
          className="waves-effect waves-light btn btn-block"
        >
          Exportar listado
        </a>
      </Link>
    </Layout>
  );
};

export default NewsList;

export async function getStaticProps() {
  let news = new News(
    "http://newsapi.org/v2/everything?q=veterinaria&from=2021-03-02&to=2021-03-02&apiKey=7466171532e94554a7775e7f8ccc7d8a"
  );
  let data = await news.getList();

  return {
    props: {
      newsList: data,
    },
  };
}
