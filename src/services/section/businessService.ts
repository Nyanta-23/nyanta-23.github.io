import { getGidFromNavigationSheet } from "../../helpers/helper";
import { tableParserGviz } from "../../parsers/gvizParser";
import { getNavigationSheets } from "../getNavigationSheet";
import { getSheet } from "../pullData";


export const businessService = async (): Promise<ServiceSectionData | undefined> => {
  try {
    // Raw Data

    const navSheet = await getNavigationSheets();
    const gidServicesSheet = getGidFromNavigationSheet("services", navSheet)?.gid;

    // Html Data
    const pullServicesHtml = await getSheet(gidServicesSheet);

    // Data JSON
    const parseServices = tableParserGviz<Service>(pullServicesHtml);

    return {
      services: parseServices
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
