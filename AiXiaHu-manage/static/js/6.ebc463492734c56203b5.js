webpackJsonp([6],{"/afw":function(t,e){},X1lq:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Cz8s"),a=i("MKSO"),s=(i("fAxu"),i("6FUn"),i("h65/"),i("9Ezv"),i("rVsN")),n=i.n(s);var r={data:function(){return{reserveDate:"",community:"",cityInfo:{province:"",city:"",district:""},address:"",modelType:"",typeOptions:[],userlocation:{lng:"",lat:""}}},mounted:function(){this.$nextTick(function(){var t,e=this;util.apiPost(api).then(function(t){e.typeOptions=t.getModelList}),(t="sXYKoWGxQfuzrTcpITiYnBHO",new n.a(function(e,i){window.init=function(){e(BMap)};var o=document.createElement("script");o.src="http://api.map.baidu.com/api?v=2.0&ak="+t+"&callback=init",o.onerror=i,document.body.appendChild(o)})).then(function(t){var i=e,o=new t.Map("BMap"),a=new t.Point(121.47,31.23);o.centerAndZoom(a,15),o.enableScrollWheelZoom();var s,n=new t.Geocoder;new t.Autocomplete({input:"suggestId",location:o}).addEventListener("onconfirm",function(e){var a=e.item.value;s=a.province+a.city+a.district+a.street+a.business,this.suggestId=s,i.address=s,function(){o.clearOverlays();var e=new t.LocalSearch(o,{onSearchComplete:function(){i.userlocation=e.getResults().getPoi(0).point,o.centerAndZoom(i.userlocation,15),o.addOverlay(new t.Marker(i.userlocation)),n.getLocation(i.userlocation,function(t){var e=t.addressComponents;e.province,e.city,e.district,e.street,e.streetNumber;i.cityInfo.province=e.province,i.cityInfo.city=e.city,i.cityInfo.district=e.district})}});e.search(s)}()})})})},methods:{createOrder:function(){var t=this;return this.reserveDate?this.community?this.address?this.modelType?this.userlocation.lng&&this.userlocation.lat?(console.log(this.modelType),void util.msgFoo("创建成功",function(){t.$router.push("/orderRecord")})):(util.alertMsg("请选择地址坐标"),!1):(util.alertMsg("请输入下户类型"),!1):(util.alertMsg("请输入下户地址"),!1):(util.alertMsg("请输入小区名称"),!1):(util.alertMsg("请输入下户预约时间"),!1)},orderDate:function(){var t=this;laydate({elem:"#orderDate",istime:!0,format:"YYYY-MM-DD hh:mm:ss",choose:function(e){t.reserveDate=e}})}},components:{top:o.a,sliderBar:a.a}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-sm-9 main"},[i("h3",{staticClass:"main-title"},[t._v("新建订单")]),t._v(" "),i("div",{staticClass:"row placeholders customer-inline"},[i("div",{staticClass:"col-sm-4",staticStyle:{width:"35%"}},[i("label",[t._v("下户预约时间")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.reserveDate,expression:"reserveDate"}],staticClass:"form-control datetime",attrs:{type:"text",id:"orderDate"},domProps:{value:t.reserveDate},on:{click:t.orderDate,input:function(e){e.target.composing||(t.reserveDate=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-sm-4",staticStyle:{padding:"0",width:"32%"}},[i("label",[t._v("小区名称")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.community,expression:"community"}],staticClass:"form-control",staticStyle:{width:"58%"},attrs:{type:"text",placeholder:"小区名称"},domProps:{value:t.community},on:{input:function(e){e.target.composing||(t.community=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-sm-4",staticStyle:{padding:"0",width:"32%"}},[i("label",[t._v("下户类型")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.modelType,expression:"modelType"}],staticClass:"form-control",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.modelType=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:""}},[t._v("请选择类型")]),t._v(" "),t._l(t.typeOptions,function(e){return i("option",{domProps:{value:e.id}},[t._v(t._s(e.modelName))])})],2)]),t._v(" "),i("div",{staticClass:"col-sm-8"},[i("label",[t._v("下户地址")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",staticStyle:{width:"80.5%"},attrs:{type:"text",id:"suggestId",placeholder:"下户地址"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("button",{staticClass:"btn btn-default yellow-bg",staticStyle:{width:"83%","margin-left":"40px"},attrs:{type:"button"},on:{click:t.createOrder}},[t._v("确定")])])]),t._v(" "),i("div",{attrs:{id:"BMap"}})])},staticRenderFns:[]};var c=i("Z0/y")(r,l,!1,function(t){i("/afw")},"data-v-6f04bb9a",null);e.default=c.exports}});
//# sourceMappingURL=6.ebc463492734c56203b5.js.map