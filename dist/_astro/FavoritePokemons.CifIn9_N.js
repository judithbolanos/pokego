import{d as x,c as v,e as l,g as d,t as f,s as o,i as h,f as $,h as b,r as k,S as C,F}from"./web.CYTvRb9w.js";var y=f('<div class="flex flex-col justify-center items-center"><a class="pt-3 pb-1"><img width=96 height=96><p class="capitalize text-center text-lg"></p></a><button class=" text-center gap-2 text-red-400 flex items-center justify-center p-3"><svg fill=currentColor width=20 height=20 xmlns=http://www.w3.org/2000/svg viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg> Borrar');const I=({pokemon:e})=>{const[c,a]=v(!0),i=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`,u=()=>{const s=JSON.parse(localStorage.getItem("favorites")??"[]").filter(r=>r.id!==e.id);localStorage.setItem("favorites",JSON.stringify(s)),a(!1)};return l(C,{get when(){return c()},get children(){var n=d(y),s=n.firstChild,r=s.firstChild,p=r.nextSibling,S=s.nextSibling;return o(r,"src",i),h(p,()=>e.name),S.$$click=u,$(t=>{var g=`/pokemons/${e.name}`,m=e.name,w=`view-transition-name:${e.name}-image`;return g!==t.e&&o(s,"href",t.e=g),m!==t.t&&o(r,"alt",t.t=m),t.a=b(r,w,t.a),t},{e:void 0,t:void 0,a:void 0}),k(),n}})};x(["click"]);var L=f('<div class=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-4 mb-5">');const P=()=>JSON.parse(localStorage.getItem("favorites")??"[]"),E=()=>{const[e,c]=v(P());return(()=>{var a=d(L);return h(a,l(F,{get each(){return e()},children:i=>l(I,{pokemon:i})})),a})()};export{E as FavoritePokemons};
