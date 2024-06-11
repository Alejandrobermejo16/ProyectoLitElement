import { LitElement, html, css } from 'lit-element';

export class AbmTimer extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html`
        <p>parece que ya sí</p>
        `;
    }
}
customElements.define('abm-timer', AbmTimer);
