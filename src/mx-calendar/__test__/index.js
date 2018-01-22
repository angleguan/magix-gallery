/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
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
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar /&gt;</pre></div><h3 class=\"_f\">默认选中某天</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?selected=2018-01-01\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    selected=\"2018-01-01\"/&gt;</pre></div><h3 class=\"_f\">设置可选择的范围</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?min=2017-08-05&max=2017-08-22&selected=2017-08-12\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    selected=\"2017-08-12\"/&gt;</pre></div><h3 class=\"_f\">设置周二为一周的开始</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?weekStart=2\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    week-start=\"2\"/&gt;</pre></div><h3 class=\"_f\">带时分秒</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?timeType=all\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    time-type=\"all\"&gt;</pre></div><h3 class=\"_f\">带时分秒的选中</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"/&gt;</pre></div><h3 class=\"_f\">带时分秒,只能选择小时和分钟</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?timeType=hour%2Cminute\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    time-type=\"hour,minute\"/&gt;</pre></div><h3 class=\"_f\">change事件</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowDatetime()\" mx-view=\"mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"\n    mx-change=\"showDatetime()\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        this.gtipRT('日期：' + e.date + '，时间：' + e.time);\n    }\n});</pre></div>"},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});

});