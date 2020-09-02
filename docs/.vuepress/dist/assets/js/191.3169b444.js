(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{562:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"executor-hpp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executor-hpp"}},[t._v("#")]),t._v(" Executor.hpp"),e("seo")],1),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/orm/Executor.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/orm/Executor.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("API: latest")]),e("br"),t._v(" "),e("code",[t._v("module: oatpp")]),e("br"),t._v(" "),e("code",[t._v('#include "oatpp/orm/Executor.hpp"')])]),t._v(" "),e("h2",{attrs:{id:"executor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executor"}},[t._v("#")]),t._v(" Executor")]),t._v(" "),e("p",[t._v("Database executor.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" orm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executor")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Return Type")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Summary")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("[none]")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#executor-~executor"}},[t._v("~Executor")])]),t._v(" "),e("td",[t._v("Default virtual destructor.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("std::shared_ptr<Connection>")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#executor-getconnection"}},[t._v("getConnection")])]),t._v(" "),e("td",[t._v("Get database connection.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("StringTemplate")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#executor-parsequerytemplate"}},[t._v("parseQueryTemplate")])]),t._v(" "),e("td",[t._v("Parse query template.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("std::shared_ptr<QueryResult>")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#executor-execute"}},[t._v("execute")])]),t._v(" "),e("td",[t._v("Multiple implementations: "),e("br"),e("ol",[e("li",[t._v("Execute database query using a query template. ")]),e("li",[t._v("Execute an arbitrary database query. "),e("br")])])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("std::shared_ptr<QueryResult>")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#executor-begin"}},[t._v("begin")])]),t._v(" "),e("td",[t._v("Begin database transaction. Should NOT be used directly. Use "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/Transaction/#transaction"}},[t._v("oatpp::orm::Transaction")]),t._v(" instead.")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("std::shared_ptr<QueryResult>")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#executor-commit"}},[t._v("commit")])]),t._v(" "),e("td",[t._v("Commit database transaction. Should NOT be used directly. Use "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/Transaction/#transaction"}},[t._v("oatpp::orm::Transaction")]),t._v(" instead.")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("std::shared_ptr<QueryResult>")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#executor-rollback"}},[t._v("rollback")])]),t._v(" "),e("td",[t._v("Rollback database transaction. Should NOT be used directly. Use "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/Transaction/#transaction"}},[t._v("oatpp::orm::Transaction")]),t._v(" instead.")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("v_int64")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#executor-getschemaversion"}},[t._v("getSchemaVersion")])]),t._v(" "),e("td",[t._v("Get current database schema version.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#executor-migrateschema"}},[t._v("migrateSchema")])]),t._v(" "),e("td",[t._v("Run schema migration script. Should NOT be used directly. Use "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/SchemaMigration/#schemamigration"}},[t._v("oatpp::orm::SchemaMigration")]),t._v(" instead.")],1)])])]),t._v(" "),e("h3",{attrs:{id:"executor-executor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executor-executor"}},[t._v("#")]),t._v(" Executor::~Executor")]),t._v(" "),e("p",[t._v("Default virtual destructor.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Executor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n")])])]),e("h3",{attrs:{id:"executor-getconnection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executor-getconnection"}},[t._v("#")]),t._v(" Executor::getConnection")]),t._v(" "),e("p",[t._v("Get database connection. "),e("ul",[e("li",[e("strong",[t._v("@return")])])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),e("h3",{attrs:{id:"executor-parsequerytemplate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executor-parsequerytemplate"}},[t._v("#")]),t._v(" Executor::parseQueryTemplate")]),t._v(" "),e("p",[t._v("Parse query template. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" name - template name. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" text - template text. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" paramsTypeMap - template parameter types. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" prepare - "),e("code",[t._v("true")]),t._v(" if the query should use prepared statement, "),e("code",[t._v("false")]),t._v(" otherwise. ")]),e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/share/StringTemplate/#stringtemplate"}},[t._v("oatpp::data::share::StringTemplate")]),t._v(". ")],1)])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" StringTemplate "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseQueryTemplate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ParamsTypeMap"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" paramsTypeMap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" prepare "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),e("h3",{attrs:{id:"executor-execute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executor-execute"}},[t._v("#")]),t._v(" Executor::execute")]),t._v(" "),e("ol",[e("li",[t._v("Execute database query using a query template. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" queryTemplate - a query template obtained in a prior call to "),e("a",{attrs:{href:"#executor-parsequerytemplate"}},[t._v("Executor::parseQueryTemplate()")]),t._v(" method. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" params - query parameters. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" connection - database connection. ")]),e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/QueryResult/#queryresult"}},[t._v("oatpp::orm::QueryResult")]),t._v(". ")],1)]),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("QueryResult"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" StringTemplate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" queryTemplate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                             "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("unordered_map"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Void"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" params"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                             "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connection "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])]),t._v(" "),e("li",[t._v("Execute an arbitrary database query. "),e("br"),t._v(" In its default implementation it'll call execute with the null-named query template. The query template will be created by a call to "),e("code",[t._v("parseQueryTemplate(nullptr, query, {}, false)")]),t._v(". "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" query - query text. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" params - query parameters. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" connection - database connection. ")]),e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/QueryResult/#queryresult"}},[t._v("oatpp::orm::QueryResult")]),t._v(". ")],1)]),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("QueryResult"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                             "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("unordered_map"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Void"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" params"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                             "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connection "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"executor-begin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executor-begin"}},[t._v("#")]),t._v(" Executor::begin")]),t._v(" "),e("p",[t._v("Begin database transaction. Should NOT be used directly. Use "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/Transaction/#transaction"}},[t._v("oatpp::orm::Transaction")]),t._v(" instead. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" connection - database connection. ")]),e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/QueryResult/#queryresult"}},[t._v("oatpp::orm::QueryResult")]),t._v(". ")],1)])],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("QueryResult"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connection "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),e("h3",{attrs:{id:"executor-commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executor-commit"}},[t._v("#")]),t._v(" Executor::commit")]),t._v(" "),e("p",[t._v("Commit database transaction. Should NOT be used directly. Use "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/Transaction/#transaction"}},[t._v("oatpp::orm::Transaction")]),t._v(" instead. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" connection ")]),e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/QueryResult/#queryresult"}},[t._v("oatpp::orm::QueryResult")]),t._v(". ")],1)])],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("QueryResult"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),e("h3",{attrs:{id:"executor-rollback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executor-rollback"}},[t._v("#")]),t._v(" Executor::rollback")]),t._v(" "),e("p",[t._v("Rollback database transaction. Should NOT be used directly. Use "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/Transaction/#transaction"}},[t._v("oatpp::orm::Transaction")]),t._v(" instead. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" connection ")]),e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/QueryResult/#queryresult"}},[t._v("oatpp::orm::QueryResult")]),t._v(". ")],1)])],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("QueryResult"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rollback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),e("h3",{attrs:{id:"executor-getschemaversion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executor-getschemaversion"}},[t._v("#")]),t._v(" Executor::getSchemaVersion")]),t._v(" "),e("p",[t._v("Get current database schema version. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" suffix - suffix of schema version control table name. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" connection - database connection. ")]),e("li",[e("strong",[t._v("@return")]),t._v(" - schema version. ")])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" v_int64 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSchemaVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" suffix "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connection "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),e("h3",{attrs:{id:"executor-migrateschema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executor-migrateschema"}},[t._v("#")]),t._v(" Executor::migrateSchema")]),t._v(" "),e("p",[t._v("Run schema migration script. Should NOT be used directly. Use "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/SchemaMigration/#schemamigration"}},[t._v("oatpp::orm::SchemaMigration")]),t._v(" instead. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" script - script text. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" newVersion - schema version corresponding to this script. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" suffix - suffix of schema version control table name. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" connection - database connection. ")])])],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("migrateSchema")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" script"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                           v_int64 newVersion"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                           "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" suffix "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                           "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connection "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);