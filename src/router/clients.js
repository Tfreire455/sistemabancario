const { Router } = require("express");
const { getClientes, getCliente } = require("../js/Funcoes");
const router = Router();

router.get("/", getClientes);
router.get("/:agencia", getCliente); // Usando :agencia como parâmetro

module.exports = router;