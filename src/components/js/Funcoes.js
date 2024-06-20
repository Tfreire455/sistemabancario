// class Client {
//   nome;
//   cpf;
//   agencia;
//   saldo;
//   rg;
// }
// const Ricardo = new Client();
// (Ricardo.nome = "Ricardo"),
//   (Ricardo.cpf = 123456789),
//   (Ricardo.agencia = 1234),
//   (Ricardo.saldo = 1000);
// const clientes = require("./clientes.json");
import { clientes } from "./clientesDB";

class Client {
  constructor(nome, cpf, agencia) {
    this.nome = nome;
    this.cpf = cpf;
    this.agencia = agencia;
  }
}

// Cria uma lista de instâncias de clientes
const listaClientes = clientes.map((cliente) => {
  return new Client(cliente.nome, cliente.cpf, cliente.agencia);
});
console.log(listaClientes);

function FindClient(agencia) {
  const cliente = listaClientes.find((client) => client.agencia === agencia);
  return cliente;
}

function CreateClient() {
  const novoCliente = new Client("Ricardo", 123456789, 1234);
  listaClientes.push(novoCliente);
}

export const Funcoes = {
  listaClientes,
  FindClient,
  CreateClient,
};
