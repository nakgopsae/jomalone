parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TTQa":[function(require,module,exports) {
for(var e=document.querySelector(".visual"),t=document.querySelector(".header_outer"),o=document.querySelector(".header"),n=document.querySelector(".header .logo"),r=document.querySelectorAll("li.menu"),l=document.querySelector(".gnb"),i=0;i<r.length;i++)r[i].addEventListener("mouseout",function(){t.style.height="auto",t.style.backgroundColor="",n.style.color="#000",o.style.color="#000",t.style.transition="0.3s"}),r[i].addEventListener("mouseover",function(){t.style.height="180px",t.style.border="none",t.style.backgroundColor="#fcf9ee",n.style.color="#000",o.style.color="#000",t.style.transition="0.3s"});var c=document.querySelector(".gnb .search_btn"),s=document.querySelector(".search"),d=document.querySelector(".search span");c.addEventListener("click",function(){s.style.display="block"}),d.addEventListener("click",function(){s.style.display="none"});for(var u=new Swiper(".detail_swiper",{loop:!0,spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0}),a=new Swiper(".detail_swiper2",{loop:!0,freeMode:!0,watchSlidesProgress:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:u}}),y=new Swiper(".review_swiper",{loop:!0,freeMode:!0,spaceBetween:10,slidesPerView:5,watchSlidesProgress:!0,loopAdditionalSlides:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),v=document.querySelectorAll(".toggle"),p=document.querySelectorAll(".accordion_view"),m=document.querySelectorAll(".accordion ul li"),w=function(e){v[e].addEventListener("click",function(){p[e].classList.toggle("toggle_active"),m[e].classList.toggle("toggle_margin")})},g=0;g<v.length;g++)w(g);var S=new Swiper(".sns_swiper",{loop:!0,spaceBetween:15,slidesPerView:5,watchSlidesProgress:!0,autoplay:{delay:3e3,disableOnInteraction:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),b=document.querySelector(".item_price"),f=document.getElementById("goods_ml");console.log(f.value),f.addEventListener("change",function(){"30ml"===f.value?b.textContent="₩ 110,000":"50ml"==f.value?b.textContent="₩170,000":"100ml"==f.value?b.textContent="₩ 218,000":""==f.value&&(b.textContent="₩ 옵션을 선택해주세요")});var h=document.querySelector(".img_box img "),q=document.getElementById("file"),E=document.querySelector(".review_top .write"),_=document.querySelector(".review_pop_up"),L=document.querySelector(".out_btn");L.addEventListener("click",function(){_.style.display="none",document.body.style.overflow="visible"}),E.addEventListener("click",function(){_.style.display="block",document.body.style.overflow="hidden"}),q.addEventListener("change",function(){var e=new FileReader;e.onload=function(e){var t=e.target;h.src=t.result},e.readAsDataURL(q.files[0])});var x=document.querySelector(".review_bottom"),k=document.querySelector(".review_submit");k.addEventListener("click",function(){x.appendChild()});
},{}]},{},["TTQa"], null)
//# sourceMappingURL=detail.b300d7ca.js.map