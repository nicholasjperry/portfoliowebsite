_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{BL0J:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("HCRX");t.definition={prefix:r.prefix,iconName:r.iconName,icon:[r.width,r.height,r.aliases,r.unicode,r.svgPathData]},t.faArrowAltCircleDown=t.definition,t.prefix=r.prefix,t.iconName=r.iconName,t.width=r.width,t.height=r.height,t.ligatures=r.aliases,t.unicode=r.unicode,t.svgPathData=r.svgPathData,t.aliases=r.aliases},HCRX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="circle-down",i=[61466,"arrow-alt-circle-down"],o="f358",a="M256 512c141.4 0 256-114.6 256-256s-114.6-256-256-256C114.6 0 0 114.6 0 256S114.6 512 256 512zM129.2 265.9C131.7 259.9 137.5 256 144 256h64V160c0-17.67 14.33-32 32-32h32c17.67 0 32 14.33 32 32v96h64c6.469 0 12.31 3.891 14.78 9.875c2.484 5.984 1.109 12.86-3.469 17.44l-112 112c-6.248 6.248-16.38 6.248-22.62 0l-112-112C128.1 278.7 126.7 271.9 129.2 265.9z";t.definition={prefix:"fas",iconName:r,icon:[512,512,i,o,a]},t.faCircleDown=t.definition,t.prefix="fas",t.iconName=r,t.width=512,t.height=512,t.ligatures=i,t.unicode=o,t.svgPathData=a,t.aliases=i},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("h4VS"),i=n("HcNT"),o=n("5SEd"),a=n("dJMH"),c=n("YFqc"),s=n.n(c),l=n("VdAu"),f=n("FdF9");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}var h=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).t=function(){return n.i.current.offsetWidth},n.h=function(){return n.i.current.offsetHeight},n.i=f.default.createRef(),n.state={path:""},n.u=0,n.o=0,n.l=0,n.v=n.v.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.p=function(){for(var e=[],t=0;t<=Math.max(this.props.points,1);t++){var n=t/this.props.points*this.t(),r=(this.l+(t+t%this.props.points))*this.props.speed*100,i=Math.sin(r/100)*this.props.amplitude,o=Math.sin(r/100)*i+this.props.height;e.push({x:n,y:o})}return e},i.m=function(e){var t="M "+e[0].x+" "+e[0].y,n={x:(e[1].x-e[0].x)/2,y:e[1].y-e[0].y+e[0].y+(e[1].y-e[0].y)},r=function(e,t){return" C "+e.x+" "+e.y+" "+e.x+" "+e.y+" "+t.x+" "+t.y};t+=r(n,e[1]);for(var i=n,o=1;o<e.length-1;o++)t+=r(i={x:e[o].x-i.x+e[o].x,y:e[o].y-i.y+e[o].y},e[o+1]);return(t+=" L "+this.t()+" "+this.h())+" L 0 "+this.h()+" Z"},i.g=function(){this.setState({path:this.m(this.p())})},i.M=function(){if(!this.props.paused){var e=new Date;this.o+=e-this.u,this.u=e}this.l=this.o*Math.PI/1e3,this.g()},i.v=function(){this.M(),this.j&&this.O()},i.O=function(){this.j=window.requestAnimationFrame(this.v),this.u=new Date},i.componentDidMount=function(){this.j||this.O()},i.componentWillUnmount=function(){window.cancelAnimationFrame(this.j),this.j=0},i.render=function(){var e=this.props,t=e.style,n=e.className,r=e.fill,i=e.children,o=e.id,a=d(e,["style","className","fill","paused","children","id","d","ref"]);return f.default.createElement("div",{style:u({width:"100%",display:"inline-block"},t),className:n,id:o,ref:this.i},f.default.createElement("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i,f.default.createElement("path",u({d:this.state.path,fill:r},a))))},r}(f.Component),p={height:20,amplitude:20,speed:.15,points:3},v=function(e){var t=e.options,n=d(e,["options"]);return f.default.createElement(h,u({},p,t,n))};v.defaultProps={paused:!1,fill:"#fff"};var m=v,x=n("IP2g"),g=n("BL0J");function b(){var e=Object(r.a)(["\n\n    .wave-container {\n        margin-top: 10vh;\n        overflow: auto;\n\n        h1 {\n            text-align: center;\n            color: #7fffd4;\n\n            @media(max-width: 768px) {\n                margin-top: 0;\n            }\n        }\n\n        h2 {\n            text-align: center;\n            color: #7fffd4;\n            font-size: 3rem;\n        }\n    }\n    \n    .resume-text-button-container {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        gap: 1vw;\n        \n        @media(max-width: 768px) {\n            display: flex;\n            flex-direction: column;\n        }\n\n        h3 {\n            color: #fff;\n        }\n\n        .icon {\n            height: 35px;\n            background-color: #000000;\n            color: #fff;\n            cursor: pointer;\n            border-radius: 50%;\n        }\n        \n        .button {\n            background-color: #44d4ff;\n            color: #000000;\n            font-weight: bold;\n            padding: 15px;\n            border-radius: 15px;\n            width: 135px;\n            cursor: pointer;\n            margin-left: 30px;\n            font-family: 'Nova Mono', monospace;\n\n            @media(max-width: 768px) {\n                margin: 0;\n                justify-content: center;\n                margin-top: 30px;\n                width: 200px;\n             }\n        }\n    }\n\n    .wave {\n        height: 50vh;\n        @media(max-width: 768px) {\n            visibility: hidden;\n            /* height: 30vh; */\n        }\n    }\n"]);return b=function(){return e},e}var w=o.a.div(b());t.default=function(){return Object(i.jsx)(a.Box,{className:"background",children:Object(i.jsx)(w,{children:Object(i.jsxs)(a.Box,{className:"wave-container",children:[Object(i.jsx)("h1",{children:"Nick Perry"}),Object(i.jsx)("h2",{children:"Software Developer"}),Object(i.jsxs)(a.Box,{className:"resume-text-button-container",children:[Object(i.jsx)("h3",{children:"Download my resume"}),Object(i.jsx)("a",{href:"resume.pdf",target:"_blank",children:Object(i.jsx)(x.a,{className:"icon",icon:g.faArrowAltCircleDown})}),Object(i.jsx)(s.a,{href:"/contact",prefetch:!1,children:Object(i.jsx)(l.a,{className:"button",children:"Contact Me"})})]}),Object(i.jsx)(m,{className:"wave",fill:"url(#gradient)",options:{amplitude:30,speed:.25,points:4},children:Object(i.jsx)("defs",{children:Object(i.jsxs)("linearGradient",{id:"gradient",gradientTransform:"rotate(90)",children:[Object(i.jsx)("stop",{offset:"10%",stopColor:"#552586"}),Object(i.jsx)("stop",{offset:"90%",stopColor:"#B589D6"})]})})})]})})})}},VdAu:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("FdF9"),i=n("dJMH");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Object(r.forwardRef)((function(e,t){return r.default.createElement(i.Box,o({ref:t,tx:"text"},e))})),Object(r.forwardRef)((function(e,t){return r.default.createElement(i.Box,o({ref:t,as:"h2",tx:"text",variant:"heading"},e,{__css:{fontSize:4,fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))})),Object(r.forwardRef)((function(e,t){return r.default.createElement(i.Box,o({ref:t,as:"a",variant:"link"},e))}));var a=Object(r.forwardRef)((function(e,t){return r.default.createElement(i.Box,o({ref:t,as:"button",tx:"buttons",variant:"primary"},e,{__css:{appearance:"none",display:"inline-block",textAlign:"center",lineHeight:"inherit",textDecoration:"none",fontSize:"inherit",px:3,py:2,color:"white",bg:"primary",border:0,borderRadius:4}}))}));Object(r.forwardRef)((function(e,t){return r.default.createElement(i.Box,o({ref:t,as:"img"},e,{__css:{maxWidth:"100%",height:"auto"}}))})),Object(r.forwardRef)((function(e,t){return r.default.createElement(i.Box,o({ref:t,variant:"card"},e))}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var o=i(n("FdF9")),a=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function f(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),i=n&&n.pathname||"/",u=o.default.useMemo((function(){var t=(0,a.resolveHref)(i,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,a.resolveHref)(i,e.as):c||o}}),[i,e.href,e.as]),d=u.href,h=u.as,p=e.children,v=e.replace,m=e.shallow,x=e.scroll,g=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var b=o.Children.only(p),w=b&&"object"===typeof b&&b.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),j=r(y,2),O=j[0],_=j[1],N=o.default.useCallback((function(e){O(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,O]);(0,o.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,i=l[d+"%"+h+(r?"%"+r:"")];e&&!i&&f(n,d,h,{locale:r})}),[h,d,_,g,t,n]);var M={ref:N,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:o,locale:s,scroll:c}))}(e,n,d,h,v,m,x,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),f(n,d,h,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var E="undefined"!==typeof g?g:n&&n.locale,R=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(h,E,n&&n.locales,n&&n.domainLocales);M.href=R||(0,a.addBasePath)((0,a.addLocale)(h,E,n&&n.defaultLocale))}return o.default.cloneElement(b,M)};t.default=u},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,i.useRef)(),l=(0,i.useState)(!1),f=r(l,2),u=f[0],d=f[1],h=(0,i.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return(0,i.useEffect)((function(){if(!a&&!u){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[u]),[h,u]};var i=n("FdF9"),o=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var c=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,5,0,2,3,4,7]]]);