(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ed9cfdb"],{2476:function(t,e,a){"use strict";var i=a("ac28"),n=a.n(i);n.a},"44c8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-currency-container"},[a("interface-container-title",{attrs:{title:t.$t("common.sendTx")}}),a("div",{staticClass:"send-form"},[a("div",{staticClass:"form-block amount-to-address"},[a("div",{staticClass:"amount"},[a("div",{staticClass:"single-input-block"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("interface.sendTxType")))])]),a("currency-picker",{attrs:{currency:t.tokensWithBalance,page:"sendEthAndTokens",token:!0,default:""!==t.selectedCurrency?t.selectedCurrency:{}},on:{selectedCurrency:function(e){t.selectedCurrency=e}}})],1),a("div",{staticClass:"single-input-block"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("interface.sendTxAmount")))]),a("p",{staticClass:"title-button prevent-user-select",on:{click:t.sendEntireBalance}},[t._v("\n              Entire Balance\n            ")])]),a("div",{staticClass:"the-form amount-number"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"min_value:0",expression:"'min_value:0'"},{name:"model",rawName:"v-model",value:t.toValue,expression:"toValue"}],attrs:{type:"number",placeholder:"Amount",min:"0",name:"value",step:"any"},domProps:{value:t.toValue},on:{input:function(e){e.target.composing||(t.toValue=e.target.value)}}}),a("i",{class:[!t.isValidAmount.valid||t.errors.has("value")?"not-good":"","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})]),!t.isValidAmount.valid||t.errors.has("value")?a("div",{staticClass:"error-message-container"},[a("p",[t._v(t._s(t.isValidAmount.msg))])]):t._e()])]),a("div",{staticClass:"to-address"},[a("div",{staticClass:"title"},[a("h4",[t._v("\n            "+t._s(t.$t("interface.sendTxToAddr"))+"\n            "),a("blockie",{directives:[{name:"show",rawName:"v-show",value:t.isValidAddress,expression:"isValidAddress"}],staticClass:"blockie-image",attrs:{address:t.hexAddress,size:8,scale:16,width:"32px",height:"32px"}})],1),a("p",{staticClass:"copy-button prevent-user-select",on:{click:function(e){return t.copyToClipboard("address")}}},[t._v("\n            "+t._s(t.$t("common.copy"))+"\n          ")])]),a("div",{staticClass:"the-form address-block"},[a("input",{directives:[{name:"ens-resolver",rawName:"v-ens-resolver",value:"address",expression:"'address'"},{name:"model",rawName:"v-model",value:t.address,expression:"address"}],ref:"address",attrs:{type:"text",name:"name",autocomplete:"off"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),a("i",{class:[t.isValidAddress&&0!==t.hexAddress.length?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"tx-fee"},[a("div",{staticClass:"title"},[a("h4",[t._v("\n            "+t._s(t.$t("common.txFee"))+"\n          ")]),a("p",{staticClass:"copy-button prevent-user-select",on:{click:t.openSettings}},[t._v("\n            "+t._s(t.$t("common.edit"))+"\n          ")])]),a("div",{staticClass:"fee-value"},[a("div",{staticClass:"gwei"},[t._v("\n            "+t._s(t.gasPrice)+" Gwei\n            ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:"ETH"===t.network.type.name,expression:"network.type.name === 'ETH'"}],staticClass:"usd"},[t._v("\n            Cost "+t._s(t.txFeeEth)+" ETH = $"+t._s(t.convert)+"\n          ")])])])])]),a("div",{staticClass:"send-form advanced"},[a("div",{staticClass:"advanced-content"},[a("div",{staticClass:"toggle-button-container"},[a("h4",[t._v(t._s(t.$t("common.advanced")))]),a("div",{staticClass:"toggle-button"},[a("span",[t._v(t._s(t.$t("interface.dataGas")))]),a("div",{staticClass:"sliding-switch-white"},[a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox"},on:{click:function(e){t.advancedExpand=!t.advancedExpand}}}),a("span",{staticClass:"slider round"})])])])]),a("div",{staticClass:"input-container",class:t.advancedExpand&&"input-container-open"},[a("div",{staticClass:"margin-container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isToken,expression:"!isToken"}],staticClass:"the-form user-input"},[a("p",[t._v("Add Data")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.toData,expression:"toData"}],attrs:{type:"text",placeholder:"Add Data (e.g. 0x7834f874g298hf298h234f)",autocomplete:"off"},domProps:{value:t.toData},on:{input:function(e){e.target.composing||(t.toData=e.target.value)}}}),a("i",{class:[t.isValidData?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"the-form user-input"},[a("p",[t._v(t._s(t._f("capitalize")(t.$t("common.gasLimit"))))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gasLimit,expression:"gasLimit"}],attrs:{placeholder:t.$t("common.gasLimit"),type:"number",min:"0",name:""},domProps:{value:t.gasLimit},on:{input:function(e){e.target.composing||(t.gasLimit=e.target.value)}}}),a("i",{class:[t.isValidGasLimit?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])])])]),a("div",{staticClass:"submit-button-container"},[a("div",{class:[t.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.submitTransaction}},[t._v("\n      "+t._s(t.$t("interface.sendTx"))+"\n    ")]),a("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)],1)},n=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("7618")),r=(a("96cf"),a("3b8d")),o=(a("7514"),a("7f7f"),a("6b54"),a("28a5"),a("bd86")),c=(a("c5f6"),a("2f62")),l=a("55c1"),d=a("d7a2"),u=a("539d"),h=a("c8e5"),m=a("8d23"),p=a("ce96"),f=a("901e"),v=a.n(f),g=a("70c1"),b=a.n(g),w=a("1131"),y=a.n(w),x=a("a18f"),C=a.n(x);function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function T(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(a,!0).forEach(function(e){Object(o["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var V={components:{"interface-container-title":l["a"],"interface-bottom-text":u["a"],blockie:h["a"],"currency-picker":d["a"]},props:{checkPrefilled:{type:Function,default:function(){}},clearPrefilled:{type:Function,default:function(){}},isPrefilled:{type:Boolean,default:!1},value:{type:String,default:"0"},data:{type:String,default:""},to:{type:String,default:""},gaslimit:{type:String,default:""},gas:{type:Number,default:0},tokensymbol:{type:String,default:""},tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},highestGas:{type:String,default:"0"}},data:function(){return{advancedExpand:!1,isValidAddress:!1,hexAddress:"",address:"",toValue:"0",gasLimit:"21000",toData:"",selectedCurrency:"",ethPrice:0}},computed:T({},Object(c["b"])(["account","gasPrice","web3","network","linkQuery","online"]),{txFee:function(){return new v.a(b.a.toWei(this.gasPrice,"gwei")).times(this.gasLimit||0)},txFeeEth:function(){return new v.a(this.txFee).gt(0)?b.a.fromWei(this.txFee,"ether"):0},isValidAmount:function(){var t=this.$t("errorsGlobal.notAValidAmountTotal")+" Gas "+this.$t("errorsGlobal.toSend"),e=this.$t("errorsGlobal.notAValidAmountTotal")+" "+this.selectedCurrency.symbol+" "+this.$t("errorsGlobal.toSend"),a=this.$t("errorsGlobal.notAValidAmountTotal")+" "+this.network.type.currencyName+" "+this.$t("errorsGlobal.toSend"),i=this.$t("errorsGlobal.invalidValue"),n=new v.a(this.toValue).lte(this.selectedCurrency.balance),s=new v.a(this.toValue).plus(this.txFeeEth).lte(this.balanceDefault),r=new v.a(this.txFeeEth).lte(this.balanceDefault),o=this.isValidDecimals;if(new v.a(this.toValue).lt(0))return{msg:i,valid:!1};if(this.isToken){var c=n&&r&&o;return{valid:c,msg:c?"":n?r?i:t:e}}return{valid:s&&o,msg:s?"":s?i:a}},isValidDecimals:function(){var t=(this.toValue+"").split(".")[1];return!t||(this.isToken?t.length<=this.selectedCurrency.decimals:t.length<=18)},isValidData:function(){return p["c"].validateHexString(this.toData)},isValidGasLimit:function(){return new v.a(this.gasLimit).gte(0)},balanceDefault:function(){return new v.a(b.a.fromWei(this.account.balance,"ether"))},validInputs:function(){return this.isValidAmount.valid&&this.isValidAddress&&new v.a(this.gasLimit).gte(0)&&p["c"].validateHexString(this.toData)},isToken:function(){var t=this.network.type.currencyName;return this.selectedCurrency.symbol!==t},txData:function(){return this.isToken?this.getTokenTransferABI(this.toValue,this.selectedCurrency.decimals):p["c"].sanitizeHex(this.toData)},txValue:function(){return this.isToken?"0x00":p["c"].sanitizeHex(b.a.toWei(this.toValue,"ether").toString(16))},txTo:function(){return this.isToken?this.selectedCurrency.address.toLowerCase():this.hexAddress.toLowerCase().trim()},multiWatch:function(){return this.toValue,this.isValidAddress,this.toData,this.selectedCurrency,(new Date).getTime()/1e3},convert:function(){return this.ethPrice?new v.a(new v.a(this.txFeeEth).times(new v.a(this.ethPrice))).toFixed(2).toString():"--"}}),watch:{multiWatch:y.a._.debounce(function(){this.validInputs&&this.estimateGas()},500),network:function(t){this.online&&"ETH"===t.type.name&&this.getEthPrice()},isPrefilled:function(){this.prefillForm()}},mounted:function(){this.checkPrefilled(),this.online&&"ETH"===this.network.type.name&&this.getEthPrice()},methods:{prefillForm:function(){var t=this;if(this.isPrefilled){var e=this.tokensymbol?this.tokensWithBalance.find(function(e){return e.symbol.toLowerCase()===t.tokensymbol.toLowerCase()}):void 0;this.toData=p["c"].validateHexString(this.data)?this.data:"",this.toValue=this.value,this.hexAddress=this.to,this.address=this.to,this.gasLimit=new v.a(this.gaslimit).toString(),this.selectedCurrency=e||this.selectedCurrency,this.advancedExpand=!0,p["d"].responseHandler("Form has been prefilled. Please proceed with caution!",p["d"].WARN),this.clearPrefilled()}},openSettings:function(){this.$eventHub.$emit("open-settings")},sendEntireBalance:function(){this.isToken?this.toValue=this.selectedCurrency.balance:this.toValue=this.balanceDefault>0?this.balanceDefault.minus(b.a.fromWei(new v.a(b.a.toWei(this.gasPrice,"gwei")).times(this.gasLimit).toString(),"ether")):0},getTokenTransferABI:function(t,e){var a=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],i=new this.web3.eth.Contract(a);return i.methods.transfer(this.hexAddress.toLowerCase(),new v.a(t).times(new v.a(10).pow(e)).toFixed()).encodeABI()},estimateGas:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.web3.eth.getCoinbase();case 2:e=t.sent,a={from:e,value:this.txValue,to:this.txTo,gasPrice:p["c"].sanitizeHex(b.a.toWei(this.gasPrice,"gwei").toString(16)),data:this.txData},this.web3.eth.estimateGas(a).then(function(t){i.gasLimit=t}).catch(function(t){i.gasLimit=-1,p["d"].responseHandler(t,p["d"].ERROR)});case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),submitTransaction:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,i,n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return window.scrollTo(0,0),t.prev=1,t.next=4,this.web3.eth.getCoinbase();case 4:return e=t.sent,t.next=7,this.web3.eth.getTransactionCount(e);case 7:a=t.sent,i={nonce:p["c"].sanitizeHex(new v.a(a).toString(16)),gasPrice:p["c"].sanitizeHex(b.a.toWei(this.gasPrice,"gwei").toString(16)),gasLimit:p["c"].sanitizeHex(new v.a(this.gasLimit).toString(16)),to:this.txTo,value:this.txValue,data:this.txData},n=new m["Transaction"](i),s=n.toJSON(!0),s.from=e,this.web3.eth.sendTransaction(s).catch(function(t){p["d"].responseHandler(t,p["d"].ERROR)}),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](1),p["d"].responseHandler(t.t0,p["d"].ERROR);case 18:case"end":return t.stop()}},t,this,[[1,15]])}));function e(){return t.apply(this,arguments)}return e}(),getEthPrice:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C()("https://cryptorates.mewapi.io/ticker?filter=ETH").then(function(t){return t.json()}).catch(function(t){p["d"].responseHandler(t,p["d"].ERROR)});case 2:e=t.sent,this.ethPrice="object"===Object(s["a"])(e)?e.data.ETH.quotes.USD.price:0;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),copyToClipboard:function(t){this.$refs[t].select(),document.execCommand("copy")}}},_=V,P=(a("2476"),a("2877")),A=Object(P["a"])(_,i,n,!1,null,"d1c3f150",null),E=A.exports;a.d(e,"default",function(){return E})},ac28:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6ed9cfdb.cfab499c.js.map