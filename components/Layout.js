import React, { useEffect, useState, useContext } from "react";
import Header from "./Header";
import Head from "next/head";
import Link from "next/link";
import { useApi } from "../hooks/weather";
import Weather from "./Weather";
import { ThemeContext } from "../context/Theme";
import Navigate from "../components/Navigate";

const Layout = ({ children, isHome }) => {
  let [weather, api] = useApi({});
  let [error, setError] = useState(false);
  let { theme, setTheme } = useContext(ThemeContext);

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
            <Navigate />
          </div>
        </div>

        <div className="row">
          <div className="col s2 m3">
            <div className="row" style={{ marginBottom: "-12px" }}>
              <div className="col s12 m12">
                <div className={`card contenedor-noticias ${theme}`}>
                  <div className="card-content">{component}</div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="container"
            className={`col s10 m8 container ${theme} contenedor-noticias`}
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
