"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/babel-config.min.js");
} else {
  module.exports = require("./cjs/babel-config.js");
}
