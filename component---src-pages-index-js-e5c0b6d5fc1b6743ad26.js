(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return l});var a=n(0),r=n.n(a),i=n(147),o=n(153),u=n(150),c=n(151);n(158);t.default=function(e){var t=e.data,n=e.location,a=t.site.siteMetadata.title,l=t.allMarkdownRemark.edges;return r.a.createElement(u.a,{location:n,title:a},r.a.createElement(c.a,{title:"All posts",keywords:["blog"]}),r.a.createElement(o.a,null),l.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return r.a.createElement("div",{key:t.fields.slug},r.a.createElement("h3",null,r.a.createElement(i.Link,{to:t.fields.slug},n)),r.a.createElement("small",null,t.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))};var l="2243768871"},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(146),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(148),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},149:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(51),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(147);t.a=function(e){var t=e.title,n=e.children;return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",padding:"30px"}},r.a.createElement("h1",null,r.a.createElement(i.Link,{to:"/"},t)),n)}},151:function(e,t,n){"use strict";var a=n(152),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(155),l=n.n(c),s=n(147),d=function(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,u=e.title;return i.a.createElement(s.StaticQuery,{query:p,render:function(e){var a=e.site,c=t||a.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:u},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:c}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})};d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=d;var p="4017075492"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Thoughts on Things",description:"",author:"Michele Larson"}}}}},153:function(e,t,n){"use strict";var a=n(154),r=n(0),i=n.n(r),o=n(147),u="199957516";t.a=function(){return i.a.createElement(o.StaticQuery,{query:u,render:function(e){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("p",null,"By"," ",i.a.createElement("strong",null,e.site.siteMetadata.author)))},data:a})}},154:function(e){e.exports={data:{site:{siteMetadata:{author:"Michele Larson"}}}}},158:function(e,t,n){e.exports={title:"page-module--title--1npzP",emphasize:"page-module--emphasize--1BA4F"}}}]);
//# sourceMappingURL=component---src-pages-index-js-e5c0b6d5fc1b6743ad26.js.map