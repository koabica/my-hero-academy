/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
(function($){$.fn.visible=function(partial){var $t=$(this),$w=$(window),viewTop=$w.scrollTop(),viewBottom=viewTop+$w.height(),_top=$t.offset().top,_bottom=_top+$t.height(),compareTop=partial===true?_bottom:_top,compareBottom=partial===true?_top:_bottom;return((compareBottom<=viewBottom)&&(compareTop>=viewTop));};})(jQuery);var ssbPlugin=ssbPlugin||{};(function($,window,document){'use strict';function absint($int){return parseInt($int,10);}
var ssbPostData={};ssbPlugin.fetchFacebookShares=function(){$.when($.get('https://graph.facebook.com/?fields=og_object{likes.summary(true).limit(0)},share&id='+ssb_post_url),$.get('https://graph.facebook.com/?fields=og_object{likes.summary(true).limit(0)},share&id='+ssb_alternate_post_url)).then(function(a,b){if('undefined'!==typeof a[0].share){var f1=absint(a[0].share.share_count);var f2=absint(a[0].share.comment_count);if('undefined'!==typeof a[0].og_object){var f3=absint(a[0].og_object.likes.summary.total_count);}else{var f3=0;}
var fShares=f1+f2+f3;if(ssb_alternate_post_url){if(typeof b[0].share!=='undefined'){var f4=absint(b[0].share.share_count);var f5=absint(b[0].share.comment_count);}else{var f4=0,f5=0;}
if(typeof b[0].og_object!=='undefined'){var f6=absint(b[0].og_object.likes.summary.total_count);}else{var f6=0}
var fShares2=f4+f5+f6;if(fShares!==fShares2){fShares=fShares+fShares2;}}
ssbPostData={action:'ssb_facebook_shares_update',post_id:ssb_post_id,share_counts:fShares};$.post(ssb_admin_ajax,ssbPostData);}});}
$(function(){if($('div[class*="simplesocialbuttons-float"]').length>0){$('body').addClass('body_has_simplesocialbuttons');}});$(window).load(function(){var allMods=$(".simplesocialbuttons_inline");allMods.each(function(i,el){var el=$(el);if(el.visible(true)){el.addClass('simplesocialbuttons-inline-in');}});$(window).scroll(function(event){allMods.each(function(i,el){var el=$(el);if(el.visible(true)){el.addClass('simplesocialbuttons-inline-in');}});});var sidebarwidth=$('div[class*="simplesocialbuttons-float"]>a:first-child').outerWidth(true);$('div[class*="simplesocialbuttons-float"]').css('width',sidebarwidth+'px');});}(window.jQuery,window,document));
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','UA-134941509-13');
window.OneSignal=window.OneSignal||[];OneSignal.push(function(){OneSignal.SERVICE_WORKER_UPDATER_PATH="OneSignalSDKUpdaterWorker.js.php";OneSignal.SERVICE_WORKER_PATH="OneSignalSDKWorker.js.php";OneSignal.SERVICE_WORKER_PARAM={scope:'/'};OneSignal.setDefaultNotificationUrl("http://OFFLINEZIP.wpsho");var oneSignal_options={};window._oneSignalInitOptions=oneSignal_options;oneSignal_options['wordpress']=true;oneSignal_options['appId']='d875b0a1-21b4-45ca-bb46-2c8d19d0f0cd';oneSignal_options['welcomeNotification']={};oneSignal_options['welcomeNotification']['title']="";oneSignal_options['welcomeNotification']['message']="";oneSignal_options['path']="http://OFFLINEZIP.wpshowp-content/plugins/onesignal-free-web-push-notifications/sdk_files/";oneSignal_options['persistNotification']=true;oneSignal_options['promptOptions']={};oneSignal_options['promptOptions']['actionMessage']='Hello, Get New Chapters When Released';oneSignal_options['notifyButton']={};oneSignal_options['notifyButton']['enable']=true;oneSignal_options['notifyButton']['position']='bottom-right';oneSignal_options['notifyButton']['theme']='default';oneSignal_options['notifyButton']['size']='medium';oneSignal_options['notifyButton']['showCredit']=true;oneSignal_options['notifyButton']['text']={};OneSignal.init(window._oneSignalInitOptions);});function documentInitOneSignal(){var oneSignal_elements=document.getElementsByClassName("OneSignal-prompt");var oneSignalLinkClickHandler=function(event){OneSignal.push(['registerForPushNotifications']);event.preventDefault();};for(var i=0;i<oneSignal_elements.length;i++)
oneSignal_elements[i].addEventListener('click',oneSignalLinkClickHandler,false);}
if(document.readyState==='complete'){documentInitOneSignal();}
else{window.addEventListener("load",function(event){documentInitOneSignal();});};
var flra_array={"MainContentW":"1140","LeftBannerW":"160","RightBannerW":"160","TopAdjust":"450","TopAdjustScroll":"50"};;
jQuery(document).ready(function(){var alt_down=false;jQuery(document).keyup(function(e){if(document.querySelector('#comment:focus,#author:focus,#email:focus,#url:focus,#mcspvalue:focus'))return;if(e.which==18){alt_down=false;}});jQuery(document).keydown(function(e){var url=false;if(document.querySelector('#comment:focus,#author:focus,#email:focus,#url:focus,#mcspvalue:focus')||alt_down)return;if(e.which==37){url=jQuery('a.comic-nav-previous').attr('href');}else if(e.which==39){url=jQuery('a.comic-nav-next').attr('href');}else if(e.which==18){alt_down=true;}
if(url){window.location=url;}});});
var countVars={"disqusShortname":"my-hero-academy"};
var disqus_shortname=countVars.disqusShortname;(function(){var nodes=document.getElementsByTagName('span');for(var i=0,url;i<nodes.length;i++){if(nodes[i].className.indexOf('dsq-postid')!=-1&&nodes[i].parentNode.tagName=='A'){nodes[i].parentNode.setAttribute('data-disqus-identifier',nodes[i].getAttribute('data-dsqidentifier'));url=nodes[i].parentNode.href.split('#',1);if(url.length==1){url=url[0];}
else{url=url[1];}
nodes[i].parentNode.href=url+'#disqus_thread';}}
var s=document.createElement('script');s.async=true;s.type='text/javascript';s.src='https://'+disqus_shortname+'.disqus.com/count.js';(document.getElementsByTagName('HEAD')[0]||document.getElementsByTagName('BODY')[0]).appendChild(s);}());
var embedVars={"disqusConfig":{"integration":"wordpress 3.0.17"},"disqusIdentifier":"1856 https:\/\/my-hero-academy.com\/?post_type=comic&p=1856","disqusShortname":"my-hero-academy","disqusTitle":"My Hero Academia, Chapter 120","disqusUrl":"http:\/\/OFFLINEZIP.wpshomanga\/my-hero-academia-chapter-120\/","postId":"1856"};
var disqus_url=embedVars.disqusUrl;var disqus_identifier=embedVars.disqusIdentifier;var disqus_container_id='disqus_thread';var disqus_shortname=embedVars.disqusShortname;var disqus_title=embedVars.disqusTitle;var disqus_config_custom=window.disqus_config;var disqus_config=function(){var dsqConfig=embedVars.disqusConfig;this.page.integration=dsqConfig.integration;this.page.remote_auth_s3=dsqConfig.remote_auth_s3;this.page.api_key=dsqConfig.api_key;this.sso=dsqConfig.sso;this.language=dsqConfig.language;if(disqus_config_custom)
disqus_config_custom.call(this);};(function(){var dsq=document.createElement('script');dsq.type='text/javascript';dsq.async=true;dsq.src='https://'+disqus_shortname+'.disqus.com/embed.js';(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(dsq);})();
/*! responsive-nav.js 1.0.38
 * https://github.com/viljamis/responsive-nav.js
 * http://responsive-nav.com
 *
 * Copyright (c) 2015 @viljamis
 * Available under the MIT license
 */
(function(document,window,index){"use strict";var responsiveNav=function(el,options){var computed=!!window.getComputedStyle;if(!computed){window.getComputedStyle=function(el){this.el=el;this.getPropertyValue=function(prop){var re=/(\-([a-z]){1})/g;if(prop==="float"){prop="styleFloat";}
if(re.test(prop)){prop=prop.replace(re,function(){return arguments[2].toUpperCase();});}
return el.currentStyle[prop]?el.currentStyle[prop]:null;};return this;};}
var addEvent=function(el,evt,fn,bubble){if("addEventListener"in el){try{el.addEventListener(evt,fn,bubble);}catch(e){if(typeof fn==="object"&&fn.handleEvent){el.addEventListener(evt,function(e){fn.handleEvent.call(fn,e);},bubble);}else{throw e;}}}else if("attachEvent"in el){if(typeof fn==="object"&&fn.handleEvent){el.attachEvent("on"+evt,function(){fn.handleEvent.call(fn);});}else{el.attachEvent("on"+evt,fn);}}},removeEvent=function(el,evt,fn,bubble){if("removeEventListener"in el){try{el.removeEventListener(evt,fn,bubble);}catch(e){if(typeof fn==="object"&&fn.handleEvent){el.removeEventListener(evt,function(e){fn.handleEvent.call(fn,e);},bubble);}else{throw e;}}}else if("detachEvent"in el){if(typeof fn==="object"&&fn.handleEvent){el.detachEvent("on"+evt,function(){fn.handleEvent.call(fn);});}else{el.detachEvent("on"+evt,fn);}}},getChildren=function(e){if(e.children.length<1){throw new Error("The Nav container has no containing elements");}
var children=[];for(var i=0;i<e.children.length;i++){if(e.children[i].nodeType===1){children.push(e.children[i]);}}
return children;},setAttributes=function(el,attrs){for(var key in attrs){el.setAttribute(key,attrs[key]);}},addClass=function(el,cls){if(el.className.indexOf(cls)!==0){el.className+=" "+cls;el.className=el.className.replace(/(^\s*)|(\s*$)/g,"");}},removeClass=function(el,cls){var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");el.className=el.className.replace(reg," ").replace(/(^\s*)|(\s*$)/g,"");},forEach=function(array,callback,scope){for(var i=0;i<array.length;i++){callback.call(scope,i,array[i]);}};var nav,opts,navToggle,styleElement=document.createElement("style"),htmlEl=document.documentElement,hasAnimFinished,isMobile,navOpen;var ResponsiveNav=function(el,options){var i;this.options={animate:true,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:false,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(i in options){this.options[i]=options[i];}
addClass(htmlEl,this.options.jsClass);this.wrapperEl=el.replace("#","");if(document.getElementById(this.wrapperEl)){this.wrapper=document.getElementById(this.wrapperEl);}else if(document.querySelector(this.wrapperEl)){this.wrapper=document.querySelector(this.wrapperEl);}else{throw new Error("The nav element you are trying to select doesn't exist");}
this.wrapper.inner=getChildren(this.wrapper);opts=this.options;nav=this.wrapper;this._init(this);};ResponsiveNav.prototype={destroy:function(){this._removeStyles();removeClass(nav,"closed");removeClass(nav,"opened");removeClass(nav,opts.navClass);removeClass(nav,opts.navClass+"-"+this.index);removeClass(htmlEl,opts.navActiveClass);nav.removeAttribute("style");nav.removeAttribute("aria-hidden");removeEvent(window,"resize",this,false);removeEvent(window,"focus",this,false);removeEvent(document.body,"touchmove",this,false);removeEvent(navToggle,"touchstart",this,false);removeEvent(navToggle,"touchend",this,false);removeEvent(navToggle,"mouseup",this,false);removeEvent(navToggle,"keyup",this,false);removeEvent(navToggle,"click",this,false);if(!opts.customToggle){navToggle.parentNode.removeChild(navToggle);}else{navToggle.removeAttribute("aria-hidden");}},toggle:function(){if(hasAnimFinished===true){if(!navOpen){this.open();}else{this.close();}}},open:function(){if(!navOpen){removeClass(nav,"closed");addClass(nav,"opened");addClass(htmlEl,opts.navActiveClass);addClass(navToggle,"active");nav.style.position=opts.openPos;setAttributes(nav,{"aria-hidden":"false"});navOpen=true;opts.open();}},close:function(){if(navOpen){addClass(nav,"closed");removeClass(nav,"opened");removeClass(htmlEl,opts.navActiveClass);removeClass(navToggle,"active");setAttributes(nav,{"aria-hidden":"true"});if(opts.animate){hasAnimFinished=false;setTimeout(function(){nav.style.position="absolute";hasAnimFinished=true;},opts.transition+10);}else{nav.style.position="absolute";}
navOpen=false;opts.close();}},resize:function(){if(window.getComputedStyle(navToggle,null).getPropertyValue("display")!=="none"){isMobile=true;setAttributes(navToggle,{"aria-hidden":"false"});if(nav.className.match(/(^|\s)closed(\s|$)/)){setAttributes(nav,{"aria-hidden":"true"});nav.style.position="absolute";}
this._createStyles();this._calcHeight();}else{isMobile=false;setAttributes(navToggle,{"aria-hidden":"true"});setAttributes(nav,{"aria-hidden":"false"});nav.style.position=opts.openPos;this._removeStyles();}},handleEvent:function(e){var evt=e||window.event;switch(evt.type){case"touchstart":this._onTouchStart(evt);break;case"touchmove":this._onTouchMove(evt);break;case"touchend":case"mouseup":this._onTouchEnd(evt);break;case"click":this._preventDefault(evt);break;case"keyup":this._onKeyUp(evt);break;case"focus":case"resize":this.resize(evt);break;}},_init:function(){this.index=index++;addClass(nav,opts.navClass);addClass(nav,opts.navClass+"-"+this.index);addClass(nav,"closed");hasAnimFinished=true;navOpen=false;this._closeOnNavClick();this._createToggle();this._transitions();this.resize();var self=this;setTimeout(function(){self.resize();},20);addEvent(window,"resize",this,false);addEvent(window,"focus",this,false);addEvent(document.body,"touchmove",this,false);addEvent(navToggle,"touchstart",this,false);addEvent(navToggle,"touchend",this,false);addEvent(navToggle,"mouseup",this,false);addEvent(navToggle,"keyup",this,false);addEvent(navToggle,"click",this,false);opts.init();},_createStyles:function(){if(!styleElement.parentNode){styleElement.type="text/css";document.getElementsByTagName("head")[0].appendChild(styleElement);}},_removeStyles:function(){if(styleElement.parentNode){styleElement.parentNode.removeChild(styleElement);}},_createToggle:function(){if(!opts.customToggle){var toggle=document.createElement("a");toggle.innerHTML=opts.label;setAttributes(toggle,{"href":"#","class":"nav-toggle"});if(opts.insert==="after"){nav.parentNode.insertBefore(toggle,nav.nextSibling);}else{nav.parentNode.insertBefore(toggle,nav);}
navToggle=toggle;}else{var toggleEl=opts.customToggle.replace("#","");if(document.getElementById(toggleEl)){navToggle=document.getElementById(toggleEl);}else if(document.querySelector(toggleEl)){navToggle=document.querySelector(toggleEl);}else{throw new Error("The custom nav toggle you are trying to select doesn't exist");}}},_closeOnNavClick:function(){if(opts.closeOnNavClick){var links=nav.getElementsByTagName("a"),self=this;forEach(links,function(i,el){addEvent(links[i],"click",function(){if(isMobile){self.toggle();}},false);});}},_preventDefault:function(e){if(e.preventDefault){if(e.stopImmediatePropagation){e.stopImmediatePropagation();}
e.preventDefault();e.stopPropagation();return false;}else{e.returnValue=false;}},_onTouchStart:function(e){if(!Event.prototype.stopImmediatePropagation){this._preventDefault(e);}
this.startX=e.touches[0].clientX;this.startY=e.touches[0].clientY;this.touchHasMoved=false;removeEvent(navToggle,"mouseup",this,false);},_onTouchMove:function(e){if(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10){this.touchHasMoved=true;}},_onTouchEnd:function(e){this._preventDefault(e);if(!isMobile){return;}
if(!this.touchHasMoved){if(e.type==="touchend"){this.toggle();return;}else{var evt=e||window.event;if(!(evt.which===3||evt.button===2)){this.toggle();}}}},_onKeyUp:function(e){var evt=e||window.event;if(evt.keyCode===13){this.toggle();}},_transitions:function(){if(opts.animate){var objStyle=nav.style,transition="max-height "+opts.transition+"ms";objStyle.WebkitTransition=objStyle.MozTransition=objStyle.OTransition=objStyle.transition=transition;}},_calcHeight:function(){var savedHeight=0;for(var i=0;i<nav.inner.length;i++){savedHeight+=nav.inner[i].offsetHeight;}
var innerStyles="."+opts.jsClass+" ."+opts.navClass+"-"+this.index+".opened{max-height:"+savedHeight+"px !important} ."+opts.jsClass+" ."+opts.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";if(styleElement.styleSheet){styleElement.styleSheet.cssText=innerStyles;}else{styleElement.innerHTML=innerStyles;}
innerStyles="";}};return new ResponsiveNav(el,options);};window.responsiveNav=responsiveNav;}(document,window,0));
if(document.getElementById("menu-primary")){var buttonMain=document.getElementById('nav-toggle');var navMain=responsiveNav(".main-navigation",{transition:350,customToggle:"#nav-toggle",init:function(){buttonMain.setAttribute('aria-expanded','false');buttonMain.setAttribute('aria-pressed','false');buttonMain.setAttribute('aria-controls','menu-primary');},open:function(){buttonMain.setAttribute('aria-expanded','true');buttonMain.setAttribute('aria-pressed','true');},close:function(){buttonMain.setAttribute('aria-expanded','false');buttonMain.setAttribute('aria-pressed','false');},});}
if(document.getElementById("menu-top")){var buttonTop=document.getElementById('top-nav-toggle');var navTop=responsiveNav(".top-navigation",{transition:350,customToggle:"#top-nav-toggle",init:function(){buttonTop.setAttribute('aria-expanded','false');buttonTop.setAttribute('aria-pressed','false');buttonTop.setAttribute('aria-controls','menu-top');},open:function(){buttonTop.setAttribute('aria-expanded','true');buttonTop.setAttribute('aria-pressed','true');},close:function(){buttonTop.setAttribute('aria-expanded','false');buttonTop.setAttribute('aria-pressed','false');},});}
if(document.getElementById("menu-social")){var buttonSocial=document.getElementById('social-nav-toggle');var navSocial=responsiveNav(".social-navigation",{transition:350,customToggle:"#social-nav-toggle",init:function(){buttonSocial.setAttribute('aria-expanded','false');buttonSocial.setAttribute('aria-pressed','false');buttonSocial.setAttribute('aria-controls','menu-social');},open:function(){buttonSocial.setAttribute('aria-expanded','true');buttonSocial.setAttribute('aria-pressed','true');},close:function(){buttonSocial.setAttribute('aria-expanded','false');buttonSocial.setAttribute('aria-pressed','false');},});};
(function(){var container,containerTop,menu,menuTop,links,linksTop;container=document.getElementById('menu-primary');containerTop=document.getElementById('menu-top');if(container){menu=container.getElementsByTagName('ul')[0];links=menu.getElementsByTagName('a');for(var i=0,len=links.length;i<len;i++){links[i].onfocus=toggleFocus;links[i].onblur=toggleFocus;}}
if(containerTop){menuTop=containerTop.getElementsByTagName('ul')[0];linksTop=menuTop.getElementsByTagName('a');for(var i=0,len=linksTop.length;i<len;i++){linksTop[i].onfocus=toggleFocus;linksTop[i].onblur=toggleFocus;}}
function toggleFocus(){var current=this,ancestors=[];while(-1===current.className.indexOf('menu-items')){if('li'===current.tagName.toLowerCase()){ancestors.unshift(current);}
current=current.parentElement;}
for(i=0,len=ancestors.length;i<len;i++){if(-1!==ancestors[i].className.indexOf('focus'))
ancestors[i].className=ancestors[i].className.replace(' focus','');else
ancestors[i].className+=' focus';}}
function fixMenuTouchTaps(container){var touchStartFn,parentLink=container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');if('ontouchstart'in window){touchStartFn=function(e){var menuItem=this.parentNode;if(!menuItem.classList.contains('focus')){e.preventDefault();for(var i=0;i<menuItem.parentNode.children.length;++i){if(menuItem===menuItem.parentNode.children[i]){continue;}
menuItem.parentNode.children[i].classList.remove('focus');}
menuItem.classList.add('focus');}else{menuItem.classList.remove('focus');}};for(var i=0;i<parentLink.length;++i){parentLink[i].addEventListener('touchstart',touchStartFn,false)}}}
if(container){fixMenuTouchTaps(container);}})();(function(){var is_webkit=navigator.userAgent.toLowerCase().indexOf('webkit')>-1,is_opera=navigator.userAgent.toLowerCase().indexOf('opera')>-1,is_ie=navigator.userAgent.toLowerCase().indexOf('msie')>-1;if((is_webkit||is_opera||is_ie)&&document.getElementById&&window.addEventListener){window.addEventListener('hashchange',function(){var element=document.getElementById(location.hash.substring(1));if(element){if(!/^(?:a|select|input|button|textarea)$/i.test(element.tagName))
element.tabIndex=-1;element.focus();}},false);}})();
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://static1.twitcount.com/js/twitcount.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitcount_plugins');
var MainContentW=parseInt(flra_array.MainContentW);var LeftAdjust=parseInt(flra_array.LeftAdjust);var TopAdjust=parseInt(flra_array.TopAdjust);var RightAdjust=parseInt(flra_array.RightAdjust);var LeftBannerW=parseInt(flra_array.LeftBannerW);var TopAdjustScroll=parseInt(flra_array.TopAdjustScroll);var leftDivID='floatLadsbyvli';var rightDivID='floatRadsbyvli';var objAdDivRight=document.getElementById(rightDivID);var objAdDivLeft=document.getElementById(leftDivID);var body=document.querySelector("body");var html=document.querySelector("html");function FloatTopDiv()
{startLX=((document.body.clientWidth-MainContentW)/2)-(LeftBannerW+LeftAdjust),startLY=TopAdjust;startRX=((document.body.clientWidth-MainContentW)/2)+(MainContentW+RightAdjust),startRY=TopAdjust;var d=document;var scrollTopDevvn=window.pageYOffset||d.documentElement.scrollTop||d.body.scrollTop||0;function set_position(divID,xP,yP){divID.style.left=xP+'px';divID.style.top=yP+'px';}
if(scrollTopDevvn>=Math.abs(TopAdjust-TopAdjustScroll)){startLY=TopAdjustScroll;startRY=TopAdjustScroll;objAdDivLeft.style.position='fixed';objAdDivRight.style.position='fixed';}else{startLY=TopAdjust;startRY=TopAdjust;objAdDivLeft.style.position='absolute';objAdDivRight.style.position='absolute';};set_position(objAdDivLeft,startLX,startLY);set_position(objAdDivRight,startRX,startRY);}
function ShowAdDiv()
{objAdDivRight.style.display="block";objAdDivLeft.style.display="block";body.style.overflowX="hidden";html.style.overflowX="hidden";FloatTopDiv();}
ShowAdDiv();window.addEventListener('resize',function(){FloatTopDiv();});window.addEventListener('scroll',function(){FloatTopDiv();});