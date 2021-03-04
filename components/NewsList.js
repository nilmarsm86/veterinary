import News from "./News";

const NewsList = ({ newsList }) => (
  <div className="row">
    {newsList.map((news, i) => (
      <News data={news} id={i} key={news.url} />
    ))}
  </div>
);

export default NewsList;
