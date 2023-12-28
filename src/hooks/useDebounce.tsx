import { useEffect, useRef } from 'react';

const useDebounce = <T,>(cb: (...args: T[]) => void, delay = 1000) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const debounceCallback = (...args: T[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };

  return debounceCallback;
};
export default useDebounce;
