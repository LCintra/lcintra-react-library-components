import React, { useState } from 'react';
import * as Styles from './Select.styles'
import { SelectProps } from './Select.types';

const Select = ({ label, options, value, onChange } : SelectProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [valueSelected, setValueSelected] = useState(value);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = e.target.value;
      setValueSelected(selectedValue);
      onChange(selectedValue);
    };
  
    return (
      <Styles.SelectContainer>
        <Styles.SelectLabel>{label}</Styles.SelectLabel>
        <Styles.SelectWrapper>
          <Styles.SelectInput
            value={valueSelected}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            isFocused={isFocused}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Styles.SelectInput>
          <Styles.SelectArrow />
        </Styles.SelectWrapper>
      </Styles.SelectContainer>
    );
  };
  
  export default Select;