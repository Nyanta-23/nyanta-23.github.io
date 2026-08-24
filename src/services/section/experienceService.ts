import {
  dateToSortableNumber,
  getGidFromNavigationSheet,
  parseYearMonth,
} from "../../helpers/helper";
import { tableParserGviz } from "../../parsers/gvizParser";
import { getNavigationSheets } from "../getNavigationSheet";
import { getSheet } from "../pullData";

export const experienceService = async (): Promise<
  ExperienceSectionData | undefined
> => {
  try {
    // Raw Data
    const navSheet = await getNavigationSheets();

    const gidExperiencesSheet = getGidFromNavigationSheet(
      "experiences",
      navSheet,
    )?.gid;

    const gidExperienceRolesSheet = getGidFromNavigationSheet(
      "experience_roles",
      navSheet,
    )?.gid;

    const gidRolesSheet = getGidFromNavigationSheet("roles", navSheet)?.gid;

    // Html Data

    const [pullExperiencesHtml, pullExperienceRolesHtml, pullRolesHtml] =
      await Promise.all([
        getSheet(gidExperiencesSheet),
        getSheet(gidExperienceRolesSheet),
        getSheet(gidRolesSheet),
      ]);

    // Data JSON

    const parseExperiences = tableParserGviz<Experience>(pullExperiencesHtml);

    const parseExperienceRoles = tableParserGviz<ExperienceRole>(
      pullExperienceRolesHtml,
    );

    const parseRoles = tableParserGviz<Role>(pullRolesHtml);

    // Manage Data

    const experiences = parseExperiences
      .map((experience) => {
        const roles = parseExperienceRoles
          .filter(
            (experienceRole) => experienceRole.experience_id === experience.id,
          )
          .map((er) => ({
            ...er,
            role: parseRoles.find((r) => r.id === er.role_id),
          }))
          .sort((a, b) => {
            const aStart = dateToSortableNumber(parseYearMonth(a.start_date));
            const bStart = dateToSortableNumber(parseYearMonth(b.start_date));

            return bStart - aStart;
          });

        return {
          ...experience,
          roles,
        };
      })
      .sort((expA, expB) => {
        const latestStartA = dateToSortableNumber(
          parseYearMonth(expA.roles[0]?.start_date),
        );
        const latestStartB = dateToSortableNumber(
          parseYearMonth(expB.roles[0]?.start_date),
        );

        return latestStartB - latestStartA;
      });

    //  const experiences = parseExperiences.map((experience) => ({
    //   ...experience,
    //   roles: parseExperienceRoles
    //     .filter(
    //       (experienceRole) => experienceRole.experience_id === experience.id,
    //     )
    //     .map((er) => ({
    //       ...er,
    //       role: parseRoles.find((r) => r.id === er.role_id),
    //     })),
    // }));

    return {
      experiences,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
