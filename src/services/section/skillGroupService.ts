import { getGidFromNavigationSheet } from "../../helpers/helper";
import { tableParserGviz } from "../../parsers/gvizParser";
import { getNavigationSheets } from "../getNavigationSheet";
import { getSheet } from "../pullData";

export const skillGroupService = async (): Promise<SkillGroupSectionData | undefined> => {
  try {
    // Raw Data
    const navSheet = await getNavigationSheets();

    const gidSkillGroupsSheet = getGidFromNavigationSheet(
      "skill_groups",
      navSheet,
    )?.gid;
    const gidSkillsSheet = getGidFromNavigationSheet("skills", navSheet)?.gid;
    const gidSKillGroupTagsSheet = getGidFromNavigationSheet(
      "skill_group_tags",
      navSheet,
    )?.gid;

    // Html Data

    const [pullSkillGroupsHtml, pullSkillsHtml, pullSkillGroupTagsHtml] =
      await Promise.all([
        getSheet(gidSkillGroupsSheet),
        getSheet(gidSkillsSheet),
        getSheet(gidSKillGroupTagsSheet),
      ]);

    // Data JSON

    const parseSkillGroups = tableParserGviz<SkillGroup>(pullSkillGroupsHtml);
    const parseSkills = tableParserGviz<Skill>(pullSkillsHtml);
    const parseSkillGroupTags = tableParserGviz<SkillGroupTag>(
      pullSkillGroupTagsHtml,
    );

    // Manage Data

    const skillGroups = parseSkillGroups.map((skillGroup) => ({
      ...skillGroup,
      skills: parseSkillGroupTags
        .filter(
          (skillGroupTag) => skillGroupTag.skill_group_id === skillGroup.id,
        )
        .map((sg) => ({
          ...sg,
          skill: parseSkills.find((s) => s.id === sg.skill_id),
        })),
    }));

    return {
      skill_groups: skillGroups,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
