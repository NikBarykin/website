(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{216:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"oatpp-mbedtls"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oatpp-mbedtls","aria-hidden":"true"}},[t._v("#")]),t._v(" oatpp-mbedtls "),r("seo")],1),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/oatpp/oatpp-mbedtls",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Repository"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("oatpp-mbedtls")]),t._v(" - extension of "),r("router-link",{attrs:{to:"/docs/modules/oatpp/"}},[t._v("oatpp")]),t._v(" module."),r("br"),t._v("\nIt provides secure server and client connection providers for oatpp applications. Based on "),r("a",{attrs:{href:"https://tls.mbed.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MbedTLS"),r("OutboundLink")],1),t._v("."),r("br"),t._v('\nSupports both "Simple" and "Async" oatpp APIs.')],1),t._v(" "),t._m(0),t._v(" "),r("p",[t._v("MbedTLS installed.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://oatpp.io/api/latest/oatpp/network/ConnectionProvider/#serverconnectionprovider",target:"_blank",rel:"noopener noreferrer"}},[t._v("oatpp::network::ServerConnectionProvider"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://oatpp.io/api/latest/oatpp/core/data/stream/Stream/#iostream",target:"_blank",rel:"noopener noreferrer"}},[t._v("oatpp::data::stream::IOStream"),r("OutboundLink")],1),t._v(" - to be returned by "),r("code",[t._v("ConnectionProvider")]),t._v(".")])]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://oatpp.io/api/latest/oatpp/network/ConnectionProvider/#clientconnectionprovider",target:"_blank",rel:"noopener noreferrer"}},[t._v("oatpp::network::ClientConnectionProvider"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://oatpp.io/api/latest/oatpp/core/data/stream/Stream/#iostream",target:"_blank",rel:"noopener noreferrer"}},[t._v("oatpp::data::stream::IOStream"),r("OutboundLink")],1),t._v(" - to be returned by "),r("code",[t._v("ConnectionProvider")]),t._v(".")])]),t._v(" "),t._m(18),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/docs/modules/oatpp-libressl/"}},[t._v("oatpp-libressl")])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"requires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requires","aria-hidden":"true"}},[this._v("#")]),this._v(" Requires")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apis","aria-hidden":"true"}},[this._v("#")]),this._v(" APIs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server","aria-hidden":"true"}},[this._v("#")]),this._v(" Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"connectionprovider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connectionprovider","aria-hidden":"true"}},[this._v("#")]),this._v(" ConnectionProvider")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create "),e("code",[this._v("ConnectionProvider")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" serverCertificateFile "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/server/certificate"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" serverPrivateKeyFile "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/server/private/key"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create Config */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" config "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mbedtls"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Config"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefaultServerConfigShared")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serverCertificateFile"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serverPrivateKeyFile"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create Secure Connection Provider */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connectionProvider "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mbedtls"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* port */")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Get Secure Connection Stream */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connection "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connectionProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"custom-transport-stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-transport-stream","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Transport Stream")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create "),e("code",[this._v("ConnectionProvider")]),this._v(" with custom transport stream.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" serverCertificateFile "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/server/certificate"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" serverPrivateKeyFile "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/server/private/key"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create Config */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" config "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mbedtls"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Config"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefaultServerConfigShared")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serverCertificateFile"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serverPrivateKeyFile"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create Transport Stream Provider */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Replace With Your Custom Transport Stream Provider */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" transportStreamProvider "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("network"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("SimpleTCPConnectionProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* port */")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create Secure Connection Provider */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connectionProvider "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mbedtls"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transportStreamProvider"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Get Secure Connection Stream over Custom Transport Stream */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connection "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connectionProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" To use "),e("code",[this._v("oatpp-mbedtls")]),this._v(" for server connections with custom transport stream you should implement:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#client","aria-hidden":"true"}},[this._v("#")]),this._v(" Client")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"connectionprovider-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connectionprovider-2","aria-hidden":"true"}},[this._v("#")]),this._v(" ConnectionProvider")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create "),e("code",[this._v("ConnectionProvider")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create Config */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" config "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mbedtls"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Config"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefaultClientConfigShared")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create Secure Connection Provider */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connectionProvider "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mbedtls"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("client"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"httpbin.org"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* port */")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Get Secure Connection Stream */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connection "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connectionProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"custom-transport-stream-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-transport-stream-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Transport Stream")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create "),e("code",[this._v("ConnectionProvider")]),this._v(" with custom transport stream.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create Config */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" config "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mbedtls"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Config"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefaultClientConfigShared")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create Transport Stream Provider */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Replace With Your Custom Transport Stream Provider */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" transportStreamProvider "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("network"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("client"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("SimpleTCPConnectionProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"httpbin.org"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* port */")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create Secure Connection Provider */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connectionProvider "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mbedtls"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("client"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transportStreamProvider"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Get Secure Connection Stream over Custom Transport Stream */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connection "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connectionProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" To use "),e("code",[this._v("oatpp-mbedtls")]),this._v(" for client connections with custom transport stream you should implement:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"see-more"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#see-more","aria-hidden":"true"}},[this._v("#")]),this._v(" See more")])}],!1,null,null,null);e.default=a.exports}}]);