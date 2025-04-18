 import { useState, useEffect } from 'react'
 
 // Cart and Local Storage
 function LocalStorage(key, initialVal) {
    const [value, setValue] = useState(() => {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialVal;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue];

  }

  export default LocalStorage;