import { LitElement, html, css } from 'lit-element';

export class AbmHijo extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;

    dispararEvento() {
        const miEvento = new CustomEvent('mi-evento', {
          detail: { mensaje: 'Hola desde el evento' },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(miEvento);
      }
    
      render() {
        return html`
          <!-- <button @click="${this.dispararEvento}">Disparar Evento</button> -->
        `;
      }
}
customElements.define('abm-hijo', AbmHijo);