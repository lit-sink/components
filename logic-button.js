import {LitElement, html} from 'https://unpkg.com/lit-element/lit-element.js?module';

class LogicButtonElement extends LitElement {

    static get properties() {
        return {}
    }
  
  	handleClick = () => {
    	alert("Logic alert!")
    }

    render() {
        return html`
            <style>
                button {
                    background: pink;
                }
            </style>
            
            <button @click=${this.handleClick}}>
                <slot></slot>
            </button>
        `;
    }  
}

customElements.define('logic-button', LogicButtonElement);