import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../components/Header";
import clientes from "../components/js/clientesDB";

const MinhaContaContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #ddffff;
`;

const AccountSection = styled.section`
  margin: 20px 0;
  text-align: center;
`;

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};


export default function MinhaConta() {
  // Verifica se a agencia é válida e busca o cliente correspondente
    return (
      <MinhaContaContainer
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Header />
        <div>
          <h1>Minha Conta</h1>

          <AccountSection>
            <h2>Informações da Conta:</h2>
            <p>
              <strong>Nome:</strong> {}
            </p>
            <p>
              <strong>CPF:</strong> {clientes.cpf}
            </p>
            <p>
              <strong>Agência:</strong> {clientes.agencia}
            </p>
            <p>
              <strong>Saldo:</strong> R$ {clientes.saldo.toFixed(2)}
            </p>
          </AccountSection>

          <AccountSection>
            <h2>Opções da Conta:</h2>
            <ul>
              <li>
                <a href="/editar-perfil">Editar Perfil</a>
              </li>
              <li>
                <a href="/alterar-senha">Alterar Senha</a>
              </li>
              <li>
                <a href="/configuracoes-privacidade">
                  Configurações de Privacidade
                </a>
              </li>
            </ul>
          </AccountSection>

          <AccountSection>
            <h2>Pedidos e Histórico:</h2>
            <ul>
              <li>
                <a href="/historico-compras">Histórico de Compras</a>
              </li>
              <li>
                <a href="/acompanhar-pedidos">Acompanhar Pedidos</a>
              </li>
            </ul>
          </AccountSection>

          <AccountSection>
            <h2>Suporte e Ajuda:</h2>
            <ul>
              <li>
                <a href="/central-ajuda">Central de Ajuda</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </AccountSection>
        </div>
      </MinhaContaContainer>
    );
  }