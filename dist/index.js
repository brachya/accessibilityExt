"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const draggableButton_1 = __importDefault(require("./draggableButton"));
const sidebar_1 = __importDefault(require("./sidebar"));
function init() {
    document.body.append(draggableButton_1.default);
    document.body.appendChild(sidebar_1.default);
}
