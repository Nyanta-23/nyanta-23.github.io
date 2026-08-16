const SHEET_HTML = import.meta.env.VITE_SHEET_HTML;
const SHEET_GVIZ = import.meta.env.VITE_SHEET_GVIZ;

const getSheetNavigation = async () => {
  try {
    const url = SHEET_HTML;

    const response = await fetch(url);
    const data = await response.text();

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};

const getSheet = async (gid: string = "") => {
  try {
    const url = `${SHEET_GVIZ}&gid=${gid}`;


    const response = await fetch(url);

    const data = await response.text();


    return data;

  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};

export { getSheetNavigation, getSheet };
