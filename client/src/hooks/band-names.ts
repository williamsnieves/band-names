import useSWR from "swr";
import fetcher from "../lib/fetcher";

type BandName = {
  genre: string | undefined;
  amount: string | undefined;
  language: string | undefined;
};

const useBandNames = ({ genre, amount, language }: BandName) => {
  const { data, error } = useSWR(
    `http://localhost:3000/api/band-names?genre=${genre}&amount=${amount}&language=${language}`,
    fetcher,
    {
      revalidateOnMount: true,
    }
  );

  return {
    bandNames: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useBandNames;
