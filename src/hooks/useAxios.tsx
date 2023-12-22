import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const useAxios = <T,>(url: string, params?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res: AxiosResponse = await axios(url, params);
      setData(res.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        setError(error.message);
      } else {
        console.log('unexpected error: ', error);
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, params]);

  return { data, error, isLoading };
};

export default useAxios;
