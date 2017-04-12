function News(name, sort, apiKey) {
  this.name = name;
  this.sort = sort;
  this.apiKey = apiKey;
}

var newsBBC = new News("bbc-news","","827cb5bce49044ea9ca8eabc49b4cb06");
var newsTechcrunch = new News("techcrunch","latest","827cb5bce49044ea9ca8eabc49b4cb06");
var newsTheNextWeb = new News("the-next-web","latest","827cb5bce49044ea9ca8eabc49b4cb06");