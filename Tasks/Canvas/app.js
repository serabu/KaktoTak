import {getShape} from "./Helpers/Helper.js";
const timer = 1000;
canvas.width = window.innerWidth - 200;
canvas.height = window.innerHeight - 200;

setInterval(() => {
  getShape(2);
}, timer);

