(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{208:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"high-level-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#high-level-overview","aria-hidden":"true"}},[t._v("#")]),t._v(" High Level Overview "),a("seo")],1),t._v(" "),a("p",[t._v("This is the high level overview of Oat++ API.")]),t._v(" "),a("p"),t._m(0),a("p"),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("For more info see "),a("router-link",{attrs:{to:"/docs/components/api-controller/"}},[t._v("Api Controller")])],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v("For more info see "),a("router-link",{attrs:{to:"/docs/components/api-controller/#cors"}},[t._v("Api Controller / CORS")])],1),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("For more info see "),a("router-link",{attrs:{to:"/docs/components/api-controller/#authorization-basic"}},[t._v("Api Controller / Authorization")])],1),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("For more info see "),a("router-link",{attrs:{to:"/docs/components/api-client/"}},[t._v("Api Client")])],1),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("For more info see "),a("router-link",{attrs:{to:"/docs/components/dto/"}},[t._v("Data Transfer Object (DTO)")]),t._v(".")],1),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),a("p",[t._v("For more info see "),a("router-link",{attrs:{to:"/docs/components/api-controller/#endpoint-annotation-and-api-documentation"}},[t._v("Endpoint Annotation And API Documentation")])],1),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/docs/start/step-by-step/#well-structured-project"}},[t._v("Well Structured Project")])],1)])])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#api-controller-request-mapping"}},[t._v("API Controller - Request Mapping")]),a("ul",[a("li",[a("a",{attrs:{href:"#declare-endpoint"}},[t._v("Declare Endpoint")])]),a("li",[a("a",{attrs:{href:"#add-cors-for-endpoint"}},[t._v("Add CORS for Endpoint")])]),a("li",[a("a",{attrs:{href:"#endpoint-with-authorization"}},[t._v("Endpoint with Authorization")])])])]),a("li",[a("a",{attrs:{href:"#api-client-retrofit-feign-like-client"}},[t._v("API Client - Retrofit / Feign Like Client")]),a("ul",[a("li",[a("a",{attrs:{href:"#declare-client"}},[t._v("Declare Client")])]),a("li",[a("a",{attrs:{href:"#using-api-client"}},[t._v("Using API Client")])])])]),a("li",[a("a",{attrs:{href:"#object-mapping"}},[t._v("Object Mapping")]),a("ul",[a("li",[a("a",{attrs:{href:"#declare-dto"}},[t._v("Declare DTO")])]),a("li",[a("a",{attrs:{href:"#serialize-dto-using-objectmapper"}},[t._v("Serialize DTO Using ObjectMapper")])])])]),a("li",[a("a",{attrs:{href:"#swagger-ui-annotations"}},[t._v("Swagger-UI Annotations")]),a("ul",[a("li",[a("a",{attrs:{href:"#additional-endpoint-info"}},[t._v("Additional Endpoint Info")])])])]),a("li",[a("a",{attrs:{href:"#read-next"}},[t._v("Read Next")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api-controller-request-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-controller-request-mapping","aria-hidden":"true"}},[this._v("#")]),this._v(" API Controller - Request Mapping")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"declare-endpoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#declare-endpoint","aria-hidden":"true"}},[this._v("#")]),this._v(" Declare Endpoint")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/{userId}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" putUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BODY_DTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectWrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  userDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDtoResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m_database"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"add-cors-for-endpoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-cors-for-endpoint","aria-hidden":"true"}},[this._v("#")]),this._v(" Add CORS for Endpoint")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ADD_CORS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("putUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/{userId}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" putUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BODY_DTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectWrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  userDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDtoResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m_database"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"endpoint-with-authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-with-authorization","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoint with Authorization")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/{userId}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" putUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AUTHORIZATION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DefaultBasicAuthorizationObject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" authObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BODY_DTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectWrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_ASSERT_HTTP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authObject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("userId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ivan"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" authObject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_401"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unauthorized"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  userDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDtoResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m_database"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api-client-retrofit-feign-like-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-client-retrofit-feign-like-client","aria-hidden":"true"}},[this._v("#")]),this._v(" API Client - Retrofit / Feign Like Client")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"declare-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#declare-client","aria-hidden":"true"}},[this._v("#")]),this._v(" Declare Client")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ApiClient "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("API_CLIENT_INIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("API_CALL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getUsers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("API_CALL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/{userId}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getUserById"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"using-api-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-api-client","aria-hidden":"true"}},[this._v("#")]),this._v(" Using API Client")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userService"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("readBodyToDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("objectMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"object-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-mapping","aria-hidden":"true"}},[this._v("#")]),this._v(" Object Mapping")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"declare-dto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#declare-dto","aria-hidden":"true"}},[this._v("#")]),this._v(" Declare DTO")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDto")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Object "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DTO_INIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DTO_FIELD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DTO_FIELD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"serialize-dto-using-objectmapper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serialize-dto-using-objectmapper","aria-hidden":"true"}},[this._v("#")]),this._v(" Serialize DTO Using ObjectMapper")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ivan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" objectMapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ObjectMapper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" objectMapper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"swagger-ui-annotations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swagger-ui-annotations","aria-hidden":"true"}},[this._v("#")]),this._v(" Swagger-UI Annotations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"additional-endpoint-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-endpoint-info","aria-hidden":"true"}},[this._v("#")]),this._v(" Additional Endpoint Info")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("putUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// general")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("summary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Update User by userId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addConsumes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectWrapper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectWrapper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_404"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// params specific")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("pathParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User Identifier"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/{userId}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" putUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BODY_DTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectWrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  userDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDtoResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m_database"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"read-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read-next","aria-hidden":"true"}},[this._v("#")]),this._v(" Read Next")])}],!1,null,null,null);s.default=e.exports}}]);