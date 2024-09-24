import { useState, useEffect } from "react";

import "./index.css";

interface SearchProps {
  onSearch: (query: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(inputValue);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue, onSearch]);

  return (
    <input
      type="text"
      placeholder="Buscar Conteúdo"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
