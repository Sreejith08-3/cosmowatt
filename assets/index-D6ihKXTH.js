(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Mg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ku={exports:{}},Ha={},Bu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function ev(){if(sm)return gt;sm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function v(D,se,Se){this.props=D,this.context=se,this.refs=R,this.updater=Se||y}v.prototype.isReactComponent={},v.prototype.setState=function(D,se){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,se,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=v.prototype;function N(D,se,Se){this.props=D,this.context=se,this.refs=R,this.updater=Se||y}var B=N.prototype=new _;B.constructor=N,E(B,v.prototype),B.isPureReactComponent=!0;var C=Array.isArray,P=Object.prototype.hasOwnProperty,b={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(D,se,Se){var Ge,ze={},Ve=null,oe=null;if(se!=null)for(Ge in se.ref!==void 0&&(oe=se.ref),se.key!==void 0&&(Ve=""+se.key),se)P.call(se,Ge)&&!F.hasOwnProperty(Ge)&&(ze[Ge]=se[Ge]);var de=arguments.length-2;if(de===1)ze.children=Se;else if(1<de){for(var we=Array(de),Je=0;Je<de;Je++)we[Je]=arguments[Je+2];ze.children=we}if(D&&D.defaultProps)for(Ge in de=D.defaultProps,de)ze[Ge]===void 0&&(ze[Ge]=de[Ge]);return{$$typeof:s,type:D,key:Ve,ref:oe,props:ze,_owner:b.current}}function L(D,se){return{$$typeof:s,type:D.type,key:se,ref:D.ref,props:D.props,_owner:D._owner}}function k(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function X(D){var se={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Se){return se[Se]})}var q=/\/+/g;function te(D,se){return typeof D=="object"&&D!==null&&D.key!=null?X(""+D.key):se.toString(36)}function G(D,se,Se,Ge,ze){var Ve=typeof D;(Ve==="undefined"||Ve==="boolean")&&(D=null);var oe=!1;if(D===null)oe=!0;else switch(Ve){case"string":case"number":oe=!0;break;case"object":switch(D.$$typeof){case s:case e:oe=!0}}if(oe)return oe=D,ze=ze(oe),D=Ge===""?"."+te(oe,0):Ge,C(ze)?(Se="",D!=null&&(Se=D.replace(q,"$&/")+"/"),G(ze,se,Se,"",function(Je){return Je})):ze!=null&&(k(ze)&&(ze=L(ze,Se+(!ze.key||oe&&oe.key===ze.key?"":(""+ze.key).replace(q,"$&/")+"/")+D)),se.push(ze)),1;if(oe=0,Ge=Ge===""?".":Ge+":",C(D))for(var de=0;de<D.length;de++){Ve=D[de];var we=Ge+te(Ve,de);oe+=G(Ve,se,Se,we,ze)}else if(we=g(D),typeof we=="function")for(D=we.call(D),de=0;!(Ve=D.next()).done;)Ve=Ve.value,we=Ge+te(Ve,de++),oe+=G(Ve,se,Se,we,ze);else if(Ve==="object")throw se=String(D),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return oe}function Q(D,se,Se){if(D==null)return D;var Ge=[],ze=0;return G(D,Ge,"","",function(Ve){return se.call(Se,Ve,ze++)}),Ge}function pe(D){if(D._status===-1){var se=D._result;se=se(),se.then(function(Se){(D._status===0||D._status===-1)&&(D._status=1,D._result=Se)},function(Se){(D._status===0||D._status===-1)&&(D._status=2,D._result=Se)}),D._status===-1&&(D._status=0,D._result=se)}if(D._status===1)return D._result.default;throw D._result}var ie={current:null},Z={transition:null},Y={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:Z,ReactCurrentOwner:b};function $(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:Q,forEach:function(D,se,Se){Q(D,function(){se.apply(this,arguments)},Se)},count:function(D){var se=0;return Q(D,function(){se++}),se},toArray:function(D){return Q(D,function(se){return se})||[]},only:function(D){if(!k(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},gt.Component=v,gt.Fragment=n,gt.Profiler=o,gt.PureComponent=N,gt.StrictMode=r,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,gt.act=$,gt.cloneElement=function(D,se,Se){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ge=E({},D.props),ze=D.key,Ve=D.ref,oe=D._owner;if(se!=null){if(se.ref!==void 0&&(Ve=se.ref,oe=b.current),se.key!==void 0&&(ze=""+se.key),D.type&&D.type.defaultProps)var de=D.type.defaultProps;for(we in se)P.call(se,we)&&!F.hasOwnProperty(we)&&(Ge[we]=se[we]===void 0&&de!==void 0?de[we]:se[we])}var we=arguments.length-2;if(we===1)Ge.children=Se;else if(1<we){de=Array(we);for(var Je=0;Je<we;Je++)de[Je]=arguments[Je+2];Ge.children=de}return{$$typeof:s,type:D.type,key:ze,ref:Ve,props:Ge,_owner:oe}},gt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},gt.createElement=w,gt.createFactory=function(D){var se=w.bind(null,D);return se.type=D,se},gt.createRef=function(){return{current:null}},gt.forwardRef=function(D){return{$$typeof:f,render:D}},gt.isValidElement=k,gt.lazy=function(D){return{$$typeof:x,_payload:{_status:-1,_result:D},_init:pe}},gt.memo=function(D,se){return{$$typeof:p,type:D,compare:se===void 0?null:se}},gt.startTransition=function(D){var se=Z.transition;Z.transition={};try{D()}finally{Z.transition=se}},gt.unstable_act=$,gt.useCallback=function(D,se){return ie.current.useCallback(D,se)},gt.useContext=function(D){return ie.current.useContext(D)},gt.useDebugValue=function(){},gt.useDeferredValue=function(D){return ie.current.useDeferredValue(D)},gt.useEffect=function(D,se){return ie.current.useEffect(D,se)},gt.useId=function(){return ie.current.useId()},gt.useImperativeHandle=function(D,se,Se){return ie.current.useImperativeHandle(D,se,Se)},gt.useInsertionEffect=function(D,se){return ie.current.useInsertionEffect(D,se)},gt.useLayoutEffect=function(D,se){return ie.current.useLayoutEffect(D,se)},gt.useMemo=function(D,se){return ie.current.useMemo(D,se)},gt.useReducer=function(D,se,Se){return ie.current.useReducer(D,se,Se)},gt.useRef=function(D){return ie.current.useRef(D)},gt.useState=function(D){return ie.current.useState(D)},gt.useSyncExternalStore=function(D,se,Se){return ie.current.useSyncExternalStore(D,se,Se)},gt.useTransition=function(){return ie.current.useTransition()},gt.version="18.3.1",gt}var am;function _f(){return am||(am=1,Bu.exports=ev()),Bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function tv(){if(om)return Ha;om=1;var s=_f(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var x,S={},g=null,y=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(S[x]=h[x]);if(f&&f.defaultProps)for(x in h=f.defaultProps,h)S[x]===void 0&&(S[x]=h[x]);return{$$typeof:e,type:f,key:g,ref:y,props:S,_owner:o.current}}return Ha.Fragment=n,Ha.jsx=u,Ha.jsxs=u,Ha}var lm;function nv(){return lm||(lm=1,ku.exports=tv()),ku.exports}var K=nv(),Qn=_f();const iv=Mg(Qn);var fl={},zu={exports:{}},Vn={},Hu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function rv(){return cm||(cm=1,(function(s){function e(Z,Y){var $=Z.length;Z.push(Y);e:for(;0<$;){var D=$-1>>>1,se=Z[D];if(0<o(se,Y))Z[D]=Y,Z[$]=se,$=D;else break e}}function n(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var Y=Z[0],$=Z.pop();if($!==Y){Z[0]=$;e:for(var D=0,se=Z.length,Se=se>>>1;D<Se;){var Ge=2*(D+1)-1,ze=Z[Ge],Ve=Ge+1,oe=Z[Ve];if(0>o(ze,$))Ve<se&&0>o(oe,ze)?(Z[D]=oe,Z[Ve]=$,D=Ve):(Z[D]=ze,Z[Ge]=$,D=Ge);else if(Ve<se&&0>o(oe,$))Z[D]=oe,Z[Ve]=$,D=Ve;else break e}}return Y}function o(Z,Y){var $=Z.sortIndex-Y.sortIndex;return $!==0?$:Z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],x=1,S=null,g=3,y=!1,E=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(Z){for(var Y=n(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=Z)r(p),Y.sortIndex=Y.expirationTime,e(h,Y);else break;Y=n(p)}}function C(Z){if(R=!1,B(Z),!E)if(n(h)!==null)E=!0,pe(P);else{var Y=n(p);Y!==null&&ie(C,Y.startTime-Z)}}function P(Z,Y){E=!1,R&&(R=!1,_(w),w=-1),y=!0;var $=g;try{for(B(Y),S=n(h);S!==null&&(!(S.expirationTime>Y)||Z&&!X());){var D=S.callback;if(typeof D=="function"){S.callback=null,g=S.priorityLevel;var se=D(S.expirationTime<=Y);Y=s.unstable_now(),typeof se=="function"?S.callback=se:S===n(h)&&r(h),B(Y)}else r(h);S=n(h)}if(S!==null)var Se=!0;else{var Ge=n(p);Ge!==null&&ie(C,Ge.startTime-Y),Se=!1}return Se}finally{S=null,g=$,y=!1}}var b=!1,F=null,w=-1,L=5,k=-1;function X(){return!(s.unstable_now()-k<L)}function q(){if(F!==null){var Z=s.unstable_now();k=Z;var Y=!0;try{Y=F(!0,Z)}finally{Y?te():(b=!1,F=null)}}else b=!1}var te;if(typeof N=="function")te=function(){N(q)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Q=G.port2;G.port1.onmessage=q,te=function(){Q.postMessage(null)}}else te=function(){v(q,0)};function pe(Z){F=Z,b||(b=!0,te())}function ie(Z,Y){w=v(function(){Z(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,pe(P))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(Z){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var $=g;g=Y;try{return Z()}finally{g=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,Y){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var $=g;g=Z;try{return Y()}finally{g=$}},s.unstable_scheduleCallback=function(Z,Y,$){var D=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?D+$:D):$=D,Z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=$+se,Z={id:x++,callback:Y,priorityLevel:Z,startTime:$,expirationTime:se,sortIndex:-1},$>D?(Z.sortIndex=$,e(p,Z),n(h)===null&&Z===n(p)&&(R?(_(w),w=-1):R=!0,ie(C,$-D))):(Z.sortIndex=se,e(h,Z),E||y||(E=!0,pe(P))),Z},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(Z){var Y=g;return function(){var $=g;g=Y;try{return Z.apply(this,arguments)}finally{g=$}}}})(Gu)),Gu}var um;function sv(){return um||(um=1,Hu.exports=rv()),Hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function av(){if(dm)return Vn;dm=1;var s=_f(),e=sv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function g(t){return h.call(S,t)?!0:h.call(x,t)?!1:p.test(t)?S[t]=!0:(x[t]=!0,!1)}function y(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,c){if(i===null||typeof i>"u"||y(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,N);v[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,N);v[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,N);v[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function B(t,i,a,c){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),b=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),X=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),Z=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,D;function se(t){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+t}var Se=!1;function Ge(t,i){if(!t||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){c=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}t()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,U=m.length-1;1<=T&&0<=U&&d[T]!==m[U];)U--;for(;1<=T&&0<=U;T--,U--)if(d[T]!==m[U]){if(T!==1||U!==1)do if(T--,U--,0>U||d[T]!==m[U]){var z=`
`+d[T].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=T&&0<=U);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?se(t):""}function ze(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=Ge(t.type,!1),t;case 11:return t=Ge(t.type.render,!1),t;case 1:return t=Ge(t.type,!0),t;default:return""}}function Ve(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case b:return"Portal";case L:return"Profiler";case w:return"StrictMode";case te:return"Suspense";case G:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X:return(t.displayName||"Context")+".Consumer";case k:return(t._context.displayName||"Context")+".Provider";case q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return i=t.displayName||null,i!==null?i:Ve(t.type)||"Memo";case pe:i=t._payload,t=t._init;try{return Ve(t(i))}catch{}}return null}function oe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function we(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(t){var i=we(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Fe(t){t._valueTracker||(t._valueTracker=Je(t))}function at(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=we(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function Ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ct(t,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function _t(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=de(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ct(t,i){i=i.checked,i!=null&&B(t,"checked",i,!1)}function ut(t,i){Ct(t,i);var a=de(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ht(t,i.type,a):i.hasOwnProperty("defaultValue")&&Ht(t,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function wt(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ht(t,i,a){(i!=="number"||Ft(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Zt=Array.isArray;function At(t,i,a,c){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&c&&(t[a].defaultSelected=!0)}else{for(a=""+de(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Ot(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function V(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Zt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:de(a)}}function en(t,i){var a=de(i.value),c=de(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function St(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function I(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?I(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var j,ae=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(j=j||document.createElement("div"),j.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=j.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function he(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){Re.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function me(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function ge(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=me(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,d):t[a]=d}}var be=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(t,i){if(i){if(be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Pe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function je(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var et=null,tt=null,O=null;function ye(t){if(t=Aa(t)){if(typeof et!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ro(i),et(t.stateNode,t.type,i))}}function fe(t){tt?O?O.push(t):O=[t]:tt=t}function Ae(){if(tt){var t=tt,i=O;if(O=tt=null,ye(t),i)for(t=0;t<i.length;t++)ye(i[t])}}function Le(t,i){return t(i)}function _e(){}var Oe=!1;function We(t,i,a){if(Oe)return t(i,a);Oe=!0;try{return Le(t,i,a)}finally{Oe=!1,(tt!==null||O!==null)&&(_e(),Ae())}}function Tt(t,i){var a=t.stateNode;if(a===null)return null;var c=Ro(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var mt=!1;if(f)try{var an={};Object.defineProperty(an,"passive",{get:function(){mt=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{mt=!1}function On(t,i,a,c,d,m,T,U,z){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(xe){this.onError(xe)}}var Dr=!1,cs=null,Ir=!1,Ur=null,oc={onError:function(t){Dr=!0,cs=t}};function lo(t,i,a,c,d,m,T,U,z){Dr=!1,cs=null,On.apply(oc,arguments)}function co(t,i,a,c,d,m,T,U,z){if(lo.apply(this,arguments),Dr){if(Dr){var ue=cs;Dr=!1,cs=null}else throw Error(n(198));Ir||(Ir=!0,Ur=ue)}}function Ln(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function us(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function sa(t){if(Ln(t)!==t)throw Error(n(188))}function uo(t){var i=t.alternate;if(!i){if(i=Ln(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return sa(d),t;if(m===c)return sa(d),i;m=m.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,U=d.child;U;){if(U===a){T=!0,a=d,c=m;break}if(U===c){T=!0,c=d,a=m;break}U=U.sibling}if(!T){for(U=m.child;U;){if(U===a){T=!0,a=m,c=d;break}if(U===c){T=!0,c=m,a=d;break}U=U.sibling}if(!T)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Fr(t){return t=uo(t),t!==null?aa(t):null}function aa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=aa(t);if(i!==null)return i;t=t.sibling}return null}var Or=e.unstable_scheduleCallback,oa=e.unstable_cancelCallback,fo=e.unstable_shouldYield,lc=e.unstable_requestPaint,qt=e.unstable_now,cc=e.unstable_getCurrentPriorityLevel,la=e.unstable_ImmediatePriority,ca=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,H=e.unstable_LowPriority,ce=e.unstable_IdlePriority,ne=null,J=null;function Ie(t){if(J&&typeof J.onCommitFiberRoot=="function")try{J.onCommitFiberRoot(ne,t,void 0,(t.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:Ze,De=Math.log,Ye=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(De(t)/Ye|0)|0}var ot=64,dt=4194304;function He(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yt(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,d=t.suspendedLanes,m=t.pingedLanes,T=a&268435455;if(T!==0){var U=T&~d;U!==0?c=He(U):(m&=T,m!==0&&(c=He(m)))}else T=a&~d,T!==0?c=He(T):m!==0&&(c=He(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-Ne(i),d=1<<a,c|=t[a],i&=~d;return c}function Jt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes;0<m;){var T=31-Ne(m),U=1<<T,z=d[T];z===-1?((U&a)===0||(U&c)!==0)&&(d[T]=Jt(U,i)):z<=i&&(t.expiredLanes|=U),m&=~U}}function Nt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function on(){var t=ot;return ot<<=1,(ot&4194240)===0&&(ot=64),t}function ke(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function tn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ne(i),t[i]=a}function Mt(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Ne(a),m=1<<d;i[d]=0,c[d]=-1,t[d]=-1,a&=~m}}function yn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-Ne(a),d=1<<c;d&i|t[c]&i&&(t[c]|=i),a&=~d}}var ft=0;function di(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Gi,bt,Gt,fi,Dt,ei=!1,hi=[],pi=null,ar=null,or=null,ua=new Map,da=new Map,lr=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gf(t,i){switch(t){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ua.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(i.pointerId)}}function fa(t,i,a,c,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Aa(i),i!==null&&bt(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function E0(t,i,a,c,d){switch(i){case"focusin":return pi=fa(pi,t,i,a,c,d),!0;case"dragenter":return ar=fa(ar,t,i,a,c,d),!0;case"mouseover":return or=fa(or,t,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return ua.set(m,fa(ua.get(m)||null,t,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,da.set(m,fa(da.get(m)||null,t,i,a,c,d)),!0}return!1}function Vf(t){var i=kr(t.target);if(i!==null){var a=Ln(i);if(a!==null){if(i=a.tag,i===13){if(i=us(a),i!==null){t.blockedOn=i,Dt(t.priority,function(){Gt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ho(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=dc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Ce=c,a.target.dispatchEvent(c),Ce=null}else return i=Aa(a),i!==null&&bt(i),t.blockedOn=a,!1;i.shift()}return!0}function Wf(t,i,a){ho(t)&&a.delete(i)}function w0(){ei=!1,pi!==null&&ho(pi)&&(pi=null),ar!==null&&ho(ar)&&(ar=null),or!==null&&ho(or)&&(or=null),ua.forEach(Wf),da.forEach(Wf)}function ha(t,i){t.blockedOn===i&&(t.blockedOn=null,ei||(ei=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,w0)))}function pa(t){function i(d){return ha(d,t)}if(0<hi.length){ha(hi[0],t);for(var a=1;a<hi.length;a++){var c=hi[a];c.blockedOn===t&&(c.blockedOn=null)}}for(pi!==null&&ha(pi,t),ar!==null&&ha(ar,t),or!==null&&ha(or,t),ua.forEach(i),da.forEach(i),a=0;a<lr.length;a++)c=lr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)Vf(a),a.blockedOn===null&&lr.shift()}var ds=C.ReactCurrentBatchConfig,po=!0;function T0(t,i,a,c){var d=ft,m=ds.transition;ds.transition=null;try{ft=1,uc(t,i,a,c)}finally{ft=d,ds.transition=m}}function A0(t,i,a,c){var d=ft,m=ds.transition;ds.transition=null;try{ft=4,uc(t,i,a,c)}finally{ft=d,ds.transition=m}}function uc(t,i,a,c){if(po){var d=dc(t,i,a,c);if(d===null)Cc(t,i,c,mo,a),Gf(t,c);else if(E0(d,t,i,a,c))c.stopPropagation();else if(Gf(t,c),i&4&&-1<M0.indexOf(t)){for(;d!==null;){var m=Aa(d);if(m!==null&&Gi(m),m=dc(t,i,a,c),m===null&&Cc(t,i,c,mo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Cc(t,i,c,null,a)}}var mo=null;function dc(t,i,a,c){if(mo=null,t=je(c),t=kr(t),t!==null)if(i=Ln(t),i===null)t=null;else if(a=i.tag,a===13){if(t=us(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return mo=t,null}function Xf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cc()){case la:return 1;case ca:return 4;case A:case H:return 16;case ce:return 536870912;default:return 16}default:return 16}}var cr=null,fc=null,go=null;function qf(){if(go)return go;var t,i=fc,a=i.length,c,d="value"in cr?cr.value:cr.textContent,m=d.length;for(t=0;t<a&&i[t]===d[t];t++);var T=a-t;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return go=d.slice(t,1<c?1-c:void 0)}function _o(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function vo(){return!0}function Yf(){return!1}function Xn(t){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?vo:Yf,this.isPropagationStopped=Yf,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Xn(fs),ma=$({},fs,{view:0,detail:0}),R0=Xn(ma),pc,mc,ga,xo=$({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(pc=t.screenX-ga.screenX,mc=t.screenY-ga.screenY):mc=pc=0,ga=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),$f=Xn(xo),C0=$({},xo,{dataTransfer:0}),b0=Xn(C0),P0=$({},ma,{relatedTarget:0}),gc=Xn(P0),L0=$({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=Xn(L0),D0=$({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I0=Xn(D0),U0=$({},fs,{data:0}),jf=Xn(U0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=k0[t])?!!i[t]:!1}function _c(){return B0}var z0=$({},ma,{key:function(t){if(t.key){var i=F0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=_o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(t){return t.type==="keypress"?_o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H0=Xn(z0),G0=$({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=Xn(G0),V0=$({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),W0=Xn(V0),X0=$({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=Xn(X0),Y0=$({},xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=Xn(Y0),j0=[9,13,27,32],vc=f&&"CompositionEvent"in window,_a=null;f&&"documentMode"in document&&(_a=document.documentMode);var K0=f&&"TextEvent"in window&&!_a,Zf=f&&(!vc||_a&&8<_a&&11>=_a),Jf=" ",Qf=!1;function eh(t,i){switch(t){case"keyup":return j0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function Z0(t,i){switch(t){case"compositionend":return th(i);case"keypress":return i.which!==32?null:(Qf=!0,Jf);case"textInput":return t=i.data,t===Jf&&Qf?null:t;default:return null}}function J0(t,i){if(hs)return t==="compositionend"||!vc&&eh(t,i)?(t=qf(),go=fc=cr=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zf&&i.locale!=="ko"?null:i.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Q0[t.type]:i==="textarea"}function ih(t,i,a,c){fe(c),i=wo(i,"onChange"),0<i.length&&(a=new hc("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var va=null,xa=null;function e_(t){yh(t,0)}function So(t){var i=vs(t);if(at(i))return t}function t_(t,i){if(t==="change")return i}var rh=!1;if(f){var xc;if(f){var Sc="oninput"in document;if(!Sc){var sh=document.createElement("div");sh.setAttribute("oninput","return;"),Sc=typeof sh.oninput=="function"}xc=Sc}else xc=!1;rh=xc&&(!document.documentMode||9<document.documentMode)}function ah(){va&&(va.detachEvent("onpropertychange",oh),xa=va=null)}function oh(t){if(t.propertyName==="value"&&So(xa)){var i=[];ih(i,xa,t,je(t)),We(e_,i)}}function n_(t,i,a){t==="focusin"?(ah(),va=i,xa=a,va.attachEvent("onpropertychange",oh)):t==="focusout"&&ah()}function i_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return So(xa)}function r_(t,i){if(t==="click")return So(i)}function s_(t,i){if(t==="input"||t==="change")return So(i)}function a_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var mi=typeof Object.is=="function"?Object.is:a_;function Sa(t,i){if(mi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!mi(t[d],i[d]))return!1}return!0}function lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ch(t,i){var a=lh(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lh(a)}}function uh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?uh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function dh(){for(var t=window,i=Ft();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Ft(t.document)}return i}function yc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function o_(t){var i=dh(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&uh(a.ownerDocument.documentElement,a)){if(c!==null&&yc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!t.extend&&m>c&&(d=c,c=m,m=d),d=ch(a,m);var T=ch(a,c);d&&T&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),m>c?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l_=f&&"documentMode"in document&&11>=document.documentMode,ps=null,Mc=null,ya=null,Ec=!1;function fh(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||ps==null||ps!==Ft(c)||(c=ps,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ya&&Sa(ya,c)||(ya=c,c=wo(Mc,"onSelect"),0<c.length&&(i=new hc("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=ps)))}function yo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ms={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},wc={},hh={};f&&(hh=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Mo(t){if(wc[t])return wc[t];if(!ms[t])return t;var i=ms[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in hh)return wc[t]=i[a];return t}var ph=Mo("animationend"),mh=Mo("animationiteration"),gh=Mo("animationstart"),_h=Mo("transitionend"),vh=new Map,xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,i){vh.set(t,i),l(i,[t])}for(var Tc=0;Tc<xh.length;Tc++){var Ac=xh[Tc],c_=Ac.toLowerCase(),u_=Ac[0].toUpperCase()+Ac.slice(1);ur(c_,"on"+u_)}ur(ph,"onAnimationEnd"),ur(mh,"onAnimationIteration"),ur(gh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(_h,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Sh(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,co(c,i,void 0,t),t.currentTarget=null}function yh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var U=c[T],z=U.instance,ue=U.currentTarget;if(U=U.listener,z!==m&&d.isPropagationStopped())break e;Sh(d,U,ue),m=z}else for(T=0;T<c.length;T++){if(U=c[T],z=U.instance,ue=U.currentTarget,U=U.listener,z!==m&&d.isPropagationStopped())break e;Sh(d,U,ue),m=z}}}if(Ir)throw t=Ur,Ir=!1,Ur=null,t}function Bt(t,i){var a=i[Ic];a===void 0&&(a=i[Ic]=new Set);var c=t+"__bubble";a.has(c)||(Mh(i,t,2,!1),a.add(c))}function Rc(t,i,a){var c=0;i&&(c|=4),Mh(a,t,c,i)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[Eo]){t[Eo]=!0,r.forEach(function(a){a!=="selectionchange"&&(d_.has(a)||Rc(a,!1,t),Rc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Eo]||(i[Eo]=!0,Rc("selectionchange",!1,i))}}function Mh(t,i,a,c){switch(Xf(i)){case 1:var d=T0;break;case 4:d=A0;break;default:d=uc}a=d.bind(null,i,a,t),d=void 0,!mt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function Cc(t,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;T=T.return}for(;U!==null;){if(T=kr(U),T===null)return;if(z=T.tag,z===5||z===6){c=m=T;continue e}U=U.parentNode}}c=c.return}We(function(){var ue=m,xe=je(a),Me=[];e:{var ve=vh.get(t);if(ve!==void 0){var Be=hc,$e=t;switch(t){case"keypress":if(_o(a)===0)break e;case"keydown":case"keyup":Be=H0;break;case"focusin":$e="focus",Be=gc;break;case"focusout":$e="blur",Be=gc;break;case"beforeblur":case"afterblur":Be=gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=W0;break;case ph:case mh:case gh:Be=N0;break;case _h:Be=q0;break;case"scroll":Be=R0;break;case"wheel":Be=$0;break;case"copy":case"cut":case"paste":Be=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Kf}var Ke=(i&4)!==0,nn=!Ke&&t==="scroll",re=Ke?ve!==null?ve+"Capture":null:ve;Ke=[];for(var W=ue,le;W!==null;){le=W;var Te=le.stateNode;if(le.tag===5&&Te!==null&&(le=Te,re!==null&&(Te=Tt(W,re),Te!=null&&Ke.push(wa(W,Te,le)))),nn)break;W=W.return}0<Ke.length&&(ve=new Be(ve,$e,null,a,xe),Me.push({event:ve,listeners:Ke}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",ve&&a!==Ce&&($e=a.relatedTarget||a.fromElement)&&(kr($e)||$e[Vi]))break e;if((Be||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Be?($e=a.relatedTarget||a.toElement,Be=ue,$e=$e?kr($e):null,$e!==null&&(nn=Ln($e),$e!==nn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Be=null,$e=ue),Be!==$e)){if(Ke=$f,Te="onMouseLeave",re="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Ke=Kf,Te="onPointerLeave",re="onPointerEnter",W="pointer"),nn=Be==null?ve:vs(Be),le=$e==null?ve:vs($e),ve=new Ke(Te,W+"leave",Be,a,xe),ve.target=nn,ve.relatedTarget=le,Te=null,kr(xe)===ue&&(Ke=new Ke(re,W+"enter",$e,a,xe),Ke.target=le,Ke.relatedTarget=nn,Te=Ke),nn=Te,Be&&$e)t:{for(Ke=Be,re=$e,W=0,le=Ke;le;le=gs(le))W++;for(le=0,Te=re;Te;Te=gs(Te))le++;for(;0<W-le;)Ke=gs(Ke),W--;for(;0<le-W;)re=gs(re),le--;for(;W--;){if(Ke===re||re!==null&&Ke===re.alternate)break t;Ke=gs(Ke),re=gs(re)}Ke=null}else Ke=null;Be!==null&&Eh(Me,ve,Be,Ke,!1),$e!==null&&nn!==null&&Eh(Me,nn,$e,Ke,!0)}}e:{if(ve=ue?vs(ue):window,Be=ve.nodeName&&ve.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ve.type==="file")var Qe=t_;else if(nh(ve))if(rh)Qe=s_;else{Qe=i_;var nt=n_}else(Be=ve.nodeName)&&Be.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Qe=r_);if(Qe&&(Qe=Qe(t,ue))){ih(Me,Qe,a,xe);break e}nt&&nt(t,ve,ue),t==="focusout"&&(nt=ve._wrapperState)&&nt.controlled&&ve.type==="number"&&Ht(ve,"number",ve.value)}switch(nt=ue?vs(ue):window,t){case"focusin":(nh(nt)||nt.contentEditable==="true")&&(ps=nt,Mc=ue,ya=null);break;case"focusout":ya=Mc=ps=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,fh(Me,a,xe);break;case"selectionchange":if(l_)break;case"keydown":case"keyup":fh(Me,a,xe)}var it;if(vc)e:{switch(t){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else hs?eh(t,a)&&(st="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(Zf&&a.locale!=="ko"&&(hs||st!=="onCompositionStart"?st==="onCompositionEnd"&&hs&&(it=qf()):(cr=xe,fc="value"in cr?cr.value:cr.textContent,hs=!0)),nt=wo(ue,st),0<nt.length&&(st=new jf(st,t,null,a,xe),Me.push({event:st,listeners:nt}),it?st.data=it:(it=th(a),it!==null&&(st.data=it)))),(it=K0?Z0(t,a):J0(t,a))&&(ue=wo(ue,"onBeforeInput"),0<ue.length&&(xe=new jf("onBeforeInput","beforeinput",null,a,xe),Me.push({event:xe,listeners:ue}),xe.data=it))}yh(Me,i)})}function wa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function wo(t,i){for(var a=i+"Capture",c=[];t!==null;){var d=t,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Tt(t,a),m!=null&&c.unshift(wa(t,m,d)),m=Tt(t,i),m!=null&&c.push(wa(t,m,d))),t=t.return}return c}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Eh(t,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var U=a,z=U.alternate,ue=U.stateNode;if(z!==null&&z===c)break;U.tag===5&&ue!==null&&(U=ue,d?(z=Tt(a,m),z!=null&&T.unshift(wa(a,z,U))):d||(z=Tt(a,m),z!=null&&T.push(wa(a,z,U)))),a=a.return}T.length!==0&&t.push({event:i,listeners:T})}var f_=/\r\n?/g,h_=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace(f_,`
`).replace(h_,"")}function To(t,i,a){if(i=wh(i),wh(t)!==i&&a)throw Error(n(425))}function Ao(){}var bc=null,Pc=null;function Lc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,p_=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,m_=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(t){return Th.resolve(null).then(t).catch(g_)}:Nc;function g_(t){setTimeout(function(){throw t})}function Dc(t,i){var a=i,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){t.removeChild(d),pa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);pa(i)}function dr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Ah(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var _s=Math.random().toString(36).slice(2),Ci="__reactFiber$"+_s,Ta="__reactProps$"+_s,Vi="__reactContainer$"+_s,Ic="__reactEvents$"+_s,__="__reactListeners$"+_s,v_="__reactHandles$"+_s;function kr(t){var i=t[Ci];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Vi]||a[Ci]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Ah(t);t!==null;){if(a=t[Ci])return a;t=Ah(t)}return i}t=a,a=t.parentNode}return null}function Aa(t){return t=t[Ci]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ro(t){return t[Ta]||null}var Uc=[],xs=-1;function fr(t){return{current:t}}function zt(t){0>xs||(t.current=Uc[xs],Uc[xs]=null,xs--)}function kt(t,i){xs++,Uc[xs]=t.current,t.current=i}var hr={},Mn=fr(hr),kn=fr(!1),Br=hr;function Ss(t,i){var a=t.type.contextTypes;if(!a)return hr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Bn(t){return t=t.childContextTypes,t!=null}function Co(){zt(kn),zt(Mn)}function Rh(t,i,a){if(Mn.current!==hr)throw Error(n(168));kt(Mn,i),kt(kn,a)}function Ch(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,oe(t)||"Unknown",d));return $({},a,c)}function bo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Br=Mn.current,kt(Mn,t),kt(kn,kn.current),!0}function bh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=Ch(t,i,Br),c.__reactInternalMemoizedMergedChildContext=t,zt(kn),zt(Mn),kt(Mn,t)):zt(kn),kt(kn,a)}var Wi=null,Po=!1,Fc=!1;function Ph(t){Wi===null?Wi=[t]:Wi.push(t)}function x_(t){Po=!0,Ph(t)}function pr(){if(!Fc&&Wi!==null){Fc=!0;var t=0,i=ft;try{var a=Wi;for(ft=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Wi=null,Po=!1}catch(d){throw Wi!==null&&(Wi=Wi.slice(t+1)),Or(la,pr),d}finally{ft=i,Fc=!1}}return null}var ys=[],Ms=0,Lo=null,No=0,ti=[],ni=0,zr=null,Xi=1,qi="";function Hr(t,i){ys[Ms++]=No,ys[Ms++]=Lo,Lo=t,No=i}function Lh(t,i,a){ti[ni++]=Xi,ti[ni++]=qi,ti[ni++]=zr,zr=t;var c=Xi;t=qi;var d=32-Ne(c)-1;c&=~(1<<d),a+=1;var m=32-Ne(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Xi=1<<32-Ne(i)+d|a<<d|c,qi=m+t}else Xi=1<<m|a<<d|c,qi=t}function Oc(t){t.return!==null&&(Hr(t,1),Lh(t,1,0))}function kc(t){for(;t===Lo;)Lo=ys[--Ms],ys[Ms]=null,No=ys[--Ms],ys[Ms]=null;for(;t===zr;)zr=ti[--ni],ti[ni]=null,qi=ti[--ni],ti[ni]=null,Xi=ti[--ni],ti[ni]=null}var qn=null,Yn=null,Vt=!1,gi=null;function Nh(t,i){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Dh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,qn=t,Yn=dr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,qn=t,Yn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=zr!==null?{id:Xi,overflow:qi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,qn=t,Yn=null,!0):!1;default:return!1}}function Bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zc(t){if(Vt){var i=Yn;if(i){var a=i;if(!Dh(t,i)){if(Bc(t))throw Error(n(418));i=dr(a.nextSibling);var c=qn;i&&Dh(t,i)?Nh(c,a):(t.flags=t.flags&-4097|2,Vt=!1,qn=t)}}else{if(Bc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,qn=t}}}function Ih(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qn=t}function Do(t){if(t!==qn)return!1;if(!Vt)return Ih(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Lc(t.type,t.memoizedProps)),i&&(i=Yn)){if(Bc(t))throw Uh(),Error(n(418));for(;i;)Nh(t,i),i=dr(i.nextSibling)}if(Ih(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Yn=dr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Yn=null}}else Yn=qn?dr(t.stateNode.nextSibling):null;return!0}function Uh(){for(var t=Yn;t;)t=dr(t.nextSibling)}function Es(){Yn=qn=null,Vt=!1}function Hc(t){gi===null?gi=[t]:gi.push(t)}var S_=C.ReactCurrentBatchConfig;function Ra(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var d=c,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var U=d.refs;T===null?delete U[m]:U[m]=T},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Io(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Fh(t){var i=t._init;return i(t._payload)}function Oh(t){function i(re,W){if(t){var le=re.deletions;le===null?(re.deletions=[W],re.flags|=16):le.push(W)}}function a(re,W){if(!t)return null;for(;W!==null;)i(re,W),W=W.sibling;return null}function c(re,W){for(re=new Map;W!==null;)W.key!==null?re.set(W.key,W):re.set(W.index,W),W=W.sibling;return re}function d(re,W){return re=Mr(re,W),re.index=0,re.sibling=null,re}function m(re,W,le){return re.index=le,t?(le=re.alternate,le!==null?(le=le.index,le<W?(re.flags|=2,W):le):(re.flags|=2,W)):(re.flags|=1048576,W)}function T(re){return t&&re.alternate===null&&(re.flags|=2),re}function U(re,W,le,Te){return W===null||W.tag!==6?(W=Nu(le,re.mode,Te),W.return=re,W):(W=d(W,le),W.return=re,W)}function z(re,W,le,Te){var Qe=le.type;return Qe===F?xe(re,W,le.props.children,Te,le.key):W!==null&&(W.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===pe&&Fh(Qe)===W.type)?(Te=d(W,le.props),Te.ref=Ra(re,W,le),Te.return=re,Te):(Te=rl(le.type,le.key,le.props,null,re.mode,Te),Te.ref=Ra(re,W,le),Te.return=re,Te)}function ue(re,W,le,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==le.containerInfo||W.stateNode.implementation!==le.implementation?(W=Du(le,re.mode,Te),W.return=re,W):(W=d(W,le.children||[]),W.return=re,W)}function xe(re,W,le,Te,Qe){return W===null||W.tag!==7?(W=jr(le,re.mode,Te,Qe),W.return=re,W):(W=d(W,le),W.return=re,W)}function Me(re,W,le){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Nu(""+W,re.mode,le),W.return=re,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case P:return le=rl(W.type,W.key,W.props,null,re.mode,le),le.ref=Ra(re,null,W),le.return=re,le;case b:return W=Du(W,re.mode,le),W.return=re,W;case pe:var Te=W._init;return Me(re,Te(W._payload),le)}if(Zt(W)||Y(W))return W=jr(W,re.mode,le,null),W.return=re,W;Io(re,W)}return null}function ve(re,W,le,Te){var Qe=W!==null?W.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return Qe!==null?null:U(re,W,""+le,Te);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case P:return le.key===Qe?z(re,W,le,Te):null;case b:return le.key===Qe?ue(re,W,le,Te):null;case pe:return Qe=le._init,ve(re,W,Qe(le._payload),Te)}if(Zt(le)||Y(le))return Qe!==null?null:xe(re,W,le,Te,null);Io(re,le)}return null}function Be(re,W,le,Te,Qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return re=re.get(le)||null,U(W,re,""+Te,Qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case P:return re=re.get(Te.key===null?le:Te.key)||null,z(W,re,Te,Qe);case b:return re=re.get(Te.key===null?le:Te.key)||null,ue(W,re,Te,Qe);case pe:var nt=Te._init;return Be(re,W,le,nt(Te._payload),Qe)}if(Zt(Te)||Y(Te))return re=re.get(le)||null,xe(W,re,Te,Qe,null);Io(W,Te)}return null}function $e(re,W,le,Te){for(var Qe=null,nt=null,it=W,st=W=0,pn=null;it!==null&&st<le.length;st++){it.index>st?(pn=it,it=null):pn=it.sibling;var Pt=ve(re,it,le[st],Te);if(Pt===null){it===null&&(it=pn);break}t&&it&&Pt.alternate===null&&i(re,it),W=m(Pt,W,st),nt===null?Qe=Pt:nt.sibling=Pt,nt=Pt,it=pn}if(st===le.length)return a(re,it),Vt&&Hr(re,st),Qe;if(it===null){for(;st<le.length;st++)it=Me(re,le[st],Te),it!==null&&(W=m(it,W,st),nt===null?Qe=it:nt.sibling=it,nt=it);return Vt&&Hr(re,st),Qe}for(it=c(re,it);st<le.length;st++)pn=Be(it,re,st,le[st],Te),pn!==null&&(t&&pn.alternate!==null&&it.delete(pn.key===null?st:pn.key),W=m(pn,W,st),nt===null?Qe=pn:nt.sibling=pn,nt=pn);return t&&it.forEach(function(Er){return i(re,Er)}),Vt&&Hr(re,st),Qe}function Ke(re,W,le,Te){var Qe=Y(le);if(typeof Qe!="function")throw Error(n(150));if(le=Qe.call(le),le==null)throw Error(n(151));for(var nt=Qe=null,it=W,st=W=0,pn=null,Pt=le.next();it!==null&&!Pt.done;st++,Pt=le.next()){it.index>st?(pn=it,it=null):pn=it.sibling;var Er=ve(re,it,Pt.value,Te);if(Er===null){it===null&&(it=pn);break}t&&it&&Er.alternate===null&&i(re,it),W=m(Er,W,st),nt===null?Qe=Er:nt.sibling=Er,nt=Er,it=pn}if(Pt.done)return a(re,it),Vt&&Hr(re,st),Qe;if(it===null){for(;!Pt.done;st++,Pt=le.next())Pt=Me(re,Pt.value,Te),Pt!==null&&(W=m(Pt,W,st),nt===null?Qe=Pt:nt.sibling=Pt,nt=Pt);return Vt&&Hr(re,st),Qe}for(it=c(re,it);!Pt.done;st++,Pt=le.next())Pt=Be(it,re,st,Pt.value,Te),Pt!==null&&(t&&Pt.alternate!==null&&it.delete(Pt.key===null?st:Pt.key),W=m(Pt,W,st),nt===null?Qe=Pt:nt.sibling=Pt,nt=Pt);return t&&it.forEach(function(Q_){return i(re,Q_)}),Vt&&Hr(re,st),Qe}function nn(re,W,le,Te){if(typeof le=="object"&&le!==null&&le.type===F&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case P:e:{for(var Qe=le.key,nt=W;nt!==null;){if(nt.key===Qe){if(Qe=le.type,Qe===F){if(nt.tag===7){a(re,nt.sibling),W=d(nt,le.props.children),W.return=re,re=W;break e}}else if(nt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===pe&&Fh(Qe)===nt.type){a(re,nt.sibling),W=d(nt,le.props),W.ref=Ra(re,nt,le),W.return=re,re=W;break e}a(re,nt);break}else i(re,nt);nt=nt.sibling}le.type===F?(W=jr(le.props.children,re.mode,Te,le.key),W.return=re,re=W):(Te=rl(le.type,le.key,le.props,null,re.mode,Te),Te.ref=Ra(re,W,le),Te.return=re,re=Te)}return T(re);case b:e:{for(nt=le.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===le.containerInfo&&W.stateNode.implementation===le.implementation){a(re,W.sibling),W=d(W,le.children||[]),W.return=re,re=W;break e}else{a(re,W);break}else i(re,W);W=W.sibling}W=Du(le,re.mode,Te),W.return=re,re=W}return T(re);case pe:return nt=le._init,nn(re,W,nt(le._payload),Te)}if(Zt(le))return $e(re,W,le,Te);if(Y(le))return Ke(re,W,le,Te);Io(re,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,W!==null&&W.tag===6?(a(re,W.sibling),W=d(W,le),W.return=re,re=W):(a(re,W),W=Nu(le,re.mode,Te),W.return=re,re=W),T(re)):a(re,W)}return nn}var ws=Oh(!0),kh=Oh(!1),Uo=fr(null),Fo=null,Ts=null,Gc=null;function Vc(){Gc=Ts=Fo=null}function Wc(t){var i=Uo.current;zt(Uo),t._currentValue=i}function Xc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function As(t,i){Fo=t,Gc=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(zn=!0),t.firstContext=null)}function ii(t){var i=t._currentValue;if(Gc!==t)if(t={context:t,memoizedValue:i,next:null},Ts===null){if(Fo===null)throw Error(n(308));Ts=t,Fo.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return i}var Gr=null;function qc(t){Gr===null?Gr=[t]:Gr.push(t)}function Bh(t,i,a,c){var d=i.interleaved;return d===null?(a.next=a,qc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Yi(t,c)}function Yi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var mr=!1;function Yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $i(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function gr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Rt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Yi(t,a)}return d=c.interleaved,d===null?(i.next=i,qc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Yi(t,a)}function Oo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,yn(t,a)}}function Hh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function ko(t,i,a,c){var d=t.updateQueue;mr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var z=U,ue=z.next;z.next=null,T===null?m=ue:T.next=ue,T=z;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==T&&(U===null?xe.firstBaseUpdate=ue:U.next=ue,xe.lastBaseUpdate=z))}if(m!==null){var Me=d.baseState;T=0,xe=ue=z=null,U=m;do{var ve=U.lane,Be=U.eventTime;if((c&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Be,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var $e=t,Ke=U;switch(ve=i,Be=a,Ke.tag){case 1:if($e=Ke.payload,typeof $e=="function"){Me=$e.call(Be,Me,ve);break e}Me=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ke.payload,ve=typeof $e=="function"?$e.call(Be,Me,ve):$e,ve==null)break e;Me=$({},Me,ve);break e;case 2:mr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ve=d.effects,ve===null?d.effects=[U]:ve.push(U))}else Be={eventTime:Be,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(ue=xe=Be,z=Me):xe=xe.next=Be,T|=ve;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(z=Me),d.baseState=z,d.firstBaseUpdate=ue,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Xr|=T,t.lanes=T,t.memoizedState=Me}}function Gh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Ca={},bi=fr(Ca),ba=fr(Ca),Pa=fr(Ca);function Vr(t){if(t===Ca)throw Error(n(174));return t}function $c(t,i){switch(kt(Pa,i),kt(ba,t),kt(bi,Ca),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=M(i,t)}zt(bi),kt(bi,i)}function Rs(){zt(bi),zt(ba),zt(Pa)}function Vh(t){Vr(Pa.current);var i=Vr(bi.current),a=M(i,t.type);i!==a&&(kt(ba,t),kt(bi,a))}function jc(t){ba.current===t&&(zt(bi),zt(ba))}var Yt=fr(0);function Bo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kc=[];function Zc(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var zo=C.ReactCurrentDispatcher,Jc=C.ReactCurrentBatchConfig,Wr=0,$t=null,ln=null,fn=null,Ho=!1,La=!1,Na=0,y_=0;function En(){throw Error(n(321))}function Qc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!mi(t[a],i[a]))return!1;return!0}function eu(t,i,a,c,d,m){if(Wr=m,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,zo.current=t===null||t.memoizedState===null?T_:A_,t=a(c,d),La){m=0;do{if(La=!1,Na=0,25<=m)throw Error(n(301));m+=1,fn=ln=null,i.updateQueue=null,zo.current=R_,t=a(c,d)}while(La)}if(zo.current=Wo,i=ln!==null&&ln.next!==null,Wr=0,fn=ln=$t=null,Ho=!1,i)throw Error(n(300));return t}function tu(){var t=Na!==0;return Na=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?$t.memoizedState=fn=t:fn=fn.next=t,fn}function ri(){if(ln===null){var t=$t.alternate;t=t!==null?t.memoizedState:null}else t=ln.next;var i=fn===null?$t.memoizedState:fn.next;if(i!==null)fn=i,ln=t;else{if(t===null)throw Error(n(310));ln=t,t={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},fn===null?$t.memoizedState=fn=t:fn=fn.next=t}return fn}function Da(t,i){return typeof i=="function"?i(t):i}function nu(t){var i=ri(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=ln,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var U=T=null,z=null,ue=m;do{var xe=ue.lane;if((Wr&xe)===xe)z!==null&&(z=z.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:t(c,ue.action);else{var Me={lane:xe,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};z===null?(U=z=Me,T=c):z=z.next=Me,$t.lanes|=xe,Xr|=xe}ue=ue.next}while(ue!==null&&ue!==m);z===null?T=c:z.next=U,mi(c,i.memoizedState)||(zn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=z,a.lastRenderedState=c}if(t=a.interleaved,t!==null){d=t;do m=d.lane,$t.lanes|=m,Xr|=m,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function iu(t){var i=ri(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=t(m,T.action),T=T.next;while(T!==d);mi(m,i.memoizedState)||(zn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Wh(){}function Xh(t,i){var a=$t,c=ri(),d=i(),m=!mi(c.memoizedState,d);if(m&&(c.memoizedState=d,zn=!0),c=c.queue,ru($h.bind(null,a,c,t),[t]),c.getSnapshot!==i||m||fn!==null&&fn.memoizedState.tag&1){if(a.flags|=2048,Ia(9,Yh.bind(null,a,c,d,i),void 0,null),hn===null)throw Error(n(349));(Wr&30)!==0||qh(a,i,d)}return d}function qh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Yh(t,i,a,c){i.value=a,i.getSnapshot=c,jh(i)&&Kh(t)}function $h(t,i,a){return a(function(){jh(i)&&Kh(t)})}function jh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!mi(t,a)}catch{return!0}}function Kh(t){var i=Yi(t,1);i!==null&&Si(i,t,1,-1)}function Zh(t){var i=Pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},i.queue=t,t=t.dispatch=w_.bind(null,$t,t),[i.memoizedState,t]}function Ia(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Jh(){return ri().memoizedState}function Go(t,i,a,c){var d=Pi();$t.flags|=t,d.memoizedState=Ia(1|i,a,void 0,c===void 0?null:c)}function Vo(t,i,a,c){var d=ri();c=c===void 0?null:c;var m=void 0;if(ln!==null){var T=ln.memoizedState;if(m=T.destroy,c!==null&&Qc(c,T.deps)){d.memoizedState=Ia(i,a,m,c);return}}$t.flags|=t,d.memoizedState=Ia(1|i,a,m,c)}function Qh(t,i){return Go(8390656,8,t,i)}function ru(t,i){return Vo(2048,8,t,i)}function ep(t,i){return Vo(4,2,t,i)}function tp(t,i){return Vo(4,4,t,i)}function np(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ip(t,i,a){return a=a!=null?a.concat([t]):null,Vo(4,4,np.bind(null,i,t),a)}function su(){}function rp(t,i){var a=ri();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function sp(t,i){var a=ri();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function ap(t,i,a){return(Wr&21)===0?(t.baseState&&(t.baseState=!1,zn=!0),t.memoizedState=a):(mi(a,i)||(a=on(),$t.lanes|=a,Xr|=a,t.baseState=!0),i)}function M_(t,i){var a=ft;ft=a!==0&&4>a?a:4,t(!0);var c=Jc.transition;Jc.transition={};try{t(!1),i()}finally{ft=a,Jc.transition=c}}function op(){return ri().memoizedState}function E_(t,i,a){var c=Sr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},lp(t))cp(i,a);else if(a=Bh(t,i,a,c),a!==null){var d=Dn();Si(a,t,c,d),up(a,i,c)}}function w_(t,i,a){var c=Sr(t),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(lp(t))cp(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,U=m(T,a);if(d.hasEagerState=!0,d.eagerState=U,mi(U,T)){var z=i.interleaved;z===null?(d.next=d,qc(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}a=Bh(t,i,d,c),a!==null&&(d=Dn(),Si(a,t,c,d),up(a,i,c))}}function lp(t){var i=t.alternate;return t===$t||i!==null&&i===$t}function cp(t,i){La=Ho=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function up(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,yn(t,a)}}var Wo={readContext:ii,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},T_={readContext:ii,useCallback:function(t,i){return Pi().memoizedState=[t,i===void 0?null:i],t},useContext:ii,useEffect:Qh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Go(4194308,4,np.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Go(4194308,4,t,i)},useInsertionEffect:function(t,i){return Go(4,2,t,i)},useMemo:function(t,i){var a=Pi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Pi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=E_.bind(null,$t,t),[c.memoizedState,t]},useRef:function(t){var i=Pi();return t={current:t},i.memoizedState=t},useState:Zh,useDebugValue:su,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=Zh(!1),i=t[0];return t=M_.bind(null,t[1]),Pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=$t,d=Pi();if(Vt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),hn===null)throw Error(n(349));(Wr&30)!==0||qh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Qh($h.bind(null,c,m,t),[t]),c.flags|=2048,Ia(9,Yh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var t=Pi(),i=hn.identifierPrefix;if(Vt){var a=qi,c=Xi;a=(c&~(1<<32-Ne(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Na++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=y_++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},A_={readContext:ii,useCallback:rp,useContext:ii,useEffect:ru,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:nu,useRef:Jh,useState:function(){return nu(Da)},useDebugValue:su,useDeferredValue:function(t){var i=ri();return ap(i,ln.memoizedState,t)},useTransition:function(){var t=nu(Da)[0],i=ri().memoizedState;return[t,i]},useMutableSource:Wh,useSyncExternalStore:Xh,useId:op,unstable_isNewReconciler:!1},R_={readContext:ii,useCallback:rp,useContext:ii,useEffect:ru,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:iu,useRef:Jh,useState:function(){return iu(Da)},useDebugValue:su,useDeferredValue:function(t){var i=ri();return ln===null?i.memoizedState=t:ap(i,ln.memoizedState,t)},useTransition:function(){var t=iu(Da)[0],i=ri().memoizedState;return[t,i]},useMutableSource:Wh,useSyncExternalStore:Xh,useId:op,unstable_isNewReconciler:!1};function _i(t,i){if(t&&t.defaultProps){i=$({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function au(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:$({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xo={isMounted:function(t){return(t=t._reactInternals)?Ln(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=Dn(),d=Sr(t),m=$i(c,d);m.payload=i,a!=null&&(m.callback=a),i=gr(t,m,d),i!==null&&(Si(i,t,d,c),Oo(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=Dn(),d=Sr(t),m=$i(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=gr(t,m,d),i!==null&&(Si(i,t,d,c),Oo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Dn(),c=Sr(t),d=$i(a,c);d.tag=2,i!=null&&(d.callback=i),i=gr(t,d,c),i!==null&&(Si(i,t,c,a),Oo(i,t,c))}};function dp(t,i,a,c,d,m,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Sa(a,c)||!Sa(d,m):!0}function fp(t,i,a){var c=!1,d=hr,m=i.contextType;return typeof m=="object"&&m!==null?m=ii(m):(d=Bn(i)?Br:Mn.current,c=i.contextTypes,m=(c=c!=null)?Ss(t,d):hr),i=new i(a,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=m),i}function hp(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Xo.enqueueReplaceState(i,i.state,null)}function ou(t,i,a,c){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Yc(t);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ii(m):(m=Bn(i)?Br:Mn.current,d.context=Ss(t,m)),d.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(au(t,i,m,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Xo.enqueueReplaceState(d,d.state,null),ko(t,a,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,i){try{var a="",c=i;do a+=ze(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:d,digest:null}}function lu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function cu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var C_=typeof WeakMap=="function"?WeakMap:Map;function pp(t,i,a){a=$i(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Jo||(Jo=!0,wu=c),cu(t,i)},a}function mp(t,i,a){a=$i(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){cu(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){cu(t,i),typeof c!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function gp(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new C_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),t=G_.bind(null,t,i,a),i.then(t,t))}function _p(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function vp(t,i,a,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=$i(-1,1),i.tag=2,gr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var b_=C.ReactCurrentOwner,zn=!1;function Nn(t,i,a,c){i.child=t===null?kh(i,null,a,c):ws(i,t.child,a,c)}function xp(t,i,a,c,d){a=a.render;var m=i.ref;return As(i,d),c=eu(t,i,a,c,m,d),a=tu(),t!==null&&!zn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ji(t,i,d)):(Vt&&a&&Oc(i),i.flags|=1,Nn(t,i,c,d),i.child)}function Sp(t,i,a,c,d){if(t===null){var m=a.type;return typeof m=="function"&&!Lu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,yp(t,i,m,c,d)):(t=rl(a.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Sa,a(T,c)&&t.ref===i.ref)return ji(t,i,d)}return i.flags|=1,t=Mr(m,c),t.ref=i.ref,t.return=i,i.child=t}function yp(t,i,a,c,d){if(t!==null){var m=t.memoizedProps;if(Sa(m,c)&&t.ref===i.ref)if(zn=!1,i.pendingProps=c=m,(t.lanes&d)!==0)(t.flags&131072)!==0&&(zn=!0);else return i.lanes=t.lanes,ji(t,i,d)}return uu(t,i,a,c,d)}function Mp(t,i,a){var c=i.pendingProps,d=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ps,$n),$n|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,kt(Ps,$n),$n|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,kt(Ps,$n),$n|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,kt(Ps,$n),$n|=c;return Nn(t,i,d,a),i.child}function Ep(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function uu(t,i,a,c,d){var m=Bn(a)?Br:Mn.current;return m=Ss(i,m),As(i,d),a=eu(t,i,a,c,m,d),c=tu(),t!==null&&!zn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ji(t,i,d)):(Vt&&c&&Oc(i),i.flags|=1,Nn(t,i,a,d),i.child)}function wp(t,i,a,c,d){if(Bn(a)){var m=!0;bo(i)}else m=!1;if(As(i,d),i.stateNode===null)Yo(t,i),fp(i,a,c),ou(i,a,c,d),c=!0;else if(t===null){var T=i.stateNode,U=i.memoizedProps;T.props=U;var z=T.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ii(ue):(ue=Bn(a)?Br:Mn.current,ue=Ss(i,ue));var xe=a.getDerivedStateFromProps,Me=typeof xe=="function"||typeof T.getSnapshotBeforeUpdate=="function";Me||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==c||z!==ue)&&hp(i,T,c,ue),mr=!1;var ve=i.memoizedState;T.state=ve,ko(i,c,T,d),z=i.memoizedState,U!==c||ve!==z||kn.current||mr?(typeof xe=="function"&&(au(i,a,xe,c),z=i.memoizedState),(U=mr||dp(i,a,U,c,ve,z,ue))?(Me||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),T.props=c,T.state=z,T.context=ue,c=U):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,zh(t,i),U=i.memoizedProps,ue=i.type===i.elementType?U:_i(i.type,U),T.props=ue,Me=i.pendingProps,ve=T.context,z=a.contextType,typeof z=="object"&&z!==null?z=ii(z):(z=Bn(a)?Br:Mn.current,z=Ss(i,z));var Be=a.getDerivedStateFromProps;(xe=typeof Be=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==Me||ve!==z)&&hp(i,T,c,z),mr=!1,ve=i.memoizedState,T.state=ve,ko(i,c,T,d);var $e=i.memoizedState;U!==Me||ve!==$e||kn.current||mr?(typeof Be=="function"&&(au(i,a,Be,c),$e=i.memoizedState),(ue=mr||dp(i,a,ue,c,ve,$e,z)||!1)?(xe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,$e,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,$e,z)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=$e),T.props=c,T.state=$e,T.context=z,c=ue):(typeof T.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),c=!1)}return du(t,i,a,c,m,d)}function du(t,i,a,c,d,m){Ep(t,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&bh(i,a,!1),ji(t,i,m);c=i.stateNode,b_.current=i;var U=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&T?(i.child=ws(i,t.child,null,m),i.child=ws(i,null,U,m)):Nn(t,i,U,m),i.memoizedState=c.state,d&&bh(i,a,!0),i.child}function Tp(t){var i=t.stateNode;i.pendingContext?Rh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Rh(t,i.context,!1),$c(t,i.containerInfo)}function Ap(t,i,a,c,d){return Es(),Hc(d),i.flags|=256,Nn(t,i,a,c),i.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rp(t,i,a){var c=i.pendingProps,d=Yt.current,m=!1,T=(i.flags&128)!==0,U;if((U=T)||(U=t!==null&&t.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),kt(Yt,d&1),t===null)return zc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,t=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=sl(T,c,0,null),t=jr(t,c,a,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=hu(a),i.memoizedState=fu,t):pu(i,T));if(d=t.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return P_(t,i,T,c,U,d,a);if(m){m=c.fallback,T=i.mode,d=t.child,U=d.sibling;var z={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=Mr(d,z),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=Mr(U,m):(m=jr(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=t.child.memoizedState,T=T===null?hu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=t.childLanes&~a,i.memoizedState=fu,c}return m=t.child,t=m.sibling,c=Mr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function pu(t,i){return i=sl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function qo(t,i,a,c){return c!==null&&Hc(c),ws(i,t.child,null,a),t=pu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function P_(t,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=lu(Error(n(422))),qo(t,i,T,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=sl({mode:"visible",children:c.children},d,0,null),m=jr(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ws(i,t.child,null,T),i.child.memoizedState=hu(T),i.memoizedState=fu,m);if((i.mode&1)===0)return qo(t,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,m=Error(n(419)),c=lu(m,c,void 0),qo(t,i,T,c)}if(U=(T&t.childLanes)!==0,zn||U){if(c=hn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Yi(t,d),Si(c,t,d,-1))}return Pu(),c=lu(Error(n(421))),qo(t,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=V_.bind(null,t),d._reactRetry=i,null):(t=m.treeContext,Yn=dr(d.nextSibling),qn=i,Vt=!0,gi=null,t!==null&&(ti[ni++]=Xi,ti[ni++]=qi,ti[ni++]=zr,Xi=t.id,qi=t.overflow,zr=i),i=pu(i,c.children),i.flags|=4096,i)}function Cp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Xc(t.return,i,a)}function mu(t,i,a,c,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function bp(t,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Nn(t,i,c.children,a),c=Yt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cp(t,a,i);else if(t.tag===19)Cp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(kt(Yt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Bo(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),mu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Bo(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}mu(i,!0,a,null,m);break;case"together":mu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function ji(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Xr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Mr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Mr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function L_(t,i,a){switch(i.tag){case 3:Tp(i),Es();break;case 5:Vh(i);break;case 1:Bn(i.type)&&bo(i);break;case 4:$c(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(Uo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Yt,Yt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Rp(t,i,a):(kt(Yt,Yt.current&1),t=ji(t,i,a),t!==null?t.sibling:null);kt(Yt,Yt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return bp(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Yt,Yt.current),c)break;return null;case 22:case 23:return i.lanes=0,Mp(t,i,a)}return ji(t,i,a)}var Pp,gu,Lp,Np;Pp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gu=function(){},Lp=function(t,i,a,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,Vr(bi.current);var m=null;switch(a){case"input":d=ct(t,d),c=ct(t,c),m=[];break;case"select":d=$({},d,{value:void 0}),c=$({},c,{value:void 0}),m=[];break;case"textarea":d=Ot(t,d),c=Ot(t,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Ao)}qe(a,c);var T;a=null;for(ue in d)if(!c.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var U=d[ue];for(T in U)U.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in c){var z=c[ue];if(U=d!=null?d[ue]:void 0,c.hasOwnProperty(ue)&&z!==U&&(z!=null||U!=null))if(ue==="style")if(U){for(T in U)!U.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in z)z.hasOwnProperty(T)&&U[T]!==z[T]&&(a||(a={}),a[T]=z[T])}else a||(m||(m=[]),m.push(ue,a)),a=z;else ue==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(m=m||[]).push(ue,z)):ue==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(ue,""+z):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(z!=null&&ue==="onScroll"&&Bt("scroll",t),m||U===z||(m=[])):(m=m||[]).push(ue,z))}a&&(m=m||[]).push("style",a);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},Np=function(t,i,a,c){a!==c&&(i.flags|=4)};function Ua(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function wn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function N_(t,i,a){var c=i.pendingProps;switch(kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return Bn(i.type)&&Co(),wn(i),null;case 3:return c=i.stateNode,Rs(),zt(kn),zt(Mn),Zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Do(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gi!==null&&(Ru(gi),gi=null))),gu(t,i),wn(i),null;case 5:jc(i);var d=Vr(Pa.current);if(a=i.type,t!==null&&i.stateNode!=null)Lp(t,i,a,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return wn(i),null}if(t=Vr(bi.current),Do(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ci]=i,c[Ta]=m,t=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(d=0;d<Ma.length;d++)Bt(Ma[d],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":_t(c,m),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Bt("invalid",c);break;case"textarea":V(c,m),Bt("invalid",c)}qe(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var U=m[T];T==="children"?typeof U=="string"?c.textContent!==U&&(m.suppressHydrationWarning!==!0&&To(c.textContent,U,t),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&To(c.textContent,U,t),d=["children",""+U]):o.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Bt("scroll",c)}switch(a){case"input":Fe(c),wt(c,m,!0);break;case"textarea":Fe(c),St(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ao)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=T.createElement(a,{is:c.is}):(t=T.createElement(a),a==="select"&&(T=t,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):t=T.createElementNS(t,a),t[Ci]=i,t[Ta]=c,Pp(t,i,!1,!1),i.stateNode=t;e:{switch(T=Pe(a,c),a){case"dialog":Bt("cancel",t),Bt("close",t),d=c;break;case"iframe":case"object":case"embed":Bt("load",t),d=c;break;case"video":case"audio":for(d=0;d<Ma.length;d++)Bt(Ma[d],t);d=c;break;case"source":Bt("error",t),d=c;break;case"img":case"image":case"link":Bt("error",t),Bt("load",t),d=c;break;case"details":Bt("toggle",t),d=c;break;case"input":_t(t,c),d=ct(t,c),Bt("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=$({},c,{value:void 0}),Bt("invalid",t);break;case"textarea":V(t,c),d=Ot(t,c),Bt("invalid",t);break;default:d=c}qe(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var z=U[m];m==="style"?ge(t,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ae(t,z)):m==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&he(t,z):typeof z=="number"&&he(t,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?z!=null&&m==="onScroll"&&Bt("scroll",t):z!=null&&B(t,m,z,T))}switch(a){case"input":Fe(t),wt(t,c,!1);break;case"textarea":Fe(t),St(t);break;case"option":c.value!=null&&t.setAttribute("value",""+de(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?At(t,!!c.multiple,m,!1):c.defaultValue!=null&&At(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Ao)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(t&&i.stateNode!=null)Np(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Vr(Pa.current),Vr(bi.current),Do(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ci]=i,(m=c.nodeValue!==a)&&(t=qn,t!==null))switch(t.tag){case 3:To(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&To(c.nodeValue,a,(t.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ci]=i,i.stateNode=c}return wn(i),null;case 13:if(zt(Yt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Yn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Uh(),Es(),i.flags|=98560,m=!1;else if(m=Do(i),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[Ci]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),m=!1}else gi!==null&&(Ru(gi),gi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Yt.current&1)!==0?cn===0&&(cn=3):Pu())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return Rs(),gu(t,i),t===null&&Ea(i.stateNode.containerInfo),wn(i),null;case 10:return Wc(i.type._context),wn(i),null;case 17:return Bn(i.type)&&Co(),wn(i),null;case 19:if(zt(Yt),m=i.memoizedState,m===null)return wn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Ua(m,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Bo(t),T!==null){for(i.flags|=128,Ua(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,t=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,t=T.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return kt(Yt,Yt.current&1|2),i.child}t=t.sibling}m.tail!==null&&qt()>Ls&&(i.flags|=128,c=!0,Ua(m,!1),i.lanes=4194304)}else{if(!c)if(t=Bo(T),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ua(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Vt)return wn(i),null}else 2*qt()-m.renderingStartTime>Ls&&a!==1073741824&&(i.flags|=128,c=!0,Ua(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qt(),i.sibling=null,a=Yt.current,kt(Yt,c?a&1|2:a&1),i):(wn(i),null);case 22:case 23:return bu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?($n&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function D_(t,i){switch(kc(i),i.tag){case 1:return Bn(i.type)&&Co(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Rs(),zt(kn),zt(Mn),Zc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return jc(i),null;case 13:if(zt(Yt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Es()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return zt(Yt),null;case 4:return Rs(),null;case 10:return Wc(i.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var $o=!1,Tn=!1,I_=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function bs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Qt(t,i,c)}else a.current=null}function _u(t,i,a){try{a()}catch(c){Qt(t,i,c)}}var Dp=!1;function U_(t,i){if(bc=po,t=dh(),yc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,U=-1,z=-1,ue=0,xe=0,Me=t,ve=null;t:for(;;){for(var Be;Me!==a||d!==0&&Me.nodeType!==3||(U=T+d),Me!==m||c!==0&&Me.nodeType!==3||(z=T+c),Me.nodeType===3&&(T+=Me.nodeValue.length),(Be=Me.firstChild)!==null;)ve=Me,Me=Be;for(;;){if(Me===t)break t;if(ve===a&&++ue===d&&(U=T),ve===m&&++xe===c&&(z=T),(Be=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Be}a=U===-1||z===-1?null:{start:U,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:t,selectionRange:a},po=!1,Xe=i;Xe!==null;)if(i=Xe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Xe=t;else for(;Xe!==null;){i=Xe;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ke=$e.memoizedProps,nn=$e.memoizedState,re=i.stateNode,W=re.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:_i(i.type,Ke),nn);re.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var le=i.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Qt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Xe=t;break}Xe=i.return}return $e=Dp,Dp=!1,$e}function Fa(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var m=d.destroy;d.destroy=void 0,m!==void 0&&_u(i,a,m)}d=d.next}while(d!==c)}}function jo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function vu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Ip(t){var i=t.alternate;i!==null&&(t.alternate=null,Ip(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ci],delete i[Ta],delete i[Ic],delete i[__],delete i[v_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Up(t){return t.tag===5||t.tag===3||t.tag===4}function Fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Up(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ao));else if(c!==4&&(t=t.child,t!==null))for(xu(t,i,a),t=t.sibling;t!==null;)xu(t,i,a),t=t.sibling}function Su(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Su(t,i,a),t=t.sibling;t!==null;)Su(t,i,a),t=t.sibling}var vn=null,vi=!1;function _r(t,i,a){for(a=a.child;a!==null;)Op(t,i,a),a=a.sibling}function Op(t,i,a){if(J&&typeof J.onCommitFiberUnmount=="function")try{J.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 5:Tn||bs(a,i);case 6:var c=vn,d=vi;vn=null,_r(t,i,a),vn=c,vi=d,vn!==null&&(vi?(t=vn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(vi?(t=vn,a=a.stateNode,t.nodeType===8?Dc(t.parentNode,a):t.nodeType===1&&Dc(t,a),pa(t)):Dc(vn,a.stateNode));break;case 4:c=vn,d=vi,vn=a.stateNode.containerInfo,vi=!0,_r(t,i,a),vn=c,vi=d;break;case 0:case 11:case 14:case 15:if(!Tn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&_u(a,i,T),d=d.next}while(d!==c)}_r(t,i,a);break;case 1:if(!Tn&&(bs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Qt(a,i,U)}_r(t,i,a);break;case 21:_r(t,i,a);break;case 22:a.mode&1?(Tn=(c=Tn)||a.memoizedState!==null,_r(t,i,a),Tn=c):_r(t,i,a);break;default:_r(t,i,a)}}function kp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new I_),i.forEach(function(c){var d=W_.bind(null,t,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xi(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=t,T=i,U=T;e:for(;U!==null;){switch(U.tag){case 5:vn=U.stateNode,vi=!1;break e;case 3:vn=U.stateNode.containerInfo,vi=!0;break e;case 4:vn=U.stateNode.containerInfo,vi=!0;break e}U=U.return}if(vn===null)throw Error(n(160));Op(m,T,d),vn=null,vi=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ue){Qt(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Bp(i,t),i=i.sibling}function Bp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xi(i,t),Li(t),c&4){try{Fa(3,t,t.return),jo(3,t)}catch(Ke){Qt(t,t.return,Ke)}try{Fa(5,t,t.return)}catch(Ke){Qt(t,t.return,Ke)}}break;case 1:xi(i,t),Li(t),c&512&&a!==null&&bs(a,a.return);break;case 5:if(xi(i,t),Li(t),c&512&&a!==null&&bs(a,a.return),t.flags&32){var d=t.stateNode;try{he(d,"")}catch(Ke){Qt(t,t.return,Ke)}}if(c&4&&(d=t.stateNode,d!=null)){var m=t.memoizedProps,T=a!==null?a.memoizedProps:m,U=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&Ct(d,m),Pe(U,T);var ue=Pe(U,m);for(T=0;T<z.length;T+=2){var xe=z[T],Me=z[T+1];xe==="style"?ge(d,Me):xe==="dangerouslySetInnerHTML"?ae(d,Me):xe==="children"?he(d,Me):B(d,xe,Me,ue)}switch(U){case"input":ut(d,m);break;case"textarea":en(d,m);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Be=m.value;Be!=null?At(d,!!m.multiple,Be,!1):ve!==!!m.multiple&&(m.defaultValue!=null?At(d,!!m.multiple,m.defaultValue,!0):At(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ta]=m}catch(Ke){Qt(t,t.return,Ke)}}break;case 6:if(xi(i,t),Li(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,m=t.memoizedProps;try{d.nodeValue=m}catch(Ke){Qt(t,t.return,Ke)}}break;case 3:if(xi(i,t),Li(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{pa(i.containerInfo)}catch(Ke){Qt(t,t.return,Ke)}break;case 4:xi(i,t),Li(t);break;case 13:xi(i,t),Li(t),d=t.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Eu=qt())),c&4&&kp(t);break;case 22:if(xe=a!==null&&a.memoizedState!==null,t.mode&1?(Tn=(ue=Tn)||xe,xi(i,t),Tn=ue):xi(i,t),Li(t),c&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!xe&&(t.mode&1)!==0)for(Xe=t,xe=t.child;xe!==null;){for(Me=Xe=xe;Xe!==null;){switch(ve=Xe,Be=ve.child,ve.tag){case 0:case 11:case 14:case 15:Fa(4,ve,ve.return);break;case 1:bs(ve,ve.return);var $e=ve.stateNode;if(typeof $e.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Ke){Qt(c,a,Ke)}}break;case 5:bs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Gp(Me);continue}}Be!==null?(Be.return=ve,Xe=Be):Gp(Me)}xe=xe.sibling}e:for(xe=null,Me=t;;){if(Me.tag===5){if(xe===null){xe=Me;try{d=Me.stateNode,ue?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=Me.stateNode,z=Me.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=me("display",T))}catch(Ke){Qt(t,t.return,Ke)}}}else if(Me.tag===6){if(xe===null)try{Me.stateNode.nodeValue=ue?"":Me.memoizedProps}catch(Ke){Qt(t,t.return,Ke)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;xe===Me&&(xe=null),Me=Me.return}xe===Me&&(xe=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:xi(i,t),Li(t),c&4&&kp(t);break;case 21:break;default:xi(i,t),Li(t)}}function Li(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Up(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(he(d,""),c.flags&=-33);var m=Fp(t);Su(t,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,U=Fp(t);xu(t,U,T);break;default:throw Error(n(161))}}catch(z){Qt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function F_(t,i,a){Xe=t,zp(t)}function zp(t,i,a){for(var c=(t.mode&1)!==0;Xe!==null;){var d=Xe,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||$o;if(!T){var U=d.alternate,z=U!==null&&U.memoizedState!==null||Tn;U=$o;var ue=Tn;if($o=T,(Tn=z)&&!ue)for(Xe=d;Xe!==null;)T=Xe,z=T.child,T.tag===22&&T.memoizedState!==null?Vp(d):z!==null?(z.return=T,Xe=z):Vp(d);for(;m!==null;)Xe=m,zp(m),m=m.sibling;Xe=d,$o=U,Tn=ue}Hp(t)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Xe=m):Hp(t)}}function Hp(t){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Tn||jo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Tn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:_i(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Gh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Gh(i,T,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var xe=ue.memoizedState;if(xe!==null){var Me=xe.dehydrated;Me!==null&&pa(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Tn||i.flags&512&&vu(i)}catch(ve){Qt(i,i.return,ve)}}if(i===t){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Gp(t){for(;Xe!==null;){var i=Xe;if(i===t){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Vp(t){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{jo(4,i)}catch(z){Qt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(z){Qt(i,d,z)}}var m=i.return;try{vu(i)}catch(z){Qt(i,m,z)}break;case 5:var T=i.return;try{vu(i)}catch(z){Qt(i,T,z)}}}catch(z){Qt(i,i.return,z)}if(i===t){Xe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Xe=U;break}Xe=i.return}}var O_=Math.ceil,Ko=C.ReactCurrentDispatcher,yu=C.ReactCurrentOwner,si=C.ReactCurrentBatchConfig,Rt=0,hn=null,rn=null,xn=0,$n=0,Ps=fr(0),cn=0,Oa=null,Xr=0,Zo=0,Mu=0,ka=null,Hn=null,Eu=0,Ls=1/0,Ki=null,Jo=!1,wu=null,vr=null,Qo=!1,xr=null,el=0,Ba=0,Tu=null,tl=-1,nl=0;function Dn(){return(Rt&6)!==0?qt():tl!==-1?tl:tl=qt()}function Sr(t){return(t.mode&1)===0?1:(Rt&2)!==0&&xn!==0?xn&-xn:S_.transition!==null?(nl===0&&(nl=on()),nl):(t=ft,t!==0||(t=window.event,t=t===void 0?16:Xf(t.type)),t)}function Si(t,i,a,c){if(50<Ba)throw Ba=0,Tu=null,Error(n(185));tn(t,a,c),((Rt&2)===0||t!==hn)&&(t===hn&&((Rt&2)===0&&(Zo|=a),cn===4&&yr(t,xn)),Gn(t,c),a===1&&Rt===0&&(i.mode&1)===0&&(Ls=qt()+500,Po&&pr()))}function Gn(t,i){var a=t.callbackNode;Ut(t,i);var c=yt(t,t===hn?xn:0);if(c===0)a!==null&&oa(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&oa(a),i===1)t.tag===0?x_(Xp.bind(null,t)):Ph(Xp.bind(null,t)),m_(function(){(Rt&6)===0&&pr()}),a=null;else{switch(di(c)){case 1:a=la;break;case 4:a=ca;break;case 16:a=A;break;case 536870912:a=ce;break;default:a=A}a=Qp(a,Wp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Wp(t,i){if(tl=-1,nl=0,(Rt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ns()&&t.callbackNode!==a)return null;var c=yt(t,t===hn?xn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=il(t,c);else{i=c;var d=Rt;Rt|=2;var m=Yp();(hn!==t||xn!==i)&&(Ki=null,Ls=qt()+500,Yr(t,i));do try{z_();break}catch(U){qp(t,U)}while(!0);Vc(),Ko.current=m,Rt=d,rn!==null?i=0:(hn=null,xn=0,i=cn)}if(i!==0){if(i===2&&(d=Nt(t),d!==0&&(c=d,i=Au(t,d))),i===1)throw a=Oa,Yr(t,0),yr(t,c),Gn(t,qt()),a;if(i===6)yr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!k_(d)&&(i=il(t,c),i===2&&(m=Nt(t),m!==0&&(c=m,i=Au(t,m))),i===1))throw a=Oa,Yr(t,0),yr(t,c),Gn(t,qt()),a;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:$r(t,Hn,Ki);break;case 3:if(yr(t,c),(c&130023424)===c&&(i=Eu+500-qt(),10<i)){if(yt(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Dn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Nc($r.bind(null,t,Hn,Ki),i);break}$r(t,Hn,Ki);break;case 4:if(yr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var T=31-Ne(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*O_(c/1960))-c,10<c){t.timeoutHandle=Nc($r.bind(null,t,Hn,Ki),c);break}$r(t,Hn,Ki);break;case 5:$r(t,Hn,Ki);break;default:throw Error(n(329))}}}return Gn(t,qt()),t.callbackNode===a?Wp.bind(null,t):null}function Au(t,i){var a=ka;return t.current.memoizedState.isDehydrated&&(Yr(t,i).flags|=256),t=il(t,i),t!==2&&(i=Hn,Hn=a,i!==null&&Ru(i)),t}function Ru(t){Hn===null?Hn=t:Hn.push.apply(Hn,t)}function k_(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!mi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(t,i){for(i&=~Mu,i&=~Zo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Ne(i),c=1<<a;t[a]=-1,i&=~c}}function Xp(t){if((Rt&6)!==0)throw Error(n(327));Ns();var i=yt(t,0);if((i&1)===0)return Gn(t,qt()),null;var a=il(t,i);if(t.tag!==0&&a===2){var c=Nt(t);c!==0&&(i=c,a=Au(t,c))}if(a===1)throw a=Oa,Yr(t,0),yr(t,i),Gn(t,qt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,$r(t,Hn,Ki),Gn(t,qt()),null}function Cu(t,i){var a=Rt;Rt|=1;try{return t(i)}finally{Rt=a,Rt===0&&(Ls=qt()+500,Po&&pr())}}function qr(t){xr!==null&&xr.tag===0&&(Rt&6)===0&&Ns();var i=Rt;Rt|=1;var a=si.transition,c=ft;try{if(si.transition=null,ft=1,t)return t()}finally{ft=c,si.transition=a,Rt=i,(Rt&6)===0&&pr()}}function bu(){$n=Ps.current,zt(Ps)}function Yr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,p_(a)),rn!==null)for(a=rn.return;a!==null;){var c=a;switch(kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Co();break;case 3:Rs(),zt(kn),zt(Mn),Zc();break;case 5:jc(c);break;case 4:Rs();break;case 13:zt(Yt);break;case 19:zt(Yt);break;case 10:Wc(c.type._context);break;case 22:case 23:bu()}a=a.return}if(hn=t,rn=t=Mr(t.current,null),xn=$n=i,cn=0,Oa=null,Mu=Zo=Xr=0,Hn=ka=null,Gr!==null){for(i=0;i<Gr.length;i++)if(a=Gr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}Gr=null}return t}function qp(t,i){do{var a=rn;try{if(Vc(),zo.current=Wo,Ho){for(var c=$t.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ho=!1}if(Wr=0,fn=ln=$t=null,La=!1,Na=0,yu.current=null,a===null||a.return===null){cn=1,Oa=i,rn=null;break}e:{var m=t,T=a.return,U=a,z=i;if(i=xn,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=z,xe=U,Me=xe.tag;if((xe.mode&1)===0&&(Me===0||Me===11||Me===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Be=_p(T);if(Be!==null){Be.flags&=-257,vp(Be,T,U,m,i),Be.mode&1&&gp(m,ue,i),i=Be,z=ue;var $e=i.updateQueue;if($e===null){var Ke=new Set;Ke.add(z),i.updateQueue=Ke}else $e.add(z);break e}else{if((i&1)===0){gp(m,ue,i),Pu();break e}z=Error(n(426))}}else if(Vt&&U.mode&1){var nn=_p(T);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),vp(nn,T,U,m,i),Hc(Cs(z,U));break e}}m=z=Cs(z,U),cn!==4&&(cn=2),ka===null?ka=[m]:ka.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var re=pp(m,z,i);Hh(m,re);break e;case 1:U=z;var W=m.type,le=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(vr===null||!vr.has(le)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=mp(m,U,i);Hh(m,Te);break e}}m=m.return}while(m!==null)}jp(a)}catch(Qe){i=Qe,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function Yp(){var t=Ko.current;return Ko.current=Wo,t===null?Wo:t}function Pu(){(cn===0||cn===3||cn===2)&&(cn=4),hn===null||(Xr&268435455)===0&&(Zo&268435455)===0||yr(hn,xn)}function il(t,i){var a=Rt;Rt|=2;var c=Yp();(hn!==t||xn!==i)&&(Ki=null,Yr(t,i));do try{B_();break}catch(d){qp(t,d)}while(!0);if(Vc(),Rt=a,Ko.current=c,rn!==null)throw Error(n(261));return hn=null,xn=0,cn}function B_(){for(;rn!==null;)$p(rn)}function z_(){for(;rn!==null&&!fo();)$p(rn)}function $p(t){var i=Jp(t.alternate,t,$n);t.memoizedProps=t.pendingProps,i===null?jp(t):rn=i,yu.current=null}function jp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=N_(a,i,$n),a!==null){rn=a;return}}else{if(a=D_(a,i),a!==null){a.flags&=32767,rn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{cn=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=t}while(i!==null);cn===0&&(cn=5)}function $r(t,i,a){var c=ft,d=si.transition;try{si.transition=null,ft=1,H_(t,i,a,c)}finally{si.transition=d,ft=c}return null}function H_(t,i,a,c){do Ns();while(xr!==null);if((Rt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Mt(t,m),t===hn&&(rn=hn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Qo||(Qo=!0,Qp(A,function(){return Ns(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=si.transition,si.transition=null;var T=ft;ft=1;var U=Rt;Rt|=4,yu.current=null,U_(t,a),Bp(a,t),o_(Pc),po=!!bc,Pc=bc=null,t.current=a,F_(a),lc(),Rt=U,ft=T,si.transition=m}else t.current=a;if(Qo&&(Qo=!1,xr=t,el=d),m=t.pendingLanes,m===0&&(vr=null),Ie(a.stateNode),Gn(t,qt()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Jo)throw Jo=!1,t=wu,wu=null,t;return(el&1)!==0&&t.tag!==0&&Ns(),m=t.pendingLanes,(m&1)!==0?t===Tu?Ba++:(Ba=0,Tu=t):Ba=0,pr(),null}function Ns(){if(xr!==null){var t=di(el),i=si.transition,a=ft;try{if(si.transition=null,ft=16>t?16:t,xr===null)var c=!1;else{if(t=xr,xr=null,el=0,(Rt&6)!==0)throw Error(n(331));var d=Rt;for(Rt|=4,Xe=t.current;Xe!==null;){var m=Xe,T=m.child;if((Xe.flags&16)!==0){var U=m.deletions;if(U!==null){for(var z=0;z<U.length;z++){var ue=U[z];for(Xe=ue;Xe!==null;){var xe=Xe;switch(xe.tag){case 0:case 11:case 15:Fa(8,xe,m)}var Me=xe.child;if(Me!==null)Me.return=xe,Xe=Me;else for(;Xe!==null;){xe=Xe;var ve=xe.sibling,Be=xe.return;if(Ip(xe),xe===ue){Xe=null;break}if(ve!==null){ve.return=Be,Xe=ve;break}Xe=Be}}}var $e=m.alternate;if($e!==null){var Ke=$e.child;if(Ke!==null){$e.child=null;do{var nn=Ke.sibling;Ke.sibling=null,Ke=nn}while(Ke!==null)}}Xe=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Xe=T;else e:for(;Xe!==null;){if(m=Xe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Fa(9,m,m.return)}var re=m.sibling;if(re!==null){re.return=m.return,Xe=re;break e}Xe=m.return}}var W=t.current;for(Xe=W;Xe!==null;){T=Xe;var le=T.child;if((T.subtreeFlags&2064)!==0&&le!==null)le.return=T,Xe=le;else e:for(T=W;Xe!==null;){if(U=Xe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:jo(9,U)}}catch(Qe){Qt(U,U.return,Qe)}if(U===T){Xe=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,Xe=Te;break e}Xe=U.return}}if(Rt=d,pr(),J&&typeof J.onPostCommitFiberRoot=="function")try{J.onPostCommitFiberRoot(ne,t)}catch{}c=!0}return c}finally{ft=a,si.transition=i}}return!1}function Kp(t,i,a){i=Cs(a,i),i=pp(t,i,1),t=gr(t,i,1),i=Dn(),t!==null&&(tn(t,1,i),Gn(t,i))}function Qt(t,i,a){if(t.tag===3)Kp(t,t,a);else for(;i!==null;){if(i.tag===3){Kp(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(vr===null||!vr.has(c))){t=Cs(a,t),t=mp(i,t,1),i=gr(i,t,1),t=Dn(),i!==null&&(tn(i,1,t),Gn(i,t));break}}i=i.return}}function G_(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=Dn(),t.pingedLanes|=t.suspendedLanes&a,hn===t&&(xn&a)===a&&(cn===4||cn===3&&(xn&130023424)===xn&&500>qt()-Eu?Yr(t,0):Mu|=a),Gn(t,i)}function Zp(t,i){i===0&&((t.mode&1)===0?i=1:(i=dt,dt<<=1,(dt&130023424)===0&&(dt=4194304)));var a=Dn();t=Yi(t,i),t!==null&&(tn(t,i,a),Gn(t,a))}function V_(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Zp(t,a)}function W_(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Zp(t,a)}var Jp;Jp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||kn.current)zn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return zn=!1,L_(t,i,a);zn=(t.flags&131072)!==0}else zn=!1,Vt&&(i.flags&1048576)!==0&&Lh(i,No,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Yo(t,i),t=i.pendingProps;var d=Ss(i,Mn.current);As(i,a),d=eu(null,i,c,t,d,a);var m=tu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Bn(c)?(m=!0,bo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(i),d.updater=Xo,i.stateNode=d,d._reactInternals=i,ou(i,c,t,a),i=du(null,i,c,!0,m,a)):(i.tag=0,Vt&&m&&Oc(i),Nn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Yo(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=q_(c),t=_i(c,t),d){case 0:i=uu(null,i,c,t,a);break e;case 1:i=wp(null,i,c,t,a);break e;case 11:i=xp(null,i,c,t,a);break e;case 14:i=Sp(null,i,c,_i(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),uu(t,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),wp(t,i,c,d,a);case 3:e:{if(Tp(i),t===null)throw Error(n(387));c=i.pendingProps,m=i.memoizedState,d=m.element,zh(t,i),ko(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Cs(Error(n(423)),i),i=Ap(t,i,c,a,d);break e}else if(c!==d){d=Cs(Error(n(424)),i),i=Ap(t,i,c,a,d);break e}else for(Yn=dr(i.stateNode.containerInfo.firstChild),qn=i,Vt=!0,gi=null,a=kh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Es(),c===d){i=ji(t,i,a);break e}Nn(t,i,c,a)}i=i.child}return i;case 5:return Vh(i),t===null&&zc(i),c=i.type,d=i.pendingProps,m=t!==null?t.memoizedProps:null,T=d.children,Lc(c,d)?T=null:m!==null&&Lc(c,m)&&(i.flags|=32),Ep(t,i),Nn(t,i,T,a),i.child;case 6:return t===null&&zc(i),null;case 13:return Rp(t,i,a);case 4:return $c(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ws(i,null,c,a):Nn(t,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),xp(t,i,c,d,a);case 7:return Nn(t,i,i.pendingProps,a),i.child;case 8:return Nn(t,i,i.pendingProps.children,a),i.child;case 12:return Nn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,kt(Uo,c._currentValue),c._currentValue=T,m!==null)if(mi(m.value,T)){if(m.children===d.children&&!kn.current){i=ji(t,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){T=m.child;for(var z=U.firstContext;z!==null;){if(z.context===c){if(m.tag===1){z=$i(-1,a&-a),z.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var xe=ue.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),ue.pending=z}}m.lanes|=a,z=m.alternate,z!==null&&(z.lanes|=a),Xc(m.return,a,i),U.lanes|=a;break}z=z.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(n(341));T.lanes|=a,U=T.alternate,U!==null&&(U.lanes|=a),Xc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Nn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,As(i,a),d=ii(d),c=c(d),i.flags|=1,Nn(t,i,c,a),i.child;case 14:return c=i.type,d=_i(c,i.pendingProps),d=_i(c.type,d),Sp(t,i,c,d,a);case 15:return yp(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),Yo(t,i),i.tag=1,Bn(c)?(t=!0,bo(i)):t=!1,As(i,a),fp(i,c,d),ou(i,c,d,a),du(null,i,c,!0,t,a);case 19:return bp(t,i,a);case 22:return Mp(t,i,a)}throw Error(n(156,i.tag))};function Qp(t,i){return Or(t,i)}function X_(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,i,a,c){return new X_(t,i,a,c)}function Lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function q_(t){if(typeof t=="function")return Lu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===Q)return 14}return 2}function Mr(t,i){var a=t.alternate;return a===null?(a=ai(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function rl(t,i,a,c,d,m){var T=2;if(c=t,typeof t=="function")Lu(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case F:return jr(a.children,d,m,i);case w:T=8,d|=8;break;case L:return t=ai(12,a,i,d|2),t.elementType=L,t.lanes=m,t;case te:return t=ai(13,a,i,d),t.elementType=te,t.lanes=m,t;case G:return t=ai(19,a,i,d),t.elementType=G,t.lanes=m,t;case ie:return sl(a,d,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:T=10;break e;case X:T=9;break e;case q:T=11;break e;case Q:T=14;break e;case pe:T=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ai(T,a,i,d),i.elementType=t,i.type=c,i.lanes=m,i}function jr(t,i,a,c){return t=ai(7,t,c,i),t.lanes=a,t}function sl(t,i,a,c){return t=ai(22,t,c,i),t.elementType=ie,t.lanes=a,t.stateNode={isHidden:!1},t}function Nu(t,i,a){return t=ai(6,t,null,i),t.lanes=a,t}function Du(t,i,a){return i=ai(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Y_(t,i,a,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ke(0),this.expirationTimes=ke(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Iu(t,i,a,c,d,m,T,U,z){return t=new Y_(t,i,a,U,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ai(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(m),t}function $_(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function em(t){if(!t)return hr;t=t._reactInternals;e:{if(Ln(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Bn(a))return Ch(t,a,i)}return i}function tm(t,i,a,c,d,m,T,U,z){return t=Iu(a,c,!0,t,d,m,T,U,z),t.context=em(null),a=t.current,c=Dn(),d=Sr(a),m=$i(c,d),m.callback=i??null,gr(a,m,d),t.current.lanes=d,tn(t,d,c),Gn(t,c),t}function al(t,i,a,c){var d=i.current,m=Dn(),T=Sr(d);return a=em(a),i.context===null?i.context=a:i.pendingContext=a,i=$i(m,T),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=gr(d,i,T),t!==null&&(Si(t,d,T,m),Oo(t,d,T)),T}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nm(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Uu(t,i){nm(t,i),(t=t.alternate)&&nm(t,i)}function j_(){return null}var im=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fu(t){this._internalRoot=t}ll.prototype.render=Fu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));al(t,i,null,null)},ll.prototype.unmount=Fu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;qr(function(){al(null,t,null,null)}),i[Vi]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var i=fi();t={blockedOn:null,target:t,priority:i};for(var a=0;a<lr.length&&i!==0&&i<lr[a].priority;a++);lr.splice(a,0,t),a===0&&Vf(t)}};function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rm(){}function K_(t,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ue=ol(T);m.call(ue)}}var T=tm(i,c,t,0,null,!1,!1,"",rm);return t._reactRootContainer=T,t[Vi]=T.current,Ea(t.nodeType===8?t.parentNode:t),qr(),T}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var ue=ol(z);U.call(ue)}}var z=Iu(t,0,!1,null,null,!1,!1,"",rm);return t._reactRootContainer=z,t[Vi]=z.current,Ea(t.nodeType===8?t.parentNode:t),qr(function(){al(i,z,a,c)}),z}function ul(t,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var U=d;d=function(){var z=ol(T);U.call(z)}}al(i,T,t,d)}else T=K_(a,i,t,d,c);return ol(T)}Gi=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=He(i.pendingLanes);a!==0&&(yn(i,a|1),Gn(i,qt()),(Rt&6)===0&&(Ls=qt()+500,pr()))}break;case 13:qr(function(){var c=Yi(t,1);if(c!==null){var d=Dn();Si(c,t,1,d)}}),Uu(t,1)}},bt=function(t){if(t.tag===13){var i=Yi(t,134217728);if(i!==null){var a=Dn();Si(i,t,134217728,a)}Uu(t,134217728)}},Gt=function(t){if(t.tag===13){var i=Sr(t),a=Yi(t,i);if(a!==null){var c=Dn();Si(a,t,i,c)}Uu(t,i)}},fi=function(){return ft},Dt=function(t,i){var a=ft;try{return ft=t,i()}finally{ft=a}},et=function(t,i,a){switch(i){case"input":if(ut(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var d=Ro(c);if(!d)throw Error(n(90));at(c),ut(c,d)}}}break;case"textarea":en(t,a);break;case"select":i=a.value,i!=null&&At(t,!!a.multiple,i,!1)}},Le=Cu,_e=qr;var Z_={usingClientEntryPoint:!1,Events:[Aa,vs,Ro,fe,Ae,Cu]},za={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J_={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fr(t),t===null?null:t.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||j_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{ne=dl.inject(J_),J=dl}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_,Vn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(i))throw Error(n(200));return $_(t,i,null,a)},Vn.createRoot=function(t,i){if(!Ou(t))throw Error(n(299));var a=!1,c="",d=im;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Iu(t,1,!1,null,null,a,!1,c,d),t[Vi]=i.current,Ea(t.nodeType===8?t.parentNode:t),new Fu(i)},Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Fr(i),t=t===null?null:t.stateNode,t},Vn.flushSync=function(t){return qr(t)},Vn.hydrate=function(t,i,a){if(!cl(i))throw Error(n(200));return ul(null,t,i,!0,a)},Vn.hydrateRoot=function(t,i,a){if(!Ou(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=im;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=tm(i,null,t,1,a??null,d,!1,m,T),t[Vi]=i.current,Ea(t),c)for(t=0;t<c.length;t++)a=c[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ll(i)},Vn.render=function(t,i,a){if(!cl(i))throw Error(n(200));return ul(null,t,i,!1,a)},Vn.unmountComponentAtNode=function(t){if(!cl(t))throw Error(n(40));return t._reactRootContainer?(qr(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1},Vn.unstable_batchedUpdates=Cu,Vn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!cl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ul(t,i,a,!1,c)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var fm;function ov(){if(fm)return zu.exports;fm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zu.exports=av(),zu.exports}var hm;function lv(){if(hm)return fl;hm=1;var s=ov();return fl.createRoot=s.createRoot,fl.hydrateRoot=s.hydrateRoot,fl}var cv=lv();const uv=Mg(cv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vf="186",dv=0,pm=1,fv=2,Gl=1,hv=2,Ka=3,rs=0,bn=1,Ti=2,ir=0,Ja=1,mm=2,gm=3,_m=4,pv=5,qs=100,mv=101,gv=102,_v=103,vv=104,xv=200,Sv=201,yv=202,Mv=203,Eg=204,wg=205,Ev=206,wv=207,Tv=208,Av=209,Rv=210,Cv=211,bv=212,Pv=213,Lv=214,Td=0,Ad=1,Rd=2,eo=3,Cd=4,bd=5,Pd=6,Ld=7,Tg=0,Nv=1,Dv=2,ki=0,Ag=1,Rg=2,Cg=3,xf=4,bg=5,Pg=6,Lg=7,Ng=300,ss=301,Qs=302,Vu=303,Wu=304,ic=306,Nd=1e3,nr=1001,Dd=1002,Sn=1003,Iv=1004,hl=1005,Cn=1006,Xu=1007,ns=1008,Jn=1009,Dg=1010,Ig=1011,to=1012,Sf=1013,Bi=1014,Fi=1015,zi=1016,yf=1017,Mf=1018,no=1020,Ug=35902,Fg=35899,Og=1021,kg=1022,Ai=1023,sr=1026,is=1027,Bg=1028,Ef=1029,as=1030,wf=1031,Tf=1033,Vl=33776,Wl=33777,Xl=33778,ql=33779,Id=35840,Ud=35841,Fd=35842,Od=35843,kd=36196,Bd=37492,zd=37496,Hd=37488,Gd=37489,$l=37490,Vd=37491,Wd=37808,Xd=37809,qd=37810,Yd=37811,$d=37812,jd=37813,Kd=37814,Zd=37815,Jd=37816,Qd=37817,ef=37818,tf=37819,nf=37820,rf=37821,sf=36492,af=36494,of=36495,lf=36283,cf=36284,jl=36285,uf=36286,Uv=3200,df=0,Fv=1,Lr="",li="srgb",Kl="srgb-linear",Zl="linear",It="srgb",qu=7680,Ov=519,kv=512,Bv=513,zv=514,Af=515,Hv=516,Gv=517,Rf=518,Vv=519,Wv=35044,vm="300 es",Oi=2e3,io=2001;function Xv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qv(){const s=Jl("canvas");return s.style.display="block",s}const xm={};function Sm(...s){const e="THREE."+s.shift();console.log(e,...s)}function zg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=zg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Lt(...s){s=zg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function js(...s){const e=s.join(" ");e in xm||(xm[e]=!0,rt(...s))}function Yv(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const $v={[Td]:Ad,[Rd]:Pd,[Cd]:Ld,[eo]:bd,[Ad]:Td,[Pd]:Rd,[Ld]:Cd,[bd]:eo};class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ym=1234567;const Ks=Math.PI/180,ro=180/Math.PI;function ta(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[n&63|128]+An[n>>8&255]+"-"+An[n>>16&255]+An[n>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function vt(s,e,n){return Math.max(e,Math.min(n,s))}function Cf(s,e){return(s%e+e)%e}function jv(s,e,n,r,o){return r+(s-e)*(o-r)/(n-e)}function Kv(s,e,n){return s!==e?(n-s)/(e-s):0}function Qa(s,e,n){return(1-n)*s+n*e}function Zv(s,e,n,r){return Qa(s,e,1-Math.exp(-n*r))}function Jv(s,e=1){return e-Math.abs(Cf(s,e*2)-e)}function Qv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function ex(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function tx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nx(s,e){return s+Math.random()*(e-s)}function ix(s){return s*(.5-Math.random())}function rx(s){s!==void 0&&(ym=s);let e=ym+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sx(s){return s*Ks}function ax(s){return s*ro}function ox(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function lx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ux(s,e,n,r,o){const l=Math.cos,u=Math.sin,f=l(n/2),h=u(n/2),p=l((e+r)/2),x=u((e+r)/2),S=l((e-r)/2),g=u((e-r)/2),y=l((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":s.set(f*x,h*S,h*g,f*p);break;case"YZY":s.set(h*g,f*x,h*S,f*p);break;case"ZXZ":s.set(h*S,h*g,f*x,f*p);break;case"XZX":s.set(f*x,h*E,h*y,f*p);break;case"YXY":s.set(h*y,f*x,h*E,f*p);break;case"ZYZ":s.set(h*E,h*y,f*x,f*p);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ys(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Wn={DEG2RAD:Ks,RAD2DEG:ro,generateUUID:ta,clamp:vt,euclideanModulo:Cf,mapLinear:jv,inverseLerp:Kv,lerp:Qa,damp:Zv,pingpong:Jv,smoothstep:Qv,smootherstep:ex,randInt:tx,randFloat:nx,randFloatSpread:ix,seededRandom:rx,degToRad:sx,radToDeg:ax,isPowerOfTwo:ox,ceilPowerOfTwo:lx,floorPowerOfTwo:cx,setQuaternionFromProperEuler:ux,normalize:In,denormalize:Ys},Of=class Of{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Of.prototype.isVector2=!0;let xt=Of;class na{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,f){let h=r[o+0],p=r[o+1],x=r[o+2],S=r[o+3],g=l[u+0],y=l[u+1],E=l[u+2],R=l[u+3];if(S!==R||h!==g||p!==y||x!==E){let v=h*g+p*y+x*E+S*R;v<0&&(g=-g,y=-y,E=-E,R=-R,v=-v);let _=1-f;if(v<.9995){const N=Math.acos(v),B=Math.sin(N);_=Math.sin(_*N)/B,f=Math.sin(f*N)/B,h=h*_+g*f,p=p*_+y*f,x=x*_+E*f,S=S*_+R*f}else{h=h*_+g*f,p=p*_+y*f,x=x*_+E*f,S=S*_+R*f;const N=1/Math.sqrt(h*h+p*p+x*x+S*S);h*=N,p*=N,x*=N,S*=N}}e[n]=h,e[n+1]=p,e[n+2]=x,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],x=r[o+3],S=l[u],g=l[u+1],y=l[u+2],E=l[u+3];return e[n]=f*E+x*S+h*y-p*g,e[n+1]=h*E+x*g+p*S-f*y,e[n+2]=p*E+x*y+f*g-h*S,e[n+3]=x*E-f*S-h*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),x=f(o/2),S=f(l/2),g=h(r/2),y=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=g*x*S+p*y*E,this._y=p*y*S-g*x*E,this._z=p*x*E+g*y*S,this._w=p*x*S-g*y*E;break;case"YXZ":this._x=g*x*S+p*y*E,this._y=p*y*S-g*x*E,this._z=p*x*E-g*y*S,this._w=p*x*S+g*y*E;break;case"ZXY":this._x=g*x*S-p*y*E,this._y=p*y*S+g*x*E,this._z=p*x*E+g*y*S,this._w=p*x*S-g*y*E;break;case"ZYX":this._x=g*x*S-p*y*E,this._y=p*y*S+g*x*E,this._z=p*x*E-g*y*S,this._w=p*x*S+g*y*E;break;case"YZX":this._x=g*x*S+p*y*E,this._y=p*y*S+g*x*E,this._z=p*x*E-g*y*S,this._w=p*x*S-g*y*E;break;case"XZY":this._x=g*x*S-p*y*E,this._y=p*y*S-g*x*E,this._z=p*x*E+g*y*S,this._w=p*x*S+g*y*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],f=n[5],h=n[9],p=n[2],x=n[6],S=n[10],g=r+f+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-h)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>f&&r>S){const y=2*Math.sqrt(1+r-f-S);this._w=(x-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>S){const y=2*Math.sqrt(1+f-r-S);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+x)/y}else{const y=2*Math.sqrt(1+S-r-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(h+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,f=n._x,h=n._y,p=n._z,x=n._w;return this._x=r*x+u*f+o*p-l*h,this._y=o*x+u*h+l*f-r*p,this._z=l*x+u*p+r*h-o*f,this._w=u*x-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-n;if(f<.9995){const p=Math.acos(f),x=Math.sin(p);h=Math.sin(h*p)/x,n=Math.sin(n*p)/x,this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this._onChangeCallback()}else this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kf=class kf{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),x=2*(f*n-l*o),S=2*(l*r-u*n);return this.x=n+h*p+u*S-f*x,this.y=r+h*x+f*p-l*S,this.z=o+h*S+l*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,f=n.y,h=n.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kf.prototype.isVector3=!0;let ee=kf;const Yu=new ee,Mm=new na,Bf=class Bf{constructor(e,n,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,h,p)}set(e,n,r,o,l,u,f,h,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=n,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],x=r[4],S=r[7],g=r[2],y=r[5],E=r[8],R=o[0],v=o[3],_=o[6],N=o[1],B=o[4],C=o[7],P=o[2],b=o[5],F=o[8];return l[0]=u*R+f*N+h*P,l[3]=u*v+f*B+h*b,l[6]=u*_+f*C+h*F,l[1]=p*R+x*N+S*P,l[4]=p*v+x*B+S*b,l[7]=p*_+x*C+S*F,l[2]=g*R+y*N+E*P,l[5]=g*v+y*B+E*b,l[8]=g*_+y*C+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8];return n*u*x-n*f*p-r*l*x+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8],S=x*u-f*p,g=f*h-x*l,y=p*l-u*h,E=n*S+r*g+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=S*R,e[1]=(o*p-x*r)*R,e[2]=(f*r-o*u)*R,e[3]=g*R,e[4]=(x*n-o*h)*R,e[5]=(o*l-f*n)*R,e[6]=y*R,e[7]=(r*h-p*n)*R,e[8]=(u*n-r*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+n,0,0,1),this}scale(e,n){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($u.makeScale(e,n)),this}rotate(e){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($u.makeRotation(-e)),this}translate(e,n){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($u.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bf.prototype.isMatrix3=!0;let lt=Bf;const $u=new lt,Em=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wm=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dx(){const s={enabled:!0,workingColorSpace:Kl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(o.r=rr(o.r),o.g=rr(o.g),o.b=rr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Lr?Zl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Kl]:{primaries:e,whitePoint:r,transfer:Zl,toXYZ:Em,fromXYZ:wm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:It,toXYZ:Em,fromXYZ:wm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const Et=dx();function rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class fx{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ds===void 0&&(Ds=Jl("canvas")),Ds.width=e.width,Ds.height=e.height;const o=Ds.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ds}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=rr(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(rr(n[r]/255)*255):n[r]=rr(n[r]);return{data:n,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hx=0;class bf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=ta(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(ju(o[u].image)):l.push(ju(o[u]))}else l=ju(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function ju(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let px=0;const Ku=new ee;class Fn extends os{constructor(e=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,r=nr,o=nr,l=Cn,u=ns,f=Ai,h=Jn,p=Fn.DEFAULT_ANISOTROPY,x=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=ta(),this.name="",this.source=new bf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ku).x}get height(){return this.source.getSize(Ku).y}get depth(){return this.source.getSize(Ku).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Ng;Fn.DEFAULT_ANISOTROPY=1;const zf=class zf{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const h=e.elements,p=h[0],x=h[4],S=h[8],g=h[1],y=h[5],E=h[9],R=h[2],v=h[6],_=h[10];if(Math.abs(x-g)<.01&&Math.abs(S-R)<.01&&Math.abs(E-v)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+R)<.1&&Math.abs(E+v)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const B=(p+1)/2,C=(y+1)/2,P=(_+1)/2,b=(x+g)/4,F=(S+R)/4,w=(E+v)/4;return B>C&&B>P?B<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(B),o=b/r,l=F/r):C>P?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=b/o,l=w/o):P<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),r=F/l,o=w/l),this.set(r,o,l,n),this}let N=Math.sqrt((v-E)*(v-E)+(S-R)*(S-R)+(g-x)*(g-x));return Math.abs(N)<.001&&(N=1),this.x=(v-E)/N,this.y=(S-R)/N,this.z=(g-x)/N,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zf.prototype.isVector4=!0;let Kt=zf;class mx extends os{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new Fn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new bf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends mx{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Hg extends Fn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gx extends Fn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const nc=class nc{constructor(e,n,r,o,l,u,f,h,p,x,S,g,y,E,R,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,h,p,x,S,g,y,E,R,v)}set(e,n,r,o,l,u,f,h,p,x,S,g,y,E,R,v){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=x,_[10]=S,_[14]=g,_[3]=y,_[7]=E,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nc().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Is.setFromMatrixColumn(e,0).length(),l=1/Is.setFromMatrixColumn(e,1).length(),u=1/Is.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),x=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*x,y=u*S,E=f*x,R=f*S;n[0]=h*x,n[4]=-h*S,n[8]=p,n[1]=y+E*p,n[5]=g-R*p,n[9]=-f*h,n[2]=R-g*p,n[6]=E+y*p,n[10]=u*h}else if(e.order==="YXZ"){const g=h*x,y=h*S,E=p*x,R=p*S;n[0]=g+R*f,n[4]=E*f-y,n[8]=u*p,n[1]=u*S,n[5]=u*x,n[9]=-f,n[2]=y*f-E,n[6]=R+g*f,n[10]=u*h}else if(e.order==="ZXY"){const g=h*x,y=h*S,E=p*x,R=p*S;n[0]=g-R*f,n[4]=-u*S,n[8]=E+y*f,n[1]=y+E*f,n[5]=u*x,n[9]=R-g*f,n[2]=-u*p,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const g=u*x,y=u*S,E=f*x,R=f*S;n[0]=h*x,n[4]=E*p-y,n[8]=g*p+R,n[1]=h*S,n[5]=R*p+g,n[9]=y*p-E,n[2]=-p,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const g=u*h,y=u*p,E=f*h,R=f*p;n[0]=h*x,n[4]=R-g*S,n[8]=E*S+y,n[1]=S,n[5]=u*x,n[9]=-f*x,n[2]=-p*x,n[6]=y*S+E,n[10]=g-R*S}else if(e.order==="XZY"){const g=u*h,y=u*p,E=f*h,R=f*p;n[0]=h*x,n[4]=-S,n[8]=p*x,n[1]=g*S+R,n[5]=u*x,n[9]=y*S-E,n[2]=E*S-y,n[6]=f*x,n[10]=R*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_x,e,vx)}lookAt(e,n,r){const o=this.elements;return jn.subVectors(e,n),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),wr.crossVectors(r,jn),wr.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),wr.crossVectors(r,jn)),wr.normalize(),pl.crossVectors(jn,wr),o[0]=wr.x,o[4]=pl.x,o[8]=jn.x,o[1]=wr.y,o[5]=pl.y,o[9]=jn.y,o[2]=wr.z,o[6]=pl.z,o[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],x=r[1],S=r[5],g=r[9],y=r[13],E=r[2],R=r[6],v=r[10],_=r[14],N=r[3],B=r[7],C=r[11],P=r[15],b=o[0],F=o[4],w=o[8],L=o[12],k=o[1],X=o[5],q=o[9],te=o[13],G=o[2],Q=o[6],pe=o[10],ie=o[14],Z=o[3],Y=o[7],$=o[11],D=o[15];return l[0]=u*b+f*k+h*G+p*Z,l[4]=u*F+f*X+h*Q+p*Y,l[8]=u*w+f*q+h*pe+p*$,l[12]=u*L+f*te+h*ie+p*D,l[1]=x*b+S*k+g*G+y*Z,l[5]=x*F+S*X+g*Q+y*Y,l[9]=x*w+S*q+g*pe+y*$,l[13]=x*L+S*te+g*ie+y*D,l[2]=E*b+R*k+v*G+_*Z,l[6]=E*F+R*X+v*Q+_*Y,l[10]=E*w+R*q+v*pe+_*$,l[14]=E*L+R*te+v*ie+_*D,l[3]=N*b+B*k+C*G+P*Z,l[7]=N*F+B*X+C*Q+P*Y,l[11]=N*w+B*q+C*pe+P*$,l[15]=N*L+B*te+C*ie+P*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],x=e[2],S=e[6],g=e[10],y=e[14],E=e[3],R=e[7],v=e[11],_=e[15],N=h*y-p*g,B=f*y-p*S,C=f*g-h*S,P=u*y-p*x,b=u*g-h*x,F=u*S-f*x;return n*(R*N-v*B+_*C)-r*(E*N-v*P+_*b)+o*(E*B-R*P+_*F)-l*(E*C-R*b+v*F)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],x=e[10];return n*(u*x-f*p)-r*(l*x-f*h)+o*(l*p-u*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8],S=e[9],g=e[10],y=e[11],E=e[12],R=e[13],v=e[14],_=e[15],N=n*f-r*u,B=n*h-o*u,C=n*p-l*u,P=r*h-o*f,b=r*p-l*f,F=o*p-l*h,w=x*R-S*E,L=x*v-g*E,k=x*_-y*E,X=S*v-g*R,q=S*_-y*R,te=g*_-y*v,G=N*te-B*q+C*X+P*k-b*L+F*w;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/G;return e[0]=(f*te-h*q+p*X)*Q,e[1]=(o*q-r*te-l*X)*Q,e[2]=(R*F-v*b+_*P)*Q,e[3]=(g*b-S*F-y*P)*Q,e[4]=(h*k-u*te-p*L)*Q,e[5]=(n*te-o*k+l*L)*Q,e[6]=(v*C-E*F-_*B)*Q,e[7]=(x*F-g*C+y*B)*Q,e[8]=(u*q-f*k+p*w)*Q,e[9]=(r*k-n*q-l*w)*Q,e[10]=(E*b-R*C+_*N)*Q,e[11]=(S*C-x*b-y*N)*Q,e[12]=(f*L-u*X-h*w)*Q,e[13]=(n*X-r*L+o*w)*Q,e[14]=(R*B-E*P-v*N)*Q,e[15]=(x*P-S*B+g*N)*Q,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,x=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,x*f+r,x*h-o*u,0,p*h-o*f,x*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,f=n._z,h=n._w,p=l+l,x=u+u,S=f+f,g=l*p,y=l*x,E=l*S,R=u*x,v=u*S,_=f*S,N=h*p,B=h*x,C=h*S,P=r.x,b=r.y,F=r.z;return o[0]=(1-(R+_))*P,o[1]=(y+C)*P,o[2]=(E-B)*P,o[3]=0,o[4]=(y-C)*b,o[5]=(1-(g+_))*b,o[6]=(v+N)*b,o[7]=0,o[8]=(E+B)*F,o[9]=(v-N)*F,o[10]=(1-(g+R))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let u=Is.set(o[0],o[1],o[2]).length();const f=Is.set(o[4],o[5],o[6]).length(),h=Is.set(o[8],o[9],o[10]).length();l<0&&(u=-u),yi.copy(this);const p=1/u,x=1/f,S=1/h;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=x,yi.elements[5]*=x,yi.elements[6]*=x,yi.elements[8]*=S,yi.elements[9]*=S,yi.elements[10]*=S,n.setFromRotationMatrix(yi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,n,r,o,l,u,f=Oi,h=!1){const p=this.elements,x=2*l/(n-e),S=2*l/(r-o),g=(n+e)/(n-e),y=(r+o)/(r-o);let E,R;if(h)E=l/(u-l),R=u*l/(u-l);else if(f===Oi)E=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===io)E=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,l,u,f=Oi,h=!1){const p=this.elements,x=2/(n-e),S=2/(r-o),g=-(n+e)/(n-e),y=-(r+o)/(r-o);let E,R;if(h)E=1/(u-l),R=u/(u-l);else if(f===Oi)E=-2/(u-l),R=-(u+l)/(u-l);else if(f===io)E=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};nc.prototype.isMatrix4=!0;let Wt=nc;const Is=new ee,yi=new Wt,_x=new ee(0,0,0),vx=new ee(1,1,1),wr=new ee,pl=new ee,jn=new ee,Tm=new Wt,Am=new na;class Nr{constructor(e=0,n=0,r=0,o=Nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],x=o[9],S=o[2],g=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,y),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nr.DEFAULT_ORDER="XYZ";class Gg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xx=0;const Rm=new ee,Us=new na,Zi=new Wt,ml=new ee,Ga=new ee,Sx=new ee,yx=new na,Cm=new ee(1,0,0),bm=new ee(0,1,0),Pm=new ee(0,0,1),Lm={type:"added"},Mx={type:"removed"},Fs={type:"childadded",child:null},Zu={type:"childremoved",child:null};class gn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new ee,n=new Nr,r=new na,o=new ee(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new lt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(bm,e)}rotateZ(e){return this.rotateOnAxis(Pm,e)}translateOnAxis(e,n){return Rm.copy(e).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(bm,e)}translateZ(e){return this.translateOnAxis(Pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ml.copy(e):ml.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Ga,ml,this.up):Zi.lookAt(ml,Ga,this.up),this.quaternion.setFromRotationMatrix(Zi),o&&(Zi.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(Zi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mx),Zu.child=e,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,Sx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,x=h.length;p<x;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),x=u(e.images),S=u(e.shapes),g=u(e.skeletons),y=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(f){const h=[];for(const p in f){const x=f[p];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}gn.DEFAULT_UP=new ee(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ii extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ex={type:"move"};class Ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const v=n.getJointPose(R,r),_=this._getHandJoint(p,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const x=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=x.position.distanceTo(S.position),y=.02,E=.005;p.inputState.pinching&&g>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Ex)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ii;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},gl={h:0,s:0,l:0};function Qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Et.workingColorSpace){if(e=Cf(e,1),n=vt(n,0,1),r=vt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Qu(u,l,e+1/3),this.g=Qu(u,l,e),this.b=Qu(u,l,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,n=li){function r(l){l!==void 0&&parseFloat(l)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=li){const r=Vg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Et.workingToColorSpace(Rn.copy(this),e),Math.round(vt(Rn.r*255,0,255))*65536+Math.round(vt(Rn.g*255,0,255))*256+Math.round(vt(Rn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(Rn.copy(this),n);const r=Rn.r,o=Rn.g,l=Rn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const x=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=x<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=x,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(Rn.copy(this),n),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=li){Et.workingToColorSpace(Rn.copy(this),e);const n=Rn.r,r=Rn.g,o=Rn.b;return e!==li?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+n,Tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Tr),e.getHSL(gl);const r=Qa(Tr.h,gl.h,n),o=Qa(Tr.s,gl.s,n),l=Qa(Tr.l,gl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new pt;pt.NAMES=Vg;class Pf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=n}clone(){return new Pf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wx extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nr,this.environmentIntensity=1,this.environmentRotation=new Nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Mi=new ee,Ji=new ee,ed=new ee,Qi=new ee,Os=new ee,ks=new ee,Nm=new ee,td=new ee,nd=new ee,id=new ee,rd=new Kt,sd=new Kt,ad=new Kt;class ci{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Mi.subVectors(e,n),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){Mi.subVectors(o,n),Ji.subVectors(r,n),ed.subVectors(e,n);const u=Mi.dot(Mi),f=Mi.dot(Ji),h=Mi.dot(ed),p=Ji.dot(Ji),x=Ji.dot(ed),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,y=(p*h-f*x)*g,E=(u*x-f*h)*g;return l.set(1-y-E,E,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,n,r,o,l,u,f,h){return this.getBarycoord(e,n,r,o,Qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Qi.x),h.addScaledVector(u,Qi.y),h.addScaledVector(f,Qi.z),h)}static getInterpolatedAttribute(e,n,r,o,l,u){return rd.setScalar(0),sd.setScalar(0),ad.setScalar(0),rd.fromBufferAttribute(e,n),sd.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(rd,l.x),u.addScaledVector(sd,l.y),u.addScaledVector(ad,l.z),u}static isFrontFacing(e,n,r,o){return Mi.subVectors(r,n),Ji.subVectors(e,n),Mi.cross(Ji).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Mi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,f;Os.subVectors(o,r),ks.subVectors(l,r),td.subVectors(e,r);const h=Os.dot(td),p=ks.dot(td);if(h<=0&&p<=0)return n.copy(r);nd.subVectors(e,o);const x=Os.dot(nd),S=ks.dot(nd);if(x>=0&&S<=x)return n.copy(o);const g=h*S-x*p;if(g<=0&&h>=0&&x<=0)return u=h/(h-x),n.copy(r).addScaledVector(Os,u);id.subVectors(e,l);const y=Os.dot(id),E=ks.dot(id);if(E>=0&&y<=E)return n.copy(l);const R=y*p-h*E;if(R<=0&&p>=0&&E<=0)return f=p/(p-E),n.copy(r).addScaledVector(ks,f);const v=x*E-y*S;if(v<=0&&S-x>=0&&y-E>=0)return Nm.subVectors(l,o),f=(S-x)/(S-x+(y-E)),n.copy(o).addScaledVector(Nm,f);const _=1/(v+R+g);return u=R*_,f=g*_,n.copy(r).addScaledVector(Os,u).addScaledVector(ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(l,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_l.copy(r.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),vl.subVectors(this.max,Va),Bs.subVectors(e.a,Va),zs.subVectors(e.b,Va),Hs.subVectors(e.c,Va),Ar.subVectors(zs,Bs),Rr.subVectors(Hs,zs),Kr.subVectors(Bs,Hs);let n=[0,-Ar.z,Ar.y,0,-Rr.z,Rr.y,0,-Kr.z,Kr.y,Ar.z,0,-Ar.x,Rr.z,0,-Rr.x,Kr.z,0,-Kr.x,-Ar.y,Ar.x,0,-Rr.y,Rr.x,0,-Kr.y,Kr.x,0];return!od(n,Bs,zs,Hs,vl)||(n=[1,0,0,0,1,0,0,0,1],!od(n,Bs,zs,Hs,vl))?!1:(xl.crossVectors(Ar,Rr),n=[xl.x,xl.y,xl.z],od(n,Bs,zs,Hs,vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const er=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Ei=new ee,_l=new ao,Bs=new ee,zs=new ee,Hs=new ee,Ar=new ee,Rr=new ee,Kr=new ee,Va=new ee,vl=new ee,xl=new ee,Zr=new ee;function od(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Zr.fromArray(s,l);const f=o.x*Math.abs(Zr.x)+o.y*Math.abs(Zr.y)+o.z*Math.abs(Zr.z),h=e.dot(Zr),p=n.dot(Zr),x=r.dot(Zr);if(Math.max(-Math.max(h,p,x),Math.min(h,p,x))>f)return!1}return!0}const sn=new ee,Sl=new xt;let Tx=0;class ui extends os{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Wv,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Sl.fromBufferAttribute(this,n),Sl.applyMatrix3(e),this.setXY(n,Sl.x,Sl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ys(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ys(n,this.array)),n}setX(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ys(n,this.array)),n}setY(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ys(n,this.array)),n}setZ(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ys(n,this.array)),n}setW(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array),o=In(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array),o=In(o,this.array),l=In(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wg extends ui{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Xg extends ui{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xt extends ui{constructor(e,n,r){super(new Float32Array(e),n,r)}}const Ax=new ao,Wa=new ee,ld=new ee;class oo{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Ax.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const n=Wa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Wa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(ld)),this.expandByPoint(Wa.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Rx=0;const oi=new Wt,cd=new gn,Gs=new ee,Kn=new ao,Xa=new ao,mn=new ee;class _n extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xv(e)?Xg:Wg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,n,r){return oi.makeTranslation(e,n,r),this.applyMatrix4(oi),this}scale(e,n,r){return oi.makeScale(e,n,r),this.applyMatrix4(oi),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xt(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Xa.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(Kn.min,Xa.min),Kn.expandByPoint(mn),mn.addVectors(Kn.max,Xa.max),Kn.expandByPoint(mn)):(Kn.expandByPoint(Xa.min),Kn.expandByPoint(Xa.max))}Kn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)mn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(mn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],h=this.morphTargetsRelative;for(let p=0,x=f.count;p<x;p++)mn.fromBufferAttribute(f,p),h&&(Gs.fromBufferAttribute(e,p),mn.add(Gs)),o=Math.max(o,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ui(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let w=0;w<r.count;w++)f[w]=new ee,h[w]=new ee;const p=new ee,x=new ee,S=new ee,g=new xt,y=new xt,E=new xt,R=new ee,v=new ee;function _(w,L,k){p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,L),S.fromBufferAttribute(r,k),g.fromBufferAttribute(l,w),y.fromBufferAttribute(l,L),E.fromBufferAttribute(l,k),x.sub(p),S.sub(p),y.sub(g),E.sub(g);const X=1/(y.x*E.y-E.x*y.y);isFinite(X)&&(R.copy(x).multiplyScalar(E.y).addScaledVector(S,-y.y).multiplyScalar(X),v.copy(S).multiplyScalar(y.x).addScaledVector(x,-E.x).multiplyScalar(X),f[w].add(R),f[L].add(R),f[k].add(R),h[w].add(v),h[L].add(v),h[k].add(v))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let w=0,L=N.length;w<L;++w){const k=N[w],X=k.start,q=k.count;for(let te=X,G=X+q;te<G;te+=3)_(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const B=new ee,C=new ee,P=new ee,b=new ee;function F(w){P.fromBufferAttribute(o,w),b.copy(P);const L=f[w];B.copy(L),B.sub(P.multiplyScalar(P.dot(L))).normalize(),C.crossVectors(b,L);const X=C.dot(h[w])<0?-1:1;u.setXYZW(w,B.x,B.y,B.z,X)}for(let w=0,L=N.length;w<L;++w){const k=N[w],X=k.start,q=k.count;for(let te=X,G=X+q;te<G;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new ee,l=new ee,u=new ee,f=new ee,h=new ee,p=new ee,x=new ee,S=new ee;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),R=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(n,E),l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,v),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,v),f.add(x),h.add(x),p.add(x),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let g=0,y=n.count;g<y;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)mn.fromBufferAttribute(e,n),mn.normalize(),e.setXYZ(n,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,h){const p=f.array,x=f.itemSize,S=f.normalized,g=new p.constructor(h.length*x);let y=0,E=0;for(let R=0,v=h.length;R<v;R++){f.isInterleavedBufferAttribute?y=h[R]*f.data.stride+f.offset:y=h[R]*x;for(let _=0;_<x;_++)g[E++]=p[y++]}return new ui(g,x,S)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let x=0,S=p.length;x<S;x++){const g=p[x],y=e(g,r);h.push(y)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],x=[];for(let S=0,g=p.length;S<g;S++){const y=p[S];x.push(y.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(n))}const l=e.morphAttributes;for(const p in l){const x=[],S=l[p];for(let g=0,y=S.length;g<y;g++)x.push(S[g].clone(n));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ud=new ee,Cx=new ee,bx=new lt;class br{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=ud.subVectors(r,n).cross(Cx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(ud),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||bx.getNormalMatrix(e),o=this.coplanarPoint(ud).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Px=0;class ls extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Ja,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eg,this.blendDst=wg,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qu,this.stencilZFail=qu,this.stencilZPass=qu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){rt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new br().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new xt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tr=new ee,dd=new ee,yl=new ee,Ml=new ee;class Lf{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=tr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,n),tr.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){dd.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),Ml.copy(this.origin).sub(dd);const l=e.distanceTo(n)*.5,u=-this.direction.dot(yl),f=Ml.dot(this.direction),h=-Ml.dot(yl),p=Ml.lengthSq(),x=Math.abs(1-u*u);let S,g,y,E;if(x>0)if(S=u*h-f,g=u*f-h,E=l*x,S>=0)if(g>=-E)if(g<=E){const R=1/x;S*=R,g*=R,y=S*(S+u*g+2*f)+g*(u*S+g+2*h)+p}else g=l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*h)+p;else g=-l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*h)+p;else g<=-E?(S=Math.max(0,-(-u*l+f)),g=S>0?-l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+p):g<=E?(S=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+p):(S=Math.max(0,-(u*l+f)),g=S>0?l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+p);else g=u>0?-l:l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(dd).addScaledVector(yl,g),y}intersectSphere(e,n){if(e.radius<0)return null;tr.subVectors(e.center,this.origin);const r=tr.dot(this.direction),o=tr.dot(tr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,f,h;const p=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-g.z)*S,h=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,h=(e.min.z-g.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,n,r,o,l){const u=this.origin,f=this.direction,h=f.x,p=f.y,x=f.z,S=e.x-u.x,g=e.y-u.y,y=e.z-u.z,E=n.x-u.x,R=n.y-u.y,v=n.z-u.z,_=r.x-u.x,N=r.y-u.y,B=r.z-u.z,C=Math.abs(h),P=Math.abs(p),b=Math.abs(x);let F,w,L,k,X,q,te,G,Q,pe,ie,Z;if(C>=P&&C>=b?(L=h,q=S,Q=E,Z=_,h>=0?(F=p,w=x,k=g,X=y,te=R,G=v,pe=N,ie=B):(F=x,w=p,k=y,X=g,te=v,G=R,pe=B,ie=N)):P>=b?(L=p,q=g,Q=R,Z=N,p>=0?(F=x,w=h,k=y,X=S,te=v,G=E,pe=B,ie=_):(F=h,w=x,k=S,X=y,te=E,G=v,pe=_,ie=B)):(L=x,q=y,Q=v,Z=B,x>=0?(F=h,w=p,k=S,X=g,te=E,G=R,pe=_,ie=N):(F=p,w=h,k=g,X=S,te=R,G=E,pe=N,ie=_)),L===0)return null;const Y=F/L,$=w/L,D=1/L,se=k-Y*q,Se=X-$*q,Ge=te-Y*Q,ze=G-$*Q,Ve=pe-Y*Z,oe=ie-$*Z,de=Ve*ze-oe*Ge,we=se*oe-Se*Ve,Je=Ge*Se-ze*se;if(o){if(de<0||we<0||Je<0)return null}else if((de<0||we<0||Je<0)&&(de>0||we>0||Je>0))return null;const Fe=de+we+Je;if(Fe===0)return null;const at=D*(de*q+we*Q+Je*Z);return(Fe>0?at<0:at>0)?null:this.at(at/Fe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wi extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.combine=Tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dm=new Wt,Jr=new Lf,El=new oo,Im=new ee,wl=new ee,Tl=new ee,Al=new ee,fd=new ee,Rl=new ee,Um=new ee,Cl=new ee;class jt extends gn{constructor(e=new _n,n=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Rl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const x=f[h],S=l[h];x!==0&&(fd.fromBufferAttribute(S,e),u?Rl.addScaledVector(fd,x):Rl.addScaledVector(fd.sub(n),x))}n.add(Rl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(El.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(El,Im)===null||Jr.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Dm.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(Dm),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Jr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,S=l.attributes.normal,g=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const v=g[E],_=u[v.materialIndex],N=Math.max(v.start,y.start),B=Math.min(f.count,Math.min(v.start+v.count,y.start+y.count));for(let C=N,P=B;C<P;C+=3){const b=f.getX(C),F=f.getX(C+1),w=f.getX(C+2);o=bl(this,_,e,r,p,x,S,b,F,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let v=E,_=R;v<_;v+=3){const N=f.getX(v),B=f.getX(v+1),C=f.getX(v+2);o=bl(this,u,e,r,p,x,S,N,B,C),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const v=g[E],_=u[v.materialIndex],N=Math.max(v.start,y.start),B=Math.min(h.count,Math.min(v.start+v.count,y.start+y.count));for(let C=N,P=B;C<P;C+=3){const b=C,F=C+1,w=C+2;o=bl(this,_,e,r,p,x,S,b,F,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let v=E,_=R;v<_;v+=3){const N=v,B=v+1,C=v+2;o=bl(this,u,e,r,p,x,S,N,B,C),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function Lx(s,e,n,r,o,l,u,f){let h;if(e.side===bn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===rs,f),h===null)return null;Cl.copy(f),Cl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Cl);return p<n.near||p>n.far?null:{distance:p,point:Cl.clone(),object:s}}function bl(s,e,n,r,o,l,u,f,h,p){s.getVertexPosition(f,wl),s.getVertexPosition(h,Tl),s.getVertexPosition(p,Al);const x=Lx(s,e,n,r,wl,Tl,Al,Um);if(x){const S=new ee;ci.getBarycoord(Um,wl,Tl,Al,S),o&&(x.uv=ci.getInterpolatedAttribute(o,f,h,p,S,new xt)),l&&(x.uv1=ci.getInterpolatedAttribute(l,f,h,p,S,new xt)),u&&(x.normal=ci.getInterpolatedAttribute(u,f,h,p,S,new ee),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new ee,materialIndex:0};ci.getNormal(wl,Tl,Al,g.normal),x.face=g,x.barycoord=S}return x}class Nx extends Fn{constructor(e=null,n=1,r=1,o,l,u,f,h,p=Sn,x=Sn,S,g){super(null,u,f,h,p,x,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qr=new oo,Dx=new xt(.5,.5),Pl=new ee;class Nf{constructor(e=new br,n=new br,r=new br,o=new br,l=new br,u=new br){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Oi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],x=l[4],S=l[5],g=l[6],y=l[7],E=l[8],R=l[9],v=l[10],_=l[11],N=l[12],B=l[13],C=l[14],P=l[15];if(o[0].setComponents(p-u,y-x,_-E,P-N).normalize(),o[1].setComponents(p+u,y+x,_+E,P+N).normalize(),o[2].setComponents(p+f,y+S,_+R,P+B).normalize(),o[3].setComponents(p-f,y-S,_-R,P-B).normalize(),r)o[4].setComponents(h,g,v,C).normalize(),o[5].setComponents(p-h,y-g,_-v,P-C).normalize();else if(o[4].setComponents(p-h,y-g,_-v,P-C).normalize(),n===Oi)o[5].setComponents(p+h,y+g,_+v,P+C).normalize();else if(n===io)o[5].setComponents(h,g,v,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const n=Dx.distanceTo(e.center);return Qr.radius=.7071067811865476+n,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Pl.x=o.normal.x>0?e.max.x:e.min.x,Pl.y=o.normal.y>0?e.max.y:e.min.y,Pl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qg extends ls{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ql=new ee,ec=new ee,Fm=new Wt,qa=new Lf,Ll=new oo,hd=new ee,Om=new ee;class Ix extends gn{constructor(e=new _n,n=new qg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,l=n.count;o<l;o++)Ql.fromBufferAttribute(n,o-1),ec.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Ql.distanceTo(ec);e.setAttribute("lineDistance",new Xt(r,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(o),Ll.radius+=l,e.ray.intersectsSphere(Ll)===!1)return;Fm.copy(o).invert(),qa.copy(e.ray).applyMatrix4(Fm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const y=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let R=y,v=E-1;R<v;R+=p){const _=x.getX(R),N=x.getX(R+1),B=Nl(this,e,qa,h,_,N,R);B&&n.push(B)}if(this.isLineLoop){const R=x.getX(E-1),v=x.getX(y),_=Nl(this,e,qa,h,R,v,E-1);_&&n.push(_)}}else{const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let R=y,v=E-1;R<v;R+=p){const _=Nl(this,e,qa,h,R,R+1,R);_&&n.push(_)}if(this.isLineLoop){const R=Nl(this,e,qa,h,E-1,y,E-1);R&&n.push(R)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Nl(s,e,n,r,o,l,u){const f=s.geometry.attributes.position;if(Ql.fromBufferAttribute(f,o),ec.fromBufferAttribute(f,l),n.distanceSqToSegment(Ql,ec,hd,Om)>r)return;hd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(hd);if(!(p<e.near||p>e.far))return{distance:p,point:Om.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const km=new ee,Bm=new ee;class Ux extends Ix{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,l=n.count;o<l;o+=2)km.fromBufferAttribute(n,o),Bm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+km.distanceTo(Bm);e.setAttribute("lineDistance",new Xt(r,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ff extends ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zm=new Wt,hf=new Lf,Dl=new oo,Il=new ee;class Hm extends gn{constructor(e=new _n,n=new ff){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Dl.copy(r.boundingSphere),Dl.applyMatrix4(o),Dl.radius+=l,e.ray.intersectsSphere(Dl)===!1)return;zm.copy(o).invert(),hf.copy(e.ray).applyMatrix4(zm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,S=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let E=g,R=y;E<R;E++){const v=p.getX(E);Il.fromBufferAttribute(S,v),Gm(Il,v,h,o,e,n,this)}}else{const g=Math.max(0,u.start),y=Math.min(S.count,u.start+u.count);for(let E=g,R=y;E<R;E++)Il.fromBufferAttribute(S,E),Gm(Il,E,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Gm(s,e,n,r,o,l,u){const f=hf.distanceSqToPoint(s);if(f<n){const h=new ee;hf.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Yg extends Fn{constructor(e=[],n=ss,r,o,l,u,f,h,p,x){super(e,n,r,o,l,u,f,h,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class so extends Fn{constructor(e,n,r=Bi,o,l,u,f=Sn,h=Sn,p,x=sr,S=1){if(x!==sr&&x!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,o,l,u,f,h,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Fx extends so{constructor(e,n=Bi,r=ss,o,l,u=Sn,f=Sn,h,p=sr){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,n,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $g extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ia extends _n{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],x=[],S=[];let g=0,y=0;E("z","y","x",-1,-1,r,n,e,u,l,0),E("z","y","x",1,-1,r,n,-e,u,l,1),E("x","z","y",1,1,e,r,n,o,u,2),E("x","z","y",1,-1,e,r,-n,o,u,3),E("x","y","z",1,-1,e,n,r,o,l,4),E("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(S,2));function E(R,v,_,N,B,C,P,b,F,w,L){const k=C/F,X=P/w,q=C/2,te=P/2,G=b/2,Q=F+1,pe=w+1;let ie=0,Z=0;const Y=new ee;for(let $=0;$<pe;$++){const D=$*X-te;for(let se=0;se<Q;se++){const Se=se*k-q;Y[R]=Se*N,Y[v]=D*B,Y[_]=G,p.push(Y.x,Y.y,Y.z),Y[R]=0,Y[v]=0,Y[_]=b>0?1:-1,x.push(Y.x,Y.y,Y.z),S.push(se/F),S.push(1-$/w),ie+=1}}for(let $=0;$<w;$++)for(let D=0;D<F;D++){const se=g+D+Q*$,Se=g+D+Q*($+1),Ge=g+(D+1)+Q*($+1),ze=g+(D+1)+Q*$;h.push(se,Se,ze),h.push(Se,Ge,ze),Z+=6}f.addGroup(y,Z,L),y+=Z,g+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Js extends _n{constructor(e=1,n=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const x=[],S=[],g=[],y=[];let E=0;const R=[],v=r/2;let _=0;N(),u===!1&&(e>0&&B(!0),n>0&&B(!1)),this.setIndex(x),this.setAttribute("position",new Xt(S,3)),this.setAttribute("normal",new Xt(g,3)),this.setAttribute("uv",new Xt(y,2));function N(){const C=new ee,P=new ee;let b=0;const F=(n-e)/r;for(let w=0;w<=l;w++){const L=[],k=w/l,X=k*(n-e)+e;for(let q=0;q<=o;q++){const te=q/o,G=te*h+f,Q=Math.sin(G),pe=Math.cos(G);P.x=X*Q,P.y=-k*r+v,P.z=X*pe,S.push(P.x,P.y,P.z),C.set(Q,F,pe).normalize(),g.push(C.x,C.y,C.z),y.push(te,1-k),L.push(E++)}R.push(L)}for(let w=0;w<o;w++)for(let L=0;L<l;L++){const k=R[L][w],X=R[L+1][w],q=R[L+1][w+1],te=R[L][w+1];(e>0||L!==0)&&(x.push(k,X,te),b+=3),(n>0||L!==l-1)&&(x.push(X,q,te),b+=3)}p.addGroup(_,b,0),_+=b}function B(C){const P=E,b=new xt,F=new ee;let w=0;const L=C===!0?e:n,k=C===!0?1:-1;for(let q=1;q<=o;q++)S.push(0,v*k,0),g.push(0,k,0),y.push(.5,.5),E++;const X=E;for(let q=0;q<=o;q++){const G=q/o*h+f,Q=Math.cos(G),pe=Math.sin(G);F.x=L*pe,F.y=v*k,F.z=L*Q,S.push(F.x,F.y,F.z),g.push(0,k,0),b.x=Q*.5+.5,b.y=pe*.5*k+.5,y.push(b.x,b.y),E++}for(let q=0;q<o;q++){const te=P+q,G=X+q;C===!0?x.push(G,G+1,te):x.push(G+1,G,te),w+=3}p.addGroup(_,w,C===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Df extends Js{constructor(e=1,n=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,n,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Df(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ul=new ee,Fl=new ee,pd=new ee,Ol=new ci;class Ox extends _n{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const o=Math.pow(10,4),l=Math.cos(Ks*n),u=e.getIndex(),f=e.getAttribute("position"),h=u?u.count:f.count,p=[0,0,0],x=["a","b","c"],S=new Array(3),g={},y=[];for(let E=0;E<h;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:R,b:v,c:_}=Ol;if(R.fromBufferAttribute(f,p[0]),v.fromBufferAttribute(f,p[1]),_.fromBufferAttribute(f,p[2]),Ol.getNormal(pd),S[0]=`${Math.round(R.x*o)},${Math.round(R.y*o)},${Math.round(R.z*o)}`,S[1]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,S[2]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,!(S[0]===S[1]||S[1]===S[2]||S[2]===S[0]))for(let N=0;N<3;N++){const B=(N+1)%3,C=S[N],P=S[B],b=Ol[x[N]],F=Ol[x[B]],w=`${C}_${P}`,L=`${P}_${C}`;L in g&&g[L]?(pd.dot(g[L].normal)<=l&&(y.push(b.x,b.y,b.z),y.push(F.x,F.y,F.z)),g[L]=null):w in g||(g[w]={index0:p[N],index1:p[B],normal:pd.clone()})}}for(const E in g)if(g[E]){const{index0:R,index1:v}=g[E];Ul.fromBufferAttribute(f,R),Fl.fromBufferAttribute(f,v),y.push(Ul.x,Ul.y,Ul.z),y.push(Fl.x,Fl.y,Fl.z)}this.setAttribute("position",new Xt(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class rc extends _n{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,f=Math.floor(r),h=Math.floor(o),p=f+1,x=h+1,S=e/f,g=n/h,y=[],E=[],R=[],v=[];for(let _=0;_<x;_++){const N=_*g-u;for(let B=0;B<p;B++){const C=B*S-l;E.push(C,-N,0),R.push(0,0,1),v.push(B/f),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let N=0;N<f;N++){const B=N+p*_,C=N+p*(_+1),P=N+1+p*(_+1),b=N+1+p*_;y.push(B,C,b),y.push(C,P,b)}this.setIndex(y),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(R,3)),this.setAttribute("uv",new Xt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}class If extends _n{constructor(e=.5,n=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],p=[],x=[];let S=e;const g=(n-e)/o,y=new ee,E=new xt;for(let R=0;R<=o;R++){for(let v=0;v<=r;v++){const _=l+v/r*u;y.x=S*Math.cos(_),y.y=S*Math.sin(_),h.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/n+1)/2,E.y=(y.y/n+1)/2,x.push(E.x,E.y)}S+=g}for(let R=0;R<o;R++){const v=R*(r+1);for(let _=0;_<r;_++){const N=_+v,B=N,C=N+r+1,P=N+r+2,b=N+1;f.push(B,C,b),f.push(C,P,b)}}this.setIndex(f),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new If(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Pr extends _n{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const x=[],S=new ee,g=new ee,y=[],E=[],R=[],v=[];for(let _=0;_<=r;_++){const N=[],B=_/r,C=u+B*f,P=e*Math.cos(C),b=Math.sqrt(e*e-P*P);let F=0;_===0&&u===0?F=.5/n:_===r&&h===Math.PI&&(F=-.5/n);for(let w=0;w<=n;w++){const L=w/n,k=o+L*l;S.x=-b*Math.cos(k),S.y=P,S.z=b*Math.sin(k),E.push(S.x,S.y,S.z),g.copy(S).normalize(),R.push(g.x,g.y,g.z),v.push(L+F,1-B),N.push(p++)}x.push(N)}for(let _=0;_<r;_++)for(let N=0;N<n;N++){const B=x[_][N+1],C=x[_][N],P=x[_+1][N],b=x[_+1][N+1];(_!==0||u>0)&&y.push(B,C,b),(_!==r-1||h<Math.PI)&&y.push(C,P,b)}this.setIndex(y),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(R,3)),this.setAttribute("uv",new Xt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tc extends _n{constructor(e=1,n=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const h=[],p=[],x=[],S=[],g=new ee,y=new ee,E=new ee;for(let R=0;R<=r;R++){const v=u+R/r*f;for(let _=0;_<=o;_++){const N=_/o*l;y.x=(e+n*Math.cos(v))*Math.cos(N),y.y=(e+n*Math.cos(v))*Math.sin(N),y.z=n*Math.sin(v),p.push(y.x,y.y,y.z),g.x=e*Math.cos(N),g.y=e*Math.sin(N),E.subVectors(y,g).normalize(),x.push(E.x,E.y,E.z),S.push(_/o),S.push(R/r)}}for(let R=1;R<=r;R++)for(let v=1;v<=o;v++){const _=(o+1)*R+v-1,N=(o+1)*(R-1)+v-1,B=(o+1)*(R-1)+v,C=(o+1)*R+v;h.push(_,N,C),h.push(N,B,C)}this.setIndex(h),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ea(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(Vm(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Vm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Un(s){const e={};for(let n=0;n<s.length;n++){const r=ea(s[n]);for(const o in r)e[o]=r[o]}return e}function Vm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function kx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function jg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Bx={clone:ea,merge:Un};var zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zx,this.fragmentShader=Hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new pt().setHex(o.value);break;case"v2":this.uniforms[r].value=new xt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Kt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new lt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Wt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gx extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ya extends ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=df,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vx extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wx extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Uf extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const md=new Wt,Wm=new ee,Xm=new ee;class Kg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nf,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Wm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wm),Xm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,r,o){md.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(md,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,h=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===io||e.reversedDepth?n.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),n.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kl=new ee,Bl=new na,Ni=new ee;class Zg extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kl,Bl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,Bl,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(kl,Bl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,Bl,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new ee,qm=new xt,Ym=new xt;class Zn extends Zg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,n){return this.getViewBounds(e,qm,Ym),n.subVectors(Ym,qm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ks*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,n-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Xx extends Kg{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0}}class $m extends Uf{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Xx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ff extends Zg{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=x*this.view.offsetY,h=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class qx extends Kg{constructor(){super(new Ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yx extends Uf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new qx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class $x extends Uf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vs=-90,Ws=1;class jx extends gn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Vs,Ws,e,n);o.layers=this.layers,this.add(o);const l=new Zn(Vs,Ws,e,n);l.layers=this.layers,this.add(l);const u=new Zn(Vs,Ws,e,n);u.layers=this.layers,this.add(u);const f=new Zn(Vs,Ws,e,n);f.layers=this.layers,this.add(f);const h=new Zn(Vs,Ws,e,n);h.layers=this.layers,this.add(h);const p=new Zn(Vs,Ws,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,f,h]=n;for(const p of n)this.remove(p);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===io)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(S,g,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Kx extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Zx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Hf=class Hf{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};Hf.prototype.isMatrix2=!0;let jm=Hf;function Km(s,e,n,r){const o=Jx(r);switch(n){case Og:return s*e;case Bg:return s*e/o.components*o.byteLength;case Ef:return s*e/o.components*o.byteLength;case as:return s*e*2/o.components*o.byteLength;case wf:return s*e*2/o.components*o.byteLength;case kg:return s*e*3/o.components*o.byteLength;case Ai:return s*e*4/o.components*o.byteLength;case Tf:return s*e*4/o.components*o.byteLength;case Vl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ud:case Od:return Math.max(s,16)*Math.max(e,8)/4;case Id:case Fd:return Math.max(s,8)*Math.max(e,8)/2;case kd:case Bd:case Hd:case Gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zd:case $l:case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $d:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sf:case af:case of:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lf:case cf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jl:case uf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Jx(s){switch(s){case Jn:case Dg:return{byteLength:1,components:1};case to:case Ig:case zi:return{byteLength:2,components:1};case yf:case Mf:return{byteLength:2,components:4};case Bi:case Sf:case Fi:return{byteLength:4,components:1};case Ug:case Fg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vf}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jg(){let s=null,e=!1,n=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),n(l,u)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Qx(s){const e=new WeakMap;function n(f,h){const p=f.array,x=f.usage,S=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,x),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const x=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,x);else{S.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<S.length;y++){const E=S[g],R=S[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++g,S[g]=R)}S.length=g+1;for(let y=0,E=S.length;y<E;y++){const R=S[y];s.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,n(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var eS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,SS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,MS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ES=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PS="gl_FragColor = linearToOutputTexel( gl_FragColor );",LS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,YS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$S=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ny=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ry=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ey=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ay=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,by=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,By=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_M=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:eS,alphahash_pars_fragment:tS,alphamap_fragment:nS,alphamap_pars_fragment:iS,alphatest_fragment:rS,alphatest_pars_fragment:sS,aomap_fragment:aS,aomap_pars_fragment:oS,batching_pars_vertex:lS,batching_vertex:cS,begin_vertex:uS,beginnormal_vertex:dS,bsdfs:fS,iridescence_fragment:hS,bumpmap_pars_fragment:pS,clipping_planes_fragment:mS,clipping_planes_pars_fragment:gS,clipping_planes_pars_vertex:_S,clipping_planes_vertex:vS,color_fragment:xS,color_pars_fragment:SS,color_pars_vertex:yS,color_vertex:MS,common:ES,cube_uv_reflection_fragment:wS,defaultnormal_vertex:TS,displacementmap_pars_vertex:AS,displacementmap_vertex:RS,emissivemap_fragment:CS,emissivemap_pars_fragment:bS,colorspace_fragment:PS,colorspace_pars_fragment:LS,envmap_fragment:NS,envmap_common_pars_fragment:DS,envmap_pars_fragment:IS,envmap_pars_vertex:US,envmap_physical_pars_fragment:qS,envmap_vertex:FS,fog_vertex:OS,fog_pars_vertex:kS,fog_fragment:BS,fog_pars_fragment:zS,gradientmap_pars_fragment:HS,lightmap_pars_fragment:GS,lights_lambert_fragment:VS,lights_lambert_pars_fragment:WS,lights_pars_begin:XS,lights_toon_fragment:YS,lights_toon_pars_fragment:$S,lights_phong_fragment:jS,lights_phong_pars_fragment:KS,lights_physical_fragment:ZS,lights_physical_pars_fragment:JS,lights_fragment_begin:QS,lights_fragment_maps:ey,lights_fragment_end:ty,lightprobes_pars_fragment:ny,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:ry,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:ay,map_fragment:oy,map_pars_fragment:ly,map_particle_fragment:cy,map_particle_pars_fragment:uy,metalnessmap_fragment:dy,metalnessmap_pars_fragment:fy,morphinstance_vertex:hy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:vy,normal_fragment_maps:xy,normal_pars_fragment:Sy,normal_pars_vertex:yy,normal_vertex:My,normalmap_pars_fragment:Ey,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Ty,clearcoat_pars_fragment:Ay,iridescence_pars_fragment:Ry,opaque_fragment:Cy,packing:by,premultiplied_alpha_fragment:Py,project_vertex:Ly,dithering_fragment:Ny,dithering_pars_fragment:Dy,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Uy,shadowmap_pars_fragment:Fy,shadowmap_pars_vertex:Oy,shadowmap_vertex:ky,shadowmask_pars_fragment:By,skinbase_vertex:zy,skinning_pars_vertex:Hy,skinning_vertex:Gy,skinnormal_vertex:Vy,specularmap_fragment:Wy,specularmap_pars_fragment:Xy,tonemapping_fragment:qy,tonemapping_pars_fragment:Yy,transmission_fragment:$y,transmission_pars_fragment:jy,uv_pars_fragment:Ky,uv_pars_vertex:Zy,uv_vertex:Jy,worldpos_vertex:Qy,background_vert:eM,background_frag:tM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:rM,cube_frag:sM,depth_vert:aM,depth_frag:oM,distance_vert:lM,distance_frag:cM,equirect_vert:uM,equirect_frag:dM,linedashed_vert:fM,linedashed_frag:hM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:_M,meshmatcap_vert:vM,meshmatcap_frag:xM,meshnormal_vert:SM,meshnormal_frag:yM,meshphong_vert:MM,meshphong_frag:EM,meshphysical_vert:wM,meshphysical_frag:TM,meshtoon_vert:AM,meshtoon_frag:RM,points_vert:CM,points_frag:bM,shadow_vert:PM,shadow_frag:LM,sprite_vert:NM,sprite_frag:DM},Ue={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ui={basic:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Un([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Un([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Un([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Un([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Un([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Un([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Un([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Un([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Un([Ue.common,Ue.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Un([Ue.lights,Ue.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ui.physical={uniforms:Un([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const zl={r:0,b:0,g:0},IM=new Wt,Qg=new lt;Qg.set(-1,0,0,0,1,0,0,0,1);function UM(s,e,n,r,o,l){const u=new pt(0);let f=o===!0?0:1,h,p,x=null,S=0,g=null;function y(N){let B=N.isScene===!0?N.background:null;if(B&&B.isTexture){const C=N.backgroundBlurriness>0;B=e.get(B,C)}return B}function E(N){let B=!1;const C=y(N);C===null?v(u,f):C&&C.isColor&&(v(C,1),B=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||B)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(N,B){const C=y(B);C&&(C.isCubeTexture||C.mapping===ic)?(p===void 0&&(p=new jt(new ia(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:ea(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,b,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(IM.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Qg),p.material.toneMapped=Et.getTransfer(C.colorSpace)!==It,(x!==C||S!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=C,S=C.version,g=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new jt(new rc(2,2),new Hi({name:"BackgroundMaterial",uniforms:ea(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.toneMapped=Et.getTransfer(C.colorSpace)!==It,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||S!==C.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,x=C,S=C.version,g=s.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function v(N,B){N.getRGB(zl,jg(s)),n.buffers.color.setClear(zl.r,zl.g,zl.b,B,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(N,B=1){u.set(N),f=B,v(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,v(u,f)},render:E,addToRenderList:R,dispose:_}}function FM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(X,q,te,G,Q){let pe=!1;const ie=S(X,G,te,q);l!==ie&&(l=ie,p(l.object)),pe=y(X,G,te,Q),pe&&E(X,G,te,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,C(X,q,te,G),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function h(){return s.createVertexArray()}function p(X){return s.bindVertexArray(X)}function x(X){return s.deleteVertexArray(X)}function S(X,q,te,G){const Q=G.wireframe===!0;let pe=r[q.id];pe===void 0&&(pe={},r[q.id]=pe);const ie=X.isInstancedMesh===!0?X.id:0;let Z=pe[ie];Z===void 0&&(Z={},pe[ie]=Z);let Y=Z[te.id];Y===void 0&&(Y={},Z[te.id]=Y);let $=Y[Q];return $===void 0&&($=g(h()),Y[Q]=$),$}function g(X){const q=[],te=[],G=[];for(let Q=0;Q<n;Q++)q[Q]=0,te[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:te,attributeDivisors:G,object:X,attributes:{},index:null}}function y(X,q,te,G){const Q=l.attributes,pe=q.attributes;let ie=0;const Z=te.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const D=Q[Y];let se=pe[Y];if(se===void 0&&(Y==="instanceMatrix"&&X.instanceMatrix&&(se=X.instanceMatrix),Y==="instanceColor"&&X.instanceColor&&(se=X.instanceColor)),D===void 0||D.attribute!==se||se&&D.data!==se.data)return!0;ie++}return l.attributesNum!==ie||l.index!==G}function E(X,q,te,G){const Q={},pe=q.attributes;let ie=0;const Z=te.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let D=pe[Y];D===void 0&&(Y==="instanceMatrix"&&X.instanceMatrix&&(D=X.instanceMatrix),Y==="instanceColor"&&X.instanceColor&&(D=X.instanceColor));const se={};se.attribute=D,D&&D.data&&(se.data=D.data),Q[Y]=se,ie++}l.attributes=Q,l.attributesNum=ie,l.index=G}function R(){const X=l.newAttributes;for(let q=0,te=X.length;q<te;q++)X[q]=0}function v(X){_(X,0)}function _(X,q){const te=l.newAttributes,G=l.enabledAttributes,Q=l.attributeDivisors;te[X]=1,G[X]===0&&(s.enableVertexAttribArray(X),G[X]=1),Q[X]!==q&&(s.vertexAttribDivisor(X,q),Q[X]=q)}function N(){const X=l.newAttributes,q=l.enabledAttributes;for(let te=0,G=q.length;te<G;te++)q[te]!==X[te]&&(s.disableVertexAttribArray(te),q[te]=0)}function B(X,q,te,G,Q,pe,ie){ie===!0?s.vertexAttribIPointer(X,q,te,Q,pe):s.vertexAttribPointer(X,q,te,G,Q,pe)}function C(X,q,te,G){R();const Q=G.attributes,pe=te.getAttributes(),ie=q.defaultAttributeValues;for(const Z in pe){const Y=pe[Z];if(Y.location>=0){let $=Q[Z];if($===void 0&&(Z==="instanceMatrix"&&X.instanceMatrix&&($=X.instanceMatrix),Z==="instanceColor"&&X.instanceColor&&($=X.instanceColor)),$!==void 0){const D=$.normalized,se=$.itemSize,Se=e.get($);if(Se===void 0)continue;const Ge=Se.buffer,ze=Se.type,Ve=Se.bytesPerElement,oe=ze===s.INT||ze===s.UNSIGNED_INT||$.gpuType===Sf;if($.isInterleavedBufferAttribute){const de=$.data,we=de.stride,Je=$.offset;if(de.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Y.locationSize;Fe++)_(Y.location+Fe,de.meshPerAttribute);X.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<Y.locationSize;Fe++)v(Y.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let Fe=0;Fe<Y.locationSize;Fe++)B(Y.location+Fe,se/Y.locationSize,ze,D,we*Ve,(Je+se/Y.locationSize*Fe)*Ve,oe)}else{if($.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)_(Y.location+de,$.meshPerAttribute);X.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<Y.locationSize;de++)v(Y.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let de=0;de<Y.locationSize;de++)B(Y.location+de,se/Y.locationSize,ze,D,se*Ve,se/Y.locationSize*de*Ve,oe)}}else if(ie!==void 0){const D=ie[Z];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(Y.location,D);break;case 3:s.vertexAttrib3fv(Y.location,D);break;case 4:s.vertexAttrib4fv(Y.location,D);break;default:s.vertexAttrib1fv(Y.location,D)}}}}N()}function P(){L();for(const X in r){const q=r[X];for(const te in q){const G=q[te];for(const Q in G){const pe=G[Q];for(const ie in pe)x(pe[ie].object),delete pe[ie];delete G[Q]}}delete r[X]}}function b(X){if(r[X.id]===void 0)return;const q=r[X.id];for(const te in q){const G=q[te];for(const Q in G){const pe=G[Q];for(const ie in pe)x(pe[ie].object),delete pe[ie];delete G[Q]}}delete r[X.id]}function F(X){for(const q in r){const te=r[q];for(const G in te){const Q=te[G];if(Q[X.id]===void 0)continue;const pe=Q[X.id];for(const ie in pe)x(pe[ie].object),delete pe[ie];delete Q[X.id]}}}function w(X){for(const q in r){const te=r[q],G=X.isInstancedMesh===!0?X.id:0,Q=te[G];if(Q!==void 0){for(const pe in Q){const ie=Q[pe];for(const Z in ie)x(ie[Z].object),delete ie[Z];delete Q[pe]}delete te[G],Object.keys(te).length===0&&delete r[q]}}}function L(){k(),u=!0,l!==o&&(l=o,p(l.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:k,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:v,disableUnusedAttributes:N}}function OM(s,e,n){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),n.update(p,r,1)}function u(h,p,x){x!==0&&(s.drawArraysInstanced(r,h,p,x),n.update(p,r,x))}function f(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,x);let g=0;for(let y=0;y<x;y++)g+=p[y];n.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function kM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ai&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const w=F===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Jn&&F!==Fi&&!w&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const x=h(p);x!==p&&(rt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),B=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:N,maxVaryings:B,maxFragmentUniforms:C,maxSamples:P,samples:b}}function BM(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new br,f=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||r!==0||o;return o=g,r=S.length,y},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){n=x(S,g,0)},this.setState=function(S,g,y){const E=S.clippingPlanes,R=S.clipIntersection,v=S.clipShadows,_=s.get(S);if(!o||E===null||E.length===0||l&&!v)l?x(null):p();else{const N=l?0:r,B=N*4;let C=_.clippingState||null;h.value=C,C=x(E,g,B,y);for(let P=0;P!==B;++P)C[P]=n[P];_.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function p(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,g,y,E){const R=S!==null?S.length:0;let v=null;if(R!==0){if(v=h.value,E!==!0||v===null){const _=y+R*4,N=g.matrixWorldInverse;f.getNormalMatrix(N),(v===null||v.length<_)&&(v=new Float32Array(_));for(let B=0,C=y;B!==R;++B,C+=4)u.copy(S[B]).applyMatrix4(N,f),u.normal.toArray(v,C),v[C+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}const $s=4,zM=6,HM=20,GM=256,$a=new Ff,Zm=new pt;let gd=null,_d=0,vd=0,xd=!1;const VM=new ee,es=new ee;class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:f=VM}=l;gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,_d,vd),this._renderer.xr.enabled=xd,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:zi,format:Ai,colorSpace:Kl,depthBuffer:!1},o=Qm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=WM(l)),this._blurMaterial=qM(l,e,n),this._ggxMaterial=XM(l,e,n)}return o}_compileMaterial(e){const n=new jt(new _n,e);this._renderer.compile(n,$a)}_sceneToCubeUV(e,n,r,o,l){const h=new Zn(90,1,n,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(Zm),S.toneMapping=ki,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new ia,new wi({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,v=R.material;let _=!1;const N=e.background;N?N.isColor&&(v.color.copy(N),e.background=null,_=!0):(v.color.copy(Zm),_=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(h.up.set(0,p[B],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+x[B],l.y,l.z)):C===1?(h.up.set(0,0,p[B]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+x[B],l.z)):(h.up.set(0,p[B],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+x[B]));const P=this._cubeSize;Xs(o,C*P,B>2?P:0,P,P),S.setRenderTarget(o),_&&S.render(R,h),S.render(e,h)}S.toneMapping=y,S.autoClear=g,e.background=N}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ss||e.mapping===Qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Xs(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,$a)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),S=Math.sqrt(p*p-x*x),g=p*1.25,y=S*g,{_lodMax:E}=this,R=this._sizeLods[r],v=3*R*(r>E-$s?r-E+$s:0),_=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=E-n,Xs(l,v,_,3*R,2*R),o.setRenderTarget(l),o.render(f,$a),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=E-r,Xs(e,v,_,3*R,2*R),o.setRenderTarget(e),o.render(f,$a)}_blur(e,n,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,n,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,n,r,o,l){const u=this._renderer,f=this._blurMaterial,h=this._lodMeshes[o];h.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const x=this._sizeLods[o],S=3*x*(o>this._lodMax-$s?o-this._lodMax+$s:0),g=4*(this._cubeSize-x);Xs(n,S,g,3*x,2*x),u.setRenderTarget(n),u.render(h,$a)}}function WM(s){const e=[],n=[];let r=s;const o=s-$s+1+zM;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),h=-f,p=1+f,x=[h,h,p,h,p,p,h,h,p,p,h,p],S=6,g=6,y=3,E=new Float32Array(y*g*S),R=new Float32Array(y*g*S);for(let _=0;_<S;_++){const N=_%3*2/3-1,B=_>2?0:-1,C=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];E.set(C,y*g*_);for(let P=0;P<g;P++){const b=x[P*2]*2-1,F=x[P*2+1]*2-1;_===0?es.set(1,F,b):_===1?es.set(-b,1,-F):_===2?es.set(-b,F,1):_===3?es.set(-1,F,-b):_===4?es.set(-b,-1,F):es.set(b,F,-1),es.toArray(R,(_*g+P)*y)}}const v=new _n;v.setAttribute("position",new ui(E,y)),v.setAttribute("outputDirection",new ui(R,y)),n.push(new jt(v,null)),r>$s&&r--}return{lodMeshes:n,sizeLods:e}}function Qm(s,e,n){const r=new Ri(s,e,n);return r.texture.mapping=ic,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function XM(s,e,n){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function qM(s,e,n){return new Hi({name:"SphericalGaussianBlur",defines:{SAMPLES:HM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function eg(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function tg(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class e0 extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Yg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ia(5,5,5),l=new Hi({name:"CubemapFromEquirect",uniforms:ea(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:ir});l.uniforms.tEquirect.value=n;const u=new jt(o,l),f=n.minFilter;return n.minFilter===ns&&(n.minFilter=Cn),new jx(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}function YM(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Vu||y===Wu)if(e.has(g)){const E=e.get(g).texture;return f(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const R=new e0(E.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",p),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,E=y===Vu||y===Wu,R=y===ss||y===Qs;if(E||R){let v=n.get(g);const _=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new Jm(s)),v=E?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),v.texture;if(v!==void 0)return v.texture;{const N=g.image;return E&&N&&N.height>0||R&&N&&h(N)?(r===null&&(r=new Jm(s)),v=E?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),g.addEventListener("dispose",x),v.texture):null}}}return g}function f(g,y){return y===Vu?g.mapping=ss:y===Wu&&(g.mapping=Qs),g}function h(g){let y=0;const E=6;for(let R=0;R<E;R++)g[R]!==void 0&&y++;return y===E}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const E=n.get(y);E!==void 0&&(n.delete(y),E.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function $M(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&js("WebGLRenderer: "+r+" extension not supported."),o}}}function jM(s,e,n,r){const o={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function h(S){const g=S.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function p(S){const g=[],y=S.index,E=S.attributes.position;let R=0;if(E===void 0)return;if(y!==null){const N=y.array;R=y.version;for(let B=0,C=N.length;B<C;B+=3){const P=N[B+0],b=N[B+1],F=N[B+2];g.push(P,b,b,F,F,P)}}else{const N=E.array;R=E.version;for(let B=0,C=N.length/3-1;B<C;B+=3){const P=B+0,b=B+1,F=B+2;g.push(P,b,b,F,F,P)}}const v=new(E.count>=65535?Xg:Wg)(g,1);v.version=R;const _=l.get(S);_&&e.remove(_),l.set(S,v)}function x(S){const g=l.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:x}}function KM(s,e,n){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,g){s.drawElements(r,g,l,S*u),n.update(g,r,1)}function p(S,g,y){y!==0&&(s.drawElementsInstanced(r,g,l,S*u,y),n.update(g,r,y))}function x(S,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,y);let R=0;for(let v=0;v<y;v++)R+=g[v];n.update(R,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=x}function ZM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:Lt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function JM(s,e,n){const r=new WeakMap,o=new Kt;function l(u,f,h){const p=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=x!==void 0?x.length:0;let g=r.get(f);if(g===void 0||g.count!==S){let k=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",k)};var y=k;g!==void 0&&g.texture.dispose();const E=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],B=f.morphAttributes.color||[];let C=0;E===!0&&(C=1),R===!0&&(C=2),v===!0&&(C=3);let P=f.attributes.position.count*C,b=1;P>e.maxTextureSize&&(b=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*b*4*S),w=new Hg(F,P,b,S);w.type=Fi,w.needsUpdate=!0;const L=C*4;for(let X=0;X<S;X++){const q=_[X],te=N[X],G=B[X],Q=P*b*4*X;for(let pe=0;pe<q.count;pe++){const ie=pe*L;E===!0&&(o.fromBufferAttribute(q,pe),F[Q+ie+0]=o.x,F[Q+ie+1]=o.y,F[Q+ie+2]=o.z,F[Q+ie+3]=0),R===!0&&(o.fromBufferAttribute(te,pe),F[Q+ie+4]=o.x,F[Q+ie+5]=o.y,F[Q+ie+6]=o.z,F[Q+ie+7]=0),v===!0&&(o.fromBufferAttribute(G,pe),F[Q+ie+8]=o.x,F[Q+ie+9]=o.y,F[Q+ie+10]=o.z,F[Q+ie+11]=G.itemSize===4?o.w:1)}}g={count:S,texture:w,size:new xt(P,b)},r.set(f,g),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let v=0;v<p.length;v++)E+=p[v];const R=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function QM(s,e,n,r,o){let l=new WeakMap;function u(p){const x=o.render.frame,S=p.geometry,g=e.get(p,S);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==x&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,x))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==x&&(y.update(),l.set(y,x))}return g}function f(){l=new WeakMap}function h(p){const x=p.target;x.removeEventListener("dispose",h),r.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:f}}const eE={[Ag]:"LINEAR_TONE_MAPPING",[Rg]:"REINHARD_TONE_MAPPING",[Cg]:"CINEON_TONE_MAPPING",[xf]:"ACES_FILMIC_TONE_MAPPING",[Pg]:"AGX_TONE_MAPPING",[Lg]:"NEUTRAL_TONE_MAPPING",[bg]:"CUSTOM_TONE_MAPPING"};function tE(s,e,n,r,o,l){const u=new Ri(e,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null;const p=new _n;p.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const x=new Gx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new jt(p,x),g=new Ff(-1,1,1,-1,0,1);let y=null,E=null,R=!1,v,_=null,N=[],B=!1;this.setSize=function(C,P){u.setSize(C,P),f!==null&&f.setSize(C,P),h!==null&&h.setSize(C,P);for(let b=0;b<N.length;b++){const F=N[b];F.setSize&&F.setSize(C,P)}},this.setEffects=function(C){N=C,B=N.length>0&&N[0].isRenderPass===!0;const P=u.width,b=u.height;N.length>0&&f===null&&(f=new Ri(P,b,{type:zi,depthBuffer:!1,stencilBuffer:!1}),h=new Ri(P,b,{type:zi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<N.length;F++){const w=N[F];w.setSize&&w.setSize(P,b)}},this.begin=function(C,P){if(R||C.toneMapping===ki&&N.length===0)return!1;if(_=P,P!==null){const b=P.width,F=P.height;(u.width!==b||u.height!==F)&&this.setSize(b,F)}return B===!1&&C.setRenderTarget(u),v=C.toneMapping,C.toneMapping=ki,!0},this.hasRenderPass=function(){return B},this.end=function(C,P){C.toneMapping=v,R=!0;let b=u,F=f;for(let w=0;w<N.length;w++){const L=N[w];L.enabled!==!1&&(L.render(C,F,b,P),L.needsSwap!==!1&&(b=F,F=F===f?h:f))}if(y!==C.outputColorSpace||E!==C.toneMapping){y=C.outputColorSpace,E=C.toneMapping,x.defines={},Et.getTransfer(y)===It&&(x.defines.SRGB_TRANSFER="");const w=eE[E];w&&(x.defines[w]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=b.texture,C.setRenderTarget(_),C.render(S,g),_=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),p.dispose(),x.dispose()}}const t0=new Fn,pf=new so(1,1),n0=new Hg,i0=new gx,r0=new Yg,ng=[],ig=[],rg=new Float32Array(16),sg=new Float32Array(9),ag=new Float32Array(4);function ra(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=ng[o];if(l===void 0&&(l=new Float32Array(o),ng[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function un(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function dn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function ac(s,e){let n=ig[e];n===void 0&&(n=new Int32Array(e),ig[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function nE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function iE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2fv(this.addr,e),dn(n,e)}}function rE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(un(n,e))return;s.uniform3fv(this.addr,e),dn(n,e)}}function sE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4fv(this.addr,e),dn(n,e)}}function aE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(n,e)}else{if(un(n,r))return;ag.set(r),s.uniformMatrix2fv(this.addr,!1,ag),dn(n,r)}}function oE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(n,e)}else{if(un(n,r))return;sg.set(r),s.uniformMatrix3fv(this.addr,!1,sg),dn(n,r)}}function lE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(n,e)}else{if(un(n,r))return;rg.set(r),s.uniformMatrix4fv(this.addr,!1,rg),dn(n,r)}}function cE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function uE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2iv(this.addr,e),dn(n,e)}}function dE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;s.uniform3iv(this.addr,e),dn(n,e)}}function fE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4iv(this.addr,e),dn(n,e)}}function hE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function pE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2uiv(this.addr,e),dn(n,e)}}function mE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;s.uniform3uiv(this.addr,e),dn(n,e)}}function gE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4uiv(this.addr,e),dn(n,e)}}function _E(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(pf.compareFunction=n.isReversedDepthBuffer()?Rf:Af,l=pf):l=t0,n.setTexture2D(e||l,o)}function vE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||i0,o)}function xE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||r0,o)}function SE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||n0,o)}function yE(s){switch(s){case 5126:return nE;case 35664:return iE;case 35665:return rE;case 35666:return sE;case 35674:return aE;case 35675:return oE;case 35676:return lE;case 5124:case 35670:return cE;case 35667:case 35671:return uE;case 35668:case 35672:return dE;case 35669:case 35673:return fE;case 5125:return hE;case 36294:return pE;case 36295:return mE;case 36296:return gE;case 35678:case 36198:case 36298:case 36306:case 35682:return _E;case 35679:case 36299:case 36307:return vE;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return SE}}function ME(s,e){s.uniform1fv(this.addr,e)}function EE(s,e){const n=ra(e,this.size,2);s.uniform2fv(this.addr,n)}function wE(s,e){const n=ra(e,this.size,3);s.uniform3fv(this.addr,n)}function TE(s,e){const n=ra(e,this.size,4);s.uniform4fv(this.addr,n)}function AE(s,e){const n=ra(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function RE(s,e){const n=ra(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function CE(s,e){const n=ra(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function bE(s,e){s.uniform1iv(this.addr,e)}function PE(s,e){s.uniform2iv(this.addr,e)}function LE(s,e){s.uniform3iv(this.addr,e)}function NE(s,e){s.uniform4iv(this.addr,e)}function DE(s,e){s.uniform1uiv(this.addr,e)}function IE(s,e){s.uniform2uiv(this.addr,e)}function UE(s,e){s.uniform3uiv(this.addr,e)}function FE(s,e){s.uniform4uiv(this.addr,e)}function OE(s,e,n){const r=this.cache,o=e.length,l=ac(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=pf:u=t0;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||u,l[f])}function kE(s,e,n){const r=this.cache,o=e.length,l=ac(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||i0,l[u])}function BE(s,e,n){const r=this.cache,o=e.length,l=ac(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||r0,l[u])}function zE(s,e,n){const r=this.cache,o=e.length,l=ac(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||n0,l[u])}function HE(s){switch(s){case 5126:return ME;case 35664:return EE;case 35665:return wE;case 35666:return TE;case 35674:return AE;case 35675:return RE;case 35676:return CE;case 5124:case 35670:return bE;case 35667:case 35671:return PE;case 35668:case 35672:return LE;case 35669:case 35673:return NE;case 5125:return DE;case 36294:return IE;case 36295:return UE;case 36296:return FE;case 35678:case 36198:case 36298:case 36306:case 35682:return OE;case 35679:case 36299:case 36307:return kE;case 35680:case 36300:case 36308:case 36293:return BE;case 36289:case 36303:case 36311:case 36292:return zE}}class GE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=yE(n.type)}}class VE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HE(n.type)}}class WE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,n[f.id],r)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function og(s,e){s.seq.push(e),s.map[e.id]=e}function XE(s,e,n){const r=s.name,o=r.length;for(Sd.lastIndex=0;;){const l=Sd.exec(r),u=Sd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){og(n,p===void 0?new GE(f,s,e):new VE(f,s,e));break}else{let S=n.map[f];S===void 0&&(S=new WE(f),og(n,S)),n=S}}}class Yl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(n,u),h=e.getUniformLocation(n,f.name);XE(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function lg(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const qE=37297;let YE=0;function $E(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const cg=new lt;function jE(s){Et._getMatrix(cg,Et.workingColorSpace,s);const e=`mat3( ${cg.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case Zl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ug(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+$E(s.getShaderSource(e),f)}else return l}function KE(s,e){const n=jE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const ZE={[Ag]:"Linear",[Rg]:"Reinhard",[Cg]:"Cineon",[xf]:"ACESFilmic",[Pg]:"AgX",[Lg]:"Neutral",[bg]:"Custom"};function JE(s,e){const n=ZE[e];return n===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Hl=new ee;function QE(){Et.getLuminanceCoefficients(Hl);const s=Hl.x.toFixed(4),e=Hl.y.toFixed(4),n=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function t1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function n1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Za(s){return s!==""}function dg(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i1=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(s){return s.replace(i1,s1)}const r1=new Map;function s1(s,e){let n=ht[e];if(n===void 0){const r=r1.get(e);if(r!==void 0)n=ht[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mf(n)}const a1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(s){return s.replace(a1,o1)}function o1(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function pg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const l1={[Gl]:"SHADOWMAP_TYPE_PCF",[Ka]:"SHADOWMAP_TYPE_VSM"};function c1(s){return l1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const u1={[ss]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[ic]:"ENVMAP_TYPE_CUBE_UV"};function d1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":u1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const f1={[Qs]:"ENVMAP_MODE_REFRACTION"};function h1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":f1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const p1={[Tg]:"ENVMAP_BLENDING_MULTIPLY",[Nv]:"ENVMAP_BLENDING_MIX",[Dv]:"ENVMAP_BLENDING_ADD"};function m1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":p1[s.combine]||"ENVMAP_BLENDING_NONE"}function g1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function _1(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=c1(n),p=d1(n),x=h1(n),S=m1(n),g=g1(n),y=e1(n),E=t1(l),R=o.createProgram();let v,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Za).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Za).join(`
`),_.length>0&&(_+=`
`)):(v=[pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),_=[pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+x:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?ht.tonemapping_pars_fragment:"",n.toneMapping!==ki?JE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,KE("linearToOutputTexel",n.outputColorSpace),QE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Za).join(`
`)),u=mf(u),u=dg(u,n),u=fg(u,n),f=mf(f),f=dg(f,n),f=fg(f,n),u=hg(u),f=hg(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",n.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const B=N+v+u,C=N+_+f,P=lg(o,o.VERTEX_SHADER,B),b=lg(o,o.FRAGMENT_SHADER,C);o.attachShader(R,P),o.attachShader(R,b),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function F(X){if(s.debug.checkShaderErrors){const q=o.getProgramInfoLog(R)||"",te=o.getShaderInfoLog(P)||"",G=o.getShaderInfoLog(b)||"",Q=q.trim(),pe=te.trim(),ie=G.trim();let Z=!0,Y=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,P,b);else{const $=ug(o,P,"vertex"),D=ug(o,b,"fragment");Lt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+Q+`
`+$+`
`+D)}else Q!==""?rt("WebGLProgram: Program Info Log:",Q):(pe===""||ie==="")&&(Y=!1);Y&&(X.diagnostics={runnable:Z,programLog:Q,vertexShader:{log:pe,prefix:v},fragmentShader:{log:ie,prefix:_}})}o.deleteShader(P),o.deleteShader(b),w=new Yl(o,R),L=n1(o,R)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(R,qE)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=P,this.fragmentShader=b,this}let v1=0;class x1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new S1(e),n.set(e,r)),r}}class S1{constructor(e){this.id=v1++,this.code=e,this.usedTimes=0}}function y1(s){return s===as||s===$l||s===jl}function M1(s,e,n,r,o,l){const u=new Gg,f=new x1,h=new Set,p=[],x=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return h.add(w),w===0?"uv":`uv${w}`}function R(w,L,k,X,q,te){const G=X.fog,Q=q.geometry,pe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Z=e.get(w.envMap||pe,ie),Y=Z&&Z.mapping===ic?Z.image.height:null,$=y[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&rt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const D=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,se=D!==void 0?D.length:0;let Se=0;Q.morphAttributes.position!==void 0&&(Se=1),Q.morphAttributes.normal!==void 0&&(Se=2),Q.morphAttributes.color!==void 0&&(Se=3);let Ge,ze,Ve,oe;if($){const Tt=Ui[$];Ge=Tt.vertexShader,ze=Tt.fragmentShader}else{Ge=w.vertexShader,ze=w.fragmentShader;const Tt=f.getVertexShaderStage(w),mt=f.getFragmentShaderStage(w);f.update(w,Tt,mt),Ve=Tt.id,oe=mt.id}const de=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Je=q.isInstancedMesh===!0,Fe=q.isBatchedMesh===!0,at=!!w.map,Ft=!!w.matcap,ct=!!Z,_t=!!w.aoMap,Ct=!!w.lightMap,ut=!!w.bumpMap&&w.wireframe===!1,wt=!!w.normalMap,Ht=!!w.displacementMap,Zt=!!w.emissiveMap,At=!!w.metalnessMap,Ot=!!w.roughnessMap,V=w.anisotropy>0,en=w.clearcoat>0,St=w.dispersion>0,I=w.retroreflectivity>0,M=w.iridescence>0,j=w.sheen>0,ae=w.transmission>0,he=V&&!!w.anisotropyMap,Ee=en&&!!w.clearcoatMap,Re=en&&!!w.clearcoatNormalMap,me=en&&!!w.clearcoatRoughnessMap,ge=M&&!!w.iridescenceMap,be=M&&!!w.iridescenceThicknessMap,qe=j&&!!w.sheenColorMap,Pe=j&&!!w.sheenRoughnessMap,Ce=!!w.specularMap,je=!!w.specularColorMap,et=!!w.specularIntensityMap,tt=ae&&!!w.transmissionMap,O=ae&&!!w.thicknessMap,ye=!!w.gradientMap,fe=!!w.alphaMap,Ae=w.alphaTest>0,Le=!!w.alphaHash,_e=!!w.extensions;let Oe=ki;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const We={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:Ge,fragmentShader:ze,defines:w.defines,customVertexShaderID:Ve,customFragmentShaderID:oe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Fe,batchingColor:Fe&&q._colorsTexture!==null,instancing:Je,instancingColor:Je&&q.instanceColor!==null,instancingMorph:Je&&q.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:at,matcap:Ft,envMap:ct,envMapMode:ct&&Z.mapping,envMapCubeUVHeight:Y,aoMap:_t,lightMap:Ct,bumpMap:ut,normalMap:wt,displacementMap:Ht,emissiveMap:Zt,normalMapObjectSpace:wt&&w.normalMapType===Fv,normalMapTangentSpace:wt&&w.normalMapType===df,packedNormalMap:wt&&w.normalMapType===df&&y1(w.normalMap.format),metalnessMap:At,roughnessMap:Ot,anisotropy:V,anisotropyMap:he,clearcoat:en,clearcoatMap:Ee,clearcoatNormalMap:Re,clearcoatRoughnessMap:me,dispersion:St,retroreflection:I,iridescence:M,iridescenceMap:ge,iridescenceThicknessMap:be,sheen:j,sheenColorMap:qe,sheenRoughnessMap:Pe,specularMap:Ce,specularColorMap:je,specularIntensityMap:et,transmission:ae,transmissionMap:tt,thicknessMap:O,gradientMap:ye,opaque:w.transparent===!1&&w.blending===Ja&&w.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ae,alphaHash:Le,combine:w.combine,mapUv:at&&E(w.map.channel),aoMapUv:_t&&E(w.aoMap.channel),lightMapUv:Ct&&E(w.lightMap.channel),bumpMapUv:ut&&E(w.bumpMap.channel),normalMapUv:wt&&E(w.normalMap.channel),displacementMapUv:Ht&&E(w.displacementMap.channel),emissiveMapUv:Zt&&E(w.emissiveMap.channel),metalnessMapUv:At&&E(w.metalnessMap.channel),roughnessMapUv:Ot&&E(w.roughnessMap.channel),anisotropyMapUv:he&&E(w.anisotropyMap.channel),clearcoatMapUv:Ee&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:be&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&E(w.sheenRoughnessMap.channel),specularMapUv:Ce&&E(w.specularMap.channel),specularColorMapUv:je&&E(w.specularColorMap.channel),specularIntensityMapUv:et&&E(w.specularIntensityMap.channel),transmissionMapUv:tt&&E(w.transmissionMap.channel),thicknessMapUv:O&&E(w.thicknessMap.channel),alphaMapUv:fe&&E(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(wt||V),vertexNormals:!!Q.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Q.attributes.uv&&(at||fe),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Q.attributes.normal===void 0&&wt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:we,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:at&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:Zt&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ti,flipSided:w.side===bn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:_e&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&w.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=h.has(1),We.vertexUv2s=h.has(2),We.vertexUv3s=h.has(3),h.clear(),We}function v(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)L.push(k),L.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(_(L,w),N(L,w),L.push(s.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function _(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numSunLights),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numSunLightShadows),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function N(w,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.retroreflection&&u.enable(24),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function B(w){const L=y[w.type];let k;if(L){const X=Ui[L];k=Bx.clone(X.uniforms)}else k=w.uniforms;return k}function C(w,L){let k=x.get(L);return k!==void 0?++k.usedTimes:(k=new _1(s,L,w,o),p.push(k),x.set(L,k)),k}function P(w){if(--w.usedTimes===0){const L=p.indexOf(w);p[L]=p[p.length-1],p.pop(),x.delete(w.cacheKey),w.destroy()}}function b(w){f.remove(w)}function F(){f.dispose()}return{getParameters:R,getProgramCacheKey:v,getUniforms:B,acquireProgram:C,releaseProgram:P,releaseShaderCache:b,programs:p,dispose:F}}function E1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function w1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gg(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function f(g,y,E,R,v,_){let N=s[e];return N===void 0?(N={id:g.id,object:g,geometry:y,material:E,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:v,group:_},s[e]=N):(N.id=g.id,N.object=g,N.geometry=y,N.material=E,N.materialVariant=u(g),N.groupOrder=R,N.renderOrder=g.renderOrder,N.z=v,N.group=_),e++,N}function h(g,y,E,R,v,_,N){N.reversedDepth===!0&&(v=-v);const B=f(g,y,E,R,v,_);E.transmission>0?r.push(B):E.transparent===!0?o.push(B):n.push(B)}function p(g,y,E,R,v,_){const N=f(g,y,E,R,v,_);E.transmission>0?r.unshift(N):E.transparent===!0?o.unshift(N):n.unshift(N)}function x(g,y){n.length>1&&n.sort(g||w1),r.length>1&&r.sort(y||mg),o.length>1&&o.sort(y||mg)}function S(){for(let g=e,y=s.length;g<y;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:x}}function T1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new gg,s.set(r,[u])):o>=l.length?(u=new gg,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function A1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new ee,color:new pt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=n,n}}}function R1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let C1=0;function b1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function P1(s){const e=new A1,n=R1(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ee);const o=new ee,l=new Wt,u=new Wt;function f(p){let x=0,S=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let y=0,E=0,R=0,v=0,_=0,N=0,B=0,C=0,P=0,b=0,F=0,w=0,L=0,k=0;p.sort(b1);for(let q=0,te=p.length;q<te;q++){const G=p[q],Q=G.color,pe=G.intensity,ie=G.distance;let Z=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===as?Z=G.shadow.map.texture:Z=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=Q.r*pe,S+=Q.g*pe,g+=Q.b*pe;else if(G.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(G.sh.coefficients[Y],pe);k++}else if(G.isSunLight){const Y=e.get(G);if(Y.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const $=G.shadow,D=n.get(G);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[E]=D,r.sunShadowMap[E]=Z;const se=$.getViewportCount();for(let Se=0;Se<se;Se++)r.sunShadowMatrix[R+Se]=$.getMatrix(Se),r.sunShadowCascade[R+Se]=$._cascadeData[Se];R+=se,E++}r.sun[y]=Y,y++}else if(G.isDirectionalLight){const Y=e.get(G);if(Y.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const $=G.shadow,D=n.get(G);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,r.directionalShadow[v]=D,r.directionalShadowMap[v]=Z,r.directionalShadowMatrix[v]=G.shadow.matrix,P++}r.directional[v]=Y,v++}else if(G.isSpotLight){const Y=e.get(G);Y.position.setFromMatrixPosition(G.matrixWorld),Y.color.copy(Q).multiplyScalar(pe),Y.distance=ie,Y.coneCos=Math.cos(G.angle),Y.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),Y.decay=G.decay,r.spot[N]=Y;const $=G.shadow;if(G.map&&(r.spotLightMap[w]=G.map,w++,$.updateMatrices(G),G.castShadow&&L++),r.spotLightMatrix[N]=$.matrix,G.castShadow){const D=n.get(G);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,r.spotShadow[N]=D,r.spotShadowMap[N]=Z,F++}N++}else if(G.isRectAreaLight){const Y=e.get(G);Y.color.copy(Q).multiplyScalar(pe),Y.halfWidth.set(G.width*.5,0,0),Y.halfHeight.set(0,G.height*.5,0),r.rectArea[B]=Y,B++}else if(G.isPointLight){const Y=e.get(G);if(Y.color.copy(G.color).multiplyScalar(G.intensity),Y.distance=G.distance,Y.decay=G.decay,G.castShadow){const $=G.shadow,D=n.get(G);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,r.pointShadow[_]=D,r.pointShadowMap[_]=Z,r.pointShadowMatrix[_]=G.shadow.matrix,b++}r.point[_]=Y,_++}else if(G.isHemisphereLight){const Y=e.get(G);Y.skyColor.copy(G.color).multiplyScalar(pe),Y.groundColor.copy(G.groundColor).multiplyScalar(pe),r.hemi[C]=Y,C++}}B>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=g;const X=r.hash;(X.sunLength!==y||X.directionalLength!==v||X.pointLength!==_||X.spotLength!==N||X.rectAreaLength!==B||X.hemiLength!==C||X.numSunShadows!==E||X.numDirectionalShadows!==P||X.numPointShadows!==b||X.numSpotShadows!==F||X.numSpotMaps!==w||X.numLightProbes!==k)&&(r.sun.length=y,r.directional.length=v,r.spot.length=N,r.rectArea.length=B,r.point.length=_,r.hemi.length=C,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.directionalShadowMatrix.length=P,r.pointShadow.length=b,r.pointShadowMap.length=b,r.pointShadowMatrix.length=b,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+w-L,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=k,X.sunLength=y,X.directionalLength=v,X.pointLength=_,X.spotLength=N,X.rectAreaLength=B,X.hemiLength=C,X.numSunShadows=E,X.numDirectionalShadows=P,X.numPointShadows=b,X.numSpotShadows=F,X.numSpotMaps=w,X.numLightProbes=k,r.version=C1++)}function h(p,x){let S=0,g=0,y=0,E=0,R=0,v=0;const _=x.matrixWorldInverse;for(let N=0,B=p.length;N<B;N++){const C=p[N];if(C.isSunLight){const P=r.sun[S];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(_),S++}else if(C.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),g++}else if(C.isSpotLight){const P=r.spot[E];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),E++}else if(C.isRectAreaLight){const P=r.rectArea[R];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(_),u.identity(),l.copy(C.matrixWorld),l.premultiply(_),u.extractRotation(l),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),R++}else if(C.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(_),y++}else if(C.isHemisphereLight){const P=r.hemi[v];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(_),v++}}}return{setup:f,setupView:h,state:r}}function _g(s){const e=new P1(s),n=[],r=[],o=[];function l(g){S.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function h(g){o.push(g)}function p(){e.setup(n)}function x(g){e.setupView(n,g)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:x,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function L1(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new _g(s),e.set(o,[f])):l>=u.length?(f=new _g(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const N1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,I1=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],U1=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],vg=new Wt,ja=new ee,yd=new ee;function F1(s,e,n){let r=new Nf;const o=new xt,l=new xt,u=new Kt,f=new Vx,h=new Wx,p={},x=n.maxTextureSize,S={[rs]:bn,[bn]:rs,[Ti]:Ti},g=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:N1,fragmentShader:D1}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new _n;E.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new jt(E,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let _=this.type;this.render=function(b,F,w){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;this.type===hv&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gl);const L=s.getRenderTarget(),k=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),q=s.state;q.setBlending(ir),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const te=_!==this.type;te&&F.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(Q=>Q.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,Q=b.length;G<Q;G++){const pe=b[G],ie=pe.shadow;if(ie===void 0){rt("WebGLShadowMap:",pe,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;o.copy(ie.mapSize);const Z=ie.getFrameExtents();o.multiply(Z),l.copy(ie.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/Z.x),o.x=l.x*Z.x,ie.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/Z.y),o.y=l.y*Z.y,ie.mapSize.y=l.y));const Y=s.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=Y,ie.map===null||te===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===Ka){if(pe.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new Ri(o.x,o.y,{format:as,type:zi,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),ie.map.texture.name=pe.name+".shadowMap",ie.map.depthTexture=new so(o.x,o.y,Fi),ie.map.depthTexture.name=pe.name+".shadowMapDepth",ie.map.depthTexture.format=sr,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Sn,ie.map.depthTexture.magFilter=Sn}else pe.isPointLight?(ie.map=new e0(o.x),ie.map.depthTexture=new Fx(o.x,Bi)):(ie.map=new Ri(o.x,o.y),ie.map.depthTexture=new so(o.x,o.y,Bi)),ie.map.depthTexture.name=pe.name+".shadowMap",ie.map.depthTexture.format=sr,this.type===Gl?(ie.map.depthTexture.compareFunction=Y?Rf:Af,ie.map.depthTexture.minFilter=Cn,ie.map.depthTexture.magFilter=Cn):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Sn,ie.map.depthTexture.magFilter=Sn);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==o.x||ie.map.height!==o.y)&&ie.map.setSize(o.x,o.y);const $=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();pe.isPointLight!==!0&&ie.updateMatrices(pe,w);for(let D=0;D<$;D++){const se=ie.getCamera(D);if(pe.isPointLight){const Se=ie.camera,Ge=ie.matrix,ze=pe.distance||Se.far;ze!==Se.far&&(Se.far=ze,Se.updateProjectionMatrix()),ja.setFromMatrixPosition(pe.matrixWorld),Se.position.copy(ja),yd.copy(Se.position),yd.add(I1[D]),Se.up.copy(U1[D]),Se.lookAt(yd),Se.updateMatrixWorld(),Ge.makeTranslation(-ja.x,-ja.y,-ja.z),vg.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(vg,Se.coordinateSystem,Se.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)s.setRenderTarget(ie.map,D),s.clear();else{D===0&&(s.setRenderTarget(ie.map),s.clear());const Se=ie.getViewport(D);u.set(l.x*Se.x,l.y*Se.y,l.x*Se.z,l.y*Se.w),q.viewport(u)}r=ie.getFrustum(D),C(F,w,se,pe,this.type)}ie.isPointLightShadow!==!0&&this.type===Ka&&N(ie,w),ie.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(L,k,X)};function N(b,F){const w=e.update(R);g.defines.VSM_SAMPLES!==b.blurSamples&&(g.defines.VSM_SAMPLES=b.blurSamples,y.defines.VSM_SAMPLES=b.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ri(o.x,o.y,{format:as,type:zi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),g.uniforms.shadow_pass.value=b.map.depthTexture,g.uniforms.resolution.value.set(b.map.width,b.map.height),g.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(F,null,w,g,R,null),y.uniforms.shadow_pass.value=b.mapPass.texture,y.uniforms.resolution.value.set(b.map.width,b.map.height),y.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(F,null,w,y,R,null)}function B(b,F,w,L){let k=null;const X=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(X!==void 0)k=X;else if(k=w.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=k.uuid,te=F.uuid;let G=p[q];G===void 0&&(G={},p[q]=G);let Q=G[te];Q===void 0&&(Q=k.clone(),G[te]=Q,F.addEventListener("dispose",P)),k=Q}if(k.visible=F.visible,k.wireframe=F.wireframe,L===Ka?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:S[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,w.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const q=s.properties.get(k);q.light=w}return k}function C(b,F,w,L,k){if(b.visible===!1)return;if(b.layers.test(F.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&k===Ka)&&(!b.frustumCulled||b.intersectsFrustum(r))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);const te=e.update(b),G=b.material;if(Array.isArray(G)){const Q=te.groups;for(let pe=0,ie=Q.length;pe<ie;pe++){const Z=Q[pe],Y=G[Z.materialIndex];if(Y&&Y.visible){const $=B(b,Y,L,k);b.onBeforeShadow(s,b,F,w,te,$,Z),s.renderBufferDirect(w,null,te,$,b,Z),b.onAfterShadow(s,b,F,w,te,$,Z)}}}else if(G.visible){const Q=B(b,G,L,k);b.onBeforeShadow(s,b,F,w,te,Q,null),s.renderBufferDirect(w,null,te,Q,b,null),b.onAfterShadow(s,b,F,w,te,Q,null)}}const q=b.children;for(let te=0,G=q.length;te<G;te++)C(q[te],F,w,L,k)}function P(b){b.target.removeEventListener("dispose",P);for(const w in p){const L=p[w],k=b.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}function O1(s,e){function n(){let O=!1;const ye=new Kt;let fe=null;const Ae=new Kt(0,0,0,0);return{setMask:function(Le){fe!==Le&&!O&&(s.colorMask(Le,Le,Le,Le),fe=Le)},setLocked:function(Le){O=Le},setClear:function(Le,_e,Oe,We,Tt){Tt===!0&&(Le*=We,_e*=We,Oe*=We),ye.set(Le,_e,Oe,We),Ae.equals(ye)===!1&&(s.clearColor(Le,_e,Oe,We),Ae.copy(ye))},reset:function(){O=!1,fe=null,Ae.set(-1,0,0,0)}}}function r(){let O=!1,ye=!1,fe=null,Ae=null,Le=null;return{setReversed:function(_e){if(ye!==_e){const Oe=e.get("EXT_clip_control");_e?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ye=_e;const We=Le;Le=null,this.setClear(We)}},getReversed:function(){return ye},setTest:function(_e){_e?de(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(_e){fe!==_e&&!O&&(s.depthMask(_e),fe=_e)},setFunc:function(_e){if(ye&&(_e=$v[_e]),Ae!==_e){switch(_e){case Td:s.depthFunc(s.NEVER);break;case Ad:s.depthFunc(s.ALWAYS);break;case Rd:s.depthFunc(s.LESS);break;case eo:s.depthFunc(s.LEQUAL);break;case Cd:s.depthFunc(s.EQUAL);break;case bd:s.depthFunc(s.GEQUAL);break;case Pd:s.depthFunc(s.GREATER);break;case Ld:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=_e}},setLocked:function(_e){O=_e},setClear:function(_e){Le!==_e&&(Le=_e,ye&&(_e=1-_e),s.clearDepth(_e))},reset:function(){O=!1,fe=null,Ae=null,Le=null,ye=!1}}}function o(){let O=!1,ye=null,fe=null,Ae=null,Le=null,_e=null,Oe=null,We=null,Tt=null;return{setTest:function(mt){O||(mt?de(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(mt){ye!==mt&&!O&&(s.stencilMask(mt),ye=mt)},setFunc:function(mt,an,On){(fe!==mt||Ae!==an||Le!==On)&&(s.stencilFunc(mt,an,On),fe=mt,Ae=an,Le=On)},setOp:function(mt,an,On){(_e!==mt||Oe!==an||We!==On)&&(s.stencilOp(mt,an,On),_e=mt,Oe=an,We=On)},setLocked:function(mt){O=mt},setClear:function(mt){Tt!==mt&&(s.clearStencil(mt),Tt=mt)},reset:function(){O=!1,ye=null,fe=null,Ae=null,Le=null,_e=null,Oe=null,We=null,Tt=null}}}const l=new n,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let x={},S={},g={},y=new WeakMap,E=[],R=null,v=!1,_=null,N=null,B=null,C=null,P=null,b=null,F=null,w=new pt(0,0,0),L=0,k=!1,X=null,q=null,te=null,G=null,Q=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ie=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ie=Z>=2);let $=null,D={};const se=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Ge=new Kt().fromArray(se),ze=new Kt().fromArray(Se);function Ve(O,ye,fe,Ae){const Le=new Uint8Array(4),_e=s.createTexture();s.bindTexture(O,_e),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<fe;Oe++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(ye+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return _e}const oe={};oe[s.TEXTURE_2D]=Ve(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=Ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=Ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=Ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),de(s.DEPTH_TEST),u.setFunc(eo),ut(!1),wt(pm),de(s.CULL_FACE),_t(ir);function de(O){x[O]!==!0&&(s.enable(O),x[O]=!0)}function we(O){x[O]!==!1&&(s.disable(O),x[O]=!1)}function Je(O,ye){return g[O]!==ye?(s.bindFramebuffer(O,ye),g[O]=ye,O===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=ye),O===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function Fe(O,ye){let fe=E,Ae=!1;if(O){fe=y.get(ye),fe===void 0&&(fe=[],y.set(ye,fe));const Le=O.textures;if(fe.length!==Le.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,Oe=Le.length;_e<Oe;_e++)fe[_e]=s.COLOR_ATTACHMENT0+_e;fe.length=Le.length,Ae=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(fe)}function at(O){return R!==O?(s.useProgram(O),R=O,!0):!1}const Ft={[qs]:s.FUNC_ADD,[mv]:s.FUNC_SUBTRACT,[gv]:s.FUNC_REVERSE_SUBTRACT};Ft[_v]=s.MIN,Ft[vv]=s.MAX;const ct={[xv]:s.ZERO,[Sv]:s.ONE,[yv]:s.SRC_COLOR,[Eg]:s.SRC_ALPHA,[Rv]:s.SRC_ALPHA_SATURATE,[Tv]:s.DST_COLOR,[Ev]:s.DST_ALPHA,[Mv]:s.ONE_MINUS_SRC_COLOR,[wg]:s.ONE_MINUS_SRC_ALPHA,[Av]:s.ONE_MINUS_DST_COLOR,[wv]:s.ONE_MINUS_DST_ALPHA,[Cv]:s.CONSTANT_COLOR,[bv]:s.ONE_MINUS_CONSTANT_COLOR,[Pv]:s.CONSTANT_ALPHA,[Lv]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(O,ye,fe,Ae,Le,_e,Oe,We,Tt,mt){if(O===ir){v===!0&&(we(s.BLEND),v=!1);return}if(v===!1&&(de(s.BLEND),v=!0),O!==pv){if(O!==_||mt!==k){if((N!==qs||P!==qs)&&(s.blendEquation(s.FUNC_ADD),N=qs,P=qs),mt)switch(O){case Ja:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mm:s.blendFunc(s.ONE,s.ONE);break;case gm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _m:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Lt("WebGLState: Invalid blending: ",O);break}else switch(O){case Ja:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case gm:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _m:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",O);break}B=null,C=null,b=null,F=null,w.set(0,0,0),L=0,_=O,k=mt}return}Le=Le||ye,_e=_e||fe,Oe=Oe||Ae,(ye!==N||Le!==P)&&(s.blendEquationSeparate(Ft[ye],Ft[Le]),N=ye,P=Le),(fe!==B||Ae!==C||_e!==b||Oe!==F)&&(s.blendFuncSeparate(ct[fe],ct[Ae],ct[_e],ct[Oe]),B=fe,C=Ae,b=_e,F=Oe),(We.equals(w)===!1||Tt!==L)&&(s.blendColor(We.r,We.g,We.b,Tt),w.copy(We),L=Tt),_=O,k=!1}function Ct(O,ye){O.side===Ti?we(s.CULL_FACE):de(s.CULL_FACE);let fe=O.side===bn;ye&&(fe=!fe),ut(fe),O.blending===Ja&&O.transparent===!1?_t(ir):_t(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),u.setFunc(O.depthFunc),u.setTest(O.depthTest),u.setMask(O.depthWrite),l.setMask(O.colorWrite);const Ae=O.stencilWrite;f.setTest(Ae),Ae&&(f.setMask(O.stencilWriteMask),f.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),f.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){X!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),X=O)}function wt(O){O!==dv?(de(s.CULL_FACE),O!==q&&(O===pm?s.cullFace(s.BACK):O===fv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),q=O}function Ht(O){O!==te&&(ie&&s.lineWidth(O),te=O)}function Zt(O,ye,fe){O?(de(s.POLYGON_OFFSET_FILL),(G!==ye||Q!==fe)&&(G=ye,Q=fe,u.getReversed()&&(ye=-ye),s.polygonOffset(ye,fe))):we(s.POLYGON_OFFSET_FILL)}function At(O){O?de(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Ot(O){O===void 0&&(O=s.TEXTURE0+pe-1),$!==O&&(s.activeTexture(O),$=O)}function V(O,ye,fe){fe===void 0&&($===null?fe=s.TEXTURE0+pe-1:fe=$);let Ae=D[fe];Ae===void 0&&(Ae={type:void 0,texture:void 0},D[fe]=Ae),(Ae.type!==O||Ae.texture!==ye)&&($!==fe&&(s.activeTexture(fe),$=fe),s.bindTexture(O,ye||oe[O]),Ae.type=O,Ae.texture=ye)}function en(){const O=D[$];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function St(){try{s.compressedTexImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function M(){try{s.texSubImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function j(){try{s.texSubImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function ae(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function Ee(){try{s.texStorage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function Re(){try{s.texStorage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function me(){try{s.texImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function ge(){try{s.texImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function be(O){return S[O]!==void 0?S[O]:s.getParameter(O)}function qe(O,ye){S[O]!==ye&&(s.pixelStorei(O,ye),S[O]=ye)}function Pe(O){Ge.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Ge.copy(O))}function Ce(O){ze.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ze.copy(O))}function je(O,ye){let fe=p.get(ye);fe===void 0&&(fe=new WeakMap,p.set(ye,fe));let Ae=fe.get(O);Ae===void 0&&(Ae=s.getUniformBlockIndex(ye,O.name),fe.set(O,Ae))}function et(O,ye){const Ae=p.get(ye).get(O);h.get(ye)!==Ae&&(s.uniformBlockBinding(ye,Ae,O.__bindingPointIndex),h.set(ye,Ae))}function tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},S={},$=null,D={},g={},y=new WeakMap,E=[],R=null,v=!1,_=null,N=null,B=null,C=null,P=null,b=null,F=null,w=new pt(0,0,0),L=0,k=!1,X=null,q=null,te=null,G=null,Q=null,Ge.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:de,disable:we,bindFramebuffer:Je,drawBuffers:Fe,useProgram:at,setBlending:_t,setMaterial:Ct,setFlipSided:ut,setCullFace:wt,setLineWidth:Ht,setPolygonOffset:Zt,setScissorTest:At,activeTexture:Ot,bindTexture:V,unbindTexture:en,compressedTexImage2D:St,compressedTexImage3D:I,texImage2D:me,texImage3D:ge,pixelStorei:qe,getParameter:be,updateUBOMapping:je,uniformBlockBinding:et,texStorage2D:Ee,texStorage3D:Re,texSubImage2D:M,texSubImage3D:j,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Pe,viewport:Ce,reset:tt}}function k1(s,e,n,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new xt,x=new WeakMap,S=new Set;let g;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(I,M){return E?new OffscreenCanvas(I,M):Jl("canvas")}function v(I,M,j){let ae=1;const he=St(I);if((he.width>j||he.height>j)&&(ae=j/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ee=Math.floor(ae*he.width),Re=Math.floor(ae*he.height);g===void 0&&(g=R(Ee,Re));const me=M?R(Ee,Re):g;return me.width=Ee,me.height=Re,me.getContext("2d").drawImage(I,0,0,Ee,Re),rt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+Re+")."),me}else return"data"in I&&rt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),I;return I}function _(I){return I.generateMipmaps}function N(I){s.generateMipmap(I)}function B(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(I,M,j,ae,he,Ee=!1){if(I!==null){if(s[I]!==void 0)return s[I];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Re;ae&&(Re=e.get("EXT_texture_norm16"),Re||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=M;if(M===s.RED&&(j===s.FLOAT&&(me=s.R32F),j===s.HALF_FLOAT&&(me=s.R16F),j===s.UNSIGNED_BYTE&&(me=s.R8),j===s.UNSIGNED_SHORT&&Re&&(me=Re.R16_EXT),j===s.SHORT&&Re&&(me=Re.R16_SNORM_EXT)),M===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(me=s.R8UI),j===s.UNSIGNED_SHORT&&(me=s.R16UI),j===s.UNSIGNED_INT&&(me=s.R32UI),j===s.BYTE&&(me=s.R8I),j===s.SHORT&&(me=s.R16I),j===s.INT&&(me=s.R32I)),M===s.RG&&(j===s.FLOAT&&(me=s.RG32F),j===s.HALF_FLOAT&&(me=s.RG16F),j===s.UNSIGNED_BYTE&&(me=s.RG8),j===s.UNSIGNED_SHORT&&Re&&(me=Re.RG16_EXT),j===s.SHORT&&Re&&(me=Re.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(me=s.RG8UI),j===s.UNSIGNED_SHORT&&(me=s.RG16UI),j===s.UNSIGNED_INT&&(me=s.RG32UI),j===s.BYTE&&(me=s.RG8I),j===s.SHORT&&(me=s.RG16I),j===s.INT&&(me=s.RG32I)),M===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(me=s.RGB8UI),j===s.UNSIGNED_SHORT&&(me=s.RGB16UI),j===s.UNSIGNED_INT&&(me=s.RGB32UI),j===s.BYTE&&(me=s.RGB8I),j===s.SHORT&&(me=s.RGB16I),j===s.INT&&(me=s.RGB32I)),M===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),j===s.UNSIGNED_INT&&(me=s.RGBA32UI),j===s.BYTE&&(me=s.RGBA8I),j===s.SHORT&&(me=s.RGBA16I),j===s.INT&&(me=s.RGBA32I)),M===s.RGB&&(j===s.UNSIGNED_SHORT&&Re&&(me=Re.RGB16_EXT),j===s.SHORT&&Re&&(me=Re.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),M===s.RGBA){const ge=Ee?Zl:Et.getTransfer(he);j===s.FLOAT&&(me=s.RGBA32F),j===s.HALF_FLOAT&&(me=s.RGBA16F),j===s.UNSIGNED_BYTE&&(me=ge===It?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&Re&&(me=Re.RGBA16_EXT),j===s.SHORT&&Re&&(me=Re.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function P(I,M){let j;return I?M===null||M===Bi||M===no?j=s.DEPTH24_STENCIL8:M===Fi?j=s.DEPTH32F_STENCIL8:M===to&&(j=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Bi||M===no?j=s.DEPTH_COMPONENT24:M===Fi?j=s.DEPTH_COMPONENT32F:M===to&&(j=s.DEPTH_COMPONENT16),j}function b(I,M){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Sn&&I.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function F(I){const M=I.target;M.removeEventListener("dispose",F),L(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&S.delete(M)}function w(I){const M=I.target;M.removeEventListener("dispose",w),X(M)}function L(I){const M=r.get(I);if(M.__webglInit===void 0)return;const j=I.source,ae=y.get(j);if(ae){const he=ae[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&k(I),Object.keys(ae).length===0&&y.delete(j)}r.remove(I)}function k(I){const M=r.get(I);s.deleteTexture(M.__webglTexture);const j=I.source,ae=y.get(j);delete ae[M.__cacheKey],u.memory.textures--}function X(I){const M=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(M.__webglFramebuffer[ae]))for(let he=0;he<M.__webglFramebuffer[ae].length;he++)s.deleteFramebuffer(M.__webglFramebuffer[ae][he]);else s.deleteFramebuffer(M.__webglFramebuffer[ae]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ae])}else{if(Array.isArray(M.__webglFramebuffer))for(let ae=0;ae<M.__webglFramebuffer.length;ae++)s.deleteFramebuffer(M.__webglFramebuffer[ae]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ae=0;ae<M.__webglColorRenderbuffer.length;ae++)M.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ae]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const j=I.textures;for(let ae=0,he=j.length;ae<he;ae++){const Ee=r.get(j[ae]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),u.memory.textures--),r.remove(j[ae])}r.remove(I)}let q=0;function te(){q=0}function G(){return q}function Q(I){q=I}function pe(){const I=q;return I>=o.maxTextures&&rt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),q+=1,I}function ie(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function Z(I,M){const j=r.get(I);if(I.isVideoTexture&&V(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const ae=I.image;if(ae===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(j,I,M);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+M)}function Y(I,M){const j=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){we(j,I,M);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+M)}function $(I,M){const j=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){we(j,I,M);return}n.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+M)}function D(I,M){const j=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){Je(j,I,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+M)}const se={[Nd]:s.REPEAT,[nr]:s.CLAMP_TO_EDGE,[Dd]:s.MIRRORED_REPEAT},Se={[Sn]:s.NEAREST,[Iv]:s.NEAREST_MIPMAP_NEAREST,[hl]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[Xu]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},Ge={[kv]:s.NEVER,[Vv]:s.ALWAYS,[Bv]:s.LESS,[Af]:s.LEQUAL,[zv]:s.EQUAL,[Rf]:s.GEQUAL,[Hv]:s.GREATER,[Gv]:s.NOTEQUAL};function ze(I,M){if(M.type===Fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===Xu||M.magFilter===hl||M.magFilter===ns||M.minFilter===Cn||M.minFilter===Xu||M.minFilter===hl||M.minFilter===ns)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,se[M.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,se[M.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,se[M.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Se[M.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==hl&&M.minFilter!==ns||M.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ve(I,M){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",F));const ae=M.source;let he=y.get(ae);he===void 0&&(he={},y.set(ae,he));const Ee=ie(M);if(Ee!==I.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,j=!0),he[Ee].usedTimes++;const Re=he[I.__cacheKey];Re!==void 0&&(he[I.__cacheKey].usedTimes--,Re.usedTimes===0&&k(M)),I.__cacheKey=Ee,I.__webglTexture=he[Ee].texture}return j}function oe(I,M,j){return Math.floor(Math.floor(I/j)/M)}function de(I,M,j,ae){const Ee=I.updateRanges;if(Ee.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,j,ae,M.data);else{Ee.sort((qe,Pe)=>qe.start-Pe.start);let Re=0;for(let qe=1;qe<Ee.length;qe++){const Pe=Ee[Re],Ce=Ee[qe],je=Pe.start+Pe.count,et=oe(Ce.start,M.width,4),tt=oe(Pe.start,M.width,4);Ce.start<=je+1&&et===tt&&oe(Ce.start+Ce.count-1,M.width,4)===et?Pe.count=Math.max(Pe.count,Ce.start+Ce.count-Pe.start):(++Re,Ee[Re]=Ce)}Ee.length=Re+1;const me=n.getParameter(s.UNPACK_ROW_LENGTH),ge=n.getParameter(s.UNPACK_SKIP_PIXELS),be=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let qe=0,Pe=Ee.length;qe<Pe;qe++){const Ce=Ee[qe],je=Math.floor(Ce.start/4),et=Math.ceil(Ce.count/4),tt=je%M.width,O=Math.floor(je/M.width),ye=et,fe=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(s.UNPACK_SKIP_ROWS,O),n.texSubImage2D(s.TEXTURE_2D,0,tt,O,ye,fe,j,ae,M.data)}I.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,me),n.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(s.UNPACK_SKIP_ROWS,be)}}function we(I,M,j){let ae=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=s.TEXTURE_3D);const he=Ve(I,M),Ee=M.source;n.bindTexture(ae,I.__webglTexture,s.TEXTURE0+j);const Re=r.get(Ee);if(Ee.version!==Re.__version||he===!0){if(n.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const fe=Et.getPrimaries(Et.workingColorSpace),Ae=M.colorSpace===Lr?null:Et.getPrimaries(M.colorSpace),Le=M.colorSpace===Lr||fe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let ge=v(M.image,!1,o.maxTextureSize);ge=en(M,ge);const be=l.convert(M.format,M.colorSpace),qe=l.convert(M.type);let Pe=C(M.internalFormat,be,qe,M.normalized,M.colorSpace,M.isVideoTexture);ze(ae,M);let Ce;const je=M.mipmaps,et=M.isVideoTexture!==!0,tt=Re.__version===void 0||he===!0,O=Ee.dataReady,ye=b(M,ge);if(M.isDepthTexture)Pe=P(M.format===is,M.type),tt&&(et?n.texStorage2D(s.TEXTURE_2D,1,Pe,ge.width,ge.height):n.texImage2D(s.TEXTURE_2D,0,Pe,ge.width,ge.height,0,be,qe,null));else if(M.isDataTexture)if(je.length>0){et&&tt&&n.texStorage2D(s.TEXTURE_2D,ye,Pe,je[0].width,je[0].height);for(let fe=0,Ae=je.length;fe<Ae;fe++)Ce=je[fe],et?O&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ce.width,Ce.height,be,qe,Ce.data):n.texImage2D(s.TEXTURE_2D,fe,Pe,Ce.width,Ce.height,0,be,qe,Ce.data);M.generateMipmaps=!1}else et?(tt&&n.texStorage2D(s.TEXTURE_2D,ye,Pe,ge.width,ge.height),O&&de(M,ge,be,qe)):n.texImage2D(s.TEXTURE_2D,0,Pe,ge.width,ge.height,0,be,qe,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){et&&tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ye,Pe,je[0].width,je[0].height,ge.depth);for(let fe=0,Ae=je.length;fe<Ae;fe++)if(Ce=je[fe],M.format!==Ai)if(be!==null)if(et){if(O)if(M.layerUpdates.size>0){const Le=Km(Ce.width,Ce.height,M.format,M.type);for(const _e of M.layerUpdates){const Oe=Ce.data.subarray(_e*Le/Ce.data.BYTES_PER_ELEMENT,(_e+1)*Le/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,_e,Ce.width,Ce.height,1,be,Oe)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ce.width,Ce.height,ge.depth,be,Ce.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,Pe,Ce.width,Ce.height,ge.depth,0,Ce.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?O&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ce.width,Ce.height,ge.depth,be,qe,Ce.data):n.texImage3D(s.TEXTURE_2D_ARRAY,fe,Pe,Ce.width,Ce.height,ge.depth,0,be,qe,Ce.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{et&&tt&&n.texStorage2D(s.TEXTURE_2D,ye,Pe,je[0].width,je[0].height);for(let fe=0,Ae=je.length;fe<Ae;fe++)Ce=je[fe],M.format!==Ai?be!==null?et?O&&n.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Ce.width,Ce.height,be,Ce.data):n.compressedTexImage2D(s.TEXTURE_2D,fe,Pe,Ce.width,Ce.height,0,Ce.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?O&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ce.width,Ce.height,be,qe,Ce.data):n.texImage2D(s.TEXTURE_2D,fe,Pe,Ce.width,Ce.height,0,be,qe,Ce.data)}else if(M.isDataArrayTexture)if(et){if(tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ye,Pe,ge.width,ge.height,ge.depth),O)if(M.layerUpdates.size>0){const fe=Km(ge.width,ge.height,M.format,M.type);for(const Ae of M.layerUpdates){const Le=ge.data.subarray(Ae*fe/ge.data.BYTES_PER_ELEMENT,(Ae+1)*fe/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ae,ge.width,ge.height,1,be,qe,Le)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,be,qe,ge.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,ge.width,ge.height,ge.depth,0,be,qe,ge.data);else if(M.isData3DTexture)et?(tt&&n.texStorage3D(s.TEXTURE_3D,ye,Pe,ge.width,ge.height,ge.depth),O&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,be,qe,ge.data)):n.texImage3D(s.TEXTURE_3D,0,Pe,ge.width,ge.height,ge.depth,0,be,qe,ge.data);else if(M.isFramebufferTexture){if(tt)if(et)n.texStorage2D(s.TEXTURE_2D,ye,Pe,ge.width,ge.height);else{let fe=ge.width,Ae=ge.height;for(let Le=0;Le<ye;Le++)n.texImage2D(s.TEXTURE_2D,Le,Pe,fe,Ae,0,be,qe,null),fe>>=1,Ae>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const fe=s.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),ge.parentNode!==fe){fe.appendChild(ge),S.add(M),fe.onpaint=Ae=>{const Le=Ae.changedElements;for(const _e of S)Le.includes(_e.image)&&(_e.needsUpdate=!0)},fe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const Le=s.RGBA,_e=s.RGBA,Oe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Le,_e,Oe,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(je.length>0){if(et&&tt){const fe=St(je[0]);n.texStorage2D(s.TEXTURE_2D,ye,Pe,fe.width,fe.height)}for(let fe=0,Ae=je.length;fe<Ae;fe++)Ce=je[fe],et?O&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,be,qe,Ce):n.texImage2D(s.TEXTURE_2D,fe,Pe,be,qe,Ce);M.generateMipmaps=!1}else if(et){if(tt){const fe=St(ge);n.texStorage2D(s.TEXTURE_2D,ye,Pe,fe.width,fe.height)}O&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,be,qe,ge)}else n.texImage2D(s.TEXTURE_2D,0,Pe,be,qe,ge);_(M)&&N(ae),Re.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Je(I,M,j){if(M.image.length!==6)return;const ae=Ve(I,M),he=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+j);const Ee=r.get(he);if(he.version!==Ee.__version||ae===!0){n.activeTexture(s.TEXTURE0+j);const Re=Et.getPrimaries(Et.workingColorSpace),me=M.colorSpace===Lr?null:Et.getPrimaries(M.colorSpace),ge=M.colorSpace===Lr||Re===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,qe=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let _e=0;_e<6;_e++)!be&&!qe?Pe[_e]=v(M.image[_e],!0,o.maxCubemapSize):Pe[_e]=qe?M.image[_e].image:M.image[_e],Pe[_e]=en(M,Pe[_e]);const Ce=Pe[0],je=l.convert(M.format,M.colorSpace),et=l.convert(M.type),tt=C(M.internalFormat,je,et,M.normalized,M.colorSpace),O=M.isVideoTexture!==!0,ye=Ee.__version===void 0||ae===!0,fe=he.dataReady;let Ae=b(M,Ce);ze(s.TEXTURE_CUBE_MAP,M);let Le;if(be){O&&ye&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,tt,Ce.width,Ce.height);for(let _e=0;_e<6;_e++){Le=Pe[_e].mipmaps;for(let Oe=0;Oe<Le.length;Oe++){const We=Le[Oe];M.format!==Ai?je!==null?O?fe&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,We.width,We.height,je,We.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,tt,We.width,We.height,0,We.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?fe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,We.width,We.height,je,et,We.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,tt,We.width,We.height,0,je,et,We.data)}}}else{if(Le=M.mipmaps,O&&ye){Le.length>0&&Ae++;const _e=St(Pe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,tt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(qe){O?fe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Pe[_e].width,Pe[_e].height,je,et,Pe[_e].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,tt,Pe[_e].width,Pe[_e].height,0,je,et,Pe[_e].data);for(let Oe=0;Oe<Le.length;Oe++){const Tt=Le[Oe].image[_e].image;O?fe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,Tt.width,Tt.height,je,et,Tt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,tt,Tt.width,Tt.height,0,je,et,Tt.data)}}else{O?fe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,je,et,Pe[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,tt,je,et,Pe[_e]);for(let Oe=0;Oe<Le.length;Oe++){const We=Le[Oe];O?fe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,je,et,We.image[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,tt,je,et,We.image[_e])}}}_(M)&&N(s.TEXTURE_CUBE_MAP),Ee.__version=he.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Fe(I,M,j,ae,he,Ee){const Re=l.convert(j.format,j.colorSpace),me=l.convert(j.type),ge=C(j.internalFormat,Re,me,j.normalized,j.colorSpace),be=r.get(M),qe=r.get(j);if(qe.__renderTarget=M,!be.__hasExternalTextures){const Pe=Math.max(1,M.width>>Ee),Ce=Math.max(1,M.height>>Ee);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?n.texImage3D(he,Ee,ge,Pe,Ce,M.depth,0,Re,me,null):n.texImage2D(he,Ee,ge,Pe,Ce,0,Re,me,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),Ot(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,he,qe.__webglTexture,0,At(M)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,he,qe.__webglTexture,Ee),n.bindFramebuffer(s.FRAMEBUFFER,null)}function at(I,M,j){if(s.bindRenderbuffer(s.RENDERBUFFER,I),M.depthBuffer){const ae=M.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,Ee=P(M.stencilBuffer,he),Re=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ot(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At(M),Ee,M.width,M.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,At(M),Ee,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,I)}else{const ae=M.textures;for(let he=0;he<ae.length;he++){const Ee=ae[he],Re=l.convert(Ee.format,Ee.colorSpace),me=l.convert(Ee.type),ge=C(Ee.internalFormat,Re,me,Ee.normalized,Ee.colorSpace);Ot(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At(M),ge,M.width,M.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,At(M),ge,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ge,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(I,M,j){const ae=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ze(s.TEXTURE_CUBE_MAP,M.depthTexture);const be=l.convert(M.depthTexture.format),qe=l.convert(M.depthTexture.type);let Pe;M.depthTexture.format===sr?Pe=s.DEPTH_COMPONENT24:M.depthTexture.format===is&&(Pe=s.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Pe,M.width,M.height,0,be,qe,null)}}else Z(M.depthTexture,0);const Ee=he.__webglTexture,Re=At(M),me=ae?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,ge=M.depthTexture.format===is?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===sr)Ot(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,me,Ee,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,ge,me,Ee,0);else if(M.depthTexture.format===is)Ot(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,me,Ee,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,ge,me,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(I){const M=r.get(I),j=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const ae=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ae){const he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=ae}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(j)for(let ae=0;ae<6;ae++)Ft(M.__webglFramebuffer[ae],I,ae);else{const ae=I.texture.mipmaps;ae&&ae.length>0?Ft(M.__webglFramebuffer[0],I,0):Ft(M.__webglFramebuffer,I,0)}else if(j){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]===void 0)M.__webglDepthbuffer[ae]=s.createRenderbuffer(),at(M.__webglDepthbuffer[ae],I,!1);else{const he=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer[ae];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ee)}}else{const ae=I.texture.mipmaps;if(ae&&ae.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),at(M.__webglDepthbuffer,I,!1);else{const he=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ee)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(I,M,j){const ae=r.get(I);M!==void 0&&Fe(ae.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&ct(I)}function Ct(I){const M=I.texture,j=r.get(I),ae=r.get(M);I.addEventListener("dispose",w);const he=I.textures,Ee=I.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=M.version,u.memory.textures++),Ee){j.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[me]=[];for(let ge=0;ge<M.mipmaps.length;ge++)j.__webglFramebuffer[me][ge]=s.createFramebuffer()}else j.__webglFramebuffer[me]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)j.__webglFramebuffer[me]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Re)for(let me=0,ge=he.length;me<ge;me++){const be=r.get(he[me]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&Ot(I)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const ge=he[me];j.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[me]);const be=l.convert(ge.format,ge.colorSpace),qe=l.convert(ge.type),Pe=C(ge.internalFormat,be,qe,ge.normalized,ge.colorSpace,I.isXRRenderTarget===!0),Ce=At(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,Pe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,j.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),at(j.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){n.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),ze(s.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Fe(j.__webglFramebuffer[me][ge],I,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ge);else Fe(j.__webglFramebuffer[me],I,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);_(M)&&N(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let me=0,ge=he.length;me<ge;me++){const be=he[me],qe=r.get(be);let Pe=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,qe.__webglTexture),ze(Pe,be),Fe(j.__webglFramebuffer,I,be,s.COLOR_ATTACHMENT0+me,Pe,0),_(be)&&N(Pe)}n.unbindTexture()}else{let me=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(me,ae.__webglTexture),ze(me,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Fe(j.__webglFramebuffer[ge],I,M,s.COLOR_ATTACHMENT0,me,ge);else Fe(j.__webglFramebuffer,I,M,s.COLOR_ATTACHMENT0,me,0);_(M)&&N(me),n.unbindTexture()}I.depthBuffer&&ct(I)}function ut(I){const M=I.textures;for(let j=0,ae=M.length;j<ae;j++){const he=M[j];if(_(he)){const Ee=B(I),Re=r.get(he).__webglTexture;n.bindTexture(Ee,Re),N(Ee),n.unbindTexture()}}}const wt=[],Ht=[];function Zt(I){if(I.samples>0){if(Ot(I)===!1){const M=I.textures,j=I.width,ae=I.height;let he=s.COLOR_BUFFER_BIT;const Ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=r.get(I),me=M.length>1;if(me)for(let be=0;be<M.length;be++)n.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ge=I.texture.mipmaps;ge&&ge.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let be=0;be<M.length;be++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);const qe=r.get(M[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qe,0)}s.blitFramebuffer(0,0,j,ae,0,0,j,ae,he,s.NEAREST),h===!0&&(wt.length=0,Ht.length=0,wt.push(s.COLOR_ATTACHMENT0+be),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(wt.push(Ee),Ht.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let be=0;be<M.length;be++){n.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);const qe=r.get(M[be]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,qe,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&h){const M=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function At(I){return Math.min(o.maxSamples,I.samples)}function Ot(I){const M=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function V(I){const M=u.render.frame;x.get(I)!==M&&(x.set(I,M),I.update())}function en(I,M){const j=I.colorSpace,ae=I.format,he=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Kl&&j!==Lr&&(Et.getTransfer(j)===It?(ae!==Ai||he!==Jn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",j)),M}function St(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=pe,this.resetTextureUnits=te,this.getTextureUnits=G,this.setTextureUnits=Q,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=$,this.setTextureCube=D,this.rebindTextures=_t,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function B1(s,e){function n(r,o=Lr){let l;const u=Et.getTransfer(o);if(r===Jn)return s.UNSIGNED_BYTE;if(r===yf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Mf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ug)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Fg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Dg)return s.BYTE;if(r===Ig)return s.SHORT;if(r===to)return s.UNSIGNED_SHORT;if(r===Sf)return s.INT;if(r===Bi)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===zi)return s.HALF_FLOAT;if(r===Og)return s.ALPHA;if(r===kg)return s.RGB;if(r===Ai)return s.RGBA;if(r===sr)return s.DEPTH_COMPONENT;if(r===is)return s.DEPTH_STENCIL;if(r===Bg)return s.RED;if(r===Ef)return s.RED_INTEGER;if(r===as)return s.RG;if(r===wf)return s.RG_INTEGER;if(r===Tf)return s.RGBA_INTEGER;if(r===Vl||r===Wl||r===Xl||r===ql)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Vl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Vl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===Ud||r===Fd||r===Od)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Id)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ud)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Od)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kd||r===Bd||r===zd||r===Hd||r===Gd||r===$l||r===Vd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===kd||r===Bd)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===zd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Hd)return l.COMPRESSED_R11_EAC;if(r===Gd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===$l)return l.COMPRESSED_RG11_EAC;if(r===Vd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Wd||r===Xd||r===qd||r===Yd||r===$d||r===jd||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Wd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$d)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ef)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sf||r===af||r===of)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===sf)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===af)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===of)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lf||r===cf||r===jl||r===uf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===lf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===cf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===no?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new $g(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Hi({vertexShader:z1,fragmentShader:H1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jt(new rc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V1 extends os{constructor(e,n){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,x=null,S=null,g=null,y=null,E=null;const R=typeof XRWebGLBinding<"u",v=new G1,_={},N=n.getContextAttributes();let B=null,C=null;const P=[],b=[],F=new xt;let w=null,L=null;const k=new Zn;k.viewport=new Kt;const X=new Zn;X.viewport=new Kt;const q=[k,X],te=new Kx;let G=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let de=P[oe];return de===void 0&&(de=new Ju,P[oe]=de),de.getTargetRaySpace()},this.getControllerGrip=function(oe){let de=P[oe];return de===void 0&&(de=new Ju,P[oe]=de),de.getGripSpace()},this.getHand=function(oe){let de=P[oe];return de===void 0&&(de=new Ju,P[oe]=de),de.getHandSpace()};function pe(oe){const de=b.indexOf(oe.inputSource);if(de===-1)return;const we=P[de];we!==void 0&&(we.update(oe.inputSource,oe.frame,p||u),we.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ie(){o.removeEventListener("select",pe),o.removeEventListener("selectstart",pe),o.removeEventListener("selectend",pe),o.removeEventListener("squeeze",pe),o.removeEventListener("squeezestart",pe),o.removeEventListener("squeezeend",pe),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",Z);for(let oe=0;oe<P.length;oe++){const de=b[oe];de!==null&&(b[oe]=null,P[oe].disconnect(de))}G=null,Q=null,v.reset();for(const oe in _)delete _[oe];if(e.setRenderTarget(B),y=null,g=null,S=null,o=null,C=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),L!==null){const oe=L.camera;oe.fov=L.fov,oe.zoom=L.zoom,oe.updateProjectionMatrix(),L=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",pe),o.addEventListener("selectstart",pe),o.addEventListener("selectend",pe),o.addEventListener("squeeze",pe),o.addEventListener("squeezestart",pe),o.addEventListener("squeezeend",pe),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",Z),N.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Je=null,Fe=null;N.depth&&(Fe=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=N.stencil?is:sr,Je=N.stencil?no:Bi);const at={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(at),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Ri(g.textureWidth,g.textureHeight,{format:Ai,type:Jn,depthTexture:new so(g.textureWidth,g.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const we={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,n,we),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Ri(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Ve.setContext(o),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(oe){for(let de=0;de<oe.removed.length;de++){const we=oe.removed[de],Je=b.indexOf(we);Je>=0&&(b[Je]=null,P[Je].disconnect(we))}for(let de=0;de<oe.added.length;de++){const we=oe.added[de];let Je=b.indexOf(we);if(Je===-1){for(let at=0;at<P.length;at++)if(at>=b.length){b.push(we),Je=at;break}else if(b[at]===null){b[at]=we,Je=at;break}if(Je===-1)break}const Fe=P[Je];Fe&&Fe.connect(we)}}const Y=new ee,$=new ee;function D(oe,de,we){Y.setFromMatrixPosition(de.matrixWorld),$.setFromMatrixPosition(we.matrixWorld);const Je=Y.distanceTo($),Fe=de.projectionMatrix.elements,at=we.projectionMatrix.elements,Ft=Fe[14]/(Fe[10]-1),ct=Fe[14]/(Fe[10]+1),_t=(Fe[9]+1)/Fe[5],Ct=(Fe[9]-1)/Fe[5],ut=(Fe[8]-1)/Fe[0],wt=(at[8]+1)/at[0],Ht=Ft*ut,Zt=Ft*wt,At=Je/(-ut+wt),Ot=At*-ut;if(de.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ot),oe.translateZ(At),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Fe[10]===-1)oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const V=Ft+At,en=ct+At,St=Ht-Ot,I=Zt+(Je-Ot),M=_t*ct/en*V,j=Ct*ct/en*V;oe.projectionMatrix.makePerspective(St,I,M,j,V,en),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function se(oe,de){de===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(de.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let de=oe.near,we=oe.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(we=v.depthFar)),te.near=X.near=k.near=de,te.far=X.far=k.far=we,(G!==te.near||Q!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),G=te.near,Q=te.far),te.layers.mask=oe.layers.mask|6,k.layers.mask=te.layers.mask&-5,X.layers.mask=te.layers.mask&-3;const Je=oe.parent,Fe=te.cameras;se(te,Je);for(let at=0;at<Fe.length;at++)se(Fe[at],Je);Fe.length===2?D(te,k,X):te.projectionMatrix.copy(k.projectionMatrix),L===null&&oe.isPerspectiveCamera&&(L={camera:oe,fov:oe.fov,zoom:oe.zoom}),Se(oe,te,Je)};function Se(oe,de,we){we===null?oe.matrix.copy(de.matrixWorld):(oe.matrix.copy(we.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(de.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=ro*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(oe){h=oe,g!==null&&(g.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(te)},this.getCameraTexture=function(oe){return _[oe]};let Ge=null;function ze(oe,de){if(x=de.getViewerPose(p||u),E=de,x!==null){const we=x.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Je=!1;we.length!==te.cameras.length&&(te.cameras.length=0,Je=!0);for(let ct=0;ct<we.length;ct++){const _t=we[ct];let Ct=null;if(y!==null)Ct=y.getViewport(_t);else{const wt=S.getViewSubImage(g,_t);Ct=wt.viewport,ct===0&&(e.setRenderTargetTextures(C,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(C))}let ut=q[ct];ut===void 0&&(ut=new Zn,ut.layers.enable(ct),ut.viewport=new Kt,q[ct]=ut),ut.matrix.fromArray(_t.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(_t.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ct===0&&(te.matrix.copy(ut.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Je===!0&&te.cameras.push(ut)}const Fe=o.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){S=r.getBinding();const ct=S.getDepthInformation(we[0]);ct&&ct.isValid&&ct.texture&&v.init(ct,o.renderState)}if(Fe&&Fe.includes("camera-access")&&R){e.state.unbindTexture(),S=r.getBinding();for(let ct=0;ct<we.length;ct++){const _t=we[ct].camera;if(_t){let Ct=_[_t];Ct||(Ct=new $g,_[_t]=Ct);const ut=S.getCameraImage(_t);Ct.sourceTexture=ut}}}}for(let we=0;we<P.length;we++){const Je=b[we],Fe=P[we];Je!==null&&Fe!==void 0&&Fe.update(Je,de,p||u)}Ge&&Ge(oe,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ve=new Jg;Ve.setAnimationLoop(ze),this.setAnimationLoop=function(oe){Ge=oe},this.dispose=function(){}}}const W1=new Wt,s0=new lt;s0.set(-1,0,0,0,1,0,0,0,1);function X1(s,e){function n(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,jg(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,N,B,C){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(v,_):_.isMeshLambertMaterial?(l(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(v,_),S(v,_)):_.isMeshPhongMaterial?(l(v,_),x(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(v,_),g(v,_),_.isMeshPhysicalMaterial&&y(v,_,C)):_.isMeshMatcapMaterial?(l(v,_),E(v,_)):_.isMeshDepthMaterial?l(v,_):_.isMeshDistanceMaterial?(l(v,_),R(v,_)):_.isMeshNormalMaterial?l(v,_):_.isLineBasicMaterial?(u(v,_),_.isLineDashedMaterial&&f(v,_)):_.isPointsMaterial?h(v,_,N,B):_.isSpriteMaterial?p(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,n(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===bn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,n(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===bn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,n(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,n(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const N=e.get(_),B=N.envMap,C=N.envMapRotation;B&&(v.envMap.value=B,v.envMapRotation.value.setFromMatrix4(W1.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(s0),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,v.aoMapTransform))}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform))}function f(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,N,B){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*N,v.scale.value=B*.5,_.map&&(v.map.value=_.map,n(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function p(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function x(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function S(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function y(v,_,N){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.retroreflectivity>0&&(v.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=N.texture,v.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const N=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(N.matrixWorld),v.nearDistance.value=N.shadow.camera.near,v.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function q1(s,e,n,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,P){const b=P.program;r.uniformBlockBinding(C,b)}function p(C,P){let b=o[C.id];b===void 0&&(v(C),b=x(C),o[C.id]=b,C.addEventListener("dispose",N));const F=P.program;r.updateUBOMapping(C,F);const w=e.render.frame;l[C.id]!==w&&(g(C),l[C.id]=w)}function x(C){const P=S();C.__bindingPointIndex=P;const b=s.createBuffer(),F=C.__size,w=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,F,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,b),b}function S(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=o[C.id],b=C.uniforms,F=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let w=0,L=b.length;w<L;w++){const k=b[w];if(Array.isArray(k))for(let X=0,q=k.length;X<q;X++)y(k[X],w,X,F);else y(k,w,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,P,b,F){if(R(C,P,b,F)===!0){const w=C.__offset,L=C.value;if(Array.isArray(L)){let k=0;for(let X=0;X<L.length;X++){const q=L[X],te=_(q);E(q,C.__data,k),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(k+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(L,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,C.__data)}}function E(C,P,b){typeof C=="number"||typeof C=="boolean"?P[0]=C:C.isMatrix3?(P[0]=C.elements[0],P[1]=C.elements[1],P[2]=C.elements[2],P[3]=0,P[4]=C.elements[3],P[5]=C.elements[4],P[6]=C.elements[5],P[7]=0,P[8]=C.elements[6],P[9]=C.elements[7],P[10]=C.elements[8],P[11]=0):ArrayBuffer.isView(C)?P.set(new C.constructor(C.buffer,C.byteOffset,P.length)):C.toArray(P,b)}function R(C,P,b,F){const w=C.value,L=P+"_"+b;if(F[L]===void 0)return typeof w=="number"||typeof w=="boolean"?F[L]=w:ArrayBuffer.isView(w)?F[L]=w.slice():F[L]=w.clone(),!0;{const k=F[L];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return F[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(k.equals(w)===!1)return k.copy(w),!0}}return!1}function v(C){const P=C.uniforms;let b=0;const F=16;for(let L=0,k=P.length;L<k;L++){const X=Array.isArray(P[L])?P[L]:[P[L]];for(let q=0,te=X.length;q<te;q++){const G=X[q],Q=Array.isArray(G.value)?G.value:[G.value];for(let pe=0,ie=Q.length;pe<ie;pe++){const Z=Q[pe],Y=_(Z),$=b%F,D=$%Y.boundary,se=$+D;b+=D,se!==0&&F-se<Y.storage&&(b+=F-se),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=Y.storage}}}const w=b%F;return w>0&&(b+=F-w),C.__size=b,C.__cache={},this}function _(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),P}function N(C){const P=C.target;P.removeEventListener("dispose",N);const b=u.indexOf(P.__bindingPointIndex);u.splice(b,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function B(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:h,update:p,dispose:B}}const Y1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function $1(){return Di===null&&(Di=new Nx(Y1,16,16,as,zi),Di.name="DFG_LUT",Di.minFilter=Cn,Di.magFilter=Cn,Di.wrapS=nr,Di.wrapT=nr,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class j1{constructor(e={}){const{canvas:n=qv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Jn}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const R=y,v=new Set([Tf,wf,Ef]),_=new Set([Jn,Bi,to,no,yf,Mf]),N=new Uint32Array(4),B=new Int32Array(4),C=new ee;let P=null,b=null;const F=[],w=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let X=!1,q=null,te=null,G=null,Q=null;this._outputColorSpace=li;let pe=0,ie=0,Z=null,Y=-1,$=null;const D=new Kt,se=new Kt;let Se=null;const Ge=new pt(0);let ze=0,Ve=n.width,oe=n.height,de=1,we=null,Je=null;const Fe=new Kt(0,0,Ve,oe),at=new Kt(0,0,Ve,oe);let Ft=!1;const ct=new Nf;let _t=!1,Ct=!1;const ut=new Wt,wt=new ee,Ht=new Kt,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Ot(){return Z===null?de:1}let V=r;function en(A,H){return n.getContext(A,H)}let St,I,M,j,ae,he,Ee,Re,me,ge,be,qe,Pe,Ce,je,et,tt,O,ye,fe,Ae,Le,_e;try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vf}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",an,!1),V===null){const H="webgl2";if(V=en(H,A),V===null)throw en(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(A){throw n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",an,!1),Lt("WebGLRenderer: "+A.message),A}function Oe(){St=new $M(V),St.init(),Ae=new B1(V,St),I=new kM(V,St,e,Ae),M=new O1(V,St),I.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),te=V.createFramebuffer(),G=V.createFramebuffer(),Q=V.createFramebuffer(),j=new ZM(V),ae=new E1,he=new k1(V,St,M,ae,I,Ae,j),Ee=new YM(k),Re=new Qx(V),Le=new FM(V,Re),me=new jM(V,Re,j,Le),ge=new QM(V,me,Re,Le,j),O=new JM(V,I,he),je=new BM(ae),be=new M1(k,Ee,St,I,Le,je),qe=new X1(k,ae),Pe=new T1,Ce=new L1(St),tt=new UM(k,Ee,M,ge,E,h),et=new F1(k,ge,I),_e=new q1(V,j,I,M),ye=new OM(V,St,j),fe=new KM(V,St,j),j.programs=be.programs,k.capabilities=I,k.extensions=St,k.properties=ae,k.renderLists=Pe,k.shadowMap=et,k.state=M,k.info=j}R!==Jn&&(L=new tE(R,n.width,n.height,f,o,l));const We=new V1(k,V);this.xr=We,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(A){A!==void 0&&(de=A,this.setSize(Ve,oe,!1))},this.getSize=function(A){return A.set(Ve,oe)},this.setSize=function(A,H,ce=!0){if(We.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=A,oe=H,n.width=Math.floor(A*de),n.height=Math.floor(H*de),ce===!0&&(n.style.width=A+"px",n.style.height=H+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Ve*de,oe*de).floor()},this.setDrawingBufferSize=function(A,H,ce){Ve=A,oe=H,de=ce,n.width=Math.floor(A*ce),n.height=Math.floor(H*ce),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(R===Jn){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Fe)},this.setViewport=function(A,H,ce,ne){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,H,ce,ne),M.viewport(D.copy(Fe).multiplyScalar(de).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,H,ce,ne){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,H,ce,ne),M.scissor(se.copy(at).multiplyScalar(de).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(A){M.setScissorTest(Ft=A)},this.setOpaqueSort=function(A){we=A},this.setTransparentSort=function(A){Je=A},this.getClearColor=function(A){return A.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,ce=!0){let ne=0;if(A){let J=!1;if(Z!==null){const Ie=Z.texture.format;J=v.has(Ie)}if(J){const Ie=Z.texture.type,Ne=_.has(Ie),De=tt.getClearColor(),Ye=tt.getClearAlpha(),Ze=De.r,ot=De.g,dt=De.b;Ne?(N[0]=Ze,N[1]=ot,N[2]=dt,N[3]=Ye,V.clearBufferuiv(V.COLOR,0,N)):(B[0]=Ze,B[1]=ot,B[2]=dt,B[3]=Ye,V.clearBufferiv(V.COLOR,0,B))}else ne|=V.COLOR_BUFFER_BIT}H&&(ne|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",an,!1),tt.dispose(),Pe.dispose(),Ce.dispose(),ae.dispose(),Ee.dispose(),ge.dispose(),Le.dispose(),_e.dispose(),be.dispose(),We.dispose(),We.removeEventListener("sessionstart",lo),We.removeEventListener("sessionend",co),Ln.stop()};function Tt(A){A.preventDefault(),Sm("WebGLRenderer: Context Lost."),X=!0}function mt(){Sm("WebGLRenderer: Context Restored."),X=!1;const A=j.autoReset,H=et.enabled,ce=et.autoUpdate,ne=et.needsUpdate,J=et.type;Oe(),j.autoReset=A,et.enabled=H,et.autoUpdate=ce,et.needsUpdate=ne,et.type=J}function an(A){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function On(A){const H=A.target;H.removeEventListener("dispose",On),Dr(H)}function Dr(A){cs(A),ae.remove(A)}function cs(A){const H=ae.get(A).programs;H!==void 0&&(H.forEach(function(ce){be.releaseProgram(ce)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,ce,ne,J,Ie){H===null&&(H=Zt);const Ne=J.isMesh&&J.matrixWorld.determinantAffine()<0,De=qt(A,H,ce,ne,J);M.setMaterial(ne,Ne);let Ye=ce.index,Ze=1;if(ne.wireframe===!0){if(Ye=me.getWireframeAttribute(ce),Ye===void 0)return;Ze=2}const ot=ce.drawRange,dt=ce.attributes.position;let He=ot.start*Ze,yt=(ot.start+ot.count)*Ze;Ie!==null&&(He=Math.max(He,Ie.start*Ze),yt=Math.min(yt,(Ie.start+Ie.count)*Ze)),Ye!==null?(He=Math.max(He,0),yt=Math.min(yt,Ye.count)):dt!=null&&(He=Math.max(He,0),yt=Math.min(yt,dt.count));const Jt=yt-He;if(Jt<0||Jt===1/0)return;Le.setup(J,ne,De,ce,Ye);let Ut,Nt=ye;if(Ye!==null&&(Ut=Re.get(Ye),Nt=fe,Nt.setIndex(Ut)),J.isMesh)ne.wireframe===!0?(M.setLineWidth(ne.wireframeLinewidth*Ot()),Nt.setMode(V.LINES)):Nt.setMode(V.TRIANGLES);else if(J.isLine){let on=ne.linewidth;on===void 0&&(on=1),M.setLineWidth(on*Ot()),J.isLineSegments?Nt.setMode(V.LINES):J.isLineLoop?Nt.setMode(V.LINE_LOOP):Nt.setMode(V.LINE_STRIP)}else J.isPoints?Nt.setMode(V.POINTS):J.isSprite&&Nt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(St.get("WEBGL_multi_draw"))Nt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const on=J._multiDrawStarts,ke=J._multiDrawCounts,tn=J._multiDrawCount,Mt=Ye?Re.get(Ye).bytesPerElement:1,yn=ae.get(ne).currentProgram.getUniforms();for(let ft=0;ft<tn;ft++)yn.setValue(V,"_gl_DrawID",ft),Nt.render(on[ft]/Mt,ke[ft])}else if(J.isInstancedMesh)Nt.renderInstances(He,Jt,J.count);else if(ce.isInstancedBufferGeometry){const on=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ke=Math.min(ce.instanceCount,on);Nt.renderInstances(He,Jt,ke)}else Nt.render(He,Jt)};function Ir(A,H,ce,ne){q!==null&&A.isNodeMaterial&&q.setObject(ne,A),_t===!0&&je.setState(A,ce,!1),A.transparent===!0&&A.side===Ti&&A.forceSinglePass===!1?(A.side=bn,A.needsUpdate=!0,Or(A,H,ne),A.side=rs,A.needsUpdate=!0,Or(A,H,ne),A.side=Ti):Or(A,H,ne)}this.compile=function(A,H,ce=null){ce===null&&(ce=A),q!==null&&q.renderStart(A,H,ce),b=Ce.get(ce),b.init(H),w.push(b),ce.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),A!==ce&&A.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),b.setupLights(),q!==null&&q.updateLights(b.state.lightsArray),Ct=this.localClippingEnabled,_t=je.init(this.clippingPlanes,Ct),_t===!0&&je.setGlobalState(this.clippingPlanes,H),q!==null&&et.render(b.state.shadowsArray,ce,H);const ne=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let Ne=0;Ne<Ie.length;Ne++){const De=Ie[Ne];Ir(De,ce,H,J),ne.add(De)}else Ir(Ie,ce,H,J),ne.add(Ie)}),b=w.pop(),q!==null&&q.renderEnd(),ne},this.compileAsync=function(A,H,ce=null){const ne=this.compile(A,H,ce);return new Promise(J=>{function Ie(){if(ne.forEach(function(Ne){const Ye=ae.get(Ne).currentProgram;(Ye===void 0||Ye.isReady())&&ne.delete(Ne)}),ne.size===0){J(A);return}setTimeout(Ie,10)}St.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Ur=null;function oc(A){Ur&&Ur(A)}function lo(){Ln.stop()}function co(){Ln.start()}const Ln=new Jg;Ln.setAnimationLoop(oc),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(A){Ur=A,We.setAnimationLoop(A),A===null?Ln.stop():Ln.start()},We.addEventListener("sessionstart",lo),We.addEventListener("sessionend",co),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;q!==null&&q.renderStart(A,H);const ce=We.enabled===!0&&We.isPresenting===!0,ne=L!==null&&(Z===null||ce)&&L.begin(k,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(H),H=We.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,H,Z),b=Ce.get(A,w.length),b.init(H),b.state.textureUnits=he.getTextureUnits(),w.push(b),ut.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ct.setFromProjectionMatrix(ut,Oi,H.reversedDepth),Ct=this.localClippingEnabled,_t=je.init(this.clippingPlanes,Ct),P=Pe.get(A,F.length),P.init(),F.push(P),We.enabled===!0&&We.isPresenting===!0){const Ne=k.xr.getDepthSensingMesh();Ne!==null&&us(Ne,H,-1/0,k.sortObjects)}us(A,H,0,k.sortObjects),P.finish(),q!==null&&q.updateLights(b.state.lightsArray),k.sortObjects===!0&&P.sort(we,Je),At=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,At&&tt.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&je.beginShadows();const J=b.state.shadowsArray;if(et.render(J,A,H),_t===!0&&je.endShadows(),(ne&&L.hasRenderPass())===!1){const Ne=P.opaque,De=P.transmissive;if(b.setupLights(),H.isArrayCamera){const Ye=H.cameras;if(De.length>0)for(let Ze=0,ot=Ye.length;Ze<ot;Ze++){const dt=Ye[Ze];uo(Ne,De,A,dt)}At&&tt.render(A);for(let Ze=0,ot=Ye.length;Ze<ot;Ze++){const dt=Ye[Ze];sa(P,A,dt,dt.viewport)}}else De.length>0&&uo(Ne,De,A,H),At&&tt.render(A),sa(P,A,H)}Z!==null&&ie===0&&(he.updateMultisampleRenderTarget(Z),he.updateRenderTargetMipmap(Z)),ne&&L.end(k),A.isScene===!0&&A.onAfterRender(k,A,H),Le.resetDefaultState(),Y=-1,$=null,w.pop(),w.length>0?(b=w[w.length-1],he.setTextureUnits(b.state.textureUnits),_t===!0&&je.setGlobalState(k.clippingPlanes,b.state.camera)):b=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,q!==null&&q.renderEnd()};function us(A,H,ce,ne){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ct)){ne&&Ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const Ne=ge.update(A),De=A.material;De.visible&&P.push(A,Ne,De,ce,Ht.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ct))){const Ne=ge.update(A),De=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ht.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ht.copy(Ne.boundingSphere.center)),Ht.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(De)){const Ye=Ne.groups;for(let Ze=0,ot=Ye.length;Ze<ot;Ze++){const dt=Ye[Ze],He=De[dt.materialIndex];He&&He.visible&&P.push(A,Ne,He,ce,Ht.z,dt,H)}}else De.visible&&P.push(A,Ne,De,ce,Ht.z,null,H)}}const Ie=A.children;for(let Ne=0,De=Ie.length;Ne<De;Ne++)us(Ie[Ne],H,ce,ne)}function sa(A,H,ce,ne){const{opaque:J,transmissive:Ie,transparent:Ne}=A;b.setupLightsView(ce),_t===!0&&je.setGlobalState(k.clippingPlanes,ce),ne&&M.viewport(D.copy(ne)),J.length>0&&Fr(J,H,ce),Ie.length>0&&Fr(Ie,H,ce),Ne.length>0&&Fr(Ne,H,ce),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function uo(A,H,ce,ne){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ne.id]===void 0){const He=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ne.id]=new Ri(1,1,{generateMipmaps:!0,type:He?zi:Jn,minFilter:ns,samples:Math.max(4,I.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ie=b.state.transmissionRenderTarget[ne.id],Ne=ne.viewport||D;Ie.setSize(Ne.z*k.transmissionResolutionScale,Ne.w*k.transmissionResolutionScale);const De=k.getRenderTarget(),Ye=k.getActiveCubeFace(),Ze=k.getActiveMipmapLevel();k.setRenderTarget(Ie),k.getClearColor(Ge),ze=k.getClearAlpha(),ze<1&&k.setClearColor(16777215,.5),k.clear(),At&&tt.render(ce);const ot=k.toneMapping;k.toneMapping=ki;const dt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),b.setupLightsView(ne),_t===!0&&je.setGlobalState(k.clippingPlanes,ne),Fr(A,ce,ne),he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie),St.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let yt=0,Jt=H.length;yt<Jt;yt++){const Ut=H[yt],{object:Nt,geometry:on,material:ke,group:tn}=Ut;if(ke.side===Ti&&Nt.layers.test(ne.layers)){const Mt=ke.side;ke.side=bn,ke.needsUpdate=!0,aa(Nt,ce,ne,on,ke,tn),ke.side=Mt,ke.needsUpdate=!0,He=!0}}He===!0&&(he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie))}k.setRenderTarget(De,Ye,Ze),k.setClearColor(Ge,ze),dt!==void 0&&(ne.viewport=dt),k.toneMapping=ot}function Fr(A,H,ce){const ne=H.isScene===!0?H.overrideMaterial:null;for(let J=0,Ie=A.length;J<Ie;J++){const Ne=A[J],{object:De,geometry:Ye,group:Ze}=Ne;let ot=Ne.material;ot.allowOverride===!0&&ne!==null&&(ot=ne),De.layers.test(ce.layers)&&aa(De,H,ce,Ye,ot,Ze)}}function aa(A,H,ce,ne,J,Ie){q!==null&&J.isNodeMaterial&&q.setObject(A,J),A.onBeforeRender(k,H,ce,ne,J,Ie),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(k,H,ce,ne,A,Ie),J.transparent===!0&&J.side===Ti&&J.forceSinglePass===!1?(J.side=bn,J.needsUpdate=!0,k.renderBufferDirect(ce,H,ne,J,A,Ie),J.side=rs,J.needsUpdate=!0,k.renderBufferDirect(ce,H,ne,J,A,Ie),J.side=Ti):k.renderBufferDirect(ce,H,ne,J,A,Ie),A.onAfterRender(k,H,ce,ne,J,Ie)}function Or(A,H,ce){H.isScene!==!0&&(H=Zt);const ne=ae.get(A),J=b.state.lights,Ie=b.state.shadowsArray,Ne=J.state.version,De=be.getParameters(A,J.state,Ie,H,ce,b.state.lightProbeGridArray),Ye=be.getProgramCacheKey(De);let Ze=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,ne.fog=H.fog;const ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Ee.get(A.envMap||ne.environment,ot),ne.envMapRotation=ne.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",On),Ze=new Map,ne.programs=Ze);let dt=Ze.get(Ye);if(dt!==void 0){if(ne.currentProgram===dt&&ne.lightsStateVersion===Ne)return fo(A,De),dt}else De.uniforms=be.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,ce,De),A.onBeforeCompile(De,k),dt=be.acquireProgram(De,Ye),Ze.set(Ye,dt),ne.uniforms=De.uniforms;const He=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=je.uniform),fo(A,De),ne.needsLights=la(A),ne.lightsStateVersion=Ne,ne.needsLights&&(He.ambientLightColor.value=J.state.ambient,He.lightProbe.value=J.state.probe,He.sunLights.value=J.state.sun,He.sunLightShadows.value=J.state.sunShadow,He.directionalLights.value=J.state.directional,He.directionalLightShadows.value=J.state.directionalShadow,He.spotLights.value=J.state.spot,He.spotLightShadows.value=J.state.spotShadow,He.rectAreaLights.value=J.state.rectArea,He.ltc_1.value=J.state.rectAreaLTC1,He.ltc_2.value=J.state.rectAreaLTC2,He.pointLights.value=J.state.point,He.pointLightShadows.value=J.state.pointShadow,He.hemisphereLights.value=J.state.hemi,He.sunShadowMatrix.value=J.state.sunShadowMatrix,He.sunShadowCascade.value=J.state.sunShadowCascade,He.directionalShadowMatrix.value=J.state.directionalShadowMatrix,He.spotLightMatrix.value=J.state.spotLightMatrix,He.spotLightMap.value=J.state.spotLightMap,He.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.lightProbeGrid=b.state.lightProbeGridArray.length>0,ne.currentProgram=dt,ne.uniformsList=null,dt}function oa(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Yl.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function fo(A,H){const ce=ae.get(A);ce.outputColorSpace=H.outputColorSpace,ce.batching=H.batching,ce.batchingColor=H.batchingColor,ce.instancing=H.instancing,ce.instancingColor=H.instancingColor,ce.instancingMorph=H.instancingMorph,ce.skinning=H.skinning,ce.morphTargets=H.morphTargets,ce.morphNormals=H.morphNormals,ce.morphColors=H.morphColors,ce.morphTargetsCount=H.morphTargetsCount,ce.numClippingPlanes=H.numClippingPlanes,ce.numIntersection=H.numClipIntersection,ce.vertexAlphas=H.vertexAlphas,ce.vertexTangents=H.vertexTangents,ce.toneMapping=H.toneMapping}function lc(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let ce=0,ne=A.length;ce<ne;ce++){const J=A[ce];if(J.texture!==null&&J.boundingBox.containsPoint(C))return J}return null}function qt(A,H,ce,ne,J){H.isScene!==!0&&(H=Zt),he.resetTextureUnits();const Ie=H.fog,Ne=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?H.environment:null,De=Z===null?k.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Et.workingColorSpace,Ye=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ze=Ee.get(ne.envMap||Ne,Ye),ot=ne.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,dt=!!ce.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),He=!!ce.morphAttributes.position,yt=!!ce.morphAttributes.normal,Jt=!!ce.morphAttributes.color;let Ut=ki;ne.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ut=k.toneMapping);const Nt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,on=Nt!==void 0?Nt.length:0,ke=ae.get(ne),tn=b.state.lights;if(_t===!0&&(Ct===!0||A!==$)){const Dt=A===$&&ne.id===Y;je.setState(ne,A,Dt)}let Mt=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==tn.state.version||ke.outputColorSpace!==De||J.isBatchedMesh&&ke.batching===!1||!J.isBatchedMesh&&ke.batching===!0||J.isBatchedMesh&&ke.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&ke.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&ke.instancing===!1||!J.isInstancedMesh&&ke.instancing===!0||J.isSkinnedMesh&&ke.skinning===!1||!J.isSkinnedMesh&&ke.skinning===!0||J.isInstancedMesh&&ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ke.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ke.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ke.instancingMorph===!1&&J.morphTexture!==null||ke.envMap!==Ze||ne.fog===!0&&ke.fog!==Ie||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==je.numPlanes||ke.numIntersection!==je.numIntersection)||ke.vertexAlphas!==ot||ke.vertexTangents!==dt||ke.morphTargets!==He||ke.morphNormals!==yt||ke.morphColors!==Jt||ke.toneMapping!==Ut||ke.morphTargetsCount!==on||!!ke.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,ke.__version=ne.version);let yn=ke.currentProgram;Mt===!0&&(yn=Or(ne,H,J),q&&ne.isNodeMaterial&&q.onUpdateProgram(ne,yn,ke));let ft=!1,di=!1,Gi=!1;const bt=yn.getUniforms(),Gt=ke.uniforms;if(M.useProgram(yn.program)&&(ft=!0,di=!0,Gi=!0),ne.id!==Y&&(Y=ne.id,di=!0),ke.needsLights){const Dt=lc(b.state.lightProbeGridArray,J);ke.lightProbeGrid!==Dt&&(ke.lightProbeGrid=Dt,di=!0)}if(ft||$!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(V,"projectionMatrix",A.projectionMatrix),bt.setValue(V,"viewMatrix",A.matrixWorldInverse);const ei=bt.map.cameraPosition;ei!==void 0&&ei.setValue(V,wt.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&bt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&bt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,di=!0,Gi=!0)}if(ke.needsLights&&(tn.state.sunShadowMap.length>0&&bt.setValue(V,"sunShadowMap",tn.state.sunShadowMap,he),tn.state.directionalShadowMap.length>0&&bt.setValue(V,"directionalShadowMap",tn.state.directionalShadowMap,he),tn.state.spotShadowMap.length>0&&bt.setValue(V,"spotShadowMap",tn.state.spotShadowMap,he),tn.state.pointShadowMap.length>0&&bt.setValue(V,"pointShadowMap",tn.state.pointShadowMap,he)),J.isSkinnedMesh){bt.setOptional(V,J,"bindMatrix"),bt.setOptional(V,J,"bindMatrixInverse");const Dt=J.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),bt.setValue(V,"boneTexture",Dt.boneTexture,he))}J.isBatchedMesh&&(bt.setOptional(V,J,"batchingTexture"),bt.setValue(V,"batchingTexture",J._matricesTexture,he),bt.setOptional(V,J,"batchingIdTexture"),bt.setValue(V,"batchingIdTexture",J._indirectTexture,he),bt.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&bt.setValue(V,"batchingColorTexture",J._colorsTexture,he));const fi=ce.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&O.update(J,ce,yn),(di||ke.receiveShadow!==J.receiveShadow)&&(ke.receiveShadow=J.receiveShadow,bt.setValue(V,"receiveShadow",J.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&H.environment!==null&&(Gt.envMapIntensity.value=H.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=$1()),di){if(bt.setValue(V,"toneMappingExposure",k.toneMappingExposure),ke.needsLights&&cc(Gt,Gi),Ie&&ne.fog===!0&&qe.refreshFogUniforms(Gt,Ie),qe.refreshMaterialUniforms(Gt,ne,de,oe,b.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const Dt=ke.lightProbeGrid;Gt.probesSH.value=Dt.texture,Gt.probesMin.value.copy(Dt.boundingBox.min),Gt.probesMax.value.copy(Dt.boundingBox.max),Gt.probesResolution.value.copy(Dt.resolution)}Yl.upload(V,oa(ke),Gt,he)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Yl.upload(V,oa(ke),Gt,he),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&bt.setValue(V,"center",J.center),bt.setValue(V,"modelViewMatrix",J.modelViewMatrix),bt.setValue(V,"normalMatrix",J.normalMatrix),bt.setValue(V,"modelMatrix",J.matrixWorld),ne.uniformsGroups!==void 0){const Dt=ne.uniformsGroups;for(let ei=0,hi=Dt.length;ei<hi;ei++){const pi=Dt[ei];_e.update(pi,yn),_e.bind(pi,yn)}}return yn}function cc(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function la(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return pe},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,H,ce){const ne=ae.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=H,ae.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ce,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const ce=ae.get(A);ce.__webglFramebuffer=H,ce.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,ce=0){Z=A,pe=H,ie=ce;let ne=null,J=!1,Ie=!1;if(A){const De=ae.get(A);if(De.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(V.FRAMEBUFFER,De.__webglFramebuffer),D.copy(A.viewport),se.copy(A.scissor),Se=A.scissorTest,M.viewport(D),M.scissor(se),M.setScissorTest(Se),Y=-1;return}else if(De.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(De.__hasExternalTextures)he.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ot=A.depthTexture;if(De.__boundDepthTexture!==ot){if(ot!==null&&ae.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ie=!0);const Ze=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[H])?ne=Ze[H][ce]:ne=Ze[H],J=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ne=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?ne=Ze[ce]:ne=Ze,D.copy(A.viewport),se.copy(A.scissor),Se=A.scissorTest}else D.copy(Fe).multiplyScalar(de).floor(),se.copy(at).multiplyScalar(de).floor(),Se=Ft;if(ce!==0&&(ne=te),M.bindFramebuffer(V.FRAMEBUFFER,ne)&&M.drawBuffers(A,ne),M.viewport(D),M.scissor(se),M.setScissorTest(Se),J){const De=ae.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,De.__webglTexture,ce)}else if(Ie){const De=H;for(let Ye=0;Ye<A.textures.length;Ye++){const Ze=ae.get(A.textures[Ye]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ye,Ze.__webglTexture,ce,De)}}else if(A!==null&&ce!==0){const De=ae.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,De.__webglTexture,ce)}Y=-1};function ca(A){const H=ae.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=I.textureFormatReadable(A.format),H.__typeReadable=I.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,ce,ne,J,Ie,Ne,De=0){if(!(A&&A.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ye=Ye[Ne]),Ye){M.bindFramebuffer(V.FRAMEBUFFER,Ye);try{const Ze=A.textures[De],ot=Ze.format,dt=Ze.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De);const He=ca(Ze);if(He.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-ne&&ce>=0&&ce<=A.height-J&&V.readPixels(H,ce,ne,J,Ae.convert(ot),Ae.convert(dt),Ie)}finally{const Ze=Z!==null?ae.get(Z).__webglFramebuffer:null;M.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,H,ce,ne,J,Ie,Ne,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ye=Ye[Ne]),Ye)if(H>=0&&H<=A.width-ne&&ce>=0&&ce<=A.height-J){M.bindFramebuffer(V.FRAMEBUFFER,Ye);const Ze=A.textures[De],ot=Ze.format,dt=Ze.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De);const He=ca(Ze);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.bufferData(V.PIXEL_PACK_BUFFER,Ie.byteLength,V.STREAM_READ),V.readPixels(H,ce,ne,J,Ae.convert(ot),Ae.convert(dt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const Jt=Z!==null?ae.get(Z).__webglFramebuffer:null;M.bindFramebuffer(V.FRAMEBUFFER,Jt);const Ut=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Yv(V,Ut,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ie),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(yt),V.deleteSync(Ut),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,ce=0){const ne=Math.pow(2,-ce),J=Math.floor(A.image.width*ne),Ie=Math.floor(A.image.height*ne),Ne=H!==null?H.x:0,De=H!==null?H.y:0;he.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,ce,0,0,Ne,De,J,Ie),M.unbindTexture()},this.copyTextureToTexture=function(A,H,ce=null,ne=null,J=0,Ie=0){let Ne,De,Ye,Ze,ot,dt,He,yt,Jt;const Ut=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(ce!==null)Ne=ce.max.x-ce.min.x,De=ce.max.y-ce.min.y,Ye=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,ot=ce.min.y,dt=ce.isBox3?ce.min.z:0;else{const Gt=Math.pow(2,-J);Ne=Math.floor(Ut.width*Gt),De=Math.floor(Ut.height*Gt),A.isDataArrayTexture?Ye=Ut.depth:A.isData3DTexture?Ye=Math.floor(Ut.depth*Gt):Ye=1,Ze=0,ot=0,dt=0}ne!==null?(He=ne.x,yt=ne.y,Jt=ne.z):(He=0,yt=0,Jt=0);const Nt=Ae.convert(H.format),on=Ae.convert(H.type);let ke;H.isData3DTexture?(he.setTexture3D(H,0),ke=V.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(he.setTexture2DArray(H,0),ke=V.TEXTURE_2D_ARRAY):(he.setTexture2D(H,0),ke=V.TEXTURE_2D),M.activeTexture(V.TEXTURE0),M.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);const tn=M.getParameter(V.UNPACK_ROW_LENGTH),Mt=M.getParameter(V.UNPACK_IMAGE_HEIGHT),yn=M.getParameter(V.UNPACK_SKIP_PIXELS),ft=M.getParameter(V.UNPACK_SKIP_ROWS),di=M.getParameter(V.UNPACK_SKIP_IMAGES);M.pixelStorei(V.UNPACK_ROW_LENGTH,Ut.width),M.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ut.height),M.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),M.pixelStorei(V.UNPACK_SKIP_ROWS,ot),M.pixelStorei(V.UNPACK_SKIP_IMAGES,dt);const Gi=A.isDataArrayTexture||A.isData3DTexture,bt=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const Gt=ae.get(A),fi=ae.get(H),Dt=ae.get(Gt.__renderTarget),ei=ae.get(fi.__renderTarget);M.bindFramebuffer(V.READ_FRAMEBUFFER,Dt.__webglFramebuffer),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let hi=0;hi<Ye;hi++)Gi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,J,dt+hi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ae.get(H).__webglTexture,Ie,Jt+hi)),V.blitFramebuffer(Ze,ot,Ne,De,He,yt,Ne,De,V.DEPTH_BUFFER_BIT,V.NEAREST);M.bindFramebuffer(V.READ_FRAMEBUFFER,null),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||ae.has(A)){const Gt=ae.get(A),fi=ae.get(H);M.bindFramebuffer(V.READ_FRAMEBUFFER,G),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,Q);for(let Dt=0;Dt<Ye;Dt++)Gi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Gt.__webglTexture,J,dt+Dt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Gt.__webglTexture,J),bt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,fi.__webglTexture,Ie,Jt+Dt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,fi.__webglTexture,Ie),J!==0?V.blitFramebuffer(Ze,ot,Ne,De,He,yt,Ne,De,V.COLOR_BUFFER_BIT,V.NEAREST):bt?V.copyTexSubImage3D(ke,Ie,He,yt,Jt+Dt,Ze,ot,Ne,De):V.copyTexSubImage2D(ke,Ie,He,yt,Ze,ot,Ne,De);M.bindFramebuffer(V.READ_FRAMEBUFFER,null),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(ke,Ie,He,yt,Jt,Ne,De,Ye,Nt,on,Ut.data):H.isCompressedArrayTexture?V.compressedTexSubImage3D(ke,Ie,He,yt,Jt,Ne,De,Ye,Nt,Ut.data):V.texSubImage3D(ke,Ie,He,yt,Jt,Ne,De,Ye,Nt,on,Ut):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ie,He,yt,Ne,De,Nt,on,Ut.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ie,He,yt,Ut.width,Ut.height,Nt,Ut.data):V.texSubImage2D(V.TEXTURE_2D,Ie,He,yt,Ne,De,Nt,on,Ut);M.pixelStorei(V.UNPACK_ROW_LENGTH,tn),M.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),M.pixelStorei(V.UNPACK_SKIP_PIXELS,yn),M.pixelStorei(V.UNPACK_SKIP_ROWS,ft),M.pixelStorei(V.UNPACK_SKIP_IMAGES,di),Ie===0&&H.generateMipmaps&&V.generateMipmap(ke),M.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){pe=0,ie=0,Z=null,M.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}const K1=()=>{const s=Qn.useRef(null);return Qn.useEffect(()=>{const e=s.current;if(!e)return;const n=new wx;n.fog=new Pf(132626,.012);const r=new Zn(45,window.innerWidth/window.innerHeight,.1,1e3);r.position.set(0,1.5,14);const o=new j1({antialias:!0,alpha:!0,powerPreference:"high-performance"});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.toneMapping=xf,o.toneMappingExposure=1.3,e.appendChild(o.domElement);const l=new $x(727352,2.2);n.add(l);const u=new $m(16752947,5,120);u.position.set(-16,10,-10),n.add(u);const f=new Yx(63231,3);f.position.set(12,-4,10),n.add(f);const h=new $m(11032055,2.5,50);h.position.set(0,-6,5),n.add(h);const p=2400,x=new _n,S=new Float32Array(p*3),g=new Float32Array(p*3),y=[new pt(16777215),new pt(63231),new pt(11032055),new pt(16498468)];for(let O=0;O<p;O++){S[O*3]=(Math.random()-.5)*180,S[O*3+1]=(Math.random()-.5)*140,S[O*3+2]=(Math.random()-.5)*180;const ye=y[Math.floor(Math.random()*y.length)];g[O*3]=ye.r,g[O*3+1]=ye.g,g[O*3+2]=ye.b}x.setAttribute("position",new ui(S,3)),x.setAttribute("color",new ui(g,3));const E=new ff({size:.4,vertexColors:!0,transparent:!0,opacity:.9}),R=new Hm(x,E);n.add(R);const v=new Ii;v.position.set(-14,8,-12);const _=new Pr(3.8,32,32),N=new wi({color:16752680}),B=new jt(_,N);v.add(B);const C=new Pr(4.4,32,32),P=new wi({color:16737792,transparent:!0,opacity:.35,side:bn}),b=new jt(C,P);v.add(b);const F=new If(4.4,8,64),w=new wi({color:16758531,transparent:!0,opacity:.25,side:Ti}),L=new jt(F,w);L.rotation.x=Math.PI*.35,v.add(L),n.add(v);const k=new Ii;k.position.set(3,.4,0);const X=new Js(.7,.7,2.5,16),q=new Ya({color:1976635,metalness:.9,roughness:.2,emissive:334125}),te=new jt(X,q);k.add(te);const G=new Pr(.6,16,16),Q=new wi({color:63231,wireframe:!0}),pe=new jt(G,Q);k.add(pe);const ie=new tc(1.65,.05,16,64),Z=new wi({color:63231,transparent:!0,opacity:.8}),Y=new jt(ie,Z);Y.rotation.x=Math.PI/2,k.add(Y);const $=new tc(1.35,.04,16,64),D=new wi({color:11032055,transparent:!0,opacity:.7}),se=new jt($,D);se.rotation.y=Math.PI/3,k.add(se);const Se=new Ii,Ge=O=>{const ye=new Ii,fe=O?-3.5:3.5,Ae=new Js(.06,.06,1.8,8),Le=new Ya({color:6583435,metalness:.8}),_e=new jt(Ae,Le);_e.rotation.z=Math.PI/2,_e.position.x=O?-1.4:1.4,ye.add(_e);for(let Oe=-1;Oe<=1;Oe++){const We=new ia(1.4,.05,.95),Tt=new Ya({color:267051,emissive:8772,metalness:.75,roughness:.15}),mt=new jt(We,Tt);mt.position.set(fe+Oe*1.5*(O?-1:1),0,0);const an=new Ox(We),On=new Ux(an,new qg({color:63231,linewidth:1.5}));mt.add(On),ye.add(mt)}return ye},ze=Ge(!0),Ve=Ge(!1);Se.add(ze),Se.add(Ve),k.add(Se);const oe=new Df(.85,.55,32,1,!0),de=new Ya({color:3359061,metalness:.85,roughness:.25,side:Ti}),we=new jt(oe,de);we.position.y=-1.6,we.rotation.x=Math.PI,k.add(we),n.add(k);const Je=new Js(.08,.45,14,16),Fe=new wi({color:63231,transparent:!0,opacity:.6}),at=new jt(Je,Fe);at.position.set(0,-7.5,-2),at.rotation.z=.25,k.add(at);const Ft=50,ct=new Pr(.07,8,8),_t=new wi({color:16777215}),Ct=new Ii,ut=[];for(let O=0;O<Ft;O++){const ye=new jt(ct,_t);Ct.add(ye),ut.push({mesh:ye,speed:.06+Math.random()*.07,offset:Math.random()*14})}k.add(Ct);const wt=new Ii;wt.position.set(-2,-22,-8);const Ht=new Pr(18,64,64),Zt=new Ya({color:199454,roughness:.85,metalness:.1,emissive:132883}),At=new jt(Ht,Zt);wt.add(At);const Ot=new Pr(18.4,64,64),V=new wi({color:63231,transparent:!0,opacity:.22,side:bn}),en=new jt(Ot,V);wt.add(en);const St=200,I=new Float32Array(St*3);for(let O=0;O<St;O++){const ye=Math.acos(2*Math.random()-1),fe=Math.random()*Math.PI*2,Ae=18.04;I[O*3]=Ae*Math.sin(ye)*Math.cos(fe),I[O*3+1]=Ae*Math.sin(ye)*Math.sin(fe),I[O*3+2]=Ae*Math.cos(ye)}const M=new _n;M.setAttribute("position",new ui(I,3));const j=new ff({size:.3,color:16498468,transparent:!0,opacity:.85}),ae=new Hm(M,j);wt.add(ae),n.add(wt);let he=0,Ee=0,Re=0,me=0,ge=0,be=0;const qe=()=>{const O=document.documentElement.scrollHeight-window.innerHeight;O>0&&(Ee=Math.min(Math.max(window.scrollY/O,0),1))},Pe=O=>{ge=(O.clientX/window.innerWidth-.5)*2,be=(O.clientY/window.innerHeight-.5)*2};window.addEventListener("scroll",qe,{passive:!0}),window.addEventListener("mousemove",Pe,{passive:!0});const Ce=()=>{!o||!r||(r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",Ce),qe();let je=new Zx,et;const tt=()=>{et=requestAnimationFrame(tt);const O=je.getElapsedTime();he+=(Ee-he)*.06,Re+=(ge-Re)*.05,me+=(be-me)*.05,R.rotation.y=O*.01,R.rotation.x=O*.005,Y.rotation.z=O*.7,se.rotation.x=O*-.6,pe.rotation.y=O*1.5,B.rotation.y=O*.05,L.rotation.z=O*.04,At.rotation.y=O*.02,ae.rotation.y=O*.02;const ye=1+Math.sin(O*6)*.15;Fe.opacity=.5+Math.sin(O*8)*.2,at.scale.set(ye,1,ye),ut.forEach(Oe=>{Oe.offset+=Oe.speed,Oe.offset>14&&(Oe.offset=0),Oe.mesh.position.y=-Oe.offset,Oe.mesh.position.x=(Math.random()-.5)*.08,Oe.mesh.position.z=(Math.random()-.5)*.08});const fe=he;r.position.x=Wn.lerp(0,-3.2,fe)+Re*.5,r.position.y=Wn.lerp(1.5,-4.8,fe)-me*.35,r.position.z=Wn.lerp(14,9.8,fe);const Ae=Wn.lerp(1.5,0,fe),Le=Wn.lerp(.5,-6,fe),_e=Wn.lerp(0,-2,fe);r.lookAt(Ae,Le,_e),k.position.x=Wn.lerp(3.2,.2,fe),k.position.y=Wn.lerp(.4,2.4,fe),k.rotation.y=Wn.lerp(.35,Math.PI*1.35,fe)+Math.sin(O*.4)*.04,k.rotation.x=Wn.lerp(.12,-.32,fe)+Math.cos(O*.3)*.03,k.rotation.z=Wn.lerp(-.08,.18,fe),v.position.x=Wn.lerp(-14,-7,fe),v.position.y=Wn.lerp(8,14,fe),wt.position.y=Wn.lerp(-24,-16.5,fe),o.render(n,r)};return tt(),()=>{cancelAnimationFrame(et),window.removeEventListener("scroll",qe),window.removeEventListener("mousemove",Pe),window.removeEventListener("resize",Ce),e&&o.domElement&&e.removeChild(o.domElement),n.clear(),o.dispose()}},[]),K.jsx("div",{ref:s,className:"fixed inset-0 z-0 pointer-events-none overflow-hidden","aria-hidden":"true"})};/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function J1(s,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Z1(s),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=s=>{let e="",n=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=s=>{const e=Q1(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Md(s){return s!=null}function tw(s,e={}){var g,y;const n=e.attributeNames??{},r=E=>n[E]??E,o=s.size??s.width??ts.width,l=s.size??s.height??ts.height,u=((g=s.aliases)==null?void 0:g.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],h=((y=e.className)==null?void 0:y.split(" ").filter(Boolean))??[],p=e.includeDefaultClasses===!1?gf(...h):gf("lucide",...f,...h),x=e.absoluteStrokeWidth?Number(e.strokeWidth??ts["stroke-width"])*Number(s.size??s.width??ts.width)/Number(e.size??e.width??ts.width):e.strokeWidth??ts["stroke-width"];return["svg",{...Object.entries(ts).reduce((E,[R,v])=>(E[r(R)]=v,E),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Md(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Md(e.width)&&{[r("width")]:e.width},..."height"in e&&Md(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:x,...p&&{[r("class")]:p},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(E=>{const[R,v,_]=E,N=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...v}:v;return _?[R,N,_]:[R,N]})]}/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function nw(s,e={}){return tw(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},rw=Qn.createContext({}),sw=()=>Qn.useContext(rw),aw=Qn.forwardRef(({color:s,size:e,width:n,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:f="",children:h,iconNode:p=[],icon:x={node:p,aliases:[],size:24},...S},g)=>{const{size:y=24,strokeWidth:E=2,absoluteStrokeWidth:R=!1,nonScalingStroke:v=!1,color:_="currentColor",className:N=""}=sw()??{},B=!!h||iw(S),[C,P,b=[]]=nw(x,{color:s??_,width:n??e??y,height:r??e??y,strokeWidth:o??E,absoluteStrokeWidth:l??R,nonScalingStroke:u??v,className:gf(N,f),hasA11yProp:B,attributes:S});return Qn.createElement(C,{ref:g,...P},[...b.map(([F,w])=>Qn.createElement(F,w)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Pn(s,e=[],n=[]){const r=typeof s=="string"?J1(s,e,n):s,o=Qn.forwardRef(({className:l,...u},f)=>Qn.createElement(aw,{ref:f,icon:r,className:l,...u}));return r.name&&(o.displayName=ew(r.name)),o}/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};a0.node;const ow=Pn(a0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};o0.node;const Ed=Pn(o0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0={name:"battery-charging",size:24,node:[["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["path",{d:"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",key:"lre1cr"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",key:"13q5k0"}]]};l0.node;const xg=Pn(l0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0={name:"building-complex",size:24,node:[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],aliases:["building-2"]};c0.node;const lw=Pn(c0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};u0.node;const cw=Pn(u0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};d0.node;const uw=Pn(d0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0={name:"earth",size:24,node:[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["globe-2"]};f0.node;const dw=Pn(f0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};h0.node;const fw=Pn(h0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};p0.node;const hw=Pn(p0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};m0.node;const pw=Pn(m0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0={name:"satellite",size:24,node:[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]]};g0.node;const Sg=Pn(g0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};_0.node;const mw=Pn(_0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};v0.node;const gw=Pn(v0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};x0.node;const yg=Pn(x0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};S0.node;const _w=Pn(S0);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};y0.node;const wd=Pn(y0),vw=()=>{const[s,e]=Qn.useState(""),[n,r]=Qn.useState("home"),[o,l]=Qn.useState(!1),u=h=>{h.preventDefault(),s&&l(!0)},f=h=>{const p=document.querySelector(h);p&&p.scrollIntoView({behavior:"smooth"})};return K.jsxs("div",{className:"min-h-screen relative text-slate-100 bg-[#020612] selection:bg-cyan-400 selection:text-space-950 font-sans overflow-x-hidden",children:[K.jsx(K1,{}),K.jsxs("header",{className:"fixed top-0 left-0 right-0 z-40 py-4 px-6 sm:px-12 flex items-center justify-between backdrop-blur-md bg-space-950/50 border-b border-white/5",children:[K.jsxs("a",{href:"#hero",className:"flex items-center gap-3 group",children:[K.jsx("div",{className:"w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors",children:K.jsx(wd,{className:"w-4 h-4 fill-cyan-400"})}),K.jsxs("div",{children:[K.jsxs("div",{className:"text-base sm:text-lg font-black tracking-wider text-white",children:["COSMOWATT ",K.jsx("span",{className:"text-cyan-400",children:"⚡"})]}),K.jsx("div",{className:"text-[10px] font-mono tracking-widest text-slate-400 uppercase",children:"The Night Time Solar"})]})]}),K.jsxs("nav",{className:"hidden md:flex items-center gap-6 text-xs font-mono",children:[K.jsx("button",{onClick:()=>f("#solution"),className:"text-slate-300 hover:text-cyan-300 transition-colors",children:"Technology"}),K.jsx("button",{onClick:()=>f("#satellite"),className:"text-slate-300 hover:text-cyan-300 transition-colors",children:"Satellite System"}),K.jsx("button",{onClick:()=>f("#who-needs"),className:"text-slate-300 hover:text-cyan-300 transition-colors",children:"Applications"}),K.jsx("button",{onClick:()=>f("#pricing"),className:"text-slate-300 hover:text-cyan-300 transition-colors",children:"Pricing"})]}),K.jsx("div",{children:K.jsxs("button",{onClick:()=>f("#pricing"),className:"btn-fluid px-4 py-2 rounded-xl text-xs font-bold text-space-950 flex items-center gap-1.5 shadow-md hover:shadow-cyan-400/30 transition-all",children:[K.jsx("span",{children:"Pre-Order"}),K.jsx(Ed,{className:"w-3.5 h-3.5"})]})})]}),K.jsxs("main",{className:"relative z-10 flex flex-col",children:[K.jsxs("section",{id:"hero",className:"min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-28 pb-16 text-center max-w-4xl mx-auto",children:[K.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-8",children:[K.jsx(yg,{className:"w-3.5 h-3.5 text-cyan-400"}),K.jsx("span",{children:"THE NIGHT TIME SOLAR"})]}),K.jsxs("h1",{className:"text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-[1.02] mb-4",children:["COSMOWATT ",K.jsx("span",{className:"text-cyan-400 inline-block drop-shadow-[0_0_25px_rgba(0,246,255,0.8)]",children:"⚡"})]}),K.jsx("h2",{className:"text-2xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-400 bg-clip-text text-transparent mb-10",children:"The Sun Clocked Out. We Didn't."}),K.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 mb-14",children:[K.jsxs("button",{onClick:()=>f("#pricing"),className:"btn-fluid px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-space-950 flex items-center gap-2 shadow-lg hover:shadow-cyan-400/40",children:[K.jsx("span",{children:"Explore Pricing & Pre-Order"}),K.jsx(Ed,{className:"w-4 h-4"})]}),K.jsx("button",{onClick:()=>f("#solution"),className:"px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-slate-200 liquid-glass border-white/10 hover:border-cyan-400/40 hover:text-cyan-300",children:"How It Works"})]}),K.jsxs("div",{className:"flex flex-col items-center gap-2 text-slate-400 text-xs font-mono animate-bounce",children:[K.jsx("span",{className:"tracking-widest uppercase text-[10px] text-cyan-400",children:"Scroll to explore orbit"}),K.jsx(ow,{className:"w-4 h-4 text-cyan-400"})]})]}),K.jsx("section",{id:"solution",className:"min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 text-center max-w-4xl mx-auto",children:K.jsxs("div",{className:"w-full space-y-8",children:[K.jsx("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border-rose-500/30 text-rose-300 text-xs font-mono uppercase tracking-wider",children:K.jsx("span",{children:"THE CHALLENGE"})}),K.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight",children:["The Sun Sleeps.",K.jsx("br",{}),K.jsx("span",{className:"bg-gradient-to-r from-rose-400 via-amber-300 to-orange-400 bg-clip-text text-transparent",children:"Your Bills Don't."})]}),K.jsx("p",{className:"text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed",children:"Ever experienced a power cut in the middle of your favourite show? Or received an electricity bill that looks like a phone number?"}),K.jsxs("div",{className:"p-8 rounded-3xl liquid-glass border-cyan-400/30 max-w-2xl mx-auto text-center space-y-6 shadow-2xl",children:[K.jsxs("div",{children:[K.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-1",children:"OUR SOLUTION: COSMOWATT"}),K.jsx("p",{className:"text-slate-200 text-sm sm:text-base leading-relaxed",children:"A futuristic space-powered energy system designed to collect energy in space, transmit it to Earth and store it for use whenever needed."})]}),K.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2",children:[K.jsxs("div",{className:"p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-amber-300 flex flex-col items-center gap-1.5",children:[K.jsx(_w,{className:"w-4 h-4 text-amber-400"}),K.jsx("span",{children:"Collect Energy"})]}),K.jsxs("div",{className:"p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 flex flex-col items-center gap-1.5",children:[K.jsx(Sg,{className:"w-4 h-4 text-cyan-400"}),K.jsx("span",{children:"Transmit Energy"})]}),K.jsxs("div",{className:"p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-purple-300 flex flex-col items-center gap-1.5",children:[K.jsx(xg,{className:"w-4 h-4 text-purple-400"}),K.jsx("span",{children:"Store Energy"})]}),K.jsxs("div",{className:"p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-emerald-300 flex flex-col items-center gap-1.5",children:[K.jsx(wd,{className:"w-4 h-4 text-emerald-400"}),K.jsx("span",{children:"Power Everything"})]})]}),K.jsx("div",{className:"pt-2 text-xs sm:text-sm font-mono text-cyan-300 font-bold tracking-wide",children:"Our mission: Make the night work overtime! ⚡"})]})]})}),K.jsx("section",{id:"satellite",className:"min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 text-center max-w-5xl mx-auto",children:K.jsxs("div",{className:"w-full space-y-8",children:[K.jsx("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider",children:K.jsx("span",{children:"ORBITAL TECHNOLOGY"})}),K.jsx("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto",children:"Who Needs Daylight When You Have A Satellite?"}),K.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-left",children:[K.jsxs("div",{className:"p-5 rounded-2xl liquid-glass border-white/10 hover:border-cyan-400/40 transition-all space-y-2",children:[K.jsx("div",{className:"w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400",children:K.jsx(Sg,{className:"w-4 h-4"})}),K.jsx("h3",{className:"text-base font-bold text-white",children:"Dedicated Energy Satellite 🛰️"}),K.jsx("p",{className:"text-xs text-slate-300",children:"Collects solar energy above Earth's atmosphere without atmospheric absorption."})]}),K.jsxs("div",{className:"p-5 rounded-2xl liquid-glass border-white/10 hover:border-purple-400/40 transition-all space-y-2",children:[K.jsx("div",{className:"w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400",children:K.jsx(uw,{className:"w-4 h-4"})}),K.jsx("h3",{className:"text-base font-bold text-white",children:"Power Station in Space 🌌"}),K.jsx("p",{className:"text-xs text-slate-300",children:"Futuristic orbital power station gathers and manages collected stellar energy."})]}),K.jsxs("div",{className:"p-5 rounded-2xl liquid-glass border-white/10 hover:border-blue-400/40 transition-all space-y-2",children:[K.jsx("div",{className:"w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400",children:K.jsx(hw,{className:"w-4 h-4"})}),K.jsx("h3",{className:"text-base font-bold text-white",children:"Energy Teleportation ⚡"}),K.jsx("p",{className:"text-xs text-slate-300",children:"Wireless transmission system beams clean energy from space to Earth."})]}),K.jsxs("div",{className:"p-5 rounded-2xl liquid-glass border-white/10 hover:border-emerald-400/40 transition-all space-y-2",children:[K.jsx("div",{className:"w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400",children:K.jsx(pw,{className:"w-4 h-4"})}),K.jsx("h3",{className:"text-base font-bold text-white",children:"24/7 Energy Generation 🔄"}),K.jsx("p",{className:"text-xs text-slate-300",children:"Supplies uninterrupted energy day and night using orbital collection and storage."})]}),K.jsxs("div",{className:"p-5 rounded-2xl liquid-glass border-white/10 hover:border-amber-400/40 transition-all space-y-2",children:[K.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400",children:K.jsx(xg,{className:"w-4 h-4"})}),K.jsx("h3",{className:"text-base font-bold text-white",children:"Infinite Battery Mode 🔋"}),K.jsx("p",{className:"text-xs text-slate-300",children:"Next-generation battery reserve that never says, “Low battery!”"})]}),K.jsxs("div",{className:"p-5 rounded-2xl liquid-glass border-white/10 hover:border-rose-400/40 transition-all space-y-2",children:[K.jsx("div",{className:"w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-400/30 flex items-center justify-center text-rose-400",children:K.jsx(yg,{className:"w-4 h-4"})}),K.jsx("h3",{className:"text-base font-bold text-white",children:"Self-Repairing Panels 🤖"}),K.jsx("p",{className:"text-xs text-slate-300",children:"Panels detect surface wear and repair themselves with zero maintenance down below."})]})]})]})}),K.jsx("section",{id:"who-needs",className:"min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 text-center max-w-4xl mx-auto",children:K.jsxs("div",{className:"w-full space-y-8",children:[K.jsx("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border-purple-400/40 text-purple-300 text-xs font-mono uppercase tracking-wider",children:K.jsx("span",{children:"TARGET APPLICATIONS"})}),K.jsx("h2",{className:"text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight",children:"Who Needs COSMOWATT?"}),K.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto text-left",children:[K.jsxs("div",{className:"p-5 rounded-2xl liquid-glass border-white/10 space-y-2",children:[K.jsx("div",{className:"w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400",children:K.jsx(fw,{className:"w-4 h-4"})}),K.jsx("h3",{className:"text-base font-bold text-white",children:"Homes"}),K.jsx("p",{className:"text-xs text-slate-300",children:"Tired of power cuts and rising electricity bills."})]}),K.jsxs("div",{className:"p-5 rounded-2xl liquid-glass border-white/10 space-y-2",children:[K.jsx("div",{className:"w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-400/30 flex items-center justify-center text-rose-400",children:K.jsx(gw,{className:"w-4 h-4"})}),K.jsx("h3",{className:"text-base font-bold text-white",children:"Hospitals"}),K.jsx("p",{className:"text-xs text-slate-300",children:"Need dependable, uninterrupted life-critical electricity."})]}),K.jsxs("div",{className:"p-5 rounded-2xl liquid-glass border-white/10 space-y-2",children:[K.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400",children:K.jsx(lw,{className:"w-4 h-4"})}),K.jsx("h3",{className:"text-base font-bold text-white",children:"Factories & Businesses"}),K.jsx("p",{className:"text-xs text-slate-300",children:"Need continuous power throughout the entire night."})]}),K.jsxs("div",{className:"p-5 rounded-2xl liquid-glass border-white/10 space-y-2 sm:col-span-1 lg:col-span-1",children:[K.jsx("div",{className:"w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400",children:K.jsx(mw,{className:"w-4 h-4"})}),K.jsx("h3",{className:"text-base font-bold text-white",children:"Data Centres"}),K.jsx("p",{className:"text-xs text-slate-300",children:"Cannot afford even a second of power interruptions."})]}),K.jsxs("div",{className:"p-5 rounded-2xl liquid-glass border-white/10 space-y-2 sm:col-span-2 lg:col-span-2",children:[K.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400",children:K.jsx(dw,{className:"w-4 h-4"})}),K.jsx("h3",{className:"text-base font-bold text-white",children:"Remote Communities"}),K.jsx("p",{className:"text-xs text-slate-300",children:"Clean power anywhere with limited or zero traditional grid access."})]})]})]})}),K.jsx("section",{id:"pricing",className:"min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 text-center max-w-4xl mx-auto",children:K.jsxs("div",{className:"w-full space-y-8",children:[K.jsx("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border-cyan-400/40 text-cyan-300 text-xs font-mono uppercase tracking-wider",children:K.jsx("span",{children:"CONCEPT PRICING"})}),K.jsx("h2",{className:"text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight",children:"Pre-Order COSMOWATT"}),K.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left",children:[K.jsxs("div",{onClick:()=>r("home"),className:`p-6 rounded-3xl border cursor-pointer transition-all ${n==="home"?"liquid-glass border-cyan-400 shadow-cyan-glow scale-[1.02]":"liquid-glass border-white/10 hover:border-white/20"}`,children:[K.jsx("div",{className:"text-xs font-mono text-cyan-300 uppercase",children:"Residential"}),K.jsx("div",{className:"text-xl font-bold text-white mt-1",children:"COSMOWATT Home"}),K.jsx("div",{className:"text-2xl font-black text-white font-mono mt-3",children:"₹1,49,999"}),K.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:"Single-family ground receiver system."})]}),K.jsxs("div",{onClick:()=>r("business"),className:`p-6 rounded-3xl border cursor-pointer transition-all ${n==="business"?"liquid-glass border-purple-400 shadow-purple-glow scale-[1.02]":"liquid-glass border-white/10 hover:border-white/20"}`,children:[K.jsx("div",{className:"text-xs font-mono text-purple-300 uppercase",children:"Commercial"}),K.jsx("div",{className:"text-xl font-bold text-white mt-1",children:"COSMOWATT Business"}),K.jsx("div",{className:"text-2xl font-black text-white font-mono mt-3",children:"₹9,99,999"}),K.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:"High-flux multi-node industrial array."})]}),K.jsxs("div",{onClick:()=>r("galaxy"),className:`p-6 rounded-3xl border cursor-pointer transition-all ${n==="galaxy"?"liquid-glass border-emerald-400 shadow-emerald-500/30 scale-[1.02]":"liquid-glass border-white/10 hover:border-white/20"}`,children:[K.jsx("div",{className:"text-xs font-mono text-emerald-300 uppercase",children:"Subscription"}),K.jsx("div",{className:"text-xl font-bold text-white mt-1",children:"Galaxy Plan"}),K.jsxs("div",{className:"text-2xl font-black text-white font-mono mt-3",children:["₹999",K.jsx("span",{className:"text-xs font-normal text-slate-400",children:"/mo"})]}),K.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:"Continuous monitoring & orbital maintenance."})]})]}),K.jsx("div",{className:"p-8 rounded-3xl liquid-glass border-cyan-400/30 max-w-xl mx-auto shadow-2xl",children:o?K.jsxs("div",{className:"py-6 space-y-2 animate-fadeIn",children:[K.jsx("div",{className:"w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 mx-auto",children:K.jsx(cw,{className:"w-5 h-5"})}),K.jsx("h3",{className:"text-lg font-bold text-white",children:"Pre-Order Registered!"}),K.jsxs("p",{className:"text-xs text-slate-300",children:["We've saved your slot for ",K.jsxs("span",{className:"text-cyan-300 font-mono font-bold",children:["COSMOWATT ",n.toUpperCase()]}),". Confirmation sent to ",K.jsx("span",{className:"text-white font-mono",children:s}),"."]})]}):K.jsxs("form",{onSubmit:u,className:"space-y-4",children:[K.jsxs("div",{className:"text-xs text-slate-300",children:["Register priority pre-order for ",K.jsxs("span",{className:"text-cyan-300 font-mono font-bold",children:["COSMOWATT ",n.toUpperCase()]}),":"]}),K.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-2",children:[K.jsx("input",{type:"email",required:!0,value:s,onChange:h=>e(h.target.value),placeholder:"Enter your email address",className:"w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"}),K.jsxs("button",{type:"submit",className:"w-full sm:w-auto btn-fluid px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-space-950 flex items-center justify-center gap-1.5 shrink-0 shadow-md hover:shadow-cyan-400/40",children:[K.jsx("span",{children:"Pre-Order"}),K.jsx(Ed,{className:"w-3.5 h-3.5"})]})]})]})})]})})]}),K.jsx("footer",{className:"py-8 border-t border-white/5 relative z-10 text-xs text-slate-500 font-mono text-center",children:K.jsxs("div",{className:"max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4",children:[K.jsxs("div",{className:"text-slate-300 font-bold flex items-center gap-2",children:[K.jsx(wd,{className:"w-3.5 h-3.5 text-cyan-400 fill-cyan-400"}),K.jsx("span",{children:"COSMOWATT ⚡"}),K.jsx("span",{className:"text-slate-500 font-normal",children:"| The Night Time Solar"})]}),K.jsx("div",{children:"© 2026 COSMOWATT Orbital Energy Systems. All rights reserved."})]})})]})};uv.createRoot(document.getElementById("root")).render(K.jsx(iv.StrictMode,{children:K.jsx(vw,{})}));
