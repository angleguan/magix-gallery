define("mx-dragselect/__test__/index",["magix","$","../index","__test__/hl"],(e,i,l)=>{e("../index"),e("__test__/hl");var t=e("magix"),n=e("$");t.applyStyle("_b","._aJ{width:500px;cursor:default}._aJ li{width:100px;height:100px;text-align:center;float:left;line-height:100px;background:#f8f6f6;border:1px solid #fff;margin:10px}._aJ li[select]{background:#ccc}._aJ ._aK{border:1px solid #eb5685;background:#813742;opacity:.5;color:#fff}"),l.exports=t.View.extend({tmpl:function(e,i){var l="";return l+='<h2 mxs="_S:_">mx-dragselect</h2><h3 mxs="_S:a">默认示例</h3><div mxs="_S:b" class="_B _ai"><ul mx-view="mx-dragselect/index" class="_aJ _aa" mx-change="'+(i=i||"")+'show()" mx-dragbegin="'+i+'begin()" mx-dragfinish="'+i+'end()"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li></ul></div><div mxs="_S:c" class="_B"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;ul mx-view="mx-dragselect/index" class="hor fl" mx-change="show()" mx-dragbegin="begin()" mx-dragfinish="end()"&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class="_z">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nMagix.applyStyle(\'@index.less\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest();\n        me.$selected = {};\n    },\n    \'show&lt;change&gt;\'(e) {\n        let node = e.node;\n        let me = this;\n        if (!node.id) node.id = Magix.guid(\'mx_\');\n        if (e.action == \'add\') {\n            if (me.$selected[node.id]) {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n\n                me.$temp[node.id] = 1;\n            } else {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            }\n        } else if (e.action == \'remove\') {\n            if (me.$temp[node.id]) {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            } else {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n                me.$temp[node.id] = 1;\n            }\n        }\n        console.log(me.$selected);\n    },\n    \'begin&lt;dragbegin&gt;\'() {\n        this.$temp = {};\n    },\n    \'end&lt;dragfinish&gt;\'() {\n        delete this.$temp;\n    }\n});\n    </pre></div><h3 mxs="_S:d" class="_f">部分不能选择</h3><div mxs="_S:e" class="_B _ai"><ul mx-view="mx-dragselect/index?selector=li%5Bselect%21%3Dfalse%5D" class="_aJ _aa" mx-change="'+i+'show()" mx-dragbegin="'+i+'begin()" mx-dragfinish="'+i+'end()" test="@$hor"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li select="false">123</li><li select="false">456</li></ul></div><div mxs="_S:f" class="_B"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="mx-dragselect/index" class="hor fl" mx-change="show()" mx-dragbegin="begin()" mx-dragfinish="end()" view-selector="li[select!=false]"&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li select="false"&gt;123&lt;/li&gt;\n        &lt;li select="false"&gt;456&lt;/li&gt;\n    &lt;/ul&gt;</pre></div>'},render:function(){this.updater.digest(),this.$selected={}},"show<change,click>":function(e){var i=e.node;i.id||(i.id=t.guid("mx_")),"add"==e.action?this.$selected[i.id]?(n(i).removeClass("_aK"),delete this.$selected[i.id],"drag"==e.mode&&(this.$temp[i.id]=1)):(n(i).addClass("_aK"),this.$selected[i.id]=i,"drag"==e.mode&&delete this.$temp[i.id]):"remove"==e.action&&(this.$temp[i.id]?(n(i).addClass("_aK"),this.$selected[i.id]=i,"drag"==e.mode&&delete this.$temp[i.id]):(n(i).removeClass("_aK"),delete this.$selected[i.id],"drag"==e.mode&&(this.$temp[i.id]=1)))},"begin<dragbegin>":function(){this.$temp={}},"end<dragfinish>":function(){delete this.$temp}})});