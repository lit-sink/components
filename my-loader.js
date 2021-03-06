import {LitElement, html} from 'https://unpkg.com/lit-element/lit-element.js?module';

class LoaderElement extends LitElement {

    static get properties() {
        return {}
    }

    render() {
        return html`
            <style>
            .loader {
              border: 16px solid lightgrey;
              border-radius: 50%;
              border-top: 16px solid pink;
              width: 120px;
              height: 120px;
              -webkit-animation: spin 2s linear infinite; /* Safari */
              animation: spin 2s linear infinite;
            }

            /* Safari */
            @-webkit-keyframes spin {
              0% { -webkit-transform: rotate(0deg); }
              100% { -webkit-transform: rotate(360deg); }
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            </style>
            
        	<div class="loader"></div>
        `;
    }  
}

customElements.define('my-loader', LoaderElement);