import {BookServices} from "./book-services.js";
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
        alert('ho');
        this.removeNodes();
        const key = document.getElementById("key").value;
        const bookServices = new  BookServices();
        bookServices.search(key);
        // for (const item of items) {
        //     let resultItem = new ResultItem();
        //     resultItem = item;
        //     let volumeInfo = new Volume();
        //     volumeInfo = resultItem.volumeInfo;
        //     const bookCard = new BookCard(volumeInfo);
        //     bookCard.createCard();
        // }
    };
}
