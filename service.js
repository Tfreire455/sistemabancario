const express = require("express");
const clientRouter = require("./src/router/clients");

const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => console.log(`Server is running on port ${port}...`));
app.use("/clientes", clientRouter)