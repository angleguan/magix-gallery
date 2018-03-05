define("mx-dialog/index",["magix","$","./alert","./confirm"],(i,o,t)=>{var e=i("magix");i("./alert"),i("./confirm"),e.applyStyle("_m","._bZ{position:absolute}._c_{position:relative;background-color:#fff;border-radius:4px;border:1px solid #e6e6e6}._ca{position:absolute;cursor:pointer;opacity:.2;z-index:1;top:16px;right:10px}._ca:focus,._ca:hover{opacity:.5}._cb{font-size:22px;font-weight:normal}._cc{position:fixed;top:0;right:0;left:0;bottom:0;background-color:#000;opacity:.5;display:none}._cd{-webkit-filter:blur(3px);filter:blur(3px)}._ce{-webkit-animation:_b .3s;animation:_b .3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}._cf{position:absolute;right:10px;top:0;width:1px;height:0}._cg{padding:80px 0}@-webkit-keyframes _b{0%{opacity:0}to{opacity:.5}}@keyframes _b{0%{opacity:0}to{opacity:.5}}._ch{-webkit-animation:_c .2s;animation:_c .2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes _c{0%{opacity:.5}to{opacity:0}}@keyframes _c{0%{opacity:.5}to{opacity:0}}._ci{margin-bottom:50px;min-height:60px}._cj{position:fixed;width:100%;height:100%;overflow:auto;left:0;top:0}._ck{-webkit-animation:_d .3s;animation:_d .3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes _d{0%{margin-top:-50px;opacity:0}to{margin-top:0;opacity:1}}@keyframes _d{0%{margin-top:-50px;opacity:0}to{margin-top:0;opacity:1}}._cl{-webkit-animation:_e .2s;animation:_e .2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes _e{0%{margin-top:0;opacity:1}to{margin-top:-50px;opacity:0}}@keyframes _e{0%{margin-top:0;opacity:1}to{margin-top:-50px;opacity:0}}");var a=i("$"),n=a(window),c=500,d=[];t.exports=e.View.extend({tmpl:function(i,o){o=o||"";var t="",e={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,n=function(i){return null==i?"":""+i},c=function(i){return"&"+e[i]+";"},d=function(i){return n(i).replace(a,c)};return t+='<div class="_cc _ce" style="display:block;z-index:'+d(i.zIndex-1)+'" id="mask_'+d(i.viewId)+'"></div><div class="_cj" style="z-index:'+d(i.zIndex)+';"><div class="_bZ _ck" data-spm-protocol="i" id="body_'+d(i.viewId)+'" style="left:'+d(i.left)+"px;top:"+d(i.top)+"px;width:"+d(i.width)+'px;"><input id="focus_'+d(i.viewId)+'" class="_cf"/><span class="__ _cb _ca '+d(i.closable?"":"_ah")+'" mx-click="'+o+'__bn()">&#xe67f;</span><div class="_c_ _ci" id="cnt_'+d(i.viewId)+'"><div mxs="_8:_" class="_aC _cg"><span class="_aD"></span></div></div></div></div>'},init:function(i){var o=this,t=a("#app");o.on("destroy",function(){!function(i){for(var o=d.length-1;o>=0;o--)if(d[o].id==i.id){d.splice(o,1);break}}(o),500==(c-=2)&&t.removeClass("_cd"),a("#"+o.id).trigger("close").remove()}),e.has(i,"closable")||(i.closable=!0),o.updater.set(i),500==c&&t.addClass("_cd"),c+=2,d.push(o)},render:function(){var i=this,o=i.updater,t=o.get();o.set({zIndex:c,viewId:i.id}).digest(),a("#"+i.id).show(),a("#focus_"+i.id).focus(),i.owner.mountVframe("cnt_"+i.id,t.view,t),setTimeout(i.wrapAsync(function(){a("#body_"+i.id).removeClass("_ck"),a("#mask_"+i.id).removeClass("_ce")}),300)},__bm:function(i){e.Vframe.get("cnt_"+this.id).invoke("fire",["unload",i])},"__bn<click>":function(){a("#"+this.id).trigger("dlg_close")},"$doc<keyup>":function(i){if(27==i.keyCode){var o=d[d.length-1];if(o==this&&o.updater.get("closable")){a("#"+o.id).trigger("dlg_close")}}}},{__bo:function(i,o){var t=e.guid("dlg_");a(document.body).append('<div id="'+t+'" style="display:none" />');var n,c=i.owner.mountVframe(t,"mx-dialog/index",o),d=a("#"+t);return d.on("dlg_close",function(){if(!d.data("closing")&&!n){var o=function(){d.data("closing",1),a("#body_"+t).addClass("_cl"),a("#mask_"+t).addClass("_ch"),setTimeout(function(){i.owner&&i.owner.unmountVframe(t)},200)},e={prevent:function(){n=1},resolve:function(){e.p=1,n=0,o()},reject:function(){e.p=1,n=0}};c.invoke("__bm",[e]),n||e.p||o()}})},alert:function(i,o,t){this.confirm(i,o,null,t,"alert")},confirm:function(i,o,t,e,a){this.mxDialog("mx-dialog/"+(a||"confirm"),{body:i,cancelCallback:t,enterCallback:o,title:e,modal:!0,width:400,closable:!1,left:(n.width()-400)/2,top:Math.max((n.height()-220)/2,0)})},mxDialog:function(i,o){var t,a,c=this,d={view:i};return seajs.use(i,c.wrapAsync(function(r){var s="$dlg_"+i;c[s]||(c[s]=1,e.mix(d,r.dialogOptions),e.mix(d,o),d.width||(d.width=500),d.left||(d.left=(n.width()-d.width)/2),d.top||(d.top=100),d.dialog={close:function(){t&&t.trigger("dlg_close")}},(t=c.__bo(c,d)).on("close",function(){delete c[s],a&&a()}))})),{close:function(){t&&t.trigger("dlg_close")},whenClose:function(i){a=i}}}})});