if (self.CavalryLogger) { CavalryLogger.start_js(["zynSO"]); }

__d("XGamesNavigationSliderAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/async/navigationslider/",{id:{type:"String",required:!0},referral_objects:{type:"StringVector",defaultValue:[]},num_items_per_page:{type:"Int",required:!0},num_rows:{type:"Int",defaultValue:1},width:{type:"Int",required:!0},height:{type:"Int",required:!0},days_since:{type:"Int"},row_type:{type:"Enum",enumType:1},upsell_type:{type:"Enum",enumType:1}})}),null);
__d("CanvasNavigationSlider",["AsyncRequest","DataStore","Event","XGamesNavigationSliderAsyncController"],(function(a,b,c,d,e,f){__p&&__p();var g="GamesNavigationSlider";h.init=function(a,b){"use strict";return new h(a,b)};function h(a,c){"use strict";__p&&__p();this.$1=c.autoscroll;this.$2=a;this.$3=c.referral_objects;this.$4=a.getNode().id;this.$5=c.height;this.$6=c.width;this.$7=c.days_since;this.$8=c.num_items_per_page;this.$9=c.num_rows;this.$10=!1;this.$11=c.row_type;this.$12=c.upsell_type;b("DataStore").set(g,this.$4,this);(a.getIndex()>0||this.$1)&&this.$13();var d=b("Event").listen(a.getNextArrow(),"click",function(){d.remove(),this.$13()}.bind(this).bind(this))}h.prototype.$13=function(){"use strict";if(this.$10)return;this.$10=!0;var a=b("XGamesNavigationSliderAsyncController").getURIBuilder().setString("id",this.$4).setInt("num_items_per_page",this.$8).setInt("num_rows",this.$9).setInt("width",this.$6).setInt("height",this.$5);this.$11&&(a=a.setEnum("row_type",this.$11));this.$12&&(a=a.setEnum("upsell_type",this.$12));this.$7&&(a=a.setInt("days_since",this.$7));new(b("AsyncRequest"))(a.getURI()).setData({referral_objects:this.$3}).send()};h.prototype.$14=function(a){"use strict";a.forEach(function(a){this.$2.push(a)}.bind(this))};h.update=function(a,c){"use strict";a=b("DataStore").get(g,a);a.$14(c)};e.exports=h}),null);
__d("ConditionClassOnVisible",["IntersectionObserver","Run"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(a,b,c,d){d===void 0&&(d=!0);b=a[0];a=d?b.intersectionRatio>0:!(b.intersectionRatio>0);b.target.classList.toggle(c,a)};a={track:function(a,c,d){var e=new(b("IntersectionObserver"))(function(b,a){g(b,a,c,d)},{});e.observe(a);b("Run").onLeave(function(){e.disconnect()})}};e.exports=a}),null);
__d("XGamesReplaceableXOutAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/async/xout/replace/",{unit_type:{type:"String"},fbs:{type:"Int"},app_id:{type:"Int"},extra_data:{type:"String"},query_type:{type:"String"},query_params:{type:"String"},excluded_app_ids:{type:"StringVector",defaultValue:[]},attributes:{type:"String"}})}),null);
__d("GamesReplaceableXOutHelper",["invariant","Parent","XGamesReplaceableXOutAsyncController"],(function(a,b,c,d,e,f,g){__p&&__p();var h="data-games-xout-container",i=0,j={},k={};function l(a){a=b("Parent").byAttribute(a,h);if(a){var c=parseInt(a.getAttribute(h),10);c===0&&(i+=1,c=i.toString(),a.setAttribute(h,c));return c}}function m(a){a=l(a);a||g(0);return a}function n(a){a=j[m(a)];return a?Object.keys(a):[]}function a(a,b){return o(a,[b])}function o(a,b){a=l(a);if(a){a=j[a]=j[a]||{};for(var c=0;c<b.length;c+=1)a[b[c]]=!0}}function c(a){a=m(a);a&&(delete j[a],delete k[a])}function d(a,c){return b("XGamesReplaceableXOutAsyncController").getURIBuilder().setInt("app_id",c.appID).setString("extra_data",c.extraData).setString("attributes",c.attributes).setString("query_type",a.getAttribute("data-games-xout-query-type")).setString("query_params",a.getAttribute("data-games-xout-query-params")).setString("unit_type",c.unitType).setInt("fbs",a.getAttribute("data-games-xout-fbs")).setStringVector("excluded_app_ids",n(a)).getURI()}function f(a,b){a=l(a);if(!a)return;a=k[a]=k[a]||[];a.length===0&&b();a.push(b)}function p(a){a=m(a);a=k[a];a&&(a.shift(),a.length>0&&a[0]())}a={getBoundAppIDs:n,registerAppID:a,registerAppIDs:o,deleteContainer:c,queueRequest:f,processQueuedRequests:p,createURI:d};e.exports=a}),null);
__d("GamesReplaceableXOutListener",["csx","cx","AsyncRequest","CSS","DOM","Event","GamesReplaceableXOutHelper","Parent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i={};function j(a,c,d){d=d.payload;if(!d)return;b("GamesReplaceableXOutHelper").registerAppID(a,d.app_id);b("GamesReplaceableXOutHelper").processQueuedRequests(c);i[d.app_id]=d.item_data;b("DOM").replace(c,d.el)}function k(a){return b("Event").listen(a,"click",function(c){c=c.target;if(!b("CSS").matchesSelector(c,"._1m6e"))return;var d=b("Parent").bySelector(c,"._2b2u"),e=c.getAttribute("data-appid"),f=i[e];b("CSS").addClass(d,"_4ksu");b("GamesReplaceableXOutHelper").queueRequest(d,function(){new(b("AsyncRequest"))(b("GamesReplaceableXOutHelper").createURI(a,f)).setHandler(function(b){return j(a,d,b)}).setMethod("POST").send(),delete i[e]})})}a={registerContainerItems:function(a,c,d){b("GamesReplaceableXOutHelper").registerAppIDs(a,c),d.forEach(function(c){var d=c.appID;i[d]=c;b("GamesReplaceableXOutHelper").registerAppID(a,d)}),k(a,c)}};e.exports=a}),null);
__d("GamesXOut.react",["cx","React","ShimButton.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){return b("React").createElement("div",{className:b("joinClasses")("_2b2u",this.props.className)},this.props.children,b("React").createElement(b("ShimButton.react"),{className:"_1m6e",onClick:this.props.onClick}))};function a(){h.apply(this,arguments)}a.propTypes={onClick:c.func.isRequired};e.exports=a}),null);
__d("XGamesHideableXOutAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/async/xout/hide/",{unit_type:{type:"String"},fbs:{type:"Int"},app_id:{type:"Int"},extra_data:{type:"String"}})}),null);
__d("GamesUninstallXOut.react",["cx","AsyncRequest","CSS","Dialog","DOMContainer.react","GamesXOut.react","React","ReactDOM","URI","XGamesHideableXOutAsyncController"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={pending:!1},this.$1=function(){var a=b("XGamesHideableXOutAsyncController").getURIBuilder().setInt("app_id",this.props.appID).setString("extra_data",this.props.extraData).setString("unit_type",this.props.unitType).setInt("fbs",this.props.fbs).getURI();this.$2=new(b("AsyncRequest"))(a).setMethod("POST");this.$2.send()}.bind(this),this.$3=function(){var a=new(b("URI"))("/ajax/settings/apps/delete_app.php").setQueryData({app_id:this.props.appID,legacy:!1,dialog:!0,xout:!0});new(b("Dialog"))().setAsync(new(b("AsyncRequest"))(a).setRelativeTo(b("ReactDOM").findDOMNode(this))).setCausalElement(b("ReactDOM").findDOMNode(this)).show()}.bind(this),c}a.appUninstalled=function(a){"use strict";b("CSS").addClass(a,"_4ksu")};a.prototype.render=function(){"use strict";return b("React").createElement(b("GamesXOut.react"),{onClick:this.$3},b("React").createElement(b("DOMContainer.react"),null,this.props.domChild))};a.propTypes={unitType:c.string.isRequired,appID:c.string.isRequired,domChild:c.any.isRequired,extraData:c.string.isRequired,fbs:c.number.isRequired};e.exports=a}),null);
__d("XGroupsRHCSuggestionXoutController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/xout_suggested_group/",{id:{type:"Int",required:!0}})}),null);
__d("XRapidReportingDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/rapid_report/",{context:{type:"String",required:!0},preselectedtagid:{type:"Enum",enumType:1},__asyncDialog:{type:"Int"}})}),null);
__d("GroupSuggestionXoutHandler",["csx","AsyncRequest","CSS","DOM","Event","XGroupsRHCSuggestionXoutController","XRapidReportingDialogController","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h={onclick:function(a,c,d,e,f){b("Event").listen(a,"click",function(){h.hideItem(c,d,e,f)})},hideItem:function(a,c,d,e){__p&&__p();var f=b("XGroupsRHCSuggestionXoutController").getURIBuilder().setInt("id",a).getURI();new(b("AsyncRequest"))().setURI(f).send();f=b("ge")(""+c);f!==null&&b("DOM").remove(f);if(d==="group_mall_rhc"){f=b("ge")("div._1spx");if(f.length===0){f=b("ge")("GroupsRHCSuggestionSection");f!==null&&b("DOM").remove(f)}}e&&h.openReportingFlow(a,c,d)},openReportingFlow:function(a,c,d){var e=JSON.stringify({reportable_ent_token:a.toString(),entry_point:d});e=b("XRapidReportingDialogController").getURIBuilder().setString("context",e).getURI();new(b("AsyncRequest"))().setURI(e).send();h.hideItem(a,c,d,!1)},hide:function(a,c){b("Event").listen(c,"mouseover",function(){b("CSS").show(a)}),b("Event").listen(c,"mouseleave",function(){b("CSS").hide(a)})}};e.exports=h}),null);
__d("EgoUnitSlideInsert",["csx","cx","Animation","CSS","DataStore","DOM","Ease","Event","Parent","TidyArbiterMixin","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="sliding",j="EgoSlider/End",k=babelHelpers["extends"]({isSliding:function(a){return b("DataStore").get(a,i)},runAfterSlide:function(a,c){var d=b("tidyEvent")(k.subscribe(j,function(b,e){e===a&&(d&&d.unsubscribe(),c())}))},registerSlide:function(a,c){__p&&__p();b("Event").listen(a,"click",function(d){__p&&__p();d=b("Parent").bySelector(d.getTarget(),"._5cl_");if(!d)return;var e=b("Parent").byClass(a,"ego_unit");d=0;var f=b("Parent").byClass(e,"ego_unit_container"),g=b("DOM").scry(f,".ego_unit")[0];g===e&&(e.nextSibling&&(e.nextSibling.style.paddingTop="0px",e.nextSibling.style.borderTop="0px"));b("CSS").addClass(e,"_5cl-");b("DataStore").set(e,i,!0);new(b("Animation"))(e).to("height",0).to("padding-top",d).to("padding-bottom",0).to("margin",0).from("opacity",1).to("opacity",0).ease(b("Ease").circOut).duration(300).checkpoint(1,function(){b("DOM").appendContent(f,e),b("DOM").prependContent(e,c),b("DataStore").remove(e,i)}).to("height",12).to("opacity",1).to("margin-bottom",10).duration(0).checkpoint(2,function(){k.inform(j,e)}).go()})}},b("TidyArbiterMixin"));e.exports=k}),null);
__d("NetEgo",["csx","Animation","Arbiter","CSS","DOM","EgoUnitSlideInsert","PageLikeConstants","Parent","URI","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h={setup:function(a){__p&&__p();b("Arbiter").subscribe([b("PageLikeConstants").LIKED,"FriendRequest/sending"],function(c,d){__p&&__p();if(a==d.profile_id&&d.origin=="hovercard"||a==d.uid){c=b("ge")(document.body,".ego_unit_container");if(c){d=b("DOM").scry(c,".ego_unit");c=d.length;for(var e=0;e<c;e++){var f=d[e].getAttribute("data-ego-fbid");if(f==a){f=b("DOM").scry(d[e],".ego_action a")[0];f&&f.click();break}}}}})},updateXids:function(a,c){__p&&__p();if(a.length==0&&c.length==0)return;a=function(a){return function(c){c=c.getAttribute(a);if(!c)return!1;c=new(b("URI"))(c).getQueryData();return!!c.xids}};var d=b("DOM").scry(document.body,".ego_section a");d=d.filter(a("ajaxify"));if(d.length==0)return;var e=new(b("URI"))(d[0].getAttribute("ajaxify")),f=e.getQueryData();if(!f.xids)return;var g=null;try{g=JSON.parse(f.xids)}catch(a){return}for(var h=0;h<c.length;++h)g[c[h]]=1;var i=JSON.stringify(g);c=function(a,c){e=new(b("URI"))(a.getAttribute(c)),f=e.getQueryData(),f.xids=i,e.setQueryData(f),a.setAttribute(c,e.toString())};for(h=0;h<d.length;++h)c(d[h],"ajaxify");g=b("DOM").scry(document.body,".ego_unit form");g=g.filter(a("action"));for(h=0;h<g.length;++h)c(g[h],"action")},replaceUnit:function(a,b,c,d){h.replaceUnitCheckParent(a,b,c,d,"")},replaceUnitCheckParent:function(a,c,d,e,f){var g=b("Parent").byClass(a,"ego_unit_container");if(g&&b("EgoUnitSlideInsert").isSliding(a)){g=b("DOM").appendContent(g,c);g.forEach(b("CSS").hide);b("EgoUnitSlideInsert").runAfterSlide(a,h._replaceUnitElement.bind(null,a,g,f))}else h._replaceUnit(a,c,d,e,f)},_replaceUnit:function(a,c,d,e,f){var g=b("DOM").insertAfter(a,c);g.forEach(b("CSS").hide);e!==undefined&&e!==null?setTimeout(function(){h._replaceUnitFadeout(a,g,d,f)},e):h._replaceUnitFadeout(a,g,d,f)},_replaceUnitFadeout:function(a,c,d,e){d?new(b("Animation"))(a).from("opacity",1).to("opacity",0).duration(d).checkpoint(1,function(){h._replaceUnitElement(a,c,e)}).go():h._replaceUnitElement(a,c,e)},_replaceUnitElement:function(a,c,d){var e=b("CSS").hasClass(a,"ego_unit")?a.parentNode:null;e&&e.tagName==="LI"&&(e=b("DOM").scry(a.parentNode,"^ul")[0]);b("DOM").remove(a);c.length&&c.forEach(b("CSS").show);b("Arbiter").inform("netego_replacedUnit",{serializedData:d,numUnitsRemained:e.childNodes.length});h.clearHeader()},clearHeader:function(){__p&&__p();var a=b("DOM").scry(document.body,".ego_column"),c=[];for(var d=0;d<a.length;++d)c=c.concat(b("DOM").scry(a[d],".uiHeader"));for(d=0;d<c.length;++d){a=c[d].nextSibling;var e=b("DOM").find(a,"._2xq");e||(e=a);if(!e||e.childNodes.length===0)b("DOM").remove(c[d]);else if(e.childNodes.length===1){a=e.childNodes[0];b("CSS").hasClass(a,"ego_appended_units")&&a.childNodes.length===0&&b("DOM").remove(c[d])}}}};e.exports=h}),null);
__d("NetEgoLogger",["AsyncSignal"],(function(a,b,c,d,e,f){e.exports={log:function(a){var c=a.uri,d=a.sid,e=a.fbid;a=a.element;new(b("AsyncSignal"))(c,{sid:d,fbid:e,height:a.offsetHeight}).send()}}}),null);
__d("PubcontentSuggestionsUtil",["csx","DOM","DOMDimensions","LitestandEllipsis","Parent","Style"],(function(a,b,c,d,e,f,g){__p&&__p();var h={truncateName:function(a,c){var d=b("DOM").scry(a,".nameText")[0];if(d){c=(b("Style").getFloat(a,"lineHeight")+b("Style").getFloat(a,"marginBottom"))*c;if(isNaN(c))return;b("LitestandEllipsis").add(d,c,a);d=b("DOM").scry(a.parentNode,".socialContext")[0];d&&(c-=b("DOMDimensions").getElementDimensions(a).height,b("LitestandEllipsis").add(d,c,d))}},truncateText:function(a,c){if(a){c=b("Style").getFloat(a,"lineHeight")*c;b("LitestandEllipsis").add(a,c,a)}},truncateAllText:function(a,c){var d,e=b("DOM").scry(a,".ego_title");for(d=0;d<e.length;d++)h.truncateName(e[d],2);e=b("DOM").scry(a,".descriptionText");for(d=0;d<e.length;d++)h.truncateText(e[d],2);e=b("DOM").scry(a,".ego_like");for(d=0;d<e.length;d++)h.cutLikeButtonText(e[d],c)},cutButtonText:function(a){var c=b("Parent").bySelector(a,"._5ry0");if(c&&b("DOMDimensions").getElementDimensions(a).width>b("DOMDimensions").getElementDimensions(c).width){c=b("DOM").scry(a,"input")[0];c.value=""}},cutLikeButtonText:function(a,c){__p&&__p();c=c?b("Parent").byClass(a,"ego_unit"):b("Parent").byClass(a,"likeButton");if(c&&b("DOMDimensions").getElementDimensions(a).width>b("DOMDimensions").getElementDimensions(c).width){c=b("DOM").scry(a,"img");if(c.length){var d=c[0].nextSibling.textContent;c[0].parentNode.setAttribute("aria-label",d);c[0].parentNode.removeChild(c[0].nextSibling)}else{c=b("DOM").scry(a,"i");if(c.length){d=c[0].nextSibling.textContent;c[0].parentNode.setAttribute("aria-label",d);c[0].parentNode.removeChild(c[0].nextSibling)}}}}};e.exports=h}),null);
__d("Slideshow",["csx","cx","ArbiterMixin","CSS","DOM","Event","Parent","getActiveElement","mixin","shield"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));i=c&&c.prototype;function a(a,c){"use strict";__p&&__p();i.constructor.call(this),this._setCurrent=function(a){__p&&__p();var c=this._items[this._currentIndex];c&&b("CSS").removeClass(c,"_2xn");b("CSS").addClass(this._items[a],"_2xn");b("CSS").removeClass(this._root,"_2xm");c=c&&b("DOM").scry(c,"a").some(function(a){return a==b("getActiveElement")()});if(c){c=b("DOM").scry(this._items[a],"a");c[0]&&c[0].focus()}this._currentIndex=a;this._animating=!1;this.inform("page_end",a)}.bind(this),this.informAndResetAutoPlay=function(){this.resetAutoplay(),this._config.autoplay&&this.inform("reset_autoplay")}.bind(this),this.informAndStopAutoplay=function(){this.stopAutoplay(),this.inform("stop_autoplay")}.bind(this),this._root=a,this._config=c,this._currentIndex=0,this._animating=!1,this._autoplayTimer=null,this._autoplayTimeout=c.autoplayTimeout,this._init()}a.prototype.getNode=function(){"use strict";return this._root};a.prototype.getIndex=function(){"use strict";return this._currentIndex};a.prototype.getNumItems=function(){"use strict";return this._items.length};a.prototype.getNextArrow=function(){"use strict";return this._config.arrows?b("DOM").find(this._root,"a._2xw"):null};a.prototype.getPrevArrow=function(){"use strict";return this._config.arrows?b("DOM").find(this._root,"a._2xx"):null};a.prototype.page=function(a){"use strict";__p&&__p();a||(a="next");if(a==="next")(this._config.wrap||this.getIndex()<this.getNumItems()-1)&&this._animateTo((this.getIndex()+1)%this.getNumItems(),this.getIndex());else if(a==="prev"){if(this._config.wrap||this.getIndex()>0){a=(this.getNumItems()+this.getIndex()-1)%this.getNumItems();this._animateTo(a,this.getIndex())}}};a.prototype.pageTo=function(a){"use strict";this._animateTo(a,this.getIndex(),b("shield")(this._setCurrent,this,a))};a.prototype.insert=function(a,c){"use strict";a>this._currentIndex?b("DOM").insertAfter(this._items[a-1],c):(b("DOM").insertBefore(this._items[a],c),this._currentIndex++),this._items.splice(a,0,c),this._updateArrowState(),this.inform("items_updated")};a.prototype.push=function(a){"use strict";this.insert(this._items.length,a)};a.prototype.remove=function(a){"use strict";__p&&__p();if(a<0||a>=this._items.length)return;b("DOM").remove(this._items[a]);this._items=b("DOM").scry(this._container,"li._2xr");if(a===this._currentIndex&&this._items.length){a=a%this._items.length;this._conditionFade(this._items[a],!0,null);this._setCurrent(a)}this.inform("items_updated")};a.prototype._init=function(){"use strict";this._container=b("DOM").find(this._root,"ul._2xq"),this._items=b("DOM").scry(this._container,"li._2xr"),this._config.arrows&&(b("Event").listen(this._root,"click",this._clickListener.bind(this)),this._arrowNext=b("DOM").find(this._root,"a._2xw"),this._arrowPrev=b("DOM").find(this._root,"a._2xx")),this._config.autoplay&&(this._config.autoplaycontrol&&(b("Event").listen(this._root,"mouseenter",this.informAndStopAutoplay),b("Event").listen(this._root,"mouseleave",this.informAndResetAutoPlay)),this.resetAutoplay()),this.subscribe(["page_start","page_end"],function(a,c){b("CSS").conditionClass(this._root,"_2xm",a==="page_start")}.bind(this))};a.prototype._clickListener=function(event){"use strict";var a=event.getTarget();a=b("Parent").byTag(a,"a");a&&!b("CSS").matchesSelector(a,"._2xo")&&(b("CSS").matchesSelector(a,"._2xw")?(this.page("next"),event.preventDefault()):b("CSS").matchesSelector(a,"._2xx")&&(this.page("prev"),event.preventDefault()))};a.prototype._updateArrowState=function(){"use strict";if(!this._config.arrows)return;b("CSS").conditionClass(this._arrowNext,"_2xo",this._items.length===1);b("CSS").conditionClass(this._arrowPrev,"_2xo",this._items.length===1)};a.prototype._animateTo=function(a,b){b===void 0};a.prototype.startAutoplay=function(a){"use strict";this._config.autoplay=!0,this._autoplayTimeout=a,this.resetAutoplay()};a.prototype.resetAutoplay=function(){"use strict";this._config.autoplay&&(clearTimeout(this._autoplayTimer),this._autoplayTimer=setTimeout(this._autoplay.bind(this),this._autoplayTimeout))};a.prototype.stopAutoplay=function(){"use strict";clearTimeout(this._autoplayTimer),this._autoplayTimer=null};a.prototype._autoplay=function(){"use strict";this.resetAutoplay(),this._items.length>1&&this.page()};a.prototype.setAutoplayTimeout=function(a){"use strict";this._autoplayTimeout=a};e.exports=a}),null);
__d("Carousel",["cx","Animation","CSS","Ease","Locale","Slideshow","Style","shield"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("Locale").isRTL()?"right":"left",j=b("Ease").sineInOut;c=babelHelpers.inherits(a,b("Slideshow"));h=c&&c.prototype;function a(a,b){"use strict";h.constructor.call(this,a,b),this.subscribe("items_updated",this._updateItemState.bind(this)),this._width=this._config.width}a.prototype._updateItemState=function(a,c){"use strict";this._setContainerPos(a),b("Style").set(this._container,"width",this._items.length*this._config.width+this._config.widthunit)};a.prototype._updateArrowState=function(a){"use strict";if(!this._config.arrows)return;var c=this._config.wrap,d=this._items.length;d=Math.floor(d/this._config.photosperframe);b("CSS").conditionClass(this._arrowNext,"_2xo",d===1||!c&&a===d-1);b("CSS").conditionClass(this._arrowPrev,"_2xo",d===1||!c&&a===0)};a.prototype._animate=function(a,c,d){c===void 0&&(c=null);var e=a===-1?this._items.length-1:a,f=0;f=this._calcOffset(a,this._config.width,this._config.peek,this._config.item_margin);this._animating=!0;this.inform("page_start",e);a=new(b("Animation"))(this._container).setUnit(this._config.widthunit).to(i,f).duration(this._config.animationDuration).ease(j).ondone(d);c!==null&&(e=this._calcOffset(c,this._config.width,this._config.peek,this._config.item_margin),a.from(i,e));a.go()};a.prototype._calcOffset=function(a,b,c,d){"use strict";if(this._config.peek_with_offset){var e=-a*(b-c*2);a>0&&(e=e+c-a*(d/2));a===this._items.length-1&&(e+=c);return e}else return-a*b};a.prototype._setContainerPos=function(a){"use strict";b("Style").set(this._container,i,-a*this._config.width+this._config.widthunit)};a.prototype._animateTo=function(a,c){__p&&__p();c===void 0&&(c=null);if(this._animating)return;var d=this._items.length;if(0<=a&&a<d||!this._config.wrap){var e=(a+d)%d;this._updateArrowState(e);return this._animate(e,c,b("shield")(this._setCurrent,this,e))}e=a%d;var f=e?d-1:0,g=this._items[d-1];b("Style").set(g,"position","absolute");b("Style").set(g,i,-this._config.width+this._config.widthunit);f===0&&this._setContainerPos(-1);this._animate(e,c,function(){b("Style").set(g,"position","static"),b("Style").set(g,i,"auto"),this._setContainerPos(f),this._setCurrent(f)}.bind(this))};e.exports=a}),null);