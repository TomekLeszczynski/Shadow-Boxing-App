import{d as w,e as N,x as f,b as t,j as S,o,c as l,F as B,f as L,a as s,g as _,m as M,B as V,A as U,R as A,p as h,h as C,t as g,w as R,v as D,s as E,_ as F,K as P}from"./index-exg_pBLu.js";import{_ as T}from"./ProcessingLabel.vue_vue_type_script_setup_true_lang-CMewoVnT.js";import{u as j,r as d,a as q,m as v,e as z,s as K}from"./index-DZ5iST2V.js";const G=["for"],H=["onBlur","id","onUpdate:modelValue","type","placeholder","aria-placeholder"],I={class:"h-5","aria-live":"assertive"},J={key:0,class:"text-red-500"},O={class:"grid grid-cols-1 text-xl animate-text-show-up py-3 lg:py-6"},Q={class:"text-xl animate-text-show-up py-3 lg:py-6"},W=s("span",null,"Already a Member? ",-1),X=w({__name:"SignUpForm",setup(y){const u=N(),p=f(),i=t(!1),r={displayName:t(""),email:t(""),password:{password:t(""),confirm:t("")}},x=S(()=>({displayName:{required:d,alphaNum:q,minLength:v(2)},email:{required:d,email:z},password:{password:{required:d,minLength:v(8)},confirm:{required:d,sameAs:K(r.password.password)}}})),e=j(x,r),c=t([{title:"username",blur:()=>e.value.displayName.$touch(),id:"displayName",value:r.displayName,type:"text",placeholder:"Rocky Balboa",error:()=>e.value.displayName.$error,errorMessage:()=>e.value.displayName.$errors[0].$message},{title:"email",blur:()=>e.value.email.$touch(),id:"email",value:r.email,type:"email",placeholder:"rocky.balboa@mail.com",error:()=>e.value.email.$error,errorMessage:()=>e.value.email.$errors[0].$message},{title:"password",blur:()=>e.value.password.password.$touch(),id:"password",value:r.password.password,type:"password",placeholder:"********",error:()=>e.value.password.password.$error,errorMessage:()=>e.value.password.password.$errors[0].$message},{title:"repeat password",blur:()=>e.value.password.confirm.$touch(),id:"confirmPassword",value:r.password.confirm,type:"password",placeholder:"********",error:()=>e.value.password.confirm.$error,errorMessage:()=>e.value.password.confirm.$errors[0].$message}]),b=async()=>{if(!(e.value.$error||e.value.$invalid)){i.value=!0;try{await p.createUser(r.email.value,r.password.password.value,r.displayName.value),u.push({name:"done"})}catch(n){console.error("Unexpected error during registration:"+n)}finally{i.value=!1,c.value.forEach(n=>n.value=null)}}};return(n,m)=>(o(),l("form",{autocomplete:"on",onSubmit:m[0]||(m[0]=C(()=>{},["prevent"])),class:"gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"},[(o(!0),l(B,null,L(c.value,(a,$)=>(o(),l("div",{key:$,class:"md:col-span-5 animate-text-show-up"},[s("label",{class:"text-xl capitalize",for:a.id},g(a.title),9,G),R(s("input",{onBlur:a.blur,id:a.id,"onUpdate:modelValue":k=>a.value=k,type:a.type,placeholder:a.placeholder,"aria-placeholder":a.placeholder,class:"h-10 text-lg my-1 px-5 w-full bg-custom-white border-none placeholder:text-custom-grey text-custom-black"},null,40,H),[[D,a.value]]),s("div",I,[a.error()?(o(),l("span",J,g(a.errorMessage()),1)):E("",!0)])]))),128)),s("div",O,[s("div",Q,[W,_(U(A),{to:"/login",class:"hover:underline font-semibold cursor-pointer","aria-label":"Log in link"},{default:M(()=>[V(" Log in")]),_:1})]),s("button",{onClick:b,class:"bg-custom-orange-dark py-5 px-12 group tracking-wide animate-button-show-from-left",tabindex:"0","aria-label":"Sign in","aria-live":"polite",type:"submit"},[i.value?(o(),h(T,{key:0,processingLabel:"Sending"})):(o(),h(F,{key:1,labelText:"Sign in",class:"text-custom-black"}))])])],32))}}),Y={class:"flex flex-col p-4 items-center w-full"},Z=s("h1",{class:"animate-text-show-up text-7xl lg:text-[9rem] text-red-500 font-semibold tracking-tighter py-3 lg:mb-12 text-center","aria-label":"Create account heading"}," Create an Account ",-1),se=w({__name:"SignupView",setup(y){const u=f();return P(()=>{u.authError=""}),(p,i)=>(o(),l("div",Y,[Z,_(X)]))}});export{se as default};