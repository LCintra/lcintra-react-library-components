import styled from 'styled-components';

export const SelectContainer  = styled.div`
    position: relative;
    width: 200px;
}`;

export const SelectLabel = styled.label`
    position: absolute;
    top: -15px;
    left: 0;
    font-size: 12px;
    font-weight: bold;
    color: #333;
`;

export const SelectWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    background-color: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
    `;

export const SelectInput  = styled.select`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    border: none;
    background-color: transparent;
    outline: none;
    appearance: none;
    `;

export const SelectArrow = styled.span`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #333;
    pointer-events: none;
`;