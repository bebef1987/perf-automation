(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~OriginalContent~Subreddit"],{"./src/reddit/components/BannerAd/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-runtime/helpers/jsx.js"),s=n.n(i),o=n("./node_modules/babel-runtime/regenerator/index.js"),r=n.n(o),d=n("./node_modules/babel-runtime/helpers/asyncToGenerator.js"),c=n.n(d),a=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),l=n.n(a),u=n("./node_modules/babel-runtime/helpers/createClass.js"),p=n.n(u),m=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),h=n.n(m),f=n("./node_modules/babel-runtime/helpers/inherits.js"),b=n.n(f),x=n("./node_modules/react/index.js"),v=n.n(x),g=n("./node_modules/react-redux/es/index.js"),y=n("./node_modules/reselect/lib/index.js"),w=n("./bundled-modules/styled-components/styled-components.min.js"),j=n.n(w),k=n("./src/lib/addQueryParams/index.ts"),O=n("./src/lib/constants/index.ts"),C=n("./src/lib/doubleclickForPublishers/index.ts"),S=n("./src/lib/intersectionObserver/index.ts"),_=n("./src/lib/objectSelector/index.ts"),I=n("./src/reddit/helpers/createBannerProperties/index.ts"),A=n("./src/reddit/selectors/subreddit.ts"),P=j.a.div.withConfig({componentId:"s127g5g-0"})(["position: relative;"]),N=j.a.div.withConfig({componentId:"s127g5g-1"})(["position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin-top: -300px;margin-bottom: -300px;padding-top: 300px;padding-bottom: 300px;pointer-events: none;z-index: -1000;"]),z=function(e){return setTimeout(function(){throw e},0)},L=function(e){function t(){l()(this,t);var e=h()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.frame=null,e.loader=null,e.refreshedAt=1/0,e.isWithinLoadingDistance=!1,e}return b()(t,e),p()(t,[{key:"componentDidCatch",value:function(e){z(e)}},{key:"defineSlot",value:function(){var e=this.props,t=e.id,n=e.slot,i=e.properties,s=e.sizes,o=void 0===s?[]:s;try{return this.frame&&C.a(this.frame,{id:t,slot:n,properties:i,sizes:o})}catch(e){z(e)}}},{key:"destroySlot",value:function(){try{this.frame&&C.b(this.frame)}catch(e){z(e)}}},{key:"componentDidMount",value:function(){var e=c()(r.a.mark(function e(){var t=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.defineSlot();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),z(e.t0);case 8:this.loader&&S.a(this.loader,function(e){t.frame&&C.e(t.frame,{viewable:e.intersectionRatio>.5}),t.isWithinLoadingDistance=!0,t.refresh(t.props),t.loader&&S.b(t.loader)});case 9:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.loader&&S.b(this.loader),this.destroySlot()}},{key:"refresh",value:function(e){this.isWithinLoadingDistance&&(this.refreshedAt=Date.now(),this.frame&&C.d(this.frame,{id:e.id,slot:e.slot,properties:e.properties,sizes:e.sizes}))}},{key:"componentWillReceiveProps",value:function(e){this.props.refreshKey!==e.refreshKey&&Date.now()-this.refreshedAt>6e3&&this.refresh(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,i=t.slot,o=t.className;return i?s()(P,{"data-slot":i},void 0,s()(N,{innerRef:function(t){e.loader=t}},n+"-loadinghitbox"),v.a.createElement("div",{key:n+"-div",className:o,ref:function(t){e.frame=t},id:n})):s()("div",{className:o})}}]),t}(v.a.Component);L.defaultProps={sizes:[O.f]};t.a=Object(g.connect)(function(){return Object(y.createStructuredSelector)({properties:Object(_.a)(function(e,t){var n=e.platform.currentPage;if(!n)return{};var i=e.meta.protocol+"://"+e.meta.domain;return Object(I.b)(t.placement,e.user,Object(k.a)(""+i+n.url,n.queryParams),Object(A.s)(e,{subredditName:t.listingName}),t.position)}),slot:function(e,t){var n=e.platform.currentPage;return n&&n.meta?C.c(t.listingName,n.meta.name):""}})})(L)},"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-runtime/helpers/jsx.js"),s=n.n(i),o=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),r=n.n(o),d=n("./node_modules/babel-runtime/helpers/createClass.js"),c=n.n(d),a=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),l=n.n(a),u=n("./node_modules/babel-runtime/helpers/inherits.js"),p=n.n(u),m=n("./src/app/strings/index.ts"),h=n("./node_modules/react/index.js"),f=n.n(h),b=n("./node_modules/react-redux/es/index.js"),x=n("./src/reddit/components/BannerAd/index.tsx"),v=n("./src/lib/constants/index.ts"),g=n("./src/reddit/components/PostMedia/index.tsx"),y=n("./src/reddit/components/PostTitle/index.tsx"),w=n("./src/reddit/components/PostTopMeta/index.tsx"),j=n("./src/reddit/components/SidebarSectionHeader/index.tsx"),k=n("./src/reddit/helpers/styles/mixins/index.tsx"),O=n("./bundled-modules/styled-components/styled-components.min.js"),C=n.n(O),S=n("./src/lib/getShortenedLink.ts"),_=n("./src/lib/opener/index.ts"),I=n("./src/reddit/actions/ad.ts"),A=n("./src/reddit/components/PostContainer/index.tsx"),P=n("./src/reddit/constants/adEvents.ts"),N=n("./src/reddit/contexts/InsideOverlay.tsx"),z=n("./src/reddit/contexts/PageLayer/index.tsx"),L=n("./src/reddit/controls/OutboundLink/styled.tsx"),F=n("./src/reddit/helpers/adCount/index.ts"),M=n("./src/reddit/helpers/pixels.ts"),R=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),B=n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),D=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),W=n("./src/reddit/models/Media/index.ts"),E=C()(function(e){return s()("img",{className:e.className,src:e.src})}).withConfig({componentId:"vhpvp7-0"})(["margin: 0 auto;width: 100%;height: 100%;"]),T=function(e){function t(){return r()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){var e=this.props.post;if(!e.media)return null;var t=e.media&&!Object(W.z)(e.media)?e.media.content:"",n=e.media.type;if(!t||!n)return null;switch(n){case v.Ia.IMAGE:return s()(E,{src:t});default:return null}}}]),t}(f.a.Component),H=C()(w.d).withConfig({componentId:"k2dz5i-0"})(["","display: block;"],w.e),K=C.a.div.withConfig({componentId:"k2dz5i-1"})(["","background-color: ",";min-width: 300px;&::before {content: '","';color: ",";display: block;","font-weight: 500;}"],k.t,function(e){return Object(D.c)(e).body},Object(m.a)("en","sidebar.sponsored"),function(e){return Object(D.c)(e).actionIcon},j.b),q=C.a.div.withConfig({componentId:"k2dz5i-2"})(["","background-color: ",";"],k.t,function(e){return Object(D.c)(e).body}),U=C()(B.a).withConfig({componentId:"k2dz5i-3"})(["font-size: 13px;padding-left: 3px;vertical-align: middle;"]),G=C.a.div.withConfig({componentId:"k2dz5i-4"})(["display: flex;"]),J=C.a.div.withConfig({componentId:"k2dz5i-5"})(["","align-items: center;display: flex;flex-direction: row;flex-wrap: nowrap;height: 16px;margin: 0 8px 8px;position: relative;"],R.metadataFont),V=C()(y.c).withConfig({componentId:"k2dz5i-6"})(["margin: 0 8px 0px 8px;"]),Q=C.a.div.withConfig({componentId:"k2dz5i-7"})(["margin-top: 8px;"]),Y=C.a.div.withConfig({componentId:"k2dz5i-8"})(["","padding-top: 8px;"],k.u),$=C()(A.a).withConfig({componentId:"k2dz5i-9"})(["","cursor: pointer;"],function(e){return e.post.isMediaOnly?"":"\n        "+k.v+"\n        "+w.e+"\n      "}),X=Object(z.t)({isOriginalPage:z.A,pageLayer:function(e){return e}}),Z=function(e,t){Object(M.a)(t.events,P.a.Click),t.source?t.source.outboundUrl?Object(_.b)(t.source.outboundUrl,_.a.BLANK):Object(_.b)(t.source.url,_.a.BLANK):Object(_.b)(t.permalink,_.a.BLANK)},ee=function(e){return t=e.title,n=100,t.length>n?t.slice(0,n-1).replace(/\s*$/,"")+"…":t;var t,n},te=function(e){function t(){r()(this,t);var e=l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.refreshedAt=1/0,e}return p()(t,e),c()(t,[{key:"refresh",value:function(e){this.refreshedAt=Date.now(),this.props.refreshSidebarPromotedPost()}},{key:"componentDidMount",value:function(){this.refreshedAt=Date.now()}},{key:"componentWillReceiveProps",value:function(e){this.props.refreshKey!==e.refreshKey&&Date.now()-this.refreshedAt>6e3&&this.refresh(e)}},{key:"render",value:function(){var e=this.props,t=e.post,n=e.className,i=e.eventFactory,o=e.isOverlay,r=t.isMediaOnly?K:q,d=void 0;return d=t.isMediaOnly?s()(T,{post:t}):s()(Y,{},void 0,s()(J,{},void 0,s()(H,{tooltipType:o?w.c.Lightbox:void 0,language:v.A,post:t,showSponsorIcon:!0,hideSource:!0,showTimestamp:!1})),s()(V,{post:t,size:y.b.Large,format:ee}),t.source&&s()(G,{},void 0,s()(L.a,{href:t.source.url,isSponsored:!0,source:t.source},void 0,Object(S.a)(t),s()(U,{}))),s()(Q,{},void 0,t.media&&s()(g.a,{isListing:!0,isNotCardView:!0,showCentered:!0,post:t,availableWidth:640,shouldLoad:!0}))),s()(r,{},void 0,s()($,{className:n,post:t,onClick:Z,eventFactory:i},void 0,d))}}]),t}(f.a.Component),ne=Object(b.connect)(null,function(e,t){return{refreshSidebarPromotedPost:function(){var n=t.placement,i=t.placementIndex,s=t.isOverlay;e(Object(I.h)(Object(F.a)(n,!!s,i)))}}})(X(Object(N.b)(te))),ie=n("./src/reddit/components/SidebarSpacer/index.tsx"),se=n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),oe=n("./node_modules/reselect/lib/index.js"),re=Object(oe.createStructuredSelector)({post:function(e,t){var n=t.placement,i=t.placementIndex,s=!!t.isOverlay;return e.sidebarPromotedPosts.models[Object(F.a)(n,s,i)]},pending:function(e){return!e.sidebarPromotedPosts.firstFetch}}),de=Object(b.connect)(re),ce=Object(z.t)(),ae=C()(x.a).withConfig({componentId:"s9i6gcs-0"})(["min-height: 270px;min-width: 300px;&::before {content: '","';color: inherit;display: block;","font-weight: 500;}"],Object(m.a)("en","sidebar.sponsored"),j.b),le=C()(se.a).withConfig({componentId:"s9i6gcs-1"})(["padding: 6px;"]),ue=C.a.div.withConfig({componentId:"s9i6gcs-2"})(["min-height: 270px;min-width: 300px;&::before {content: '","';color: inherit;display: block;","font-weight: 500;}"],Object(m.a)("en","sidebar.sponsored"),j.b),pe=function(e){function t(){return r()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.pending,i=e.post,o=e.isOverlay,r=e.placementIndex,d=e.refreshKey,c=e.listingName,a=e.placement,l=e.sizes,u=e.position;return e.forcePlaceholder||n?s()(ie.a,{},void 0,s()(le,{className:t,contentOnly:!0},void 0,s()(ue,{}))):function(e){return!(!e||e.isBlank||e.isMediaOnly&&!(e.media&&Object(W.w)(e.media)&&e.media.content))}(i)?s()(ie.a,{},void 0,s()(ne,{post:i,refreshKey:d,listingName:c,placement:a,placementIndex:r})):s()(ie.a,{},void 0,s()(le,{className:this.props.className,contentOnly:!0},void 0,s()(ae,{id:function(e,t,n){var i="";return t&&(i+="overlay-"),i+="sidebar-"+e,null!=n&&(i+="-"+n),i}(a,o,r),sizes:l,placement:a,listingName:c,refreshKey:d,position:u})))}}]),t}(f.a.Component);t.a=ce(de(pe))},"./src/reddit/components/SidebarStickyBottom/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),s=n.n(i),o=n("./node_modules/babel-runtime/helpers/createClass.js"),r=n.n(o),d=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=n.n(d),a=n("./node_modules/babel-runtime/helpers/inherits.js"),l=n.n(a),u=n("./node_modules/babel-runtime/helpers/jsx.js"),p=n.n(u),m=n("./node_modules/lodash/throttle.js"),h=n.n(m),f=n("./node_modules/react/index.js"),b=n("./bundled-modules/styled-components/styled-components.min.js"),x=n.n(b),v=n("./src/lib/constants/index.ts"),g=n("./node_modules/react-redux/es/index.js"),y=n("./node_modules/reselect/lib/index.js"),w=n("./src/app/strings/index.ts"),j=n("./src/reddit/controls/Button/index.tsx"),k=n("./src/reddit/selectors/monthsToMinutes.ts"),O=n("./src/reddit/selectors/user.ts"),C=x.a.div.withConfig({componentId:"pqvesn-0"})(["text-align: center;"]),S=x.a.div.withConfig({componentId:"pqvesn-1"})(["text-align: right;"]),_=x()(j.d).withConfig({componentId:"pqvesn-2"})(["width: 128px;"]),I=x()(j.d).withConfig({componentId:"pqvesn-3"})(["width: 120px;"]),A=Object(y.createStructuredSelector)({language:O.H,showAccountCompletenessInBottom:k.n}),P=Object(g.connect)(A)(function(e){var t=e.showAccountCompletenessInBottom?S:C,n=e.showAccountCompletenessInBottom?I:_;return p()(t,{className:e.className},void 0,p()(n,{onClick:function(){return window.scroll(0,0)}},void 0,Object(w.a)(e.language,"listings.backToTop")))}),N=n("./src/reddit/components/SidebarFooter/index.tsx"),z=n("./src/reddit/components/SidebarSpacer/index.tsx"),L=n("./src/reddit/constants/componentSizes.ts"),F=n("./src/reddit/contexts/PageLayer/index.tsx"),M=v.f[1]+24,R=L.h+8,B=R+152+32+16,D=B+M+8,W=x.a.div.withConfig({componentId:"s1o4wf6a-0"})(["flex: 1 1 auto;position: relative;width: inherit;"]),E=x()(P).withConfig({componentId:"s1o4wf6a-1"})(["margin-top: 50vh;position: sticky;top: calc(100vh - ","px);"],40),T=(x()(z.a).withConfig({componentId:"s1o4wf6a-2"})(["",""],function(e){return e.isAdSticky?"\n      position: sticky;\n    ":""}),x()(N.a).withConfig({componentId:"s1o4wf6a-3"})(["",""],function(e){return e.isFooterSticky?"\n      position: sticky;\n    ":""}),x()(N.a).withConfig({componentId:"s1o4wf6a-4"})(["",""],function(e){return e.isFooterSticky?"\n      position: sticky;\n    ":""}),x()(function(e){var t=e.className,n=(e.isSticky,e.children);return p()("div",{className:t},void 0,n)}).withConfig({componentId:"s1o4wf6a-5"})(["",""],function(e){return e.isSticky?"\n  position: sticky;\n  top: 57px;\n":""})),H=function(e){function t(e){s()(this,t);var n=c()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.containerEl=null,n.windowHeight=1/0,n.getStickyContents=function(){return{shouldAdSticky:n.windowHeight>D,shouldFooterSticky:n.windowHeight>B}},n.updateState=function(){if(!n.isHidden()){var e=n.getStickyContents(),t=e.shouldAdSticky,i=e.shouldFooterSticky;t===n.state.isAdSticky&&i===n.state.isFooterSticky||n.setState({isAdSticky:t,isFooterSticky:i})}},n.updateMeasurements=function(){n.windowHeight=window.innerHeight},n.handleResize=h()(function(){n.updateMeasurements(),n.updateState()},v.H),n.setWrapperRef=function(e){return n.containerEl=e||null},n.state={isAdSticky:!0,isFooterSticky:!0},n}return l()(t,e),r()(t,[{key:"isHidden",value:function(){return!this.containerEl||null===this.containerEl.offsetParent}},{key:"componentDidMount",value:function(){this.isHidden()||this.handleResize(),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.props.adComponent,t=this.state.isAdSticky&&!!e;return p()(W,{innerRef:this.setWrapperRef},void 0,p()(T,{isSticky:t},void 0,e,p()(N.a,{})),p()(E,{}))}}]),t}(f.Component),K=Object(F.t)();t.a=K(H)},"./src/reddit/components/Widgets/CommunityList/helpers.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var i=n("./src/reddit/constants/posts.ts"),s=n("./src/reddit/helpers/name/index.ts");function o(e,t){return(t===i.a.PROFILE?"/user/":"/r/")+e}function r(e,t){return t===i.a.PROFILE?Object(s.c)(e):Object(s.b)(e)}},"./src/reddit/helpers/createBannerProperties/index.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i,s=n("./src/lib/isFakeSubreddit/index.ts"),o=Math.floor(100*Math.random());!function(e){e.FIRST="first",e.MIDDLE="middle",e.BOTTOM="bottom"}(i||(i={}));t.b=function(e,t,n,i,r){var d={subreddit_screen:!1,logged_in:!!t.account,placement:e,platform:"redesign",full_url:n,layout:t.prefs.layout};return i&&!Object(s.a)(i.name)&&(d.subreddit=i.name,d.subreddit_screen=!0),d.wls=6,d.whitelist_status="all_ads",d.percentage=d.random_number=o,r&&(d.position=r),d}},"./src/reddit/layout/threeCol/ExpandCenter/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-runtime/helpers/jsx.js"),s=n.n(i),o=(n("./node_modules/react/index.js"),n("./bundled-modules/styled-components/styled-components.min.js")),r=n.n(o),d=n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),c=n("./src/reddit/helpers/styles/components/index.tsx"),a=r()(Object(c.a)()).withConfig({componentId:"s1akftvf-0"})(["flex: 0 0 ",";"],function(e){return e.width?e.width+"px":""}),l=r.a.div.withConfig({componentId:"s1akftvf-1"})(["flex: 1 1 100%;width: 100%;"]),u=r()(Object(c.a)()).withConfig({componentId:"s1akftvf-2"})(["flex: 0 0 ",";"],function(e){return e.width?e.width+"px":""});t.a=r()(Object(d.a)(function(e){return s()("div",{className:e.className},void 0,s()(a,{width:e.widthLeft},void 0,Array.isArray(e.children)&&e.children[0]),s()(l,{},void 0,Array.isArray(e.children)&&e.children[1]),s()(u,{width:e.widthRight},void 0,Array.isArray(e.children)&&e.children[2]))},3)).withConfig({componentId:"s1akftvf-3"})(["display: flex;flex-direction: row;"])},"./src/reddit/selectors/brandSafety.ts":function(e,t,n){"use strict";n.d(t,"c",function(){return d}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return a});var i=n("./src/lib/isFakeSubreddit/index.ts"),s=n("./src/reddit/models/WhitelistStatus/index.ts"),o=n("./src/reddit/selectors/posts.ts"),r=n("./src/reddit/selectors/subreddit.ts"),d=function(e){return e.brandSafety.hasBrandSafetyBeenAssessed},c=function(e,t){var n=t.postId,i=Object(o.A)(e,{postId:n}),r=Object(o.L)(e,{postId:n});return!(!i||!r)&&(r.wls===s.a.ALL_ADS&&!i.isNSFW)},a=function(e,t){var n=t.listingName,o=t.listingKey,d=Object(r.s)(e,{subredditName:n});return!(!e.brandSafety.isViewSafe||function(e){return/\[sort:'(new|rising|controversial)'\]/.test(e)}(o))&&(!(d||!Object(i.a)(n))||!!d&&d.wls===s.a.ALL_ADS)}}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~OriginalContent~Subreddit.f5b63c00977c8825997b.js.map