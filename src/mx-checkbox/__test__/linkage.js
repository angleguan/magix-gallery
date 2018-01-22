/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/linkage",["magix","../linkage","../../mx-gtip/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Linkage,GTip*/
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Linkage = require("../linkage");
var GTip = require("../../mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-checkbox</h2><div class=\"_B _ai\"><table class=\"_aA _aB\"><thead><tr><th><input type=\"checkbox\" class=\"_as\" linkage=\"example1\"></th><%for(var _=0;_<5;_++){%><th>示例字段<%=_%></th><%}%></tr></thead><tbody><%for(var a=0;a<10;a++){%><tr><td><input type=\"checkbox\" class=\"_as\" linkage-parent=\"example1\" value=\"ex1_<%=a%>\"></td><%for(var b=0;b<5;b++){%><td>示例字段内容<%=b%></td><%}%></tr><%}%></tbody></table><div class=\"_ai\"><button type=\"button\" class=\"_ab _a _an _ao\" mx-click=\"\u001f\u001eshowEx1()\">显示选中的checkbox</button></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;div class=\"clearfix\"&gt;\n    &lt;button class=\"fr mt5 btn btn-brand\" mx-click=\"showEx1()\"&gt;显示示例1选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet Linkage = require('app/gallery/mx-checkbox/linkage');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@linkage.html',\n    mixins: [Linkage, GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showEx1&lt;click&gt;' () {\n        this.gtipRT(this.getSelectedIds('example1'));\n    }\n});</pre></div>"},
    mixins: [Linkage, GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showEx1<click>': function () {
        this.gtipRT(this.getSelectedIds('example1'));
    }
});

});