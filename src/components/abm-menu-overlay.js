import { LitElement, html, css } from 'lit-element';

export class AbmMenuOverlay extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html`
        <!-- slot con nombre para iconos por ejemplo-->
        <div class="trigger">
            <slot name="trigger"></slot>
        </div>
        <!-- slot principal -->
        <section>  
            <slot></slot>
        </section>
        `;
    }
}
customElements.define('abm-menu-overlay', AbmMenuOverlay);