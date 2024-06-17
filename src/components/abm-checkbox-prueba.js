import { LitElement, html, css } from "lit-element";

export class AbmCheckboxPrueba extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    .custom-checkbox:checked::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 6px;
      width: 6px;
      height: 12px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    .custom-checkbox {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: transparent;
      border: 2px solid #ccc;
      border-radius: 3px;
      position: relative;
      cursor: pointer;
    }
    .custom-checkbox:checked {
      background-color: green;
      border-color: green;
    }
  `;

  static get properties() {
    return {
      checked: { type: Boolean },
      checkboxClass: { type: String },
      hola: { type: String },
    };
  }

  constructor() {
    super();
    this.checked = false;
    this.checkboxClass = "custom-checkbox";
    this.hola = '';
  }

  render() {
    return html`
      <input
        class="${this.checkboxClass}"
        type="checkbox"
        .checked="${this.checked}"
        @change="${this._onCheckboxChange}"
      />
      <p>${this.hola}</p>
    `;
  }

  _onCheckboxChange(e) {
    this.checked = e.target.checked;
    this.dispatchEvent(
      new CustomEvent("checkbox-changed", {
        detail: { checked: this.checked },
      })
    );
  }


  comunicarmeconpadre() {
    this.hola = "valor que tengo en el hijo"
  }


  // Método para cambiar el estado del checkbox desde el padre
  toggleChecked() {
    this.checked = !this.checked;
  }
}

customElements.define("abm-checkbox-prueba", AbmCheckboxPrueba);
