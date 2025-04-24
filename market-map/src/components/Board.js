// src/components/Board.js
import React from "react";
import styled from "styled-components";
import CategoryBox from "./CategoryBox";

const Board = ({ boardType, enterprises }) => {
  // Grouping by category or subcategory
  const grouped = {};

  enterprises.forEach((entry) => {
    const category = entry.enterprise_category;
    const subcategory = entry.enterprise_subcategory;

    if (boardType === "subcategory") {
      if (!grouped[category]) grouped[category] = {};
      if (!grouped[category][subcategory]) grouped[category][subcategory] = [];
      grouped[category][subcategory].push(entry);
    } else {
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(entry);
    }
  });

  return (
    <BoardGrid>
      {Object.entries(grouped).map(([category, value]) => (
        <CategoryBox
          key={category}
          title={category}
          subcategories={boardType === "subcategory" ? value : null}
          enterprises={boardType === "category" ? value : null}
        />
      ))}
    </BoardGrid>
  );
};

export default Board;

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;
