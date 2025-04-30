// src/components/CategoryBox.js
import React from "react";
import styled from "styled-components";
import EnterpriseLogo from "./EnterpriseLogo";

const CategoryBox = ({ title, enterprises, subcategories }) => {
  return (
    <Container>
      <CategoryTitle>{title}</CategoryTitle>

      {subcategories && Object.keys(subcategories).length > 0 ? (
        <AllSubcategories>
          {" "}
          {/* A AllSubcategories que envolve as subcategorias */}
          {Object.entries(subcategories).map(([sub, companies]) => (
            <SubcategorySection key={sub}>
              <SubcategoryTitle>{sub}</SubcategoryTitle>
              <LogoGrid>
                {companies.map((company, idx) => (
                  <EnterpriseLogo key={idx} {...company} />
                ))}
              </LogoGrid>
            </SubcategorySection>
          ))}
        </AllSubcategories>
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
  /* padding: 1rem; */
  padding-bottom: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;

  justify-content: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const AllSubcategories = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  /* gap: 2rem; */

  max-width: 800px;
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
  gap: 0.4rem;

  justify-self: center;
  justify-content: center;
`;
