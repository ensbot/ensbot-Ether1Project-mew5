(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6880d338"],{"0003":function(t,e,a){"use strict";a.d(e,"e",function(){return l}),a.d(e,"d",function(){return o}),a.d(e,"c",function(){return c}),a.d(e,"f",function(){return u}),a.d(e,"h",function(){return d}),a.d(e,"g",function(){return p}),a.d(e,"a",function(){return v}),a.d(e,"b",function(){return h});a("6b54");var i=a("901e"),n=a.n(i),s=function(t){return new n.a(t)},r=function(t,e,a){return s(t).times(s(e)).div(s(a))};function l(t){return n.a.isBigNumber(t)||(t=new n.a(t)),t.times(100).toString()}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n.a.isBigNumber(t)||(t=new n.a(t)),!isFinite(t)||isNaN(t)?"--":a?t.toFixed(e,n.a.ROUND_DOWN).toString():t.toFixed(e).toString()}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=o(l(t),e,a);return isFinite(i)&&new n.a(i).gt(0)?i:"--"}function u(t,e,a,i){return r(s(t),s(e),s(a)).minus(s(i))}function d(t,e,a,i){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return s(t).minus(r(s(e).plus(.001),s(a),s(i))).minus(s(n).times(1))}function p(t,e,a,i){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return s(t).minus(r(s(e),s(a),s(i))).minus(s(n).times(1))}function v(t,e,a){return r(s(a),t,e)}function h(t,e,a,i){for(var n=parseInt(a),l=n;l>0;l--){var o=r(l,t,e).lte(s(i));if(o)return l}for(var c=100;c>0;c--){var u=r(c/100,t,e).lte(s(i));if(u)return c/100}return 0}},"03c4":function(t,e,a){"use strict";a.r(e);var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"manage-cdp"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.finishMigration,expression:"!finishMigration"}],staticClass:"manage-container"},[a("div",{staticClass:"title-content-container"},[a("p",{staticClass:"cpd-title"},[t._v(t._s(t.$t("dappsMaker.cdpPortal")))]),a("p",{staticClass:"cdp-id"},[t._v("\n        "+t._s(t.$t("dappsMaker.positionLabel",{value:t.cdpIdDisplay}))+"\n      ")])]),a("div",{staticClass:"information-blocks"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("div",{staticClass:"for-pop"},[a("p",[t._v(t._s(t.$t("dappsMaker.liquidPrice"))+" (ETH/USD)")]),"--"===t.liquidationPriceDisplay?a("p",{staticClass:"pop-icon"},[a("popover",{attrs:{popcontent:t.$t("dappsMaker.whatIsDashes")}})],1):t._e()]),a("div",{staticClass:"blue"},[a("span",{staticClass:"blue-bold"},[t._v(t._s(t.liquidationPriceDisplay))]),t._v("\n            USD\n          ")])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.currentPrice"))+"(ETH/USD)")]),a("div",[t._v(t._s(t.ethPriceDisplay)+" "),a("span",[t._v("USD")])])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.liquidationPenalty")))]),a("div",[t._v(t._s(t.liquidationPenaltyDisplay)+"%")])])])]),a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("div",{staticClass:"for-pop"},[a("p",[t._v(t._s(t.$t("dappsMaker.collateralRatio")))]),"--"===t.liquidationPriceDisplay?a("p",{staticClass:"pop-icon"},[a("popover",{attrs:{popcontent:t.$t("dappsMaker.whatIsDashes")}})],1):t._e()]),a("div",{class:t.collateralRatioColoring},[a("span",[t._v(t._s(t.collaterlizationRatioDisplay)+"%")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.minimumRatio")))]),a("div",[t._v(t._s(t.liquidationRatioDisplay)+"%")])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.stabilityFee")))]),a("div",[t._v(t._s(t.stabilityFeeDisplay)+"%")])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMaker.ethCollateral")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.deposited")))]),a("div",[t._v("\n                "+t._s(t.ethCollateral)+"\n                "),a("span",[t._v("ETH")])]),a("div",[t._v("\n                "+t._s(t.pethCollateral)+"\n                "),a("span",[t._v("PETH")]),t._v(" /\n                "+t._s(t.usdCollateral)+"\n                "),a("span",[t._v("USD")])]),a("button",{on:{click:t.showDeposit}},[t._v("\n                "+t._s(t.$t("dappsMaker.deposit"))+" >\n              ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.maxWithDraw")))]),a("div",[t._v("\n                "+t._s(t.maxEthDrawDisplay)+"\n                "),a("span",[t._v("ETH")])]),a("div",[t._v("\n                "+t._s(t.maxPethDrawDisplay)+"\n                "),a("span",[t._v("PETH")]),t._v(" /\n                "+t._s(t.maxUsdDrawDisplay)+"\n                "),a("span",[t._v("USD")])]),a("button",{on:{click:t.showWithdraw}},[t._v("\n                "+t._s(t.$t("dappsMaker.withdraw"))+" >\n              ")])])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMaker.daiPosition")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.generated")))]),a("div",[t._v(t._s(t.debtValue)+" "),a("span",[t._v("DAI")])]),a("div",[t._v("\n                "+t._s(t.debtValueDisplay)+"\n                "),a("span",[t._v("USD")])]),a("button",{on:{click:t.showPayback}},[t._v("\n                "+t._s(t.$t("dappsMaker.payBack"))+" >\n              ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.maxAvailable")))]),a("div",[t._v("\n                "+t._s(t.maxDai)+"\n                "),a("span",[t._v("DAI")])]),a("div",[t._v("\n                "+t._s(t.maxUsd)+"\n                "),a("span",[t._v("USD")])]),a("button",{on:{click:t.showGenerate}},[t._v("\n                "+t._s(t.$t("dappsMaker.generate"))+" >\n              ")])])])])])])]),a("help-link")],1)},s=[],r=(a("8e6e"),a("456d"),a("96cf"),a("3b8d")),l=(a("ac6a"),a("bd86")),o=(a("c5f6"),a("2f62")),c=a("55c1"),u=a("539d"),d=a("8e13"),p=a("c8e5"),v=a("0003"),h=a("901e"),f=a.n(h);function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function _(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(a,!0).forEach(function(e){Object(l["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var y=function(t){return new f.a(t)},m={components:{"interface-container-title":c["a"],"interface-bottom-text":u["a"],blockie:p["a"],"help-link":d["a"]},props:{openCloseModal:{type:Boolean,default:!1},openMoveModal:{type:Boolean,default:!1},tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},valuesUpdated:{type:Number,default:0},getCdp:{type:Function,default:function(){}},hasCdp:{type:Function,default:function(){}},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",wethToPethRatio:"",liquidationPenalty:"",targetPrice:"",pethPrice:""}}},ethPrice:{type:f.a,default:y(0)},pethPrice:{type:f.a,default:y(0)},liquidationPenalty:{type:f.a,default:y(0)},stabilityFee:{type:f.a,default:y(0)},liquidationRatio:{type:f.a,default:y(0)},wethToPethRatio:{type:f.a,default:y(0)},pethMin:{type:f.a,default:y(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}}},data:function(){return{activeCdp:{},loaded:!1,ethQty:0,daiQty:0,selectedCdp:"",cdpId:"",cdp:{},maxDaiDraw:y(0),maxWithDraw:y(0),maxWithDrawUSD:y(0),maxPethDraw:y(0),maxEthDraw:y(0)}},computed:_({},Object(o["b"])(["account","gasPrice","web3","network","ens"]),{noProxy:function(){if(this.activeCdp)return this.activeCdp.noProxy},finishMigration:function(){if(this.activeCdp)return this.activeCdp.needToFinishMigrating},collateralRatioColoring:function(){return this.values?this.values.collateralRatio>=2?"green":this.values.collateralRatio>=1.75&&this.values.collateralRatio<2?"orange":"red":""},liquidationPriceDisplay:function(){if(this.values){var t=Object(v["d"])(this.values.liquidationPrice,2);return new f.a(t).gt(0)?t:"--"}return"--"},collaterlizationRatioDisplay:function(){return this.values?Object(v["c"])(this.values.collateralRatio):"--"},cdpIdDisplay:function(){return this.values?this.values.cdpId:"--"},liquidationRatioDisplay:function(){return this.values?Object(v["d"])(Object(v["e"])(this.liquidationRatio)):"--"},liquidationPenaltyDisplay:function(){return this.values?Object(v["d"])(Object(v["e"])(this.liquidationPenalty)):"--"},stabilityFeeDisplay:function(){return this.values?Object(v["d"])(Object(v["e"])(this.stabilityFee)):"--"},ethPriceDisplay:function(){return this.values?Object(v["d"])(this.ethPrice,2):"--"},maxPethDrawDisplay:function(){return this.values?Object(v["d"])(this.values.maxPethDraw,5):"--"},zeroDebt:function(){return y(this.values.debtValue).eq(0)},maxEthDrawDisplay:function(){return this.values?this.values.maxEthDraw:"--"},maxUsdDrawDisplay:function(){return this.values?Object(v["d"])(this.values.maxUsdDraw,2):"--"},ethCollateral:function(){return this.values?Object(v["d"])(this.values.ethCollateral,5,!0):"--"},pethCollateral:function(){return this.values?Object(v["d"])(this.values.pethCollateral,5,!0):"--"},usdCollateral:function(){return this.values?Object(v["d"])(this.values.usdCollateral,2):"--"},debtValueDisplay:function(){return this.values?Object(v["d"])(this.values.debtValue,2):"--"},debtValue:function(){return this.values?this.values.debtValue:"--"},maxDai:function(){return this.values?this.values.maxDai:"--"},maxUsd:function(){return this.values?Object(v["d"])(this.values.maxDai,2):"--"}}),watch:(i={},Object(l["a"])(i,"activeCdp.ready",function(){this.isReady()}),Object(l["a"])(i,"openCloseModal",function(t){t&&this.showClose()}),Object(l["a"])(i,"openMoveModal",function(t){t&&this.showMove()}),i),mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.activeCdp={},this.cdpId=this.$route.params.cdpId,this.makerActive&&(this.loaded=!0,this.cdpId&&this.$emit("activeCdpId",this.cdpId));case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{showDeposit:function(){this.$emit("showDeposit")},showWithdraw:function(){this.$emit("showWithdraw")},showPayback:function(){this.$emit("showPayback")},showGenerate:function(){this.$emit("showGenerate")},displayPercentValue:v["e"],displayFixedValue:v["d"],isReady:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}},w=m,C=(a("86be"),a("2877")),D=Object(C["a"])(w,n,s,!1,null,"b39844ac",null),k=D.exports;e["default"]=k},"66f70":function(t,e,a){},"86be":function(t,e,a){"use strict";var i=a("aafc"),n=a.n(i);n.a},"8e13":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Bottom-help-link"},["issues"==t.type?a("div",{staticClass:"issues"},[t._v("\n    Having issues?\n    "),a("a",{attrs:{href:"https://kb.myetherwallet.com/",target:"_blank"}},[t._v("Help Center")])]):t._e()])},n=[],s={props:{type:{type:String,default:"issues"}},data:function(){return{popOverId:"popoverid"+String(Math.floor(1e8*Math.random()))}}},r=s,l=(a("b234"),a("2877")),o=Object(l["a"])(r,i,n,!1,null,"bb016cdc",null),c=o.exports;a.d(e,"a",function(){return c})},aafc:function(t,e,a){},b234:function(t,e,a){"use strict";var i=a("66f70"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-6880d338.efedcfc7.js.map