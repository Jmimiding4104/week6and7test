"use strict";(self["webpackChunkweek6and7test"]=self["webpackChunkweek6and7test"]||[]).push([[963],{6963:function(t,s,c){c.r(s),c.d(s,{default:function(){return f}});var r=c(6252),e=c(3577);const a=(0,r._)("h1",null,"產品列表",-1),d={class:"container"},l={class:"row row-cols-1 row-cols-lg-3 g-5"},i={class:"card h-100",style:{width:"18rem"}},o={class:"card-header"},n=["src"],u={class:"card-body"},p={class:"card-title"},h={class:"card-text"},w={class:"card-footer"},g=(0,r.Uk)("查看詳情");function v(t,s,c,v,_,k){const m=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,(0,r._)("div",d,[(0,r._)("div",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(_.products,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"col",key:t.id},[(0,r._)("div",i,[(0,r._)("div",o,[(0,r._)("img",{src:t.imageUrl,class:"card-img-top",alt:"..."},null,8,n)]),(0,r._)("div",u,[(0,r._)("h5",p,(0,e.zw)(t.title),1),(0,r._)("p",h,(0,e.zw)(t.description),1)]),(0,r._)("div",w,[(0,r.Wm)(m,{class:"btn btn-primary",to:`/product/${t.id}`},{default:(0,r.w5)((()=>[g])),_:2},1032,["to"])])])])))),128))])])],64)}var _={data(){return{products:[]}},methods:{getProducts(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/mimiluckying/products/all").then((t=>{this.products=t.data.products}))}},mounted(){this.getProducts()}},k=c(3744);const m=(0,k.Z)(_,[["render",v]]);var f=m}}]);
//# sourceMappingURL=963.027e163a.js.map