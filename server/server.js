"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.listen(4000, function () {
    console.log("server is running");
});
app.get('/', function (req, res) {
    res.send("Hello From node API");
});