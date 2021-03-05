import News from "../../lib/News";

export default async (req, res) => {
  let news = new News(
    "http://newsapi.org/v2/everything?q=veterinaria&from=2021-03-02&to=2021-03-02&apiKey=7466171532e94554a7775e7f8ccc7d8a"
  );

  res.status(200).json(await news.getList());
};
