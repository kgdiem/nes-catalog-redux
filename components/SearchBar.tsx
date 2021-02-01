import React, { useState, useCallback, useEffect } from "react";
import debounce from 'lodash.debounce';

export interface SearchBarPropTypes {
  onChange: (val: string) => void;
  value: string;
}

export const SearchBar = ({ onChange, value }: SearchBarPropTypes) => {
  const [query, setQuery] = useState(value);

  const debouncedSearch = useCallback(
		debounce(val => onChange(val), 500),
		[]
	);

  useEffect(() => {
    setQuery(value);
  }, [value])

  const search = (val: string) => {
    setQuery(val);
    debouncedSearch(val);
  }

  return (
    <div className="nes-field mb-20">
      <input
        type="text"
        className="nes-input"
        placeholder="Search for titles"
        value={query}
        onChange={e => search(e.target.value)}
      />
    </div>
  );
};
