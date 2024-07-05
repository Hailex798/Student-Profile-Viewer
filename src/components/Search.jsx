import React, { useState } from 'react';
import styled from "styled-components";

const Search = ({ onSearch }) => {
  const [startRollNo, setStartRollNo] = useState('');
  const [endRollNo, setEndRollNo] = useState('');

  const handleStartChange = (e) => {
    setStartRollNo(e.target.value);
  };

  const handleEndChange = (e) => {
    setEndRollNo(e.target.value);
  };

  const handleSearchClick = () => {
    if (startRollNo && endRollNo) {
      onSearch(Number(startRollNo), Number(endRollNo));
    } else {
      alert("Please enter both start and end roll numbers.");
    }
  };

  return (
          <Wrapper>
                <div className="search-container">
                <input
                        type="number"
                        placeholder="Start Roll No."
                        value={startRollNo}
                        onChange={handleStartChange}
                />
                <input
                        type="number"
                        placeholder="End Roll No."
                        value={endRollNo}
                        onChange={handleEndChange}
                />
                <button onClick={handleSearchClick}>Display</button>
                </div>
          </Wrapper>
  );
};

const Wrapper = styled.section`
      .search-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: #f0f0f0;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 600px; /* Limit width for larger screens */
        margin: 0 auto; /* Center align on larger screens */
      }
      
      .search-container input {
        flex: 1; /* Take remaining space */
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
      }
      
      .search-container button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        outline: none;
        transition: background-color 0.3s ease;
      }
      
      .search-container button:hover {
        background-color: #45a049;
      }
`;

export default Search;