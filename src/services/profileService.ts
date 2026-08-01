import { getGidFromNavigationSheet } from "../helpers/helper";
import { keyValueParser } from "../parsers/keyValueParser";
import { tableParser } from "../parsers/tableParser";
import { getNavigationSheets } from "./getNavigationSheet";
import { getSheet } from "./getSheet";

export const profile = async () => {
  try {
    // Raw Data
    const navSheet = await getNavigationSheets();

    const gidProfileSheet = getGidFromNavigationSheet("profile", navSheet)?.gid;

    const gidSkillGroupsSheet = getGidFromNavigationSheet(
      "skill_groups",
      navSheet,
    )?.gid;
    const gidSkillsSheet = getGidFromNavigationSheet("skills", navSheet)?.gid;

    const gidSKillGroupTagsSheet = getGidFromNavigationSheet(
      "skill_group_tags",
      navSheet,
    )?.gid;

    const gidExperiencesSheet = getGidFromNavigationSheet(
      "experiences",
      navSheet,
    )?.gid;

    const gidExperienceRolesSheet = getGidFromNavigationSheet(
      "experience_roles",
      navSheet,
    )?.gid;

    const gidRolesSheet = getGidFromNavigationSheet("roles", navSheet)?.gid;

    const gidExperienceSkillsSheet = getGidFromNavigationSheet(
      "experience_skills",
      navSheet,
    )?.gid;

    const gidEducationsSheet = getGidFromNavigationSheet(
      "educations",
      navSheet,
    )?.gid;

    const gidCertificationsSheet = getGidFromNavigationSheet(
      "certifications",
      navSheet,
    )?.gid;

    // Html Data

    const pullProfileHtml = await getSheet(gidProfileSheet);

    const pullSkillGroupsHtml = await getSheet(gidSkillGroupsSheet);
    const pullSkillsHtml = await getSheet(gidSkillsSheet);
    const pullRolesHtml = await getSheet(gidRolesSheet);
    const pullExperiencesHtml = await getSheet(gidExperiencesSheet);
    const pullEducationsHtml = await getSheet(gidEducationsSheet);
    const pullCertificationsHtml = await getSheet(gidCertificationsSheet);

    const pullSkillGroupTagsHtml = await getSheet(gidSKillGroupTagsSheet);
    const pullExperienceRolesHtml = await getSheet(gidExperienceRolesSheet);
    const pullExperienceSkillsHtml = await getSheet(gidExperienceSkillsSheet);

    // Data JSON

    const parseProfile = keyValueParser(pullProfileHtml);

    const parseSkillGroups = tableParser(pullSkillGroupsHtml);
    const parseSkills = tableParser(pullSkillsHtml);
    const parseRoles = tableParser(pullRolesHtml);
    const parseExperiences = tableParser(pullExperiencesHtml);
    const parseEducations = tableParser(pullEducationsHtml);
    const parseCertifications = tableParser(pullCertificationsHtml);

    const parseSkillGroupTags = tableParser(pullSkillGroupTagsHtml);
    const parseExperienceRoles = tableParser(pullExperienceRolesHtml);
    const parseExperienceSkills = tableParser(pullExperienceSkillsHtml);

    // Manage Data

    const skillGroups = parseSkillGroups.map((skillGroup) => ({
      ...skillGroup,
      skills: parseSkillGroupTags
        .filter(
          (skillGroupTag) => skillGroupTag.skill_group_id === skillGroup.id,
        )
        .map((sg) => ({
          ...sg,
          skill: parseSkills.find((s) => s.id === sg.id),
        })),
    }));

    const experiences = parseExperiences
      .map((experience) => ({
        ...experience,
        roles: parseExperienceRoles
          .filter(
            (experienceRole) => experienceRole.experience_id === experience.id,
          )
          .map((er) => ({
            ...er,
            role: parseRoles.find((r) => r.id === er.role_id),
          })),
      }))
      .map((experience) => ({
        ...experience,
        skills: parseExperienceSkills
          .filter(
            (experienceSKill) =>
              experienceSKill.experience_id === experience.id,
          )
          .map((es) => ({
            ...es,
            skill: parseSkills.find((s) => s.id === es.skill_id),
          })),
      }));

    const educations = parseEducations.map((education) => ({
      ...education,
    }));

    const certifications = parseCertifications.map((certification) => ({
        ...certification
    }));

    return {
      ...parseProfile,
      skillGroups: skillGroups,
      experiences: experiences,
      educations: educations,
      certifications: certifications
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
