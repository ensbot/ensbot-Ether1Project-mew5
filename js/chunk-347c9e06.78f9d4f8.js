(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347c9e06"],{"10b7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"initial-state-ens"},[a("form",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",[e._v("\n          "+e._s(e.$t("interface.ensManager"))+"\n        ")]),a("p",[e._v(e._s(e.$t("interface.registerEnsDesc")))])])]),a("div",{staticClass:"the-form domain-name"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.localDomainName,expression:"localDomainName"}],class:[e.domainNameErr?"errored":""],attrs:{placeholder:e.$t("dapps.registerEnsPlaceholder"),type:"text",name:""},domProps:{value:e.localDomainName},on:{input:function(t){t.target.composing||(e.localDomainName=t.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.multiTld,expression:"!multiTld"}]},[e._v("."+e._s(e.tld))])]),a("div",{staticClass:"error-message-container"},[a("p",{directives:[{name:"show",rawName:"v-show",value:!1===e.contractInitiated,expression:"contractInitiated === false"}],staticClass:"contract-loading-warning"},[e._v("\n        "+e._s(e.$t("dapps.registerEnsContractNotReady"))+"\n      ")]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.domainNameErr,expression:"domainNameErr"}],staticClass:"erroredMsg"},[e.isValidLength||""===e.localDomainName?a("span",[e._v(" "+e._s(e.$t("dapps.registerEnsWarn2"))+" ")]):a("span",[e._v("\n          "+e._s(e.$t("dapps.registerEnsWarn1"))+"\n        ")])])]),a("div",{staticClass:"submit-button-container"},[a("button",{class:[e.domainNameErr||""===e.localDomainName?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:function(t){return t.preventDefault(),e.checkDomain(t)}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._v(" "+e._s(e.$t("interface.checkDomain"))+" ")]),a("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),a("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},i=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("bd86")),o=a("539d"),r=a("2f62");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var d={components:{"interface-bottom-text":o["a"]},props:{checkDomain:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},contractInitiated:{type:Boolean,default:!1},hostName:{type:String,default:""},tld:{type:String,default:""},domainNameErr:{type:Boolean,default:!1},multiTld:{type:Boolean,default:!1}},data:function(){return{localDomainName:this.hostName}},computed:l({},Object(r["b"])(["network"]),{isValidLength:function(){return this.localDomainName.replace("."+this.network.type.ens.registrarTLD,"").length>6}}),watch:{localDomainName:function(e){this.$emit("domainNameChange",e)},domainName:function(e){this.localDomainName=e}},methods:{expendDomainCheckForm:function(){this.$refs["checkForm"].classList.toggle("hidden"),this.$refs["domainList"].classList.add("hidden")},domainAvailabilityCheck:function(){this.$refs["domainList"].classList.add("hidden")}}},m=d,u=(a("7f40"),a("2877")),p=Object(u["a"])(m,n,i,!1,null,"03e8d2ce",null),f=p.exports;a.d(t,"default",function(){return f})},"7f40":function(e,t,a){"use strict";var n=a("97db"),i=a.n(n);i.a},"97db":function(e,t,a){}}]);
//# sourceMappingURL=chunk-347c9e06.78f9d4f8.js.map