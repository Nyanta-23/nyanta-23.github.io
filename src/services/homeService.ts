import { getGidFromNavigationSheet } from "../helpers/helper";
import { keyValueParser } from "../parsers/keyValueParser";
import { tableParser } from "../parsers/tableParser";
import { HomeData, Role } from "../types/page";
import { getNavigationSheets } from "./getNavigationSheet";
import { getSheet } from "./getSheet";

export const home = async (): Promise<HomeData | undefined> => {
  try {
    // Raw Data

    const navSheet = await getNavigationSheets();

    const gidProfileSheet = getGidFromNavigationSheet("profile", navSheet)?.gid;
    const gidRolesSheet = getGidFromNavigationSheet("roles", navSheet)?.gid;

    const gidProjectsSheet = getGidFromNavigationSheet(
      "projects",
      navSheet,
    )?.gid;
    const gidProjectRolesSheet = getGidFromNavigationSheet(
      "project_roles",
      navSheet,
    )?.gid;
    const gidProjectTypesSheet = getGidFromNavigationSheet(
      "project_types",
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

    const gidSkillsSheet = getGidFromNavigationSheet("skills", navSheet)?.gid;

    // Html Data

    const pullProfileHtml = await getSheet(gidProfileSheet);

    const pullProjectsHtml = await getSheet(gidProjectsSheet);
    const pullRolesHtml = await getSheet(gidRolesSheet);
    const pullTypeOfProjectsHtml = await getSheet(gidTypeOfProjectsSheet);
    const pullSkillsHtml = await getSheet(gidSkillsSheet);

    const pullProjectRolesHtml = await getSheet(gidProjectRolesSheet);
    const pullProjectTypesHtml = await getSheet(gidProjectTypesSheet);
    const pullProjectStacksHtml = await getSheet(gidProjectStacksSheet);

    // Data JSON

    const parseProfile =
      keyValueParser<Omit<HomeData, "roles">>(pullProfileHtml);

    const parseRoles = tableParser<Role>(pullRolesHtml);
    const parseProjects = tableParser(pullProjectsHtml);
    const parseTypeOfProjects = tableParser(pullTypeOfProjectsHtml);
    const parseSkills = tableParser(pullSkillsHtml);

    const parseProjectRoles = tableParser(pullProjectRolesHtml);
    const parseProjectTypes = tableParser(pullProjectTypesHtml);
    const parseProjectStacks = tableParser(pullProjectStacksHtml);

    // Manage Data

    const portfolioHighlight = parseProjects
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
      .sort((a, b) => Number(b.year) - Number(a.year))
      .slice(0, 3);

    console.log(portfolioHighlight);

    return {
      ...parseProfile,
      roles: parseRoles,
      portfolio: portfolioHighlight,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
