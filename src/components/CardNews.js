class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute("class", 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute("class", 'card__left');

        const autor = document.createElement('span');
        autor.setAttribute('autor', 'Anonymous');
        autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous');

        const likedTitle = document.createElement('a');
        likedTitle.setAttribute('title', this.getAttribute('title') || 'Default Title');
        likedTitle.textContent = this.getAttribute('title') || 'Default Title';
        likedTitle.href = this.getAttribute('link-url') || '#';

        const newsContent = document.createElement('p');
        newsContent.setAttribute('content', this.getAttribute('content') || 'No content available');
        newsContent.textContent = this.getAttribute('content') || 'No content available';

        cardLeft.appendChild(autor);
        cardLeft.appendChild(likedTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute("class", 'card__right');

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute("foto") || '';
        newsImage.alt = 'foto';

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                font-family: "Segoe UI", sans-serif
            }
            .card{
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                display: flex;
                justify-content: space-between;
                padding-left:30px;
                margin-bottom:30px;
            }
            .card__left{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
            }
            .card__left > span{
                font-weight: 400;
                color:rgba(70, 70, 70,0.75);
            }
            .card__left > a{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            .card__left > p{
                color: rgb(70, 70, 70);
            }

            .card__right{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
            } 
            .card__right > img{
                width: 300px;
                height:auto; 
            }
        `;
        return style;
    }
}

customElements.define('card-news', CardNews);
