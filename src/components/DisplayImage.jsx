import React from 'react';
import styled from "styled-components";

const DisplayImages = ({ images }) => {
  return (
          <Wrapper>
                <div className="images-container">
                {images.map((url, index) => (
                        <div className="image-card" key={index}>
                        <img src={url} alt={`Roll No. ${index}`} loading="lazy"/>
                        <div className="roll-no">Roll No. {index}</div>
                        </div>
                ))}
                </div>
          </Wrapper>
  );
};

const Wrapper = styled.section`
      .images-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 20px;
        justify-items: center;
        max-width: 1000px; /* Limit width for larger screens */
        margin: 0 auto; /* Center align on larger screens */
      }
      
      .image-card {
        width: 100%;
        background: linear-gradient(to bottom, #ffffff, #f2f2f2);
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease-in-out;
      }
      
      .image-card:hover {
        transform: translateY(-5px);
      }
      
      .image-card img {
        width: 100%;
        height: auto;
        border-bottom: 1px solid #ddd;
      }
      
      .image-card .roll-no {
        padding: 8px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        color: #333;
      }
`;

export default DisplayImages;