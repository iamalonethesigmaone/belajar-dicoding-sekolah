class gambarNadine extends HTMLElement{
    static observedAttributes = ['img', 'imgcaption', 'imgalt'];
    constructor(){
        super();

        this._shadowakar = this.attachShadow({mode: "open"});

        this._image = this.getAttribute('img');
        this._imgcaption = this.getAttribute('imgcaption');
        this._imgalt = this.getAttribute('imgalt');

        this._style = document.createElement('style');
}

    connectedCallback(){
        this.render();
}

    updateSyle(){
        this._style.textContent = `
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 500px;
        }
        
        img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            object-position: center;
        }

        imgcaption{
            width: 100%;
            background-color: black;
            color: white;
            text-align: center;
        }
        `
    }

    render(){
        this.updateSyle();

        const template = `
            ${this._style.outerHTML}

            <div>
                <img src="${this._image}" alt="${this._imgalt}">
                <imgcaption>${this._imgcaption}</imgcaption>
            </div>
        `;

        this._shadowakar.innerHTML = template;
    }
}

window.customElements.define('gambar-nadine', gambarNadine);
