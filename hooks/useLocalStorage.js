import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState([]);

  const setValue = ({ url, checked }) => {
    try {
      const index = storedValue.indexOf(url);

      const valueToStore = checked && index === -1
        ? [...storedValue, url]
        : storedValue.slice(0, index - 1).concat(storedValue.slice(index, storedValue.length))

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setStoredValue(() => {
      try {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);

        return initialValue;
      }
    })
  }, [])

  return [storedValue, setValue];
}

export default useLocalStorage;
