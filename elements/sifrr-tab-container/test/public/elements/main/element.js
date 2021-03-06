const { html } = Sifrr.Template;

class MainElement extends Sifrr.Dom.Element {
  static get useShadowRoot() {
    return false;
  }

  static get template() {
    return html`
      <sifrr-tab-container
        style="width: 400px"
        id="single"
        ::options="${{
          animation: 'none'
        }}"
      >
        <div>
          Tab 1
        </div>
        <div>
          Tab 2
        </div>
        <div>
          Tab 3
        </div>
      </sifrr-tab-container>
      <sifrr-tab-container
        style="width: 400px"
        id="looped"
        ::options="${{ animation: 'none', loop: true }}"
      >
        <div>
          Tab 1
        </div>
        <div>
          Tab 2
        </div>
        <div>
          Tab 3
        </div>
      </sifrr-tab-container>
      <sifrr-tab-container
        style="width: 600px"
        id="multi"
        ::options="${{ num: 3, animation: 'none' }}"
      >
        <div>
          Tab 1
        </div>
        <div>
          Tab 2
        </div>
        <div>
          Tab 3
        </div>
        <div>
          Tab 4
        </div>
        <div>
          Tab 5
        </div>
        <div>
          Tab 6
        </div>
      </sifrr-tab-container>
    `;
  }
}

Sifrr.Dom.register(MainElement, { dependsOn: ['sifrr-tab-container'] });
