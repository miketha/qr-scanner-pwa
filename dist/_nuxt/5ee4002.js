(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{291:function(t,e,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("f437a756",content,!0,{sourceMap:!1})},344:function(t,e,n){"use strict";n(291)},345:function(t,e,n){var o=n(104)((function(i){return i[1]}));o.push([t.i,"a[data-v-6bfef2db]{color:#fff}button[data-v-6bfef2db]{margin-top:20px;background-color:#1a8f99}",""]),o.locals={},t.exports=o},351:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("dab97468",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n.r(e);n(27),n(186),n(106);var o=n(1),r=n(374),l={__name:"Scanner",setup:function(t){var e=Object(o.b)(""),n=Object(o.b)(""),l=Object(o.b)(!1);return{__sfc:!0,decodedText:e,url:n,isValid:l,onLoaded:function(){},onDecode:function(text){e.value=text;try{6===text&&new RegExp("^[0-9A-Fa-f]{6}$").test(text)?(n.value="https://senz-v2-prerelease-preview.lifebooster.ca/".concat(text),l.value=!0):(console.log("invalid set ID"),l.value=!1)}catch(t){console.log("Something went wrong")}},clicked:function(){console.log("button clicked")},StreamBarcodeReader:r.a}}},c=(n(344),n(42)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("span",[n.isValid||""===n.decodedText?t._e():e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800",attrs:{role:"alert"}},[e("svg",{staticClass:"flex-shrink-0 inline w-5 h-5 mr-3",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Info")]),t._v(" "),t._m(0)]),t._v(" "),e(n.StreamBarcodeReader,{on:{decode:n.onDecode,loaded:n.onLoaded}}),t._v(" "),e("div",{staticClass:"flex space-x-2 justify-center"},[e("button",{staticClass:"inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-100 ease-in-out",attrs:{type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light"}},[t._v("\n      Start Assessment\n      "),""!==n.url?e("a",{attrs:{href:"".concat(n.url)}}):t._e()])])],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",{staticClass:"font-medium"},[t._v("Set ID Unrecognized!")]),t._v(" Check the set ID and try again.\n    ")])}],!1,null,"6bfef2db",null);e.default=component.exports},377:function(t,e,n){t.exports=n.p+"img/lb-logo-dark.94061eb.png"},378:function(t,e,n){"use strict";n(351)},379:function(t,e,n){var o=n(104)((function(i){return i[1]}));o.push([t.i,"img[data-v-0bd4f70a]{margin:20px}",""]),o.locals={},t.exports=o},386:function(t,e,n){"use strict";n.r(e);var o={name:"IndexPage"},r=(n(378),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("span",[e("img",{attrs:{alt:"Vue logo",src:n(377)}}),t._v(" "),e("div",{staticClass:"px-6 py-4"},[e("div",{staticClass:"text-xl mb-2"},[t._v("SetID QR Code Scanner")]),t._v(" "),e("Scanner")],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex px-6 pt-4 pb-2 justify-center"},[e("span",{staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},[t._v("#LiveLaughLifebooster")]),t._v(" "),e("span",{staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},[t._v("#RiskAssessments")]),t._v(" "),e("span",{staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},[t._v("#RiskAnalytics")])])}],!1,null,"0bd4f70a",null);e.default=component.exports;installComponents(component,{Scanner:n(376).default})}}]);