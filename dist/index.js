"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Negishut;
const draggableButton_1 = __importDefault(require("./draggableButton"));
const sidebar_1 = __importDefault(require("./sidebar"));
/**
 * @description an init function to add the button and sidebar to body
 * @example Negishut()
 */
function Negishut() {
    document.body.append(draggableButton_1.default);
    document.body.append(sidebar_1.default);
}
