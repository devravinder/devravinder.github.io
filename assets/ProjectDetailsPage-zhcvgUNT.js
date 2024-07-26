import{j as e,c as j,p as f,u as p,b as u,d as g,e as N,I as w,f as v}from"./index-De7u6Kkn.js";import{b,D as x,B as k,L as o}from"./Elements-fVC6Zfxt.js";function I(s){return e.jsxs("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",height:"1em",width:"1em",...s,children:[e.jsx("path",{d:"M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z"}),e.jsx("path",{d:"M12 6v6l4 2"})]})}function L(s){return e.jsxs("svg",{fill:"currentColor",viewBox:"0 0 16 16",height:"1em",width:"1em",...s,children:[e.jsx("path",{d:"M6 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0z"}),e.jsx("path",{d:"M2 1h4.586a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0l-7-7A1 1 0 011 6.586V2a1 1 0 011-1zm0 5.586l7 7L13.586 9l-7-7H2v4.586z"})]})}const h={github:e.jsx(u,{className:"w-6 h-6"}),twitter:e.jsx(g,{className:"w-6 h-6"}),linkedin:e.jsx(N,{className:"w-6 h-6"}),website:e.jsx(w,{className:"w-6 h-6"}),externalLink:e.jsx(v,{className:"w-6 h-6"})};function M(){var l;const{id:s}=j(),i=(l=f.projects)==null?void 0:l[parseInt(s)-1];return e.jsx(b,{children:e.jsx(y,{project:i})})}const y=({project:s})=>e.jsxs("div",{className:"w-full flex flex-col gap-8",children:[e.jsx(C,{name:s.name,time:s.time,type:s.type}),e.jsx(D,{images:s.images}),e.jsxs("div",{className:"w-full flex flex-row gap-12",children:[e.jsx($,{client:s.client,roles:s.roles,features:s.features,technologies:s.technologies,links:s.links}),e.jsx(P,{descriptions:s.descriptions})]})]}),C=({name:s,time:i,type:l})=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("h2",{className:"font-bold text-5xl text-white",children:s}),e.jsxs("div",{className:"flex flex-row gap-8",children:[e.jsxs("div",{className:"flex flex-row gap-2 items-center text-lg",children:[e.jsx(I,{}),e.jsx("span",{children:i})]}),e.jsxs("div",{className:"flex flex-row gap-2 items-center text-lg",children:[e.jsx(L,{}),e.jsx("span",{children:l})]})]})]}),D=({images:s})=>e.jsx("div",{className:"py-4 flex flex-row gap-10",children:s.map((i,l)=>e.jsx("img",{className:"rounded-xl w-4/12",src:i},`image-${l}`))}),P=({descriptions:s})=>{const i=p();return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"font-semibold text-2xl text-white",children:"Details"}),e.jsx("div",{className:"flex flex-col gap-8 py-4",children:s.map((l,n)=>e.jsx(x,{children:l},`description-${n}`))})]}),e.jsx(k,{onClick:()=>i(-1),className:"self-end",children:"Close"})]})},$=({client:s,roles:i,features:l,technologies:n,links:m})=>{var r,d;return e.jsxs("div",{className:"w-1/3 flex flex-col flex-shrink-0 gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"font-semibold text-2xl text-white",children:"About Client"}),e.jsx("div",{className:"flex flex-col gap-1",children:(r=Object.entries(s))==null?void 0:r.map(([a,t],c)=>e.jsxs(x,{children:[a,": ",t]},`client-${c}`))})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"font-semibold text-2xl text-white",children:"My Role"}),e.jsx("ul",{className:"list-disc list-outside pl-4",children:i==null?void 0:i.map((a,t)=>e.jsx(o,{children:a},`role-${t}`))})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"font-semibold text-2xl text-white",children:"Key Features"}),e.jsx("ul",{className:"list-disc list-outside pl-4",children:l==null?void 0:l.map((a,t)=>e.jsx(o,{children:a},`feature-${t}`))})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"font-semibold text-2xl text-white",children:"Technologies & Tools"}),e.jsx("div",{className:"flex flex-col gap-1",children:e.jsx(x,{children:n==null?void 0:n.join(", ")})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"font-semibold text-2xl text-white",children:"Links"}),e.jsx("div",{className:"flex flex-row gap-2",children:(d=Object.entries(m))==null?void 0:d.map(([a,t],c)=>e.jsx("a",{href:t,target:"_blank",className:"p-2 rounded-lg bg-tertiary justify-center items-center",children:h[a]||h.externalLink},`link-${c}`))})]})]})};export{M as default};