import React, { useEffect, useState } from "react";
import Header from "./Header";
import Head from "next/head";
import Link from "next/link";
import { useApi, kelvinToCelcius } from "../hooks/weather";
import Weather from "./Weather";

const Layout = ({ children, isHome }) => {
  let [weather, api] = useApi({});
  let [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setError(true);
      return;
    }
    api("Havana", "cu");
    setError(false);
  }, []);

  let component = <p>Cargando....</p>;
  if (!error) {
    if (weather && weather.cod && weather.cod == "200") {
      component = <Weather data={weather} />;
    } else {
      component = (
        <p>En este momento no podemos obtener el clima de la habana, cuba</p>
      );
    }
  }

  return (
    <>
      <Head>
        <meta name="description" content="Crear sitio de prueba con Next.js" />
      </Head>
      <main>
        <Header title="Clinica veterinaria" />

        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col s12 m12" style={{ textAlign: "center" }}>
            <Link href="/news">
              <a className="btn-large btn-info accent-4">Noticias</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="">
              <a className="btn-large btn-info accent-4">Planificar cita</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="">
              <a className="btn-large btn-info accent-4">Citas planificadas</a>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col s2 m3">
            <div className="row" style={{ marginBottom: "-12px" }}>
              <div className="col s12 m12">
                <div className="card contenedor-noticias">
                  <div className="card-content">{component}</div>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginBottom: "-12px" }}>
              <div className="col s12 m12">
                <div className="card contenedor-noticias">
                  <div className="card-title">Ultimas 3 citas</div>
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
            {!isHome && (
              <Link href="/">
                <a
                  className="btn"
                  style={{ marginTop: "10px", marginLeft: "12px" }}
                >
                  Ir al inicio
                </a>
              </Link>
            )}
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
