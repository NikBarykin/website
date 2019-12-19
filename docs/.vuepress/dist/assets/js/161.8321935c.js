(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{284:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"httpconnectionhandler-hpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#httpconnectionhandler-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" HttpConnectionHandler.hpp"),r("seo")],1),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/web/server/HttpConnectionHandler.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/web/server/HttpConnectionHandler.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),r("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("Simple ConnectionHandler ("),r("router-link",{attrs:{to:"/api/latest/oatpp/network/server/ConnectionHandler/#connectionhandler"}},[t._v("oatpp::network::server::ConnectionHandler")]),t._v(") for handling HTTP communication. "),r("br"),t._v(" Will create one thread per each connection to handle communication.")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),r("table",[t._m(4),t._v(" "),r("tbody",[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("tr",[t._m(9),t._v(" "),t._m(10),t._v(" "),r("td",[t._v("Implementation of "),r("router-link",{attrs:{to:"/api/latest/oatpp/network/server/ConnectionHandler/#connectionhandler-handleconnection"}},[t._v("oatpp::network::server::ConnectionHandler::handleConnection()")]),t._v(".")],1)]),t._v(" "),t._m(11)])]),t._v(" "),t._m(12),t._v(" "),r("ol",[r("li",[t._v("Constructor. "),r("ul",[r("li",[r("strong",[t._v("@param")]),t._v(" components - "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/server/HttpProcessor/#httpprocessor-components"}},[t._v("oatpp::web::server::HttpProcessor::Components")]),t._v(". ")],1)]),t._m(13)]),t._v(" "),r("li",[t._v("Constructor. "),r("ul",[r("li",[r("strong",[t._v("@param")]),t._v(" router - "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/server/HttpRouter/#httprouter"}},[t._v("oatpp::web::server::HttpRouter")]),t._v(" to route incoming requests. ")],1)]),t._m(14)]),t._v(" "),r("li",[t._v("Constructor. "),r("ul",[r("li",[r("strong",[t._v("@param")]),t._v(" router - "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/server/HttpRouter/#httprouter"}},[t._v("oatpp::web::server::HttpRouter")]),t._v(" to route incoming requests. ")],1),r("li",[r("strong",[t._v("@param")]),t._v(" config - "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/server/HttpProcessor/#httpprocessor-config"}},[t._v("oatpp::web::server::HttpProcessor::Config")]),t._v(". ")],1)]),t._m(15)])]),t._v(" "),t._m(16),t._v(" "),r("p",[t._v("Create shared HttpConnectionHandler. "),r("ul",[r("li",[r("strong",[t._v("@param")]),t._v(" router - "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/server/HttpRouter/#httprouter"}},[t._v("oatpp::web::server::HttpRouter")]),t._v(" to route incoming requests. ")],1),t._m(17)])]),t._v(" "),t._m(18),t._m(19),t._v(" "),r("p",[t._v("Set root error handler for all requests coming through this Connection Handler. All unhandled errors will be handled by this error handler. "),r("ul",[r("li",[r("strong",[t._v("@param")]),t._v(" errorHandler - "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/server/handler/ErrorHandler/#errorhandler"}},[t._v("oatpp::web::server::handler::ErrorHandler")]),t._v(". ")],1)])]),t._v(" "),t._m(20),t._m(21),t._v(" "),r("p",[t._v("Set request interceptor. Request intercepted after route is resolved but before corresponding route endpoint is called. "),r("ul",[r("li",[r("strong",[t._v("@param")]),t._v(" interceptor - "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/server/handler/Interceptor/#requestinterceptor"}},[t._v("oatpp::web::server::handler::RequestInterceptor")]),t._v(". ")],1)])]),t._v(" "),t._m(22),t._m(23),t._v(" "),r("p",[t._v("Implementation of "),r("router-link",{attrs:{to:"/api/latest/oatpp/network/server/ConnectionHandler/#connectionhandler-handleconnection"}},[t._v("oatpp::network::server::ConnectionHandler::handleConnection()")]),t._v(". "),r("ul",[r("li",[r("strong",[t._v("@param")]),t._v(" connection - "),r("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#iostream"}},[t._v("oatpp::data::stream::IOStream")]),t._v(" representing connection. ")],1)])],1),t._v(" "),t._m(24),t._m(25),t._v(" "),r("p",[t._v("Tell all worker threads to exit when done.")]),t._v(" "),t._m(26)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/web/server/HttpConnectionHandler.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"httpconnectionhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httpconnectionhandler","aria-hidden":"true"}},[this._v("#")]),this._v(" HttpConnectionHandler")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" server "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpConnectionHandler")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" base"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" network"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionHandler "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Return Type")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Summary")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("code",[t._v("[none]")])]),t._v(" "),r("td",[r("a",{attrs:{href:"#httpconnectionhandler-httpconnectionhandler"}},[t._v("HttpConnectionHandler")])]),t._v(" "),r("td",[t._v("Multiple implementations: "),r("br"),r("ol",[r("li",[t._v("Constructor. ")]),r("li",[t._v("Constructor. ")]),r("li",[t._v("Constructor. ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("std::shared_ptr<HttpConnectionHandler>")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#httpconnectionhandler-createshared"}},[this._v("createShared")])]),this._v(" "),e("td",[this._v("Create shared HttpConnectionHandler.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#httpconnectionhandler-seterrorhandler"}},[this._v("setErrorHandler")])]),this._v(" "),e("td",[this._v("Set root error handler for all requests coming through this Connection Handler.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#httpconnectionhandler-addrequestinterceptor"}},[this._v("addRequestInterceptor")])]),this._v(" "),e("td",[this._v("Set request interceptor. Request intercepted after route is resolved but before corresponding route endpoint is called.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("void")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("a",{attrs:{href:"#httpconnectionhandler-handleconnection"}},[this._v("handleConnection")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#httpconnectionhandler-stop"}},[this._v("stop")])]),this._v(" "),e("td",[this._v("Tell all worker threads to exit when done.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"httpconnectionhandler-httpconnectionhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httpconnectionhandler-httpconnectionhandler","aria-hidden":"true"}},[this._v("#")]),this._v(" HttpConnectionHandler::HttpConnectionHandler")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("HttpConnectionHandler")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HttpProcessor"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Components"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" components"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("HttpConnectionHandler")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HttpRouter"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("HttpConnectionHandler")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HttpProcessor"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Components"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("HttpConnectionHandler")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HttpRouter"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                      "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HttpProcessor"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Config"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" config"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("HttpConnectionHandler")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HttpProcessor"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Components"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"httpconnectionhandler-createshared"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httpconnectionhandler-createshared","aria-hidden":"true"}},[this._v("#")]),this._v(" HttpConnectionHandler::createShared")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@return")]),this._v(" - "),e("code",[this._v("std::shared_ptr")]),this._v(" to HttpConnectionHandler. ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HttpConnectionHandler"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HttpRouter"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"httpconnectionhandler-seterrorhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httpconnectionhandler-seterrorhandler","aria-hidden":"true"}},[this._v("#")]),this._v(" HttpConnectionHandler::setErrorHandler")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("setErrorHandler")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("handler"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ErrorHandler"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" errorHandler"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"httpconnectionhandler-addrequestinterceptor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httpconnectionhandler-addrequestinterceptor","aria-hidden":"true"}},[this._v("#")]),this._v(" HttpConnectionHandler::addRequestInterceptor")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRequestInterceptor")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("handler"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("RequestInterceptor"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" interceptor"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"httpconnectionhandler-handleconnection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httpconnectionhandler-handleconnection","aria-hidden":"true"}},[this._v("#")]),this._v(" HttpConnectionHandler::handleConnection")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleConnection")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IOStream"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connection"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ParameterMap"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" params"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"httpconnectionhandler-stop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httpconnectionhandler-stop","aria-hidden":"true"}},[this._v("#")]),this._v(" HttpConnectionHandler::stop")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("void")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("stop")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" override\n")])])])}],!1,null,null,null);e.default=n.exports}}]);