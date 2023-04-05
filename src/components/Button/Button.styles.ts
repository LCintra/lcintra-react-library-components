import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ type }) => {
    const variants = {
      primary: {
        backgroundColor: "#2196f3",
        fontColor: "#ffffff",
        hoverFontColor: "#ffffff"
      },
      secondary: {
        backgroundColor: "transparent",
        fontColor: "#000000",
        hoverFontColor: "#ffffff"
      }
    }

    return css`
    padding: 10px 20px;
    background-color: ${variants[type].backgroundColor};
    color: ${variants[type].fontColor};
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  
    &:hover {
      background-color: #1976d2;
      color:  ${variants[type].hoverFontColor};
    }
  
    &:focus {
      outline: none;
    }
  
    &:disabled {
      background-color: #9e9e9e;
      cursor: not-allowed;
    }
    `}
  } 
}`;