const {
  getTodosOsClientes,
  getClientePorAgencia,
} = require("../../services/MetodosClientes");

function getClientes(req, res) {
  try {
    const clientes = getTodosOsClientes();
    console.log("Clientes:", clientes); // Log para verificar os clientes
    res.json(clientes);
  } catch (error) {
    console.error("Erro ao carregar clientes:", error); // Log para capturar erros
    res.status(500).json({ message: "Erro ao carregar clientes" });
  }
}

function getCliente(req, res) {
  try {
    const agencia = req.params.agencia;
    console.log(`Agência: ${agencia}`); // Log para verificar a agência
    const cliente = getClientePorAgencia(agencia);
    console.log("Cliente encontrado:", cliente); // Log para verificar o cliente retornado
    if (!cliente) {
      res.status(404).json({ message: "Cliente não encontrado" });
    } else {
      res.json(cliente);
    }
  } catch (error) {
    console.error("Erro ao carregar cliente por agência:", error); // Log para capturar erros
    res.status(500).json({ message: "Erro ao carregar cliente por agência" });
  }
}

module.exports = {
  getClientes,
  getCliente,
};
