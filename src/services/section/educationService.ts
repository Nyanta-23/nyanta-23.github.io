import {
  dateToSortableNumber,
  getGidFromNavigationSheet,
  parseYearMonth,
} from "../../helpers/helper";
import { tableParserGviz } from "../../parsers/gvizParser";
import { getNavigationSheets } from "../getNavigationSheet";
import { getSheet } from "../pullData";

export const educationService = async (): Promise<
  EducationSectionData | undefined
> => {
  try {
    // Raw Data
    const navSheet = await getNavigationSheets();

    const gidEducationsSheet = getGidFromNavigationSheet(
      "educations",
      navSheet,
    )?.gid;

    // Html Data

    const pullEducationsHtml = await getSheet(gidEducationsSheet);

    // Data JSON
    const parseEducations = tableParserGviz<Education>(pullEducationsHtml);

    // Manage Data

    const educations = parseEducations
      .map((education) => ({ ...education }))
      .sort((a, b) => {
        const aStart = dateToSortableNumber(parseYearMonth(a.start_date));
        const bStart = dateToSortableNumber(parseYearMonth(b.start_date));

        return bStart - aStart;
      });

    // const educations = parseEducations.map((education) => ({
    //   ...education,
    // }));

    return {
      educations: educations,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
