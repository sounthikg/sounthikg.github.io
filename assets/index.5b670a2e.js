!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?o.credentials="include":"anonymous"===e.crossorigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();document.querySelector(".menu__icon").addEventListener("click",(function(){var e=document.querySelector(".menu__options"),o=e.style.display,t=document.querySelector(".menu"),r=document.querySelector(".ham-icon");"flex"!==o?(e.style.display="flex",e.style.height="100vh",t.style.backgroundColor="#474448",t.style.color="white",document.body.style.overflowY="hidden",r.style.background="#F4C3C2"):(e.style.display="none",e.style.height="",t.style.backgroundColor="rgba(0,0,0, 0.0)",document.body.style.overflowY="visible",r.style.background="#474448")}));
