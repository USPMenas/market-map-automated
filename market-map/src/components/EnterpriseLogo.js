// src/components/EnterpriseLogo.js
import React, { useState } from "react";
import styled from "styled-components";

const EnterpriseLogo = ({ enterprise_name, enterprise_logo }) => {
  const [formatIndex, setFormatIndex] = useState(0);

  const formats = [".png", ".jpeg", ".jpg"];
  const srcBase = enterprise_logo.replace(/\.(png|jpg|jpeg)$/, ""); // remove extensão, se tiver

  const handleError = () => {
    if (formatIndex < formats.length - 1) {
      setFormatIndex((prev) => prev + 1);
    }
  };

  return (
    <LogoContainer title={enterprise_name}>
      <LogoImage
        src={`${srcBase}${formats[formatIndex]}`}
        alt={enterprise_name}
        onError={handleError}
        crossOrigin="anonymous"
      />
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
  /* border: 1px solid #ccc;
  border-radius: 8px; */
  background-color: #fafafa;
  padding: 4px;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
