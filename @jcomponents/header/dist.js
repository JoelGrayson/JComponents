"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t,r=e(require("react")),n={exports:{}};t=n,function(e){var r=/^\s+/,n=/\s+$/,a=0,i=e.round,s=e.min,o=e.max,f=e.random;function h(t,f){if(f=f||{},(t=t||"")instanceof h)return t;if(!(this instanceof h))return new h(t,f);var l=function(t){var a,i,f,h={r:0,g:0,b:0},l=1,c=null,u=null,d=null,g=!1,b=!1;return"string"==typeof t&&(t=function(e){e=e.replace(r,"").replace(n,"").toLowerCase();var t,a=!1;if(R[e])e=R[e],a=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=P.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=P.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=P.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=P.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=P.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=P.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=P.hex8.exec(e))?{r:E(t[1]),g:E(t[2]),b:E(t[3]),a:I(t[4]),format:a?"name":"hex8"}:(t=P.hex6.exec(e))?{r:E(t[1]),g:E(t[2]),b:E(t[3]),format:a?"name":"hex"}:(t=P.hex4.exec(e))?{r:E(t[1]+""+t[1]),g:E(t[2]+""+t[2]),b:E(t[3]+""+t[3]),a:I(t[4]+""+t[4]),format:a?"name":"hex8"}:!!(t=P.hex3.exec(e))&&{r:E(t[1]+""+t[1]),g:E(t[2]+""+t[2]),b:E(t[3]+""+t[3]),format:a?"name":"hex"}}(t)),"object"==typeof t&&($(t.r)&&$(t.g)&&$(t.b)?(a=t.r,i=t.g,f=t.b,h={r:255*j(a,255),g:255*j(i,255),b:255*j(f,255)},g=!0,b="%"===String(t.r).substr(-1)?"prgb":"rgb"):$(t.h)&&$(t.s)&&$(t.v)?(c=N(t.s),u=N(t.v),h=function(t,r,n){t=6*j(t,360),r=j(r,100),n=j(n,100);var a=e.floor(t),i=t-a,s=n*(1-r),o=n*(1-i*r),f=n*(1-(1-i)*r),h=a%6;return{r:255*[n,o,s,s,f,n][h],g:255*[f,n,n,o,s,s][h],b:255*[s,s,f,n,n,o][h]}}(t.h,c,u),g=!0,b="hsv"):$(t.h)&&$(t.s)&&$(t.l)&&(c=N(t.s),d=N(t.l),h=function(e,t,r){var n,a,i;function s(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=j(e,360),t=j(t,100),r=j(r,100),0===t)n=a=i=r;else{var o=r<.5?r*(1+t):r+t-r*t,f=2*r-o;n=s(f,o,e+1/3),a=s(f,o,e),i=s(f,o,e-1/3)}return{r:255*n,g:255*a,b:255*i}}(t.h,c,d),g=!0,b="hsl"),t.hasOwnProperty("a")&&(l=t.a)),l=C(l),{ok:g,format:t.format||b,r:s(255,o(h.r,0)),g:s(255,o(h.g,0)),b:s(255,o(h.b,0)),a:l}}(t);this._originalInput=t,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=i(100*this._a)/100,this._format=f.format||l.format,this._gradientType=f.gradientType,this._r<1&&(this._r=i(this._r)),this._g<1&&(this._g=i(this._g)),this._b<1&&(this._b=i(this._b)),this._ok=l.ok,this._tc_id=a++}function l(e,t,r){e=j(e,255),t=j(t,255),r=j(r,255);var n,a,i=o(e,t,r),f=s(e,t,r),h=(i+f)/2;if(i==f)n=a=0;else{var l=i-f;switch(a=h>.5?l/(2-i-f):l/(i+f),i){case e:n=(t-r)/l+(t<r?6:0);break;case t:n=(r-e)/l+2;break;case r:n=(e-t)/l+4}n/=6}return{h:n,s:a,l:h}}function c(e,t,r){e=j(e,255),t=j(t,255),r=j(r,255);var n,a,i=o(e,t,r),f=s(e,t,r),h=i,l=i-f;if(a=0===i?0:l/i,i==f)n=0;else{switch(i){case e:n=(t-r)/l+(t<r?6:0);break;case t:n=(r-e)/l+2;break;case r:n=(e-t)/l+4}n/=6}return{h:n,s:a,v:h}}function u(e,t,r,n){var a=[M(i(e).toString(16)),M(i(t).toString(16)),M(i(r).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function d(e,t,r,n){return[M(T(n)),M(i(e).toString(16)),M(i(t).toString(16)),M(i(r).toString(16))].join("")}function g(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.s-=t/100,r.s=q(r.s),h(r)}function b(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.s+=t/100,r.s=q(r.s),h(r)}function p(e){return h(e).desaturate(100)}function m(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.l+=t/100,r.l=q(r.l),h(r)}function _(e,t){t=0===t?0:t||10;var r=h(e).toRgb();return r.r=o(0,s(255,r.r-i(-t/100*255))),r.g=o(0,s(255,r.g-i(-t/100*255))),r.b=o(0,s(255,r.b-i(-t/100*255))),h(r)}function v(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.l-=t/100,r.l=q(r.l),h(r)}function y(e,t){var r=h(e).toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,h(r)}function x(e){var t=h(e).toHsl();return t.h=(t.h+180)%360,h(t)}function A(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+120)%360,s:t.s,l:t.l}),h({h:(r+240)%360,s:t.s,l:t.l})]}function k(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+90)%360,s:t.s,l:t.l}),h({h:(r+180)%360,s:t.s,l:t.l}),h({h:(r+270)%360,s:t.s,l:t.l})]}function w(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+72)%360,s:t.s,l:t.l}),h({h:(r+216)%360,s:t.s,l:t.l})]}function S(e,t,r){t=t||6,r=r||30;var n=h(e).toHsl(),a=360/r,i=[h(e)];for(n.h=(n.h-(a*t>>1)+720)%360;--t;)n.h=(n.h+a)%360,i.push(h(n));return i}function H(e,t){t=t||6;for(var r=h(e).toHsv(),n=r.h,a=r.s,i=r.v,s=[],o=1/t;t--;)s.push(h({h:n,s:a,v:i})),i=(i+o)%1;return s}h.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var t,r,n,a=this.toRgb();return t=a.r/255,r=a.g/255,n=a.b/255,.2126*(t<=.03928?t/12.92:e.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:e.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:e.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=C(e),this._roundA=i(100*this._a)/100,this},toHsv:function(){var e=c(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=c(this._r,this._g,this._b),t=i(360*e.h),r=i(100*e.s),n=i(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=l(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=l(this._r,this._g,this._b),t=i(360*e.h),r=i(100*e.s),n=i(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return u(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,n,a){var s=[M(i(e).toString(16)),M(i(t).toString(16)),M(i(r).toString(16)),M(T(n))];return a&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)&&s[3].charAt(0)==s[3].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:i(this._r),g:i(this._g),b:i(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+i(this._r)+", "+i(this._g)+", "+i(this._b)+")":"rgba("+i(this._r)+", "+i(this._g)+", "+i(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:i(100*j(this._r,255))+"%",g:i(100*j(this._g,255))+"%",b:i(100*j(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+i(100*j(this._r,255))+"%, "+i(100*j(this._g,255))+"%, "+i(100*j(this._b,255))+"%)":"rgba("+i(100*j(this._r,255))+"%, "+i(100*j(this._g,255))+"%, "+i(100*j(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(F[u(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+d(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var a=h(e);r="#"+d(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return h(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(m,arguments)},brighten:function(){return this._applyModification(_,arguments)},darken:function(){return this._applyModification(v,arguments)},desaturate:function(){return this._applyModification(g,arguments)},saturate:function(){return this._applyModification(b,arguments)},greyscale:function(){return this._applyModification(p,arguments)},spin:function(){return this._applyModification(y,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(S,arguments)},complement:function(){return this._applyCombination(x,arguments)},monochromatic:function(){return this._applyCombination(H,arguments)},splitcomplement:function(){return this._applyCombination(w,arguments)},triad:function(){return this._applyCombination(A,arguments)},tetrad:function(){return this._applyCombination(k,arguments)}},h.fromRatio=function(e,t){if("object"==typeof e){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]="a"===n?e[n]:N(e[n]));e=r}return h(e,t)},h.equals=function(e,t){return!(!e||!t)&&h(e).toRgbString()==h(t).toRgbString()},h.random=function(){return h.fromRatio({r:f(),g:f(),b:f()})},h.mix=function(e,t,r){r=0===r?0:r||50;var n=h(e).toRgb(),a=h(t).toRgb(),i=r/100;return h({r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a})},h.readability=function(t,r){var n=h(t),a=h(r);return(e.max(n.getLuminance(),a.getLuminance())+.05)/(e.min(n.getLuminance(),a.getLuminance())+.05)},h.isReadable=function(e,t,r){var n,a,i,s,o,f=h.readability(e,t);switch(a=!1,(i=r,s=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase(),o=(i.size||"small").toLowerCase(),"AA"!==s&&"AAA"!==s&&(s="AA"),"small"!==o&&"large"!==o&&(o="small"),n={level:s,size:o}).level+n.size){case"AAsmall":case"AAAlarge":a=f>=4.5;break;case"AAlarge":a=f>=3;break;case"AAAsmall":a=f>=7}return a},h.mostReadable=function(e,t,r){var n,a,i,s,o=null,f=0;a=(r=r||{}).includeFallbackColors,i=r.level,s=r.size;for(var l=0;l<t.length;l++)(n=h.readability(e,t[l]))>f&&(f=n,o=h(t[l]));return h.isReadable(e,o,{level:i,size:s})||!a?o:(r.includeFallbackColors=!1,h.mostReadable(e,["#fff","#000"],r))};var R=h.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},F=h.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(R);function C(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function j(t,r){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(t)&&(t="100%");var n=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(t);return t=s(r,o(0,parseFloat(t))),n&&(t=parseInt(t*r,10)/100),e.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function q(e){return s(1,o(0,e))}function E(e){return parseInt(e,16)}function M(e){return 1==e.length?"0"+e:""+e}function N(e){return e<=1&&(e=100*e+"%"),e}function T(t){return e.round(255*parseFloat(t)).toString(16)}function I(e){return E(e)/255}var L,z,O,P=(z="[\\s|\\(]+("+(L="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",O="[\\s|\\(]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",{CSS_UNIT:new RegExp(L),rgb:new RegExp("rgb"+z),rgba:new RegExp("rgba"+O),hsl:new RegExp("hsl"+z),hsla:new RegExp("hsla"+O),hsv:new RegExp("hsv"+z),hsva:new RegExp("hsva"+O),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function $(e){return!!P.CSS_UNIT.exec(e)}t.exports?t.exports=h:window.tinycolor=h}(Math);var a=n.exports;!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("header.jcomponents-header{align-items:center;border-bottom:1px solid #8f8f8f;display:flex;height:100px;justify-content:center;width:100%}header.jcomponents-header>div{align-items:center;display:flex;justify-content:space-between;width:calc(100% - 70px)}header.jcomponents-header>div>:first-child,header.jcomponents-header>div>:last-child{display:flex;flex-direction:row;gap:3px}header.jcomponents-header>div>:first-child{justify-content:left}header.jcomponents-header>div>:last-child{justify-content:right}"),exports.default=function({maxWidth:e=800,color:t,...n}){let i,s;if(t&&"string"!=typeof t)Array.isArray(t)&&(i=t.from,s=t.to);else{const e=a(t||"#a1c7ef");i=e.toString(),s=e.lighten(8).toString()}return r.default.createElement("header",{className:"jcomponents-header",style:{backgroundImage:`linear-gradient(0, ${i}, ${s})`}},r.default.createElement("div",{style:{maxWidth:e}},n.children))};
