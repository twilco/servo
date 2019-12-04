// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.state.saverestore.fillStyle
// Description:save()/restore() works for fillStyle
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("save()/restore() works for fillStyle");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

// Test that restore() undoes any modifications
var old = ctx.fillStyle;
ctx.save();
ctx.fillStyle = "#ff0000";
ctx.restore();
_assertSame(ctx.fillStyle, old, "ctx.fillStyle", "old");

// Also test that save() doesn't modify the values
ctx.fillStyle = "#ff0000";
old = ctx.fillStyle;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against "#ff0000"
ctx.save();
_assertSame(ctx.fillStyle, old, "ctx.fillStyle", "old");
ctx.restore();
t.done();

});
done();
