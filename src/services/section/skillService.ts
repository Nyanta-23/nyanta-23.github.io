import { getGidFromNavigationSheet } from "../../helpers/helper";
import { tableParserGviz } from "../../parsers/gvizParser";
import { getNavigationSheets } from "../getNavigationSheet";
import { getSheet } from "../pullData";


export const skillsService = async (): Promise<SkillSectionData | undefined> => {
  try {
    // Raw Data

    const navSheet = await getNavigationSheets();

    const gidSkillsSheet = getGidFromNavigationSheet("skills", navSheet)?.gid;

    // Html Data

    const pullSkillsHtml = await getSheet(gidSkillsSheet);

    // Data JSON
    const parseSkills = tableParserGviz<Skill>(pullSkillsHtml);


    return {
      skills: parseSkills,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
