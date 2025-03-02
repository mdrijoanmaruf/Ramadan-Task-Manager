(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function ny(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Oh={exports:{}},ga={},Lh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function P0(){if(Sm)return Se;Sm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.iterator;function N(V){return V===null||typeof V!="object"?null:(V=k&&V[k]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,X={};function W(V,$,ae){this.props=V,this.context=$,this.refs=X,this.updater=ae||z}W.prototype.isReactComponent={},W.prototype.setState=function(V,$){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,$,"setState")},W.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function we(){}we.prototype=W.prototype;function ve(V,$,ae){this.props=V,this.context=$,this.refs=X,this.updater=ae||z}var ye=ve.prototype=new we;ye.constructor=ve,H(ye,W.prototype),ye.isPureReactComponent=!0;var Te=Array.isArray,qe=Object.prototype.hasOwnProperty,Ae={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function I(V,$,ae){var Ee,Ie={},xe=null,Le=null;if($!=null)for(Ee in $.ref!==void 0&&(Le=$.ref),$.key!==void 0&&(xe=""+$.key),$)qe.call($,Ee)&&!x.hasOwnProperty(Ee)&&(Ie[Ee]=$[Ee]);var Me=arguments.length-2;if(Me===1)Ie.children=ae;else if(1<Me){for(var ze=Array(Me),mt=0;mt<Me;mt++)ze[mt]=arguments[mt+2];Ie.children=ze}if(V&&V.defaultProps)for(Ee in Me=V.defaultProps,Me)Ie[Ee]===void 0&&(Ie[Ee]=Me[Ee]);return{$$typeof:i,type:V,key:xe,ref:Le,props:Ie,_owner:Ae.current}}function A(V,$){return{$$typeof:i,type:V.type,key:$,ref:V.ref,props:V.props,_owner:V._owner}}function C(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var $={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ae){return $[ae]})}var O=/\/+/g;function S(V,$){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):$.toString(36)}function et(V,$,ae,Ee,Ie){var xe=typeof V;(xe==="undefined"||xe==="boolean")&&(V=null);var Le=!1;if(V===null)Le=!0;else switch(xe){case"string":case"number":Le=!0;break;case"object":switch(V.$$typeof){case i:case e:Le=!0}}if(Le)return Le=V,Ie=Ie(Le),V=Ee===""?"."+S(Le,0):Ee,Te(Ie)?(ae="",V!=null&&(ae=V.replace(O,"$&/")+"/"),et(Ie,$,ae,"",function(mt){return mt})):Ie!=null&&(C(Ie)&&(Ie=A(Ie,ae+(!Ie.key||Le&&Le.key===Ie.key?"":(""+Ie.key).replace(O,"$&/")+"/")+V)),$.push(Ie)),1;if(Le=0,Ee=Ee===""?".":Ee+":",Te(V))for(var Me=0;Me<V.length;Me++){xe=V[Me];var ze=Ee+S(xe,Me);Le+=et(xe,$,ae,ze,Ie)}else if(ze=N(V),typeof ze=="function")for(V=ze.call(V),Me=0;!(xe=V.next()).done;)xe=xe.value,ze=Ee+S(xe,Me++),Le+=et(xe,$,ae,ze,Ie);else if(xe==="object")throw $=String(V),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Le}function Ct(V,$,ae){if(V==null)return V;var Ee=[],Ie=0;return et(V,Ee,"","",function(xe){return $.call(ae,xe,Ie++)}),Ee}function Pt(V){if(V._status===-1){var $=V._result;$=$(),$.then(function(ae){(V._status===0||V._status===-1)&&(V._status=1,V._result=ae)},function(ae){(V._status===0||V._status===-1)&&(V._status=2,V._result=ae)}),V._status===-1&&(V._status=0,V._result=$)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},Z={transition:null},le={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ae};function te(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:Ct,forEach:function(V,$,ae){Ct(V,function(){$.apply(this,arguments)},ae)},count:function(V){var $=0;return Ct(V,function(){$++}),$},toArray:function(V){return Ct(V,function($){return $})||[]},only:function(V){if(!C(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Se.Component=W,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=ve,Se.StrictMode=s,Se.Suspense=y,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Se.act=te,Se.cloneElement=function(V,$,ae){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ee=H({},V.props),Ie=V.key,xe=V.ref,Le=V._owner;if($!=null){if($.ref!==void 0&&(xe=$.ref,Le=Ae.current),$.key!==void 0&&(Ie=""+$.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(ze in $)qe.call($,ze)&&!x.hasOwnProperty(ze)&&(Ee[ze]=$[ze]===void 0&&Me!==void 0?Me[ze]:$[ze])}var ze=arguments.length-2;if(ze===1)Ee.children=ae;else if(1<ze){Me=Array(ze);for(var mt=0;mt<ze;mt++)Me[mt]=arguments[mt+2];Ee.children=Me}return{$$typeof:i,type:V.type,key:Ie,ref:xe,props:Ee,_owner:Le}},Se.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Se.createElement=I,Se.createFactory=function(V){var $=I.bind(null,V);return $.type=V,$},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:m,render:V}},Se.isValidElement=C,Se.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:Pt}},Se.memo=function(V,$){return{$$typeof:v,type:V,compare:$===void 0?null:$}},Se.startTransition=function(V){var $=Z.transition;Z.transition={};try{V()}finally{Z.transition=$}},Se.unstable_act=te,Se.useCallback=function(V,$){return Ue.current.useCallback(V,$)},Se.useContext=function(V){return Ue.current.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Se.useEffect=function(V,$){return Ue.current.useEffect(V,$)},Se.useId=function(){return Ue.current.useId()},Se.useImperativeHandle=function(V,$,ae){return Ue.current.useImperativeHandle(V,$,ae)},Se.useInsertionEffect=function(V,$){return Ue.current.useInsertionEffect(V,$)},Se.useLayoutEffect=function(V,$){return Ue.current.useLayoutEffect(V,$)},Se.useMemo=function(V,$){return Ue.current.useMemo(V,$)},Se.useReducer=function(V,$,ae){return Ue.current.useReducer(V,$,ae)},Se.useRef=function(V){return Ue.current.useRef(V)},Se.useState=function(V){return Ue.current.useState(V)},Se.useSyncExternalStore=function(V,$,ae){return Ue.current.useSyncExternalStore(V,$,ae)},Se.useTransition=function(){return Ue.current.useTransition()},Se.version="18.3.1",Se}var Am;function Td(){return Am||(Am=1,Lh.exports=P0()),Lh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function x0(){if(Rm)return ga;Rm=1;var i=Td(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var E,k={},N=null,z=null;v!==void 0&&(N=""+v),y.key!==void 0&&(N=""+y.key),y.ref!==void 0&&(z=y.ref);for(E in y)s.call(y,E)&&!u.hasOwnProperty(E)&&(k[E]=y[E]);if(m&&m.defaultProps)for(E in y=m.defaultProps,y)k[E]===void 0&&(k[E]=y[E]);return{$$typeof:e,type:m,key:N,ref:z,props:k,_owner:o.current}}return ga.Fragment=t,ga.jsx=h,ga.jsxs=h,ga}var km;function N0(){return km||(km=1,Oh.exports=x0()),Oh.exports}var b=N0(),Mt=Td();const si=ny(Mt);var su={},Mh={exports:{}},Xt={},bh={exports:{}},Fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function D0(){return Cm||(Cm=1,function(i){function e(Z,le){var te=Z.length;Z.push(le);e:for(;0<te;){var V=te-1>>>1,$=Z[V];if(0<o($,le))Z[V]=le,Z[te]=$,te=V;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var le=Z[0],te=Z.pop();if(te!==le){Z[0]=te;e:for(var V=0,$=Z.length,ae=$>>>1;V<ae;){var Ee=2*(V+1)-1,Ie=Z[Ee],xe=Ee+1,Le=Z[xe];if(0>o(Ie,te))xe<$&&0>o(Le,Ie)?(Z[V]=Le,Z[xe]=te,V=xe):(Z[V]=Ie,Z[Ee]=te,V=Ee);else if(xe<$&&0>o(Le,te))Z[V]=Le,Z[xe]=te,V=xe;else break e}}return le}function o(Z,le){var te=Z.sortIndex-le.sortIndex;return te!==0?te:Z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],E=1,k=null,N=3,z=!1,H=!1,X=!1,W=typeof setTimeout=="function"?setTimeout:null,we=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(Z){for(var le=t(v);le!==null;){if(le.callback===null)s(v);else if(le.startTime<=Z)s(v),le.sortIndex=le.expirationTime,e(y,le);else break;le=t(v)}}function Te(Z){if(X=!1,ye(Z),!H)if(t(y)!==null)H=!0,Pt(qe);else{var le=t(v);le!==null&&Ue(Te,le.startTime-Z)}}function qe(Z,le){H=!1,X&&(X=!1,we(I),I=-1),z=!0;var te=N;try{for(ye(le),k=t(y);k!==null&&(!(k.expirationTime>le)||Z&&!D());){var V=k.callback;if(typeof V=="function"){k.callback=null,N=k.priorityLevel;var $=V(k.expirationTime<=le);le=i.unstable_now(),typeof $=="function"?k.callback=$:k===t(y)&&s(y),ye(le)}else s(y);k=t(y)}if(k!==null)var ae=!0;else{var Ee=t(v);Ee!==null&&Ue(Te,Ee.startTime-le),ae=!1}return ae}finally{k=null,N=te,z=!1}}var Ae=!1,x=null,I=-1,A=5,C=-1;function D(){return!(i.unstable_now()-C<A)}function O(){if(x!==null){var Z=i.unstable_now();C=Z;var le=!0;try{le=x(!0,Z)}finally{le?S():(Ae=!1,x=null)}}else Ae=!1}var S;if(typeof ve=="function")S=function(){ve(O)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Ct=et.port2;et.port1.onmessage=O,S=function(){Ct.postMessage(null)}}else S=function(){W(O,0)};function Pt(Z){x=Z,Ae||(Ae=!0,S())}function Ue(Z,le){I=W(function(){Z(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){H||z||(H=!0,Pt(qe))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(N){case 1:case 2:case 3:var le=3;break;default:le=N}var te=N;N=le;try{return Z()}finally{N=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,le){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=N;N=Z;try{return le()}finally{N=te}},i.unstable_scheduleCallback=function(Z,le,te){var V=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?V+te:V):te=V,Z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=te+$,Z={id:E++,callback:le,priorityLevel:Z,startTime:te,expirationTime:$,sortIndex:-1},te>V?(Z.sortIndex=te,e(v,Z),t(y)===null&&Z===t(v)&&(X?(we(I),I=-1):X=!0,Ue(Te,te-V))):(Z.sortIndex=$,e(y,Z),H||z||(H=!0,Pt(qe))),Z},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(Z){var le=N;return function(){var te=N;N=le;try{return Z.apply(this,arguments)}finally{N=te}}}}(Fh)),Fh}var Pm;function V0(){return Pm||(Pm=1,bh.exports=D0()),bh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function O0(){if(xm)return Xt;xm=1;var i=Td(),e=V0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},k={};function N(n){return y.call(k,n)?!0:y.call(E,n)?!1:v.test(n)?k[n]=!0:(E[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function H(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var we=/[\-:]([a-z])/g;function ve(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(we,ve);W[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(we,ve);W[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(we,ve);W[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(H(r,a,d,c)&&(a=null),c||d===null?N(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qe=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Ct=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),Z=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,V;function $(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var ae=!1;function Ee(n,r){if(!n||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Ie(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Ae:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ct:return r=n.displayName||null,r!==null?r:xe(n.type)||"Memo";case Pt:r=n._payload,n=n._init;try{return xe(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nr(n){n._valueTracker||(n._valueTracker=mt(n))}function ss(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vi(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function os(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function To(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function Io(n,r){To(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?as(n,r.type,a):r.hasOwnProperty("defaultValue")&&as(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ha(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function as(n,r,a){(r!=="number"||Pr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rr=Array.isArray;function ir(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function So(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ls(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(rr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function us(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ao(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function at(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?at(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var sr,Ro=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=sr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function xr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ei=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(n){Ei.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),wi[r]=wi[n]})});function ko(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||wi.hasOwnProperty(n)&&wi[n]?(""+r).trim():r+"px"}function Co(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ko(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Po=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(n,r){if(r){if(Po[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function No(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ti=null;function cs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hs=null,cn=null,bn=null;function ds(n){if(n=ta(n)){if(typeof hs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=wl(r),hs(n.stateNode,n.type,r))}}function Fn(n){cn?bn?bn.push(n):bn=[n]:cn=n}function Do(){if(cn){var n=cn,r=bn;if(bn=cn=null,ds(n),r)for(n=0;n<r.length;n++)ds(r[n])}}function Ii(n,r){return n(r)}function Vo(){}var or=!1;function Oo(n,r,a){if(or)return n(r,a);or=!0;try{return Ii(n,r,a)}finally{or=!1,(cn!==null||bn!==null)&&(Vo(),Do())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=wl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var fs=!1;if(m)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){fs=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{fs=!1}function Si(n,r,a,c,d,p,_,T,R){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(K){this.onError(K)}}var Ai=!1,ps=null,En=!1,Lo=null,lc={onError:function(n){Ai=!0,ps=n}};function ms(n,r,a,c,d,p,_,T,R){Ai=!1,ps=null,Si.apply(lc,arguments)}function Wa(n,r,a,c,d,p,_,T,R){if(ms.apply(this,arguments),Ai){if(Ai){var U=ps;Ai=!1,ps=null}else throw Error(t(198));En||(En=!0,Lo=U)}}function Tn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ri(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function In(n){if(Tn(n)!==n)throw Error(t(188))}function qa(n){var r=n.alternate;if(!r){if(r=Tn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return In(d),n;if(p===c)return In(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Mo(n){return n=qa(n),n!==null?gs(n):null}function gs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=gs(n);if(r!==null)return r;n=n.sibling}return null}var ys=e.unstable_scheduleCallback,bo=e.unstable_cancelCallback,Ka=e.unstable_shouldYield,uc=e.unstable_requestPaint,Be=e.unstable_now,Ga=e.unstable_getCurrentPriorityLevel,ki=e.unstable_ImmediatePriority,Nr=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,Fo=e.unstable_LowPriority,Qa=e.unstable_IdlePriority,Ci=null,Zt=null;function Xa(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ci,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Ja,Uo=Math.log,Ya=Math.LN2;function Ja(n){return n>>>=0,n===0?32:31-(Uo(n)/Ya|0)|0}var _s=64,vs=4194304;function Dr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Pi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Dr(T):(p&=_,p!==0&&(c=Dr(p)))}else _=a&~d,_!==0?c=Dr(_):p!==0&&(c=Dr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ut(r),d=1<<a,c|=n[a],r&=~d;return c}function cc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ar(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ut(p),T=1<<_,R=d[_];R===-1?((T&a)===0||(T&c)!==0)&&(d[_]=cc(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xi(){var n=_s;return _s<<=1,(_s&4194240)===0&&(_s=64),n}function Vr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Or(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=a}function je(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Lr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ce=0;function Mr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Za,ws,el,tl,nl,jo=!1,Un=[],Et=null,Sn=null,An=null,br=new Map,dn=new Map,jn=[],hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rl(n,r){switch(n){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":br.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(r.pointerId)}}function $t(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=ta(r),r!==null&&ws(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function dc(n,r,a,c,d){switch(r){case"focusin":return Et=$t(Et,n,r,a,c,d),!0;case"dragenter":return Sn=$t(Sn,n,r,a,c,d),!0;case"mouseover":return An=$t(An,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return br.set(p,$t(br.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,dn.set(p,$t(dn.get(p)||null,n,r,a,c,d)),!0}return!1}function il(n){var r=Li(n.target);if(r!==null){var a=Tn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ri(a),r!==null){n.blockedOn=r,nl(n.priority,function(){el(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Es(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ti=c,a.target.dispatchEvent(c),Ti=null}else return r=ta(a),r!==null&&ws(r),n.blockedOn=a,!1;r.shift()}return!0}function Ni(n,r,a){lr(n)&&a.delete(r)}function sl(){jo=!1,Et!==null&&lr(Et)&&(Et=null),Sn!==null&&lr(Sn)&&(Sn=null),An!==null&&lr(An)&&(An=null),br.forEach(Ni),dn.forEach(Ni)}function Rn(n,r){n.blockedOn===r&&(n.blockedOn=null,jo||(jo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sl)))}function kn(n){function r(d){return Rn(d,n)}if(0<Un.length){Rn(Un[0],n);for(var a=1;a<Un.length;a++){var c=Un[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Et!==null&&Rn(Et,n),Sn!==null&&Rn(Sn,n),An!==null&&Rn(An,n),br.forEach(r),dn.forEach(r),a=0;a<jn.length;a++)c=jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<jn.length&&(a=jn[0],a.blockedOn===null);)il(a),a.blockedOn===null&&jn.shift()}var ur=Te.ReactCurrentBatchConfig,Fr=!0;function Ke(n,r,a,c){var d=Ce,p=ur.transition;ur.transition=null;try{Ce=1,zo(n,r,a,c)}finally{Ce=d,ur.transition=p}}function fc(n,r,a,c){var d=Ce,p=ur.transition;ur.transition=null;try{Ce=4,zo(n,r,a,c)}finally{Ce=d,ur.transition=p}}function zo(n,r,a,c){if(Fr){var d=Es(n,r,a,c);if(d===null)Sc(n,r,c,Di,a),rl(n,c);else if(dc(d,n,r,a,c))c.stopPropagation();else if(rl(n,c),r&4&&-1<hc.indexOf(n)){for(;d!==null;){var p=ta(d);if(p!==null&&Za(p),p=Es(n,r,a,c),p===null&&Sc(n,r,c,Di,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Sc(n,r,c,null,a)}}var Di=null;function Es(n,r,a,c){if(Di=null,n=cs(c),n=Li(n),n!==null)if(r=Tn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ri(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Di=n,null}function Bo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ga()){case ki:return 1;case Nr:return 4;case hn:case Fo:return 16;case Qa:return 536870912;default:return 16}default:return 16}}var tn=null,Ts=null,Ht=null;function $o(){if(Ht)return Ht;var n,r=Ts,a=r.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function Is(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function zn(){return!0}function Ho(){return!1}function Tt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?zn:Ho,this.isPropagationStopped=Ho,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),r}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=Tt(Cn),Bn=te({},Cn,{view:0,detail:0}),pc=Tt(Bn),As,cr,Ur,Vi=te({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ur&&(Ur&&n.type==="mousemove"?(As=n.screenX-Ur.screenX,cr=n.screenY-Ur.screenY):cr=As=0,Ur=n),As)},movementY:function(n){return"movementY"in n?n.movementY:cr}}),Rs=Tt(Vi),Wo=te({},Vi,{dataTransfer:0}),ol=Tt(Wo),ks=te({},Bn,{relatedTarget:0}),Cs=Tt(ks),al=te({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),hr=Tt(al),ll=te({},Cn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ul=Tt(ll),cl=te({},Cn,{data:0}),qo=Tt(cl),Ps={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=hl[n])?!!r[n]:!1}function $n(){return dl}var l=te({},Bn,{key:function(n){if(n.key){var r=Ps[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Is(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(n){return n.type==="keypress"?Is(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Is(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),g=te({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Tt(g),L=te({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n}),j=Tt(L),J=te({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=Tt(J),ut=te({},Vi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=Tt(ut),gt=[9,13,27,32],it=m&&"CompositionEvent"in window,fn=null;m&&"documentMode"in document&&(fn=document.documentMode);var nn=m&&"TextEvent"in window&&!fn,Oi=m&&(!it||fn&&8<fn&&11>=fn),xs=" ",_f=!1;function vf(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ns=!1;function Rv(n,r){switch(n){case"compositionend":return wf(r);case"keypress":return r.which!==32?null:(_f=!0,xs);case"textInput":return n=r.data,n===xs&&_f?null:n;default:return null}}function kv(n,r){if(Ns)return n==="compositionend"||!it&&vf(n,r)?(n=$o(),Ht=Ts=tn=null,Ns=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Oi&&r.locale!=="ko"?null:r.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Cv[n.type]:r==="textarea"}function Tf(n,r,a,c){Fn(c),r=yl(r,"onChange"),0<r.length&&(a=new Ss("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Ko=null,Go=null;function Pv(n){jf(n,0)}function fl(n){var r=Ms(n);if(ss(r))return n}function xv(n,r){if(n==="change")return r}var If=!1;if(m){var mc;if(m){var gc="oninput"in document;if(!gc){var Sf=document.createElement("div");Sf.setAttribute("oninput","return;"),gc=typeof Sf.oninput=="function"}mc=gc}else mc=!1;If=mc&&(!document.documentMode||9<document.documentMode)}function Af(){Ko&&(Ko.detachEvent("onpropertychange",Rf),Go=Ko=null)}function Rf(n){if(n.propertyName==="value"&&fl(Go)){var r=[];Tf(r,Go,n,cs(n)),Oo(Pv,r)}}function Nv(n,r,a){n==="focusin"?(Af(),Ko=r,Go=a,Ko.attachEvent("onpropertychange",Rf)):n==="focusout"&&Af()}function Dv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fl(Go)}function Vv(n,r){if(n==="click")return fl(r)}function Ov(n,r){if(n==="input"||n==="change")return fl(r)}function Lv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pn=typeof Object.is=="function"?Object.is:Lv;function Qo(n,r){if(Pn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Pn(n[d],r[d]))return!1}return!0}function kf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Cf(n,r){var a=kf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kf(a)}}function Pf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Pf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function xf(){for(var n=window,r=Pr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Pr(n.document)}return r}function yc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Mv(n){var r=xf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Pf(a.ownerDocument.documentElement,a)){if(c!==null&&yc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Cf(a,p);var _=Cf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var bv=m&&"documentMode"in document&&11>=document.documentMode,Ds=null,_c=null,Xo=null,vc=!1;function Nf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vc||Ds==null||Ds!==Pr(c)||(c=Ds,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Xo&&Qo(Xo,c)||(Xo=c,c=yl(_c,"onSelect"),0<c.length&&(r=new Ss("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ds)))}function pl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Vs={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},wc={},Df={};m&&(Df=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function ml(n){if(wc[n])return wc[n];if(!Vs[n])return n;var r=Vs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Df)return wc[n]=r[a];return n}var Vf=ml("animationend"),Of=ml("animationiteration"),Lf=ml("animationstart"),Mf=ml("transitionend"),bf=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(n,r){bf.set(n,r),u(r,[n])}for(var Ec=0;Ec<Ff.length;Ec++){var Tc=Ff[Ec],Fv=Tc.toLowerCase(),Uv=Tc[0].toUpperCase()+Tc.slice(1);jr(Fv,"on"+Uv)}jr(Vf,"onAnimationEnd"),jr(Of,"onAnimationIteration"),jr(Lf,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(Mf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function Uf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Wa(c,r,void 0,n),n.currentTarget=null}function jf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,U=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;Uf(d,T,U),p=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,U=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;Uf(d,T,U),p=R}}}if(En)throw n=Lo,En=!1,Lo=null,n}function He(n,r){var a=r[xc];a===void 0&&(a=r[xc]=new Set);var c=n+"__bubble";a.has(c)||(zf(r,n,2,!1),a.add(c))}function Ic(n,r,a){var c=0;r&&(c|=4),zf(a,n,c,r)}var gl="_reactListening"+Math.random().toString(36).slice(2);function Jo(n){if(!n[gl]){n[gl]=!0,s.forEach(function(a){a!=="selectionchange"&&(jv.has(a)||Ic(a,!1,n),Ic(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[gl]||(r[gl]=!0,Ic("selectionchange",!1,r))}}function zf(n,r,a,c){switch(Bo(r)){case 1:var d=Ke;break;case 4:d=fc;break;default:d=zo}a=d.bind(null,r,a,n),d=void 0,!fs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Sc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Li(T),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Oo(function(){var U=p,K=cs(a),G=[];e:{var q=bf.get(n);if(q!==void 0){var ee=Ss,ie=n;switch(n){case"keypress":if(Is(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":ie="focus",ee=Cs;break;case"focusout":ie="blur",ee=Cs;break;case"beforeblur":case"afterblur":ee=Cs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=ol;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=j;break;case Vf:case Of:case Lf:ee=hr;break;case Mf:ee=Fe;break;case"scroll":ee=pc;break;case"wheel":ee=Ne;break;case"copy":case"cut":case"paste":ee=ul;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=w}var se=(r&4)!==0,nt=!se&&n==="scroll",M=se?q!==null?q+"Capture":null:q;se=[];for(var P=U,F;P!==null;){F=P;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,M!==null&&(Y=tt(P,M),Y!=null&&se.push(Zo(P,Y,F)))),nt)break;P=P.return}0<se.length&&(q=new ee(q,ie,null,a,K),G.push({event:q,listeners:se}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",q&&a!==Ti&&(ie=a.relatedTarget||a.fromElement)&&(Li(ie)||ie[dr]))break e;if((ee||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=U,ie=ie?Li(ie):null,ie!==null&&(nt=Tn(ie),ie!==nt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=U),ee!==ie)){if(se=Rs,Y="onMouseLeave",M="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(se=w,Y="onPointerLeave",M="onPointerEnter",P="pointer"),nt=ee==null?q:Ms(ee),F=ie==null?q:Ms(ie),q=new se(Y,P+"leave",ee,a,K),q.target=nt,q.relatedTarget=F,Y=null,Li(K)===U&&(se=new se(M,P+"enter",ie,a,K),se.target=F,se.relatedTarget=nt,Y=se),nt=Y,ee&&ie)t:{for(se=ee,M=ie,P=0,F=se;F;F=Os(F))P++;for(F=0,Y=M;Y;Y=Os(Y))F++;for(;0<P-F;)se=Os(se),P--;for(;0<F-P;)M=Os(M),F--;for(;P--;){if(se===M||M!==null&&se===M.alternate)break t;se=Os(se),M=Os(M)}se=null}else se=null;ee!==null&&Bf(G,q,ee,se,!1),ie!==null&&nt!==null&&Bf(G,nt,ie,se,!0)}}e:{if(q=U?Ms(U):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var oe=xv;else if(Ef(q))if(If)oe=Ov;else{oe=Dv;var ue=Nv}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(oe=Vv);if(oe&&(oe=oe(n,U))){Tf(G,oe,a,K);break e}ue&&ue(n,q,U),n==="focusout"&&(ue=q._wrapperState)&&ue.controlled&&q.type==="number"&&as(q,"number",q.value)}switch(ue=U?Ms(U):window,n){case"focusin":(Ef(ue)||ue.contentEditable==="true")&&(Ds=ue,_c=U,Xo=null);break;case"focusout":Xo=_c=Ds=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,Nf(G,a,K);break;case"selectionchange":if(bv)break;case"keydown":case"keyup":Nf(G,a,K)}var ce;if(it)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ns?vf(n,a)&&(fe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(Oi&&a.locale!=="ko"&&(Ns||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ns&&(ce=$o()):(tn=K,Ts="value"in tn?tn.value:tn.textContent,Ns=!0)),ue=yl(U,fe),0<ue.length&&(fe=new qo(fe,n,null,a,K),G.push({event:fe,listeners:ue}),ce?fe.data=ce:(ce=wf(a),ce!==null&&(fe.data=ce)))),(ce=nn?Rv(n,a):kv(n,a))&&(U=yl(U,"onBeforeInput"),0<U.length&&(K=new qo("onBeforeInput","beforeinput",null,a,K),G.push({event:K,listeners:U}),K.data=ce))}jf(G,r)})}function Zo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function yl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(Zo(n,p,d)),p=tt(n,r),p!=null&&c.push(Zo(n,p,d))),n=n.return}return c}function Os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,R=T.alternate,U=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&U!==null&&(T=U,d?(R=tt(a,p),R!=null&&_.unshift(Zo(a,R,T))):d||(R=tt(a,p),R!=null&&_.push(Zo(a,R,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var zv=/\r\n?/g,Bv=/\u0000|\uFFFD/g;function $f(n){return(typeof n=="string"?n:""+n).replace(zv,`
`).replace(Bv,"")}function _l(n,r,a){if(r=$f(r),$f(n)!==r&&a)throw Error(t(425))}function vl(){}var Ac=null,Rc=null;function kc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Cc=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(n){return Hf.resolve(null).then(n).catch(Wv)}:Cc;function Wv(n){setTimeout(function(){throw n})}function Pc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kn(r)}function zr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Wf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Ls,ea="__reactProps$"+Ls,dr="__reactContainer$"+Ls,xc="__reactEvents$"+Ls,qv="__reactListeners$"+Ls,Kv="__reactHandles$"+Ls;function Li(n){var r=n[Hn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[dr]||a[Hn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Wf(n);n!==null;){if(a=n[Hn])return a;n=Wf(n)}return r}n=a,a=n.parentNode}return null}function ta(n){return n=n[Hn]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function wl(n){return n[ea]||null}var Nc=[],bs=-1;function Br(n){return{current:n}}function We(n){0>bs||(n.current=Nc[bs],Nc[bs]=null,bs--)}function $e(n,r){bs++,Nc[bs]=n.current,n.current=r}var $r={},xt=Br($r),Wt=Br(!1),Mi=$r;function Fs(n,r){var a=n.type.contextTypes;if(!a)return $r;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function qt(n){return n=n.childContextTypes,n!=null}function El(){We(Wt),We(xt)}function qf(n,r,a){if(xt.current!==$r)throw Error(t(168));$e(xt,r),$e(Wt,a)}function Kf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return te({},a,c)}function Tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$r,Mi=xt.current,$e(xt,n),$e(Wt,Wt.current),!0}function Gf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Kf(n,r,Mi),c.__reactInternalMemoizedMergedChildContext=n,We(Wt),We(xt),$e(xt,n)):We(Wt),$e(Wt,a)}var fr=null,Il=!1,Dc=!1;function Qf(n){fr===null?fr=[n]:fr.push(n)}function Gv(n){Il=!0,Qf(n)}function Hr(){if(!Dc&&fr!==null){Dc=!0;var n=0,r=Ce;try{var a=fr;for(Ce=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,Il=!1}catch(d){throw fr!==null&&(fr=fr.slice(n+1)),ys(ki,Hr),d}finally{Ce=r,Dc=!1}}return null}var Us=[],js=0,Sl=null,Al=0,pn=[],mn=0,bi=null,pr=1,mr="";function Fi(n,r){Us[js++]=Al,Us[js++]=Sl,Sl=n,Al=r}function Xf(n,r,a){pn[mn++]=pr,pn[mn++]=mr,pn[mn++]=bi,bi=n;var c=pr;n=mr;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var p=32-Ut(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,pr=1<<32-Ut(r)+d|a<<d|c,mr=p+n}else pr=1<<p|a<<d|c,mr=n}function Vc(n){n.return!==null&&(Fi(n,1),Xf(n,1,0))}function Oc(n){for(;n===Sl;)Sl=Us[--js],Us[js]=null,Al=Us[--js],Us[js]=null;for(;n===bi;)bi=pn[--mn],pn[mn]=null,mr=pn[--mn],pn[mn]=null,pr=pn[--mn],pn[mn]=null}var rn=null,sn=null,Ge=!1,xn=null;function Yf(n,r){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Jf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=zr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=bi!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Lc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mc(n){if(Ge){var r=sn;if(r){var a=r;if(!Jf(n,r)){if(Lc(n))throw Error(t(418));r=zr(a.nextSibling);var c=rn;r&&Jf(n,r)?Yf(c,a):(n.flags=n.flags&-4097|2,Ge=!1,rn=n)}}else{if(Lc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,rn=n}}}function Zf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Rl(n){if(n!==rn)return!1;if(!Ge)return Zf(n),Ge=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!kc(n.type,n.memoizedProps)),r&&(r=sn)){if(Lc(n))throw ep(),Error(t(418));for(;r;)Yf(n,r),r=zr(r.nextSibling)}if(Zf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=zr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?zr(n.stateNode.nextSibling):null;return!0}function ep(){for(var n=sn;n;)n=zr(n.nextSibling)}function zs(){sn=rn=null,Ge=!1}function bc(n){xn===null?xn=[n]:xn.push(n)}var Qv=Te.ReactCurrentBatchConfig;function na(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function kl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function tp(n){var r=n._init;return r(n._payload)}function np(n){function r(M,P){if(n){var F=M.deletions;F===null?(M.deletions=[P],M.flags|=16):F.push(P)}}function a(M,P){if(!n)return null;for(;P!==null;)r(M,P),P=P.sibling;return null}function c(M,P){for(M=new Map;P!==null;)P.key!==null?M.set(P.key,P):M.set(P.index,P),P=P.sibling;return M}function d(M,P){return M=Jr(M,P),M.index=0,M.sibling=null,M}function p(M,P,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<P?(M.flags|=2,P):F):(M.flags|=2,P)):(M.flags|=1048576,P)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,P,F,Y){return P===null||P.tag!==6?(P=Ch(F,M.mode,Y),P.return=M,P):(P=d(P,F),P.return=M,P)}function R(M,P,F,Y){var oe=F.type;return oe===x?K(M,P,F.props.children,Y,F.key):P!==null&&(P.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Pt&&tp(oe)===P.type)?(Y=d(P,F.props),Y.ref=na(M,P,F),Y.return=M,Y):(Y=Yl(F.type,F.key,F.props,null,M.mode,Y),Y.ref=na(M,P,F),Y.return=M,Y)}function U(M,P,F,Y){return P===null||P.tag!==4||P.stateNode.containerInfo!==F.containerInfo||P.stateNode.implementation!==F.implementation?(P=Ph(F,M.mode,Y),P.return=M,P):(P=d(P,F.children||[]),P.return=M,P)}function K(M,P,F,Y,oe){return P===null||P.tag!==7?(P=qi(F,M.mode,Y,oe),P.return=M,P):(P=d(P,F),P.return=M,P)}function G(M,P,F){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Ch(""+P,M.mode,F),P.return=M,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case qe:return F=Yl(P.type,P.key,P.props,null,M.mode,F),F.ref=na(M,null,P),F.return=M,F;case Ae:return P=Ph(P,M.mode,F),P.return=M,P;case Pt:var Y=P._init;return G(M,Y(P._payload),F)}if(rr(P)||le(P))return P=qi(P,M.mode,F,null),P.return=M,P;kl(M,P)}return null}function q(M,P,F,Y){var oe=P!==null?P.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return oe!==null?null:T(M,P,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case qe:return F.key===oe?R(M,P,F,Y):null;case Ae:return F.key===oe?U(M,P,F,Y):null;case Pt:return oe=F._init,q(M,P,oe(F._payload),Y)}if(rr(F)||le(F))return oe!==null?null:K(M,P,F,Y,null);kl(M,F)}return null}function ee(M,P,F,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(F)||null,T(P,M,""+Y,oe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case qe:return M=M.get(Y.key===null?F:Y.key)||null,R(P,M,Y,oe);case Ae:return M=M.get(Y.key===null?F:Y.key)||null,U(P,M,Y,oe);case Pt:var ue=Y._init;return ee(M,P,F,ue(Y._payload),oe)}if(rr(Y)||le(Y))return M=M.get(F)||null,K(P,M,Y,oe,null);kl(P,Y)}return null}function ie(M,P,F,Y){for(var oe=null,ue=null,ce=P,fe=P=0,vt=null;ce!==null&&fe<F.length;fe++){ce.index>fe?(vt=ce,ce=null):vt=ce.sibling;var Oe=q(M,ce,F[fe],Y);if(Oe===null){ce===null&&(ce=vt);break}n&&ce&&Oe.alternate===null&&r(M,ce),P=p(Oe,P,fe),ue===null?oe=Oe:ue.sibling=Oe,ue=Oe,ce=vt}if(fe===F.length)return a(M,ce),Ge&&Fi(M,fe),oe;if(ce===null){for(;fe<F.length;fe++)ce=G(M,F[fe],Y),ce!==null&&(P=p(ce,P,fe),ue===null?oe=ce:ue.sibling=ce,ue=ce);return Ge&&Fi(M,fe),oe}for(ce=c(M,ce);fe<F.length;fe++)vt=ee(ce,M,fe,F[fe],Y),vt!==null&&(n&&vt.alternate!==null&&ce.delete(vt.key===null?fe:vt.key),P=p(vt,P,fe),ue===null?oe=vt:ue.sibling=vt,ue=vt);return n&&ce.forEach(function(Zr){return r(M,Zr)}),Ge&&Fi(M,fe),oe}function se(M,P,F,Y){var oe=le(F);if(typeof oe!="function")throw Error(t(150));if(F=oe.call(F),F==null)throw Error(t(151));for(var ue=oe=null,ce=P,fe=P=0,vt=null,Oe=F.next();ce!==null&&!Oe.done;fe++,Oe=F.next()){ce.index>fe?(vt=ce,ce=null):vt=ce.sibling;var Zr=q(M,ce,Oe.value,Y);if(Zr===null){ce===null&&(ce=vt);break}n&&ce&&Zr.alternate===null&&r(M,ce),P=p(Zr,P,fe),ue===null?oe=Zr:ue.sibling=Zr,ue=Zr,ce=vt}if(Oe.done)return a(M,ce),Ge&&Fi(M,fe),oe;if(ce===null){for(;!Oe.done;fe++,Oe=F.next())Oe=G(M,Oe.value,Y),Oe!==null&&(P=p(Oe,P,fe),ue===null?oe=Oe:ue.sibling=Oe,ue=Oe);return Ge&&Fi(M,fe),oe}for(ce=c(M,ce);!Oe.done;fe++,Oe=F.next())Oe=ee(ce,M,fe,Oe.value,Y),Oe!==null&&(n&&Oe.alternate!==null&&ce.delete(Oe.key===null?fe:Oe.key),P=p(Oe,P,fe),ue===null?oe=Oe:ue.sibling=Oe,ue=Oe);return n&&ce.forEach(function(C0){return r(M,C0)}),Ge&&Fi(M,fe),oe}function nt(M,P,F,Y){if(typeof F=="object"&&F!==null&&F.type===x&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case qe:e:{for(var oe=F.key,ue=P;ue!==null;){if(ue.key===oe){if(oe=F.type,oe===x){if(ue.tag===7){a(M,ue.sibling),P=d(ue,F.props.children),P.return=M,M=P;break e}}else if(ue.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Pt&&tp(oe)===ue.type){a(M,ue.sibling),P=d(ue,F.props),P.ref=na(M,ue,F),P.return=M,M=P;break e}a(M,ue);break}else r(M,ue);ue=ue.sibling}F.type===x?(P=qi(F.props.children,M.mode,Y,F.key),P.return=M,M=P):(Y=Yl(F.type,F.key,F.props,null,M.mode,Y),Y.ref=na(M,P,F),Y.return=M,M=Y)}return _(M);case Ae:e:{for(ue=F.key;P!==null;){if(P.key===ue)if(P.tag===4&&P.stateNode.containerInfo===F.containerInfo&&P.stateNode.implementation===F.implementation){a(M,P.sibling),P=d(P,F.children||[]),P.return=M,M=P;break e}else{a(M,P);break}else r(M,P);P=P.sibling}P=Ph(F,M.mode,Y),P.return=M,M=P}return _(M);case Pt:return ue=F._init,nt(M,P,ue(F._payload),Y)}if(rr(F))return ie(M,P,F,Y);if(le(F))return se(M,P,F,Y);kl(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,P!==null&&P.tag===6?(a(M,P.sibling),P=d(P,F),P.return=M,M=P):(a(M,P),P=Ch(F,M.mode,Y),P.return=M,M=P),_(M)):a(M,P)}return nt}var Bs=np(!0),rp=np(!1),Cl=Br(null),Pl=null,$s=null,Fc=null;function Uc(){Fc=$s=Pl=null}function jc(n){var r=Cl.current;We(Cl),n._currentValue=r}function zc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Hs(n,r){Pl=n,Fc=$s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function gn(n){var r=n._currentValue;if(Fc!==n)if(n={context:n,memoizedValue:r,next:null},$s===null){if(Pl===null)throw Error(t(308));$s=n,Pl.dependencies={lanes:0,firstContext:n}}else $s=$s.next=n;return r}var Ui=null;function Bc(n){Ui===null?Ui=[n]:Ui.push(n)}function ip(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Bc(r)):(a.next=d.next,d.next=a),r.interleaved=a,gr(n,c)}function gr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Wr=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,gr(n,a)}return d=c.interleaved,d===null?(r.next=r,Bc(c)):(r.next=d.next,d.next=r),c.interleaved=r,gr(n,a)}function xl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Lr(n,a)}}function op(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Nl(n,r,a,c){var d=n.updateQueue;Wr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,U=R.next;R.next=null,_===null?p=U:_.next=U,_=R;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==_&&(T===null?K.firstBaseUpdate=U:T.next=U,K.lastBaseUpdate=R))}if(p!==null){var G=d.baseState;_=0,K=U=R=null,T=p;do{var q=T.lane,ee=T.eventTime;if((c&q)===q){K!==null&&(K=K.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ie=n,se=T;switch(q=r,ee=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){G=ie.call(ee,G,q);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,q=typeof ie=="function"?ie.call(ee,G,q):ie,q==null)break e;G=te({},G,q);break e;case 2:Wr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else ee={eventTime:ee,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(U=K=ee,R=G):K=K.next=ee,_|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(K===null&&(R=G),d.baseState=R,d.firstBaseUpdate=U,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Bi|=_,n.lanes=_,n.memoizedState=G}}function ap(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ra={},Wn=Br(ra),ia=Br(ra),sa=Br(ra);function ji(n){if(n===ra)throw Error(t(174));return n}function Hc(n,r){switch($e(sa,r),$e(ia,n),$e(Wn,ra),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:lt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=lt(r,n)}We(Wn),$e(Wn,r)}function Ws(){We(Wn),We(ia),We(sa)}function lp(n){ji(sa.current);var r=ji(Wn.current),a=lt(r,n.type);r!==a&&($e(ia,n),$e(Wn,a))}function Wc(n){ia.current===n&&(We(Wn),We(ia))}var Qe=Br(0);function Dl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var qc=[];function Kc(){for(var n=0;n<qc.length;n++)qc[n]._workInProgressVersionPrimary=null;qc.length=0}var Vl=Te.ReactCurrentDispatcher,Gc=Te.ReactCurrentBatchConfig,zi=0,Xe=null,ct=null,yt=null,Ol=!1,oa=!1,aa=0,Xv=0;function Nt(){throw Error(t(321))}function Qc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Pn(n[a],r[a]))return!1;return!0}function Xc(n,r,a,c,d,p){if(zi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Vl.current=n===null||n.memoizedState===null?e0:t0,n=a(c,d),oa){p=0;do{if(oa=!1,aa=0,25<=p)throw Error(t(301));p+=1,yt=ct=null,r.updateQueue=null,Vl.current=n0,n=a(c,d)}while(oa)}if(Vl.current=bl,r=ct!==null&&ct.next!==null,zi=0,yt=ct=Xe=null,Ol=!1,r)throw Error(t(300));return n}function Yc(){var n=aa!==0;return aa=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Xe.memoizedState=yt=n:yt=yt.next=n,yt}function yn(){if(ct===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var r=yt===null?Xe.memoizedState:yt.next;if(r!==null)yt=r,ct=n;else{if(n===null)throw Error(t(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},yt===null?Xe.memoizedState=yt=n:yt=yt.next=n}return yt}function la(n,r){return typeof r=="function"?r(n):r}function Jc(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ct,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,R=null,U=p;do{var K=U.lane;if((zi&K)===K)R!==null&&(R=R.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var G={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};R===null?(T=R=G,_=c):R=R.next=G,Xe.lanes|=K,Bi|=K}U=U.next}while(U!==null&&U!==p);R===null?_=c:R.next=T,Pn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,Bi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Zc(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Pn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function up(){}function cp(n,r){var a=Xe,c=yn(),d=r(),p=!Pn(c.memoizedState,d);if(p&&(c.memoizedState=d,Kt=!0),c=c.queue,eh(fp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,ua(9,dp.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));(zi&30)!==0||hp(a,r,d)}return d}function hp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function dp(n,r,a,c){r.value=a,r.getSnapshot=c,pp(r)&&mp(n)}function fp(n,r,a){return a(function(){pp(r)&&mp(n)})}function pp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Pn(n,a)}catch{return!0}}function mp(n){var r=gr(n,1);r!==null&&On(r,n,1,-1)}function gp(n){var r=qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:n},r.queue=n,n=n.dispatch=Zv.bind(null,Xe,n),[r.memoizedState,n]}function ua(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function yp(){return yn().memoizedState}function Ll(n,r,a,c){var d=qn();Xe.flags|=n,d.memoizedState=ua(1|r,a,void 0,c===void 0?null:c)}function Ml(n,r,a,c){var d=yn();c=c===void 0?null:c;var p=void 0;if(ct!==null){var _=ct.memoizedState;if(p=_.destroy,c!==null&&Qc(c,_.deps)){d.memoizedState=ua(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=ua(1|r,a,p,c)}function _p(n,r){return Ll(8390656,8,n,r)}function eh(n,r){return Ml(2048,8,n,r)}function vp(n,r){return Ml(4,2,n,r)}function wp(n,r){return Ml(4,4,n,r)}function Ep(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Tp(n,r,a){return a=a!=null?a.concat([n]):null,Ml(4,4,Ep.bind(null,r,n),a)}function th(){}function Ip(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Qc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Sp(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Qc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Ap(n,r,a){return(zi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Pn(a,r)||(a=xi(),Xe.lanes|=a,Bi|=a,n.baseState=!0),r)}function Yv(n,r){var a=Ce;Ce=a!==0&&4>a?a:4,n(!0);var c=Gc.transition;Gc.transition={};try{n(!1),r()}finally{Ce=a,Gc.transition=c}}function Rp(){return yn().memoizedState}function Jv(n,r,a){var c=Xr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},kp(n))Cp(r,a);else if(a=ip(n,r,a,c),a!==null){var d=Bt();On(a,n,c,d),Pp(a,r,c)}}function Zv(n,r,a){var c=Xr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(kp(n))Cp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Pn(T,_)){var R=r.interleaved;R===null?(d.next=d,Bc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=ip(n,r,d,c),a!==null&&(d=Bt(),On(a,n,c,d),Pp(a,r,c))}}function kp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function Cp(n,r){oa=Ol=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Pp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Lr(n,a)}}var bl={readContext:gn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},e0={readContext:gn,useCallback:function(n,r){return qn().memoizedState=[n,r===void 0?null:r],n},useContext:gn,useEffect:_p,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ll(4194308,4,Ep.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ll(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ll(4,2,n,r)},useMemo:function(n,r){var a=qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Jv.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=qn();return n={current:n},r.memoizedState=n},useState:gp,useDebugValue:th,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=gp(!1),r=n[0];return n=Yv.bind(null,n[1]),qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=qn();if(Ge){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));(zi&30)!==0||hp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,_p(fp.bind(null,c,p,n),[n]),c.flags|=2048,ua(9,dp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=qn(),r=_t.identifierPrefix;if(Ge){var a=mr,c=pr;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=aa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Xv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},t0={readContext:gn,useCallback:Ip,useContext:gn,useEffect:eh,useImperativeHandle:Tp,useInsertionEffect:vp,useLayoutEffect:wp,useMemo:Sp,useReducer:Jc,useRef:yp,useState:function(){return Jc(la)},useDebugValue:th,useDeferredValue:function(n){var r=yn();return Ap(r,ct.memoizedState,n)},useTransition:function(){var n=Jc(la)[0],r=yn().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:cp,useId:Rp,unstable_isNewReconciler:!1},n0={readContext:gn,useCallback:Ip,useContext:gn,useEffect:eh,useImperativeHandle:Tp,useInsertionEffect:vp,useLayoutEffect:wp,useMemo:Sp,useReducer:Zc,useRef:yp,useState:function(){return Zc(la)},useDebugValue:th,useDeferredValue:function(n){var r=yn();return ct===null?r.memoizedState=n:Ap(r,ct.memoizedState,n)},useTransition:function(){var n=Zc(la)[0],r=yn().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:cp,useId:Rp,unstable_isNewReconciler:!1};function Nn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function nh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Fl={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Xr(n),p=yr(c,d);p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(On(r,n,d,c),xl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Xr(n),p=yr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(On(r,n,d,c),xl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=Xr(n),d=yr(a,c);d.tag=2,r!=null&&(d.callback=r),r=qr(n,d,c),r!==null&&(On(r,n,c,a),xl(r,n,c))}};function xp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Qo(a,c)||!Qo(d,p):!0}function Np(n,r,a){var c=!1,d=$r,p=r.contextType;return typeof p=="object"&&p!==null?p=gn(p):(d=qt(r)?Mi:xt.current,c=r.contextTypes,p=(c=c!=null)?Fs(n,d):$r),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Fl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Dp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Fl.enqueueReplaceState(r,r.state,null)}function rh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},$c(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=gn(p):(p=qt(r)?Mi:xt.current,d.context=Fs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(nh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Fl.enqueueReplaceState(d,d.state,null),Nl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function qs(n,r){try{var a="",c=r;do a+=Ie(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function ih(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function sh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var r0=typeof WeakMap=="function"?WeakMap:Map;function Vp(n,r,a){a=yr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Wl||(Wl=!0,wh=c),sh(n,r)},a}function Op(n,r,a){a=yr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){sh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){sh(n,r),typeof c!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Lp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new r0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=y0.bind(null,n,r,a),r.then(n,n))}function Mp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function bp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=yr(-1,1),r.tag=2,qr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var i0=Te.ReactCurrentOwner,Kt=!1;function zt(n,r,a,c){r.child=n===null?rp(r,null,a,c):Bs(r,n.child,a,c)}function Fp(n,r,a,c,d){a=a.render;var p=r.ref;return Hs(r,d),c=Xc(n,r,a,c,p,d),a=Yc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Ge&&a&&Vc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Up(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!kh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,jp(n,r,p,c,d)):(n=Yl(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Qo,a(_,c)&&n.ref===r.ref)return _r(n,r,d)}return r.flags|=1,n=Jr(p,c),n.ref=r.ref,n.return=r,r.child=n}function jp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Qo(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,_r(n,r,d)}return oh(n,r,a,c,d)}function zp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Gs,on),on|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e(Gs,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,$e(Gs,on),on|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,$e(Gs,on),on|=c;return zt(n,r,d,a),r.child}function Bp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function oh(n,r,a,c,d){var p=qt(a)?Mi:xt.current;return p=Fs(r,p),Hs(r,d),a=Xc(n,r,a,c,p,d),c=Yc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Ge&&c&&Vc(r),r.flags|=1,zt(n,r,a,d),r.child)}function $p(n,r,a,c,d){if(qt(a)){var p=!0;Tl(r)}else p=!1;if(Hs(r,d),r.stateNode===null)jl(n,r),Np(r,a,c),rh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=gn(U):(U=qt(a)?Mi:xt.current,U=Fs(r,U));var K=a.getDerivedStateFromProps,G=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==U)&&Dp(r,_,c,U),Wr=!1;var q=r.memoizedState;_.state=q,Nl(r,c,_,d),R=r.memoizedState,T!==c||q!==R||Wt.current||Wr?(typeof K=="function"&&(nh(r,a,K,c),R=r.memoizedState),(T=Wr||xp(r,a,T,c,q,R,U))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=U,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,sp(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:Nn(r.type,T),_.props=U,G=r.pendingProps,q=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=gn(R):(R=qt(a)?Mi:xt.current,R=Fs(r,R));var ee=a.getDerivedStateFromProps;(K=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==G||q!==R)&&Dp(r,_,c,R),Wr=!1,q=r.memoizedState,_.state=q,Nl(r,c,_,d);var ie=r.memoizedState;T!==G||q!==ie||Wt.current||Wr?(typeof ee=="function"&&(nh(r,a,ee,c),ie=r.memoizedState),(U=Wr||xp(r,a,U,c,q,ie,R)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ie,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ie,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),_.props=c,_.state=ie,_.context=R,c=U):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return ah(n,r,a,c,p,d)}function ah(n,r,a,c,d,p){Bp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Gf(r,a,!1),_r(n,r,p);c=r.stateNode,i0.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Bs(r,n.child,null,p),r.child=Bs(r,null,T,p)):zt(n,r,T,p),r.memoizedState=c.state,d&&Gf(r,a,!0),r.child}function Hp(n){var r=n.stateNode;r.pendingContext?qf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&qf(n,r.context,!1),Hc(n,r.containerInfo)}function Wp(n,r,a,c,d){return zs(),bc(d),r.flags|=256,zt(n,r,a,c),r.child}var lh={dehydrated:null,treeContext:null,retryLane:0};function uh(n){return{baseLanes:n,cachePool:null,transitions:null}}function qp(n,r,a){var c=r.pendingProps,d=Qe.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Qe,d&1),n===null)return Mc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Jl(_,c,0,null),n=qi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=uh(a),r.memoizedState=lh,n):ch(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return s0(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Jr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Jr(T,p):(p=qi(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?uh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=lh,c}return p=n.child,n=p.sibling,c=Jr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function ch(n,r){return r=Jl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ul(n,r,a,c){return c!==null&&bc(c),Bs(r,n.child,null,a),n=ch(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function s0(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=ih(Error(t(422))),Ul(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Jl({mode:"visible",children:c.children},d,0,null),p=qi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Bs(r,n.child,null,_),r.child.memoizedState=uh(_),r.memoizedState=lh,p);if((r.mode&1)===0)return Ul(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=ih(p,c,void 0),Ul(n,r,_,c)}if(T=(_&n.childLanes)!==0,Kt||T){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,gr(n,d),On(c,n,d,-1))}return Rh(),c=ih(Error(t(421))),Ul(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=_0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,sn=zr(d.nextSibling),rn=r,Ge=!0,xn=null,n!==null&&(pn[mn++]=pr,pn[mn++]=mr,pn[mn++]=bi,pr=n.id,mr=n.overflow,bi=r),r=ch(r,c.children),r.flags|=4096,r)}function Kp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),zc(n.return,r,a)}function hh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Gp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Qe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kp(n,a,r);else if(n.tag===19)Kp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Qe,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Dl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),hh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Dl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}hh(r,!0,a,null,p);break;case"together":hh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function jl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function _r(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Bi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Jr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Jr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function o0(n,r,a){switch(r.tag){case 3:Hp(r),zs();break;case 5:lp(r);break;case 1:qt(r.type)&&Tl(r);break;case 4:Hc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;$e(Cl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?($e(Qe,Qe.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?qp(n,r,a):($e(Qe,Qe.current&1),n=_r(n,r,a),n!==null?n.sibling:null);$e(Qe,Qe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Gp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Qe,Qe.current),c)break;return null;case 22:case 23:return r.lanes=0,zp(n,r,a)}return _r(n,r,a)}var Qp,dh,Xp,Yp;Qp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},dh=function(){},Xp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,ji(Wn.current);var p=null;switch(a){case"input":d=vi(n,d),c=vi(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=So(n,d),c=So(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=vl)}xo(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var R=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&R!==T&&(R!=null||T!=null))if(U==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(U,a)),a=R;else U==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(U,R)):U==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(U,""+R):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(R!=null&&U==="onScroll"&&He("scroll",n),p||T===R||(p=[])):(p=p||[]).push(U,R))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},Yp=function(n,r,a,c){a!==c&&(r.flags|=4)};function ca(n,r){if(!Ge)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function a0(n,r,a){var c=r.pendingProps;switch(Oc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(r),null;case 1:return qt(r.type)&&El(),Dt(r),null;case 3:return c=r.stateNode,Ws(),We(Wt),We(xt),Kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Rl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,xn!==null&&(Ih(xn),xn=null))),dh(n,r),Dt(r),null;case 5:Wc(r);var d=ji(sa.current);if(a=r.type,n!==null&&r.stateNode!=null)Xp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Dt(r),null}if(n=ji(Wn.current),Rl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Hn]=r,c[ea]=p,n=(r.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<Yo.length;d++)He(Yo[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":os(c,p),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},He("invalid",c);break;case"textarea":ls(c,p),He("invalid",c)}xo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&_l(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&_l(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&He("scroll",c)}switch(a){case"input":nr(c),Ha(c,p,!0);break;case"textarea":nr(c),Ao(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=vl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=at(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Hn]=r,n[ea]=c,Qp(n,r,!1,!1),r.stateNode=n;e:{switch(_=No(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<Yo.length;d++)He(Yo[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":os(n,c),d=vi(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),He("invalid",n);break;case"textarea":ls(n,c),d=So(n,c),He("invalid",n);break;default:d=c}xo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?Co(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Ro(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&xr(n,R):typeof R=="number"&&xr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&He("scroll",n):R!=null&&ye(n,p,R,_))}switch(a){case"input":nr(n),Ha(n,c,!1);break;case"textarea":nr(n),Ao(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ir(n,!!c.multiple,p,!1):c.defaultValue!=null&&ir(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=vl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dt(r),null;case 6:if(n&&r.stateNode!=null)Yp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=ji(sa.current),ji(Wn.current),Rl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Hn]=r,(p=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:_l(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_l(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Hn]=r,r.stateNode=c}return Dt(r),null;case 13:if(We(Qe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&sn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ep(),zs(),r.flags|=98560,p=!1;else if(p=Rl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Hn]=r}else zs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Dt(r),p=!1}else xn!==null&&(Ih(xn),xn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Qe.current&1)!==0?ht===0&&(ht=3):Rh())),r.updateQueue!==null&&(r.flags|=4),Dt(r),null);case 4:return Ws(),dh(n,r),n===null&&Jo(r.stateNode.containerInfo),Dt(r),null;case 10:return jc(r.type._context),Dt(r),null;case 17:return qt(r.type)&&El(),Dt(r),null;case 19:if(We(Qe),p=r.memoizedState,p===null)return Dt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)ca(p,!1);else{if(ht!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Dl(n),_!==null){for(r.flags|=128,ca(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Qe,Qe.current&1|2),r.child}n=n.sibling}p.tail!==null&&Be()>Qs&&(r.flags|=128,c=!0,ca(p,!1),r.lanes=4194304)}else{if(!c)if(n=Dl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ca(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ge)return Dt(r),null}else 2*Be()-p.renderingStartTime>Qs&&a!==1073741824&&(r.flags|=128,c=!0,ca(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Be(),r.sibling=null,a=Qe.current,$e(Qe,c?a&1|2:a&1),r):(Dt(r),null);case 22:case 23:return Ah(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(on&1073741824)!==0&&(Dt(r),r.subtreeFlags&6&&(r.flags|=8192)):Dt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function l0(n,r){switch(Oc(r),r.tag){case 1:return qt(r.type)&&El(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ws(),We(Wt),We(xt),Kc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Wc(r),null;case 13:if(We(Qe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));zs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return We(Qe),null;case 4:return Ws(),null;case 10:return jc(r.type._context),null;case 22:case 23:return Ah(),null;case 24:return null;default:return null}}var zl=!1,Vt=!1,u0=typeof WeakSet=="function"?WeakSet:Set,re=null;function Ks(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Je(n,r,c)}else a.current=null}function fh(n,r,a){try{a()}catch(c){Je(n,r,c)}}var Jp=!1;function c0(n,r){if(Ac=Fr,n=xf(),yc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,R=-1,U=0,K=0,G=n,q=null;t:for(;;){for(var ee;G!==a||d!==0&&G.nodeType!==3||(T=_+d),G!==p||c!==0&&G.nodeType!==3||(R=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(ee=G.firstChild)!==null;)q=G,G=ee;for(;;){if(G===n)break t;if(q===a&&++U===d&&(T=_),q===p&&++K===c&&(R=_),(ee=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=ee}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rc={focusedElem:n,selectionRange:a},Fr=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,nt=ie.memoizedState,M=r.stateNode,P=M.getSnapshotBeforeUpdate(r.elementType===r.type?se:Nn(r.type,se),nt);M.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){Je(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=Jp,Jp=!1,ie}function ha(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&fh(r,a,p)}d=d.next}while(d!==c)}}function Bl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function ph(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Zp(n){var r=n.alternate;r!==null&&(n.alternate=null,Zp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Hn],delete r[ea],delete r[xc],delete r[qv],delete r[Kv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function em(n){return n.tag===5||n.tag===3||n.tag===4}function tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=vl));else if(c!==4&&(n=n.child,n!==null))for(mh(n,r,a),n=n.sibling;n!==null;)mh(n,r,a),n=n.sibling}function gh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(gh(n,r,a),n=n.sibling;n!==null;)gh(n,r,a),n=n.sibling}var It=null,Dn=!1;function Kr(n,r,a){for(a=a.child;a!==null;)nm(n,r,a),a=a.sibling}function nm(n,r,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ci,a)}catch{}switch(a.tag){case 5:Vt||Ks(a,r);case 6:var c=It,d=Dn;It=null,Kr(n,r,a),It=c,Dn=d,It!==null&&(Dn?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(Dn?(n=It,a=a.stateNode,n.nodeType===8?Pc(n.parentNode,a):n.nodeType===1&&Pc(n,a),kn(n)):Pc(It,a.stateNode));break;case 4:c=It,d=Dn,It=a.stateNode.containerInfo,Dn=!0,Kr(n,r,a),It=c,Dn=d;break;case 0:case 11:case 14:case 15:if(!Vt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&fh(a,r,_),d=d.next}while(d!==c)}Kr(n,r,a);break;case 1:if(!Vt&&(Ks(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Je(a,r,T)}Kr(n,r,a);break;case 21:Kr(n,r,a);break;case 22:a.mode&1?(Vt=(c=Vt)||a.memoizedState!==null,Kr(n,r,a),Vt=c):Kr(n,r,a);break;default:Kr(n,r,a)}}function rm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new u0),r.forEach(function(c){var d=v0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,Dn=!1;break e;case 3:It=T.stateNode.containerInfo,Dn=!0;break e;case 4:It=T.stateNode.containerInfo,Dn=!0;break e}T=T.return}if(It===null)throw Error(t(160));nm(p,_,d),It=null,Dn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(U){Je(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)im(r,n),r=r.sibling}function im(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(r,n),Kn(n),c&4){try{ha(3,n,n.return),Bl(3,n)}catch(se){Je(n,n.return,se)}try{ha(5,n,n.return)}catch(se){Je(n,n.return,se)}}break;case 1:Vn(r,n),Kn(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(Vn(r,n),Kn(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var d=n.stateNode;try{xr(d,"")}catch(se){Je(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&To(d,p),No(T,_);var U=No(T,p);for(_=0;_<R.length;_+=2){var K=R[_],G=R[_+1];K==="style"?Co(d,G):K==="dangerouslySetInnerHTML"?Ro(d,G):K==="children"?xr(d,G):ye(d,K,G,U)}switch(T){case"input":Io(d,p);break;case"textarea":us(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?ir(d,!!p.multiple,ee,!1):q!==!!p.multiple&&(p.defaultValue!=null?ir(d,!!p.multiple,p.defaultValue,!0):ir(d,!!p.multiple,p.multiple?[]:"",!1))}d[ea]=p}catch(se){Je(n,n.return,se)}}break;case 6:if(Vn(r,n),Kn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(se){Je(n,n.return,se)}}break;case 3:if(Vn(r,n),Kn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(r.containerInfo)}catch(se){Je(n,n.return,se)}break;case 4:Vn(r,n),Kn(n);break;case 13:Vn(r,n),Kn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(vh=Be())),c&4&&rm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Vt=(U=Vt)||K,Vn(r,n),Vt=U):Vn(r,n),Kn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(re=n,K=n.child;K!==null;){for(G=re=K;re!==null;){switch(q=re,ee=q.child,q.tag){case 0:case 11:case 14:case 15:ha(4,q,q.return);break;case 1:Ks(q,q.return);var ie=q.stateNode;if(typeof ie.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(se){Je(c,a,se)}}break;case 5:Ks(q,q.return);break;case 22:if(q.memoizedState!==null){am(G);continue}}ee!==null?(ee.return=q,re=ee):am(G)}K=K.sibling}e:for(K=null,G=n;;){if(G.tag===5){if(K===null){K=G;try{d=G.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=G.stateNode,R=G.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=ko("display",_))}catch(se){Je(n,n.return,se)}}}else if(G.tag===6){if(K===null)try{G.stateNode.nodeValue=U?"":G.memoizedProps}catch(se){Je(n,n.return,se)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;K===G&&(K=null),G=G.return}K===G&&(K=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Vn(r,n),Kn(n),c&4&&rm(n);break;case 21:break;default:Vn(r,n),Kn(n)}}function Kn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(em(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xr(d,""),c.flags&=-33);var p=tm(n);gh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=tm(n);mh(n,T,_);break;default:throw Error(t(161))}}catch(R){Je(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function h0(n,r,a){re=n,sm(n)}function sm(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||zl;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Vt;T=zl;var U=Vt;if(zl=_,(Vt=R)&&!U)for(re=d;re!==null;)_=re,R=_.child,_.tag===22&&_.memoizedState!==null?lm(d):R!==null?(R.return=_,re=R):lm(d);for(;p!==null;)re=p,sm(p),p=p.sibling;re=d,zl=T,Vt=U}om(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,re=p):om(n)}}function om(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Vt||Bl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Vt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Nn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&ap(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}ap(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var G=K.dehydrated;G!==null&&kn(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vt||r.flags&512&&ph(r)}catch(q){Je(r,r.return,q)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function am(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function lm(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Bl(4,r)}catch(R){Je(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){Je(r,d,R)}}var p=r.return;try{ph(r)}catch(R){Je(r,p,R)}break;case 5:var _=r.return;try{ph(r)}catch(R){Je(r,_,R)}}}catch(R){Je(r,r.return,R)}if(r===n){re=null;break}var T=r.sibling;if(T!==null){T.return=r.return,re=T;break}re=r.return}}var d0=Math.ceil,$l=Te.ReactCurrentDispatcher,yh=Te.ReactCurrentOwner,_n=Te.ReactCurrentBatchConfig,Ve=0,_t=null,st=null,St=0,on=0,Gs=Br(0),ht=0,da=null,Bi=0,Hl=0,_h=0,fa=null,Gt=null,vh=0,Qs=1/0,vr=null,Wl=!1,wh=null,Gr=null,ql=!1,Qr=null,Kl=0,pa=0,Eh=null,Gl=-1,Ql=0;function Bt(){return(Ve&6)!==0?Be():Gl!==-1?Gl:Gl=Be()}function Xr(n){return(n.mode&1)===0?1:(Ve&2)!==0&&St!==0?St&-St:Qv.transition!==null?(Ql===0&&(Ql=xi()),Ql):(n=Ce,n!==0||(n=window.event,n=n===void 0?16:Bo(n.type)),n)}function On(n,r,a,c){if(50<pa)throw pa=0,Eh=null,Error(t(185));Or(n,a,c),((Ve&2)===0||n!==_t)&&(n===_t&&((Ve&2)===0&&(Hl|=a),ht===4&&Yr(n,St)),Qt(n,c),a===1&&Ve===0&&(r.mode&1)===0&&(Qs=Be()+500,Il&&Hr()))}function Qt(n,r){var a=n.callbackNode;ar(n,r);var c=Pi(n,n===_t?St:0);if(c===0)a!==null&&bo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&bo(a),r===1)n.tag===0?Gv(cm.bind(null,n)):Qf(cm.bind(null,n)),Hv(function(){(Ve&6)===0&&Hr()}),a=null;else{switch(Mr(c)){case 1:a=ki;break;case 4:a=Nr;break;case 16:a=hn;break;case 536870912:a=Qa;break;default:a=hn}a=_m(a,um.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function um(n,r){if(Gl=-1,Ql=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Xs()&&n.callbackNode!==a)return null;var c=Pi(n,n===_t?St:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Xl(n,c);else{r=c;var d=Ve;Ve|=2;var p=dm();(_t!==n||St!==r)&&(vr=null,Qs=Be()+500,Hi(n,r));do try{m0();break}catch(T){hm(n,T)}while(!0);Uc(),$l.current=p,Ve=d,st!==null?r=0:(_t=null,St=0,r=ht)}if(r!==0){if(r===2&&(d=en(n),d!==0&&(c=d,r=Th(n,d))),r===1)throw a=da,Hi(n,0),Yr(n,c),Qt(n,Be()),a;if(r===6)Yr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!f0(d)&&(r=Xl(n,c),r===2&&(p=en(n),p!==0&&(c=p,r=Th(n,p))),r===1))throw a=da,Hi(n,0),Yr(n,c),Qt(n,Be()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Wi(n,Gt,vr);break;case 3:if(Yr(n,c),(c&130023424)===c&&(r=vh+500-Be(),10<r)){if(Pi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Cc(Wi.bind(null,n,Gt,vr),r);break}Wi(n,Gt,vr);break;case 4:if(Yr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ut(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=Be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*d0(c/1960))-c,10<c){n.timeoutHandle=Cc(Wi.bind(null,n,Gt,vr),c);break}Wi(n,Gt,vr);break;case 5:Wi(n,Gt,vr);break;default:throw Error(t(329))}}}return Qt(n,Be()),n.callbackNode===a?um.bind(null,n):null}function Th(n,r){var a=fa;return n.current.memoizedState.isDehydrated&&(Hi(n,r).flags|=256),n=Xl(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&Ih(r)),n}function Ih(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function f0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Pn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Yr(n,r){for(r&=~_h,r&=~Hl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ut(r),c=1<<a;n[a]=-1,r&=~c}}function cm(n){if((Ve&6)!==0)throw Error(t(327));Xs();var r=Pi(n,0);if((r&1)===0)return Qt(n,Be()),null;var a=Xl(n,r);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(r=c,a=Th(n,c))}if(a===1)throw a=da,Hi(n,0),Yr(n,r),Qt(n,Be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Wi(n,Gt,vr),Qt(n,Be()),null}function Sh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(Qs=Be()+500,Il&&Hr())}}function $i(n){Qr!==null&&Qr.tag===0&&(Ve&6)===0&&Xs();var r=Ve;Ve|=1;var a=_n.transition,c=Ce;try{if(_n.transition=null,Ce=1,n)return n()}finally{Ce=c,_n.transition=a,Ve=r,(Ve&6)===0&&Hr()}}function Ah(){on=Gs.current,We(Gs)}function Hi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,$v(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Oc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&El();break;case 3:Ws(),We(Wt),We(xt),Kc();break;case 5:Wc(c);break;case 4:Ws();break;case 13:We(Qe);break;case 19:We(Qe);break;case 10:jc(c.type._context);break;case 22:case 23:Ah()}a=a.return}if(_t=n,st=n=Jr(n.current,null),St=on=r,ht=0,da=null,_h=Hl=Bi=0,Gt=fa=null,Ui!==null){for(r=0;r<Ui.length;r++)if(a=Ui[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Ui=null}return n}function hm(n,r){do{var a=st;try{if(Uc(),Vl.current=bl,Ol){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ol=!1}if(zi=0,yt=ct=Xe=null,oa=!1,aa=0,yh.current=null,a===null||a.return===null){ht=1,da=r,st=null;break}e:{var p=n,_=a.return,T=a,R=r;if(r=St,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var U=R,K=T,G=K.tag;if((K.mode&1)===0&&(G===0||G===11||G===15)){var q=K.alternate;q?(K.updateQueue=q.updateQueue,K.memoizedState=q.memoizedState,K.lanes=q.lanes):(K.updateQueue=null,K.memoizedState=null)}var ee=Mp(_);if(ee!==null){ee.flags&=-257,bp(ee,_,T,p,r),ee.mode&1&&Lp(p,U,r),r=ee,R=U;var ie=r.updateQueue;if(ie===null){var se=new Set;se.add(R),r.updateQueue=se}else ie.add(R);break e}else{if((r&1)===0){Lp(p,U,r),Rh();break e}R=Error(t(426))}}else if(Ge&&T.mode&1){var nt=Mp(_);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),bp(nt,_,T,p,r),bc(qs(R,T));break e}}p=R=qs(R,T),ht!==4&&(ht=2),fa===null?fa=[p]:fa.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=Vp(p,R,r);op(p,M);break e;case 1:T=R;var P=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Gr===null||!Gr.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=Op(p,T,r);op(p,Y);break e}}p=p.return}while(p!==null)}pm(a)}catch(oe){r=oe,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function dm(){var n=$l.current;return $l.current=bl,n===null?bl:n}function Rh(){(ht===0||ht===3||ht===2)&&(ht=4),_t===null||(Bi&268435455)===0&&(Hl&268435455)===0||Yr(_t,St)}function Xl(n,r){var a=Ve;Ve|=2;var c=dm();(_t!==n||St!==r)&&(vr=null,Hi(n,r));do try{p0();break}catch(d){hm(n,d)}while(!0);if(Uc(),Ve=a,$l.current=c,st!==null)throw Error(t(261));return _t=null,St=0,ht}function p0(){for(;st!==null;)fm(st)}function m0(){for(;st!==null&&!Ka();)fm(st)}function fm(n){var r=ym(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?pm(n):st=r,yh.current=null}function pm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=a0(a,r,on),a!==null){st=a;return}}else{if(a=l0(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ht=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);ht===0&&(ht=5)}function Wi(n,r,a){var c=Ce,d=_n.transition;try{_n.transition=null,Ce=1,g0(n,r,a,c)}finally{_n.transition=d,Ce=c}return null}function g0(n,r,a,c){do Xs();while(Qr!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(je(n,p),n===_t&&(st=_t=null,St=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ql||(ql=!0,_m(hn,function(){return Xs(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=_n.transition,_n.transition=null;var _=Ce;Ce=1;var T=Ve;Ve|=4,yh.current=null,c0(n,a),im(a,n),Mv(Rc),Fr=!!Ac,Rc=Ac=null,n.current=a,h0(a),uc(),Ve=T,Ce=_,_n.transition=p}else n.current=a;if(ql&&(ql=!1,Qr=n,Kl=d),p=n.pendingLanes,p===0&&(Gr=null),Xa(a.stateNode),Qt(n,Be()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Wl)throw Wl=!1,n=wh,wh=null,n;return(Kl&1)!==0&&n.tag!==0&&Xs(),p=n.pendingLanes,(p&1)!==0?n===Eh?pa++:(pa=0,Eh=n):pa=0,Hr(),null}function Xs(){if(Qr!==null){var n=Mr(Kl),r=_n.transition,a=Ce;try{if(_n.transition=null,Ce=16>n?16:n,Qr===null)var c=!1;else{if(n=Qr,Qr=null,Kl=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,re=n.current;re!==null;){var p=re,_=p.child;if((re.flags&16)!==0){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var U=T[R];for(re=U;re!==null;){var K=re;switch(K.tag){case 0:case 11:case 15:ha(8,K,p)}var G=K.child;if(G!==null)G.return=K,re=G;else for(;re!==null;){K=re;var q=K.sibling,ee=K.return;if(Zp(K),K===U){re=null;break}if(q!==null){q.return=ee,re=q;break}re=ee}}}var ie=p.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var nt=se.sibling;se.sibling=null,se=nt}while(se!==null)}}re=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,re=_;else e:for(;re!==null;){if(p=re,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ha(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,re=M;break e}re=p.return}}var P=n.current;for(re=P;re!==null;){_=re;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,re=F;else e:for(_=P;re!==null;){if(T=re,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Bl(9,T)}}catch(oe){Je(T,T.return,oe)}if(T===_){re=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,re=Y;break e}re=T.return}}if(Ve=d,Hr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ci,n)}catch{}c=!0}return c}finally{Ce=a,_n.transition=r}}return!1}function mm(n,r,a){r=qs(a,r),r=Vp(n,r,1),n=qr(n,r,1),r=Bt(),n!==null&&(Or(n,1,r),Qt(n,r))}function Je(n,r,a){if(n.tag===3)mm(n,n,a);else for(;r!==null;){if(r.tag===3){mm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gr===null||!Gr.has(c))){n=qs(a,n),n=Op(r,n,1),r=qr(r,n,1),n=Bt(),r!==null&&(Or(r,1,n),Qt(r,n));break}}r=r.return}}function y0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(St&a)===a&&(ht===4||ht===3&&(St&130023424)===St&&500>Be()-vh?Hi(n,0):_h|=a),Qt(n,r)}function gm(n,r){r===0&&((n.mode&1)===0?r=1:(r=vs,vs<<=1,(vs&130023424)===0&&(vs=4194304)));var a=Bt();n=gr(n,r),n!==null&&(Or(n,r,a),Qt(n,a))}function _0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),gm(n,a)}function v0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),gm(n,a)}var ym;ym=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,o0(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Ge&&(r.flags&1048576)!==0&&Xf(r,Al,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;jl(n,r),n=r.pendingProps;var d=Fs(r,xt.current);Hs(r,a),d=Xc(null,r,c,n,d,a);var p=Yc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,qt(c)?(p=!0,Tl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$c(r),d.updater=Fl,r.stateNode=d,d._reactInternals=r,rh(r,c,n,a),r=ah(null,r,c,!0,p,a)):(r.tag=0,Ge&&p&&Vc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(jl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=E0(c),n=Nn(c,n),d){case 0:r=oh(null,r,c,n,a);break e;case 1:r=$p(null,r,c,n,a);break e;case 11:r=Fp(null,r,c,n,a);break e;case 14:r=Up(null,r,c,Nn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),oh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),$p(n,r,c,d,a);case 3:e:{if(Hp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,sp(n,r),Nl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=qs(Error(t(423)),r),r=Wp(n,r,c,a,d);break e}else if(c!==d){d=qs(Error(t(424)),r),r=Wp(n,r,c,a,d);break e}else for(sn=zr(r.stateNode.containerInfo.firstChild),rn=r,Ge=!0,xn=null,a=rp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),c===d){r=_r(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return lp(r),n===null&&Mc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,kc(c,d)?_=null:p!==null&&kc(c,p)&&(r.flags|=32),Bp(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&Mc(r),null;case 13:return qp(n,r,a);case 4:return Hc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Bs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Fp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,$e(Cl,c._currentValue),c._currentValue=_,p!==null)if(Pn(p.value,_)){if(p.children===d.children&&!Wt.current){r=_r(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=yr(-1,a&-a),R.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?R.next=R:(R.next=K.next,K.next=R),U.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),zc(p.return,a,r),T.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),zc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Hs(r,a),d=gn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=Nn(c,r.pendingProps),d=Nn(c.type,d),Up(n,r,c,d,a);case 15:return jp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),jl(n,r),r.tag=1,qt(c)?(n=!0,Tl(r)):n=!1,Hs(r,a),Np(r,c,d),rh(r,c,d,a),ah(null,r,c,!0,n,a);case 19:return Gp(n,r,a);case 22:return zp(n,r,a)}throw Error(t(156,r.tag))};function _m(n,r){return ys(n,r)}function w0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,r,a,c){return new w0(n,r,a,c)}function kh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function E0(n){if(typeof n=="function")return kh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Ct)return 14}return 2}function Jr(n,r){var a=n.alternate;return a===null?(a=vn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Yl(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")kh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case x:return qi(a.children,d,p,r);case I:_=8,d|=8;break;case A:return n=vn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=vn(13,a,r,d),n.elementType=S,n.lanes=p,n;case et:return n=vn(19,a,r,d),n.elementType=et,n.lanes=p,n;case Ue:return Jl(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:_=10;break e;case D:_=9;break e;case O:_=11;break e;case Ct:_=14;break e;case Pt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=vn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function qi(n,r,a,c){return n=vn(7,n,c,r),n.lanes=a,n}function Jl(n,r,a,c){return n=vn(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Ch(n,r,a){return n=vn(6,n,null,r),n.lanes=a,n}function Ph(n,r,a){return r=vn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function T0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vr(0),this.expirationTimes=Vr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function xh(n,r,a,c,d,p,_,T,R){return n=new T0(n,r,a,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=vn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(p),n}function I0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function vm(n){if(!n)return $r;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qt(a))return Kf(n,a,r)}return r}function wm(n,r,a,c,d,p,_,T,R){return n=xh(a,c,!0,n,d,p,_,T,R),n.context=vm(null),a=n.current,c=Bt(),d=Xr(a),p=yr(c,d),p.callback=r??null,qr(a,p,d),n.current.lanes=d,Or(n,d,c),Qt(n,c),n}function Zl(n,r,a,c){var d=r.current,p=Bt(),_=Xr(d);return a=vm(a),r.context===null?r.context=a:r.pendingContext=a,r=yr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=qr(d,r,_),n!==null&&(On(n,d,_,p),xl(n,d,_)),_}function eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Em(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Nh(n,r){Em(n,r),(n=n.alternate)&&Em(n,r)}function S0(){return null}var Tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Dh(n){this._internalRoot=n}tu.prototype.render=Dh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Zl(n,r,null,null)},tu.prototype.unmount=Dh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;$i(function(){Zl(null,n,null,null)}),r[dr]=null}};function tu(n){this._internalRoot=n}tu.prototype.unstable_scheduleHydration=function(n){if(n){var r=tl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<jn.length&&r!==0&&r<jn[a].priority;a++);jn.splice(a,0,n),a===0&&il(n)}};function Vh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Im(){}function A0(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=eu(_);p.call(U)}}var _=wm(r,c,n,0,null,!1,!1,"",Im);return n._reactRootContainer=_,n[dr]=_.current,Jo(n.nodeType===8?n.parentNode:n),$i(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=eu(R);T.call(U)}}var R=xh(n,0,!1,null,null,!1,!1,"",Im);return n._reactRootContainer=R,n[dr]=R.current,Jo(n.nodeType===8?n.parentNode:n),$i(function(){Zl(r,R,a,c)}),R}function ru(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var R=eu(_);T.call(R)}}Zl(r,_,n,d)}else _=A0(a,r,n,d,c);return eu(_)}Za=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Dr(r.pendingLanes);a!==0&&(Lr(r,a|1),Qt(r,Be()),(Ve&6)===0&&(Qs=Be()+500,Hr()))}break;case 13:$i(function(){var c=gr(n,1);if(c!==null){var d=Bt();On(c,n,1,d)}}),Nh(n,1)}},ws=function(n){if(n.tag===13){var r=gr(n,134217728);if(r!==null){var a=Bt();On(r,n,134217728,a)}Nh(n,134217728)}},el=function(n){if(n.tag===13){var r=Xr(n),a=gr(n,r);if(a!==null){var c=Bt();On(a,n,r,c)}Nh(n,r)}},tl=function(){return Ce},nl=function(n,r){var a=Ce;try{return Ce=n,r()}finally{Ce=a}},hs=function(n,r,a){switch(r){case"input":if(Io(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=wl(c);if(!d)throw Error(t(90));ss(c),Io(c,d)}}}break;case"textarea":us(n,a);break;case"select":r=a.value,r!=null&&ir(n,!!a.multiple,r,!1)}},Ii=Sh,Vo=$i;var R0={usingClientEntryPoint:!1,Events:[ta,Ms,wl,Fn,Do,Sh]},ma={findFiberByHostInstance:Li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k0={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Mo(n),n===null?null:n.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||S0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Ci=iu.inject(k0),Zt=iu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(r))throw Error(t(200));return I0(n,r,null,a)},Xt.createRoot=function(n,r){if(!Vh(n))throw Error(t(299));var a=!1,c="",d=Tm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=xh(n,1,!1,null,null,a,!1,c,d),n[dr]=r.current,Jo(n.nodeType===8?n.parentNode:n),new Dh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Mo(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return $i(n)},Xt.hydrate=function(n,r,a){if(!nu(r))throw Error(t(200));return ru(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!Vh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Tm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=wm(r,null,n,1,a??null,d,!1,p,_),n[dr]=r.current,Jo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new tu(r)},Xt.render=function(n,r,a){if(!nu(r))throw Error(t(200));return ru(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!nu(n))throw Error(t(40));return n._reactRootContainer?($i(function(){ru(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Sh,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!nu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ru(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var Nm;function L0(){if(Nm)return Mh.exports;Nm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Mh.exports=O0(),Mh.exports}var Dm;function M0(){if(Dm)return su;Dm=1;var i=L0();return su.createRoot=i.createRoot,su.hydrateRoot=i.hydrateRoot,su}var b0=M0();const F0=ny(b0),U0=()=>{};var Vm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},j0=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},iy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,E=u>>2,k=(u&3)<<4|m>>4;let N=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(N=64)),s.push(t[E],t[k],t[N],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ry(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):j0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const k=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||k==null)throw new z0;const N=u<<2|m>>4;if(s.push(N),v!==64){const z=m<<4&240|v>>2;if(s.push(z),k!==64){const H=v<<6&192|k;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class z0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B0=function(i){const e=ry(i);return iy.encodeByteArray(e,!0)},Eu=function(i){return B0(i).replace(/\./g,"")},sy=function(i){try{return iy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=()=>$0().__FIREBASE_DEFAULTS__,W0=()=>{if(typeof process>"u"||typeof Vm>"u")return;const i=Vm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},q0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&sy(i[1]);return e&&JSON.parse(e)},Bu=()=>{try{return U0()||H0()||W0()||q0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},oy=i=>{var e,t;return(t=(e=Bu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},K0=i=>{const e=oy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ay=()=>{var i;return(i=Bu())===null||i===void 0?void 0:i.config},ly=i=>{var e;return(e=Bu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Eu(JSON.stringify(t)),Eu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function Y0(){var i;const e=(i=Bu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Z0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ew(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tw(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function nw(){return!Y0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rw(){try{return typeof indexedDB=="object"}catch{return!1}}function iw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="FirebaseError";class Cr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=sw,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?ow(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Cr(o,m,s)}}function ow(i,e){return i.replace(aw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const aw=/\{\$([^}]+)}/g;function lw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Yi(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Om(u)&&Om(h)){if(!Yi(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Om(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function uw(i,e){const t=new cw(i,e);return t.subscribe.bind(t)}class cw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");hw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Uh),o.error===void 0&&(o.error=Uh),o.complete===void 0&&(o.complete=Uh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Uh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(i){return i&&i._delegate?i._delegate:i}class Ji{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new G0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pw(e))try{this.getOrInitializeService({instanceIdentifier:Ki})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ki){return this.instances.has(e)}getOptions(e=Ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ki){return this.component?this.component.multipleInstances?e:Ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fw(i){return i===Ki?void 0:i}function pw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const gw={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},yw=Re.INFO,_w={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},vw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=_w[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Id{constructor(e){this.name=e,this._logLevel=yw,this._logHandler=vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const ww=(i,e)=>e.some(t=>i instanceof t);let Lm,Mm;function Ew(){return Lm||(Lm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tw(){return Mm||(Mm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uy=new WeakMap,Xh=new WeakMap,cy=new WeakMap,jh=new WeakMap,Sd=new WeakMap;function Iw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(oi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&uy.set(t,i)}).catch(()=>{}),Sd.set(e,i),e}function Sw(i){if(Xh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Xh.set(i,e)}let Yh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Xh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||cy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Aw(i){Yh=i(Yh)}function Rw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(zh(this),e,...t);return cy.set(s,e.sort?e.sort():[e]),oi(s)}:Tw().includes(i)?function(...e){return i.apply(zh(this),e),oi(uy.get(this))}:function(...e){return oi(i.apply(zh(this),e))}}function kw(i){return typeof i=="function"?Rw(i):(i instanceof IDBTransaction&&Sw(i),ww(i,Ew())?new Proxy(i,Yh):i)}function oi(i){if(i instanceof IDBRequest)return Iw(i);if(jh.has(i))return jh.get(i);const e=kw(i);return e!==i&&(jh.set(i,e),Sd.set(e,i)),e}const zh=i=>Sd.get(i);function Cw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=oi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(oi(h.result),y.oldVersion,y.newVersion,oi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const Pw=["get","getKey","getAll","getAllKeys","count"],xw=["put","add","delete","clear"],Bh=new Map;function bm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Bh.get(e))return Bh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=xw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Pw.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Bh.set(e,u),u}Aw(i=>({...i,get:(e,t,s)=>bm(e,t)||i.get(e,t,s),has:(e,t)=>!!bm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Dw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Dw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jh="@firebase/app",Fm="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Id("@firebase/app"),Vw="@firebase/app-compat",Ow="@firebase/analytics-compat",Lw="@firebase/analytics",Mw="@firebase/app-check-compat",bw="@firebase/app-check",Fw="@firebase/auth",Uw="@firebase/auth-compat",jw="@firebase/database",zw="@firebase/data-connect",Bw="@firebase/database-compat",$w="@firebase/functions",Hw="@firebase/functions-compat",Ww="@firebase/installations",qw="@firebase/installations-compat",Kw="@firebase/messaging",Gw="@firebase/messaging-compat",Qw="@firebase/performance",Xw="@firebase/performance-compat",Yw="@firebase/remote-config",Jw="@firebase/remote-config-compat",Zw="@firebase/storage",eE="@firebase/storage-compat",tE="@firebase/firestore",nE="@firebase/vertexai",rE="@firebase/firestore-compat",iE="firebase",sE="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="[DEFAULT]",oE={[Jh]:"fire-core",[Vw]:"fire-core-compat",[Lw]:"fire-analytics",[Ow]:"fire-analytics-compat",[bw]:"fire-app-check",[Mw]:"fire-app-check-compat",[Fw]:"fire-auth",[Uw]:"fire-auth-compat",[jw]:"fire-rtdb",[zw]:"fire-data-connect",[Bw]:"fire-rtdb-compat",[$w]:"fire-fn",[Hw]:"fire-fn-compat",[Ww]:"fire-iid",[qw]:"fire-iid-compat",[Kw]:"fire-fcm",[Gw]:"fire-fcm-compat",[Qw]:"fire-perf",[Xw]:"fire-perf-compat",[Yw]:"fire-rc",[Jw]:"fire-rc-compat",[Zw]:"fire-gcs",[eE]:"fire-gcs-compat",[tE]:"fire-fst",[rE]:"fire-fst-compat",[nE]:"fire-vertex","fire-js":"fire-js",[iE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Map,aE=new Map,ed=new Map;function Um(i,e){try{i.container.addComponent(e)}catch(t){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function so(i){const e=i.name;if(ed.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;ed.set(e,i);for(const t of Tu.values())Um(t,i);for(const t of aE.values())Um(t,i);return!0}function Ad(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Ln(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new Oa("app","Firebase",lE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=sE;function hy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Zh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ai.create("bad-app-name",{appName:String(o)});if(t||(t=ay()),!t)throw ai.create("no-options");const u=Tu.get(o);if(u){if(Yi(t,u.options)&&Yi(s,u.config))return u;throw ai.create("duplicate-app",{appName:o})}const h=new mw(o);for(const y of ed.values())h.addComponent(y);const m=new uE(t,s,h);return Tu.set(o,m),m}function dy(i=Zh){const e=Tu.get(i);if(!e&&i===Zh&&ay())return hy();if(!e)throw ai.create("no-app",{appName:i});return e}function li(i,e,t){var s;let o=(s=oE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(m.join(" "));return}so(new Ji(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="firebase-heartbeat-database",hE=1,Aa="firebase-heartbeat-store";let $h=null;function fy(){return $h||($h=Cw(cE,hE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Aa)}catch(t){console.warn(t)}}}}).catch(i=>{throw ai.create("idb-open",{originalErrorMessage:i.message})})),$h}async function dE(i){try{const t=(await fy()).transaction(Aa),s=await t.objectStore(Aa).get(py(i));return await t.done,s}catch(e){if(e instanceof Cr)Sr.warn(e.message);else{const t=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(t.message)}}}async function jm(i,e){try{const s=(await fy()).transaction(Aa,"readwrite");await s.objectStore(Aa).put(e,py(i)),await s.done}catch(t){if(t instanceof Cr)Sr.warn(t.message);else{const s=ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Sr.warn(s.message)}}}function py(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=1024,pE=30;class mE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=zm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>pE){const h=_E(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Sr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zm(),{heartbeatsToSend:s,unsentEntries:o}=gE(this._heartbeatsCache.heartbeats),u=Eu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Sr.warn(t),""}}}function zm(){return new Date().toISOString().substring(0,10)}function gE(i,e=fE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Bm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Bm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class yE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rw()?iw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Bm(i){return Eu(JSON.stringify({version:2,heartbeats:i})).length}function _E(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(i){so(new Ji("platform-logger",e=>new Nw(e),"PRIVATE")),so(new Ji("heartbeat",e=>new mE(e),"PRIVATE")),li(Jh,Fm,i),li(Jh,Fm,"esm2017"),li("fire-js","")}vE("");var wE="firebase",EE="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */li(wE,EE,"app");function Rd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function my(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TE=my,gy=new Oa("auth","Firebase",my());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new Id("@firebase/auth");function IE(i,...e){Iu.logLevel<=Re.WARN&&Iu.warn(`Auth (${go}): ${i}`,...e)}function du(i,...e){Iu.logLevel<=Re.ERROR&&Iu.error(`Auth (${go}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(i,...e){throw Cd(i,...e)}function Mn(i,...e){return Cd(i,...e)}function kd(i,e,t){const s=Object.assign(Object.assign({},TE()),{[e]:t});return new Oa("auth","Firebase",s).create(e,{appName:i.name})}function Xi(i){return kd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function SE(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Zn(i,"argument-error"),kd(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return gy.create(i,...e)}function pe(i,e,...t){if(!i)throw Cd(e,...t)}function Er(i){const e="INTERNAL ASSERTION FAILED: "+i;throw du(e),new Error(e)}function Ar(i,e){i||Er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function AE(){return $m()==="http:"||$m()==="https:"}function $m(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AE()||Z0()||"connection"in navigator)?navigator.onLine:!0}function kE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ar(t>e,"Short delay should be less than long delay!"),this.isMobile=X0()||ew()}get(){return RE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(i,e){Ar(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=new Ma(3e4,6e4);function xd(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function yo(i,e,t,s,o={}){return _y(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=La(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return J0()||(v.referrerPolicy="no-referrer"),yy.fetch()(vy(i,i.config.apiHost,t,m),v)})}async function _y(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},CE),e);try{const o=new NE(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw ou(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw ou(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw ou(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw ou(i,"user-disabled",h);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw kd(i,E,v);Zn(i,E)}}catch(o){if(o instanceof Cr)throw o;Zn(i,"network-request-failed",{message:String(o)})}}async function xE(i,e,t,s,o={}){const u=await yo(i,e,t,s,o);return"mfaPendingCredential"in u&&Zn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function vy(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?Pd(i.config,o):`${i.config.apiScheme}://${o}`}class NE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Mn(this.auth,"network-request-failed")),PE.get())})}}function ou(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Mn(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(i,e){return yo(i,"POST","/v1/accounts:delete",e)}async function wy(i,e){return yo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VE(i,e=!1){const t=un(i),s=await t.getIdToken(e),o=Nd(s);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:wa(Hh(o.auth_time)),issuedAtTime:wa(Hh(o.iat)),expirationTime:wa(Hh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Hh(i){return Number(i)*1e3}function Nd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return du("JWT malformed, contained fewer than 3 sections"),null;try{const o=sy(t);return o?JSON.parse(o):(du("Failed to decode base64 JWT payload"),null)}catch(o){return du("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Hm(i){const e=Nd(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Cr&&OE(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function OE({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ra(i,wy(t,{idToken:s}));pe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Ey(u.providerUserInfo):[],m=bE(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),E=y?v:!1,k={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new nd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,k)}async function ME(i){const e=un(i);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bE(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Ey(i){return i.map(e=>{var{providerId:t}=e,s=Rd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FE(i,e){const t=await _y(i,{},async()=>{const s=La({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=vy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",yy.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function UE(i,e){return yo(i,"POST","/v2/accounts:revokeToken",xd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=Hm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await FE(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new to;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new nd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ra(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VE(this,e)}reload(){return ME(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Su(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(Xi(this.auth));const e=await this.getIdToken();return await Ra(this,DE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,v,E;const k=(s=t.displayName)!==null&&s!==void 0?s:void 0,N=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,H=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,W=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,we=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ve=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ye,emailVerified:Te,isAnonymous:qe,providerData:Ae,stsTokenManager:x}=t;pe(ye&&x,e,"internal-error");const I=to.fromJSON(this.name,x);pe(typeof ye=="string",e,"internal-error"),ei(k,e.name),ei(N,e.name),pe(typeof Te=="boolean",e,"internal-error"),pe(typeof qe=="boolean",e,"internal-error"),ei(z,e.name),ei(H,e.name),ei(X,e.name),ei(W,e.name),ei(we,e.name),ei(ve,e.name);const A=new Tr({uid:ye,auth:e,email:N,emailVerified:Te,displayName:k,isAnonymous:qe,photoURL:H,phoneNumber:z,tenantId:X,stsTokenManager:I,createdAt:we,lastLoginAt:ve});return Ae&&Array.isArray(Ae)&&(A.providerData=Ae.map(C=>Object.assign({},C))),W&&(A._redirectEventId=W),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new to;o.updateFromServerResponse(t);const u=new Tr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Su(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Ey(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new to;m.updateFromIdToken(s);const y=new Tr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new nd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new Map;function Ir(i){Ar(i instanceof Function,"Expected a class definition");let e=Wm.get(i);return e?(Ar(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Wm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ty.type="NONE";const qm=Ty;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(i,e,t){return`firebase:${i}:${e}:${t}`}class no{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=fu(this.userKey,o.apiKey,u),this.fullPersistenceKey=fu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new no(Ir(qm),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Ir(qm);const h=fu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const E=await v._get(h);if(E){const k=Tr._fromJSON(e,E);v!==u&&(m=k),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new no(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new no(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Iy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cy(e))return"Blackberry";if(Py(e))return"Webos";if(Sy(e))return"Safari";if((e.includes("chrome/")||Ay(e))&&!e.includes("edge/"))return"Chrome";if(ky(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Iy(i=Ft()){return/firefox\//i.test(i)}function Sy(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ay(i=Ft()){return/crios\//i.test(i)}function Ry(i=Ft()){return/iemobile/i.test(i)}function ky(i=Ft()){return/android/i.test(i)}function Cy(i=Ft()){return/blackberry/i.test(i)}function Py(i=Ft()){return/webos/i.test(i)}function Dd(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function jE(i=Ft()){var e;return Dd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zE(){return tw()&&document.documentMode===10}function xy(i=Ft()){return Dd(i)||ky(i)||Py(i)||Cy(i)||/windows phone/i.test(i)||Ry(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(i,e=[]){let t;switch(i){case"Browser":t=Km(Ft());break;case"Worker":t=`${Km(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${go}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(i,e={}){return yo(i,"GET","/v2/passwordPolicy",xd(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=6;class WE{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:HE,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gm(this),this.idTokenSubscription=new Gm(this),this.beforeStateQueue=new BE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ir(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await wy(this,{idToken:e}),s=await Tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ln(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(Xi(this));const t=e?un(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(Xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(Xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $E(this),t=new WE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await UE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ir(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[Ir(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ny(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&IE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $u(i){return un(i)}class Gm{constructor(e){this.auth=e,this.observer=null,this.addObserver=uw(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KE(i){Vd=i}function GE(i){return Vd.loadJS(i)}function QE(){return Vd.gapiScript}function XE(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(i,e){const t=Ad(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Yi(u,e??{}))return o;Zn(o,"already-initialized")}return t.initialize({options:e})}function JE(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ir);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ZE(i,e,t){const s=$u(i);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Dy(e),{host:h,port:m}=eT(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(Yi(v,s.config.emulator)&&Yi(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,tT()}function Dy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function eT(i){const e=Dy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Qm(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Qm(h)}}}function Qm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function tT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,t){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(i,e){return xE(i,"POST","/v1/accounts:signInWithIdp",xd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="http://localhost";class Zi extends Vy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Rd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Zi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ro(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ro(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ro(e,t)}buildRequest(){const e={requestUri:nT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=La(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends Od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends ba{constructor(){super("facebook.com")}static credential(e){return Zi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";ti.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return wr.credential(t,s)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends ba{constructor(){super("github.com")}static credential(e){return Zi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends ba{constructor(){super("twitter.com")}static credential(e,t){return Zi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ri.credential(t,s)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Tr._fromIdTokenResponse(e,s,o),h=Xm(s);return new oo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Xm(s);return new oo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Xm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Cr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Au(e,t,s,o)}}function Oy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(i,u,e,s):u})}async function rT(i,e,t=!1){const s=await Ra(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return oo._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(i,e,t=!1){const{auth:s}=i;if(Ln(s.app))return Promise.reject(Xi(s));const o="reauthenticate";try{const u=await Ra(i,Oy(s,o,e,i),t);pe(u.idToken,s,"internal-error");const h=Nd(u.idToken);pe(h,s,"internal-error");const{sub:m}=h;return pe(i.uid===m,s,"user-mismatch"),oo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Zn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(i,e,t=!1){if(Ln(i.app))return Promise.reject(Xi(i));const s="signIn",o=await Oy(i,s,e),u=await oo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function oT(i,e,t,s){return un(i).onIdTokenChanged(e,t,s)}function aT(i,e,t){return un(i).beforeAuthStateChanged(e,t)}const Ru="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ru,"1"),this.storage.removeItem(Ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=1e3,uT=10;class My extends Ly{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);zE()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,uT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},lT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}My.type="LOCAL";const cT=My;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by extends Ly{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}by.type="SESSION";const Fy=by;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Hu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await hT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=Ld("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(k){const N=k;if(N.data.eventId===v)switch(N.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(N.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return window}function fT(i){Qn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function pT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function gT(){return Uy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="firebaseLocalStorageDb",yT=1,ku="firebaseLocalStorage",zy="fbase_key";class Fa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wu(i,e){return i.transaction([ku],e?"readwrite":"readonly").objectStore(ku)}function _T(){const i=indexedDB.deleteDatabase(jy);return new Fa(i).toPromise()}function rd(){const i=indexedDB.open(jy,yT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ku,{keyPath:zy})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ku)?e(s):(s.close(),await _T(),e(await rd()))})})}async function Ym(i,e,t){const s=Wu(i,!0).put({[zy]:e,value:t});return new Fa(s).toPromise()}async function vT(i,e){const t=Wu(i,!1).get(e),s=await new Fa(t).toPromise();return s===void 0?null:s.value}function Jm(i,e){const t=Wu(i,!0).delete(e);return new Fa(t).toPromise()}const wT=800,ET=3;class By{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>ET)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hu._getInstance(gT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await pT(),!this.activeServiceWorker)return;this.sender=new dT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rd();return await Ym(e,Ru,"1"),await Jm(e,Ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ym(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>vT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Wu(o,!1).getAll();return new Fa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}By.type="LOCAL";const TT=By;new Ma(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(i,e){return e?Ir(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md extends Vy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ro(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function IT(i){return sT(i.auth,new Md(i),i.bypassAuthState)}function ST(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),iT(t,new Md(i),i.bypassAuthState)}async function AT(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),rT(t,new Md(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IT;case"linkViaPopup":case"linkViaRedirect":return AT;case"reauthViaPopup":case"reauthViaRedirect":return ST;default:Zn(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=new Ma(2e3,1e4);async function Wy(i,e,t){if(Ln(i.app))return Promise.reject(Mn(i,"operation-not-supported-in-this-environment"));const s=$u(i);SE(i,e,Od);const o=$y(s,t);return new Gi(s,"signInViaPopup",e,o).executeNotNull()}class Gi extends Hy{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Gi.currentPopupAction&&Gi.currentPopupAction.cancel(),Gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=Ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RT.get())};e()}}Gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="pendingRedirect",pu=new Map;class CT extends Hy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=pu.get(this.auth._key());if(!e){try{const s=await PT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}pu.set(this.auth._key(),e)}return this.bypassAuthState||pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PT(i,e){const t=DT(e),s=NT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function xT(i,e){pu.set(i._key(),e)}function NT(i){return Ir(i._redirectPersistence)}function DT(i){return fu(kT,i.config.apiKey,i.name)}async function VT(i,e,t=!1){if(Ln(i.app))return Promise.reject(Xi(i));const s=$u(i),o=$y(s,e),h=await new CT(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=10*60*1e3;class LT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!qy(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Mn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zm(e))}saveEventToCache(e){this.cachedEventUids.add(Zm(e)),this.lastProcessedEventTime=Date.now()}}function Zm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function qy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qy(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(i,e={}){return yo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UT=/^https?/;async function jT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await bT(i);for(const t of e)try{if(zT(t))return}catch{}Zn(i,"unauthorized-domain")}function zT(i){const e=td(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!UT.test(t))return!1;if(FT.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=new Ma(3e4,6e4);function eg(){const i=Qn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function $T(i){return new Promise((e,t)=>{var s,o,u;function h(){eg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{eg(),t(Mn(i,"network-request-failed"))},timeout:BT.get()})}if(!((o=(s=Qn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Qn().gapi)===null||u===void 0)&&u.load)h();else{const m=XE("iframefcb");return Qn()[m]=()=>{gapi.load?h():t(Mn(i,"network-request-failed"))},GE(`${QE()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw mu=null,e})}let mu=null;function HT(i){return mu=mu||$T(i),mu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new Ma(5e3,15e3),qT="__/auth/iframe",KT="emulator/auth/iframe",GT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XT(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Pd(e,KT):`https://${i.config.authDomain}/${qT}`,s={apiKey:e.apiKey,appName:i.name,v:go},o=QT.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${La(s).slice(1)}`}async function YT(i){const e=await HT(i),t=Qn().gapi;return pe(t,i,"internal-error"),e.open({where:document.body,url:XT(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GT,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Mn(i,"network-request-failed"),m=Qn().setTimeout(()=>{u(h)},WT.get());function y(){Qn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZT=500,eI=600,tI="_blank",nI="http://localhost";class tg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rI(i,e,t,s=ZT,o=eI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},JT),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=Ay(v)?tI:t),Iy(v)&&(e=e||nI,y.scrollbars="yes");const E=Object.entries(y).reduce((N,[z,H])=>`${N}${z}=${H},`,"");if(jE(v)&&m!=="_self")return iI(e||"",m),new tg(null);const k=window.open(e||"",m,E);pe(k,i,"popup-blocked");try{k.focus()}catch{}return new tg(k)}function iI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI="__/auth/handler",oI="emulator/auth/handler",aI=encodeURIComponent("fac");async function ng(i,e,t,s,o,u){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:go,eventId:o};if(e instanceof Od){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",lw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,k]of Object.entries({}))h[E]=k}if(e instanceof ba){const E=e.getScopes().filter(k=>k!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await i._getAppCheckToken(),v=y?`#${aI}=${encodeURIComponent(y)}`:"";return`${lI(i)}?${La(m).slice(1)}${v}`}function lI({config:i}){return i.emulator?Pd(i,oI):`https://${i.authDomain}/${sI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="webStorageSupport";class uI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fy,this._completeRedirectFn=VT,this._overrideRedirectResult=xT}async _openPopup(e,t,s,o){var u;Ar((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await ng(e,t,s,td(),o);return rI(e,h,Ld())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await ng(e,t,s,td(),o);return fT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ar(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await YT(e),s=new LT(e);return t.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wh,{type:Wh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Wh];h!==void 0&&t(!!h),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xy()||Sy()||Dd()}}const cI=uI;var rg="@firebase/auth",ig="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fI(i){so(new Ji("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ny(i)},v=new qE(s,o,u,y);return JE(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),so(new Ji("auth-internal",e=>{const t=$u(e.getProvider("auth").getImmediate());return(s=>new hI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),li(rg,ig,dI(i)),li(rg,ig,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=5*60,mI=ly("authIdTokenMaxAge")||pI;let sg=null;const gI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>mI)return;const o=t==null?void 0:t.token;sg!==o&&(sg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function yI(i=dy()){const e=Ad(i,"auth");if(e.isInitialized())return e.getImmediate();const t=YE(i,{popupRedirectResolver:cI,persistence:[TT,cT,Fy]}),s=ly("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=gI(u.toString());aT(t,h,()=>h(t.currentUser)),oT(t,m=>h(m))}}const o=oy("auth");return o&&ZE(t,`http://${o}`),t}function _I(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}KE({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Mn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",_I().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fI("Browser");var og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,Ky;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,I){function A(){}A.prototype=I.prototype,x.D=I.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(C,D,O){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return I.prototype[D].apply(C,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,I,A){A||(A=0);var C=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)C[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)C[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=x.g[0],A=x.g[1],D=x.g[2];var O=x.g[3],S=I+(O^A&(D^O))+C[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[2]+606105819&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[3]+3250441966&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+C[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[6]+2821735955&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[7]+4249261313&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+C[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[10]+4294925233&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[11]+2304563134&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+C[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[14]+2792965006&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[15]+1236535329&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(D^O&(A^D))+C[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[11]+643717713&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[0]+3921069994&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+C[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[15]+3634488961&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[4]+3889429448&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+C[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[3]+4107603335&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[8]+1163531501&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+C[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[7]+1735328473&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[12]+2368359562&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(A^D^O)+C[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[11]+1839030562&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[14]+4259657740&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+C[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[7]+4139469664&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[10]+3200236656&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+C[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[3]+3572445317&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[6]+76029189&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+C[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[15]+530742520&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[2]+3299628645&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(D^(A|~O))+C[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[14]+2878612391&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[5]+4237533241&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+C[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[10]+4293915773&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[1]+2240044497&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+C[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[6]+2734768916&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[13]+1309151649&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+C[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[2]+718787259&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+I&4294967295,x.g[1]=x.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+O&4294967295}s.prototype.u=function(x,I){I===void 0&&(I=x.length);for(var A=I-this.blockSize,C=this.B,D=this.h,O=0;O<I;){if(D==0)for(;O<=A;)o(this,x,O),O+=this.blockSize;if(typeof x=="string"){for(;O<I;)if(C[D++]=x.charCodeAt(O++),D==this.blockSize){o(this,C),D=0;break}}else for(;O<I;)if(C[D++]=x[O++],D==this.blockSize){o(this,C),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var I=1;I<x.length-8;++I)x[I]=0;var A=8*this.o;for(I=x.length-8;I<x.length;++I)x[I]=A&255,A/=256;for(this.u(x),x=Array(16),I=A=0;4>I;++I)for(var C=0;32>C;C+=8)x[A++]=this.g[I]>>>C&255;return x};function u(x,I){var A=m;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=I(x)}function h(x,I){this.h=I;for(var A=[],C=!0,D=x.length-1;0<=D;D--){var O=x[D]|0;C&&O==I||(A[D]=O,C=!1)}this.g=A}var m={};function y(x){return-128<=x&&128>x?u(x,function(I){return new h([I|0],0>I?-1:0)}):new h([x|0],0>x?-1:0)}function v(x){if(isNaN(x)||!isFinite(x))return k;if(0>x)return W(v(-x));for(var I=[],A=1,C=0;x>=A;C++)I[C]=x/A|0,A*=4294967296;return new h(I,0)}function E(x,I){if(x.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x.charAt(0)=="-")return W(E(x.substring(1),I));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),C=k,D=0;D<x.length;D+=8){var O=Math.min(8,x.length-D),S=parseInt(x.substring(D,D+O),I);8>O?(O=v(Math.pow(I,O)),C=C.j(O).add(v(S))):(C=C.j(A),C=C.add(v(S)))}return C}var k=y(0),N=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(X(this))return-W(this).m();for(var x=0,I=1,A=0;A<this.g.length;A++){var C=this.i(A);x+=(0<=C?C:4294967296+C)*I,I*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(H(this))return"0";if(X(this))return"-"+W(this).toString(x);for(var I=v(Math.pow(x,6)),A=this,C="";;){var D=Te(A,I).g;A=we(A,D.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=D,H(A))return O+C;for(;6>O.length;)O="0"+O;C=O+C}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function H(x){if(x.h!=0)return!1;for(var I=0;I<x.g.length;I++)if(x.g[I]!=0)return!1;return!0}function X(x){return x.h==-1}i.l=function(x){return x=we(this,x),X(x)?-1:H(x)?0:1};function W(x){for(var I=x.g.length,A=[],C=0;C<I;C++)A[C]=~x.g[C];return new h(A,~x.h).add(N)}i.abs=function(){return X(this)?W(this):this},i.add=function(x){for(var I=Math.max(this.g.length,x.g.length),A=[],C=0,D=0;D<=I;D++){var O=C+(this.i(D)&65535)+(x.i(D)&65535),S=(O>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);C=S>>>16,O&=65535,S&=65535,A[D]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function we(x,I){return x.add(W(I))}i.j=function(x){if(H(this)||H(x))return k;if(X(this))return X(x)?W(this).j(W(x)):W(W(this).j(x));if(X(x))return W(this.j(W(x)));if(0>this.l(z)&&0>x.l(z))return v(this.m()*x.m());for(var I=this.g.length+x.g.length,A=[],C=0;C<2*I;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var D=0;D<x.g.length;D++){var O=this.i(C)>>>16,S=this.i(C)&65535,et=x.i(D)>>>16,Ct=x.i(D)&65535;A[2*C+2*D]+=S*Ct,ve(A,2*C+2*D),A[2*C+2*D+1]+=O*Ct,ve(A,2*C+2*D+1),A[2*C+2*D+1]+=S*et,ve(A,2*C+2*D+1),A[2*C+2*D+2]+=O*et,ve(A,2*C+2*D+2)}for(C=0;C<I;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=I;C<2*I;C++)A[C]=0;return new h(A,0)};function ve(x,I){for(;(x[I]&65535)!=x[I];)x[I+1]+=x[I]>>>16,x[I]&=65535,I++}function ye(x,I){this.g=x,this.h=I}function Te(x,I){if(H(I))throw Error("division by zero");if(H(x))return new ye(k,k);if(X(x))return I=Te(W(x),I),new ye(W(I.g),W(I.h));if(X(I))return I=Te(x,W(I)),new ye(W(I.g),I.h);if(30<x.g.length){if(X(x)||X(I))throw Error("slowDivide_ only works with positive integers.");for(var A=N,C=I;0>=C.l(x);)A=qe(A),C=qe(C);var D=Ae(A,1),O=Ae(C,1);for(C=Ae(C,2),A=Ae(A,2);!H(C);){var S=O.add(C);0>=S.l(x)&&(D=D.add(A),O=S),C=Ae(C,1),A=Ae(A,1)}return I=we(x,D.j(I)),new ye(D,I)}for(D=k;0<=x.l(I);){for(A=Math.max(1,Math.floor(x.m()/I.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),O=v(A),S=O.j(I);X(S)||0<S.l(x);)A-=C,O=v(A),S=O.j(I);H(O)&&(O=N),D=D.add(O),x=we(x,S)}return new ye(D,x)}i.A=function(x){return Te(this,x).h},i.and=function(x){for(var I=Math.max(this.g.length,x.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)&x.i(C);return new h(A,this.h&x.h)},i.or=function(x){for(var I=Math.max(this.g.length,x.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)|x.i(C);return new h(A,this.h|x.h)},i.xor=function(x){for(var I=Math.max(this.g.length,x.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)^x.i(C);return new h(A,this.h^x.h)};function qe(x){for(var I=x.g.length+1,A=[],C=0;C<I;C++)A[C]=x.i(C)<<1|x.i(C-1)>>>31;return new h(A,x.h)}function Ae(x,I){var A=I>>5;I%=32;for(var C=x.g.length-A,D=[],O=0;O<C;O++)D[O]=0<I?x.i(O+A)>>>I|x.i(O+A+1)<<32-I:x.i(O+A);return new h(D,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ky=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,ui=h}).apply(typeof og<"u"?og:typeof self<"u"?self:typeof window<"u"?window:{});var au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gy,ya,Qy,gu,id,Xy,Yy,Jy;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof au=="object"&&au];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in g))break e;g=g[L]}l=l[l.length-1],w=g[l],f=f(w),f!=w&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,w=!1,L={next:function(){if(!w&&g<l.length){var j=g++;return{value:f(j,l[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function E(l,f,g){return l.call.apply(l.bind,arguments)}function k(l,f,g){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function N(l,f,g){return N=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:k,N.apply(null,arguments)}function z(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function H(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(w,L,j){for(var J=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)J[Fe-2]=arguments[Fe];return f.prototype[L].apply(w,J)}}function X(l){const f=l.length;if(0<f){const g=Array(f);for(let w=0;w<f;w++)g[w]=l[w];return g}return[]}function W(l,f){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(y(w)){const L=l.length||0,j=w.length||0;l.length=L+j;for(let J=0;J<j;J++)l[L+J]=w[J]}else l.push(w)}}class we{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ve(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Te(l){return Te[" "](l),l}Te[" "]=function(){};var qe=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Ae(l,f,g){for(const w in l)f.call(g,l[w],w,l)}function x(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let g,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(g in w)l[g]=w[g];for(let j=0;j<A.length;j++)g=A[j],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function D(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,g){const w=Ct.get();w.set(f,g),this.h?this.h.next=w:this.g=w,this.h=w}}var Ct=new we(()=>new Pt,l=>l.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Z=!1,le=new et,te=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){O(g)}var f=Ct;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Ie(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(qe){e:{try{Te(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:xe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}H(Ie,ae);var xe={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function ze(l,f,g,w,L){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!w,this.ha=L,this.key=++Me,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function nr(l){this.src=l,this.g={},this.h=0}nr.prototype.add=function(l,f,g,w,L){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var J=Pr(l,f,w,L);return-1<J?(f=l[J],g||(f.fa=!1)):(f=new ze(f,this.src,j,!!w,L),f.fa=g,l.push(f)),f};function ss(l,f){var g=f.type;if(g in l.g){var w=l.g[g],L=Array.prototype.indexOf.call(w,f,void 0),j;(j=0<=L)&&Array.prototype.splice.call(w,L,1),j&&(mt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Pr(l,f,g,w){for(var L=0;L<l.length;++L){var j=l[L];if(!j.da&&j.listener==f&&j.capture==!!g&&j.ha==w)return L}return-1}var vi="closure_lm_"+(1e6*Math.random()|0),os={};function To(l,f,g,w,L){if(Array.isArray(f)){for(var j=0;j<f.length;j++)To(l,f[j],g,w,L);return null}return g=Ao(g),l&&l[Le]?l.K(f,g,v(w)?!!w.capture:!1,L):Io(l,f,g,!1,w,L)}function Io(l,f,g,w,L,j){if(!f)throw Error("Invalid event type");var J=v(L)?!!L.capture:!!L,Fe=ls(l);if(Fe||(l[vi]=Fe=new nr(l)),g=Fe.add(f,g,w,J,j),g.proxy)return g;if(w=Ha(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)Ee||(L=J),L===void 0&&(L=!1),l.addEventListener(f.toString(),w,L);else if(l.attachEvent)l.attachEvent(ir(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ha(){function l(g){return f.call(l.src,l.listener,g)}const f=So;return l}function as(l,f,g,w,L){if(Array.isArray(f))for(var j=0;j<f.length;j++)as(l,f[j],g,w,L);else w=v(w)?!!w.capture:!!w,g=Ao(g),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],g=Pr(j,g,w,L),-1<g&&(mt(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=ls(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Pr(f,g,w,L)),(g=-1<l?f[l]:null)&&rr(g))}function rr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])ss(f.i,l);else{var g=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(g,w,l.capture):f.detachEvent?f.detachEvent(ir(g),w):f.addListener&&f.removeListener&&f.removeListener(w),(g=ls(f))?(ss(g,l),g.h==0&&(g.src=null,f[vi]=null)):mt(l)}}}function ir(l){return l in os?os[l]:os[l]="on"+l}function So(l,f){if(l.da)l=!0;else{f=new Ie(f,this);var g=l.listener,w=l.ha||l.src;l.fa&&rr(l),l=g.call(w,f)}return l}function ls(l){return l=l[vi],l instanceof nr?l:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ao(l){return typeof l=="function"?l:(l[us]||(l[us]=function(f){return l.handleEvent(f)}),l[us])}function at(){$.call(this),this.i=new nr(this),this.M=this,this.F=null}H(at,$),at.prototype[Le]=!0,at.prototype.removeEventListener=function(l,f,g,w){as(this,l,f,g,w)};function lt(l,f){var g,w=l.F;if(w)for(g=[];w;w=w.F)g.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var L=f;f=new ae(w,l),C(f,L)}if(L=!0,g)for(var j=g.length-1;0<=j;j--){var J=f.g=g[j];L=sr(J,w,!0,f)&&L}if(J=f.g=l,L=sr(J,w,!0,f)&&L,L=sr(J,w,!1,f)&&L,g)for(j=0;j<g.length;j++)J=f.g=g[j],L=sr(J,w,!1,f)&&L}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],w=0;w<g.length;w++)mt(g[w]);delete l.g[f],l.h--}}this.F=null},at.prototype.K=function(l,f,g,w){return this.i.add(String(l),f,!1,g,w)},at.prototype.L=function(l,f,g,w){return this.i.add(String(l),f,!0,g,w)};function sr(l,f,g,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,j=0;j<f.length;++j){var J=f[j];if(J&&!J.da&&J.capture==g){var Fe=J.listener,ut=J.ha||J.src;J.fa&&ss(l.i,J),L=Fe.call(ut,w)!==!1&&L}}return L&&!w.defaultPrevented}function Ro(l,f,g){if(typeof l=="function")g&&(l=N(l,g));else if(l&&typeof l.handleEvent=="function")l=N(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function xr(l){l.g=Ro(()=>{l.g=null,l.i&&(l.i=!1,xr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class wi extends ${constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:xr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(l){$.call(this),this.h=l,this.g={}}H(Ei,$);var ko=[];function Co(l){Ae(l.g,function(f,g){this.g.hasOwnProperty(g)&&rr(f)},l),l.g={}}Ei.prototype.N=function(){Ei.aa.N.call(this),Co(this)},Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Po=m.JSON.stringify,xo=m.JSON.parse,No=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ti(){}Ti.prototype.h=null;function cs(l){return l.h||(l.h=l.i())}function hs(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bn(){ae.call(this,"d")}H(bn,ae);function ds(){ae.call(this,"c")}H(ds,ae);var Fn={},Do=null;function Ii(){return Do=Do||new at}Fn.La="serverreachability";function Vo(l){ae.call(this,Fn.La,l)}H(Vo,ae);function or(l){const f=Ii();lt(f,new Vo(f))}Fn.STAT_EVENT="statevent";function Oo(l,f){ae.call(this,Fn.STAT_EVENT,l),this.stat=f}H(Oo,ae);function tt(l){const f=Ii();lt(f,new Oo(f,l))}Fn.Ma="timingevent";function fs(l,f){ae.call(this,Fn.Ma,l),this.size=f}H(fs,ae);function wn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Si(){this.g=!0}Si.prototype.xa=function(){this.g=!1};function Ai(l,f,g,w,L,j){l.info(function(){if(l.g)if(j)for(var J="",Fe=j.split("&"),ut=0;ut<Fe.length;ut++){var Ne=Fe[ut].split("=");if(1<Ne.length){var gt=Ne[0];Ne=Ne[1];var it=gt.split("_");J=2<=it.length&&it[1]=="type"?J+(gt+"="+Ne+"&"):J+(gt+"=redacted&")}}else J=null;else J=j;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+f+`
`+g+`
`+J})}function ps(l,f,g,w,L,j,J){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+f+`
`+g+`
`+j+" "+J})}function En(l,f,g,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+lc(l,g)+(w?" "+w:"")})}function Lo(l,f){l.info(function(){return"TIMEOUT: "+f})}Si.prototype.info=function(){};function lc(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var w=g[l];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return Po(g)}catch{return f}}var ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tn;function Ri(){}H(Ri,Ti),Ri.prototype.g=function(){return new XMLHttpRequest},Ri.prototype.i=function(){return{}},Tn=new Ri;function In(l,f,g,w){this.j=l,this.i=f,this.l=g,this.R=w||1,this.U=new Ei(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qa}function qa(){this.i=null,this.g="",this.h=!1}var Mo={},gs={};function ys(l,f,g){l.L=1,l.v=Lr(en(f)),l.m=g,l.P=!0,bo(l,null)}function bo(l,f){l.F=Date.now(),Be(l),l.A=en(l.v);var g=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),br(g.i,"t",w),l.C=0,g=l.j.J,l.h=new qa,l.g=cl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new wi(N(l.Y,l,l.g),l.O)),f=l.U,g=l.g,w=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(ko[0]=L.toString()),L=ko);for(var j=0;j<L.length;j++){var J=To(g,L[j],w||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),or(),Ai(l.i,l.u,l.A,l.l,l.R,l.m)}In.prototype.ca=function(l){l=l.target;const f=this.M;f&&Ht(l)==3?f.j():this.Y(l)},In.prototype.Y=function(l){try{if(l==this.g)e:{const it=Ht(this.g);var f=this.g.Ba();const fn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||$o(this.g)))){this.J||it!=4||f==7||(f==8||0>=fn?or(3):or(2)),ki(this);var g=this.g.Z();this.X=g;t:if(Ka(this)){var w=$o(this.g);l="";var L=w.length,j=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Nr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(j&&f==L-1)});w.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=g==200,ps(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ut=this.g;if((Fe=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ve(Fe)){var Ne=Fe;break t}}Ne=null}if(g=Ne)En(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fo(this,g);else{this.o=!1,this.s=3,tt(12),hn(this),Nr(this);break e}}if(this.P){g=!0;let nn;for(;!this.J&&this.C<J.length;)if(nn=uc(this,J),nn==gs){it==4&&(this.s=4,tt(14),g=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Mo){this.s=4,tt(15),En(this.i,this.l,J,"[Invalid Chunk]"),g=!1;break}else En(this.i,this.l,nn,null),Fo(this,nn);if(Ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||J.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)En(this.i,this.l,J,"[Invalid Chunked Response]"),hn(this),Nr(this);else if(0<J.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Wo(gt),gt.M=!0,tt(11))}}else En(this.i,this.l,J,null),Fo(this,J);it==4&&hn(this),this.o&&!this.J&&(it==4?Cs(this.j,this):(this.o=!1,Be(this)))}else Is(this.g),g==400&&0<J.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),hn(this),Nr(this)}}}catch{}finally{}};function Ka(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function uc(l,f){var g=l.C,w=f.indexOf(`
`,g);return w==-1?gs:(g=Number(f.substring(g,w)),isNaN(g)?Mo:(w+=1,w+g>f.length?gs:(f=f.slice(w,w+g),l.C=w+g,f)))}In.prototype.cancel=function(){this.J=!0,hn(this)};function Be(l){l.S=Date.now()+l.I,Ga(l,l.I)}function Ga(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wn(N(l.ba,l),f)}function ki(l){l.B&&(m.clearTimeout(l.B),l.B=null)}In.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Lo(this.i,this.A),this.L!=2&&(or(),tt(17)),hn(this),this.s=2,Nr(this)):Ga(this,this.S-l)};function Nr(l){l.j.G==0||l.J||Cs(l.j,l)}function hn(l){ki(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Co(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Fo(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Ut(g.h,l))){if(!l.K&&Ut(g.h,l)&&g.G==3){try{var w=g.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)ks(g),Cn(g);else break e;Rs(g),tt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=wn(N(g.Za,g),6e3));if(1>=Xa(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else hr(g,11)}else if((l.K||g.g==l)&&ks(g),!ve(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let Ne=L[f];if(g.T=Ne[0],Ne=Ne[1],g.G==2)if(Ne[0]=="c"){g.K=Ne[1],g.ia=Ne[2];const gt=Ne[3];gt!=null&&(g.la=gt,g.j.info("VER="+g.la));const it=Ne[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const fn=Ne[5];fn!=null&&typeof fn=="number"&&0<fn&&(w=1.5*fn,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const nn=l.g;if(nn){const Oi=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oi){var j=w.h;j.g||Oi.indexOf("spdy")==-1&&Oi.indexOf("quic")==-1&&Oi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Uo(j,j.h),j.h=null))}if(w.D){const xs=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;xs&&(w.ya=xs,je(w.I,w.D,xs))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var J=l;if(w.qa=ul(w,w.J?w.ia:null,w.W),J.K){Ya(w.h,J);var Fe=J,ut=w.L;ut&&(Fe.I=ut),Fe.B&&(ki(Fe),Be(Fe)),w.g=J}else Vi(w);0<g.i.length&&Bn(g)}else Ne[0]!="stop"&&Ne[0]!="close"||hr(g,7);else g.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?hr(g,7):Tt(g):Ne[0]!="noop"&&g.l&&g.l.ta(Ne),g.v=0)}}or(4)}catch{}}var Qa=class{constructor(l,f){this.g=l,this.map=f}};function Ci(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Xa(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Uo(l,f){l.g?l.g.add(f):l.h=f}function Ya(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ci.prototype.cancel=function(){if(this.i=Ja(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ja(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return X(l.i)}function _s(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,w=0;w<g;w++)f.push(l[w]);return f}f=[],g=0;for(w in l)f[g++]=l[w];return f}function vs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const w in l)f[g++]=w;return f}}}function Dr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=vs(l),w=_s(l),L=w.length,j=0;j<L;j++)f.call(void 0,w[j],g&&g[j],l)}var Pi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cc(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var w=l[g].indexOf("="),L=null;if(0<=w){var j=l[g].substring(0,w);L=l[g].substring(w+1)}else j=l[g];f(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ar(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ar){this.h=l.h,xi(this,l.j),this.o=l.o,this.g=l.g,Vr(this,l.s),this.l=l.l;var f=l.i,g=new Un;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Or(this,g),this.m=l.m}else l&&(f=String(l).match(Pi))?(this.h=!1,xi(this,f[1]||"",!0),this.o=Ce(f[2]||""),this.g=Ce(f[3]||"",!0),Vr(this,f[4]),this.l=Ce(f[5]||"",!0),Or(this,f[6]||"",!0),this.m=Ce(f[7]||"")):(this.h=!1,this.i=new Un(null,this.h))}ar.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Mr(f,ws,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Mr(f,ws,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Mr(g,g.charAt(0)=="/"?tl:el,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Mr(g,jo)),l.join("")};function en(l){return new ar(l)}function xi(l,f,g){l.j=g?Ce(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Vr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Or(l,f,g){f instanceof Un?(l.i=f,jn(l.i,l.h)):(g||(f=Mr(f,nl)),l.i=new Un(f,l.h))}function je(l,f,g){l.i.set(f,g)}function Lr(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ce(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Za),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Za(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ws=/[#\/\?@]/g,el=/[#\?:]/g,tl=/[#\?]/g,nl=/[#\?@]/g,jo=/#/g;function Un(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Et(l){l.g||(l.g=new Map,l.h=0,l.i&&cc(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Un.prototype,i.add=function(l,f){Et(this),this.i=null,l=dn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Sn(l,f){Et(l),f=dn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function An(l,f){return Et(l),f=dn(l,f),l.g.has(f)}i.forEach=function(l,f){Et(this),this.g.forEach(function(g,w){g.forEach(function(L){l.call(f,L,w,this)},this)},this)},i.na=function(){Et(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let w=0;w<f.length;w++){const L=l[w];for(let j=0;j<L.length;j++)g.push(f[w])}return g},i.V=function(l){Et(this);let f=[];if(typeof l=="string")An(this,l)&&(f=f.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return Et(this),this.i=null,l=dn(this,l),An(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function br(l,f,g){Sn(l,f),0<g.length&&(l.i=null,l.g.set(dn(l,f),X(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var w=f[g];const j=encodeURIComponent(String(w)),J=this.V(w);for(w=0;w<J.length;w++){var L=j;J[w]!==""&&(L+="="+encodeURIComponent(String(J[w]))),l.push(L)}}return this.i=l.join("&")};function dn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function jn(l,f){f&&!l.j&&(Et(l),l.i=null,l.g.forEach(function(g,w){var L=w.toLowerCase();w!=L&&(Sn(this,w),br(this,L,g))},l)),l.j=f}function hc(l,f){const g=new Si;if(m.Image){const w=new Image;w.onload=z($t,g,"TestLoadImage: loaded",!0,f,w),w.onerror=z($t,g,"TestLoadImage: error",!1,f,w),w.onabort=z($t,g,"TestLoadImage: abort",!1,f,w),w.ontimeout=z($t,g,"TestLoadImage: timeout",!1,f,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function rl(l,f){const g=new Si,w=new AbortController,L=setTimeout(()=>{w.abort(),$t(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(L),j.ok?$t(g,"TestPingServer: ok",!0,f):$t(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),$t(g,"TestPingServer: error",!1,f)})}function $t(l,f,g,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(g)}catch{}}function dc(){this.g=new No}function il(l,f,g){const w=g||"";try{Dr(l,function(L,j){let J=L;v(L)&&(J=Po(L)),f.push(w+j+"="+encodeURIComponent(J))})}catch(L){throw f.push(w+"type="+encodeURIComponent("_badmap")),L}}function lr(l){this.l=l.Ub||null,this.j=l.eb||!1}H(lr,Ti),lr.prototype.g=function(){return new Ni(this.l,this.j)},lr.prototype.i=function(l){return function(){return l}}({});function Ni(l,f){at.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(Ni,at),i=Ni.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,kn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function sl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Rn(this):kn(this),this.readyState==3&&sl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Rn(this))},i.Qa=function(l){this.g&&(this.response=l,Rn(this))},i.ga=function(){this.g&&Rn(this)};function Rn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,kn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function kn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ur(l){let f="";return Ae(l,function(g,w){f+=w,f+=":",f+=g,f+=`\r
`}),f}function Fr(l,f,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=ur(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):je(l,f,g))}function Ke(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(Ke,at);var fc=/^https?$/i,zo=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tn.g(),this.v=this.o?cs(this.o):cs(Tn),this.g.onreadystatechange=N(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){Di(this,j);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)g.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())g.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(zo,f,void 0))||w||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,J]of g)this.g.setRequestHeader(j,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ts(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Di(this,j)}};function Di(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Es(l),tn(l)}function Es(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),tn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Bo(this):this.bb())},i.bb=function(){Bo(this)};function Bo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Ht(l)!=4||l.Z()!=2)){if(l.u&&Ht(l)==4)Ro(l.Ea,0,l);else if(lt(l,"readystatechange"),Ht(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var w;if(w=J===0){var L=String(l.D).match(Pi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),w=!fc.test(L?L.toLowerCase():"")}g=w}if(g)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var j=2<Ht(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",Es(l)}}finally{tn(l)}}}}function tn(l,f){if(l.g){Ts(l);const g=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||lt(l,"ready");try{g.onreadystatechange=w}catch{}}}function Ts(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Ht(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),xo(f)}};function $o(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Is(l){const f={};l=(l.g&&2<=Ht(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(ve(l[w]))continue;var g=D(l[w]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=f[L]||[];f[L]=j,j.push(g)}x(f,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Ho(l){this.Aa=0,this.i=[],this.j=new Si,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,l),this.cb=zn("retryDelaySeedMs",1e4,l),this.Wa=zn("forwardChannelMaxRetries",2,l),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(l&&l.concurrentRequestLimit),this.Da=new dc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ho.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,w){tt(0),this.W=l,this.H=f||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=ul(this,null,this.W),Bn(this)};function Tt(l){if(Ss(l),l.G==3){var f=l.U++,g=en(l.I);if(je(g,"SID",l.K),je(g,"RID",f),je(g,"TYPE","terminate"),cr(l,g),f=new In(l,l.j,f),f.L=2,f.v=Lr(en(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=cl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Be(f)}ll(l)}function Cn(l){l.g&&(Wo(l),l.g.cancel(),l.g=null)}function Ss(l){Cn(l),l.u&&(m.clearTimeout(l.u),l.u=null),ks(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Bn(l){if(!Zt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||te(),Z||(Ue(),Z=!0),le.add(f,l),l.B=0}}function pc(l,f){return Xa(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wn(N(l.Ga,l,f),al(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new In(this,this.j,l);let j=this.o;if(this.S&&(j?(j=I(j),C(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Ur(this,L,f),g=en(this.I),je(g,"RID",l),je(g,"CVER",22),this.D&&je(g,"X-HTTP-Session-Id",this.D),cr(this,g),j&&(this.O?f="headers="+encodeURIComponent(String(ur(j)))+"&"+f:this.m&&Fr(g,this.m,j)),Uo(this.h,L),this.Ua&&je(g,"TYPE","init"),this.P?(je(g,"$req",f),je(g,"SID","null"),L.T=!0,ys(L,g,null)):ys(L,g,f),this.G=2}}else this.G==3&&(l?As(this,l):this.i.length==0||Zt(this.h)||As(this))};function As(l,f){var g;f?g=f.l:g=l.U++;const w=en(l.I);je(w,"SID",l.K),je(w,"RID",g),je(w,"AID",l.T),cr(l,w),l.m&&l.o&&Fr(w,l.m,l.o),g=new In(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Ur(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Uo(l.h,g),ys(g,w,f)}function cr(l,f){l.H&&Ae(l.H,function(g,w){je(f,w,g)}),l.l&&Dr({},function(g,w){je(f,w,g)})}function Ur(l,f,g){g=Math.min(l.i.length,g);var w=l.l?N(l.l.Na,l.l,l):null;e:{var L=l.i;let j=-1;for(;;){const J=["count="+g];j==-1?0<g?(j=L[0].g,J.push("ofs="+j)):j=0:J.push("ofs="+j);let Fe=!0;for(let ut=0;ut<g;ut++){let Ne=L[ut].g;const gt=L[ut].map;if(Ne-=j,0>Ne)j=Math.max(0,L[ut].g-100),Fe=!1;else try{il(gt,J,"req"+Ne+"_")}catch{w&&w(gt)}}if(Fe){w=J.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,w}function Vi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||te(),Z||(Ue(),Z=!0),le.add(f,l),l.v=0}}function Rs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wn(N(l.Fa,l),al(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,ol(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wn(N(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Cn(this),ol(this))};function Wo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function ol(l){l.g=new In(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=en(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),cr(l,f),l.m&&l.o&&Fr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Lr(en(f)),g.m=null,g.P=!0,bo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,Cn(this),Rs(this),tt(19))};function ks(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Cs(l,f){var g=null;if(l.g==f){ks(l),Wo(l),l.g=null;var w=2}else if(Ut(l.h,f))g=f.D,Ya(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;w=Ii(),lt(w,new fs(w,g)),Bn(l)}else Vi(l);else if(L=f.s,L==3||L==0&&0<f.X||!(w==1&&pc(l,f)||w==2&&Rs(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),L){case 1:hr(l,5);break;case 4:hr(l,10);break;case 3:hr(l,6);break;default:hr(l,2)}}}function al(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function hr(l,f){if(l.j.info("Error code "+f),f==2){var g=N(l.fb,l),w=l.Xa;const L=!w;w=new ar(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||xi(w,"https"),Lr(w),L?hc(w.toString(),g):rl(w.toString(),g)}else tt(2);l.G=0,l.l&&l.l.sa(f),ll(l),Ss(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function ll(l){if(l.G=0,l.ka=[],l.l){const f=Ja(l.h);(f.length!=0||l.i.length!=0)&&(W(l.ka,f),W(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function ul(l,f,g){var w=g instanceof ar?en(g):new ar(g);if(w.g!="")f&&(w.g=f+"."+w.g),Vr(w,w.s);else{var L=m.location;w=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var j=new ar(null);w&&xi(j,w),f&&(j.g=f),L&&Vr(j,L),g&&(j.l=g),w=j}return g=l.D,f=l.ya,g&&f&&je(w,g,f),je(w,"VER",l.la),cr(l,w),w}function cl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new lr({eb:g})):new Ke(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function qo(){}i=qo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ps(){}Ps.prototype.g=function(l,f){return new jt(l,f)};function jt(l,f){at.call(this),this.g=new Ho(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ve(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ve(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new $n(this)}H(jt,at),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Tt(this.g)},jt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Po(l),l=g);f.i.push(new Qa(f.Ya++,l)),f.G==3&&Bn(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,jt.aa.N.call(this)};function hl(l){bn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}H(hl,bn);function dl(){ds.call(this),this.status=1}H(dl,ds);function $n(l){this.g=l}H($n,qo),$n.prototype.ua=function(){lt(this.g,"a")},$n.prototype.ta=function(l){lt(this.g,new hl(l))},$n.prototype.sa=function(l){lt(this.g,new dl)},$n.prototype.ra=function(){lt(this.g,"b")},Ps.prototype.createWebChannel=Ps.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,Jy=function(){return new Ps},Yy=function(){return Ii()},Xy=Fn,id={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,gu=ms,Wa.COMPLETE="complete",Qy=Wa,hs.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",at.prototype.listen=at.prototype.K,ya=hs,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Gy=Ke}).apply(typeof au<"u"?au:typeof self<"u"?self:typeof window<"u"?window:{});const ag="@firebase/firestore",lg="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Id("@firebase/firestore");function Ys(){return es.logLevel}function ne(i,...e){if(es.logLevel<=Re.DEBUG){const t=e.map(bd);es.debug(`Firestore (${_o}): ${i}`,...t)}}function Rr(i,...e){if(es.logLevel<=Re.ERROR){const t=e.map(bd);es.error(`Firestore (${_o}): ${i}`,...t)}}function ao(i,...e){if(es.logLevel<=Re.WARN){const t=e.map(bd);es.warn(`Firestore (${_o}): ${i}`,...t)}}function bd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(i="Unexpected state"){const e=`FIRESTORE (${_o}) INTERNAL ASSERTION FAILED: `+i;throw Rr(e),new Error(e)}function be(i,e){i||me()}function _e(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Cr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Lt.UNAUTHENTICATED))}shutdown(){}}class wI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class EI{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ci,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ci)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new Zy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Lt(e)}}class TI{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class II{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new TI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ug{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SI{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ln(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){be(this.o===void 0);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ug(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new ug(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=AI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Pe(i,e){return i<e?-1:i>e?1:0}function lo(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=-62135596800,hg=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*hg);return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cg)throw new he(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hg}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-cg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new ft(0,0))}static max(){return new ge(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="__name__";class Gn{constructor(e,t,s){t===void 0?t=0:t>e.length&&me(),s===void 0?s=e.length-t:s>e.length-t&&me(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Gn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Gn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Gn.isNumericId(e),o=Gn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Gn.extractNumericId(e).compare(Gn.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ui.fromString(e.substring(4,e.length-2))}}class Ze extends Gn{construct(e,t,s){return new Ze(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ze(t)}static emptyPath(){return new Ze([])}}const RI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Gn{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return RI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dg}static keyField(){return new Rt([dg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new he(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new he(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new he(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ze.fromString(e))}static fromName(e){return new de(Ze.fromString(e).popFirst(5))}static empty(){return new de(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ze(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=-1;function kI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ge.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new hi(o,de.empty(),e)}function CI(i){return new hi(i.readTime,i.key,ka)}class hi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new hi(ge.min(),de.empty(),ka)}static max(){return new hi(ge.max(),de.empty(),ka)}}function PI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Pe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(i){if(i.code!==Q.FAILED_PRECONDITION||i.message!==xI)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,s)=>{t(e)})}static reject(e){return new B((t,s)=>{s(e)})}static waitFor(e){return new B((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},y=>s(y))}),h=!0,u===o&&t()})}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next(o=>o?B.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new B((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next(E=>{h[v]=E,++m,m===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new B((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function DI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}qu.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=-1;function Ku(i){return i==null}function Cu(i){return i===0&&1/i==-1/0}function VI(i){return typeof i=="number"&&Number.isInteger(i)&&!Cu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="";function OI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=fg(e)),e=LI(i.get(t),e);return fg(e)}function LI(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case t_:t+="";break;default:t+=u}}return t}function fg(i){return i+t_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function yi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function n_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lu(this.root,e,this.comparator,!1)}getReverseIterator(){return new lu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lu(this.root,e,this.comparator,!0)}}class lu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=o??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new At(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return At.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,t,s,o,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mg(this.data.getIterator())}getIteratorFrom(e){return new mg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class mg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new an([])}unionWith(e){let t=new pt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new an(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new r_("Invalid base64 string: "+u):u}}(e);return new kt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const MI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function di(i){if(be(!!i),typeof i=="string"){let e=0;const t=MI.exec(i);if(be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function fi(i){return typeof i=="string"?kt.fromBase64String(i):kt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="server_timestamp",s_="__type__",o_="__previous_value__",a_="__local_write_time__";function Ud(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[s_])===null||t===void 0?void 0:t.stringValue)===i_}function Gu(i){const e=i.mapValue.fields[o_];return Ud(e)?Gu(e):e}function Ca(i){const e=di(i.mapValue.fields[a_].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t,s,o,u,h,m,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v}}const Pu="(default)";class Pa{constructor(e,t){this.projectId=e,this.database=t||Pu}static empty(){return new Pa("","")}get isDefaultDatabase(){return this.database===Pu}isEqual(e){return e instanceof Pa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="__type__",FI="__max__",uu={mapValue:{}},u_="__vector__",xu="value";function pi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ud(i)?4:jI(i)?9007199254740991:UI(i)?10:11:me()}function er(i,e){if(i===e)return!0;const t=pi(i);if(t!==pi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ca(i).isEqual(Ca(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=di(o.timestampValue),m=di(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return fi(o.bytesValue).isEqual(fi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Cu(h)===Cu(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return lo(i.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(pg(h)!==pg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!er(h[y],m[y])))return!1;return!0}(i,e);default:return me()}}function xa(i,e){return(i.values||[]).find(t=>er(t,e))!==void 0}function uo(i,e){if(i===e)return 0;const t=pi(i),s=pi(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),y=rt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return gg(i.timestampValue,e.timestampValue);case 4:return gg(Ca(i),Ca(e));case 5:return Pe(i.stringValue,e.stringValue);case 6:return function(u,h){const m=fi(u),y=fi(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const E=Pe(m[v],y[v]);if(E!==0)return E}return Pe(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Pe(rt(u.latitude),rt(h.latitude));return m!==0?m:Pe(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return yg(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,v,E;const k=u.fields||{},N=h.fields||{},z=(m=k[xu])===null||m===void 0?void 0:m.arrayValue,H=(y=N[xu])===null||y===void 0?void 0:y.arrayValue,X=Pe(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((E=H==null?void 0:H.values)===null||E===void 0?void 0:E.length)||0);return X!==0?X:yg(z,H)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===uu.mapValue&&h===uu.mapValue)return 0;if(u===uu.mapValue)return 1;if(h===uu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},E=Object.keys(v);y.sort(),E.sort();for(let k=0;k<y.length&&k<E.length;++k){const N=Pe(y[k],E[k]);if(N!==0)return N;const z=uo(m[y[k]],v[E[k]]);if(z!==0)return z}return Pe(y.length,E.length)}(i.mapValue,e.mapValue);default:throw me()}}function gg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Pe(i,e);const t=di(i),s=di(e),o=Pe(t.seconds,s.seconds);return o!==0?o:Pe(t.nanos,s.nanos)}function yg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=uo(t[o],s[o]);if(u)return u}return Pe(t.length,s.length)}function co(i){return sd(i)}function sd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=di(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return fi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return de.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=sd(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${sd(t.fields[h])}`;return o+"}"}(i.mapValue):me()}function yu(i){switch(pi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gu(i);return e?16+yu(e):16;case 5:return 2*i.stringValue.length;case 6:return fi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+yu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return yi(s.fields,(u,h)=>{o+=u.length+yu(h)}),o}(i.mapValue);default:throw me()}}function od(i){return!!i&&"integerValue"in i}function jd(i){return!!i&&"arrayValue"in i}function _g(i){return!!i&&"nullValue"in i}function vg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function _u(i){return!!i&&"mapValue"in i}function UI(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[l_])===null||t===void 0?void 0:t.stringValue)===u_}function Ea(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return yi(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ea(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ea(i.arrayValue.values[t]);return e}return Object.assign({},i)}function jI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===FI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!_u(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ea(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ea(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());_u(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];_u(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){yi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Jt(Ea(this.value))}}function c_(i){const e=[];return yi(i.fields,(t,s)=>{const o=new Rt([t]);if(_u(s)){const u=c_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new bt(e,0,ge.min(),ge.min(),ge.min(),Jt.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,ge.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,ge.min(),ge.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,ge.min(),ge.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t){this.position=e,this.inclusive=t}}function wg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=uo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Eg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!er(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t="asc"){this.field=e,this.dir=t}}function zI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{}class dt extends h_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new $I(e,t,s):t==="array-contains"?new qI(e,s):t==="in"?new KI(e,s):t==="not-in"?new GI(e,s):t==="array-contains-any"?new QI(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new HI(e,s):new WI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(uo(t,this.value)):t!==null&&pi(this.value)===pi(t)&&this.matchesComparison(uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tr extends h_{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tr(e,t)}matches(e){return d_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function d_(i){return i.op==="and"}function f_(i){return BI(i)&&d_(i)}function BI(i){for(const e of i.filters)if(e instanceof tr)return!1;return!0}function ad(i){if(i instanceof dt)return i.field.canonicalString()+i.op.toString()+co(i.value);if(f_(i))return i.filters.map(e=>ad(e)).join(",");{const e=i.filters.map(t=>ad(t)).join(",");return`${i.op}(${e})`}}function p_(i,e){return i instanceof dt?function(s,o){return o instanceof dt&&s.op===o.op&&s.field.isEqual(o.field)&&er(s.value,o.value)}(i,e):i instanceof tr?function(s,o){return o instanceof tr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&p_(h,o.filters[m]),!0):!1}(i,e):void me()}function m_(i){return i instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${co(t.value)}`}(i):i instanceof tr?function(t){return t.op.toString()+" {"+t.getFilters().map(m_).join(" ,")+"}"}(i):"Filter"}class $I extends dt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class HI extends dt{constructor(e,t){super(e,"in",t),this.keys=g_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class WI extends dt{constructor(e,t){super(e,"not-in",t),this.keys=g_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function g_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>de.fromName(s.referenceValue))}class qI extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jd(t)&&xa(t.arrayValue,this.value)}}class KI extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xa(this.value.arrayValue,t)}}class GI extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!xa(this.value.arrayValue,t)}}class QI extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>xa(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.le=null}}function Tg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new XI(i,e,t,s,o,u,h)}function zd(i){const e=_e(i);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ad(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Ku(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>co(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>co(s)).join(",")),e.le=t}return e.le}function Bd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!zI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!p_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Eg(i.startAt,e.startAt)&&Eg(i.endAt,e.endAt)}function ld(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function YI(i,e,t,s,o,u,h,m){return new Qu(i,e,t,s,o,u,h,m)}function $d(i){return new Qu(i)}function Ig(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function JI(i){return i.collectionGroup!==null}function Ta(i){const e=_e(i);if(e.he===null){e.he=[];const t=new Set;for(const u of e.explicitOrderBy)e.he.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new pt(Rt.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.he.push(new Du(u,s))}),t.has(Rt.keyField().canonicalString())||e.he.push(new Du(Rt.keyField(),s))}return e.he}function Xn(i){const e=_e(i);return e.Pe||(e.Pe=ZI(e,Ta(i))),e.Pe}function ZI(i,e){if(i.limitType==="F")return Tg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Du(o.field,u)});const t=i.endAt?new Nu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Nu(i.startAt.position,i.startAt.inclusive):null;return Tg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function ud(i,e,t){return new Qu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Xu(i,e){return Bd(Xn(i),Xn(e))&&i.limitType===e.limitType}function y_(i){return`${zd(Xn(i))}|lt:${i.limitType}`}function Js(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>m_(o)).join(", ")}]`),Ku(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>co(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>co(o)).join(",")),`Target(${s})`}(Xn(i))}; limitType=${i.limitType})`}function Yu(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Ta(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,y){const v=wg(h,m,y);return h.inclusive?v<=0:v<0}(s.startAt,Ta(s),o)||s.endAt&&!function(h,m,y){const v=wg(h,m,y);return h.inclusive?v>=0:v>0}(s.endAt,Ta(s),o))}(i,e)}function eS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function __(i){return(e,t)=>{let s=!1;for(const o of Ta(i)){const u=tS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function tS(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?uo(y,v):me()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){yi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return n_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=new Ye(de.comparator);function kr(){return nS}const v_=new Ye(de.comparator);function _a(...i){let e=v_;for(const t of i)e=e.insert(t.key,t);return e}function w_(i){let e=v_;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Qi(){return Ia()}function E_(){return Ia()}function Ia(){return new rs(i=>i.toString(),(i,e)=>i.isEqual(e))}const rS=new Ye(de.comparator),iS=new pt(de.comparator);function ke(...i){let e=iS;for(const t of i)e=e.add(t);return e}const sS=new pt(Pe);function oS(){return sS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function T_(i){return{integerValue:""+i}}function aS(i,e){return VI(e)?T_(e):Hd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this._=void 0}}function lS(i,e,t){return i instanceof Vu?function(o,u){const h={fields:{[s_]:{stringValue:i_},[a_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ud(u)&&(u=Gu(u)),u&&(h.fields[o_]=u),{mapValue:h}}(t,e):i instanceof Na?S_(i,e):i instanceof Da?A_(i,e):function(o,u){const h=I_(o,u),m=Sg(h)+Sg(o.Ie);return od(h)&&od(o.Ie)?T_(m):Hd(o.serializer,m)}(i,e)}function uS(i,e,t){return i instanceof Na?S_(i,e):i instanceof Da?A_(i,e):t}function I_(i,e){return i instanceof Ou?function(s){return od(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Vu extends Ju{}class Na extends Ju{constructor(e){super(),this.elements=e}}function S_(i,e){const t=R_(e);for(const s of i.elements)t.some(o=>er(o,s))||t.push(s);return{arrayValue:{values:t}}}class Da extends Ju{constructor(e){super(),this.elements=e}}function A_(i,e){let t=R_(e);for(const s of i.elements)t=t.filter(o=>!er(o,s));return{arrayValue:{values:t}}}class Ou extends Ju{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Sg(i){return rt(i.integerValue||i.doubleValue)}function R_(i){return jd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function cS(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Na&&o instanceof Na||s instanceof Da&&o instanceof Da?lo(s.elements,o.elements,er):s instanceof Ou&&o instanceof Ou?er(s.Ie,o.Ie):s instanceof Vu&&o instanceof Vu}(i.transform,e.transform)}class hS{constructor(e,t){this.version=e,this.transformResults=t}}class Yn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Zu{}function k_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new P_(i.key,Yn.none()):new Ua(i.key,i.data,Yn.none());{const t=i.data,s=Jt.empty();let o=new pt(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new _i(i.key,s,new an(o.toArray()),Yn.none())}}function dS(i,e,t){i instanceof Ua?function(o,u,h){const m=o.value.clone(),y=Rg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof _i?function(o,u,h){if(!vu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Rg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(C_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Sa(i,e,t,s){return i instanceof Ua?function(u,h,m,y){if(!vu(u.precondition,h))return m;const v=u.value.clone(),E=kg(u.fieldTransforms,y,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof _i?function(u,h,m,y){if(!vu(u.precondition,h))return m;const v=kg(u.fieldTransforms,y,h),E=h.data;return E.setAll(C_(u)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(k=>k.field))}(i,e,t,s):function(u,h,m){return vu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function fS(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=I_(s.transform,o||null);u!=null&&(t===null&&(t=Jt.empty()),t.set(s.field,u))}return t||null}function Ag(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&lo(s,o,(u,h)=>cS(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ua extends Zu{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class _i extends Zu{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function C_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function Rg(i,e,t){const s=new Map;be(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,uS(h,m,t[o]))}return s}function kg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,lS(u,h,e))}return s}class P_ extends Zu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pS extends Zu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&dS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Sa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Sa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=E_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=k_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(ge.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&lo(this.mutations,e.mutations,(t,s)=>Ag(t,s))&&lo(this.baseMutations,e.baseMutations,(t,s)=>Ag(t,s))}}class Wd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length);let o=function(){return rS}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Wd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,De;function _S(i){switch(i){case Q.OK:return me();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return me()}}function x_(i){if(i===void 0)return Rr("GRPC error has no .code"),Q.UNKNOWN;switch(i){case ot.OK:return Q.OK;case ot.CANCELLED:return Q.CANCELLED;case ot.UNKNOWN:return Q.UNKNOWN;case ot.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case ot.INTERNAL:return Q.INTERNAL;case ot.UNAVAILABLE:return Q.UNAVAILABLE;case ot.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case ot.NOT_FOUND:return Q.NOT_FOUND;case ot.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case ot.ABORTED:return Q.ABORTED;case ot.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case ot.DATA_LOSS:return Q.DATA_LOSS;default:return me()}}(De=ot||(ot={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new ui([4294967295,4294967295],0);function Cg(i){const e=vS().encode(i),t=new Ky;return t.update(e),new Uint8Array(t.digest())}function Pg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ui([t,s],0),new ui([o,u],0)]}class qd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new va(`Invalid padding: ${t}`);if(s<0)throw new va(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new va(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new va(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ui.fromNumber(this.Ee)}Ae(e,t,s){let o=e.add(t.multiply(ui.fromNumber(s)));return o.compare(wS)===1&&(o=new ui([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Cg(e),[s,o]=Pg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);if(!this.Re(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new qd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Ee===0)return;const t=Cg(e),[s,o]=Pg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);this.Ve(h)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ja.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ec(ge.min(),o,new Ye(Pe),kr(),ke())}}class ja{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ja(s,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t,s,o){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=o}}class N_{constructor(e,t){this.targetId=e,this.ge=t}}class D_{constructor(e,t,s=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class xg{constructor(){this.pe=0,this.ye=Ng(),this.we=kt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=ke(),t=ke(),s=ke();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:me()}}),new ja(this.we,this.be,e,t,s)}Me(){this.Se=!1,this.ye=Ng()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,be(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class ES{constructor(e){this.ke=e,this.qe=new Map,this.Qe=kr(),this.$e=cu(),this.Ke=cu(),this.Ue=new Ye(Pe)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:me()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,s=e.ge.count,o=this.Xe(t);if(o){const u=o.target;if(ld(u))if(s===0){const h=new de(u.path);this.ze(t,h,bt.newNoDocument(h,ge.min()))}else be(s===1);else{const h=this.et(t);if(h!==s){const m=this.tt(e),y=m?this.nt(m,e,h):1;if(y!==0){this.Ye(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,v)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=fi(s).toUint8Array()}catch(y){if(y instanceof r_)return ao("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new qd(h,o,u)}catch(y){return ao(y instanceof va?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Ee===0?null:m}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ke.it(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.ze(t,u,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((u,h)=>{const m=this.Xe(h);if(m){if(u.current&&ld(m.target)){const y=new de(m.target.path);this._t(y).has(h)||this.ut(h,y)||this.ze(h,y,bt.newNoDocument(y,e))}u.ve&&(t.set(h,u.Fe()),u.Me())}});let s=ke();this.Ke.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const v=this.Xe(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,h)=>h.setReadTime(e));const o=new ec(e,t,this.Ue,this.Qe,s);return this.Qe=kr(),this.$e=cu(),this.Ke=cu(),this.Ue=new Ye(Pe),o}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new xg,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new pt(Pe),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new pt(Pe),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new xg),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function cu(){return new Ye(de.comparator)}function Ng(){return new Ye(de.comparator)}const TS={asc:"ASCENDING",desc:"DESCENDING"},IS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SS={and:"AND",or:"OR"};class AS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cd(i,e){return i.useProto3Json||Ku(e)?e:{value:e}}function Lu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function V_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function RS(i,e){return Lu(i,e.toTimestamp())}function Jn(i){return be(!!i),ge.fromTimestamp(function(t){const s=di(t);return new ft(s.seconds,s.nanos)}(i))}function Kd(i,e){return hd(i,e).canonicalString()}function hd(i,e){const t=function(o){return new Ze(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function O_(i){const e=Ze.fromString(i);return be(U_(e)),e}function dd(i,e){return Kd(i.databaseId,e.path)}function qh(i,e){const t=O_(e);if(t.get(1)!==i.databaseId.projectId)throw new he(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new he(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(M_(t))}function L_(i,e){return Kd(i.databaseId,e)}function kS(i){const e=O_(i);return e.length===4?Ze.emptyPath():M_(e)}function fd(i){return new Ze(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function M_(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Dg(i,e,t){return{name:dd(i,e),fields:t.value.mapValue.fields}}function CS(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,E){return v.useProto3Json?(be(E===void 0||typeof E=="string"),kt.fromBase64String(E||"")):(be(E===void 0||E instanceof Buffer||E instanceof Uint8Array),kt.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const E=v.code===void 0?Q.UNKNOWN:x_(v.code);return new he(E,v.message||"")}(h);t=new D_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=qh(i,s.document.name),u=Jn(s.document.updateTime),h=s.document.createTime?Jn(s.document.createTime):ge.min(),m=new Jt({mapValue:{fields:s.document.fields}}),y=bt.newFoundDocument(o,u,h,m),v=s.targetIds||[],E=s.removedTargetIds||[];t=new wu(v,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=qh(i,s.document),u=s.readTime?Jn(s.readTime):ge.min(),h=bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new wu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=qh(i,s.document),u=s.removedTargetIds||[];t=new wu([],u,o,null)}else{if(!("filter"in e))return me();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new yS(o,u),m=s.targetId;t=new N_(m,h)}}return t}function PS(i,e){let t;if(e instanceof Ua)t={update:Dg(i,e.key,e.value)};else if(e instanceof P_)t={delete:dd(i,e.key)};else if(e instanceof _i)t={update:Dg(i,e.key,e.data),updateMask:FS(e.fieldMask)};else{if(!(e instanceof pS))return me();t={verify:dd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Vu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Na)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Da)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ou)return{fieldPath:h.field.canonicalString(),increment:m.Ie};throw me()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:RS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:me()}(i,e.precondition)),t}function xS(i,e){return i&&i.length>0?(be(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Jn(o.updateTime):Jn(u);return h.isEqual(ge.min())&&(h=Jn(u)),new hS(h,o.transformResults||[])}(t,e))):[]}function NS(i,e){return{documents:[L_(i,e.path)]}}function DS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=L_(i,o);const u=function(v){if(v.length!==0)return F_(tr.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(E=>function(N){return{field:Zs(N.field),direction:LS(N.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=cd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ht:t,parent:o}}function VS(i){let e=kS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(k){const N=b_(k);return N instanceof tr&&f_(N)?N.getFilters():[N]}(t.where));let h=[];t.orderBy&&(h=function(k){return k.map(N=>function(H){return new Du(eo(H.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(H.direction))}(N))}(t.orderBy));let m=null;t.limit&&(m=function(k){let N;return N=typeof k=="object"?k.value:k,Ku(N)?null:N}(t.limit));let y=null;t.startAt&&(y=function(k){const N=!!k.before,z=k.values||[];return new Nu(z,N)}(t.startAt));let v=null;return t.endAt&&(v=function(k){const N=!k.before,z=k.values||[];return new Nu(z,N)}(t.endAt)),YI(e,o,h,u,m,"F",y,v)}function OS(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function b_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=eo(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=eo(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=eo(t.unaryFilter.field);return dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=eo(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(i):i.fieldFilter!==void 0?function(t){return dt.create(eo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return tr.create(t.compositeFilter.filters.map(s=>b_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me()}}(t.compositeFilter.op))}(i):me()}function LS(i){return TS[i]}function MS(i){return IS[i]}function bS(i){return SS[i]}function Zs(i){return{fieldPath:i.canonicalString()}}function eo(i){return Rt.fromServerFormat(i.fieldPath)}function F_(i){return i instanceof dt?function(t){if(t.op==="=="){if(vg(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NAN"}};if(_g(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vg(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NAN"}};if(_g(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(t.field),op:MS(t.op),value:t.value}}}(i):i instanceof tr?function(t){const s=t.getFilters().map(o=>F_(o));return s.length===1?s[0]:{compositeFilter:{op:bS(t.op),filters:s}}}(i):me()}function FS(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function U_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,s,o,u=ge.min(),h=ge.min(),m=kt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.Tt=e}}function jS(i){const e=VS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?ud(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.Tn=new BS}addToCollectionParentIndex(e,t){return this.Tn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(hi.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(hi.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class BS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new pt(Ze.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new pt(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},j_=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(j_,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new ho(0)}static Un(){return new ho(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="LruGarbageCollector",$S=1048576;function Lg([i,e],[t,s]){const o=Pe(i,t);return o===0?Pe(e,s):o}class HS{constructor(e){this.Hn=e,this.buffer=new pt(Lg),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Lg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class WS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ne(Og,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wo(t)?ne(Og,"Ignoring IndexedDB error during garbage collection: ",t):await vo(t)}await this.er(3e5)})}}class qS{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return B.resolve(qu.ae);const s=new HS(t);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Vg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vg):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,o,u,h,m,y,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(k=>(k>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),o=this.params.maximumSequenceNumbersToCollect):o=k,h=Date.now(),this.nthSequenceNumber(e,o))).next(k=>(s=k,m=Date.now(),this.removeTargets(e,s,t))).next(k=>(u=k,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(k=>(v=Date.now(),Ys()<=Re.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${k} documents in `+(v-y)+`ms
Total Duration: ${v-E}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:k})))}}function KS(i,e){return new qS(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Sa(s.mutation,o,an.empty(),ft.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ke()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ke()){const o=Qi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=_a();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Qi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ke()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=kr();const h=Ia(),m=function(){return Ia()}();return t.forEach((y,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof _i)?u=u.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),Sa(E.mutation,v,E.mutation.getFieldMask(),ft.now())):h.set(v.key,an.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((v,E)=>h.set(v,E)),t.forEach((v,E)=>{var k;return m.set(v,new QS(E,(k=h.get(v))!==null&&k!==void 0?k:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Ia();let o=new Ye((h,m)=>h-m),u=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const v=t.get(y);if(v===null)return;let E=s.get(y)||an.empty();E=m.applyToLocalView(v,E),s.set(y,E);const k=(o.get(m.batchId)||ke()).add(y);o=o.insert(m.batchId,k)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,E=y.value,k=E_();E.forEach(N=>{if(!u.has(N)){const z=k_(t.get(N),s.get(N));z!==null&&k.set(N,z),u=u.add(N)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,k))}return B.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):JI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(Qi());let m=ka,y=u;return h.next(v=>B.forEach(v,(E,k)=>(m<k.largestBatchId&&(m=k.largestBatchId),u.get(E)?B.resolve():this.remoteDocumentCache.getEntry(e,E).next(N=>{y=y.insert(E,N)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,y,v,ke())).next(E=>({batchId:m,changes:w_(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next(s=>{let o=_a();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=_a();return this.indexManager.getCollectionParents(e,u).next(m=>B.forEach(m,y=>{const v=function(k,N){return new Qu(N,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(E=>{E.forEach((k,N)=>{h=h.insert(k,N)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((y,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,bt.newInvalidDocument(E)))});let m=_a();return h.forEach((y,v)=>{const E=u.get(y);E!==void 0&&Sa(E.mutation,v,an.empty(),ft.now()),Yu(t,v)&&(m=m.insert(y,v))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return B.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Jn(o.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:jS(o.bundledQuery),readTime:Jn(o.readTime)}}(t)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(){this.overlays=new Ye(de.comparator),this.Rr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Qi();return B.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Et(e,t,u)}),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=Qi(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ye((v,E)=>v-E);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=u.get(v.largestBatchId);E===null&&(E=Qi(),u=u.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const m=Qi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,E)=>m.set(v,E)),!(m.size()>=o)););return B.resolve(m)}Et(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new gS(t,s));let u=this.Rr.get(t);u===void 0&&(u=ke(),this.Rr.set(t,u)),this.Rr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.Vr=new pt(wt.mr),this.gr=new pt(wt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new wt(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new wt(e,t))}br(e,t){e.forEach(s=>this.removeReference(s,t))}Sr(e){const t=new de(new Ze([])),s=new wt(t,e),o=new wt(t,e+1),u=[];return this.gr.forEachInRange([s,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new de(new Ze([])),s=new wt(t,e),o=new wt(t,e+1);let u=ke();return this.gr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new wt(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class wt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return de.comparator(e.key,t.key)||Pe(e.Cr,t.Cr)}static pr(e,t){return Pe(e.Cr,t.Cr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new pt(wt.mr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new mS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Mr=this.Mr.add(new wt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Nr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Fd:this.Fr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new wt(t,0),o=new wt(t,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],h=>{const m=this.Or(h.Cr);u.push(m)}),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(Pe);return t.forEach(o=>{const u=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],m=>{s=s.add(m.Cr)})}),B.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new wt(new de(u),0);let m=new pt(Pe);return this.Mr.forEachWhile(y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Cr)),!0)},h),B.resolve(this.Br(m))}Br(e){const t=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){be(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return B.forEach(t.mutations,o=>{const u=new wt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new wt(t,0),o=this.Mr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.kr=e,this.docs=function(){return new Ye(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=kr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))}),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=kr();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:E}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||PI(CI(E),s)<=0||(o.has(E.key)||Yu(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){me()}qr(e,t){return B.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new n1(this)}getSize(e){return B.resolve(this.size)}}class n1 extends GS{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),B.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.persistence=e,this.Qr=new rs(t=>zd(t),Bd),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Gd,this.targetCount=0,this.Ur=ho.Kn()}forEachTarget(e,t){return this.Qr.forEach((s,o)=>t(o)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),B.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new ho(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.zn(t),B.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Qr.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),B.waitFor(u).next(()=>o)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.Kr.yr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.Kr.br(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Kr.vr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new qu(0),this.zr=!1,this.zr=!0,this.jr=new ZS,this.referenceDelegate=e(this),this.Hr=new r1(this),this.indexManager=new zS,this.remoteDocumentCache=function(o){return new t1(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new US(t),this.Yr=new YS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new JS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new e1(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new i1(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,t){return B.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class i1 extends NI{constructor(e){super(),this.currentSequenceNumber=e}}class Qd{constructor(e){this.persistence=e,this.ti=new Gd,this.ni=null}static ri(e){return new Qd(e)}get ii(){if(this.ni)return this.ni;throw me()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),B.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ii,s=>{const o=de.fromPath(s);return this.si(e,o).next(u=>{u||t.removeEntry(o,ge.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return B.or([()=>B.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Mu{constructor(e,t){this.persistence=e,this.oi=new rs(s=>OI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=KS(this,t)}static ri(e,t){return new Mu(e,t)}Zr(){}Xr(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return B.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?B.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,h=>this.ar(e,h,t).next(m=>{m||(s++,u.removeEntry(h,ge.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),B.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yu(e.data.value)),t}ar(e,t,s){return B.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=o}static Yi(e,t){let s=ke(),o=ke();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Xd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return nw()?8:DI(Ft())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.rs(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new s1;return this._s(e,t,h).next(m=>{if(u.result=m,this.Xi)return this.us(e,t,h,m.size)})}).next(()=>u.result)}us(e,t,s,o){return s.documentReadCount<this.es?(Ys()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Js(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),B.resolve()):(Ys()<=Re.DEBUG&&ne("QueryEngine","Query:",Js(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(Ys()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Js(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(t))):B.resolve())}rs(e,t){if(Ig(t))return B.resolve(null);let s=Xn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=ud(t,null,"F"),s=Xn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=ke(...u);return this.ns.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const v=this.cs(t,m);return this.ls(t,v,h,y.readTime)?this.rs(e,ud(t,null,"F")):this.hs(e,v,t,y)}))})))}ss(e,t,s,o){return Ig(t)||o.isEqual(ge.min())?B.resolve(null):this.ns.getDocuments(e,s).next(u=>{const h=this.cs(t,u);return this.ls(t,h,s,o)?B.resolve(null):(Ys()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Js(t)),this.hs(e,h,t,kI(o,ka)).next(m=>m))})}cs(e,t){let s=new pt(__(e));return t.forEach((o,u)=>{Yu(e,u)&&(s=s.add(u))}),s}ls(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,t,s){return Ys()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Js(t)),this.ns.getDocumentsMatchingQuery(e,t,hi.min(),s)}hs(e,t,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="LocalStore",a1=3e8;class l1{constructor(e,t,s,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new Ye(Pe),this.Is=new rs(u=>zd(u),Bd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XS(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function u1(i,e,t,s){return new l1(i,e,t,s)}async function B_(i,e){const t=_e(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=ke();for(const v of o){h.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}for(const v of u){m.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(s,y).next(v=>({Rs:v,removedBatchIds:h,addedBatchIds:m}))})})}function c1(i,e){const t=_e(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.ds.newChangeBuffer({trackRemovals:!0});return function(m,y,v,E){const k=v.batch,N=k.keys();let z=B.resolve();return N.forEach(H=>{z=z.next(()=>E.getEntry(y,H)).next(X=>{const W=v.docVersions.get(H);be(W!==null),X.version.compareTo(W)<0&&(k.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),E.addEntry(X)))})}),z.next(()=>m.mutationQueue.removeMutationBatch(y,k))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=ke();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function $_(i){const e=_e(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function h1(i,e){const t=_e(i),s=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const m=[];e.targetChanges.forEach((E,k)=>{const N=o.get(k);if(!N)return;m.push(t.Hr.removeMatchingKeys(u,E.removedDocuments,k).next(()=>t.Hr.addMatchingKeys(u,E.addedDocuments,k)));let z=N.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(k)!==null?z=z.withResumeToken(kt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(k,z),function(X,W,we){return X.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=a1?!0:we.addedDocuments.size+we.modifiedDocuments.size+we.removedDocuments.size>0}(N,z,E)&&m.push(t.Hr.updateTargetData(u,z))});let y=kr(),v=ke();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(d1(u,h,e.documentUpdates).next(E=>{y=E.Vs,v=E.fs})),!s.isEqual(ge.min())){const E=t.Hr.getLastRemoteSnapshotVersion(u).next(k=>t.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return B.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,v)).next(()=>y)}).then(u=>(t.Ts=o,u))}function d1(i,e,t){let s=ke(),o=ke();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=kr();return t.forEach((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(ge.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ne(Yd,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)}),{Vs:h,fs:o}})}function f1(i,e){const t=_e(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Fd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function p1(i,e){const t=_e(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Hr.getTargetData(s,e).next(u=>u?(o=u,B.resolve(o)):t.Hr.allocateTargetId(s).next(h=>(o=new ii(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function pd(i,e,t){const s=_e(i),o=s.Ts.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!wo(h))throw h;ne(Yd,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function Mg(i,e,t){const s=_e(i);let o=ge.min(),u=ke();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,v,E){const k=_e(y),N=k.Is.get(E);return N!==void 0?B.resolve(k.Ts.get(N)):k.Hr.getTargetData(v,E)}(s,h,Xn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s.Ps.getDocumentsMatchingQuery(h,e,t?o:ge.min(),t?u:ke())).next(m=>(m1(s,eS(e),m),{documents:m,gs:u})))}function m1(i,e,t){let s=i.Es.get(e)||ge.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Es.set(e,s)}class bg{constructor(){this.activeTargetIds=oS()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g1{constructor(){this.ho=new bg,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new bg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="ConnectivityMonitor";class Ug{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ne(Fg,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ne(Fg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hu=null;function md(){return hu===null?hu=function(){return 268435456+Math.round(2147483648*Math.random())}():hu++,"0x"+hu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="RestConnection",_1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class v1{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===Pu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}bo(e,t,s,o,u){const h=md(),m=this.So(e,t.toUriEncodedString());ne(Kh,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(y,o,u),this.vo(e,m,y,s).then(v=>(ne(Kh,`Received RPC '${e}' ${h}: `,v),v),v=>{throw ao(Kh,`RPC '${e}' ${h} failed with error: `,v,"url: ",m,"request:",s),v})}Co(e,t,s,o,u,h){return this.bo(e,t,s,o,u)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_o}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}So(e,t){const s=_1[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="WebChannelConnection";class E1 extends v1{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,o){const u=md();return new Promise((h,m)=>{const y=new Gy;y.setWithCredentials(!0),y.listenOnce(Qy.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case gu.NO_ERROR:const E=y.getResponseJson();ne(Ot,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),h(E);break;case gu.TIMEOUT:ne(Ot,`RPC '${e}' ${u} timed out`),m(new he(Q.DEADLINE_EXCEEDED,"Request time out"));break;case gu.HTTP_ERROR:const k=y.getStatus();if(ne(Ot,`RPC '${e}' ${u} failed with status:`,k,"response text:",y.getResponseText()),k>0){let N=y.getResponseJson();Array.isArray(N)&&(N=N[0]);const z=N==null?void 0:N.error;if(z&&z.status&&z.message){const H=function(W){const we=W.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(we)>=0?we:Q.UNKNOWN}(z.status);m(new he(H,z.message))}else m(new he(Q.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new he(Q.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ne(Ot,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);ne(Ot,`RPC '${e}' ${u} sending request:`,o),y.send(t,"POST",v,s,15)})}Wo(e,t,s){const o=md(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Jy(),m=Yy(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Do(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const E=u.join("");ne(Ot,`Creating RPC '${e}' stream ${o}: ${E}`,y);const k=h.createWebChannel(E,y);let N=!1,z=!1;const H=new w1({Fo:W=>{z?ne(Ot,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(N||(ne(Ot,`Opening RPC '${e}' stream ${o} transport.`),k.open(),N=!0),ne(Ot,`RPC '${e}' stream ${o} sending:`,W),k.send(W))},Mo:()=>k.close()}),X=(W,we,ve)=>{W.listen(we,ye=>{try{ve(ye)}catch(Te){setTimeout(()=>{throw Te},0)}})};return X(k,ya.EventType.OPEN,()=>{z||(ne(Ot,`RPC '${e}' stream ${o} transport opened.`),H.Qo())}),X(k,ya.EventType.CLOSE,()=>{z||(z=!0,ne(Ot,`RPC '${e}' stream ${o} transport closed`),H.Ko())}),X(k,ya.EventType.ERROR,W=>{z||(z=!0,ao(Ot,`RPC '${e}' stream ${o} transport errored:`,W),H.Ko(new he(Q.UNAVAILABLE,"The operation could not be completed")))}),X(k,ya.EventType.MESSAGE,W=>{var we;if(!z){const ve=W.data[0];be(!!ve);const ye=ve,Te=(ye==null?void 0:ye.error)||((we=ye[0])===null||we===void 0?void 0:we.error);if(Te){ne(Ot,`RPC '${e}' stream ${o} received error:`,Te);const qe=Te.status;let Ae=function(A){const C=ot[A];if(C!==void 0)return x_(C)}(qe),x=Te.message;Ae===void 0&&(Ae=Q.INTERNAL,x="Unknown error status: "+qe+" with message "+Te.message),z=!0,H.Ko(new he(Ae,x)),k.close()}else ne(Ot,`RPC '${e}' stream ${o} received:`,ve),H.Uo(ve)}}),X(m,Xy.STAT_EVENT,W=>{W.stat===id.PROXY?ne(Ot,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===id.NOPROXY&&ne(Ot,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{H.$o()},0),H}}function Gh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(i){return new AS(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="PersistentStream";class W_{constructor(e,t,s,o,u,h,m,y){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new H_(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Rr(t.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===t&&this.V_(s,o)},s=>{e(()=>{const o=new he(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ne(jg,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ne(jg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class T1 extends W_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=CS(this.serializer,e),s=function(u){if(!("targetChange"in u))return ge.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ge.min():h.readTime?Jn(h.readTime):ge.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=fd(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=ld(y)?{documents:NS(u,y)}:{query:DS(u,y).ht},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=V_(u,h.resumeToken);const v=cd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(ge.min())>0){m.readTime=Lu(u,h.snapshotVersion.toTimestamp());const v=cd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=OS(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=fd(this.serializer),t.removeTarget=e,this.I_(t)}}class I1 extends W_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=xS(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=fd(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>PS(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{}class A1 extends S1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new he(Q.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.bo(e,hd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(Q.UNKNOWN,u.toString())})}Co(e,t,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Co(e,hd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(Q.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class R1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Rr(t),this.N_=!1):ne("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="RemoteStore";class k1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{s.enqueueAndForget(async()=>{is(this)&&(ne(ts,"Restarting streams for network reachability change."),await async function(y){const v=_e(y);v.W_.add(4),await za(v),v.j_.set("Unknown"),v.W_.delete(4),await nc(v)}(this))})}),this.j_=new R1(s,o)}}async function nc(i){if(is(i))for(const e of i.G_)await e(!0)}async function za(i){for(const e of i.G_)await e(!1)}function q_(i,e){const t=_e(i);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),tf(t)?ef(t):Eo(t).c_()&&Zd(t,e))}function Jd(i,e){const t=_e(i),s=Eo(t);t.U_.delete(e),s.c_()&&K_(t,e),t.U_.size===0&&(s.c_()?s.P_():is(t)&&t.j_.set("Unknown"))}function Zd(i,e){if(i.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Eo(i).y_(e)}function K_(i,e){i.H_.Ne(e),Eo(i).w_(e)}function ef(i){i.H_=new ES({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>i.U_.get(e)||null,it:()=>i.datastore.serializer.databaseId}),Eo(i).start(),i.j_.B_()}function tf(i){return is(i)&&!Eo(i).u_()&&i.U_.size>0}function is(i){return _e(i).W_.size===0}function G_(i){i.H_=void 0}async function C1(i){i.j_.set("Online")}async function P1(i){i.U_.forEach((e,t)=>{Zd(i,e)})}async function x1(i,e){G_(i),tf(i)?(i.j_.q_(e),ef(i)):i.j_.set("Unknown")}async function N1(i,e,t){if(i.j_.set("Online"),e instanceof D_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.U_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.U_.delete(m),o.H_.removeTarget(m))}(i,e)}catch(s){ne(ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await bu(i,s)}else if(e instanceof wu?i.H_.We(e):e instanceof N_?i.H_.Ze(e):i.H_.je(e),!t.isEqual(ge.min()))try{const s=await $_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.H_.ot(h);return m.targetChanges.forEach((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.U_.get(v);E&&u.U_.set(v,E.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,v)=>{const E=u.U_.get(y);if(!E)return;u.U_.set(y,E.withResumeToken(kt.EMPTY_BYTE_STRING,E.snapshotVersion)),K_(u,y);const k=new ii(E.target,y,v,E.sequenceNumber);Zd(u,k)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){ne(ts,"Failed to raise snapshot:",s),await bu(i,s)}}async function bu(i,e,t){if(!wo(e))throw e;i.W_.add(1),await za(i),i.j_.set("Offline"),t||(t=()=>$_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ne(ts,"Retrying IndexedDB access"),await t(),i.W_.delete(1),await nc(i)})}function Q_(i,e){return e().catch(t=>bu(i,t,e))}async function rc(i){const e=_e(i),t=mi(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:Fd;for(;D1(e);)try{const o=await f1(e.localStore,s);if(o===null){e.K_.length===0&&t.P_();break}s=o.batchId,V1(e,o)}catch(o){await bu(e,o)}X_(e)&&Y_(e)}function D1(i){return is(i)&&i.K_.length<10}function V1(i,e){i.K_.push(e);const t=mi(i);t.c_()&&t.b_&&t.S_(e.mutations)}function X_(i){return is(i)&&!mi(i).u_()&&i.K_.length>0}function Y_(i){mi(i).start()}async function O1(i){mi(i).C_()}async function L1(i){const e=mi(i);for(const t of i.K_)e.S_(t.mutations)}async function M1(i,e,t){const s=i.K_.shift(),o=Wd.from(s,e,t);await Q_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await rc(i)}async function b1(i,e){e&&mi(i).b_&&await async function(s,o){if(function(h){return _S(h)&&h!==Q.ABORTED}(o.code)){const u=s.K_.shift();mi(s).h_(),await Q_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await rc(s)}}(i,e),X_(i)&&Y_(i)}async function zg(i,e){const t=_e(i);t.asyncQueue.verifyOperationInProgress(),ne(ts,"RemoteStore received new credentials");const s=is(t);t.W_.add(3),await za(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await nc(t)}async function F1(i,e){const t=_e(i);e?(t.W_.delete(2),await nc(t)):e||(t.W_.add(2),await za(t),t.j_.set("Unknown"))}function Eo(i){return i.J_||(i.J_=function(t,s,o){const u=_e(t);return u.M_(),new T1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:C1.bind(null,i),No:P1.bind(null,i),Lo:x1.bind(null,i),p_:N1.bind(null,i)}),i.G_.push(async e=>{e?(i.J_.h_(),tf(i)?ef(i):i.j_.set("Unknown")):(await i.J_.stop(),G_(i))})),i.J_}function mi(i){return i.Y_||(i.Y_=function(t,s,o){const u=_e(t);return u.M_(),new I1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:O1.bind(null,i),Lo:b1.bind(null,i),D_:L1.bind(null,i),v_:M1.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await rc(i)):(await i.Y_.stop(),i.K_.length>0&&(ne(ts,`Stopping write stream with ${i.K_.length} pending writes`),i.K_=[]))})),i.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new nf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rf(i,e){if(Rr("AsyncQueue",`${e}: ${i}`),wo(i))return new he(Q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{static emptySet(e){return new io(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=_a(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof io)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new io;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.Z_=new Ye(de.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):me():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class fo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new fo(e,t,io.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class j1{constructor(){this.queries=$g(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const o=_e(t),u=o.queries;o.queries=$g(),u.forEach((h,m)=>{for(const y of m.ta)y.onError(s)})})(this,new he(Q.ABORTED,"Firestore shutting down"))}}function $g(){return new rs(i=>y_(i),Xu)}async function z1(i,e){const t=_e(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new U1,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await t.onListen(o,!0);break;case 1:u.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=rf(h,`Initialization of query '${Js(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ta.push(e),e.sa(t.onlineState),u.ea&&e.oa(u.ea)&&sf(t)}async function B1(i,e){const t=_e(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ta.indexOf(e);h>=0&&(u.ta.splice(h,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function $1(i,e){const t=_e(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.ta)m.oa(o)&&(s=!0);h.ea=o}}s&&sf(t)}function H1(i,e,t){const s=_e(i),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(t);s.queries.delete(e)}function sf(i){i.ia.forEach(e=>{e.next()})}var gd,Hg;(Hg=gd||(gd={}))._a="default",Hg.Cache="cache";class W1{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new fo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==gd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.key=e}}class Z_{constructor(e){this.key=e}}class q1{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ke(),this.mutatedKeys=ke(),this.ya=__(e),this.wa=new io(this.ya)}get ba(){return this.fa}Sa(e,t){const s=t?t.Da:new Bg,o=t?t.wa:this.wa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,k)=>{const N=o.get(E),z=Yu(this.query,k)?k:null,H=!!N&&this.mutatedKeys.has(N.key),X=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let W=!1;N&&z?N.data.isEqual(z.data)?H!==X&&(s.track({type:3,doc:z}),W=!0):this.va(N,z)||(s.track({type:2,doc:z}),W=!0,(y&&this.ya(z,y)>0||v&&this.ya(z,v)<0)&&(m=!0)):!N&&z?(s.track({type:0,doc:z}),W=!0):N&&!z&&(s.track({type:1,doc:N}),W=!0,(y||v)&&(m=!0)),W&&(z?(h=h.add(z),u=X?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{wa:h,Da:s,ls:m,mutatedKeys:u}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const h=e.Da.X_();h.sort((E,k)=>function(z,H){const X=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return X(z)-X(H)}(E.type,k.type)||this.ya(E.doc,k.doc)),this.Ca(s),o=o!=null&&o;const m=t&&!o?this.Fa():[],y=this.pa.size===0&&this.current&&!o?1:0,v=y!==this.ga;return this.ga=y,h.length!==0||v?{snapshot:new fo(this.query,e.wa,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Bg,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ke(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new Z_(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new J_(s))}),t}Oa(e){this.fa=e.gs,this.pa=ke();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return fo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const of="SyncEngine";class K1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class G1{constructor(e){this.key=e,this.Ba=!1}}class Q1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new rs(m=>y_(m),Xu),this.qa=new Map,this.Qa=new Set,this.$a=new Ye(de.comparator),this.Ka=new Map,this.Ua=new Gd,this.Wa={},this.Ga=new Map,this.za=ho.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function X1(i,e,t=!0){const s=sv(i);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await ev(s,e,t,!0),o}async function Y1(i,e){const t=sv(i);await ev(t,e,!0,!1)}async function ev(i,e,t,s){const o=await p1(i.localStore,Xn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await J1(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&q_(i.remoteStore,o),m}async function J1(i,e,t,s,o){i.Ha=(k,N,z)=>async function(X,W,we,ve){let ye=W.view.Sa(we);ye.ls&&(ye=await Mg(X.localStore,W.query,!1).then(({documents:x})=>W.view.Sa(x,ye)));const Te=ve&&ve.targetChanges.get(W.targetId),qe=ve&&ve.targetMismatches.get(W.targetId)!=null,Ae=W.view.applyChanges(ye,X.isPrimaryClient,Te,qe);return qg(X,W.targetId,Ae.Ma),Ae.snapshot}(i,k,N,z);const u=await Mg(i.localStore,e,!0),h=new q1(e,u.gs),m=h.Sa(u.documents),y=ja.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);qg(i,t,v.Ma);const E=new K1(e,t,h);return i.ka.set(e,E),i.qa.has(t)?i.qa.get(t).push(e):i.qa.set(t,[e]),v.snapshot}async function Z1(i,e,t){const s=_e(i),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(h=>!Xu(h,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await pd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Jd(s.remoteStore,o.targetId),yd(s,o.targetId)}).catch(vo)):(yd(s,o.targetId),await pd(s.localStore,o.targetId,!0))}async function eA(i,e){const t=_e(i),s=t.ka.get(e),o=t.qa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Jd(t.remoteStore,s.targetId))}async function tA(i,e,t){const s=lA(i);try{const o=await function(h,m){const y=_e(h),v=ft.now(),E=m.reduce((z,H)=>z.add(H.key),ke());let k,N;return y.persistence.runTransaction("Locally write mutations","readwrite",z=>{let H=kr(),X=ke();return y.ds.getEntries(z,E).next(W=>{H=W,H.forEach((we,ve)=>{ve.isValidDocument()||(X=X.add(we))})}).next(()=>y.localDocuments.getOverlayedDocuments(z,H)).next(W=>{k=W;const we=[];for(const ve of m){const ye=fS(ve,k.get(ve.key).overlayedDocument);ye!=null&&we.push(new _i(ve.key,ye,c_(ye.value.mapValue),Yn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,we,m)}).next(W=>{N=W;const we=W.applyToLocalDocumentSet(k,X);return y.documentOverlayCache.saveOverlays(z,W.batchId,we)})}).then(()=>({batchId:N.batchId,changes:w_(k)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,y){let v=h.Wa[h.currentUser.toKey()];v||(v=new Ye(Pe)),v=v.insert(m,y),h.Wa[h.currentUser.toKey()]=v}(s,o.batchId,t),await Ba(s,o.changes),await rc(s.remoteStore)}catch(o){const u=rf(o,"Failed to persist write");t.reject(u)}}async function tv(i,e){const t=_e(i);try{const s=await h1(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ka.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Ba=!0:o.modifiedDocuments.size>0?be(h.Ba):o.removedDocuments.size>0&&(be(h.Ba),h.Ba=!1))}),await Ba(t,s,e)}catch(s){await vo(s)}}function Wg(i,e,t){const s=_e(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ka.forEach((u,h)=>{const m=h.view.sa(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const y=_e(h);y.onlineState=m;let v=!1;y.queries.forEach((E,k)=>{for(const N of k.ta)N.sa(m)&&(v=!0)}),v&&sf(y)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nA(i,e,t){const s=_e(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ka.get(e),u=o&&o.key;if(u){let h=new Ye(de.comparator);h=h.insert(u,bt.newNoDocument(u,ge.min()));const m=ke().add(u),y=new ec(ge.min(),new Map,new Ye(Pe),h,m);await tv(s,y),s.$a=s.$a.remove(u),s.Ka.delete(e),af(s)}else await pd(s.localStore,e,!1).then(()=>yd(s,e,t)).catch(vo)}async function rA(i,e){const t=_e(i),s=e.batch.batchId;try{const o=await c1(t.localStore,e);rv(t,s,null),nv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ba(t,o)}catch(o){await vo(o)}}async function iA(i,e,t){const s=_e(i);try{const o=await function(h,m){const y=_e(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let E;return y.mutationQueue.lookupMutationBatch(v,m).next(k=>(be(k!==null),E=k.keys(),y.mutationQueue.removeMutationBatch(v,k))).next(()=>y.mutationQueue.performConsistencyCheck(v)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(v,E,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E)).next(()=>y.localDocuments.getDocuments(v,E))})}(s.localStore,e);rv(s,e,t),nv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ba(s,o)}catch(o){await vo(o)}}function nv(i,e){(i.Ga.get(e)||[]).forEach(t=>{t.resolve()}),i.Ga.delete(e)}function rv(i,e,t){const s=_e(i);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function yd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.qa.get(e))i.ka.delete(s),t&&i.La.Ja(s,t);i.qa.delete(e),i.isPrimaryClient&&i.Ua.Sr(e).forEach(s=>{i.Ua.containsKey(s)||iv(i,s)})}function iv(i,e){i.Qa.delete(e.path.canonicalString());const t=i.$a.get(e);t!==null&&(Jd(i.remoteStore,t),i.$a=i.$a.remove(e),i.Ka.delete(t),af(i))}function qg(i,e,t){for(const s of t)s instanceof J_?(i.Ua.addReference(s.key,e),sA(i,s)):s instanceof Z_?(ne(of,"Document no longer in limbo: "+s.key),i.Ua.removeReference(s.key,e),i.Ua.containsKey(s.key)||iv(i,s.key)):me()}function sA(i,e){const t=e.key,s=t.path.canonicalString();i.$a.get(t)||i.Qa.has(s)||(ne(of,"New document in limbo: "+t),i.Qa.add(s),af(i))}function af(i){for(;i.Qa.size>0&&i.$a.size<i.maxConcurrentLimboResolutions;){const e=i.Qa.values().next().value;i.Qa.delete(e);const t=new de(Ze.fromString(e)),s=i.za.next();i.Ka.set(s,new G1(t)),i.$a=i.$a.insert(t,s),q_(i.remoteStore,new ii(Xn($d(t.path)),s,"TargetPurposeLimboResolution",qu.ae))}}async function Ba(i,e,t){const s=_e(i),o=[],u=[],h=[];s.ka.isEmpty()||(s.ka.forEach((m,y)=>{h.push(s.Ha(y,e,t).then(v=>{var E;if((v||t)&&s.isPrimaryClient){const k=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(y.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(y.targetId,k?"current":"not-current")}if(v){o.push(v);const k=Xd.Yi(y.targetId,v);u.push(k)}}))}),await Promise.all(h),s.La.p_(o),await async function(y,v){const E=_e(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",k=>B.forEach(v,N=>B.forEach(N.Hi,z=>E.persistence.referenceDelegate.addReference(k,N.targetId,z)).next(()=>B.forEach(N.Ji,z=>E.persistence.referenceDelegate.removeReference(k,N.targetId,z)))))}catch(k){if(!wo(k))throw k;ne(Yd,"Failed to update sequence numbers: "+k)}for(const k of v){const N=k.targetId;if(!k.fromCache){const z=E.Ts.get(N),H=z.snapshotVersion,X=z.withLastLimboFreeSnapshotVersion(H);E.Ts=E.Ts.insert(N,X)}}}(s.localStore,u))}async function oA(i,e){const t=_e(i);if(!t.currentUser.isEqual(e)){ne(of,"User change. New user:",e.toKey());const s=await B_(t.localStore,e);t.currentUser=e,function(u,h){u.Ga.forEach(m=>{m.forEach(y=>{y.reject(new he(Q.CANCELLED,h))})}),u.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ba(t,s.Rs)}}function aA(i,e){const t=_e(i),s=t.Ka.get(e);if(s&&s.Ba)return ke().add(s.key);{let o=ke();const u=t.qa.get(e);if(!u)return o;for(const h of u){const m=t.ka.get(h);o=o.unionWith(m.view.ba)}return o}}function sv(i){const e=_e(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=tv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nA.bind(null,e),e.La.p_=$1.bind(null,e.eventManager),e.La.Ja=H1.bind(null,e.eventManager),e}function lA(i){const e=_e(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iA.bind(null,e),e}class Fu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return u1(this.persistence,new o1,e.initialUser,this.serializer)}Xa(e){return new z_(Qd.ri,this.serializer)}Za(e){return new g1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fu.provider={build:()=>new Fu};class uA extends Fu{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){be(this.persistence.referenceDelegate instanceof Mu);const s=this.persistence.referenceDelegate.garbageCollector;return new WS(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new z_(s=>Mu.ri(s,t),this.serializer)}}class _d{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oA.bind(null,this.syncEngine),await F1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new j1}()}createDatastore(e){const t=tc(e.databaseInfo.databaseId),s=function(u){return new E1(u)}(e.databaseInfo);return function(u,h,m,y){return new A1(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new k1(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Wg(this.syncEngine,t,0),function(){return Ug.D()?new Ug:new y1}())}createSyncEngine(e,t){return function(o,u,h,m,y,v,E){const k=new Q1(o,u,h,m,y,v);return E&&(k.ja=!0),k}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=_e(o);ne(ts,"RemoteStore shutting down."),u.W_.add(5),await za(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}_d.provider={build:()=>new _d};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="FirestoreClient";class hA{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=e_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ne(gi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ne(gi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=rf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Qh(i,e){i.asyncQueue.verifyOperationInProgress(),ne(gi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await B_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Kg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await dA(i);ne(gi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>zg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>zg(e.remoteStore,o)),i._onlineComponents=e}async function dA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(gi,"Using user provided OfflineComponentProvider");try{await Qh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ao("Error using user provided cache. Falling back to memory cache: "+t),await Qh(i,new Fu)}}else ne(gi,"Using default OfflineComponentProvider"),await Qh(i,new uA(void 0));return i._offlineComponents}async function ov(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(gi,"Using user provided OnlineComponentProvider"),await Kg(i,i._uninitializedComponentsProvider._online)):(ne(gi,"Using default OnlineComponentProvider"),await Kg(i,new _d))),i._onlineComponents}function fA(i){return ov(i).then(e=>e.syncEngine)}async function pA(i){const e=await ov(i),t=e.eventManager;return t.onListen=X1.bind(null,e.syncEngine),t.onUnlisten=Z1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Y1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=eA.bind(null,e.syncEngine),t}function mA(i,e,t={}){const s=new ci;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,v){const E=new cA({next:N=>{E.su(),h.enqueueAndForget(()=>B1(u,k));const z=N.docs.has(m);!z&&N.fromCache?v.reject(new he(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&N.fromCache&&y&&y.source==="server"?v.reject(new he(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(N)},error:N=>v.reject(N)}),k=new W1($d(m.path),E,{includeMetadataChanges:!0,Ta:!0});return z1(u,k)}(await pA(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(i,e,t){if(!t)throw new he(Q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function yA(i,e,t,s){if(e===!0&&s===!0)throw new he(Q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Qg(i){if(!de.isDocumentKey(i))throw new he(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function lf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":me()}function ns(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new he(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=lf(i);throw new he(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="firestore.googleapis.com",Xg=!0;class Yg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lv,this.ssl=Xg}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Xg;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=j_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$S)throw new he(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=av((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new vI;switch(s.type){case"firstParty":return new II(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Gg.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Gg.delete(t),s.terminate())}(this),Promise.resolve()}}function _A(i,e,t,s={}){var o;const u=(i=ns(i,uf))._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:i._getEmulatorOptions()}),m=`${e}:${t}`;u.host!==lv&&u.host!==m&&ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:s});if(!Yi(y,h)&&(i._setSettings(y),s.mockUserToken)){let v,E;if(typeof s.mockUserToken=="string")v=s.mockUserToken,E=Lt.MOCK_USER;else{v=Q0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const k=s.mockUserToken.sub||s.mockUserToken.user_id;if(!k)throw new he(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Lt(k)}i._authCredentials=new wI(new Zy(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new cf(this.firestore,e,this._query)}}class ln{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Va(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}}class Va extends cf{constructor(e,t,s){super(e,t,$d(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new de(e))}withConverter(e){return new Va(this.firestore,e,this._path)}}function vd(i,e,...t){if(i=un(i),arguments.length===1&&(e=e_.newId()),gA("doc","path",e),i instanceof uf){const s=Ze.fromString(e,...t);return Qg(s),new ln(i,null,new de(s))}{if(!(i instanceof ln||i instanceof Va))throw new he(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ze.fromString(e,...t));return Qg(s),new ln(i.firestore,i instanceof Va?i.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="AsyncQueue";class Zg{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new H_(this,"async_queue_retry"),this.bu=()=>{const s=Gh();s&&ne(Jg,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const t=Gh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Gh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ci;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!wo(e))throw e;ne(Jg,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Rr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.Su=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=nf.createAndSchedule(this,e,t,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&me()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class ic extends uf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Zg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zg(e),this._firestoreClient=void 0,await e}}}function vA(i,e){const t=typeof i=="object"?i:dy(),s=typeof i=="string"?i:Pu,o=Ad(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=K0("firestore");u&&_A(o,...u)}return o}function uv(i){if(i._terminated)throw new he(Q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||wA(i),i._firestoreClient}function wA(i){var e,t,s;const o=i._freezeSettings(),u=function(m,y,v,E){return new bI(m,y,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,av(E.experimentalLongPollingOptions),E.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new hA(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new po(kt.fromBase64String(e))}catch(t){throw new he(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new po(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=/^__.*__$/;class TA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ua(e,this.data,t,this.fieldTransforms)}}class cv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new _i(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class pf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Ku(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Uu(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(hv(this.Lu)&&EA.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class IA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||tc(e)}ju(e,t,s,o=!1){return new pf({Lu:e,methodName:t,zu:s,path:Rt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dv(i){const e=i._freezeSettings(),t=tc(i._databaseId);return new IA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function SA(i,e,t,s,o,u={}){const h=i.ju(u.merge||u.mergeFields?2:0,e,t,o);mf("Data must be an object, but it was:",h,s);const m=fv(s,h);let y,v;if(u.merge)y=new an(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const k of u.mergeFields){const N=wd(e,k,t);if(!h.contains(N))throw new he(Q.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);mv(E,N)||E.push(N)}y=new an(E),v=h.fieldTransforms.filter(k=>y.covers(k.field))}else y=null,v=h.fieldTransforms;return new TA(new Jt(m),y,v)}class oc extends hf{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oc}}function AA(i,e,t,s){const o=i.ju(1,e,t);mf("Data must be an object, but it was:",o,s);const u=[],h=Jt.empty();yi(s,(y,v)=>{const E=gf(e,y,t);v=un(v);const k=o.Ku(E);if(v instanceof oc)u.push(E);else{const N=ac(v,k);N!=null&&(u.push(E),h.set(E,N))}});const m=new an(u);return new cv(h,m,o.fieldTransforms)}function RA(i,e,t,s,o,u){const h=i.ju(1,e,t),m=[wd(e,s,t)],y=[o];if(u.length%2!=0)throw new he(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let N=0;N<u.length;N+=2)m.push(wd(e,u[N])),y.push(u[N+1]);const v=[],E=Jt.empty();for(let N=m.length-1;N>=0;--N)if(!mv(v,m[N])){const z=m[N];let H=y[N];H=un(H);const X=h.Ku(z);if(H instanceof oc)v.push(z);else{const W=ac(H,X);W!=null&&(v.push(z),E.set(z,W))}}const k=new an(v);return new cv(E,k,h.fieldTransforms)}function ac(i,e){if(pv(i=un(i)))return mf("Unsupported field value:",e,i),fv(i,e);if(i instanceof hf)return function(s,o){if(!hv(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let y=ac(m,o.Uu(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=un(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return aS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:Lu(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Lu(o.serializer,u)}}if(s instanceof df)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof po)return{bytesValue:V_(o.serializer,s._byteString)};if(s instanceof ln){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Kd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ff)return function(h,m){return{mapValue:{fields:{[l_]:{stringValue:u_},[xu]:{arrayValue:{values:h.toArray().map(v=>{if(typeof v!="number")throw m.Wu("VectorValues must only contain numeric values.");return Hd(m.serializer,v)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${lf(s)}`)}(i,e)}function fv(i,e){const t={};return n_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yi(i,(s,o)=>{const u=ac(o,e.qu(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function pv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof df||i instanceof po||i instanceof ln||i instanceof hf||i instanceof ff)}function mf(i,e,t){if(!pv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=lf(t);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function wd(i,e,t){if((e=un(e))instanceof sc)return e._internalPath;if(typeof e=="string")return gf(i,e);throw Uu("Field path arguments must be of type string or ",i,!1,void 0,t)}const kA=new RegExp("[~\\*/\\[\\]]");function gf(i,e,t){if(e.search(kA)>=0)throw Uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new sc(...e.split("."))._internalPath}catch{throw Uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Uu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new he(Q.INVALID_ARGUMENT,m+i+y)}function mv(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(yv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class CA extends gv{data(){return super.data()}}function yv(i,e){return typeof e=="string"?gf(i,e):e instanceof sc?e._internalPath:e._delegate._internalPath}class PA{convertValue(e,t="none"){switch(pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return yi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[xu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new ff(u)}convertGeoPoint(e){return new df(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Gu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const t=di(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ze.fromString(e);be(U_(s));const o=new Pa(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Rr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _v extends gv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new DA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(yv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class DA extends _v{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(i){i=ns(i,ln);const e=ns(i.firestore,ic);return mA(uv(e),i._key).then(t=>LA(e,i,t))}class VA extends PA{constructor(e){super(),this.firestore=e}convertBytes(e){return new po(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,t)}}function wv(i,e,t){i=ns(i,ln);const s=ns(i.firestore,ic),o=xA(i.converter,e);return Ev(s,[SA(dv(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Yn.none())])}function OA(i,e,t,...s){i=ns(i,ln);const o=ns(i.firestore,ic),u=dv(o);let h;return h=typeof(e=un(e))=="string"||e instanceof sc?RA(u,"updateDoc",i._key,e,t,s):AA(u,"updateDoc",i._key,e),Ev(o,[h.toMutation(i._key,Yn.exists(!0))])}function Ev(i,e){return function(s,o){const u=new ci;return s.asyncQueue.enqueueAndForget(async()=>tA(await fA(s),o,u)),u.promise}(uv(i),e)}function LA(i,e,t){const s=t.docs.get(e._key),o=new VA(i);return new _v(i,o,e._key,s,new NA(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){_o=o})(go),so(new Ji("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new ic(new EI(s.getProvider("auth-internal")),new SI(h,s.getProvider("app-check-internal")),function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new he(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pa(v.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),li(ag,lg,e),li(ag,lg,"esm2017")})();const MA={apiKey:"AIzaSyAemuOinNs0mcRmyXQ6-EbDqYTvxblvA4M",authDomain:"ramadan-task-manager.firebaseapp.com",projectId:"ramadan-task-manager",storageBucket:"ramadan-task-manager.firebasestorage.app",messagingSenderId:"384680665358",appId:"1:384680665358:web:9c4bd2e360ce9b3219f75f"},Tv=hy(MA),mo=yI(Tv),Ed=vA(Tv),Iv=new wr;var Sv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ey=si.createContext&&si.createContext(Sv),bA=["attr","size","title"];function FA(i,e){if(i==null)return{};var t=UA(i,e),s,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(o=0;o<u.length;o++)s=u[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(t[s]=i[s])}return t}function UA(i,e){if(i==null)return{};var t={};for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){if(e.indexOf(s)>=0)continue;t[s]=i[s]}return t}function ju(){return ju=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},ju.apply(this,arguments)}function ty(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),t.push.apply(t,s)}return t}function zu(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ty(Object(t),!0).forEach(function(s){jA(i,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):ty(Object(t)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(t,s))})}return i}function jA(i,e,t){return e=zA(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function zA(i){var e=BA(i,"string");return typeof e=="symbol"?e:e+""}function BA(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var s=t.call(i,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Av(i){return i&&i.map((e,t)=>si.createElement(e.tag,zu({key:t},e.attr),Av(e.child)))}function $a(i){return e=>si.createElement($A,ju({attr:zu({},i.attr)},e),Av(i.child))}function $A(i){var e=t=>{var{attr:s,size:o,title:u}=i,h=FA(i,bA),m=o||t.size||"1em",y;return t.className&&(y=t.className),i.className&&(y=(y?y+" ":"")+i.className),si.createElement("svg",ju({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,h,{className:y,style:zu(zu({color:i.color||t.color},t.style),i.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),u&&si.createElement("title",null,u),i.children)};return ey!==void 0?si.createElement(ey.Consumer,null,t=>e(t)):e(Sv)}function HA(i){return $a({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(i)}const WA=({user:i})=>{const[e,t]=Mt.useState(!1),[s,o]=Mt.useState(!1),u=()=>{o(!0),t(!1)},h=async()=>{await mo.signOut(),o(!1)},m=()=>{o(!1)},y=async()=>{try{const v=await Wy(mo,Iv);console.log("Sign-in result:",v)}catch(v){console.error("Error signing in with Google:",v),alert(`Error signing in with Google: ${v.message}`)}};return b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"bg-gray-50",children:b.jsxs("nav",{className:"max-w-7xl mx-auto p-4 text-gray-700 flex justify-between items-center",children:[b.jsx("div",{className:"text-xl font-bold text-blue-600",children:"Ramadan Task"}),b.jsx("div",{className:"flex items-center space-x-4",children:i?b.jsxs("div",{className:"relative",children:[b.jsxs("button",{onClick:()=>t(!e),className:"flex items-center space-x-2 focus:outline-none",children:[b.jsx("span",{className:"font-semibold text-[19px] hover:text-green-600",children:i.displayName||"User"}),b.jsx("img",{src:i.photoURL||"https://via.placeholder.com/40",alt:"Profile",className:"w-8 h-8 rounded-full"})]}),e&&b.jsx("div",{className:"absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg",children:b.jsx("button",{onClick:u,className:"block w-full text-left px-4 py-2 hover:bg-gray-200 transition-colors duration-200",children:"Logout"})})]}):b.jsxs("button",{onClick:y,className:"bg-blue-500 text-white p-2 md:px-4 md:py-2 rounded-full md:rounded hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2",children:[b.jsx(HA,{size:24}),b.jsx("span",{className:"hidden md:block font-[600]",children:"Sign in with Google"})]})})]})}),s&&b.jsx("div",{className:"fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:b.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-sm w-full",children:[b.jsx("p",{className:"text-lg mb-4",children:"Are you sure you want to logout?"}),b.jsxs("div",{className:"flex justify-end space-x-2",children:[b.jsx("button",{onClick:h,className:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200",children:"Yes"}),b.jsx("button",{onClick:m,className:"bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200",children:"No"})]})]})})]})},qA=({taskData:i,updateTaskStatus:e})=>b.jsx("div",{className:"space-y-2",children:i.map((t,s)=>b.jsxs("div",{className:"flex items-center",children:[b.jsx("input",{type:"checkbox",checked:t.days[0],onChange:o=>e(s,o.target.checked),className:"mr-2"}),b.jsx("label",{children:t.name})]},s))}),yf=()=>{const i=async()=>{try{await Wy(mo,Iv)}catch(e){console.error("Error signing in with Google:",e)}};return b.jsx("div",{className:"flex justify-center mt-8",children:b.jsxs("button",{onClick:i,className:"bg-blue-500 text-white px-4 py-2 rounded flex items-center",children:[b.jsx("img",{src:"https://img.icons8.com/color/48/000000/google-logo.png",alt:"Google Logo",className:"w-6 h-6 mr-2"}),"Sign in with Google"]})})},KA=({user:i,taskData:e,setTaskData:t})=>{const[s,o]=Mt.useState(!1),[u,h]=Mt.useState(!1),[m,y]=Mt.useState(!0);Mt.useEffect(()=>{i&&(async()=>{const N=vd(Ed,"userRamadanTasks",i.uid),z=await vv(N);if(z.exists())t(z.data().tasks);else{const H=["তাহাজ্জুদ পড়েছি","সাহরী করেছি","৫ ওয়াক্ত সালাত আদায় করেছি","সকাল সন্ধ্যায় জিকির করেছি","কমপক্ষে ৩ সূরা কুরআন তেলাওয়াত করেছি","কমপক্ষে ১০০ বার দুরূদ পড়েছি","কমপক্ষে ১০০ বার ইস্তেগফার পড়েছি","ফরজ সালাত শেষে দোয়া ও জিকির করেছi","চোখের হিফাজত করার চেষ্টা করেছি","প্রোডাক্টিভ ৩টি কাজ করেছি","সুন্নাহ অনুসরণ করে ইফতার করেছি","সালাতে একাগ্রতা ধরে রাখার চেষ্টা করেছি","ঘুমানোর আগে আমল ও মূলক তেলাওয়াত করেছি","তারাবীহ পড়েছি","আয়ানের জবাব দিয়েছি","দোয়া করেছি"].map(X=>({name:X,days:Array.from({length:30},()=>!1)}));await wv(N,{tasks:H}),t(H)}y(!1)})()},[i,t]);const v=async(k,N,z)=>{if(!i){h(!0);return}const H=[...e];H[k].days[N-1]=z;const X=mo.currentUser.uid,W=vd(Ed,"userRamadanTasks",X);await OA(W,{tasks:H}),t(H)},E=()=>b.jsxs("div",{className:"mt-8 mx-4",children:[b.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0",children:[b.jsx("div",{className:"h-8 w-48 bg-gray-200 rounded animate-pulse"}),b.jsx("div",{className:"h-10 w-36 bg-gray-200 rounded-lg animate-pulse"})]}),b.jsx("div",{className:"bg-white rounded-xl shadow-lg overflow-hidden",children:b.jsx("div",{className:"overflow-x-auto",children:b.jsxs("table",{className:"w-full",children:[b.jsx("thead",{className:"bg-gray-50",children:b.jsxs("tr",{children:[b.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 min-w-[300px]",children:b.jsx("div",{className:"h-6 w-48 bg-gray-200 rounded animate-pulse"})}),Array.from({length:30},(k,N)=>b.jsx("th",{className:"px-4 py-3 text-sm font-semibold text-gray-600 text-center border-l border-gray-200",children:b.jsx("div",{className:"h-6 w-12 bg-gray-200 rounded animate-pulse"})},N+1))]})}),b.jsx("tbody",{className:"divide-y divide-gray-200",children:Array.from({length:16},(k,N)=>b.jsxs("tr",{className:"hover:bg-gray-50 transition-colors",children:[b.jsx("td",{className:"px-6 py-4 text-sm font-medium text-gray-900 min-w-[300px]",children:b.jsx("div",{className:"h-6 w-64 bg-gray-200 rounded animate-pulse"})}),Array.from({length:30},(z,H)=>b.jsx("td",{className:"px-4 py-3 text-center border-l border-gray-200 group relative",children:b.jsx("div",{className:"w-8 h-8 bg-gray-200 rounded-lg animate-pulse"})},H))]},N))})]})})})]});return b.jsx("div",{className:"max-w-7xl mx-auto pb-10",children:m?b.jsx(E,{}):b.jsxs("div",{className:"mt-8 mx-4",children:[b.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0",children:[b.jsx("h1",{className:"text-2xl font-bold text-gray-700",children:"Ramadan Tracker"}),b.jsxs("button",{onClick:()=>i?o(!0):h(!0),className:"bg-green-600 hover:bg-green-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md transition-all flex items-center",children:[b.jsx("span",{className:"mr-2",children:"+"})," Add Today's Tasks"]})]}),s&&b.jsx("div",{className:"fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4",children:b.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4",children:[b.jsxs("div",{className:"p-6 border-b border-gray-200 flex justify-between items-center",children:[b.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Today's Tasks"}),b.jsx("button",{onClick:()=>o(!1),className:"text-gray-500 hover:text-gray-700 transition-colors",children:"✕"})]}),b.jsx("div",{className:"p-6",children:b.jsx(qA,{taskData:e,updateTaskStatus:(k,N)=>v(k,1,N)})})]})}),u&&b.jsx("div",{className:"fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4",children:b.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4",children:[b.jsxs("div",{className:"p-6 border-b border-gray-200 flex justify-between items-center",children:[b.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Login Required"}),b.jsx("button",{onClick:()=>h(!1),className:"text-gray-500 hover:text-gray-700 transition-colors",children:"✕"})]}),b.jsxs("div",{className:"p-6",children:[b.jsx("p",{className:"mb-4 text-gray-600",children:"Please log in to manage your tasks."}),b.jsx(yf,{})," "]})]})}),b.jsx("div",{className:"bg-white rounded-xl shadow-lg overflow-hidden ",children:b.jsx("div",{className:"overflow-x-auto",children:b.jsxs("table",{className:"w-full",children:[b.jsx("thead",{className:"bg-gray-50",children:b.jsxs("tr",{children:[b.jsx("th",{className:`px-6 py-4 text-left text-sm font-semibold text-gray-700 min-w-[300px]
                                  md:sticky md:left-0 md:z-10 md:bg-gray-50`,children:"Daily Tasks"}),Array.from({length:30},(k,N)=>b.jsxs("th",{className:"px-4 py-3 text-sm font-semibold text-gray-600 text-center border-l border-gray-200",children:["Day ",N+1]},N+1))]})}),b.jsx("tbody",{className:"divide-y divide-gray-200",children:e.map((k,N)=>b.jsxs("tr",{className:"hover:bg-gray-50 transition-colors",children:[b.jsx("td",{className:`px-6 py-4 text-sm font-medium text-gray-900 min-w-[300px]
                                   md:sticky md:left-0 md:z-10 md:bg-white`,children:k.name}),k.days.map((z,H)=>b.jsx("td",{className:"px-4 py-3 text-center border-l border-gray-200 group relative",children:b.jsx("button",{onClick:()=>i?v(N,H+1,!z):h(!0),className:`w-8 h-8 flex items-center justify-center rounded-lg transition-colors
                              ${z?"bg-green-500 hover:bg-green-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-500"}`,children:z?"✓":""})},H))]},N))})]})})}),e.length===0&&b.jsx("div",{className:"mt-12 text-center py-12 bg-gray-50 rounded-xl",children:b.jsx("p",{className:"text-gray-500",children:"No tasks found. Add your first task!"})})]})})},GA=()=>{const[i,e]=Mt.useState(!1),t=["তাহাজ্জুদ পড়েছি","সাহরী করেছি","৫ ওয়াক্ত সালাত আদায় করেছি","সকাল সন্ধ্যায় জিকির করেছি","কমপক্ষে ৩ সূরা কুরআন তেলাওয়াত করেছি","কমপক্ষে ১০০ বার দুরূদ পড়েছি","কমপক্ষে ১০০ বার ইস্তেগফার পড়েছি","ফরজ সালাত শেষে দোয়া ও জিকির করেছি","চোখের হিফাজত করার চেষ্টা করেছি","প্রোডাক্টিভ ৩টি কাজ করেছি","সুন্নাহ অনুসরণ করে ইফতার করেছি","সালাতে একাগ্রতা ধরে রাখার চেষ্টা করেছি","ঘুমানোর আগে আমল ও মূলক তেলাওয়াত করেছি","তারাবীহ পড়েছি","আয়ানের জবাব দিয়েছি","দোয়া করেছি"];return b.jsxs("div",{className:"mt-8 max-w-7xl mx-auto px-4",children:[b.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8",children:[b.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-4 md:mb-0",children:"Ramadan Tracker"}),b.jsxs("button",{onClick:()=>e(!0),className:"bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-all flex items-center",children:[b.jsx("span",{className:"mr-2",children:"+"})," Add Today's Tasks"]})]}),b.jsx("div",{className:"bg-white rounded-xl shadow-lg overflow-hidden",children:b.jsx("div",{className:"overflow-x-auto",children:b.jsxs("table",{className:"w-full",children:[b.jsx("thead",{className:"bg-gray-50",children:b.jsxs("tr",{children:[b.jsx("th",{className:"sticky left-0 z-10 bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700 min-w-[300px]",children:"Daily Tasks"}),Array.from({length:30},(s,o)=>b.jsxs("th",{className:"px-4 py-3 text-sm font-semibold text-gray-600 text-center border-l border-gray-200",children:["Day ",o+1]},o+1))]})}),b.jsx("tbody",{className:"divide-y divide-gray-200",children:t.map((s,o)=>b.jsxs("tr",{className:"hover:bg-gray-50 transition-colors",children:[b.jsx("td",{className:"sticky left-0 z-10 bg-white px-6 py-4 text-sm font-medium text-gray-900 min-w-[300px]",children:s}),Array.from({length:30},(u,h)=>b.jsx("td",{className:"px-4 py-3 text-center border-l border-gray-200 group relative",children:b.jsx("button",{onClick:()=>e(!0),className:"w-8 h-8 flex items-center justify-center rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-500"})},h))]},o))})]})})}),i&&b.jsx("div",{className:"fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4",children:b.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-lg",children:[b.jsxs("div",{className:"p-6 border-b border-gray-200 flex justify-between items-center",children:[b.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Login Required"}),b.jsx("button",{onClick:()=>e(!1),className:"text-gray-500 hover:text-gray-700 transition-colors",children:"✕"})]}),b.jsxs("div",{className:"p-6",children:[b.jsx("p",{className:"mb-4 text-gray-600",children:"Please log in to manage your tasks."}),b.jsx(yf,{})," "]})]})})]})},QA=["তাহাজ্জুদ পড়েছি","সাহরী করেছি","৫ ওয়াক্ত সালাত আদায় করেছি","সকাল সন্ধ্যায় জিকির করেছি","কমপক্ষে ৩ সূরা কুরআন তেলাওয়াত করেছি","কমপক্ষে ১০০ বার দুরূদ পড়েছি","কমপক্ষе ১০০ বার ইস্তেগফার পড়েছি","ফরজ সালাত শেষে দোয়া ও জিকির করেছি","চোখের হিফাজত করার চেষ্টা করেছি","প্রোডাক্টিভ ৩টি কাজ করেছি","সুন্নাহ অনুসরণ করে ইফতার করেছি","সালাতে একাগ্রতা ধরে রাখার চেষ্টা করেছi","ঘুমানোর আগে আমল ও মূলক তেলাওয়াত করেছি","তারাবীহ পড়েছি","আয়ানের জবাব দিয়েছি","দোয়া করেছি"],XA=()=>{const[i,e]=Mt.useState(null),[t,s]=Mt.useState([]),[o,u]=Mt.useState(""),[h,m]=Mt.useState(""),[y,v]=Mt.useState(!1);Mt.useEffect(()=>{const N=mo.onAuthStateChanged(H=>{e(H),H&&(E(H.uid),v(!1))}),z=setInterval(()=>{const H=new Date,X=H.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0});u(X);const W=H.toLocaleTimeString("bn-BD",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0,timeZone:"Asia/Dhaka"});m(W)},1e3);return()=>{N(),clearInterval(z)}},[]);const E=async N=>{const z=vd(Ed,"userRamadanTasks",N),H=await vv(z);if(H.exists())s(H.data().tasks);else{const X=QA.map(W=>({name:W,days:Array.from({length:30},()=>!1)}));await wv(z,{tasks:X}),s(X)}},k=()=>{const N=new Date,z=N.getDate();return N.toLocaleString("en",{month:"long"}),N.getFullYear(),`${z} `};return b.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-green-50 min-h-screen",children:[b.jsxs("div",{className:"text-center mb-8",children:[b.jsx("h1",{className:"text-[27px] pt-6 font-bold text-green-700",children:"Ramadan Task Manager"}),b.jsxs("p",{className:"text-xl font-semibold text-gray-500 ",children:["Hijri Date: ",` ${k()-1} Ramadan, 1446 AH `]}),b.jsxs("p",{className:"text-lg font-semibold text-blue-500",children:["Time: ",o]})]}),y&&b.jsx("div",{className:"fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4",children:b.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-lg",children:[b.jsxs("div",{className:"p-6 border-b border-gray-200 flex justify-between items-center",children:[b.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Login Required"}),b.jsx("button",{onClick:()=>v(!1),className:"text-gray-500 hover:text-gray-700 transition-colors",children:"✕"})]}),b.jsxs("div",{className:"p-6",children:[b.jsx("p",{className:"mb-4 text-gray-600",children:"Please log in to manage your tasks."}),b.jsx(yf,{})," "]})]})}),i?b.jsx(KA,{user:i,taskData:t,setTaskData:s,showLoginPopup:()=>v(!0)}):b.jsx(GA,{user:i,taskData:t,setTaskData:s,showLoginPopup:()=>v(!0)})]})};function YA(i){return $a({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(i)}function JA(i){return $a({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(i)}function ZA(i){return $a({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(i)}function eR(i){return $a({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(i)}const tR=()=>b.jsx("footer",{className:"bg-gray-100 text-gray-800 py-10 ",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10 w-full",children:[b.jsxs("div",{className:"space-y-4",children:[b.jsx("h3",{className:"text-lg font-semibold text-green-700",children:"Md Rijoan Maruf"}),b.jsx("p",{className:"text-sm font-[500]",children:"A Task Manager website for Ramadan Amal."}),b.jsx("p",{className:"text-sm font-[500]",children:"© 2024 Md Rijoan Maruf. All rights reserved."})]}),b.jsxs("div",{className:"space-y-4",children:[b.jsx("h3",{className:"text-lg font-semibold text-green-700",children:"Follow me"}),b.jsxs("div",{className:"flex space-x-6",children:[b.jsx("a",{href:"https://github.com/mdrijoanmaruf","aria-label":"GitHub",className:"hover:text-gray-400 transition",children:b.jsx(JA,{className:"w-6 h-6"})}),b.jsx("a",{href:"https://www.linkedin.com/in/mdrijoanmaruf/","aria-label":"LinkedIn",className:"hover:text-gray-400 transition",children:b.jsx(eR,{className:"w-6 h-6"})}),b.jsx("a",{href:"https://www.facebook.com/md.rijoanmaruf","aria-label":"Facebook",className:"hover:text-gray-400 transition",children:b.jsx(YA,{className:"w-6 h-6"})}),b.jsx("a",{href:"https://www.instagram.com/rijoanmaruf/","aria-label":"Instagram",className:"hover:text-gray-400 transition",children:b.jsx(ZA,{className:"w-6 h-6"})})]})]}),b.jsxs("div",{className:"space-y-4",children:[b.jsx("h3",{className:"text-lg font-semibold text-green-700",children:"Contact me"}),b.jsx("p",{className:"text-sm font-[500]",children:"Email: rijoanmaruf@gamil.com"}),b.jsx("p",{className:"text-sm font-[500]",children:"Phone: Not Available"}),b.jsx("p",{className:"text-sm font-[500]",children:"Address: Road-7, Block-C, Bahundhara-R/A , Dhaka"})]})]}),b.jsxs("div",{className:"mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",children:[b.jsxs("p",{className:"text-sm font-semibold",children:["Developed by ",b.jsx("span",{className:"font-bold",children:b.jsx("a",{href:"https://rijoan.com",className:"hover:underline text-green-700",children:"Md Rijoan Maruf"})})]}),b.jsx("div",{children:b.jsx("p",{className:"text-sm font-[500]",children:"Project built with React , TailwindCSS & Firebase"})})]})]})}),nR=()=>{const[i,e]=Mt.useState(null);return Mt.useEffect(()=>{const t=mo.onAuthStateChanged(s=>{e(s)});return()=>t()},[]),b.jsxs("div",{className:"",children:[b.jsx(WA,{user:i}),b.jsx(XA,{user:i}),b.jsx(tR,{})]})};F0.createRoot(document.getElementById("root")).render(b.jsx(si.StrictMode,{children:b.jsx(nR,{})}));
