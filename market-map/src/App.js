// src/App.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Board from "./components/Board";
import * as XLSX from "xlsx";

// const mockData = [
//   {
//     enterprise_name: "Tesla",
//     enterprise_logo: "/logos/tesla.png",
//     enterprise_category: "Made-in-USA",
//     enterprise_subcategory: "EVs",
//   },
//   {
//     enterprise_name: "Xometry",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Platform/Marketplace",
//     enterprise_subcategory: "Pharmacie",
//   },
//   {
//     enterprise_name: "Hiive",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Robotics",
//     enterprise_subcategory: "Automation Indutry",
//   },
//   {
//     enterprise_name: "Adilson",
//     enterprise_logo: "/logos/tesla.png",
//     enterprise_category: "Made-in-USA",
//     enterprise_subcategory: "Tech",
//   },
//   {
//     enterprise_name: "Pedro",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Platform/Marketplace",
//     enterprise_subcategory: "Hallowin",
//   },
//   {
//     enterprise_name: "Felipe",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Robotics",
//     enterprise_subcategory: "Funny",
//   },
//   {
//     enterprise_name: "Tesla",
//     enterprise_logo: "/logos/tesla.png",
//     enterprise_category: "Made-in-USA",
//     enterprise_subcategory: "EVs",
//   },
//   {
//     enterprise_name: "Xometry",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Platform/Marketplace",
//     enterprise_subcategory: "Pharmacie",
//   },
//   {
//     enterprise_name: "Hiive",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Robotics",
//     enterprise_subcategory: "Automation Indutry",
//   },
//   {
//     enterprise_name: "Adilson",
//     enterprise_logo: "/logos/tesla.png",
//     enterprise_category: "Made-in-USA",
//     enterprise_subcategory: "Tech",
//   },
//   {
//     enterprise_name: "Pedro",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Platform/Marketplace",
//     enterprise_subcategory: "Hallowin",
//   },
//   {
//     enterprise_name: "Felipe",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Robotics",
//     enterprise_subcategory: "Funny",
//   },
//   {
//     enterprise_name: "Tesla",
//     enterprise_logo: "/logos/tesla.png",
//     enterprise_category: "Made-in-USA",
//     enterprise_subcategory: "EVs",
//   },
//   {
//     enterprise_name: "Xometry",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Platform/Marketplace",
//     enterprise_subcategory: "Pharmacie",
//   },
//   {
//     enterprise_name: "Hiive",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Robotics",
//     enterprise_subcategory: "Automation Indutry",
//   },
//   {
//     enterprise_name: "Adilson",
//     enterprise_logo: "/logos/tesla.png",
//     enterprise_category: "Made-in-USA",
//     enterprise_subcategory: "Tech",
//   },
//   {
//     enterprise_name: "Pedro",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Platform/Marketplace",
//     enterprise_subcategory: "Hallowin",
//   },
//   {
//     enterprise_name: "Felipe",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Robotics",
//     enterprise_subcategory: "Funny",
//   },
//   {
//     enterprise_name: "Tesla",
//     enterprise_logo: "/logos/tesla.png",
//     enterprise_category: "Made-in-USA",
//     enterprise_subcategory: "EVs",
//   },
//   {
//     enterprise_name: "Xometry",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Platform/Marketplace",
//     enterprise_subcategory: "Pharmacie",
//   },
//   {
//     enterprise_name: "Hiive",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Robotics",
//     enterprise_subcategory: "Automation Indutry",
//   },
//   {
//     enterprise_name: "Adilson",
//     enterprise_logo: "/logos/tesla.png",
//     enterprise_category: "Made-in-USA",
//     enterprise_subcategory: "Tech",
//   },
//   {
//     enterprise_name: "Pedro",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Platform/Marketplace",
//     enterprise_subcategory: "Hallowin",
//   },
//   {
//     enterprise_name: "Felipe",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Robotics",
//     enterprise_subcategory: "Funny",
//   },
//   {
//     enterprise_name: "Tesla",
//     enterprise_logo: "/logos/tesla.png",
//     enterprise_category: "Made-in-USA",
//     enterprise_subcategory: "EVs",
//   },
//   {
//     enterprise_name: "Xometry",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Platform/Marketplace",
//     enterprise_subcategory: "Pharmacie",
//   },
//   {
//     enterprise_name: "Hiive",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Robotics",
//     enterprise_subcategory: "Automation Indutry",
//   },
//   {
//     enterprise_name: "Adilson",
//     enterprise_logo: "/logos/tesla.png",
//     enterprise_category: "Made-in-USA",
//     enterprise_subcategory: "Tech",
//   },
//   {
//     enterprise_name: "Pedro",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Platform/Marketplace",
//     enterprise_subcategory: "Hallowin",
//   },
//   {
//     enterprise_name: "Felipe",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "Robotics",
//     enterprise_subcategory: "Funny",
//   },
//   {
//     enterprise_name: "Teste1",
//     enterprise_logo: "/logos/tesla.png",
//     enterprise_category: "CAT1",
//     enterprise_subcategory: "Tech",
//   },
//   {
//     enterprise_name: "Teste2",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "CAT2",
//     enterprise_subcategory: "Hallowin",
//   },
//   {
//     enterprise_name: "Teste3",
//     enterprise_logo: "/logos/xometry.png",
//     enterprise_category: "CAT3",
//     enterprise_subcategory: "Funny",
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchExcelData = async () => {
      const response = await fetch(
        "/spreadsheet/USA Manufacturing enterprises - startups - categories.xlsx"
      );
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      const formatted = jsonData.map((row) => {
        const name = row["Company"] || "";
        const fileBase = name;
        console.log(`${fileBase}.png`);
        return {
          enterprise_name: name,
          enterprise_logo: `/Logos-enterprises/${name}.png`, // fallback via onError no componente
          enterprise_category: row["Category"] || "",
          enterprise_subcategory: row["Subcategories"] || "",
        };
      });

      setData(formatted);
    };

    fetchExcelData();
  }, []);

  return (
    <AppContainer>
      <Title>USA Manufacturing Market Map</Title>
      {/* <Board boardType="category" enterprises={data} /> */}
      <Board boardType="subcategory" enterprises={data} />
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
