import{jsx as t}from"react/jsx-runtime";import{useState as e,Component as r}from"react";var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)};var o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)};var i,a={exports:{}};i=a,function(t){var e=/^\s+/,r=/\s+$/,n=0,o=t.round,a=t.min,s=t.max,f=t.random;function l(i,f){if(f=f||{},(i=i||"")instanceof l)return i;if(!(this instanceof l))return new l(i,f);var c=function(n){var o,i,f,l={r:0,g:0,b:0},c=1,u=null,h=null,d=null,p=!1,g=!1;return"string"==typeof n&&(n=function(t){t=t.replace(e,"").replace(r,"").toLowerCase();var n,o=!1;if(H[t])t=H[t],o=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(n=z.rgb.exec(t))?{r:n[1],g:n[2],b:n[3]}:(n=z.rgba.exec(t))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=z.hsl.exec(t))?{h:n[1],s:n[2],l:n[3]}:(n=z.hsla.exec(t))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=z.hsv.exec(t))?{h:n[1],s:n[2],v:n[3]}:(n=z.hsva.exec(t))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=z.hex8.exec(t))?{r:M(n[1]),g:M(n[2]),b:M(n[3]),a:I(n[4]),format:o?"name":"hex8"}:(n=z.hex6.exec(t))?{r:M(n[1]),g:M(n[2]),b:M(n[3]),format:o?"name":"hex"}:(n=z.hex4.exec(t))?{r:M(n[1]+""+n[1]),g:M(n[2]+""+n[2]),b:M(n[3]+""+n[3]),a:I(n[4]+""+n[4]),format:o?"name":"hex8"}:!!(n=z.hex3.exec(t))&&{r:M(n[1]+""+n[1]),g:M(n[2]+""+n[2]),b:M(n[3]+""+n[3]),format:o?"name":"hex"}}(n)),"object"==typeof n&&($(n.r)&&$(n.g)&&$(n.b)?(o=n.r,i=n.g,f=n.b,l={r:255*F(o,255),g:255*F(i,255),b:255*F(f,255)},p=!0,g="%"===String(n.r).substr(-1)?"prgb":"rgb"):$(n.h)&&$(n.s)&&$(n.v)?(u=P(n.s),h=P(n.v),l=function(e,r,n){e=6*F(e,360),r=F(r,100),n=F(n,100);var o=t.floor(e),i=e-o,a=n*(1-r),s=n*(1-i*r),f=n*(1-(1-i)*r),l=o%6;return{r:255*[n,s,a,a,f,n][l],g:255*[f,n,n,s,a,a][l],b:255*[a,a,f,n,n,s][l]}}(n.h,u,h),p=!0,g="hsv"):$(n.h)&&$(n.s)&&$(n.l)&&(u=P(n.s),d=P(n.l),l=function(t,e,r){var n,o,i;function a(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=F(t,360),e=F(e,100),r=F(r,100),0===e)n=o=i=r;else{var s=r<.5?r*(1+e):r+e-r*e,f=2*r-s;n=a(f,s,t+1/3),o=a(f,s,t),i=a(f,s,t-1/3)}return{r:255*n,g:255*o,b:255*i}}(n.h,u,d),p=!0,g="hsl"),n.hasOwnProperty("a")&&(c=n.a)),c=C(c),{ok:p,format:n.format||g,r:a(255,s(l.r,0)),g:a(255,s(l.g,0)),b:a(255,s(l.b,0)),a:c}}(i);this._originalInput=i,this._r=c.r,this._g=c.g,this._b=c.b,this._a=c.a,this._roundA=o(100*this._a)/100,this._format=f.format||c.format,this._gradientType=f.gradientType,this._r<1&&(this._r=o(this._r)),this._g<1&&(this._g=o(this._g)),this._b<1&&(this._b=o(this._b)),this._ok=c.ok,this._tc_id=n++}function c(t,e,r){t=F(t,255),e=F(e,255),r=F(r,255);var n,o,i=s(t,e,r),f=a(t,e,r),l=(i+f)/2;if(i==f)n=o=0;else{var c=i-f;switch(o=l>.5?c/(2-i-f):c/(i+f),i){case t:n=(e-r)/c+(e<r?6:0);break;case e:n=(r-t)/c+2;break;case r:n=(t-e)/c+4}n/=6}return{h:n,s:o,l:l}}function u(t,e,r){t=F(t,255),e=F(e,255),r=F(r,255);var n,o,i=s(t,e,r),f=a(t,e,r),l=i,c=i-f;if(o=0===i?0:c/i,i==f)n=0;else{switch(i){case t:n=(e-r)/c+(e<r?6:0);break;case e:n=(r-t)/c+2;break;case r:n=(t-e)/c+4}n/=6}return{h:n,s:o,v:l}}function h(t,e,r,n){var i=[E(o(t).toString(16)),E(o(e).toString(16)),E(o(r).toString(16))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function d(t,e,r,n){return[E(T(n)),E(o(t).toString(16)),E(o(e).toString(16)),E(o(r).toString(16))].join("")}function p(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.s-=e/100,r.s=O(r.s),l(r)}function g(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.s+=e/100,r.s=O(r.s),l(r)}function b(t){return l(t).desaturate(100)}function _(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.l+=e/100,r.l=O(r.l),l(r)}function m(t,e){e=0===e?0:e||10;var r=l(t).toRgb();return r.r=s(0,a(255,r.r-o(-e/100*255))),r.g=s(0,a(255,r.g-o(-e/100*255))),r.b=s(0,a(255,r.b-o(-e/100*255))),l(r)}function v(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.l-=e/100,r.l=O(r.l),l(r)}function y(t,e){var r=l(t).toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,l(r)}function x(t){var e=l(t).toHsl();return e.h=(e.h+180)%360,l(e)}function w(t){var e=l(t).toHsl(),r=e.h;return[l(t),l({h:(r+120)%360,s:e.s,l:e.l}),l({h:(r+240)%360,s:e.s,l:e.l})]}function A(t){var e=l(t).toHsl(),r=e.h;return[l(t),l({h:(r+90)%360,s:e.s,l:e.l}),l({h:(r+180)%360,s:e.s,l:e.l}),l({h:(r+270)%360,s:e.s,l:e.l})]}function k(t){var e=l(t).toHsl(),r=e.h;return[l(t),l({h:(r+72)%360,s:e.s,l:e.l}),l({h:(r+216)%360,s:e.s,l:e.l})]}function j(t,e,r){e=e||6,r=r||30;var n=l(t).toHsl(),o=360/r,i=[l(t)];for(n.h=(n.h-(o*e>>1)+720)%360;--e;)n.h=(n.h+o)%360,i.push(l(n));return i}function S(t,e){e=e||6;for(var r=l(t).toHsv(),n=r.h,o=r.s,i=r.v,a=[],s=1/e;e--;)a.push(l({h:n,s:o,v:i})),i=(i+s)%1;return a}l.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var e,r,n,o=this.toRgb();return e=o.r/255,r=o.g/255,n=o.b/255,.2126*(e<=.03928?e/12.92:t.pow((e+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:t.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:t.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=C(t),this._roundA=o(100*this._a)/100,this},toHsv:function(){var t=u(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=u(this._r,this._g,this._b),e=o(360*t.h),r=o(100*t.s),n=o(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=c(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=c(this._r,this._g,this._b),e=o(360*t.h),r=o(100*t.s),n=o(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+n+"%)":"hsla("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return h(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,r,n,i){var a=[E(o(t).toString(16)),E(o(e).toString(16)),E(o(r).toString(16)),E(T(n))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:o(this._r),g:o(this._g),b:o(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+o(this._r)+", "+o(this._g)+", "+o(this._b)+")":"rgba("+o(this._r)+", "+o(this._g)+", "+o(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:o(100*F(this._r,255))+"%",g:o(100*F(this._g,255))+"%",b:o(100*F(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+o(100*F(this._r,255))+"%, "+o(100*F(this._g,255))+"%, "+o(100*F(this._b,255))+"%)":"rgba("+o(100*F(this._r,255))+"%, "+o(100*F(this._g,255))+"%, "+o(100*F(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(R[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+d(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var o=l(t);r="#"+d(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0;return e||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return l(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(_,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(v,arguments)},desaturate:function(){return this._applyModification(p,arguments)},saturate:function(){return this._applyModification(g,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(y,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(j,arguments)},complement:function(){return this._applyCombination(x,arguments)},monochromatic:function(){return this._applyCombination(S,arguments)},splitcomplement:function(){return this._applyCombination(k,arguments)},triad:function(){return this._applyCombination(w,arguments)},tetrad:function(){return this._applyCombination(A,arguments)}},l.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]="a"===n?t[n]:P(t[n]));t=r}return l(t,e)},l.equals=function(t,e){return!(!t||!e)&&l(t).toRgbString()==l(e).toRgbString()},l.random=function(){return l.fromRatio({r:f(),g:f(),b:f()})},l.mix=function(t,e,r){r=0===r?0:r||50;var n=l(t).toRgb(),o=l(e).toRgb(),i=r/100;return l({r:(o.r-n.r)*i+n.r,g:(o.g-n.g)*i+n.g,b:(o.b-n.b)*i+n.b,a:(o.a-n.a)*i+n.a})},l.readability=function(e,r){var n=l(e),o=l(r);return(t.max(n.getLuminance(),o.getLuminance())+.05)/(t.min(n.getLuminance(),o.getLuminance())+.05)},l.isReadable=function(t,e,r){var n,o,i,a,s,f=l.readability(t,e);switch(o=!1,(i=r,a=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(i.size||"small").toLowerCase(),"AA"!==a&&"AAA"!==a&&(a="AA"),"small"!==s&&"large"!==s&&(s="small"),n={level:a,size:s}).level+n.size){case"AAsmall":case"AAAlarge":o=f>=4.5;break;case"AAlarge":o=f>=3;break;case"AAAsmall":o=f>=7}return o},l.mostReadable=function(t,e,r){var n,o,i,a,s=null,f=0;o=(r=r||{}).includeFallbackColors,i=r.level,a=r.size;for(var c=0;c<e.length;c++)(n=l.readability(t,e[c]))>f&&(f=n,s=l(e[c]));return l.isReadable(t,s,{level:i,size:a})||!o?s:(r.includeFallbackColors=!1,l.mostReadable(t,["#fff","#000"],r))};var H=l.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},R=l.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(H);function C(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function F(e,r){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(e)&&(e="100%");var n=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(e);return e=a(r,s(0,parseFloat(e))),n&&(e=parseInt(e*r,10)/100),t.abs(e-r)<1e-6?1:e%r/parseFloat(r)}function O(t){return a(1,s(0,t))}function M(t){return parseInt(t,16)}function E(t){return 1==t.length?"0"+t:""+t}function P(t){return t<=1&&(t=100*t+"%"),t}function T(e){return t.round(255*parseFloat(e)).toString(16)}function I(t){return M(t)/255}var N,q,L,z=(q="[\\s|\\(]+("+(N="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+N+")[,|\\s]+("+N+")\\s*\\)?",L="[\\s|\\(]+("+N+")[,|\\s]+("+N+")[,|\\s]+("+N+")[,|\\s]+("+N+")\\s*\\)?",{CSS_UNIT:new RegExp(N),rgb:new RegExp("rgb"+q),rgba:new RegExp("rgba"+L),hsl:new RegExp("hsl"+q),hsla:new RegExp("hsla"+L),hsv:new RegExp("hsv"+q),hsva:new RegExp("hsva"+L),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function $(t){return!!z.CSS_UNIT.exec(t)}i.exports?i.exports=l:window.tinycolor=l}(Math);var s=a.exports;function f(r){var n=r.children,i=r.color,a=void 0===i?"jblue":i,f=r.copy,l=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(r,["children","color","copy"]),c=e(0),u=c[0],h=c[1],d=e(0),p=d[0],g=d[1],b=s({jblue:"#1a2df3",jred:"#df2626",jyellow:"#fcc33a",jgreen:"#10c738",jpurple:"#9e0ff1"}[a]||a);return t("button",o({onMouseEnter:function(t){return h(1)},onMouseLeave:function(t){return h(0)},onMouseDown:function(t){return g(1)},onMouseUp:function(t){return g(0)},onClick:function(){return f?window.navigator.clipboard.writeText(f):function(){}},style:o({backgroundColor:b.lighten(10*u+7*p).toString()},{color:"#fff",borderWidth:0,borderRadius:4,padding:"7px 11px",boxShadow:"1px 2px 3px 0px rgb(144, 144, 144, 46%)",transition:"background-color .2s",fontWeight:600})},l,{children:n}))}!function(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(".jcomponents__button{background-color:#e9e9e9;border:1.1px solid #000;border-radius:3px;cursor:pointer;padding:5px 10px;position:relative;top:0;transition:top;transition-duration:.1s;user-select:none}.jcomponents__button:hover{filter:brightness(.85) saturate(1.4);outline:2.1px solid #111;outline-offset:-2px}.jcomponents__button:active{border-radius:2px;filter:brightness(.8) saturate(1.4);top:1.1px}.jcomponents__button:disabled{outline:none}.jcomponents__button.jred{background-color:#ff8f8f}.jcomponents__button.jyellow{background-color:#ffd472}.jcomponents__button.jgreen{background-color:#90ee90}.jcomponents__button.jblue{background-color:#aed8fc}.jcomponents__button__icon{height:40px;max-width:100px}.jcomponents__button__puffy{background-color:#1a2df3;border-radius:4px;border-width:0;box-shadow:1px 2px 3px 0 hsla(0,0%,56%,.46);color:#fff;font-weight:600;padding:7px 11px;transition:background-color .3s}.jcomponents__button__puffy:hover{background-color:#0f63ff}.jcomponents__button__puffy:active{background-color:#2469ff}.jcomponents__button__puffy:disabled{background-color:hsla(0,0%,56%,.37)}");var l=["jred","jyellow","jgreen","jblue"],c=function(e){function r(t){return e.call(this,t)||this}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(r,e),r.prototype.render=function(){var e,n,i=this,a=(n=!1,function t(e){var o,i;e instanceof Array?e.forEach(t):((null===(o=null==e?void 0:e.props)||void 0===o?void 0:o.className)===r.Icon&&(n=!0),(null===(i=null==e?void 0:e.props)||void 0===i?void 0:i.children)&&t(e.props.children))}(i.props.children),n),s=this.props.color&&l.includes(this.props.color.toLowerCase()),f=s?{}:{backgroundColor:this.props.color};switch(a&&(f.display="inline-flex",f.alignItems="center",f.cursor="pointer",f.gap=10),this.props.size){case"small":f.padding="0px 3px",f.fontSize="0.8em";break;case"normal":default:f.padding="2px 7px";break;case"large":f.padding="5px 10px"}return t("button",o({},this.props,{style:o(o({},null===(e=this.props)||void 0===e?void 0:e.style),f),className:s?"jcomponents__button ".concat(this.props.color):"jcomponents__button",onClick:function(t){var e,r;i.props.copy&&window.navigator.clipboard.writeText(i.props.copy),null===(r=(e=i.props).onClick)||void 0===r||r.call(e,t)}},{children:this.props.children}))},r.Icon="jcomponents__button__icon",r.Puffy=f,r}(r);export{c as default};
