(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{183:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=(n(194),n(191)),o=n(192);e.default=function(t){var e=t.location;return r.a.createElement(i.a,{location:e},r.a.createElement(o.a,{title:"404: Not Found"}),r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"Sorry, this page does not exist."))}},188:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return m}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(187),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var s=n(189),l=n.n(s);n.d(e,"PageRenderer",function(){return l.a});var d=n(32);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},189:function(t,e,n){var a;t.exports=(a=n(190))&&a.default||a},190:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(56),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},191:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(188);e.a=function(t){var e=t.title,n=t.children;return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",padding:"30px"}},r.a.createElement("h1",null,r.a.createElement(i.Link,{to:"/"},e)),n)}},192:function(t,e,n){"use strict";var a=n(193),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(195),s=n.n(u),l=n(188),d=function(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=t.site,u=e||a.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})};d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="4017075492"},193:function(t){t.exports={data:{site:{siteMetadata:{title:"Thoughts on Things",description:"",author:"Michele Larson"}}}}},194:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-404-js-38ebbcb9139e61c61e31.js.map