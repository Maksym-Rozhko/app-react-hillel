import { useState } from 'react';

export default function useLocalStorage(key) {
  const [storedValue, setStoredValue ] = useState(() => {
    const item = localStorage.getItem(key);
    if(item){
      return JSON.parse(item);
    } else {
      return 
    }
  });

  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
