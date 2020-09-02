(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{563:function(t,a,s){"use strict";s.r(a);var r=s(42),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transaction-hpp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-hpp"}},[t._v("#")]),t._v(" Transaction.hpp"),s("seo")],1),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/orm/Transaction.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/orm/Transaction.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("code",[t._v("API: latest")]),s("br"),t._v(" "),s("code",[t._v("module: oatpp")]),s("br"),t._v(" "),s("code",[t._v('#include "oatpp/orm/Transaction.hpp"')])]),t._v(" "),s("h2",{attrs:{id:"transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction"}},[t._v("#")]),t._v(" Transaction")]),t._v(" "),s("p",[t._v("Database transaction.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" orm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transaction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Return Type")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Summary")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("[none]")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#transaction-transaction"}},[t._v("Transaction")])]),t._v(" "),s("td",[t._v("Multiple implementations: "),s("br"),s("ol",[s("li",[t._v("Constructor. ")]),s("li",[t._v("Copy constructor. ")]),s("li",[t._v("Move constructor. ")])])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("[none]")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#transaction-~transaction"}},[t._v("~Transaction")])]),t._v(" "),s("td",[t._v("Virtual destructor. "),s("br")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("std::shared_ptr<Connection>")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#transaction-getconnection"}},[t._v("getConnection")])]),t._v(" "),s("td",[t._v("Get the database connection associated with the transaction. "),s("br")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("std::shared_ptr<QueryResult>")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#transaction-commit"}},[t._v("commit")])]),t._v(" "),s("td",[t._v("Commit transaction.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("std::shared_ptr<QueryResult>")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#transaction-rollback"}},[t._v("rollback")])]),t._v(" "),s("td",[t._v("Rollback transaction.")])])])]),t._v(" "),s("h3",{attrs:{id:"transaction-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-transaction"}},[t._v("#")]),t._v(" Transaction::Transaction")]),t._v(" "),s("ol",[s("li",[t._v("Constructor. "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" executor - "),s("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/Executor/#executor"}},[t._v("oatpp::orm::Executor")]),t._v(". ")],1),s("li",[s("strong",[t._v("@param")]),t._v(" connection - database connection. ")])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Transaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectHandle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Executor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" executor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("Copy constructor. "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" other ")])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Transaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Transaction"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("Move constructor. "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" other ")])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Transaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Transaction"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"transaction-transaction-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-transaction-2"}},[t._v("#")]),t._v(" Transaction::~Transaction")]),t._v(" "),s("p",[t._v("Virtual destructor. "),s("br"),t._v(" Will automatically call "),s("a",{attrs:{href:"#transaction-rollback"}},[t._v("Transaction::rollback()")]),t._v(" if there was no prior call to "),s("a",{attrs:{href:"#transaction-commit"}},[t._v("Transaction::commit()")]),t._v(" method.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Transaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"transaction-getconnection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-getconnection"}},[t._v("#")]),t._v(" Transaction::getConnection")]),t._v(" "),s("p",[t._v("Get the database connection associated with the transaction. "),s("br"),t._v(" "),s("strong",[t._v("Note:")]),t._v(" all database queries within the transaction MUST be called on this connection. "),s("ul",[s("li",[s("strong",[t._v("@return")])])])]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),s("h3",{attrs:{id:"transaction-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-commit"}},[t._v("#")]),t._v(" Transaction::commit")]),t._v(" "),s("p",[t._v("Commit transaction. "),s("ul",[s("li",[s("strong",[t._v("@return")])])])]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("QueryResult"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"transaction-rollback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-rollback"}},[t._v("#")]),t._v(" Transaction::rollback")]),t._v(" "),s("p",[t._v("Rollback transaction. "),s("ul",[s("li",[s("strong",[t._v("@return")])])])]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("QueryResult"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rollback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);