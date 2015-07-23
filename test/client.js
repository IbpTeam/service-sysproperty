var requireProxy = require('../../../app/demo-rio/sdk/lib/requireProxy').requireProxy;
requireProxy(['sysproperty'], function(sysproperty) {
  /* sysproperty.get("locale", function(ret) {
    if (ret.err) return console.log('get error:', ret.err);
    console.log('locale:', ret.ret);
  });*/
  var obj = {
    "key": "locale",
    "value": "en"
  };
  sysproperty.set(obj, function(ret) {
    if (ret.err) return console.log(ret.err);
    console.log('set property success!');
  });
}) 