define("mx-tree/__test__/index",["magix","../index","__test__/hl"],(t,e,i)=>{t("../index"),t("__test__/hl");var d=t("magix");i.exports=d.View.extend({tmpl:function(t,e){e=e||"";var i="";return i+='<h2 mxs="_Q:_">mx-tree</h2><div mxa="_Q:_" class="_B _ai" style="margin-left:30px;"><div mx-view="mx-tree/index?list=',i+=function(e,i,d){for(d=t[""];--d;)if(t[i=""+d]===e)return i;return t[i=""+t[""]++]=e,i}(t.list),i+="\"></div></div><div mxs=\"_Q:a\" class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-tree list=\"&lt;%@list%&gt;\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: 'abc'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: 'abc-abc'\n            }, {\n                id: 1,\n                pId: 0,\n                text: 'def'\n            }, {\n                id: 2,\n                pId: 1,\n                text: 'aaa'\n            }, {\n                id: 3,\n                pId: 2,\n                text: 'bbb'\n            }]\n        });\n    }\n});</pre></div>"},render:function(){this.updater.digest({list:[{id:0,pId:"",text:"abc"},{id:"0-0",pId:"",text:"abc-abc"},{id:1,pId:0,text:"def"},{id:2,pId:1,text:"aaa"},{id:3,pId:2,text:"bbb"},{id:4,pId:2,text:"bbb"},{id:5,pId:1,text:"aaa"},{id:6,pId:1,text:"aaa"}]})}})});