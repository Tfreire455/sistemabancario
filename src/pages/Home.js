import React from "react";
import styled from "styled-components";
import Login from "../components/Login";
import Header from "../components/Header";

const HomeContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  background-color: #b0b0b0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <Login />
    </HomeContainer>
  );
}
