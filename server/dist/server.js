"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = parseInt(process.env.PORT, 10) || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=server.js.map