/**
 * Created by Administrator on 2015/12/30.
 */
function test() {

}

test.prototype.say = function () {
    console.log("hello test");
};


module.exports = {
    id: "test",
    func: test
};