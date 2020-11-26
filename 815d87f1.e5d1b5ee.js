(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(93)),c=a(95),o={id:"script_event",title:"Scripts & Events"},b={unversionedId:"guide/script_event",id:"guide/script_event",isDocsHomePage:!1,title:"Scripts & Events",description:"FIWL uses vanilla JavaScript as logic. The version of JavaScript is browser-dependent. ES6 syntax is recommended excluding module syntax (no import & export allowed) because it will run directly on browser. As HTML spec, we have ` tag. However, in FIWL we have both  and ` tags, explained as below.",source:"@site/docs/guide/script_event.md",permalink:"/docs/guide/script_event",editUrl:"https://github.com/fiwl-js/docs/edit/master/docs/guide/script_event.md",sidebar:"docs",previous:{title:"Arranging the Stage",permalink:"/docs/guide/stage"},next:{title:"Styling",permalink:"/docs/guide/style"}},s=[{value:"How to use script and event?",id:"how-to-use-script-and-event",children:[]},{value:"Stage Lifecycle",id:"stage-lifecycle",children:[{value:".fiwl Parsed",id:"fiwl-parsed",children:[]},{value:"Passive Stage",id:"passive-stage",children:[]},{value:"Interactive Stage",id:"interactive-stage",children:[]},{value:"Update / Draw Loop",id:"update--draw-loop",children:[]}]},{value:"Events",id:"events",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"FIWL uses vanilla JavaScript as logic. The version of JavaScript is browser-dependent. ES6 syntax is recommended excluding module syntax (no import & export allowed) because it will run directly on browser. As HTML spec, we have ",Object(i.b)("inlineCode",{parentName:"p"},"<script>")," tag. However, in FIWL we have both ",Object(i.b)("inlineCode",{parentName:"p"},"<script>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<event>")," tags, explained as below."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"script"),Object(i.b)("br",null),"\nExecuted right after ",Object(i.b)("inlineCode",{parentName:"p"},"*.fiwl")," file being parsed. The stage is currently not available.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"event"),Object(i.b)("br",null),"\nExecuted on specified condition. The stage is available when ",Object(i.b)("strong",{parentName:"p"},"ready")," event triggered and disappear before ",Object(i.b)("strong",{parentName:"p"},"destroy")," event triggered."))),Object(i.b)("h2",{id:"how-to-use-script-and-event"},"How to use script and event?"),Object(i.b)("p",null,"Script tag usage is similar with HTML:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'...\n<script>\n  // Your script goes here...\n  console.log("The .fiwl file has been parsed!");\n<\/script>\n...\n')),Object(i.b)("p",null,"It also has ability to load external script:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'  ...\n  <script from="/my-another-script.js"/>\n  ...\n')),Object(i.b)("p",null,"For event tag, we could write it as example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"  ...\n  <event on=\"ready\">\n    // Your main logic goes here...\n    console.log('I am ready!');\n  </event>\n  ...\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"on")," attribute is mandatory for event. Otherwise, that event tag will be useless."))),Object(i.b)("h2",{id:"stage-lifecycle"},"Stage Lifecycle"),Object(i.b)("p",null,"To understand which and when events triggered, we need to know stage lifecycle as illustrated below."),Object(i.b)("object",{type:"image/svg+xml",data:Object(c.a)("img/docs/guide/script_event-1.svg")}),Object(i.b)("p",null,"Black-colored texts tell us what happened to stage and blue-colored tell us which event to trigger. Keep in mind that The ",Object(i.b)("strong",{parentName:"p"},"create")," and ",Object(i.b)("strong",{parentName:"p"},"destroy")," process only happened once for each stage. Otherwise, could be happened repeatedly depends on user interaction. If you feel confused by diagram above, let me explain deeper."),Object(i.b)("h3",{id:"fiwl-parsed"},".fiwl Parsed"),Object(i.b)("p",null,"FIWL file just downloaded and parsed into XML DOM-like object. In this condition, the stage is not created at all. On the other side, every parsed script tags executed."),Object(i.b)("h3",{id:"passive-stage"},"Passive Stage"),Object(i.b)("p",null,"Stage is now created and ",Object(i.b)("inlineCode",{parentName:"p"},"created")," event triggered, but it's not interactive yet. Just a plain JavaScript Object that cannot react to any changes. That's why it is called \"passive\". On this condition, there are 2 potential things to happen:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Activate"),", when the stage is opened on either first time or when user go back to this stage."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Destroy"),", when user either close browser tab or go back to the stage ",Object(i.b)("strong",{parentName:"li"},"before")," this stage.")),Object(i.b)("h3",{id:"interactive-stage"},"Interactive Stage"),Object(i.b)("p",null,"The stage is now ready to action and triggers ",Object(i.b)("inlineCode",{parentName:"p"},"ready"),' event. Every properties in the stage are interactive. The word "interactive" here means both setter and getter, not a normal property. This allows you to update and re-draw the stage each time you modify something instead of request update manually. On this condition, we have 2 potential things to happen: (see ',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#stage-lifecycle"}),"the diagram")," above)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Focus"),", when user is currently using the app."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Close"),", when user navigate to the next stage.")),Object(i.b)("h3",{id:"update--draw-loop"},"Update / Draw Loop"),Object(i.b)("p",null,"When user is currently interacting with app, the stage is capable of automatically trigger ",Object(i.b)("inlineCode",{parentName:"p"},"update")," for each modification. The difference of ",Object(i.b)("inlineCode",{parentName:"p"},"draw")," event compared to ",Object(i.b)("inlineCode",{parentName:"p"},"update"),", the ",Object(i.b)("inlineCode",{parentName:"p"},"draw")," event only triggered when both ",Object(i.b)("inlineCode",{parentName:"p"},"update")," triggered ",Object(i.b)("strong",{parentName:"p"},"and")," GPU is ready to draw. Thus, ",Object(i.b)("inlineCode",{parentName:"p"},"update")," event will be more frequently triggered than ",Object(i.b)("inlineCode",{parentName:"p"},"draw")," event. However, when user is going to another tab or minimize the browser, the stage will simply unfocus and prevents ",Object(i.b)("inlineCode",{parentName:"p"},"update")," and ",Object(i.b)("inlineCode",{parentName:"p"},"draw")," events being triggered."),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.dictionary.com/browse/tldr"}),"TL;DR"),", we could summarize in table as below"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Event Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Triggered When"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"is Stage Available?"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Uses Cases"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"created")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"After ",Object(i.b)("strong",{parentName:"td"},"Passive Stage")," creation"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Downloading resources, add new event listener")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"ready")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"After ",Object(i.b)("strong",{parentName:"td"},"Interactive Stage")," creation"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A lot of things, all main logic starts here")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"focus")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Before user sees the app"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Play animation, resume the game, and more")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"update")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"After property modification"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Repetitive check, ",Object(i.b)("strong",{parentName:"td"},"DO NOT modify properties here"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"draw")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"After stage drawn"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Repetitive task, similar to ",Object(i.b)("inlineCode",{parentName:"td"},"requestAnimationFrame"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"unfocus")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Before user minimize browser or change tab"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stop animation, pause the game, and more")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"suspend")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Before navigate to another stage"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"remove event listeners and stop foreground processes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"destroy")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Before navigate to another app"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Usually session control such as logging exit time")))),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"DO NOT perform any widgets and stage properties modification when using ",Object(i.b)("inlineCode",{parentName:"p"},"update")," event. Otherwise, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/#:~:text=A%20stack%20overflow%20occurs%20when,before%20throwing%20a%20stack%20error."}),"stack overflow")," occured."))))}p.isMDXComponent=!0},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=l(a),O=n,m=p["".concat(c,".").concat(O)]||p[O]||d[O]||i;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";var n=a(0),r=a(20);t.a=function(){const e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},95:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(94),r=a(96);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const c=!a.startsWith(t)?t+a.replace(/^\//,""):a;return i?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},96:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);