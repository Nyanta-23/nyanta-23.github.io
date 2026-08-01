import { navigationParser } from "../parsers/navigationParser";
import { getSheet } from "./getSheet";

let navigationCache: SheetItem[] | null = null;

export const getNavigationSheets = async () => {
  try {
    if (!navigationCache) {
      const getData = await getSheet();
      const transformDataIntoArrayObject = navigationParser(getData);

      navigationCache = transformDataIntoArrayObject;
    }

    return navigationCache;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
