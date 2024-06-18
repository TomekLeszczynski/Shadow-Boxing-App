import{_ as M,a as F,b as T,c as H,p as U,d as N,n as $}from"./nextCommandDelay-CUy3jAid.js";import{d as E,x as V,b,u as z,k as Y,j as v,y as q,z as K,o as s,p as I,m as i,c as u,t as _,s as a,A as c,a as d,B as S,g as w,C as L,D as R,E as J}from"./index-exg_pBLu.js";const O="/assets/jab-BjFCLubT.mp3",W="/assets/cross-DiOFbznY.mp3",X="/assets/lead%20hook-ZqHU2cCw.mp3",Z="/assets/rear%20hook-BkAKC3FN.mp3",G="/assets/lead%20uppercut-CvHmEMII.mp3",Q="/assets/rear%20uppercut-Diy7T5bX.mp3",ee={jab:O,cross:W,"lead hook":X,"rear hook":Z,"lead uppercut":G,"rear uppercut":Q},se=l=>{if(l){const g=ee[l];new Audio(g).play()}},ae="/assets/jab-B-bi_c-u.webp",te="/assets/cross-ChRUfHbA.webp",ne="/assets/lead%20hook-Becp39Am.webp",oe="/assets/rear%20hook-DdJaKpMR.webp",re="/assets/lead%20uppercut-DYxcSlt-.webp",ue="/assets/rear%20uppercut-B9dqvL2Y.webp",ce={jab:ae,cross:te,"lead hook":ne,"rear hook":oe,"lead uppercut":re,"rear uppercut":ue},le=l=>ce[l],ie={key:0,class:"text-4xl capitalize md:text-5xl","aria-label":"Current punch name"},de={key:0,class:"text-[36rem]","aria-label":"Punch number"},pe=["src"],he={key:0,class:"text-6xl md:text-[12rem] text-custom-white"},me={key:1,class:"text-8xl md:text-[12rem]"},ve=d("p",null,"Well",-1),_e=d("p",null,"done!",-1),ge=[ve,_e],ye={key:0,class:"row-start-9 row-span-1 text-center py-5 text-4xl","aria-live":"polite"},fe=E({__name:"BasicTrainingDisplay",setup(l){const g=V(),t=b(null),n=b("");let p;const y=b([]),e=z(),k=Y(),f=["jab","cross","lead hook","rear hook","lead uppercut","rear uppercut"],A=v(()=>y.value.length===e.punches),o=v(()=>e.status=="work"),C=v(()=>e.status=="paused"),x=v(()=>e.status=="done"),D=()=>{e.toggleStatus(),o.value?h():clearInterval(p)};q(()=>k.countdownFinished,r=>{r&&(U(),h())});const B=()=>{t.value=Math.floor(Math.random()*f.length),n.value=f[t.value],y.value.push(n.value),se(n.value)},h=()=>{if(e.status!="done")if(A.value){N(),e.status="done";return}else o.value?(B(),clearInterval(p),p=setInterval(h,$(1,e.intensity)*1e3)):(e.status="work",h())},P=()=>{clearInterval(p),t.value=null,n.value="",e.status=null},j=async()=>{const r=g.user;if(r&&e.status==="done")try{const m=L(R,"users",r.uid,"trainings");await J(m,{training:"basic",punches:e.punches,intensity:e.intensity,displayMode:e.displayMode,date:new Date})}catch(m){console.error("Saving Advanced Training Session Error:"+m)}};return K(()=>{P(),k.$reset()}),(r,m)=>(s(),I(M,null,{"additional-info":i(()=>[o.value?(s(),u("span",ie,_(n.value),1)):a("",!0)]),"main-info":i(()=>[c(e).displayMode==="digits"&&o.value?(s(),u("span",de,_(t.value!==null?t.value+1:""),1)):a("",!0),c(e).displayMode==="figures"&&o.value?(s(),u("img",{key:1,src:c(le)(n.value),alt:"Current punch icon",class:"object-contain h-full","aria-label":"Current punch icon"},null,8,pe)):a("",!0)]),"training-status-info":i(()=>[C.value?(s(),u("span",he,"Paused")):a("",!0),x.value?(s(),u("div",me,ge)):a("",!0)]),"session-data":i(()=>[o.value?(s(),u("div",ye,[d("div",null,[S(" Punch "),d("span",null,_(y.value.length),1),S(" of "),d("span",null,_(c(e).punches),1)])])):a("",!0)]),"buttons-section":i(()=>[w(F,{"on-click-handler":D,status:c(e).status},null,8,["status"]),w(T,{status:c(e).status},null,8,["status"]),x.value?(s(),I(H,{key:0,"save-session":j})):a("",!0)]),_:1}))}});export{fe as default};
