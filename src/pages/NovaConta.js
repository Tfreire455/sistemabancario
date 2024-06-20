import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { Titulo } from "../components/Titulo";
import NovaContaForm from "../components/FormularioNovaConta";

const SectionNewAccount = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #b0b0b0;
  width: 100vw;
  height: 100vh;
`;
const NewAccountContent = styled(motion.div)`
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

export default function NovaConta() {
  return (
    <SectionNewAccount>
      <Header />
      <NewAccountContent>
        <Titulo cor="#000">Crie sua conta!</Titulo>
        <NovaContaForm />
      </NewAccountContent>
    </SectionNewAccount>
  );
}
