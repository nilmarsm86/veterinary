import React from "react";
import LibNews from "../../lib/News";
import Layout from "../../components/Layout";
import Head from "next/head";
import News from "../../lib/News";
import Link from "next/link";

const NewsData = ({ news }) => {
  const image =
    news.urlToImage !== null ? (
      <div className="card-image">
        <img src={news.urlToImage} alt="" />
        <span className="card-title">{news.source.name}</span>
        <span className="card-title" style={{ marginLeft: "50%" }}>
          {news.author}
        </span>
      </div>
    ) : null;

  return (
    <Layout>
      <Head>
        <title>{news.title}</title>
      </Head>

      <div className="col s12 m12">
        <div className="card">
          {image}

          <div className="card-content">
            <h3>{news.title}</h3>
            <p>{news.description}...</p>
          </div>

          <div className="card-action" style={{ textAlign: "center" }}>
            <Link href={news.url}>
              <a
                target="_blank"
                rel="noreferrer"
                className="waves-effect waves-light btn"
                style={{ width: "40%", marginLeft: "10px" }}
              >
                Ver noticia completa
              </a>
            </Link>

            <Link href={`/api/news?id=${news.id}`}>
              <a
                target="_blank"
                rel="noreferrer"
                className="waves-effect waves-light btn"
                style={{ width: "40%", marginLeft: "10px" }}
              >
                Exportar en api
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsData;

export async function getStaticPaths() {
  let news = new News(
    "http://newsapi.org/v2/everything?q=veterinaria&from=2021-03-02&to=2021-03-02&apiKey=7466171532e94554a7775e7f8ccc7d8a"
  );
  let keys = await news.getIds();
  let paths = keys.map((key) => {
    return {
      params: {
        id: String(key),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let news = new News(
    "http://newsapi.org/v2/everything?q=veterinaria&from=2021-03-02&to=2021-03-02&apiKey=7466171532e94554a7775e7f8ccc7d8a"
  );
  let newsData = await news.getById(params.id);
  newsData.id = params.id;

  return {
    props: {
      news: newsData,
    },
  };
}
