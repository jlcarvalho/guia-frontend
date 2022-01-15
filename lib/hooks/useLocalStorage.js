import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState([]);

  const setValue = ({ url, checked }) => {
    try {
      const valueToStore = checked
        ? [...storedValue, url]
        : storedValue.filter((item) => item !== url);

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
    });
  }, []);

  return [storedValue, setValue];
}

export default useLocalStorage;
