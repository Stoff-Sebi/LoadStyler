!function(e){var o={};function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(r,n,function(o){return e[o]}.bind(null,n));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=1)}([function(e,o){e.exports=class{constructor(e){this.preloader=void 0,this.blender=void 0,this.ajaxloader=void 0,this.preCacheLoader=void 0,this.pageLeaveLinks=this._retrievePageLinks(e)}applyLoaderTransition(){try{this._applyPreLoader(),this._applyPreCashLoader()}catch(e){console.warn("LoaderTransition could not be applied.\nFollowing error was thrown inside the class: "),console.error(e);try{console.warn("The LoadStyler tries to suppress possible-added hardcoded/static html items now..."),$("#LoadStyler_Preloader").css("display","none"),$("#LoadStyler_PrecacheLoader").css("display","none"),console.warn("success!")}catch(e){console.warn("Hiding the html hardcoded LoadStyler-Elements failed!")}}}applyPageTransition(){try{this.applyLoaderTransition(),this._applyLoadTransitionBlender()}catch(e){console.warn("PageTransition could not be applied.\nFollowing error was thrown inside the class: "),console.error(e);try{console.warn("The LoadStyler tries to suppress possible-added hardcoded/static html items now..."),$("#LoadStyler_Blender").css("display","none"),$("#LoadStyler_Preloader").css("display","none"),$("#LoadStyler_PrecacheLoader").css("display","none"),console.warn("success!")}catch(e){console.warn("Hiding the html hardcoded LoadStyler-Elements failed!")}}}styleAjaxLoadsSimple(){let e=this;void 0===e.preloader&&e._selectPreloader(),$(document).ajaxStart(function(o){e.preloader.fadeIn()}),$(document).ajaxComplete(function(o,t,r){e.preloader.fadeOut()})}styleAjaxLoads(e){console.info("\n\n------ styleAjaxLoads()-----"),console.info("The given parameter is:"),console.info(e);let o=this;try{o._selectAjaxLoader(),e.forEach(function(e){return 0===e.target.length?console.log("There is no Element in your target selection: "+e.target):0===e.source.length?console.log("There is no Element in your source selection: "+e.source):(e.target.css({position:"relative"}),void e.source.click(function(){console.info("\n\nClick event test"),e.target.append(o.ajaxloader),o.ajaxloader.fadeIn()}))})}catch(e){return console.warn("Something went wrong inside styleAjaxLoads. Ajax Style will not be applied. The error is: "),void console.error(e)}$(document).ajaxComplete(function(){console.debug("LoadStyler: Ajax stop detected..."),o.ajaxloader.fadeOut()})}_applyPreLoader(){let e=this;this._selectPreloader(),$(window).on("load",function(){e.preloader.delay(350).fadeOut("slow"),$("body").delay(350).css({overflow:"visible"})})}_applyPreCashLoader(){let e=this;this._selectPrecacheLoader(),this.pageLeaveLinks.click(function(){e.preCacheLoader.fadeIn()})}_applyLoadTransitionBlender(){let e=this;this._selectBlender(),e.blender.show(),$(window).on("load",function(){e.blender.delay(350).fadeOut("slow"),$("body").delay(350).css({overflow:"visible"})}),e.pageLeaveLinks.click(function(o){o.preventDefault();let t=$(this).attr("href");return e.blender.fadeIn(300,function(){document.location.href=t}),!1})}_selectPreloader(){let e=this,o=$("#LoadStyler_Preloader");if(o.length>0)return e.preloader=o;{let o=$('<div id="LoadStyler_Preloader"></div>');return $("body").prepend(o),"auto"===o.css("z-index")&&"fixed"!==o.css("position")&&o.css({border:"16px solid #f3f3f3",borderRadius:"50%",borderTop:"16px solid #3498db",width:"120px",height:"120px","-webkit-animation":"spin 2s linear infinite",animation:"spin 2s linear infinite",position:"fixed",margin:"auto",top:0,right:0,bottom:0,left:0,zIndex:101}),e.preloader=o}}_selectBlender(){let e=this,o=$("#LoadStyler_Blender");return o.length>0?e.blender=o:(o=$('<div id="LoadStyler_Blender"></div>'),$("body").prepend(o),"auto"===o.css("z-index")&&"fixed"!==o.css("position")&&o.css({position:"fixed",zIndex:100,width:"100%",height:"100%",backgroundColor:"black",opacity:1,display:"none"}),e.blender=o)}_selectAjaxLoader(){let e=this,o=$("#LoadStyler_AjaxLoader");return o.length>0?e.ajaxloader=o:(o=$('<div id="LoadStyler_AjaxLoader"></div>'),$("body").prepend(o),"auto"===o.css("z-index")&&o.css({border:"8px solid #f3f3f3",borderRadius:"50%",borderTop:"8px solid #3498db",width:"60px",height:"60px","-webkit-animation":"spin 2s linear infinite",animation:"spin 2s linear infinite",position:"absolute",margin:"auto",top:"45%",left:"45%",zIndex:101,display:"none"}),e.ajaxloader=o)}_selectPrecacheLoader(){let e=this,o=$("#LoadStyler_PrecacheLoader");return o.length>0?e.preCacheLoader=o:(o=$('<div id="LoadStyler_PrecacheLoader"></div>'),$("body").prepend(o),"auto"===o.css("z-index")&&"fixed"!==o.css("position")&&o.css({border:"16px solid #f3f3f3",borderRadius:"50%",borderTop:"16px solid #3498db",width:"120px",height:"120px","-webkit-animation":"spin 2s linear infinite",animation:"spin 2s linear infinite",position:"fixed",margin:"auto",top:0,right:0,bottom:0,left:0,zIndex:101}),e.preCacheLoader=o)}_retrievePageLinks(e){if(void 0!==e)return e;try{return this._filterPageLeaveLinks()}catch(e){return console.warn(e.name+": There was an error at the custom filtering for pageLeave links, instead returning an empty array --\x3e will cause an error. No pagetransition on leave applied. Consider giving the specific links to the constructor."),[]}}_filterPageLeaveLinks(){let e=$("a").not($(".dropdown")).not($(".dropdown-toggle")).not(function(){return void 0===$(this).attr("href")||$(this).attr("href").length<2||-1!==$(this).attr("href").indexOf("#")});return this.pageLeaveLinks=e}}},function(e,o,t){"use strict";t.r(o);t(2);var r=t(0);(new(t.n(r).a)).applyPageTransition()},function(e,o){}]);