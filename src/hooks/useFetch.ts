
import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean> (false);

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Ошибка');
        }
        const result = await response.json();
        setData(result)
      }catch (error){
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Неизвестная ошибка')
        }
      }finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url])
  return {data, error, loading}
}

export default useFetch;