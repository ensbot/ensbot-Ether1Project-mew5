(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43fc32ad"],{"71be":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"transfer-registrar-container"},[n("div",{staticClass:"transfer-registrar-content"},[n("h3",[e._v(e._s(e.fullDomainName)+" is still in the old registrar!")]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.isOwner,expression:"isOwner"}]},[e._v("\n      Since you are are the owner of "+e._s(e.fullDomainName)+" you can transfer the\n      name to the new registrar using transfer button\n    ")]),n("div",{staticClass:"transfer-registrar-button"},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.isOwner,expression:"isOwner"}],class:["large-round-button-green-filled",e.loading?"disabled":""],on:{click:e.transferFunc}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._v("\n          Transfer\n        ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),n("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},a=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=n("2f62"),i=n("539d");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var l={components:{"interface-bottom-text":i["a"]},props:{hostName:{type:String,default:""},deedOwner:{type:String,default:""},transferFunc:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},tld:{type:String,default:""}},computed:u({},Object(o["b"])({account:"account"}),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)},isOwner:function(){return this.account.address.toLowerCase()===this.deedOwner.toLowerCase()}}),mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")}},f=l,d=(n("bc01"),n("2877")),p=Object(d["a"])(f,r,a,!1,null,"48e6f3fa",null),w=p.exports;n.d(t,"default",function(){return w})},a98c:function(e,t,n){},bc01:function(e,t,n){"use strict";var r=n("a98c"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-43fc32ad.23436efd.js.map