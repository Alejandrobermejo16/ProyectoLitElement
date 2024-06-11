import { LitElement, html } from 'lit-element';

export class AbmTaglist extends LitElement {
    static get properties() {
        return {
            tags: {type: Array}                      //1 definir la prop como array
        };
    }
constructor(){
    super();
    this.tags = [];                                //Inicializarla como un array vacio
}
    
   
    render() {
        return html`
    <!-- ${this.tags.map(function(item){                  //3 Para que se haga el map, tenemos que envolver el contenido html con
        return html`'<p>${item}</p>`;                    //el template de html y la prop con el dolar
    })} -->
     ${this.tags.map( tag => html`<p>${tag}</p>`)}
`;
    }
}
customElements.define('abm-taglist', AbmTaglist);