import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout isHome>
      <Head>
        <title>Aplicación veterinaria de pruebas</title>
      </Head>

      <h2>Conocimientos aplicados</h2>
      <ul>
        <li>Aplicacion de react</li>
        <li>Aplicacion de next</li>
        <li>Uso de staless functional component</li>
        <li>Aplicacion de hooks</li>
        <li>Aplicacion de eventos</li>
        <li>Aplicacion de paginas</li>
        <li>Aplicacion de contextos</li>
        <li>Aplicacion de consumo de apis externas</li>
        <li>Aplicacion de layout para el tema</li>
        <li>Aplicacion de rutas dinámicas</li>
        <li>Aplicacion de exportar la informacion en apis</li>
      </ul>
    </Layout>
  );
}
