!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),a=document.querySelector("body");e.addEventListener("click",(function(){t=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.59146477.js.map