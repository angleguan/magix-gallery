/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/rangepicker",["magix","mx-gtip/index","../rangepicker","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../rangepicker");
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
    tmpl: {"html":"<h2>mx-calendar.rangepicker</h2><h3>默认情形</h3><div class=\"_B _ai\"><input class=\"_ap\" placeholder=\"请选择日期范围\"><div mx-view=\"mx-calendar/rangepicker\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    class=\"input\"\n    placeholder=\"请选择日期范围\"/&gt;</pre></div><h3 class=\"_f\">指定开始结束日期</h3><div class=\"_B _ai\"><input class=\"_ap\" placeholder=\"请选择日期范围\"><div mx-view=\"mx-calendar/rangepicker?start=2018-01-01&end=2019-01-01\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    class=\"input\"\n    placeholder=\"请选择日期范围\"\n    start=\"2018-01-01\"\n    end=\"2019-01-01\"/&gt;</pre></div><h3 class=\"_f\">不显示快捷日期</h3><div class=\"_B _ai\"><input class=\"_ap\" placeholder=\"请选择日期范围\"><div mx-view=\"mx-calendar/rangepicker?shortcuts=false\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    class=\"input\"\n    placeholder=\"请选择日期范围\"\n    shortcuts=\"false\"/&gt;</pre></div><h3 class=\"_f\">设置可选择的范围</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?min=2017-08-05&max=2017-08-22&start=2017-08-08&end=2017-08-20&shortcuts=false\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    start=\"2017-08-08\"\n    end=\"2017-08-20\"\n    shortcuts=\"false\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">右上对齐</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?align=right&placement=top\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    align=\"right\"\n    placement=\"top\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">带时分秒</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?timeType=all\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    time-type=\"all\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">带时分秒的选中</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?timeType=all&start=2017-07-07%2018%3A08%3A08&end=2017-12-30%2015%3A15%3A15\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    time-type=\"all\"\n    start=\"2017-07-07 18:08:08\"\n    end=\"2017-12-30 15:15:15\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">change事件</h3><div class=\"_B _ai\"><input mx-change=\"\u001f\u001eshowDatetime()\" class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?timeType=all\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    time-type=\"all\"\n    mx-change=\"showDatetime()\"\n    class=\"input\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@rangepicker.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        console.log(e.dates);\n        this.gtipRT('日期：' + JSON.stringify(e.dates));\n    }\n});</pre></div><h3 class=\"_f\">只有年月</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?dateType=year%2Cmonth&start=2017-07&end=2017-12&formatter=YYYY-MM&shortcuts=false\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    class=\"input\"\n    date-type=\"year,month\"\n    start=\"2017-07\"\n    end=\"2017-12\"\n    formatter=\"YYYY-MM\"\n    shortcuts=\"false\" /&gt;</pre></div>"},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        console.log(e.dates);
        this.gtipRT('日期：' + JSON.stringify(e.dates));
    }
});

});