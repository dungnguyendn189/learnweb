import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [deboundcedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value]);
  return deboundcedValue;
}

export default useDebounce;
