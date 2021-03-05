import React from "react";
import Link from "next/link";

const Navigate = () => {
  return (
    <>
      <Link href="/news">
        <a className="btn-large btn-info accent-4">Noticias</a>
      </Link>
      &nbsp;|&nbsp;
      <Link href="/appoinment/create">
        <a className="btn-large btn-info accent-4">Planificar cita</a>
      </Link>
      &nbsp;|&nbsp;
      <Link href="/appoinment/list">
        <a className="btn-large btn-info accent-4">Citas planificadas</a>
      </Link>
    </>
  );
};

export default Navigate;
