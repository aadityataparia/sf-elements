/*! SifrrShowcase v0.0.4 - sifrr project | MIT licensed | https://github.com/sifrr/sifrr-elements */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@sifrr/dom'), require('@sifrr/storage')) :
  typeof define === 'function' && define.amd ? define(['@sifrr/dom', '@sifrr/storage'], factory) :
  (global = global || self, global.SifrrShowcase = factory(global.Sifrr.Dom, global.Sifrr.Storage));
}(this, function (SifrrDom, SifrrStorage) { 'use strict';

  SifrrDom = SifrrDom && SifrrDom.hasOwnProperty('default') ? SifrrDom['default'] : SifrrDom;
  SifrrStorage = SifrrStorage && SifrrStorage.hasOwnProperty('default') ? SifrrStorage['default'] : SifrrStorage;

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var css = "* {\n  box-sizing: border-box; }\n\nh1, label, li {\n  font-family: Roboto, Ariel; }\n\n.container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  background-color: #3a3f5a; }\n\n#sidemenu {\n  width: 15%;\n  height: 100%; }\n\n#sidemenu > * {\n  height: 100%; }\n\n#sidebar {\n  width: 20%;\n  height: 100%; }\n\n#sidebar > * {\n  height: 33.33%; }\n\n#main {\n  width: 65%;\n  height: 100%; }\n\n.flex-column {\n  height: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: column; }\n\n.box {\n  width: 100%;\n  overflow: scroll;\n  border: 1px solid #5f616d; }\n\n#element {\n  padding: 20px;\n  height: 70%; }\n\n${this.state.style}\n#code {\n  height: 30%; }\n\n#code sifrr-code-editor {\n  height: calc(100% - 48px) !important; }\n\nh1 {\n  color: #cccccc;\n  text-align: center; }\n\nlabel, li {\n  color: #8f9cb3;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 4px; }\n\n#error, #urlStatus {\n  color: red; }\n\nsifrr-code-editor {\n  width: 100%;\n  height: calc(100% - 24px);\n  font-size: 14px;\n  padding: 4px; }\n\nul {\n  padding: 8px;\n  margin: 0; }\n\n.showcase {\n  list-style-type: none; }\n\n.showcase span {\n  color: red;\n  float: right; }\n\n#saver, #loader {\n  color: green;\n  padding: 4px;\n  margin: 0; }\n\nbutton {\n  background: #cccccc;\n  border: 1px solid grey;\n  color: #3a3f5a;\n  font-size: 14px;\n  padding: 4px; }\n";

  const html = "<div class=\"container\">\n  <div class=\"flex-column\" id=\"sidemenu\">\n    <div class=\"box\">\n      <h1>Sifrr Showcase</h1>\n      <p id=\"loader\"></p>\n      <input id=\"url\" type=\"text\" placeholder=\"Enter url here...\" name=\"url\">\n      <button type=\"button\" name=\"loadUrl\" _click=\"${this.loadUrl}\">Load from url</button>\n      <p id=\"urlStatus\"></p>\n      <button type=\"button\" name=\"saveFile\" _click=\"${this.saveFile}\">Save to File</button>\n      <input type=\"file\" name=\"file\" accept=\"application/json\" _input=\"${this.loadFile}\">\n    </div>\n  </div>\n  <div class=\"flex-column\" id=\"sidebar\">\n    <div class=\"box\">\n      <label for=\"style\">Element CSS Styles</label>\n      <sifrr-code-editor lang=\"css\" data-sifrr-bind=\"style\" value=\"${this.state.style}\"></sifrr-code-editor>\n    </div>\n    <div class=\"box\">\n      <label for=\"elState\">Element State Function</label>\n      <sifrr-code-editor id=\"elState\" lang=\"js\" data-sifrr-bind=\"elState\" value=\"${this.state.elState}\"></sifrr-code-editor>\n    </div>\n    <div class=\"box\">\n      <label for=\"states\">Variants</label>\n      <input id=\"variantName\" type=\"text\" name=\"variantName\" value=\"${this.state.name}\" data-sifrr-bind=\"name\">\n      <button type=\"button\" name=\"createVariant\" _click=\"${this.createNewVariant}\">Create new variant</button>\n      <p id=\"saver\"></p>\n      <style media=\"screen\">\n        #showcase${this.state.id} {\n          background: #5f616d;\n        }\n      </style>\n      <div id=\"showcases\">\n        <ul data-sifrr-repeat=\"${this.allShowcases()}\">\n          <li class=\"showcase\" data-showcase-id=\"${this.state.id}\" id=\"showcase${this.state.id}\">${this.state.name}<span>X</span></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"flex-column\" id=\"main\">\n    <div class=\"box\" id=\"element\" data-sifrr-html=\"true\">\n      ${this.state.code}\n    </div>\n    <div class=\"box\" id=\"code\">\n      <label for=\"elementName\">Element Name</label>\n      <input type=\"text\" name=\"elementName\" placeholder=\"Enter element name here...\" _input=\"${this.updateHtml}\" value=\"${this.state.element}\">\n      <label for=\"customUrl\">Custom Url</label>\n      <input type=\"text\" name=\"customUrl\" placeholder=\"Enter element url here...\" value=\"${this.state.elementUrl}\" data-sifrr-bind=\"elementUrl\">\n      <label for=\"elementName\">Is JS File</label>\n      <select id=\"isjs\" name=\"isjs\" value=\"${this.state.isjs}\" data-sifrr-bind=\"isjs\">\n        <option value=\"true\">true</option>\n        <option value=\"false\">false</option>\n      </select>\n      <span id=\"error\"></span>\n      <br>\n      <label for=\"htmlcode\">HTML Code</label>\n      <sifrr-code-editor lang=\"html\" data-sifrr-bind=\"code\" value=\"${this.state.code}\"></sifrr-code-editor>\n    </div>\n  </div>\n</div>";

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var sifrrcodeeditor = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
      module.exports = factory(SifrrDom);
    })(commonjsGlobal, function (SifrrDom) {
      SifrrDom = SifrrDom && SifrrDom.hasOwnProperty('default') ? SifrrDom['default'] : SifrrDom;
      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(Object.defineProperties(strings, {
          raw: {
            value: Object.freeze(raw)
          }
        }));
      }
      var css = ":host {\n  display: block;\n  position: relative; }\n\n* {\n  box-sizing: border-box; }\n\n.hljs {\n  width: 100%;\n  height: 100%;\n  font-family: Consolas,Liberation Mono,Courier,monospace;\n  font-size: 14px;\n  line-height: 18px;\n  padding: 8px;\n  margin: 0;\n  position: absolute;\n  white-space: pre-wrap;\n  top: 0;\n  left: 0; }\n\ntextarea {\n  z-index: 2;\n  resize: none;\n  border: none; }\n\ntextarea.loaded {\n  background: transparent !important;\n  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);\n  text-fill-color: transparent;\n  -webkit-text-fill-color: transparent; }\n\npre {\n  z-index: 1; }\n";
      function _templateObject() {
        const data = _taggedTemplateLiteral(["\n<style media=\"screen\">\n  ", "\n</style>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atom-one-dark.min.css\">\n<pre class='hljs'>\n  <code id=\"highight\" data-sifrr-html=\"true\">\n    ${this.htmlValue}\n  </code>\n</pre>\n<textarea class='hljs' _input=\"${this.input}\"></textarea>"], ["\n<style media=\"screen\">\n  ", "\n</style>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atom-one-dark.min.css\">\n<pre class='hljs'>\n  <code id=\"highight\" data-sifrr-html=\"true\">\n    \\${this.htmlValue}\n  </code>\n</pre>\n<textarea class='hljs' _input=\"\\${this.input}\"></textarea>"]);
        _templateObject = function () {
          return data;
        };
        return data;
      }
      const template = SifrrDom.template(_templateObject(), css);
      class SifrrCodeEditor extends SifrrDom.Element {
        static get template() {
          return template;
        }
        onAttributeChange() {
          this.update();
        }
        onConnect() {
          fetch("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js").then(resp => resp.text()).then(text => new Function(text)()).then(() => this.hljsLoaded());
          const txtarea = this.$('textarea');
          this.$('textarea').addEventListener('keydown', e => {
            let keyCode = e.keyCode || e.which;
            if (keyCode == 9) {
              e.preventDefault();
              const start = txtarea.selectionStart;
              const end = txtarea.selectionEnd;
              const tabCharacter = '  ';
              const tabOffset = 2;
              txtarea.value = txtarea.value.substring(0, start) + tabCharacter + txtarea.value.substring(end);
              txtarea.selectionStart = txtarea.selectionEnd = start + tabOffset;
            }
          });
        }
        input() {
          SifrrDom.Event.trigger(this, 'input');
          this.update();
        }
        hljsLoaded() {
          this.$('textarea').classList.add('loaded');
          this.update();
        }
        get htmlValue() {
          if (window.hljs) return hljs.highlight(this.lang, this.value).value;else return this.value.replace(/</g, '&lt;');
        }
        get value() {
          return this.$('textarea').value;
        }
        set value(v) {
          this.$('textarea').value = v;
          this.update();
        }
        get lang() {
          return this.getAttribute('lang') || 'html';
        }
      }
      if (window) SifrrDom.register(SifrrCodeEditor);
      return SifrrCodeEditor;
    });
  });

  function _templateObject() {
    const data = _taggedTemplateLiteral(["<style media=\"screen\">\n  ", "\n</style>\n", ""]);
    _templateObject = function () {
      return data;
    };
    return data;
  }
  const template = SifrrDom.template(_templateObject(), css, html);
  SifrrDom.Event.add('click');
  const defaultShowcase = {
    id: 1,
    name: 'new',
    element: 'sifrr-placeholder',
    style: "#element > * {\n  display: block;\n  background-color: white;\n  margin: auto;\n}",
    code: '<sifrr-placeholder>\n</sifrr-placeholder>',
    elState: 'return {\n\n}',
    isjs: 'true',
    elementUrl: ''
  };
  const storage = new SifrrStorage({
    name: 'sifrr-showcase',
    version: 1
  });
  const showcases = [];
  class SifrrShowcase extends SifrrDom.Element {
    static get template() {
      return template;
    }
    static observedAttrs() {
      return ['url'];
    }
    onConnect() {
      storage.get(['showcases', 'current']).then(res => {
        if (Array.isArray(res.showcases) && res.showcases.length > 0) {
          showcases.push(...res.showcases);
        } else showcases.push(defaultShowcase);
        this.switchShowcase(res.current || defaultShowcase.id);
      });
      this.$('#loader').textContent = 'loaded from storage!';
      SifrrDom.Event.addListener('click', '.showcase', (e, el) => {
        if (el.matches('.showcase')) {
          const id = el.dataset.showcaseId;
          this.switchShowcase(id);
        }
      });
      SifrrDom.Event.addListener('click', '.showcase span', (e, el) => {
        const id = el.parentNode.dataset.showcaseId;
        this.deleteShowcase(id);
      });
    }
    onUpdate() {
      if (this._element !== this.state.element || this._js !== this.state.isjs) {
        SifrrDom.load(this.state.element, {
          js: this.state.isjs == 'true',
          url: this.state.elementUrl ? this.state.elementUrl : undefined
        }).then(() => this.$('#error').innerText = '').catch(e => this.$('#error').innerText = e.message);
        this._js = this.state.isjs;
        this._element = this.state.element;
      }
      let state;
      try {
        state = new Function(this.$('#elState').value).call(this.element());
      } catch (e) {}
      if (state && this.element() && this.element().isSifrr && this.element().state !== state) {
        this.element().state = state;
      }
      this.$('#saver').textContent = 'saving in storage...';
      if (this._autoSaver) clearTimeout(this._autoSaver);
      this._autoSaver = setTimeout(() => {
        delete this._autoSaver;
        this.saveShowcase().then(() => {
          this.$('#saver').textContent = 'saved in storage!';
        });
      }, 1000);
    }
    onAttributeChange(name, _, value) {
      if (name === 'url') this.url = value;
    }
    createNewVariant() {
      const i = showcases.length;
      showcases[i] = Object.assign({}, defaultShowcase, {
        id: Math.max(...showcases.map(s => s.id)) + 1,
        name: this.$('#variantName').value
      });
      this.switchShowcase(i);
    }
    deleteShowcase(id) {
      showcases.forEach((s, i) => {
        if (s.id == id) showcases.splice(i, 1);
      });
      this.update();
    }
    saveShowcase() {
      const i = this.state.id;
      showcases.forEach(s => {
        if (s.id == i) {
          Object.assign(s, this.state);
        }
      });
      return storage.set('showcases', showcases);
    }
    switchShowcase(id) {
      this.state = Object.assign({}, showcases.filter(s => s.id == id)[0] || showcases[0]);
      storage.set('current', id);
    }
    set url(v) {
      this._url = v;
      if (this.getAttribute('url') !== v) this.setAttribute('url', v);
      if (this.$('#url').value !== v) this.$('#url').value = v;
      this.loadUrl();
    }
    get url() {
      return this._url;
    }
    loadUrl() {
      this._url = this.$('#url').value;
      window.fetch(this._url).then(resp => resp.json()).then(json => {
        showcases.splice(0, showcases.length);
        showcases.push(...json.showcases);
        this.switchShowcase(json.current);
        this.$('#loader').textContent = 'loaded from url!';
      }).catch(e => {
        this.$('#urlStatus').textContent = e.message;
      });
    }
    saveFile() {
      const blob = new Blob([JSON.stringify({
        current: this.state.id,
        showcases: showcases
      })], {
        type: 'application/json'
      });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'showcases';
      a.click();
    }
    loadFile(e, el) {
      const file = el.files[0];
      const fr = new FileReader();
      fr.onload = () => {
        const json = JSON.parse(fr.result);
        showcases.splice(0, showcases.length);
        showcases.push(...json.showcases);
        this.switchShowcase(json.current);
        this.$('#loader').textContent = 'loaded from file!';
      };
      fr.readAsText(file);
    }
    updateHtml(e, el) {
      const html = "<".concat(el.value, "></").concat(el.value, ">");
      this.state = {
        code: html,
        element: el.value
      };
    }
    element() {
      return this.$('#element').firstElementChild;
    }
    allShowcases() {
      return showcases;
    }
  }
  SifrrShowcase.defaultState = defaultShowcase;
  if (window) SifrrDom.register(SifrrShowcase);

  return SifrrShowcase;

}));
/*! (c) @aadityataparia */
//# sourceMappingURL=sifrrshowcase.js.map
