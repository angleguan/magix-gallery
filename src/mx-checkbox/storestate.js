define("mx-checkbox/storestate",["$","magix"],(e,t,a)=>{var n=e("$"),i=e("magix");a.exports={ctor:function(){var e=this;e.__av={};var t=function(t){var a=e.__av;n("#"+(t.id||e.id)+" input[linkage-parent]").each(function(e,t){var i=n(t).attr("linkage-parent"),r=a[i];r&&1==r[t.value]?t.checked=!0:t.checked=!1})};e.on("rendered",t),e.on("domready",t)},getStoreState:function(e){var t,a=this.__av,n=[];if(e)(t=a[e])&&(n=i.keys(t));else for(var r in a)(t=a[r])&&(n=n.concat(i.keys(t)));return n},"$input[linkage-parent]<change>":function(e){var t=n(e.eventTarget),a=t.val(),i=t.attr("linkage-parent");if(a){var r=this.__av[i];r||(r=this.__av[i]={}),t.prop("checked")?r[a]=1:delete r[a]}},"$input[linkage]<change>":function(e){var t=n(e.eventTarget).attr("linkage"),a=this.__av[t];a||(a=this.__av[t]={}),n("#"+this.id+" input[type=checkbox]").each(function(i,r){var c=(r=n(r)).attr("linkage-parent"),v=r.val();v&&c==t&&(e.target.checked?a[v]=1:delete a[v])})}}});