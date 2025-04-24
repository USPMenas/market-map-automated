// src/components/EnterpriseLogo.js
import React from "react";
import styled from "styled-components";

const EnterpriseLogo = ({ enterprise_name, enterprise_logo }) => {
  return (
    <LogoContainer title={enterprise_name}>
      <LogoImage src={enterprise_logo} alt={enterprise_name} />
    </LogoContainer>
  );
};

export default EnterpriseLogo;

const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fafafa;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
