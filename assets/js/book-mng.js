function search(key) {
    // const request = new XMLHttpRequest();
    // request.open("Get", "https://www.googleapis.com/books/v1/volumes?key=AIzaSyA-oOOyMLYHFglvN-c3CZulj1Lje9mKMhA", false);
    // request.send();
    // request.onload = () => {
    //     console.log(request);
    //     if(request.status == 200) {
    //         console.log(JSON.parse(request.response.items));
    //     } else {
    //         console.log(`error ${request.status} ${request.statusText}`);
    //     }
    // }
    while (listItemsContainer.hasChildNodes()) {
        listItemsContainer.removeChild(listItemsContainer.firstChild);
    }
    const url = `${baseUrl}?q=${key}&key=${apikey}`;
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            const items = data.items;
            for (const item of items) {
                let resultItem = new ResultItem();
                resultItem = item;
                let volumeInfo = new Volume();
                volumeInfo = resultItem.volumeInfo;
                const bookCard = new BookCard(volumeInfo);
                bookCard.createCard();
            }

        })
}