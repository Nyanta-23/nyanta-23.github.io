import { useEffect, useState } from "react";

export default function useSheetData<T>(
  { sheetGid = "" }: UseSheetData<T> = {} as UseSheetData<T>,
) {
  const [data, setData] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const SHEET_HTML = import.meta.env.VITE_SHEET_HTML;

  useEffect(() => {
    fetch(
      `${SHEET_HTML}${sheetGid.length != 0 ? "/sheet?headers=false&gid=" + sheetGid : ""}`,
    )
      .then((response) => response.text())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [SHEET_HTML, sheetGid]);

  return { data, error, isLoading };
}
