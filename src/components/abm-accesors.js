import { LitElement, html, css } from "lit-element";

export class AbmAccesors extends LitElement {
  static get properties() {
    return {
      prop: { type: Number },
    };
  }

  get prop() {
    //declaramos el atributo privado poniendo _
    return this._prop + "xx"
  }

  set prop(val) {
    const oldValue = this.prop; //viejo valor para luego poder actualizarlo
    //ahora para que se actualice el valor hay que llamar a 
    //para que no nos de undefined necesitamos hacer este set y 
    //tambien al ya haber declarado prop arriba en properties
    //se pone este atributo como privado
    this.requestUpdate('prop', oldValue);
    return this._prop = Math.floor(val);

   
  }

  render() {
    return html`
      <p>prop: ${this.prop}</p>
      <button
        @click="${() => {
          this.prop = Math.random() * 10;
        }}"
      >
        Change prop
      </button>
    `;
  }
}
customElements.define("abm-accesors", AbmAccesors);
