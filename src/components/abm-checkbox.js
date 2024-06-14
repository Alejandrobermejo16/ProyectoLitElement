import { LitElement, html, css } from 'lit-element';

export class AbmCheckbox extends LitElement {

    static get properties() {
        return {
          checked: { type: Boolean }
        };
      }
    
      constructor() {
        super();
        this.checked = false;
      }
    
      static get styles() {
        return css`
          /* Estilos opcionales */
        `;
      }
    
      connectedCallback() {
        super.connectedCallback();
        console.log('Componente montado');
      }
      
      firstUpdated() {
        console.log('Component primera actualizacion');
      }
    
      updated(changedProperties) {
        if (changedProperties.has('checked')) {
          console.log(`Checkbox cambiado a: ${this.checked}`);
          this.dispatchEvent(new CustomEvent('checkbox-changed', {
            detail: { checked: this.checked }
          }));
        }
      }
    
      _onCheckboxChange(e) {
        this.checked = e.target.checked;
      }
    
      render() {
        return html`
          <label>
            <input type="checkbox" .checked="${this.checked}" @change="${this._onCheckboxChange}" />
            Check me!
          </label>
        `;
      }
    }
customElements.define('abm-checkbox', AbmCheckbox);
