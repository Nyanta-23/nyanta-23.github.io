const cache = new Map<string, string>();
const SHEET_HTML = import.meta.env.VITE_SHEET_HTML;

export const testGetSHeet = async () => {
  try {
    // const key = gid;

    // if (cache.has(key)) {
    //   return cache.get(key)!;
    // }

    const url = "https://docs.google.com/spreadsheets/d/1AKB9ieaWpMSUQ3SOZAH9kQDmSgZDi03WrI3IGZLEkeE/gviz/tq?tqx=out:json&sheet=roles";

    const response = await fetch(url);
    const data = await response.text();

    // cache.set(key, data);

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
