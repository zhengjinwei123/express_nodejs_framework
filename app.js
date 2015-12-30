/**
 * author:zhengjinwei
 * QQ:2538698032
 * @type {component|exports}
 */

var jinWeiComponent = require("jinwei");
var options = require("./configs/server.json");
var bearCat = require("bearcat");
options.basedir = __dirname;
options.bearCat = bearCat;


var jinWei = new jinWeiComponent(options);
jinWei.start(function (status) {
    if (status) {
        console.log("server start on port", options.port, " host:", options.host, " success");
        var bear = require("bearcat");
        bear.getBean("application").getComponent("test").say();
    }
});