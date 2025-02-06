class TituloDinamico extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        //baseComp
        const compRoot = document.createElement('h1')
        compRoot.textContent = this.getAttribute("titulo")
        //estlizar comp
        const style =document.createElement('style');
        style.textContent = `
            h1{
                color:red;
            }
        `

        //enviar a shadow
        shadow.appendChild(compRoot);
        shadow.appendChild(style)
    }
}
customElements.define('titulo-dinamo',TituloDinamico)