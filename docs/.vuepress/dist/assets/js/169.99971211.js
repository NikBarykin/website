(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{560:function(t,r,a){"use strict";a.r(r);var s=a(42),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"provider-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-hpp"}},[t._v("#")]),t._v(" Provider.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/core/provider/Provider.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/core/provider/Provider.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("API: latest")]),a("br"),t._v(" "),a("code",[t._v("module: oatpp")]),a("br"),t._v(" "),a("code",[t._v('#include "oatpp/core/provider/Provider.hpp"')])]),t._v(" "),a("h2",{attrs:{id:"provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[t._v("#")]),t._v(" Provider")]),t._v(" "),a("p",[t._v("Abstract resource provider. "),a("ul",[a("li",[a("strong",[t._v("@tparam")]),t._v(" T - resource class. ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" provider "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Provider")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#provider-provider"}},[t._v("Provider")])]),t._v(" "),a("td",[t._v("Multiple implementations: "),a("br"),a("ol",[a("li",[t._v("Default constructor. ")]),a("li",[t._v("Constructor. ")])])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#provider-~provider"}},[t._v("~Provider")])]),t._v(" "),a("td",[t._v("Virtual destructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("const std::unordered_map<oatpp::data::share::StringKeyLabelCI, oatpp::data::share::StringKeyLabel>&")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#provider-getproperties"}},[t._v("getProperties")])]),t._v(" "),a("td",[t._v("Some optional properties that user might want to know. "),a("br")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("data::share::StringKeyLabel")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#provider-getproperty"}},[t._v("getProperty")])]),t._v(" "),a("td",[t._v("Get optional property")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("std::shared_ptr<T>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#provider-get"}},[t._v("get")])]),t._v(" "),a("td",[t._v("Get resource.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("async::CoroutineStarterForResult<const std::shared_ptr<T>&>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#provider-getasync"}},[t._v("getAsync")])]),t._v(" "),a("td",[t._v("Get resource in Async manner.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#provider-invalidate"}},[t._v("invalidate")])]),t._v(" "),a("td",[t._v("Invalidate resource that was previously created by this provider. "),a("br")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#provider-stop"}},[t._v("stop")])]),t._v(" "),a("td",[t._v("Stop provider and free associated resources.")])])])]),t._v(" "),a("h3",{attrs:{id:"provider-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-provider"}},[t._v("#")]),t._v(" Provider::Provider")]),t._v(" "),a("ol",[a("li",[t._v("Default constructor."),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("Constructor. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" properties ")])]),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("unordered_map"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabelCI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("m_properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"provider-provider-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-provider-2"}},[t._v("#")]),t._v(" Provider::~Provider")]),t._v(" "),a("p",[t._v("Virtual destructor.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n")])])]),a("h3",{attrs:{id:"provider-getproperties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-getproperties"}},[t._v("#")]),t._v(" Provider::getProperties")]),t._v(" "),a("p",[t._v("Some optional properties that user might want to know. "),a("br"),t._v(" Note: All properties are optional and user should not rely on this.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("unordered_map"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabelCI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"provider-getproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-getproperty"}},[t._v("#")]),t._v(" Provider::getProperty")]),t._v(" "),a("p",[t._v("Get optional property")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"provider-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-get"}},[t._v("#")]),t._v(" Provider::get")]),t._v(" "),a("p",[t._v("Get resource. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - resource. ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("h3",{attrs:{id:"provider-getasync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-getasync"}},[t._v("#")]),t._v(" Provider::getAsync")]),t._v(" "),a("p",[t._v("Get resource in Async manner. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - oatpp::async::CoroutineStarterForResult of "),a("code",[t._v("T")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CoroutineStarterForResult"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("h3",{attrs:{id:"provider-invalidate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-invalidate"}},[t._v("#")]),t._v(" Provider::invalidate")]),t._v(" "),a("p",[t._v("Invalidate resource that was previously created by this provider. "),a("br"),t._v(" Use-case: if provider is pool based - you can signal that this resource should not be reused anymore. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" resource ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invalidate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("h3",{attrs:{id:"provider-stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-stop"}},[t._v("#")]),t._v(" Provider::stop")]),t._v(" "),a("p",[t._v("Stop provider and free associated resources.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])])}),[],!1,null,null,null);r.default=e.exports}}]);