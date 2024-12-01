"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cases = void 0;
const elements_1 = require("./elements");
const func_1 = require("./func");
exports.cases = document.createElement("div");
exports.cases.style.position = "absolute";
exports.cases.style.top = "10%";
exports.cases.style.left = "10%";
exports.cases.style.width = "100%";
exports.cases.style.height = "100%";
const backHandle = document.createElement("div");
const back = document.createElement("div");
const handle = document.createElement("div");
const innerWheel = document.createElement("div");
const line = document.createElement("div");
const line2 = document.createElement("div");
const leg = document.createElement("div");
const foot = document.createElement("div");
const backHandleOpt = {
    style: {
        width: "20%",
        left: "0%",
        height: "5%",
        backgroundColor: "black",
        position: "absolute",
    },
};
const backOpt = {
    style: {
        width: "5%",
        height: "35%",
        left: "20%",
        transform: "rotate(-15deg)",
        backgroundColor: "black",
        position: "absolute",
    },
};
const handleOpt = {
    style: {
        width: "15%",
        height: "5%",
        top: "15%",
        left: "23%",
        // transform: "translateX(4.5px) translateY(4px)",
        backgroundColor: "black",
        position: "absolute",
    },
};
const wheelOpt = {
    style: {
        width: "40%",
        // height: "20%",
        aspectRatio: "1/1",
        top: "33%",
        left: "13%",
        // transform: "translateX(4px) translateY(8px)",
        border: "1px solid black",
        borderRadius: "100%",
        position: "absolute",
    },
};
const innerWheelOpt = {
    style: {
        width: "80%",
        // height: "80%",
        aspectRatio: "1/1",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        border: "1px solid black",
        borderRadius: "100%",
        position: "absolute",
    },
};
const lineOpt = {
    style: {
        width: "100%",
        height: "1px",
        top: "50%",
        // transform: "translateX(2px) translateY(4.5px)",
        backgroundColor: "black",
        position: "absolute",
    },
};
const line2Opt = {
    style: {
        width: "1px",
        height: "100%",
        left: "50%",
        // transform: "translateX(4.5px) translateY(2px)",
        backgroundColor: "black",
        position: "absolute",
    },
};
const legOpt = {
    style: {
        width: "20%",
        height: "5%",
        top: "48%",
        left: "52%",
        // transform: "translateX(14px) translateY(10px)",
        backgroundColor: "black",
        position: "absolute",
    },
};
const footOpt = {
    style: {
        width: "5%",
        height: "15%",
        top: "49%",
        left: "70%",
        transform: "rotate(-25deg)",
        backgroundColor: "black",
        position: "absolute",
    },
};
(0, func_1.jsToStyle)(backHandle, backHandleOpt);
(0, func_1.jsToStyle)(back, backOpt);
(0, func_1.jsToStyle)(handle, handleOpt);
(0, func_1.jsToStyle)(elements_1.wheel, wheelOpt);
(0, func_1.jsToStyle)(innerWheel, innerWheelOpt);
(0, func_1.jsToStyle)(line, lineOpt);
(0, func_1.jsToStyle)(line, lineOpt);
(0, func_1.jsToStyle)(line2, line2Opt);
(0, func_1.jsToStyle)(leg, legOpt);
(0, func_1.jsToStyle)(foot, footOpt);
exports.cases.append(backHandle, back, handle, elements_1.wheel, leg, foot);
elements_1.wheel.append(innerWheel, line, line2);
