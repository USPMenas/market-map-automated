// src/App.js
import React from "react";
import styled from "styled-components";
import Board from "./components/Board";

const mockData = [
  {
    enterprise_name: "Tesla",
    enterprise_logo: "/logos/tesla.png",
    enterprise_category: "Made-in-USA",
    enterprise_subcategory: "EVs",
  },
  {
    enterprise_name: "Xometry",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Platform/Marketplace",
    enterprise_subcategory: "Pharmacie",
  },
  {
    enterprise_name: "Hiive",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Robotics",
    enterprise_subcategory: "Automation Indutry",
  },
  {
    enterprise_name: "Adilson",
    enterprise_logo: "/logos/tesla.png",
    enterprise_category: "Made-in-USA",
    enterprise_subcategory: "Tech",
  },
  {
    enterprise_name: "Pedro",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Platform/Marketplace",
    enterprise_subcategory: "Hallowin",
  },
  {
    enterprise_name: "Felipe",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Robotics",
    enterprise_subcategory: "Funny",
  },
  {
    enterprise_name: "Tesla",
    enterprise_logo: "/logos/tesla.png",
    enterprise_category: "Made-in-USA",
    enterprise_subcategory: "EVs",
  },
  {
    enterprise_name: "Xometry",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Platform/Marketplace",
    enterprise_subcategory: "Pharmacie",
  },
  {
    enterprise_name: "Hiive",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Robotics",
    enterprise_subcategory: "Automation Indutry",
  },
  {
    enterprise_name: "Adilson",
    enterprise_logo: "/logos/tesla.png",
    enterprise_category: "Made-in-USA",
    enterprise_subcategory: "Tech",
  },
  {
    enterprise_name: "Pedro",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Platform/Marketplace",
    enterprise_subcategory: "Hallowin",
  },
  {
    enterprise_name: "Felipe",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Robotics",
    enterprise_subcategory: "Funny",
  },
  {
    enterprise_name: "Tesla",
    enterprise_logo: "/logos/tesla.png",
    enterprise_category: "Made-in-USA",
    enterprise_subcategory: "EVs",
  },
  {
    enterprise_name: "Xometry",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Platform/Marketplace",
    enterprise_subcategory: "Pharmacie",
  },
  {
    enterprise_name: "Hiive",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Robotics",
    enterprise_subcategory: "Automation Indutry",
  },
  {
    enterprise_name: "Adilson",
    enterprise_logo: "/logos/tesla.png",
    enterprise_category: "Made-in-USA",
    enterprise_subcategory: "Tech",
  },
  {
    enterprise_name: "Pedro",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Platform/Marketplace",
    enterprise_subcategory: "Hallowin",
  },
  {
    enterprise_name: "Felipe",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Robotics",
    enterprise_subcategory: "Funny",
  },
  {
    enterprise_name: "Tesla",
    enterprise_logo: "/logos/tesla.png",
    enterprise_category: "Made-in-USA",
    enterprise_subcategory: "EVs",
  },
  {
    enterprise_name: "Xometry",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Platform/Marketplace",
    enterprise_subcategory: "Pharmacie",
  },
  {
    enterprise_name: "Hiive",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Robotics",
    enterprise_subcategory: "Automation Indutry",
  },
  {
    enterprise_name: "Adilson",
    enterprise_logo: "/logos/tesla.png",
    enterprise_category: "Made-in-USA",
    enterprise_subcategory: "Tech",
  },
  {
    enterprise_name: "Pedro",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Platform/Marketplace",
    enterprise_subcategory: "Hallowin",
  },
  {
    enterprise_name: "Felipe",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Robotics",
    enterprise_subcategory: "Funny",
  },
  {
    enterprise_name: "Tesla",
    enterprise_logo: "/logos/tesla.png",
    enterprise_category: "Made-in-USA",
    enterprise_subcategory: "EVs",
  },
  {
    enterprise_name: "Xometry",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Platform/Marketplace",
    enterprise_subcategory: "Pharmacie",
  },
  {
    enterprise_name: "Hiive",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Robotics",
    enterprise_subcategory: "Automation Indutry",
  },
  {
    enterprise_name: "Adilson",
    enterprise_logo: "/logos/tesla.png",
    enterprise_category: "Made-in-USA",
    enterprise_subcategory: "Tech",
  },
  {
    enterprise_name: "Pedro",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Platform/Marketplace",
    enterprise_subcategory: "Hallowin",
  },
  {
    enterprise_name: "Felipe",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "Robotics",
    enterprise_subcategory: "Funny",
  },
  {
    enterprise_name: "Teste1",
    enterprise_logo: "/logos/tesla.png",
    enterprise_category: "CAT1",
    enterprise_subcategory: "Tech",
  },
  {
    enterprise_name: "Teste2",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "CAT2",
    enterprise_subcategory: "Hallowin",
  },
  {
    enterprise_name: "Teste3",
    enterprise_logo: "/logos/xometry.png",
    enterprise_category: "CAT3",
    enterprise_subcategory: "Funny",
  },
];

function App() {
  return (
    <AppContainer>
      <Title>USA Manufacturing Market Map</Title>
      <Board boardType="category" enterprises={mockData} />
      <div margin="80px">a</div>
      <Board boardType="subcategory" enterprises={mockData} />
    </AppContainer>
  );
}

export default App;

// Styled components
const AppContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;
