define("mx-progress/index",["magix","$"],(e,i,t)=>{var _=e("magix"),n=e("$");_.applyStyle("_F","._ew{height:32px;cursor:default;line-height:32px;display:inline-block}._ex{background:#eaeaea;position:relative;display:inline-block;top:-2px}._ex,._ey{height:4px;border-radius:2px}._ey{background:#f96447;left:0;top:0}._ez,._ey{position:absolute;transition:all .15s}._ez{font-size:9px;pointer-events:none;top:-15px;line-height:normal}._eA{cursor:not-allowed}._eA ._ex{background-color:#fbfbfb}._eA ._ey{background-color:#eaeaea}"),t.exports=_.View.extend({tmpl:function(e,i){var t,_="",n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,a=function(e){return null==e?"":""+e},d=function(e){return"&"+n[e]+";"};return _+='<div class="_ex" mx-contextmenu="'+(i=i||"")+'__G()" style="width:'+(t=e.width,a(t).replace(s,d))+'px"><div mxs="_|:_" class="_ey"></div><div mxs="_|:a" class="_ez"></div></div>'},init:function(e){this.__k=n("#"+this.id).addClass("_ew"),this.assign(e)},assign:function(e){return this.__dv=+e.width||340,this.__cx=e.disabled+""=="true",this.__cL=+e.value||0,this.__ej=+e.fixed||0,!0},render:function(){this.updater.digest({width:this.__dv}),this.__k[this.__cx?"addClass":"removeClass"]("_eA"),this.val(this.__cL)},val:function(e){var i=+e;if(i||0===i){i<0?i=0:i>1&&(i=1);var t=this.__k.find("._ex").width(),_=t*i;this.__k.find("._ey").width(_);var n=this.__k.find("._ez"),s=(100*i).toFixed(this.__ej)+"%";n.html(s);var a=n.width();(_-=a/2)<0?_=0:_>t-a&&(_=t-a),n.css({left:_}),this.__cL=i}return this.__cL},"__G<contextmenu>":function(e){e.preventDefault()}})});