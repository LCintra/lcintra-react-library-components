export type SelectProps = {
    label: string;
    options: SelectOption[];
    value: string;
    onChange: (selectedValue: string) => void;
  }
  
export type SelectOption = {
    label: string;
    value: string;
  }