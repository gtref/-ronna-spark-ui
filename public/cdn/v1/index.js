/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(i,t,s)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,b=f?f.emptyScript:"",g=u.reactiveElementPolyfillSupport,$=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!a(t,e),_={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);o?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),o=t.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i;const r=o.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(void 0!==t){const r=this.constructor;if(!1===i&&(o=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??y)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[$("elementProperties")]=new Map,v[$("finalized")]=new Map,g?.({ReactiveElement:v}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,x=t=>t,E=A.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+C,P=`<${k}>`,T=document,U=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,z=/>/g,j=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,D=/"/g,L=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,F=T.createTreeWalker(T,129);function J(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const K=(t,e)=>{const s=t.length-1,i=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=N;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,d=0;for(;d<s.length&&(n.lastIndex=d,l=n.exec(s),null!==l);)d=n.lastIndex,n===N?"!--"===l[1]?n=R:void 0!==l[1]?n=z:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=j):void 0!==l[3]&&(n=j):n===j?">"===l[0]?(n=o??N,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?j:'"'===l[3]?D:B):n===D||n===B?n=j:n===R||n===z?n=N:(n=j,o=void 0);const h=n===j&&t[e+1].startsWith("/>")?" ":"";r+=n===N?s+P:c>=0?(i.push(a),s.slice(0,c)+w+s.slice(c)+C+h):s+C+(-2===c?e:h)}return[J(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class X{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,c]=K(t,e);if(this.el=X.createElement(l,s),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(w)){const e=c[r++],s=i.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:s,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?st:Q}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),F.nextNode(),a.push({type:2,index:++o});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===k)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function Z(t,e,s=t,i){if(e===V)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const r=M(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);F.currentNode=i;let o=F.nextNode(),r=0,n=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new G(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new it(o,this,t)),this._$AV.push(e),a=s[++n]}r!==a?.index&&(o=F.nextNode(),r++)}return F.currentNode=T,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=X.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new X(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new G(this.O(U()),this.O(U()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(void 0===o)t=Z(this,t,e,0),r=!M(t)||t!==this._$AH&&t!==V,r&&(this._$AH=t);else{const i=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Z(this,i[s+n],e,n),a===V&&(a=this._$AH[n]),r||=!M(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends Q{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===V)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(X,G),(A.litHtmlVersions??=[]).push("3.3.3");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new G(e.insertBefore(U(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}nt._$litElement$=!0,nt.finalized=!0,rt.litElementHydrateSupport?.({LitElement:nt});const at=rt.litElementPolyfillSupport;at?.({LitElement:nt}),(rt.litElementVersions??=[]).push("4.2.2");class lt extends nt{static styles=r`
    :host {
      display: block;
      box-sizing: border-box;
      font-family: system-ui, sans-serif;
      margin-bottom: 1rem;
    }
    .card {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    .header {
      padding: 12px 16px;
      background: #f8fafc;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .body {
      padding: 16px;
    }
    .body.collapsed {
      display: none;
    }
    .toggle-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 14px;
    }
  `;static properties={title:{type:String},collapsible:{type:Boolean},collapsed:{type:Boolean}};constructor(){super(),this.title="Card Title",this.collapsible=!1,this.collapsed=!1}toggle(){this.collapsible&&(this.collapsed=!this.collapsed)}render(){return I`
      <div class="card">
        <div class="header">
          <slot name="header"><strong>${this.title}</strong></slot>
          ${this.collapsible?I`<button class="toggle-btn" @click="${this.toggle}">${this.collapsed?"▼":"▲"}</button>`:""}
        </div>
        <div class="body ${this.collapsed?"collapsed":""}">
          <slot></slot>
        </div>
      </div>
    `}}customElements.get("card-element")||customElements.define("card-element",lt);class ct extends nt{static styles=r`
    :host {
      display: block;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      margin-bottom: 1rem;
    }
    .container {
      background-color: #1e1e1e;
      color: #d4d4d4;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid #333;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background-color: #252526;
      border-bottom: 1px solid #333;
    }
    .lang {
      font-size: 12px;
      color: #858585;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .copy-btn {
      background: #333;
      color: #ccc;
      border: 1px solid #444;
      border-radius: 4px;
      padding: 4px 8px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .copy-btn:hover {
      background: #444;
      color: #fff;
    }
    pre {
      margin: 0;
      padding: 14px;
      overflow-x: auto;
      font-size: 14px;
      line-height: 1.5;
    }
    code {
      font-family: inherit;
    }
  `;static properties={language:{type:String},_copied:{state:!0}};constructor(){super(),this.language="code",this._copied=!1}async copyToClipboard(){const t=this.textContent.trim();if(t)try{await navigator.clipboard.writeText(t),this._copied=!0,setTimeout(()=>{this._copied=!1},2e3)}catch(t){console.error("Failed to copy text: ",t)}}render(){return I`
      <div class="container">
        <div class="header">
          <span class="lang">${this.language}</span>
          <button class="copy-btn" @click="${this.copyToClipboard}">
            ${this._copied?"✓ Copied!":"Copy"}
          </button>
        </div>
        <pre><code><slot></slot></code></pre>
      </div>
    `}}customElements.get("code-block")||customElements.define("code-block",ct);class dt extends nt{static styles=r`
    :host {
      display: block;
      font-family: system-ui, -apple-system, sans-serif;
      margin-bottom: 0.75rem;
    }
    .toast {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-radius: 6px;
      color: #ffffff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .toast.hidden {
      opacity: 0;
      transform: translateY(-8px);
      pointer-events: none;
    }

    /* Type Variants */
    .toast.info { background-color: #2563eb; }
    .toast.success { background-color: #16a34a; }
    .toast.warning { background-color: #d97706; }
    .toast.error { background-color: #dc2626; }

    .content {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 500;
    }

    .close-btn {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.8);
      font-size: 18px;
      cursor: pointer;
      padding: 0 0 0 12px;
      line-height: 1;
    }
    .close-btn:hover {
      color: #ffffff;
    }

    /* Progress Bar */
    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.5);
      width: 100%;
      transform-origin: left;
    }

    /* Missing keyframes animation */
    @keyframes shrink {
      from { transform: scaleX(1); }
      to { transform: scaleX(0); }
    }
  `;static properties={type:{type:String},duration:{type:Number},open:{type:Boolean}};constructor(){super(),this.type="info",this.duration=4e3,this.open=!0,this._timer=null}connectedCallback(){super.connectedCallback(),this.duration>0&&this._startTimer()}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearTimeout(this._timer)}_startTimer(){this._timer=setTimeout(()=>{this.dismiss()},this.duration)}dismiss(){this.open=!1,this.dispatchEvent(new CustomEvent("toast-dismiss",{bubbles:!0,composed:!0,detail:{type:this.type}}))}_getIcon(){switch(this.type){case"success":return"✓";case"warning":return"⚠️";case"error":return"✕";default:return"ℹ️"}}render(){return this.open?I`
      <div class="toast ${this.type} ${this.open?"":"hidden"}">
        <div class="content">
          <span class="icon">${this._getIcon()}</span>
          <slot></slot>
        </div>
        <button class="close-btn" @click="${this.dismiss}">×</button>
        ${this.duration>0?I`
          <div class="progress" style="animation: shrink ${this.duration}ms linear forwards;"></div>
        `:""}
      </div>
    `:I``}}customElements.get("spark-notifier")||customElements.define("spark-notifier",dt);class ht extends nt{static styles=r`
    :host {
      display: block;
      box-sizing: border-box;
      font-family: system-ui, sans-serif;
      margin-bottom: 1rem;
    }
    .card {
      border: 1px solid #3b82f6;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    .header {
      padding: 12px 16px;
      background: #eff6ff;
      color: #1e40af;
      border-bottom: 1px solid #3b82f6;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .body {
      padding: 16px;
    }
    .body.collapsed {
      display: none;
    }
    .toggle-btn {
      background: transparent;
      border: none;
      color: #1e40af;
      cursor: pointer;
      font-size: 14px;
    }
  `;static properties={username:{type:String},collapsed:{type:Boolean}};constructor(){super(),this.username="User",this.collapsed=!1}toggle(){this.collapsed=!this.collapsed}render(){return I`
      <div class="card">
        <div class="header">
          <span>👤 <strong>${this.username}</strong></span>
          <button class="toggle-btn" @click="${this.toggle}">${this.collapsed?"Show":"Hide"}</button>
        </div>
        <div class="body ${this.collapsed?"collapsed":""}">
          <slot></slot>
        </div>
      </div>
    `}}customElements.get("profile-card")||customElements.define("profile-card",ht);class pt extends nt{static styles=r`
    :host {
      display: inline-block;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      border: 1px solid transparent;
      border-radius: 9999px; /* Class 1 fully rounded */
      cursor: pointer;
      outline: none;
      transition: all 0.2s ease-in-out;
      user-select: none;
    }

    .btn:focus-visible {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
    }

    .btn:active:not(:disabled) {
      transform: scale(0.97);
    }

    /* Primary */
    .btn.primary {
      background-color: #2563eb;
      color: #ffffff;
      border-color: #2563eb;
    }
    .btn.primary:hover:not(:disabled) {
      background-color: #1d4ed8;
      border-color: #1d4ed8;
    }

    /* Secondary */
    .btn.secondary {
      background-color: #f1f5f9;
      color: #1e293b;
      border-color: #cbd5e1;
    }
    .btn.secondary:hover:not(:disabled) {
      background-color: #e2e8f0;
      border-color: #94a3b8;
    }

    /* Danger */
    .btn.danger {
      background-color: #dc2626;
      color: #ffffff;
      border-color: #dc2626;
    }
    .btn.danger:hover:not(:disabled) {
      background-color: #b91c1c;
      border-color: #b91c1c;
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
  `;static properties={variant:{type:String},disabled:{type:Boolean},type:{type:String}};constructor(){super(),this.variant="primary",this.disabled=!1,this.type="button"}_handleClick(t){if(this.disabled)return t.preventDefault(),void t.stopPropagation();this.dispatchEvent(new CustomEvent("spark-click",{bubbles:!0,composed:!0,detail:{variant:this.variant,originalEvent:t}}))}render(){return I`
      <button
        type="${this.type}"
        class="btn ${this.variant}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
      >
        <slot></slot>
      </button>
    `}}customElements.get("spark-r-button")||customElements.define("spark-r-button",pt);export{lt as CardElement,ct as CodeBlock,ht as ProfileCard,dt as SparkNotifier,pt as SparkRButton};
