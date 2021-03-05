import React from "react";
import Link from "next/link";

const News = ({ data, id }) => {
  return (
    <div className="col s12 m12">
      <div className="card">
        <div className="card-content">
          <Link href={`/news/${id}`}>
            <a>{data.title}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
