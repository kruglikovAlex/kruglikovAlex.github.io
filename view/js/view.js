function parseXhttpResponse(response) {
    document.getElementById("testJson").innerHTML = JSON.stringify(JSON.parse(response), "/", " ");
    let jsonResponse = JSON.parse(response);
    let i = 1;
    jsonResponse.articles.forEach(function(element) {

        /*author*/
        let newLi = document.createElement('li');
        let id = 'li' + i;
        newLi.id = id;
        newLi.class = "flexElements";
        newLi.innerHTML = element.author;
        document.getElementById("list").insertBefore(newLi, list.children[1]);

        /*title*/
        let newDivTitle = document.createElement('h3');
        newDivTitle.innerHTML = element.title;
        document.getElementById(id).appendChild(newDivTitle);

        /*article*/
        let newDivDescription = document.createElement('article');
        newDivDescription.innerHTML = element.description;
        document.getElementById(id).appendChild(newDivDescription);

        /*url*/
        let newDivArticle = document.createElement('a')
        newDivArticle.href = element.url;
        newDivArticle.innerHTML = "Read more ...";
        document.getElementById(id).appendChild(newDivArticle);

        /*image*/
        let newDivImage = document.createElement('img');
        newDivImage.src = element.urlToImage;
        newDivImage.alt = element.title;
        document.getElementById(id).appendChild(newDivImage);

        /*published date*/
        let newDivPublishedAt = document.createElement('time');
        newDivPublishedAt.innerHTML = element.publishedAt;
        document.getElementById(id).appendChild(newDivPublishedAt);

        i++;
    })

}