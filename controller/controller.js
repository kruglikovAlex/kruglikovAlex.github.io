var getNews = function(url, news) {
    var xhttp = typeof XMLHttpRequest != 'undefined' ?
        new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');
    xhttp.onreadystatechange = function() {
        var status;
        var data;
        if (this.readyState == 4 && this.status == 200) {
            parseXhttpResponse(this.responseText);
        }
    };
    let queryUrl = url + "?source=" + news.name + "&sortBy=" + news.sort + "&apiKey=" + news.apiKey;
    xhttp.open('GET', queryUrl, true);
    xhttp.send();
};