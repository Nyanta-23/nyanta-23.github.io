import { getGidFromNavigationSheet } from "../../helpers/helper";
import { keyValueParserGviz } from "../../parsers/gvizParser";
import { getNavigationSheets } from "../getNavigationSheet";
import { getSheet } from "../pullData";

export const mainService = async (): Promise<MainData | undefined> => {
  try {
    const navSheet = await getNavigationSheets();
    const gidProfileSheet = getGidFromNavigationSheet("profile", navSheet)?.gid;

    const pullProfileHtml = await getSheet(gidProfileSheet);
    
    const parseProfile = keyValueParserGviz<MainData>(pullProfileHtml);

    return parseProfile;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
