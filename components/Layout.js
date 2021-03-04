import React from "react";
import Header from "./Header";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <main>
        <Header title="Test Next" />

        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col s12 m12" style={{ textAlign: "center" }}>
            <Link href="/news">
              <a className="btn-large btn-info accent-4">Noticias</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="">
              <a className="btn-large btn-info accent-4">Crear cita</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="">
              <a className="btn-large btn-info accent-4">Listado de citas</a>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col s2 m3">
            <div className="row" style={{ marginBottom: "-12px" }}>
              <div className="col s12 m12">
                <div className="card contenedor-noticias">
                  <div className="card-title">Tiempo</div>
                  <div className="card-content">Cntenido del tiempo</div>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginBottom: "-12px" }}>
              <div className="col s12 m12">
                <div className="card contenedor-noticias">
                  <div className="card-title">Ultimas citas</div>
                  <div className="card-content">Cntenido de las citas</div>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginBottom: "-12px" }}>
              <div className="col s12 m12">
                <div className="card contenedor-noticias">
                  <div className="card-title">Ultimas noticias</div>
                  <div className="card-content">Cntenido de las noticias</div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="container"
            className="col s10 m8 container white contenedor-noticias"
          >
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
