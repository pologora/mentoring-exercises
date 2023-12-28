import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import useThrottle from '../../hooks/useThrottle';

const Debounce = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedText, setDebouncedText] = useState('');
  const [throttleText, setThrottleText] = useState('');

  const updateDebouncedText = useDebounce((text: string) =>
    setDebouncedText(text)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const updateThrottleText = useThrottle((text: string) =>
    setThrottleText(text)
  );

  useEffect(() => {
    updateDebouncedText(inputValue);
  }, [inputValue, updateDebouncedText]);

  useEffect(() => {
    updateThrottleText(inputValue);
  }, [inputValue, updateThrottleText]);

  return (
    <div>
      <input type='text' onChange={handleInputChange} value={inputValue} />
      <div>
        <b>Default:</b>
        <span>{inputValue}</span>
      </div>
      <div>
        <b>Debounce:</b>
        <span>{debouncedText}</span>
      </div>
      <div>
        <b>Throttle:</b>
        <span>{throttleText}</span>
      </div>
    </div>
  );
};
export default Debounce;
