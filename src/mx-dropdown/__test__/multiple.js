/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/multiple",["magix","mx-gtip/index","../multiple","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../multiple");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dropdown.multiple</h2><h3 class=\"_f\">默认</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowWeeks()\" class=\"_aa\" style=\"width:150px;\" mx-view=\"mx-dropdown/multiple?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><i value=\"mon\" class=\"_ah\">周一</i><i value=\"wed\" class=\"_ah\">周三</i><i value=\"thu\" class=\"_ah\">周四</i><i value=\"fri\" class=\"_ah\">周五</i><i value=\"sat\" class=\"_ah\">周六</i></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-dropdown.multiple\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeeks()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;mx-dropdown.item value=\"mon\"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"wed\"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"thu\"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"fri\"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"sat\"&gt;周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeeks&lt;change&gt;' (e) {\n        this.gtipRB('values:' + e.values);\n    }\n});</pre></div><h3 class=\"_f\">多选带分组</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowWeeks()\" class=\"_aa\" style=\"width:150px;\" mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><i group=\"true\" class=\"_ah\">本周日期</i><i value=\"mon\" class=\"_ah\">周一</i><i value=\"wed\" class=\"_ah\">周三</i><i value=\"thu\" class=\"_ah\">周四</i><i value=\"fri\" class=\"_ah\">周五</i><i value=\"sat\" class=\"_ah\">周六</i><i group=\"true\" class=\"_ah\">下周日期</i><i value=\"next-mon\" class=\"_ah\">下周一</i><i value=\"next-wed\" class=\"_ah\">下周三</i><i value=\"next-thu\" class=\"_ah\">下周四</i><i value=\"next-fri\" class=\"_ah\">下周五</i><i value=\"next-sat\" class=\"_ah\">下周六</i></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-dropdown.multiple\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeeks()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;mx-dropdown.item group=\"true\"&gt;本周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"mon\"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"wed\"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"thu\"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"fri\"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"sat\"&gt;周六&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item group=\"true\"&gt;下周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-mon\"&gt;下周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-wed\"&gt;下周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-thu\"&gt;下周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-fri\"&gt;下周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-sat\"&gt;下周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeeks&lt;change&gt;' (e) {\n        this.gtipRB('values:' + e.values);\n    }\n});</pre></div><h3 class=\"_f\">动态数据并设置选中</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowUsers()\" class=\"_aa\" style=\"width:200px;\" mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.usersSelected%>&list=<%@$$.userList%>\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre lang=\"html\" mx-view=\"__test__/hl\">&lt;mx-dropdown.multiple\n    searchbox=\"true\"\n    empty-text=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"\n    selected=\"&lt;%@ usersSelected %&gt;\"\n    list=\"&lt;%@ userList %&gt;\"\n    mx-change=\"showUsers()\"\n    class=\"fl\" style=\"width:200px;\"&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            usersSelected: [58782,587829]\n        });\n    },\n    'showUsers&lt;change&gt;' (e) {\n        this.gtipRB('user ids:' + e.values);\n    }\n});</pre></div>"},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            userList: [{
                    name: 'xinglie',
                    id: 58782
                }, {
                    name: 'xinglie1',
                    id: 587821
                }, {
                    name: 'xinglie2',
                    id: 587822
                }, {
                    name: 'xinglie3',
                    id: 587823
                }, {
                    name: 'xinglie4',
                    id: 587824
                }, {
                    name: 'xinglie5',
                    id: 587825
                }, {
                    name: 'xinglie6',
                    id: 587826
                }, {
                    name: 'xinglie7',
                    id: 587827
                }, {
                    name: 'xinglie8',
                    id: 587828
                }, {
                    name: 'xinglie9',
                    id: 587829
                }],
            userSelected: 587828,
            usersSelected: [58782, 587829]
        });
    },
    'showWeek<change>': function (e) {
        this.gtipRB('text:' + e.text + ',value:' + e.value);
    },
    'showUser<change>': function (e) {
        this.gtipRB('name:' + e.text + ',id:' + e.value);
    },
    'showWeeks<change>': function (e) {
        this.gtipRB('values:' + e.values);
    },
    'showUsers<change>': function (e) {
        this.gtipRB('user ids:' + e.values);
    },
    'test<click>': function (e) {
        this.updater.digest({
            searchbox: !this.updater.get('searchbox')
        });
        console.log(this.updater.get('searchbox'));
    }
});

});