(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(0),r=n.n(a),i=n(188),o=n(197),l=n(191),c=n(192);t.default=function(e){var t=e.data,n=e.pageContext,u=e.location,s=t.markdownRemark,d=t.site.siteMetadata.title,p=n.previous,m=n.next,f=s.frontmatter,y=f.title,g=f.excerpt,h=f.date,v=f.tags;return r.a.createElement(l.a,{location:u,title:d},r.a.createElement(c.a,{title:y,description:g}),r.a.createElement("h3",null,y),r.a.createElement("p",{style:{textTransform:"uppercase",fontSize:"14px"}},h),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.html}}),r.a.createElement("hr",null),r.a.createElement("p",{style:{textTransform:"uppercase",fontSize:"14px"}},v&&v.length&&v.map(function(e){return r.a.createElement(a.Fragment,{key:e},r.a.createElement(i.Link,{to:"/tags/"+e+"/"},e," "))})),r.a.createElement(o.a,null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,p&&r.a.createElement(i.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),r.a.createElement("li",null,m&&r.a.createElement(i.Link,{to:m.fields.slug,rel:"next"},m.frontmatter.title," →"))))};var u="4251919120"},188:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(187),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(189),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},189:function(e,t,n){var a;e.exports=(a=n(190))&&a.default||a},190:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(56),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},191:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(188);t.a=function(e){var t=e.title,n=e.children;return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",padding:"30px"}},r.a.createElement("h1",null,r.a.createElement(i.Link,{to:"/"},t)),n)}},192:function(e,t,n){"use strict";var a=n(193),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(194),u=n.n(c),s=n(188),d=function(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(s.StaticQuery,{query:p,render:function(e){var a=e.site,c=t||a.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})};d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var p="4017075492"},193:function(e){e.exports={data:{site:{siteMetadata:{title:"Thoughts on Things",description:"",author:"Michele Larson"}}}}},197:function(e,t,n){"use strict";var a=n(198),r=n(0),i=n.n(r),o=n(188),l="199957516";t.a=function(){return i.a.createElement(o.StaticQuery,{query:l,render:function(e){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("p",null,"By"," ",i.a.createElement("strong",null,e.site.siteMetadata.author)))},data:a})}},198:function(e){e.exports={data:{site:{siteMetadata:{author:"Michele Larson"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-67c6a41392a259dd7220.js.map