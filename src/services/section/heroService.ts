import { getGidFromNavigationSheet } from "../../helpers/helper";
import { tableParserGviz } from "../../parsers/gvizParser";
import { getNavigationSheets } from "../getNavigationSheet";
import { getSheet } from "../pullData";
// import { keyValueParserGviz, tableParserGviz } from "../parsers/gvizParser";
// import { getNavigationSheets } from "./getNavigationSheet";
// import { getSheet } from "./pullData";

export const heroService = async (): Promise<HeroSectionData | undefined> => {
  try {
    // Raw Data

    const navSheet = await getNavigationSheets();

    const gidRolesSheet = getGidFromNavigationSheet("roles", navSheet)?.gid;

    // Html Data
    const pullRolesHtml = await getSheet(gidRolesSheet);


    // Data JSON
    const parseRoles = tableParserGviz<Role>(pullRolesHtml);

    return {
      roles: parseRoles,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
