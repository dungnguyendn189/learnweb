import { LOG, TYPE_WARN, TYPE_ERROR } from "./constants.js";

function logger(log, type = TYPE_ERROR) {
  console.log[type](log);
}

export default logger;
