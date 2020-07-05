import {BookCard} from "./book-card.js";
import {ResultItem} from "../../models/result-item.js";
import {Volume} from "../../models/volume.js";

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
                }

            })
            .catch((error) => {
                console.error('Error:', error);

            })


    }
    // search = (key) => {
    //     const url = `${baseUrl}?q=${key}&key=${apikey}`;
    //     fetch(url)
    //         .then((resp) => {return resp.json()})
    //         .catch((error) => {
    //             console.error('Error:', error);
    //             return null;
    //
    //         })
    //
    //
    // }
}
