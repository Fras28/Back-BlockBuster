"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const infoSec_1 = __importDefault(require("../infoSec"));
console.log(infoSec_1.default);
function allMovies(_req, res) {
    res.send(infoSec_1.default);
}
module.exports = {
    allMovies
};
