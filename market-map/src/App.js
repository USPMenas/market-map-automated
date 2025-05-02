// src/App.js
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Board from "./components/Board";
import * as XLSX from "xlsx";

import { toJpeg } from "html-to-image";

function App() {
  const [data, setData] = useState([]);
  const boardRef = useRef(null);

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

  const handleExport = async () => {
    if (boardRef.current === null) return;
    const dataUrl = await toJpeg(boardRef.current, {
      quality: 1,
      cacheBust: true,
    });
    const link = document.createElement("a");
    link.download = "market-map.jpeg";
    link.href = dataUrl;
    link.click();
  };

  {
    /* <Board boardType="category" enterprises={data} /> */
  }

  return (
    <>
      <Button onClick={handleExport}>Export as JPEG</Button>
      <AppContainer>
        <BoardWrapper ref={boardRef}>
          <Title>USA Manufacturing Market Map</Title>
          <Board boardType="subcategory" enterprises={data} />
        </BoardWrapper>
      </AppContainer>
    </>
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

const Button = styled.button`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
`;

const BoardWrapper = styled.div`
  background-color: #f4f4f4;

  /* background: white; */
  padding: 2rem;

  border: 2px dashed red;
`;
