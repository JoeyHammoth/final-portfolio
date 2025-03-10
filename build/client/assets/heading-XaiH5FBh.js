import{r as s,j as S}from"./jsx-runtime-DexIYAB0.js";import{L as A}from"./components-D1Eb6D8q.js";const Ke={desktop:2080,laptop:1680,tablet:1040,mobile:696,mobileS:400},G=e=>`${e}px`,c=e=>`${e/16}rem`,Ue=e=>Number(e.replace("ms","")),D=e=>`${e}ms`;function Q(e,t={}){let n={};const o=Object.keys(e);for(const r of o){let a=e[r];typeof a=="number"&&r==="delay"&&(a=D(a)),typeof a=="number"&&r!=="opacity"&&(a=G(a)),typeof a=="number"&&r==="opacity"&&(a=`${a*100}%`),n[`--${r}`]=a}return{...n,...t}}function H(...e){return e.filter(Boolean).join(" ")}const V={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"Gotham, var(--systemFontStack)",monoFontStack:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",japaneseFontStack:"IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:c(140),fontSizeH1:c(100),fontSizeH2:c(58),fontSizeH3:c(38),fontSizeH4:c(28),fontSizeH5:c(24),fontSizeBodyXL:c(22),fontSizeBodyL:c(20),fontSizeBodyM:c(18),fontSizeBodyS:c(16),fontSizeBodyXS:c(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},J={fontSizeH0:c(120),fontSizeH1:c(80)},Y={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:c(100),fontSizeH1:c(70),fontSizeH2:c(50),fontSizeH3:c(36),fontSizeH4:c(26),fontSizeH5:c(22)},Z={fontSizeH0:c(80),fontSizeH1:c(60),fontSizeH2:c(48),fontSizeH3:c(32),fontSizeH4:c(24),fontSizeH5:c(20)},ee={spaceOuter:"24px",fontSizeH0:c(56),fontSizeH1:c(40),fontSizeH2:c(34),fontSizeH3:c(28),fontSizeH4:c(22),fontSizeH5:c(18),fontSizeBodyL:c(17),fontSizeBodyM:c(16),fontSizeBodyS:c(14)},te={spaceOuter:"16px",fontSizeH0:c(42),fontSizeH1:c(38),fontSizeH2:c(28),fontSizeH3:c(24),fontSizeH4:c(20)},ne={background:"oklch(17.76% 0 0)",backgroundLight:"oklch(21.78% 0 0)",primary:"oklch(84.42% 0.19 202.24)",accent:"oklch(84.42% 0.19 202.24)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},se={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(84.42% 0.19 202.24)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},qe={base:V,desktop:J,laptop:Y,tablet:Z,mobile:ee,mobileS:te},Ae={dark:ne,light:se},oe="_icon_1tdl1_2",re={icon:oe},ae="/assets/icons-CWCWx_g_.svg",$=s.forwardRef(({icon:e,className:t,size:n,...o},r)=>S.jsx("svg",{"aria-hidden":!0,ref:r,className:H(re.icon,t),width:n||24,height:n||24,...o,children:S.jsx("use",{href:`${ae}#${e}`})})),ce="_text_13dm1_2",ie={text:ce},ue=({children:e,size:t="m",as:n="span",align:o="auto",weight:r="auto",secondary:a,className:u,...l})=>S.jsx(n,{className:H(ie.text,u),"data-align":o,"data-size":t,"data-weight":r,"data-secondary":a,...l,children:e}),N=s.createContext(null),W=typeof document<"u",X=W?s.useLayoutEffect:s.useEffect;class E{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function le(e){let t=new E,n=new E,o=0,r=!1,a=!1;const u=new WeakSet,l={schedule:(f,p=!1,d=!1)=>{const i=d&&r,m=i?t:n;return p&&u.add(f),m.add(f)&&i&&r&&(o=t.order.length),f},cancel:f=>{n.remove(f),u.delete(f)},process:f=>{if(r){a=!0;return}if(r=!0,[t,n]=[n,t],n.clear(),o=t.order.length,o)for(let p=0;p<o;p++){const d=t.order[p];u.has(d)&&(l.schedule(d),e()),d(f)}r=!1,a&&(a=!1,l.process(f))}};return l}const T=["prepare","read","update","preRender","render","postRender"],de=40;function fe(e,t){let n=!1,o=!0;const r={delta:0,timestamp:0,isProcessing:!1},a=T.reduce((i,m)=>(i[m]=le(()=>n=!0),i),{}),u=i=>{a[i].process(r)},l=()=>{const i=performance.now();n=!1,r.delta=o?1e3/60:Math.max(Math.min(i-r.timestamp,de),1),r.timestamp=i,r.isProcessing=!0,T.forEach(u),r.isProcessing=!1,n&&t&&(o=!1,e(l))},f=()=>{n=!0,o=!0,r.isProcessing||e(l)};return{schedule:T.reduce((i,m)=>{const g=a[m];return i[m]=(z,y=!1,R=!1)=>(n||f(),g.schedule(z,y,R)),i},{}),cancel:i=>T.forEach(m=>a[m].cancel(i)),state:r,steps:a}}const pe=s.createContext({});function me(e){const t=s.useRef(null);return t.current===null&&(t.current=e()),t.current}const he=e=>e,{schedule:xe,cancel:Ge,state:De,steps:Qe}=fe(typeof requestAnimationFrame<"u"?requestAnimationFrame:he,!0);function Se(){const e=s.useContext(N);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:o}=e,r=s.useId();return s.useEffect(()=>o(r),[]),!t&&n?[!1,()=>n&&n(r)]:[!0]}const F={current:null},O={current:!1};function ge(){if(O.current=!0,!!W)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>F.current=e.matches;e.addListener(t),t()}else F.current=!1}function K(){const e=s.useRef(!1);return X(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ze(){const e=K(),[t,n]=s.useState(0),o=s.useCallback(()=>{e.current&&n(t+1)},[t]);return[s.useCallback(()=>xe.postRender(o),[o]),t]}class ye extends s.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Re({children:e,isPresent:t}){const n=s.useId(),o=s.useRef(null),r=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:a,height:u,top:l,left:f}=r.current;if(t||!o.current||!a||!u)return;o.current.dataset.motionPopId=n;const p=document.createElement("style");return document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${u}px !important;
            top: ${l}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[t]),s.createElement(ye,{isPresent:t,childRef:o,sizeRef:r},s.cloneElement(e,{ref:o}))}const w=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:r,presenceAffectsLayout:a,mode:u})=>{const l=me(ke),f=s.useId(),p=s.useMemo(()=>({id:f,initial:t,isPresent:n,custom:r,onExitComplete:d=>{l.set(d,!0);for(const i of l.values())if(!i)return;o&&o()},register:d=>(l.set(d,!1),()=>l.delete(d))}),a?void 0:[n]);return s.useMemo(()=>{l.forEach((d,i)=>l.set(i,!1))},[n]),s.useEffect(()=>{!n&&!l.size&&o&&o()},[n]),u==="popLayout"&&(e=s.createElement(Re,{isPresent:n},e)),s.createElement(N.Provider,{value:p},e)};function ke(){return new Map}function be(e){return s.useEffect(()=>()=>e(),[])}const M=e=>e.key||"";function Me(e,t){e.forEach(n=>{const o=M(n);t.set(o,n)})}function He(e){const t=[];return s.Children.forEach(e,n=>{s.isValidElement(n)&&t.push(n)}),t}const Ce=({children:e,custom:t,initial:n=!0,onExitComplete:o,exitBeforeEnter:r,presenceAffectsLayout:a=!0,mode:u="sync"})=>{const l=s.useContext(pe).forceRender||ze()[0],f=K(),p=He(e);let d=p;const i=s.useRef(new Map).current,m=s.useRef(d),g=s.useRef(new Map).current,z=s.useRef(!0);if(X(()=>{z.current=!1,Me(p,g),m.current=d}),be(()=>{z.current=!0,g.clear(),i.clear()}),z.current)return s.createElement(s.Fragment,null,d.map(h=>s.createElement(w,{key:M(h),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:u},h)));d=[...d];const y=m.current.map(M),R=p.map(M),C=y.length;for(let h=0;h<C;h++){const x=y[h];R.indexOf(x)===-1&&!i.has(x)&&i.set(x,void 0)}return u==="wait"&&i.size&&(d=[]),i.forEach((h,x)=>{if(R.indexOf(x)!==-1)return;const b=g.get(x);if(!b)return;const _=y.indexOf(x);let k=h;if(!k){const q=()=>{i.delete(x);const P=Array.from(g.keys()).filter(v=>!R.includes(v));if(P.forEach(v=>g.delete(v)),m.current=p.filter(v=>{const B=M(v);return B===x||P.includes(B)}),!i.size){if(f.current===!1)return;l(),o&&o()}};k=s.createElement(w,{key:M(b),isPresent:!1,onExitComplete:q,custom:t,presenceAffectsLayout:a,mode:u},b),i.set(x,k)}d.splice(_,0,k)}),d=d.map(h=>{const x=h.key;return i.has(x)?h:s.createElement(w,{key:M(h),isPresent:!0,presenceAffectsLayout:a,mode:u},h)}),s.createElement(s.Fragment,null,i.size?d:d.map(h=>s.cloneElement(h)))};function _e(){!O.current&&ge();const[e]=s.useState(F.current);return e}const ve="_loader_1o1zt_2",Le="_text_1o1zt_17",Te="_span_1o1zt_43",we="_loaderSpan_1o1zt_1",j={loader:ve,text:Le,span:Te,loaderSpan:we},je=s.forwardRef(({className:e,style:t,width:n=32,height:o=4,text:r="Loading...",center:a,...u},l)=>_e()?S.jsx(ue,{className:H(j.text,e),weight:"medium",...u,children:r}):S.jsx("div",{ref:l,className:H(j.loader,e),"data-center":a,style:Q({width:n,height:o},t),...u,children:S.jsx("div",{className:j.span})})),Fe=({children:e,in:t,unmount:n,initial:o=!0,...r})=>{const a=s.useRef(),u=s.useRef();return s.useEffect(()=>{clearTimeout(t?u.current:a.current)},[t]),S.jsx(Ce,{children:(t||!n)&&S.jsx(Pe,{enterTimeout:a,exitTimeout:u,in:t,initial:o,...r,children:e})})},Pe=({children:e,timeout:t=0,enterTimeout:n,exitTimeout:o,onEnter:r,onEntered:a,onExit:u,onExited:l,initial:f,nodeRef:p,in:d})=>{const[i,m]=s.useState(f?"exited":"entered"),[g,z]=Se(),[y,R]=s.useState(!f),C=typeof t=="object",h=s.useRef(null),x=p||h,b=y&&d?g:!1;return s.useEffect(()=>{var k;if(y||!d)return;const _=C?t.enter:t;clearTimeout(n.current),clearTimeout(o.current),R(!0),m("entering"),r==null||r(),(k=x.current)==null||k.offsetHeight,n.current=setTimeout(()=>{m("entered"),a==null||a()},_)},[r,a,t,i,d]),s.useEffect(()=>{var k;if(g&&d)return;const _=C?t.exit:t;clearTimeout(n.current),clearTimeout(o.current),m("exiting"),u==null||u(),(k=x.current)==null||k.offsetHeight,o.current=setTimeout(()=>{m("exited"),z==null||z(),l==null||l()},_)},[g,u,z,t,l,d]),e({visible:b,status:i,nodeRef:x})},Be="_button_1l2e3_2",$e="_text_1l2e3_132",Ee="_loader_1l2e3_145",Ie="_icon_1l2e3_158",L={button:Be,text:$e,loader:Ee,icon:Ie};function U(e){return e==null?void 0:e.includes("://")}const Ve=s.forwardRef(({href:e,...t},n)=>U(e)||!e?S.jsx(I,{href:e,ref:n,...t}):S.jsx(I,{unstable_viewTransition:!0,as:A,prefetch:"intent",to:e,ref:n,...t})),I=s.forwardRef(({className:e,as:t,secondary:n,loading:o,loadingText:r="loading",icon:a,iconEnd:u,iconHoverShift:l,iconOnly:f,children:p,rel:d,target:i,href:m,disabled:g,...z},y)=>{const R=U(m),h=t||(m?"a":"button");return S.jsxs(h,{className:H(L.button,e),"data-loading":o,"data-icon-only":f,"data-secondary":n,"data-icon":a,href:m,rel:d||R?"noopener noreferrer":void 0,target:i||R?"_blank":void 0,disabled:g,ref:y,...z,children:[!!a&&S.jsx($,{className:L.icon,"data-start":!f,"data-shift":l,icon:a}),!!p&&S.jsx("span",{className:L.text,children:p}),!!u&&S.jsx($,{className:L.icon,"data-end":!f,"data-shift":l,icon:u}),S.jsx(Fe,{unmount:!0,in:o,children:({visible:x,nodeRef:b})=>S.jsx(je,{ref:b,className:L.loader,size:32,text:r,"data-visible":x})})]})}),Ne="_heading_e2qtd_2",We={heading:Ne},Je=({children:e,level:t=1,as:n,align:o="auto",weight:r="medium",className:a,...u})=>{const l=Math.min(Math.max(t,0),5),f=n||`h${Math.max(l,1)}`;return S.jsx(s.Fragment,{children:S.jsx(f,{className:H(We.heading,a),"data-align":o,"data-weight":r,"data-level":l,...u,children:e})})};export{Ve as B,Je as H,$ as I,je as L,ue as T,Q as a,Fe as b,H as c,me as d,X as e,De as f,Ke as g,Ae as h,G as i,he as j,xe as k,Ge as l,Ue as m,D as n,W as o,O as p,ge as q,F as r,qe as t,_e as u};
