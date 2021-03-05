class News {
  constructor(url) {
    this.url = url;
    this.news = [];
  }

  async getList() {
    if (this.news.length == 0) {
      let response = await fetch(this.url);
      let data = await response.json();
      this.news = data.articles;
    }
    return this.news;
  }

  async getIds() {
    if (this.news.length == 0) {
      this.news = await this.getList();
    }
    return this.news.map((fileName, key) => {
      return key;
    });
  }

  async getById(id) {
    if (this.news.length == 0) {
      this.news = await this.getList();
    }
    return this.news[id];
  }
}

export default News;
