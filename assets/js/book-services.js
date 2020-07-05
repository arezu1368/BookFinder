import {BookCard} from "./book-card.js";
export class BookServices {
    search = (key) => {
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
                    alert(bookCard.title);
                }

            })
            .catch((error) => {
                console.error('Error:', error);

            })


    }
}
