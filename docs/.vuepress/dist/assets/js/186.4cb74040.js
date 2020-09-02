(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{555:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"socket-hpp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-hpp"}},[t._v("#")]),t._v(" Socket.hpp"),e("seo")],1),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/network/virtual_/Socket.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/network/virtual_/Socket.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("API: latest")]),e("br"),t._v(" "),e("code",[t._v("module: oatpp")]),e("br"),t._v(" "),e("code",[t._v('#include "oatpp/network/virtual_/Socket.hpp"')])]),t._v(" "),e("h2",{attrs:{id:"socket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket"}},[t._v("#")]),t._v(" Socket")]),t._v(" "),e("p",[t._v("Virtual socket implementation. Can be used as a bidirectional data transfer between different threads of the same process. "),e("br"),t._v(" Under the hood it uses a pair of "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/network/virtual_/Pipe/#pipe"}},[t._v("oatpp::network::virtual_::Pipe")]),t._v(". One to write data to, and one to read data from. Extends "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/base/Countable/#countable"}},[t._v("oatpp::base::Countable")]),t._v(" and "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#iostream"}},[t._v("oatpp::data::stream::IOStream")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" network "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" virtual_ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Socket")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOStream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Return Type")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Summary")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("[none]")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-socket"}},[t._v("Socket")])]),t._v(" "),e("td",[t._v("Constructor.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("std::shared_ptr<Socket>")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-createshared"}},[t._v("createShared")])]),t._v(" "),e("td",[t._v("Create shared socket.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("[none]")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-~socket"}},[t._v("~Socket")])]),t._v(" "),e("td",[t._v("Virtual destructor. Close corresponding pipes.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-setmaxavailabletoreadwrtie"}},[t._v("setMaxAvailableToReadWrtie")])]),t._v(" "),e("td",[t._v("Limit the available amount of bytes to read from socket and limit the available amount of bytes to write to socket. "),e("br")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("v_io_size")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-read"}},[t._v("read")])]),t._v(" "),e("td",[t._v("Read data from socket.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("v_io_size")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-write"}},[t._v("write")])]),t._v(" "),e("td",[t._v("Write data to socket.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-setoutputstreamiomode"}},[t._v("setOutputStreamIOMode")])]),t._v(" "),e("td",[t._v("Set OutputStream I/O mode.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::data::stream::IOMode")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-getoutputstreamiomode"}},[t._v("getOutputStreamIOMode")])]),t._v(" "),e("td",[t._v("Set OutputStream I/O mode.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-setinputstreamiomode"}},[t._v("setInputStreamIOMode")])]),t._v(" "),e("td",[t._v("Set InputStream I/O mode.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::data::stream::IOMode")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-getinputstreamiomode"}},[t._v("getInputStreamIOMode")])]),t._v(" "),e("td",[t._v("Get InputStream I/O mode.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::data::stream::Context&")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-getoutputstreamcontext"}},[t._v("getOutputStreamContext")])]),t._v(" "),e("td",[t._v("Get output stream context.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::data::stream::Context&")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-getinputstreamcontext"}},[t._v("getInputStreamContext")])]),t._v(" "),e("td",[t._v("Get input stream context.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#socket-close"}},[t._v("close")])]),t._v(" "),e("td",[t._v("Close socket pipes.")])])])]),t._v(" "),e("h3",{attrs:{id:"socket-socket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-socket"}},[t._v("#")]),t._v(" Socket::Socket")]),t._v(" "),e("p",[t._v("Constructor. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" pipeIn - pipe to read data from. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" pipeOut - pipe to write data to. ")])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Socket")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Pipe"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" pipeIn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Pipe"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" pipeOut"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"socket-createshared"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-createshared"}},[t._v("#")]),t._v(" Socket::createShared")]),t._v(" "),e("p",[t._v("Create shared socket. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" pipeIn - pipe to read data from. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" pipeOut - pipe to write data to. ")]),e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("code",[t._v("std::shared_ptr")]),t._v(" to Socket. ")])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Socket"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Pipe"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" pipeIn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Pipe"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" pipeOut"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"socket-socket-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-socket-2"}},[t._v("#")]),t._v(" Socket::~Socket")]),t._v(" "),e("p",[t._v("Virtual destructor. Close corresponding pipes.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Socket")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"socket-setmaxavailabletoreadwrtie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-setmaxavailabletoreadwrtie"}},[t._v("#")]),t._v(" Socket::setMaxAvailableToReadWrtie")]),t._v(" "),e("p",[t._v("Limit the available amount of bytes to read from socket and limit the available amount of bytes to write to socket. "),e("br"),t._v(" This method is used for testing purposes only."),e("br"),t._v(" "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" maxToRead - maximum available amount of bytes to read. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" maxToWrite - maximum available amount of bytes to write. ")])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxAvailableToReadWrtie")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v_io_size maxToRead"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_io_size maxToWrite"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"socket-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-read"}},[t._v("#")]),t._v(" Socket::read")]),t._v(" "),e("p",[t._v("Read data from socket. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" data - buffer to read data to. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" count - buffer size. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" action - async specific action. If action is NOT "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action-type-none"}},[t._v("oatpp::async::Action::TYPE_NONE")]),t._v(", then caller MUST return this action on coroutine iteration. ")],1),e("li",[e("strong",[t._v("@return")]),t._v(" - actual amount of data read from socket. ")])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("v_io_size "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_buff_size count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),e("h3",{attrs:{id:"socket-write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-write"}},[t._v("#")]),t._v(" Socket::write")]),t._v(" "),e("p",[t._v("Write data to socket. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" data - data to write to socket. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" count - data size. ")]),e("li",[e("strong",[t._v("@param")]),t._v(" action - async specific action. If action is NOT "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action-type-none"}},[t._v("oatpp::async::Action::TYPE_NONE")]),t._v(", then caller MUST return this action on coroutine iteration. ")],1),e("li",[e("strong",[t._v("@return")]),t._v(" - actual amount of data written to socket. ")])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("v_io_size "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_buff_size count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),e("h3",{attrs:{id:"socket-setoutputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-setoutputstreamiomode"}},[t._v("#")]),t._v(" Socket::setOutputStreamIOMode")]),t._v(" "),e("p",[t._v("Set OutputStream I/O mode. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" ioMode ")])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOutputStreamIOMode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode ioMode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),e("h3",{attrs:{id:"socket-getoutputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-getoutputstreamiomode"}},[t._v("#")]),t._v(" Socket::getOutputStreamIOMode")]),t._v(" "),e("p",[t._v("Set OutputStream I/O mode. "),e("ul",[e("li",[e("strong",[t._v("@return")])])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOutputStreamIOMode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),e("h3",{attrs:{id:"socket-setinputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-setinputstreamiomode"}},[t._v("#")]),t._v(" Socket::setInputStreamIOMode")]),t._v(" "),e("p",[t._v("Set InputStream I/O mode. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" ioMode ")])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInputStreamIOMode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode ioMode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),e("h3",{attrs:{id:"socket-getinputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-getinputstreamiomode"}},[t._v("#")]),t._v(" Socket::getInputStreamIOMode")]),t._v(" "),e("p",[t._v("Get InputStream I/O mode. "),e("ul",[e("li",[e("strong",[t._v("@return")])])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputStreamIOMode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),e("h3",{attrs:{id:"socket-getoutputstreamcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-getoutputstreamcontext"}},[t._v("#")]),t._v(" Socket::getOutputStreamContext")]),t._v(" "),e("p",[t._v("Get output stream context. "),e("ul",[e("li",[e("strong",[t._v("@return")])])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Context"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOutputStreamContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),e("h3",{attrs:{id:"socket-getinputstreamcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-getinputstreamcontext"}},[t._v("#")]),t._v(" Socket::getInputStreamContext")]),t._v(" "),e("p",[t._v("Get input stream context. "),e("ul",[e("li",[e("strong",[t._v("@return")])])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Context"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputStreamContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),e("h3",{attrs:{id:"socket-close"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-close"}},[t._v("#")]),t._v(" Socket::close")]),t._v(" "),e("p",[t._v("Close socket pipes.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);