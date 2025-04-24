// src/components/CategoryBox.js
import React from "react";
import styled from "styled-components";
import EnterpriseLogo from "./EnterpriseLogo";

const CategoryBox = ({ title, enterprises, subcategories }) => {
  return (
    <Container>
      <CategoryTitle>{title}</CategoryTitle>
      {subcategories ? (
        Object.entries(subcategories).map(([sub, companies]) => (
          <SubcategorySection key={sub}>
            <SubcategoryTitle>{sub}</SubcategoryTitle>
            <LogoGrid>
              {companies.map((company, idx) => (
                <EnterpriseLogo key={idx} {...company} />
              ))}
            </LogoGrid>
          </SubcategorySection>
        ))
      ) : (
        <LogoGrid>
          {enterprises.map((company, idx) => (
            <EnterpriseLogo key={idx} {...company} />
          ))}
        </LogoGrid>
      )}
    </Container>
  );
};

export default CategoryBox;

const Container = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const CategoryTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SubcategorySection = styled.div`
  margin-bottom: 1rem;
`;

const SubcategoryTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const LogoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
