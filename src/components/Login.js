import React from "react";
import styled from "styled-components";
import { BtnAcess, BtnNewAccount } from "./Botao";
import { Titulo } from "./Titulo";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

const LoginContainer = styled(motion.div)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 50px;
  border-radius: 8px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
  width: 60%;
  margin: 100px auto;
`;

const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  color: #555;
  background-color: #ccc;
  outline: none;
  &::placeholder {
    color: #999;
    font-size: 16px;
    font-weight: 700;
  }
`;

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const agencia = document.getElementById("agencia").value.trim();
    console.log(nome, agencia, cpf)
  };

  return (
    <LoginContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Titulo cor="#000">Acesse sua conta:</Titulo>
      <FormContent>
        <InputField
          id="nome"
          type="text"
          placeholder="Nome de usuário"
          required
        />
        <InputField id="cpf" type="number" placeholder="CPF" required />
        <InputField
          id="agencia"
          type="password"
          placeholder="Agência"
          required
        />
        <BtnAcess id="entrar" type="button" onClick={() => handleSubmit()}>
          Entrar
        </BtnAcess>
      </FormContent>
      <BtnNewAccount
        id="nova-conta"
        type="button"
        onClick={() => navigate("/nova-conta")}
      >
        Criar uma conta
      </BtnNewAccount>
    </LoginContainer>
  );
}
