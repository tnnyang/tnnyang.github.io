webpackJsonp([11],{LPc3:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("Cz8s"),a=i("MKSO"),r=i("spLH"),s=(i("6FUn"),i("h65/"),i("9Ezv"),{data:function(){return{beginTime:"",endTime:"",community:"",selectedType:"",typeOptions:[],orderNumber:"",orderRecord:[],pageSize:13,pageIndex:1,total:0,pageShow:!1,recordShow:!0,noDataShow:!1}},mounted:function(){this.$nextTick(function(){this.getOrderRecord(),this.getType()})},methods:{getOrderRecord:function(e){var t=this,i={commuity:this.community,modelId:0==this.selectedType?"":this.selectedType,orderNo:this.orderNumber,beginTime:this.beginTime,endTime:this.endTime,orderStatus:this.$route.params.model,pageSize:this.pageSize,pageIndex:e||this.pageIndex};util.apiPost(api,i).then(function(e){t.recordShow=!1,t.noDataShow=!0})},getType:function(){var e=this;util.apiPost(api).then(function(t){e.typeOptions=t.getModelList})},search:function(){this.getOrderRecord(),this.$store.dispatch("curPage")},chooseBeginTime:function(){var e=this;laydate({elem:"#beginTime",istime:!0,format:"YYYY-MM-DD hh:mm:ss",choose:function(t){e.beginTime=t}})},chooseEndTime:function(){var e=this;laydate({elem:"#endTime",istime:!0,format:"YYYY-MM-DD hh:mm:ss",choose:function(t){e.endTime=t}})}},components:{top:o.a,sliderBar:a.a,pagination:r.a}}),n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-sm-9 main"},[i("h3",{staticClass:"main-title"},[e._v("待下户")]),e._v(" "),i("form",{staticClass:"form-inline"},[i("div",{staticClass:"form-group",staticStyle:{width:"22.5%"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.beginTime,expression:"beginTime"}],staticClass:"form-control datetime",staticStyle:{width:"100%"},attrs:{type:"text",id:"beginTime"},domProps:{value:e.beginTime},on:{click:e.chooseBeginTime,input:function(t){t.target.composing||(e.beginTime=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group",staticStyle:{"margin-left":"5px",width:"25%"}},[i("label",[e._v("至")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.endTime,expression:"endTime"}],staticClass:"form-control datetime",staticStyle:{"margin-left":"5px",width:"90%"},attrs:{type:"text",id:"endTime"},domProps:{value:e.endTime},on:{click:e.chooseEndTime,input:function(t){t.target.composing||(e.endTime=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group",staticStyle:{width:"15%"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.community,expression:"community"}],staticClass:"form-control",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"请输入小区名"},domProps:{value:e.community},on:{input:function(t){t.target.composing||(e.community=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedType,expression:"selectedType"}],staticClass:"form-control",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedType=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:""}},[e._v("请选择类型")]),e._v(" "),e._l(e.typeOptions,function(t){return i("option",{domProps:{value:t.id}},[e._v(e._s(t.modelName))])})],2)]),e._v(" "),i("div",{staticClass:"form-group",staticStyle:{width:"14%"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.orderNumber,expression:"orderNumber"}],staticClass:"form-control",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"请输入订单号"},domProps:{value:e.orderNumber},on:{input:function(t){t.target.composing||(e.orderNumber=t.target.value)}}})]),e._v(" "),i("button",{staticClass:"btn btn-default yellow-bg",attrs:{type:"button"},on:{click:e.search}},[e._v("查询")])]),e._v(" "),i("div",{staticClass:"table-responsive",staticStyle:{"margin-top":"30px"}},[i("table",{staticClass:"table",class:{noborder:!e.recordShow}},[e._m(0),e._v(" "),i("tbody",[e._l(e.orderRecord,function(t){return i("tr",{directives:[{name:"show",rawName:"v-show",value:e.recordShow,expression:"recordShow"}]},[i("td",[e._v(e._s(t.orderNo))]),e._v(" "),i("td",[e._v(e._s(t.orderCustCompoundName))]),e._v(" "),i("td",[e._v(e._s(t.createTime))]),e._v(" "),i("td",[e._v(e._s(t.orderCustTime))]),e._v(" "),i("td",[e._v(e._s(t.modelName))]),e._v(" "),i("td",[i("router-link",{attrs:{to:"/waitingXiaHuDetail/"+t.id}},[e._v("查看")])],1)])}),e._v(" "),i("tr",{directives:[{name:"show",rawName:"v-show",value:e.noDataShow,expression:"noDataShow"}]},[i("td",{staticStyle:{padding:"50px 0 50px"},attrs:{colspan:"6"}},[e._v("暂无数据")])])],2)])]),e._v(" "),e.pageShow?i("pagination",{attrs:{total:e.total,"current-page":e.pageIndex,"page-size":e.pageSize},on:{pageChange:e.getOrderRecord}}):e._e()],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("tr",[i("th",[e._v("订单号")]),e._v(" "),i("th",[e._v("小区名")]),e._v(" "),i("th",[e._v("下单时间")]),e._v(" "),i("th",[e._v("下户预约时间")]),e._v(" "),i("th",[e._v("类型")]),e._v(" "),i("th",[e._v("操作")])])])}]},c=i("Z0/y")(s,n,!1,null,null,null);t.default=c.exports}});
//# sourceMappingURL=11.7c45480ff5f4e790b069.js.map