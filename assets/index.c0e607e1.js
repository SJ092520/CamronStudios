import{S as t}from"./vendor.192389c2.js";const l=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};l();t();t().reveal(".navbar",{mobile:!1,scale:.55});t().reveal(".navbar-brand",{mobile:!1,viewFactor:0,delay:100,distance:"75px",scale:.85,origin:"top",easing:"ease-in-out"});t().reveal(".nav-item",{mobile:!1,viewFactor:0,delay:100,distance:"75px",scale:.85,origin:"top",easing:"ease-in-out"});function c(n){let a=window.scrollY;var i=0;if(a%200!=i){i=a%200;var r=-60+a/(window.innerHeight>window.innerWidth?20:12),e=100-a/100;e=e<50?50:e,r=r>200?200:r,document.querySelector(".about-section").style.backdropFilter="hue-rotate("+r+"deg) brightness("+e+"%)",document.querySelector(".team-section").style.backdropFilter="hue-rotate("+r+"deg) brightness("+e+"%)",document.querySelector(".contact-section").style.backdropFilter="hue-rotate("+r+"deg) brightness("+e+"%)",document.querySelector(".about-section").style.webkitBackdropFilter="hue-rotate("+r+"deg) brightness("+e+"%)",document.querySelector(".team-section").style.webkitBackdropFilter="hue-rotate("+r+"deg) brightness("+e+"%)",document.querySelector(".contact-section").style.webkitBackdropFilter="hue-rotate("+r+"deg) brightness("+e+"%)"}a>=150&&!document.querySelector(".navbar").classList.contains(".scrolled")?document.querySelector(".navbar").classList.add("scrolled"):a<150&&document.querySelector(".navbar").classList.contains(".scrolled")&&document.querySelector(".navbar").classList.remove("scrolled")}document.addEventListener("scroll",c);t().reveal("#hero",{mobile:!1,scale:.85});setTimeout(()=>{scrollTo(0,0)},500);t({reset:!0}).reveal(".hero-heading",{scale:.85});t({reset:!0}).reveal(".hero-headline",{delay:100,distance:"50px",scale:.85,origin:"bottom",easing:"ease-in-out",viewFactor:.5});t({reset:!0}).reveal(".feature-icon",{delay:100,distance:"50px",scale:.85,origin:"left",easing:"ease-in-out",viewFactor:.5});t({reset:!0}).reveal(".data-content",{delay:150,distance:"30px",scale:.9,origin:"bottom",easing:"ease-in-out",viewFactor:.5});t({reset:!1}).reveal(".list-content",{delay:150,distance:"150px",scale:.9,origin:"right",easing:"ease-in-out",viewFactor:.5});t({reset:!0}).reveal(".subhead",{delay:150});t({reset:!0}).reveal(".image",{delay:150});t({reset:!0}).reveal(".rounded-circle",{delay:150});t({reset:!0}).reveal(".member-name",{delay:100,distance:"50px",scale:.9,origin:"bottom",easing:"ease-in-out",viewFactor:.5});
