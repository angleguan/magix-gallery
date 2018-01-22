/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-rating/__test__/index",["magix","$","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,$,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var GTip = require("mx-gtip/index");
var Tips = ['非常不好', '很不好', '一般般', '很好', '非常好'];
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-rating</h2><h3>默认情形</h3><div class=\"_B _ai\"><div mx-view=\"mx-rating/index\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-rating /&gt;</pre></div><h3 class=\"_f\">设置星星个数</h3><div class=\"_B _ai\"><div mx-view=\"mx-rating/index?number=10&value=6\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-rating number=\"10\" value=\"6\" /&gt;</pre></div><h3 class=\"_f\">只读</h3><div class=\"_B _ai\"><div mx-view=\"mx-rating/index?number=10&readonly=true&value=6\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-rating number=\"10\" readonly=\"true\" value=\"6\" /&gt;</pre></div><h3 class=\"_f\">响应事件</h3><div class=\"_B _ai\"><button type=\"button\" class=\"_an _ao _h _aa\" mx-click=\"\u001f\u001eclear()\">清除评分</button><div mx-change=\"\u001f\u001eshowValue()\" mx-itemover=\"\u001f\u001eover()\" mx-itemout=\"\u001f\u001eout()\" class=\"_aa _h\" mx-view=\"mx-rating/index?value=<%!$eu($$.ratingValue)%>\"></div><span><%=$$.ratingMsg%></span></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;button\n    type=\"button\"\n    class=\"btn btn-brand mr10 fl\"\n    mx-click=\"clear()\"&gt;清除评分&lt;/button&gt;\n&lt;mx-rating\n    value=\"&lt;%=ratingValue%&gt;\"\n    mx-change=\"showValue()\"\n    mx-itemover=\"over()\"\n    mx-itemout=\"out()\"\n    class=\"fl mr10\" /&gt;\n&lt;span&gt;&lt;%=ratingMsg%&gt;&lt;/span&gt;</pre><div>Javascipt Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nlet $ = require('$');\nlet GTip = require('mx-gtip/index');\nlet Tips = ['非常不好', '很不好', '一般般', '很好', '非常好'];\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            ratingMsg: '',\n            ratingValue: 0\n        });\n    },\n    'over&lt;itemover&gt;'(e) {\n        let tip = Tips[e.value - 1];\n        this.updater.digest({\n            ratingMsg: tip\n        });\n    },\n    'out&lt;itemout&gt;'(e) {\n        let tip = Tips[e.value - 1] || '';\n        this.updater.digest({\n            ratingMsg: tip\n        });\n    },\n    'showValue&lt;change&gt;'(e) {\n        this.gtipRT('当前值：' + e.value);\n        this.updater.set({\n            ratingValue: e.value\n        });\n    },\n    'clear&lt;click&gt;'() {\n        this.updater.digest({\n            ratingMsg: '',\n            ratingValue: 0\n        });\n    }\n});\n</pre></div>"},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            ratingMsg: '',
            ratingValue: 0
        });
    },
    'over<itemover>': function (e) {
        var tip = Tips[e.value - 1];
        this.updater.digest({
            ratingMsg: tip
        });
    },
    'out<itemout>': function (e) {
        var tip = Tips[e.value - 1] || '';
        this.updater.digest({
            ratingMsg: tip
        });
    },
    'showValue<change>': function (e) {
        this.gtipRT('当前值：' + e.value);
        this.updater.set({
            ratingValue: e.value
        });
    },
    'clear<click>': function () {
        this.updater.digest({
            ratingMsg: '',
            ratingValue: 0
        });
    }
});

});