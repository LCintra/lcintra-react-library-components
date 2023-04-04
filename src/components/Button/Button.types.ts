export type ButtonProps = {
    label: string,
    disabled: boolean,
    type: "primary" | "secondary" | "terciary",
    onClick: (event: React.FormEvent) => void,
  };
  