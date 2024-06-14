import { LitElement, html, css } from "lit-element";
import "./abm-checkbox-prueba";

export class AbmMenuOverlay extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    section {
      border: 1px solid red;
    }
  `;

  static get properties() {
    return {
      sectionVisible: { type: Boolean },
      checkboxActive: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.sectionVisible = true;
    this.checkboxActive = false;
  }

  render() {
    return html`
      <!-- Slot con nombre para iconos por ejemplo -->
      <div class="trigger">
        <slot name="trigger"></slot>
      </div>
      ${this.sectionVisible
        ? html`
            <section>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                pretium orci eu erat fermentum, sed pulvinar nisl dictum. Nam
                faucibus nulla et purus hendrerit, sit amet faucibus lectus
                bibendum. Integer eu purus turpis. In a magna eu orci
                condimentum hendrerit. Cras ut massa eget erat vehicula
                tristique a in felis. Curabitur nec urna velit. Vivamus
                vestibulum massa et lorem dapibus, eget venenatis felis
                scelerisque. Etiam id lectus sed nunc accumsan hendrerit. Sed
                consectetur urna non nisl congue, vel auctor magna sagittis.
                Mauris feugiat, est a tincidunt gravida, neque felis bibendum
                purus, nec volutpat mauris sapien a orci. Phasellus lacinia
                sapien et erat aliquam, ac pretium nunc consequat. Proin a augue
                at ipsum tincidunt dictum. Cras et purus quis risus auctor
                auctor. Fusce consequat velit nec arcu bibendum, ut varius erat
                accumsan. Ut nec nunc orci. Curabitur tempus metus eu augue
                lacinia interdum. Fusce condimentum, libero id lacinia eleifend,
                ligula velit scelerisque velit, in vestibulum lorem nisi eget
                tortor. Donec fringilla libero sit amet orci aliquet, sit amet
                accumsan nulla venenatis. Integer finibus quam ut justo suscipit
                ultricies. Morbi nec lectus erat. Aliquam erat volutpat. Duis
                sit amet orci id magna suscipit efficitur. Nulla facilisi. In
                ornare odio vel gravida ultricies. Nam scelerisque libero et
                elit dictum, ut tristique lacus malesuada. Suspendisse potenti.
                Integer in dolor nulla.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                pretium orci eu erat fermentum, sed pulvinar nisl dictum. Nam
                faucibus nulla et purus hendrerit, sit amet faucibus lectus
                bibendum. Integer eu purus turpis. In a magna eu orci
                condimentum hendrerit. Cras ut massa eget erat vehicula
                tristique a in felis. Curabitur nec urna velit. Vivamus
                vestibulum massa et lorem dapibus, eget venenatis felis
                scelerisque. Etiam id lectus sed nunc accumsan hendrerit. Sed
                consectetur urna non nisl congue, vel auctor magna sagittis.
                Mauris feugiat, est a tincidunt gravida, neque felis bibendum
                purus, nec volutpat mauris sapien a orci. Phasellus lacinia
                sapien et erat aliquam, ac pretium nunc consequat. Proin a augue
                at ipsum tincidunt dictum. Cras et purus quis risus auctor
                auctor. Fusce consequat velit nec arcu bibendum, ut varius erat
                accumsan. Ut nec nunc orci. Curabitur tempus metus eu augue
                lacinia interdum. Fusce condimentum, libero id lacinia eleifend,
                ligula velit scelerisque velit, in vestibulum lorem nisi eget
                tortor. Donec fringilla libero sit amet orci aliquet, sit amet
                accumsan nulla venenatis. Integer finibus quam ut justo suscipit
                ultricies. Morbi nec lectus erat. Aliquam erat volutpat. Duis
                sit amet orci id magna suscipit efficitur. Nulla facilisi. In
                ornare odio vel gravida ultricies. Nam scelerisque libero et
                elit dictum, ut tristique lacus malesuada. Suspendisse potenti.
                Integer in dolor nulla.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                pretium orci eu erat fermentum, sed pulvinar nisl dictum. Nam
                faucibus nulla et purus hendrerit, sit amet faucibus lectus
                bibendum. Integer eu purus turpis. In a magna eu orci
                condimentum hendrerit. Cras ut massa eget erat vehicula
                tristique a in felis. Curabitur nec urna velit. Vivamus
                vestibulum massa et lorem dapibus, eget venenatis felis
                scelerisque. Etiam id lectus sed nunc accumsan hendrerit. Sed
                consectetur urna non nisl congue, vel auctor magna sagittis.
                Mauris feugiat, est a tincidunt gravida, neque felis bibendum
                purus, nec volutpat mauris sapien a orci. Phasellus lacinia
                sapien et erat aliquam, ac pretium nunc consequat. Proin a augue
                at ipsum tincidunt dictum. Cras et purus quis risus auctor
                auctor. Fusce consequat velit nec arcu bibendum, ut varius erat
                accumsan. Ut nec nunc orci. Curabitur tempus metus eu augue
                lacinia interdum. Fusce condimentum, libero id lacinia eleifend,
                ligula velit scelerisque velit, in vestibulum lorem nisi eget
                tortor. Donec fringilla libero sit amet orci aliquet, sit amet
                accumsan nulla venenatis. Integer finibus quam ut justo suscipit
                ultricies. Morbi nec lectus erat. Aliquam erat volutpat. Duis
                sit amet orci id magna suscipit efficitur. Nulla facilisi. In
                ornare odio vel gravida ultricies. Nam scelerisque libero et
                elit dictum, ut tristique lacus malesuada. Suspendisse potenti.
                Integer in dolor nulla.
              </p>
            </section>
          `
        : ""}
        <!-- el punto indica que estás enlazando esa propiedad a una variable o expresión JavaScript dentro del componente hijo -->
         <!-- por ejemplo en este caso la clase css dependera de una prop definida en el hijo -->
      <abm-checkbox-prueba 
        .checked="${this.checkboxActive}"  
        @checkbox-changed="${this._onCheckboxChanged}">
      </abm-checkbox-prueba>
    `;
  }

  _onCheckboxChanged(e) {
    this.checkboxActive = e.detail.checked;
  }
}

customElements.define("abm-menu-overlay", AbmMenuOverlay);
