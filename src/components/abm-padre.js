import { LitElement, html } from 'lit-element';
import './abm-hijo';

export class AbmPadre extends LitElement {
  constructor() {
    super();
    this.handleMiEvento = this.handleMiEvento.bind(this);
    this.handleDispararEvento = this.handleDispararEvento.bind(this);
  }

  firstUpdated() {
    this.shadowRoot.addEventListener('mi-evento', this.handleMiEvento);
    this.handleDispararEvento(); // Llama al método correctamente
  }

  handleDispararEvento() {
    const hijo = this.shadowRoot.querySelector('abm-hijo');
    if (hijo) {
      hijo.dispararEvento();
    } else {
      console.error('No se pudo encontrar el componente hijo');
    }
  }

  handleMiEvento(event) {
    console.log('Mensaje recibido:', event.detail.mensaje);
  }

  render() {
    return html`
      <button @click="${this.handleDispararEvento}">Disparar Evento desde Padre</button>
      <abm-hijo></abm-hijo>
    `;
  }
}

customElements.define('abm-padre', AbmPadre);
