(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a494e710"],{"01af":function(t,s,i){},"07f8":function(t,s,i){"use strict";var e=i("01af"),a=i.n(e);a.a},"8d3e":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"section"},[i("div",{staticClass:"container"},[i("AdSpot",{attrs:{"ad-slot":"calculator-top"}}),i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[t._m(0),i("h1",{staticClass:"title is-size-3 has-text-white"},[t._v(" Leveling Calculator "),i("a",{staticClass:"is-size-6 link",on:{click:function(s){return t.$router.go(-1)}}},[t._v("Go back")])])])]),i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-two-third"},[i("div",{staticClass:"box"},[i("h1",{staticClass:"title has-text-white is-size-4"},[t._v("Estimated Values")]),i("p",{staticClass:"subtitle has-text-grey-light is-size-6"},[t._v('Assuming you start from level 0. Time is not guaranteed and the realistic time is "guessed"')]),i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-one-third"},[i("h1",{staticClass:"title has-text-white is-size-7",staticStyle:{"margin-bottom":"10px"}},[t._v("Level")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"input",attrs:{type:"number",max:"1000",min:"0"},domProps:{value:t.level},on:{input:function(s){s.target.composing||(t.level=s.target.value)}}})]),t._m(1)]),i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("div",{staticClass:"field"},[i("label",{staticClass:"label has-text-white"},[t._v("Messages")]),i("p",{staticClass:"subtitle has-text-grey-light is-size-5"},[t._v(" Average: "),i("span",{staticClass:"arcane"},[t._v(t._s(t.required.messages.toLocaleString()))]),i("br"),t._v(" Max: "),i("span",{staticClass:"arcane"},[t._v(t._s(t.required.maximum.toLocaleString()))]),i("br"),t._v(" Min: "),i("span",{staticClass:"arcane"},[t._v(t._s(t.required.minimum.toLocaleString()))])])])]),i("div",{staticClass:"column"},[i("label",{staticClass:"label has-text-white"},[t._v("Required XP")]),i("p",{staticClass:"subtitle arcane is-size-5"},[t._v(t._s(t.required.xp.toLocaleString()))])]),i("div",{staticClass:"column"},[i("div",{staticClass:"field"},[i("label",{staticClass:"label has-text-white"},[t._v("Time")]),i("p",{staticClass:"subtitle has-text-grey-light is-size-5"},[t._v(" If you sent a message every "+t._s(t.cooldown)+" seconds: "),i("span",{staticClass:"arcane"},[t._v(t._s(t.required.time))]),i("br"),t._v(" Realisticly: "),i("span",{staticClass:"arcane"},[t._v(t._s(t.required.timeRealistic))])])])])]),t._v(" "+t._s(t.calculateRequired)+" ")])]),i("div",{staticClass:"column is-one-third"},[i("div",{staticClass:"box"},[i("h1",{staticClass:"title has-text-white is-size-5"},[t._v("XP Options")]),i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("h1",{staticClass:"title has-text-white is-size-7",staticStyle:{"margin-bottom":"10px"}},[t._v("Min")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.min,expression:"min"}],staticClass:"input",attrs:{type:"number",max:"50",min:"0"},domProps:{value:t.min},on:{input:function(s){s.target.composing||(t.min=s.target.value)}}})]),i("div",{staticClass:"column"},[i("h1",{staticClass:"title has-text-white is-size-7",staticStyle:{"margin-bottom":"10px"}},[t._v("Max")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.max,expression:"max"}],staticClass:"input",attrs:{type:"number",max:"100",min:"1"},domProps:{value:t.max},on:{input:function(s){s.target.composing||(t.max=s.target.value)}}})])]),i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("h1",{staticClass:"title has-text-white is-size-7",staticStyle:{"margin-bottom":"10px"}},[t._v("Cooldown (Seconds)")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.cooldown,expression:"cooldown"}],staticClass:"input",attrs:{type:"number",max:"3600",min:"1"},domProps:{value:t.cooldown},on:{input:function(s){s.target.composing||(t.cooldown=s.target.value)}}})]),i("div",{staticClass:"column"},[i("h1",{staticClass:"title has-text-white is-size-7",staticStyle:{"margin-bottom":"10px"}},[t._v("Formula Multiplier")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.multiplier,expression:"multiplier"}],staticClass:"input",attrs:{type:"number",max:"3600",min:"1"},domProps:{value:t.multiplier},on:{input:function(s){s.target.composing||(t.multiplier=s.target.value)}}})])])])])]),i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-one-third"},[i("div",{staticClass:"box"},[i("h1",{staticClass:"title has-text-white is-size-5"},[t._v("Want custom XP options?")]),i("h1",{staticClass:"subtitle has-text-grey-light is-size-6"},[t._v("Purchase server premium to unlock xp configuration in your server.")]),i("router-link",{staticClass:"button is-primary",attrs:{to:"/premium"}},[t._v("Upgrade now")])],1)]),i("div",{staticClass:"column"},[i("AdSpot",{attrs:{"ad-slot":"calculator-bottom"}})],1)])],1)])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"notification is-danger"},[i("h1",{staticClass:"title has-text-white"},[t._v(" This is NOT the dashboard! ")]),i("p",{staticClass:"subtitle has-text-white"},[t._v("You can edit the XP values on your servers leveling page. This is only for calculating, not saving values!")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-one-third"},[i("h1",{staticClass:"title has-text-white is-size-7",staticStyle:{"margin-bottom":"10px"}},[t._v("Applied Boost (Coming soon)")]),i("input",{staticClass:"input",attrs:{type:"number",max:"40",min:"0",value:"0",disabled:""}})])}],l=(i("a9e3"),i("96cf"),i("1da1")),n=i("8f14"),o={name:"home",data:function(){return{min:15,max:40,cooldown:60,multiplier:1,level:1,boost:0,required:{xp:0,messages:0,minimum:0,maximum:0,time:"",timeRealistic:"",milliseconds:0}}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:t.min=t.$route.query.min||15,t.max=t.$route.query.max||40,t.cooldown=t.$route.query.cooldown||60,t.multiplier=t.$route.query.multiplier||1;case 4:case"end":return s.stop()}}),s)})))()},methods:{realistic:function(){return this.level<10?2:this.level>=10&&this.level<20?6:this.level>=20&&this.level<50?11:this.level>=50?17:void 0}},computed:{calculateRequired:function(){this.min=Number(this.min),this.max=Number(this.max),this.cooldown=Number(this.cooldown);for(var t={xp:0,messages:0,minimum:0,maximum:0},s=new Array(parseInt(this.level)||0),i=0;i<s.length;i++)t.xp+=100*i+75;var e=Math.floor((this.min+this.max)/2);t.messages=Math.round(t.xp/e),t.maximum=Math.round(t.xp/this.min),t.minimum=Math.round(t.xp/this.max),t.milliseconds=this.cooldown*t.messages*1e3,t.time=n(t.milliseconds),t.timeRealistic=n(t.milliseconds*this.realistic()),this.required=t}}},r=o,c=(i("07f8"),i("2877")),m=Object(c["a"])(r,e,a,!1,null,"6147caa2",null);s["default"]=m.exports}}]);
//# sourceMappingURL=chunk-a494e710.be5cc41c.js.map