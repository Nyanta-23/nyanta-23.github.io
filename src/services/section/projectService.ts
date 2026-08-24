import { getGidFromNavigationSheet } from "../../helpers/helper";
import { tableParserGviz } from "../../parsers/gvizParser";
import { getNavigationSheets } from "../getNavigationSheet";
import { getSheet } from "../pullData";

interface ProjectServiceOptions {
    limit?: number;
    typeId?: string;
    roleId?: string;
    year?: number;
}

export const projectService = async (
    options: ProjectServiceOptions = {}
): Promise<
  ProjectSectionData | undefined
> => {
  try {
    const {limit, typeId, roleId, year} = options;

    // Raw Data
    const navSheet = await getNavigationSheets();

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
      pullProjectsHtml,
      pullRolesHtml,
      pullTypeOfProjectsHtml,
      pullSkillsHtml,
      pullProjectRolesHtml,
      pullProjectTypesHtml,
      pullProjectStacksHtml,
    ] = await Promise.all([
      getSheet(gidProjectsSheet),
      getSheet(gidRolesSheet),
      getSheet(gidTypeOfProjectsSheet),
      getSheet(gidSkillsSheet),
      getSheet(gidProjectRolesSheet),
      getSheet(gidProjectTypesSheet),
      getSheet(gidProjectStacksSheet),
    ]);

    // Data JSON

    const parseProjects = tableParserGviz<Project>(pullProjectsHtml);
    const parseRoles = tableParserGviz<Role>(pullRolesHtml);
    const parseTypeOfProjects = tableParserGviz<TypeOfProject>(
      pullTypeOfProjectsHtml,
    );
    const parseSkills = tableParserGviz<Skill>(pullSkillsHtml);

    const parseProjectRoles =
      tableParserGviz<ProjectRole>(pullProjectRolesHtml);
    const parseProjectTypes =
      tableParserGviz<ProjectType>(pullProjectTypesHtml);
    const parseProjectStacks = tableParserGviz<ProjectStack>(
      pullProjectStacksHtml,
    );

    // Manage Data

    let project = parseProjects
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

      if (year !== undefined) {
        project = project.filter((project) => Number(project.year) === year);
      }

      if (typeId) {
        project = project.filter((project) => 
            project.types.some((t) => t.type_id === typeId),
        );
      }

      if (roleId) {
        project = project.filter((project) => 
            project.roles.some((r) => r.role_id === roleId),
        );
      }

      if (limit !== undefined) {
        project = project.slice(0, limit);
      }




    return {
      projects: project,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
