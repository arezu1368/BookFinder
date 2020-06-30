document.addEventListener('DOMContentLoaded', function () {
    listItemsContainer = document.getElementById("list-items");
    const searchBtnClick = () => {
        const key = document.getElementById("key").value;
        search(key);
    }
     document.getElementById("search-btn").addEventListener("click", searchBtnClick);
});