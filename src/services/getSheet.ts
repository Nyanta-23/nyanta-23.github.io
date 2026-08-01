const cache = new Map<string, string>();
const SHEET_HTML = import.meta.env.VITE_SHEET_HTML;

export const getSheet = async (gid: string = "") => {
  try {
    const key = gid;

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const url =
      key.length < 1
        ? SHEET_HTML
        : `${SHEET_HTML}/sheet?headers=false&gid=${gid}`;

    const response = await fetch(url);
    const data = await response.text();

    cache.set(key, data);

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
