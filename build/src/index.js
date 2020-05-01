"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//initializations
const app = express_1.default();
//settings
app.set('port', 4000);
//middlewares
//routes 
//static files
//starting the server
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});
