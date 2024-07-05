import React, { useState } from 'react';
import Search from './components/Search';
import DisplayImage from './components/DisplayImage';
import styled from "styled-components";
import "./App.css"

const App = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async (startRollNo, endRollNo) => {
    const imageUrls = [];
    for (let rollNo = startRollNo; rollNo <= endRollNo; rollNo++) {
      imageUrls.push(`https://erp.psit.ac.in/assets/img/Simages/${rollNo}.jpg`);
    }
    setImages(imageUrls);
  };

  const handleSearch = (start, end) => {
    fetchImages(start, end);
  };

  return (
    <Wrapper>
      <div className="App">
        <h1 className="heading">Student Profile Viewer</h1>
        <Search onSearch={handleSearch} />
        <DisplayImage images={images} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .heading{
    font-family: "Lato", sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 5rem;
    color: black;
  }
`;

export default App;