/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/sub1",["magix","../index"],(require,exports,module)=>{
/*Magix,Form*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_av _ai\"><label class=\"_aw _ax\">活动名称：</label><div class=\"_ay\"><input mx-ssid=\"\u001f0\" class=\"_ap\" placeholder=\"请填写活动名称\" value=\"<%=$$.name%>\" mx-change=\"\u001f\u001e__b({c:[{p:'name',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\"></div></div>"},
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});