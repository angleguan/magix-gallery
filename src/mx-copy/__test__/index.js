/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-copy/__test__/index",["magix","../../mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("../../mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-copy</h2><div class=\"_B _ai\"><div id=\"text_<%=$$.viewId%>\">这里是要复制的<span style=\"font-weight:bold\">内容</span>的节点</div><button type=\"button\" class=\"_an _ao _j\" mx-success=\"\u001f\u001edone()\" mx-error=\"\u001f\u001ebad()\" mx-view=\"mx-copy/index?copyNode=text_<%!$eu($$.viewId)%>\">复制</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">\n&lt;div id=\"text_&lt;%=viewId%&gt;\"&gt;\n    这里是要复制的&lt;span style=\"font-weight:bold\"&gt;内容&lt;/span&gt;的节点\n&lt;/div&gt;\n&lt;mx-copy\n    copy-node=\"text_&lt;%=viewId%&gt;\"\n    tag=\"button\"\n    type=\"button\"\n    class=\"btn btn-brand mr20\"\n    mx-success=\"done()\"\n    mx-error=\"bad()\"&gt;\n        复制\n    &lt;/mx-copy&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    'done&lt;success&gt;'() {\n        this.gtipRT('复制成功～');\n    },\n    'bad&lt;error&gt;'() {\n        this.gtipRT('复制失败～');\n    }\n});    \n</pre></div>"},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'done<success>': function () {
        this.gtipRT('复制成功～');
    },
    'bad<error>': function () {
        this.gtipRT('复制失败～');
    }
});

});