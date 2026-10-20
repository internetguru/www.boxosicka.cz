(function(a){require("IGCMS",function(){var b={ns:"fragmentable"};a.IGCMS.Fragmentable=new function Fragmentable(){var/**
         * Triger changeFragment on document onclick
         */c=function(){document.addEventListener("click",d,!1)},/**
         * Change fragment according to heading id.
         * H1 will remove fragment.
         * @param  {Event} event
         */d=function(b){var c=IGCMS.findParentBySelector(b.target,"h1, h2, h3, h4, h5, h6");null===c||("h1"==c.nodeName.toLowerCase()?a.history.replaceState("","",a.location.href.split("#")[0]):a.history.replaceState("","","#"+c.id),a.dispatchEvent(new HashChangeEvent("hashchange")))};return{/**
         * @param  {Object} cfg custom configuration
         */init:function init(a){IGCMS.initCfg(b,a),c()}}}})})(window);
