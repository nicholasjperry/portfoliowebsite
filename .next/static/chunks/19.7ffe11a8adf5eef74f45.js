(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{AeFk:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var r=t("FdF9"),o=(t("+1VY"),t("cSFU")),i=(t("pVnL"),t("gRFL"),t("2mql"),t("3mcS")),s=t("JIq1");var a=function(){function e(e){var n=this;this._insertTag=function(e){var t;t=0===n.tags.length?n.prepend?n.container.firstChild:n.before:n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(e,t),n.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var n=e.prototype;return n.hydrate=function(e){e.forEach(this._insertTag)},n.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),void 0!==e.nonce&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}(n);try{t.insertRule(e,t.cssRules.length)}catch(r){0}}else n.appendChild(document.createTextNode(e));this.ctr++},n.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),c=Object(o.f)((function(e,n){var t=e.styles,c=Object(s.a)([t],void 0,"function"===typeof t||Array.isArray(t)?Object(r.useContext)(o.b):void 0),u=Object(r.useRef)();return Object(r.useLayoutEffect)((function(){var e=n.key+"-global",t=new a({key:e,nonce:n.sheet.nonce,container:n.sheet.container,speedy:n.sheet.isSpeedy}),r=document.querySelector('style[data-emotion="'+e+" "+c.name+'"]');return n.sheet.tags.length&&(t.before=n.sheet.tags[0]),null!==r&&t.hydrate([r]),u.current=t,function(){t.flush()}}),[n]),Object(r.useLayoutEffect)((function(){void 0!==c.next&&Object(i.b)(n,c.next,!0);var e=u.current;if(e.tags.length){var t=e.tags[e.tags.length-1].nextElementSibling;e.before=t,e.flush()}n.insert("",c,e,!1)}),[n,c.name]),null}));function u(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return Object(s.a)(n)}},nGFE:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));var r=t("HcNT"),o=t("h4VS"),i=t("AeFk");function s(){var e=Object(o.a)(["\n                html {\n                    box-sizing: border-box; \n                    position: fixed;\n                    overflow: auto;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                }\n    \n                body {\n                    overflow: auto;\n                    overflow-x: hidden;\n                    margin: 0;\n                    padding: 0;\n                    font-family: 'Nova Mono', monospace;\n                }\n\n                .background {\n                    width: 100vw;\n                    height: 100vh;\n                    top: 0;\n                    bottom: 0;\n                    left: 0;\n                    right: 0;\n                    overflow: auto;\n                    background-image: url('/images/stars.png');\n                    /* animation: sky-move 12000s infinite; */\n                }\n                \n                /* @keyframes sky-move {\n                    from {background-position: 0 0;}\n                    to {background-position: -100000px 100000px;}\n                } */\n    \n                h1 {\n                    font-size: 4rem;\n                    background-image: \n                        linear-gradient(90deg, #552586, #B589D6);\n                    background-clip: text;\n                    color: transparent;\n                }\n\n                h2 {\n                    color: white;\n                }\n    \n                *,\n                *::before,\n                *::after {\n                    border-width: 0;\n                    border-style: solid;\n                    border-color: currentColor;\n                }\n            "]);return s=function(){return e},e}function a(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(i.a,{styles:Object(i.b)(s())})})}}}]);