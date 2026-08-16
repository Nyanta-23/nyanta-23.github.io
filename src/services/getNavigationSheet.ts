import { navigationParser } from "../parsers/navigationParser";
import { getSheetNavigation } from "./pullData";

const CACHE_KEY = "navigation_sheets_cache";

let navigationCache: SheetItem[] | null = null;

function readSessionCache(): SheetItem[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SheetItem[];
  } catch (err) {
    console.error("Gagal membaca cache sessionStorage:", err);
    return null;
  }
}

function writeSessionCache(data: SheetItem[]) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Gagal menyimpan cache sessionStorage:", err);
  }
}

export const getNavigationSheets = async () => {
  try {
    if (navigationCache) {
      return navigationCache;
    }

    const sessionCached = readSessionCache();
    if (sessionCached) {
      navigationCache = sessionCached;
      return navigationCache;
    }

    const getData = await getSheetNavigation();
    const transformDataIntoArrayObject = navigationParser(getData);

    navigationCache = transformDataIntoArrayObject;
    writeSessionCache(transformDataIntoArrayObject);

    return navigationCache;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};