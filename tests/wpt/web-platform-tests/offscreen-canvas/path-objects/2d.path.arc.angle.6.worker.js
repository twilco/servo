// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.arc.angle.6
// Description:arc() draws a full circle when anticlockwise and start > end+2pi
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("arc() draws a full circle when anticlockwise and start > end+2pi");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0f0';
ctx.beginPath();
ctx.moveTo(50, 25);
ctx.arc(50, 25, 60, (1024-1)*Math.PI, (512+1/2)*Math.PI, true);
ctx.fill();
_assertPixel(offscreenCanvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
_assertPixel(offscreenCanvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");
t.done();

});
done();
