(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{291:function(e,t,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(105).default)("dde6aac8",content,!0,{sourceMap:!1})},344:function(e,t,n){"use strict";n(291)},345:function(e,t,n){var o=n(104)((function(i){return i[1]}));o.push([e.i,"a[data-v-5db11120]{color:#fff}button[data-v-5db11120]{margin-top:20px;background-color:#1a8f99}",""]),o.locals={},e.exports=o},376:function(e,t,n){"use strict";n.r(t);n(27),n(186),n(106);var o=n(1),r=n(374),d={__name:"Scanner",setup:function(e){var t=Object(o.b)(""),n=Object(o.b)(""),d=Object(o.b)(!1);return{__sfc:!0,decodedText:t,url:n,isValid:d,onLoaded:function(){},onDecode:function(text){try{var e=text.split("x")[1];t.value=e,6===e.length&&new RegExp("[0-9A-Fa-f]{6}$").test(e)?(n.value="https://senz-v2-prerelease-preview.lifebooster.ca/start-assessment?setID=".concat(e),d.value=!0):(console.log("invalid set ID"),d.value=!1)}catch(e){console.log("Something went wrong"),d.value=!1}},StreamBarcodeReader:r.a}}},l=(n(344),n(42)),component=Object(l.a)(d,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("span",[n.isValid||""===n.decodedText?e._e():t("div",{staticClass:"flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800",attrs:{role:"alert"}},[t("svg",{staticClass:"flex-shrink-0 inline w-5 h-5 mr-3",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"}})]),e._v(" "),t("span",{staticClass:"sr-only"},[e._v("Info")]),e._v(" "),e._m(0)]),e._v(" "),t(n.StreamBarcodeReader,{on:{decode:n.onDecode,loaded:n.onLoaded}}),e._v(" "),t("div",{staticClass:"flex space-x-2 justify-center"},[""!==n.url?t("a",{attrs:{href:"".concat(n.url),target:"_blank"}},[t("button",{staticClass:"inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-100 ease-in-out",attrs:{type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light"}},[e._v("\n        "+e._s("Start Assessment on set ".concat(n.decodedText))+"\n      ")])]):e._e()])],1)}),[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("span",{staticClass:"font-medium"},[e._v("Set ID Unrecognized!")]),e._v(" Check the set ID and try again.\n    ")])}],!1,null,"5db11120",null);t.default=component.exports}}]);