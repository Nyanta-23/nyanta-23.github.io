import { getGidFromNavigationSheet } from "../helpers/helper";
import { keyValueParser } from "../parsers/keyValueParser";
import { tableParser } from "../parsers/tableParser";
import { getNavigationSheets } from "./getNavigationSheet";
import { getSheet } from "./getSheet";

export const portfolioService = async (): Promise<
  PortfolioData | undefined
> => {
  try {
    // Raw Data
    const navSheet = await getNavigationSheets();

    const gidProfileSheet = getGidFromNavigationSheet("profile", navSheet)?.gid;

    const gidProjectsSheet = getGidFromNavigationSheet(
      "projects",
      navSheet,
    )?.gid;
    const gidRolesSheet = getGidFromNavigationSheet("roles", navSheet)?.gid;
    const gidProjectTypesSheet = getGidFromNavigationSheet(
      "project_types",
      navSheet,
    )?.gid;
    const gidSkillsSheet = getGidFromNavigationSheet("skills", navSheet)?.gid;

    const gidProjectRolesSheet = getGidFromNavigationSheet(
      "project_roles",
      navSheet,
    )?.gid;
    const gidTypeOfProjectsSheet = getGidFromNavigationSheet(
      "type_of_projects",
      navSheet,
    )?.gid;
    const gidProjectStacksSheet = getGidFromNavigationSheet(
      "project_stacks",
      navSheet,
    )?.gid;

    // HTML Data
    const [
      pullProfileHtml,
      pullProjectsHtml,
      pullRolesHtml,
      pullTypeOfProjectsHtml,
      pullSkillsHtml,
      pullProjectRolesHtml,
      pullProjectTypesHtml,
      pullProjectStacksHtml,
    ] = await Promise.all([
      getSheet(gidProfileSheet),
      getSheet(gidProjectsSheet),
      getSheet(gidRolesSheet),
      getSheet(gidTypeOfProjectsSheet),
      getSheet(gidSkillsSheet),
      getSheet(gidProjectRolesSheet),
      getSheet(gidProjectTypesSheet),
      getSheet(gidProjectStacksSheet),
    ]);

    // Data JSON

    const parseProfile =
      keyValueParser<Omit<PortfolioData, "portfolio">>(pullProfileHtml);

    const parseProjects = tableParser<Project>(pullProjectsHtml);
    const parseRoles = tableParser<Role>(pullRolesHtml);
    const parseTypeOfProjects = tableParser<TypeOfProject>(
      pullTypeOfProjectsHtml,
    );
    const parseSkills = tableParser<Skill>(pullSkillsHtml);

    const parseProjectRoles = tableParser<ProjectRole>(pullProjectRolesHtml);
    const parseProjectTypes = tableParser<ProjectType>(pullProjectTypesHtml);
    const parseProjectStacks = tableParser<ProjectStack>(pullProjectStacksHtml);

    // Manage Data

    const portfolio = parseProjects
      .map((project) => ({
        ...project,
        roles: parseProjectRoles
          .filter((role) => role.project_id === project.id)
          .map((pr) => ({
            ...pr,
            role: parseRoles.find((r) => r.id === pr.role_id),
          })),
      }))
      .map((project) => ({
        ...project,
        types: parseProjectTypes
          .filter((type) => type.project_id === project.id)
          .map((pt) => ({
            ...pt,
            type: parseTypeOfProjects.find((t) => t.id === pt.type_id),
          })),
      }))
      .map((project) => ({
        ...project,
        skills: parseProjectStacks
          .filter((projectStacks) => projectStacks.project_id === project.id)
          .map((ps) => ({
            ...ps,
            skill: parseSkills.find((s) => s.id === ps.skill_id),
          })),
      }))
      .sort((a, b) => Number(b.year) - Number(a.year));

    return {
      ...parseProfile,
      portfolio: portfolio,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
