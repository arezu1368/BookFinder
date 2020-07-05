import {BookServices} from "./book-services.js";
import {BookCard} from "./book-card.js";
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
        bookServices.search(key);
    };
}
