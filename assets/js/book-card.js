class BookCard {
    constructor(volumeInfo) {
        this.title = volumeInfo.title;
        this._authors = volumeInfo.authors;
        this.publishedDate = volumeInfo.publishedDate;
        this.description= volumeInfo.description;
        if(volumeInfo.imageLinks !== undefined) {
            this.image = volumeInfo.imageLinks.thumbnail;
        }
    }
    get authors() {
        return this._authors.toString();
    }
    createCard = () => {
        let listItem = document.createElement('div');
        listItem.setAttribute('class', 'book-card');
        let imgSrc = this.image;
        if(this.image === undefined) {
            imgSrc = "../assets/images/no_img.png";
        }
        let output = `<div class="book-card">
                           <div class="book-img">
                             <img src="${imgSrc}" alt="${this.title}">
                           </div>
                            <div class="book-infoes">
                            <h1 class="book-title">${this.title}</h1>`
        if(this.publishedDate !== undefined) {
            output = `${output}  
                      <div class="info-item">
                         <span class='info-title'>تاریخ انتشار:</span>
                         <span class="publish-date">
                           ${this.publishedDate}
                         </span>
                        </div>`
        }
        if(this._authors !== undefined) {
            output = `${output}
                           <div class="info-item">
                            <span class='info-title'> نویسندگان :</span>
                             ${this.authors}
                          </div>`
        }
        if(this.description !== undefined) {
            output = `${output}
                           <div class="info-item">
                             ${this.description}
                          </div>`
        }

        listItemsContainer.insertAdjacentHTML("beforeend",output);
    }
}