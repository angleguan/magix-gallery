/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-copy/__test__/index',["magix","../../mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-copy</h2><div class=\"B ag\"><div mx-guid=\"g0\u001f\" id=\"text_<%=$$.viewId%>\">这里是要复制的<span style=\"font-weight:bold\">内容</span>的节点</div><button mx-guid=\"g1\u001f\" type=\"button\" class=\"al am j\" mx-success=\"\u001f\u001edone()\" mx-error=\"\u001f\u001ebad()\" mx-view=\"mx-copy/index?copyNode=text_<%!$eu($$.viewId)%>\">复制</button></div><div class=\"B\"><div>HTML Code:</div><pre>\n&lt;div id=\"text_&lt;%=viewId%&gt;\"&gt;这里是要复制的&lt;span style=\"font-weight:bold\"&gt;内容&lt;/span&gt;的节点&lt;/div&gt;\n&lt;mx-copy copy-node=\"text_&lt;%=viewId%&gt;\" tag=\"button\" type=\"button\" class=\"btn btn-brand mr20\" mx-success=\"done()\" mx-error=\"bad()\"&gt;复制&lt;/mx-copy&gt;</pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    'done&lt;success&gt;'() {\n        this.gtipRT('复制成功～');\n    },\n    'bad&lt;error&gt;'() {\n        this.gtipRT('复制失败～');\n    }\n});    \n</pre></div>","subs":[{"keys":["viewId"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"text_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]},{"keys":["viewId"],"path":"button[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-copy/index?copyNode=text_<%!$eu($$.viewId)%>\"","attrs":[{"n":"mx-view","v":1}]}]},
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