class News {
  static async getList(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data.articles;
  }

  static async getIds(url) {
    let list = await News.getList(url);
    return list.map((fileName, key) => {
      return {
        params: {
          id: String(key),
        },
      };
    });
  }

  static async getNewsById(url, id) {
    let list = await News.getList(url);
    return list[id];
  }
}

export default News;
