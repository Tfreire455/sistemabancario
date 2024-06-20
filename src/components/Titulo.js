import styled from "styled-components";

export const Titulo = styled.h2`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => props.cor || "#777"};
  text-align: center;
`;
