(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector("#bill"),n=document.querySelectorAll(".grid button"),l=document.querySelector(".grid input"),u=document.querySelector("#tipNumbers"),e=document.querySelector("#reset");var t,o,c;i.addEventListener("input",function(){t=parseFloat(i.value),s()}),n.forEach(r=>{r.addEventListener("click",function(){n.forEach(a=>{(a.style.backgroundColor="hsl(172, 67%, 45%)")&&(a.style.backgroundColor="hsl(183, 100%, 15%)")}),this.style.backgroundColor="hsl(172, 67%, 45%)",c=parseFloat(this.value/100),l.value="",l.innerHTML="",s()})}),l.addEventListener("input",function(){n.forEach(r=>{(r.style.backgroundColor="hsl(172, 67%, 45%)")&&(r.style.backgroundColor="hsl(183, 100%, 15%)")}),c=parseFloat(l.value/100),s()}),u.addEventListener("input",function(){o=parseFloat(u.value),o==0?(document.querySelector("#tipAmount").innerHTML="",document.querySelector("#totalAmount").innerHTML="",document.getElementById("error").textContent="Can't be Zero"):(document.getElementById("error").textContent="",s())}),e.addEventListener("click",function(){document.querySelector("#tipAmount").innerHTML="",document.querySelector("#totalAmount").innerHTML="",i.value="",l.value="",u.value="",t=NaN,c=NaN,o=NaN,n.forEach(r=>{(r.style.backgroundColor="hsl(172, 67%, 45%)")&&(r.style.backgroundColor="hsl(183, 100%, 15%)")})});function s(){if(!isNaN(t)&&!isNaN(o)&&!isNaN(c)){var r=t*c/o,a=t/o+r;document.querySelector("#tipAmount").innerHTML=`$${r.toFixed(2)}`,document.querySelector("#totalAmount").innerHTML=`$${a.toFixed(2)}`}}});