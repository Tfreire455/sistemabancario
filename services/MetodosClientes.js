const fs = require("fs");

function getTodosOsClientes() {
  const clientes = JSON.parse(fs.readFileSync("./src/js/clientesDB.json", "utf-8"));
  console.log("Clientes carregados:", clientes); // Log para verificar os clientes carregados
  return clientes;
}

function getClientePorAgencia(agencia) {
  const clientes = JSON.parse(fs.readFileSync("./src/js/clientesDB.json", "utf-8"));
  console.log(`Procurando cliente com agência: ${agencia}`); // Log para verificar a agência procurada
  const cliente = clientes.find(cliente => cliente.agencia === agencia); // Supondo que agencia é uma string
  console.log("Cliente encontrado:", cliente); // Log para verificar o cliente encontrado
  return cliente;
}

module.exports = {
  getTodosOsClientes,
  getClientePorAgencia
};