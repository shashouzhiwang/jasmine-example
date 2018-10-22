describe("index", function() {
    var index = require("./index");
    beforeEach(function() {

    });

    it("some beautiful marks", function() {
        var test = index('a -- b');
        expect(test).toEqual('a \u2013 b');
    });
});