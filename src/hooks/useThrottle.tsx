import { useState } from 'react';

const useThrottle = <T,>(cb: (...args: T[]) => void, delay = 1000) => {
  const [shouldWait, setShouldWait] = useState(false);

  const throttleCallback = (...args: T[]) => {
    if (shouldWait) return;

    cb(...args);
    setShouldWait(true);

    setTimeout(() => {
      setShouldWait(false);
    }, delay);
  };

  return throttleCallback;
};
export default useThrottle;
