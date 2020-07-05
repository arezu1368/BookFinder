import {BookServices} from "./book-services.js";
import {BookCard} from "./book-card.js";
import {Volume} from "../../models/volume.js";
import {ResultItem} from "../../models/result-item.js";
export const listItemsContainer = document.getElementById("list-items");
const waiting = document.getElementById("waiting");
export class Index {
    constructor(){
    }
    removeNodes = () => {
        while (listItemsContainer.hasChildNodes()) {
            listItemsContainer.removeChild(listItemsContainer.firstChild);
        }
    };
    searchBtnClick = () => {
        this.removeNodes();
        const key = document.getElementById("key").value;
        const bookServices = new  BookServices();
        const res = bookServices.search(key);
        this.showListItems(res);
    };
    showListItems = (res) => {
        res.then(function(data) {
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
}
