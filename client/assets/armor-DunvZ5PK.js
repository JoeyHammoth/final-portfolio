import{r as e,j as f}from"./jsx-runtime-DexIYAB0.js";import{u as Y,c as q,b as K,m as U,L as Z,a as $,t as J,n as O}from"./heading-B-J-pHfi.js";import{u as Q}from"./image-BvzRmnxP.js";import{W as ee,h as te,o as re,e as ne,S as se,p as oe,G as ae,q as ie,D as x,r as ce,c as ue,a as le,m as de,n as pe}from"./three-BzMM05cl.js";import{t as fe}from"./throttle-BgiUmwhn.js";import{u as E}from"./use-spring-BEVj5XCa.js";import"./components-BuI-RKWx.js";import"./index-Bmnn5a8H.js";const me="/final-portfolio/assets/volkihar-cube-nx-B7Zjde9E.jpg",ve="/final-portfolio/assets/volkihar-cube-ny-K8Ej-0KC.jpg",he="/final-portfolio/assets/volkihar-cube-nz-CwSlGC5m.jpg",ge="/final-portfolio/assets/volkihar-cube-px-B6VuHL6s.jpg",be="/final-portfolio/assets/volkihar-cube-py-nbSfCjcD.jpg",we="/final-portfolio/assets/volkihar-cube-pz-Bzqv8d-T.jpg",xe="/final-portfolio/assets/volkihar-knight-BtFNLzdG.glb",Le="_armor_1r5zf_1",ye="_loader_1r5zf_7",ke="_canvas_1r5zf_16",L={armor:Le,loader:ye,canvas:ke},C={stiffness:40,damping:20,mass:1.5},Ge=({showDelay:T=0,cameraPosition:m={x:0,y:0,z:6},className:M,alt:G,..._})=>{const[y,P]=e.useState(!1),[V,B]=e.useState(!1),[N,W]=e.useState(!1),u=e.useRef(),k=e.useRef(),l=e.useRef(),i=e.useRef(),s=e.useRef(),t=e.useRef(),v=e.useRef(),h=Q(u,!1,{threshold:.4}),j=Y(),g=E(0,C),b=E(0,C);e.useEffect(()=>{const{clientWidth:r,clientHeight:n}=u.current;t.current=new ee({canvas:k.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),t.current.setPixelRatio(2),t.current.setSize(r,n),t.current.outputColorSpace=te,t.current.toneMapping=re,l.current=new ne(36,r/n,.1,100),l.current.position.set(m.x,m.y,m.z),s.current=new se;const o=new oe;i.current=new ae,s.current.add(i.current);const c=new ie(t.current);c.compileCubemapShader();const p=new x(16777215,2.6),S=new x(16777215,1),z=new x(16777215,1.3);p.position.set(1,.1,2),S.position.set(-1,.1,8),z.position.set(-2,2,-3),v.current=[z,p,S],v.current.forEach(a=>s.current.add(a));const A=async()=>{const a=de.loadAsync(xe),F=o.loadAsync([me,ve,he,ge,be,we]),[w,I]=await Promise.all([a,F]);i.current.add(w.scene),w.scene.rotation.y=pe.degToRad(180),w.scene.position.y=-1.6;const{texture:X}=c.fromCubemap(I);s.current.environment=X,c.dispose(),await t.current.initTexture(s.current.environment),i.current.traverse(async R=>{R.material&&await t.current.initTexture(R.material)}),P(!0),d()};e.startTransition(()=>{A(),setTimeout(()=>{W(!0)},1e3)});const H=g.on("change",a=>{i.current.rotation.x=a,d()}),D=b.on("change",a=>{i.current.rotation.y=a,d()});return()=>{ce(v.current),ue(s.current),le(t.current),H(),D()}},[]);const d=e.useCallback(()=>{t.current.render(s.current,l.current)},[]);return e.useEffect(()=>{const r=fe(n=>{const{innerWidth:o,innerHeight:c}=window,p={x:(n.clientX-o/2)/o,y:(n.clientY-c/2)/c};g.set(p.y/2),b.set(p.x/2)},100);return h&&B(!0),h&&!j&&window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r)}},[h,j,g,b]),e.useEffect(()=>{const r=()=>{if(!u.current)return;const{clientWidth:n,clientHeight:o}=u.current;t.current.setSize(n,o),l.current.aspect=n/o,l.current.updateProjectionMatrix(),d()};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[d]),f.jsxs("div",{className:q(L.armor,M),ref:u,role:"img","aria-label":G,..._,children:[f.jsx(K,{unmount:!0,in:!y&&N,timeout:U(J.base.durationL),children:({visible:r})=>f.jsx(Z,{className:L.loader,"data-visible":r})}),f.jsx("canvas",{className:L.canvas,ref:k,"data-loaded":y&&V,style:$({delay:O(T)})})]})};export{Ge as Armor};
