"use strict";(self.webpackChunkopen_education_builder=self.webpackChunkopen_education_builder||[]).push([[854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},o="Docusaurus",l={unversionedId:"plugins/docusaurus",id:"plugins/docusaurus",title:"Docusaurus",description:"Description",source:"@site/docs/plugins/docusaurus.md",sourceDirName:"plugins",slug:"/plugins/docusaurus",permalink:"/openedu-builder/plugins/docusaurus",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Command",permalink:"/openedu-builder/plugins/command"},next:{title:"Reveal Embed",permalink:"/openedu-builder/plugins/reveal_embed"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Structure",id:"structure",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docusaurus"},"Docusaurus"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This plugins handles the organisation and generation of a Docusaurus site, regardless of the way source content is organized. The most important option is the ",(0,r.kt)("inlineCode",{parentName:"p"},"structure")," which defines where to look for content and how to organize it in the final site."),(0,r.kt)("p",null,"The plugin provides sane defaults in order to generate a simple Docusaurus site hassle free, while also providing the flexibility to customize the site to your needs through options like ",(0,r.kt)("inlineCode",{parentName:"p"},"static_assets")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"extra_files"),", the latter allowing you to overwrite complex customization files from Docusaurus."),(0,r.kt)("p",null,"In docs only mode, in order to customize the landing page you can either copy a ",(0,r.kt)("inlineCode",{parentName:"p"},"intro.md")," file under the docs folder, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"extra_files")," option and the autogenerated sidebar, or you can add an entry in the ",(0,r.kt)("inlineCode",{parentName:"p"},"structure")," option. In both cases, the file should have a frontmatter like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"---\nslug: /\n---\n")),(0,r.kt)("p",null,"Regardless of how you organize your files, Markdown links to files should still work after the Docusaurus structure is created, if you copied the files you are linking to. This is due to a step in the build process that looks for links and resolves them to the final destination."),(0,r.kt)("p",null,"A small level of familiarity with docusaurus is recommended in order to use this plugin."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"course_name")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Course")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the course. This is reflected in the homepage of the resulting docusaurus site.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sidebar")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auto")),(0,r.kt)("td",{parentName:"tr",align:null},"One of ",(0,r.kt)("inlineCode",{parentName:"td"},"auto"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"js")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"custom"),". ",(0,r.kt)("inlineCode",{parentName:"td"},"auto")," uses the docusaurus autogenerated sidebar; ",(0,r.kt)("inlineCode",{parentName:"td"},"js")," will generate a ",(0,r.kt)("inlineCode",{parentName:"td"},"sidebar.js")," file based on the ",(0,r.kt)("inlineCode",{parentName:"td"},"structure")," parameter; ",(0,r.kt)("inlineCode",{parentName:"td"},"custom")," will copy a ",(0,r.kt)("inlineCode",{parentName:"td"},"sidebar.js")," file from the lcoation specified by ",(0,r.kt)("inlineCode",{parentName:"td"},"sidebar_location"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sidebar_location")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$input_dir/sidebar.js")),(0,r.kt)("td",{parentName:"tr",align:null},"The location of the ",(0,r.kt)("inlineCode",{parentName:"td"},"sidebar.js")," file to use if ",(0,r.kt)("inlineCode",{parentName:"td"},"sidebar")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"custom"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sidebar_name")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sidebar")),(0,r.kt)("td",{parentName:"tr",align:null},"Sidebar name to use inside the ",(0,r.kt)("inlineCode",{parentName:"td"},"sidebar.js")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"docs_only")),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Switch for the docusaurus ",(0,r.kt)("a",{parentName:"td",href:"https://docusaurus.io/docs/docs-introduction/#docs-only-mode"},"docs only mode"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"structure")),(0,r.kt)("td",{parentName:"tr",align:null},"see below (Structure section)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"N\\A")),(0,r.kt)("td",{parentName:"tr",align:null},"The structure of the course. This is used to generate the sidebar. Leaf nodes are identified by the presence of the ",(0,r.kt)("inlineCode",{parentName:"td"},"location")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," attributes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"static_assets")),(0,r.kt)("td",{parentName:"tr",align:null},"list","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"A list of static assets to copy to the ",(0,r.kt)("inlineCode",{parentName:"td"},"static")," directory under the docusaurus build directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extra_files")),(0,r.kt)("td",{parentName:"tr",align:null},"list","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"A list of extra files to copy to the docusaurus build directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config_meta")),(0,r.kt)("td",{parentName:"tr",align:null},"Mapping","[str, str]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"N\\A")),(0,r.kt)("td",{parentName:"tr",align:null},"The metadata to add to the docusaurus ",(0,r.kt)("inlineCode",{parentName:"td"},"docusaurus.config.js")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config_socials")),(0,r.kt)("td",{parentName:"tr",align:null},"Mapping","[str, str]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"N\\A")),(0,r.kt)("td",{parentName:"tr",align:null},"The social media links to add to the docusaurus ",(0,r.kt)("inlineCode",{parentName:"td"},"docusaurus.config.js")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"copyright_string")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"N\\A")),(0,r.kt)("td",{parentName:"tr",align:null},"The copyright string to add to the docusaurus ",(0,r.kt)("inlineCode",{parentName:"td"},"docusaurus.config.js")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logo")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"N\\A")),(0,r.kt)("td",{parentName:"tr",align:null},"The logo to use for the docusaurus site. If not specified, the default docusaurus logo will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logo_dark")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"N\\A")),(0,r.kt)("td",{parentName:"tr",align:null},"The dark logo to use for the docusaurus site. If not specified, the default docusaurus logo will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"debug")),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to keep the docusaurus build directory alongside the built output.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"docusaurus:\n  plugin: docusaurus\n  options:\n    course_name: Example Course\n    logo: path/to/logo.svg\n    logo_dark: path/to/logo_dark.svg\n    docs_only: false\n    sidebar: js\n    sidebar_name: example_sidebar\n    structure:\n      - Lecture:\n          path: /build/embed_reveal\n          subsections:\n            - Compute: Compute/Compute.mdx\n            - Data: Data/Data.mdx\n      - Lab:\n        - Compute:\n            path: content/chapters/compute/lab/content\n            extra: \n              - ../media\n              - ../quiz\n            subsections:\n              - Overview: overview.md\n              - Benchmarks: benchmarks.md\n              - Processes: processes.md\n    static_assets:\n      - Compute: /path/to/content/chapters/compute/lecture/_site\n      - Data: /path/to/content/chapters/data/lecture/_site\n    extra_files:\n      - index.js: src/index.js\n    config_meta:\n      title: Example Course\n      url: http://localhost/\n      baseUrl: /\n      onBrokenLinks: warn\n      onBrokenMarkdownLinks: warn\n    config_socials:\n      Main site: https://example.com\n    copyright_string: Example Course Team\n    debug: false\n")),(0,r.kt)("p",null,"Note that this is a complex example. Usually, most of the parameters can be ommited, relying on the default values."),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"structure")," option is complex and will be explained with examples in this section. "),(0,r.kt)("p",null,"For the examples below we have the folowing directory structure in our repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"content\n\u2514\u2500\u2500 chapters\n    \u2514\u2500\u2500 compute\n        \u2514\u2500\u2500 lab\n         \xa0\xa0 \u251c\u2500\u2500 content\n         \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 benchmarks.md\n         \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 overview.md\n         \xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 processes.md\n         \xa0\xa0 \u251c\u2500\u2500 media\n         \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pic1.jpeg\n         \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pic2.svg\n         \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pic3.svg\n         \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pic4.svg\n         \xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 pic5.svg\n         \xa0\xa0 \u251c\u2500\u2500 quiz\n         \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 quiz1.md\n         \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 quiz2.md\n         \xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 quiz3.md\n         \xa0\xa0 \u2514\u2500\u2500 solution\n                \u2514\u2500\u2500 stuff-we-do-not-need-here\n")),(0,r.kt)("p",null,"We want to turn this into the following sidebar in docusaurus:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Labs\n\u2514\u2500\u2500 Compute\n    \u251c\u2500\u2500 Overview\n    \u251c\u2500\u2500 Benchmarks\n    \u2514\u2500\u2500 Processes\n")),(0,r.kt)("p",null,"The directory structure under docusaurus will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docs\n\u2514\u2500\u2500 Labs\n    \u2514\u2500\u2500 Compute\n        \u251c\u2500\u2500 media\n        \u251c\u2500\u2500 quiz\n        \u251c\u2500\u2500 overview.md\n        \u251c\u2500\u2500 processes.md\n        \u2514\u2500\u2500 benchmarks.md\n")),(0,r.kt)("p",null,"At its core, the ",(0,r.kt)("inlineCode",{parentName:"p"},"structure")," option is just a list of sidebar elements. Categories/chapters are identified by the presence of children, via the ",(0,r.kt)("inlineCode",{parentName:"p"},"subsections")," key, or by simply specifying the subchapters as a list. The following 2 examples are equivalent in meaning."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docusaurus:\n  plugin: docusaurus\n  options: \n    structure:\n      - Compute:\n          subsections:\n            - Overview: overview.md\n            - Benchmarks: benchmarks.md\n            - Processes: processes.md\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docusaurus:\n  plugin: docusaurus\n  options: \n    structure:\n      - Compute:\n          - Overview: overview.md\n          - Benchmarks: benchmarks.md\n          - Processes: processes.md\n")),(0,r.kt)("p",null,"Using the first option, while longer, is necessary when you want to specify extra files to copy in the directory of a chapter/section (the ",(0,r.kt)("inlineCode",{parentName:"p"},"extra")," option), or when you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," option (more below)."),(0,r.kt)("p",null,"In the example above, ",(0,r.kt)("inlineCode",{parentName:"p"},"- Overview: overview.md")," represents a content page that will be rendered by docusaurus. The path of ",(0,r.kt)("inlineCode",{parentName:"p"},"overview.md")," is relative to the root of the repository unless otherwise specified."),(0,r.kt)("p",null,"If your documents have a folder-like structure (like the one at the begging of the section), you need to specify the full path, as seen in this example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docusaurus:\n  plugin: docusaurus\n  options: \n    structure:\n      - Compute:\n          subsections:\n            - Overview: content/chapters/compute/lab/content/overview.md\n            - Benchmarks: content/chapters/compute/lab/content/benchmarks.md\n            - Processes: content/chapters/compute/lab/content/processes.md\n")),(0,r.kt)("p",null,"In order to avoid this kind of repetition that makes it hard to read the config file, the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," option can be used on any subsection to group a common set of files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docusaurus:\n  plugin: docusaurus\n  options: \n    structure:\n      - Compute:\n          path: content/chapters/compute/lab/content\n          subsections:\n            - Overview: overview.md\n            - Benchmarks: benchmarks.md\n            - Processes: processes.md\n")),(0,r.kt)("p",null,"The path you specify in the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," option will be prepended to any of the values that represent paths under this section. You can also specify more ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," options down the line and they will be glued together."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docusaurus:\n  plugin: docusaurus\n  options: \n    structure:\n      - Compute:\n          path: path1\n          subsections:\n            - More Content:\n                path: path2\n                subsections:\n                  - Overview: overview.md\n")),(0,r.kt)("p",null,"In the example above, the path to the Overview page will be ",(0,r.kt)("inlineCode",{parentName:"p"},"path1/path2/overview.md"),"."),(0,r.kt)("p",null,"For media and other files you might include in your documents, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"extra")," key to copy them in the folder of a section, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docusaurus:\n  plugin: docusaurus\n  options: \n    structure:\n      - Compute:\n          path: content/chapters/compute/lab/content\n          extra: \n            - ../media\n            - ../quiz\n          subsections:\n            - Overview: overview.md\n            - Benchmarks: benchmarks.md\n            - Processes: processes.md\n")),(0,r.kt)("p",null,"Note that this is also affected by the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," variable, the original location of the ",(0,r.kt)("inlineCode",{parentName:"p"},"media")," directory being ",(0,r.kt)("inlineCode",{parentName:"p"},"content/chapters/compute/lab/media"),", hence the ",(0,r.kt)("inlineCode",{parentName:"p"},".."),", representing the parent directory."),(0,r.kt)("p",null,"Leaf nodes (rendered pages based on your content) will always have the form ",(0,r.kt)("inlineCode",{parentName:"p"},"k: v"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," is a string. These have a few particularities."),(0,r.kt)("p",null,"The key (",(0,r.kt)("inlineCode",{parentName:"p"},"k"),") is, most of the time just a string representing the title of a sidebar element. It can also take the following forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Title/index_file_without_extension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Title/")," (default index file will be README.md)")),(0,r.kt)("p",null,"The value (",(0,r.kt)("inlineCode",{parentName:"p"},"v"),") is, most of the time a string, representing the path to the file that will be rendered. It can also be the path to a directory with multiple files. In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," needs to have one of the two forms above to specify which file will be rendered. Rewriting our example using this syntax looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docusaurus:\n  plugin: docusaurus\n  options: \n    structure:\n      - Compute:\n          path: content/chapters/compute/lab\n          extra: \n            - media\n            - quiz\n          subsections:\n            - Overview/overview.md: content/\n            - Benchmarks/benchmarks.md: content/\n            - Processes/processes.md: content/\n")),(0,r.kt)("p",null,"This will also generate a different docusaurus structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docs\n\u2514\u2500\u2500 Labs\n    \u2514\u2500\u2500 Compute\n        \u251c\u2500\u2500 media\n        \u251c\u2500\u2500 quiz\n        \u251c\u2500\u2500 Overview\n        \u2502   \u2514\u2500\u2500 overview.md\n        \u251c\u2500\u2500 Processes\n        \u2502   \u2514\u2500\u2500 processes.md\n        \u2514\u2500\u2500 Benchmarks\n            \u2514\u2500\u2500 benchmarks.md\n")),(0,r.kt)("p",null,"Because of the special syntax for ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),", if you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," in the name of a section, you will need to URL encode it, using ",(0,r.kt)("inlineCode",{parentName:"p"},"%2F")," instead."))}m.isMDXComponent=!0}}]);