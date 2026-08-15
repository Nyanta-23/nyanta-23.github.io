import { getGidFromNavigationSheet } from "../helpers/helper";
import { keyValueParser } from "../parsers/keyValueParser";
import { tableParser } from "../parsers/tableParser";
import { getNavigationSheets } from "./getNavigationSheet";
import { getSheet } from "./getSheet";

export const profileService = async (): Promise<ProfileData | undefined> => {
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

    const gidEducationsSheet = getGidFromNavigationSheet(
      "educations",
      navSheet,
    )?.gid;

    const gidCertificationsSheet = getGidFromNavigationSheet(
      "certifications",
      navSheet,
    )?.gid;

    // Html Data

    const [
      pullProfileHtml,
      pullSkillGroupsHtml,
      pullSkillsHtml,
      pullRolesHtml,
      pullExperiencesHtml,
      pullEducationsHtml,
      pullCertificationsHtml,
      pullSkillGroupTagsHtml,
      pullExperienceRolesHtml,
    ] = await Promise.all([
      getSheet(gidProfileSheet),
      getSheet(gidSkillGroupsSheet),
      getSheet(gidSkillsSheet),
      getSheet(gidRolesSheet),
      getSheet(gidExperiencesSheet),
      getSheet(gidEducationsSheet),
      getSheet(gidCertificationsSheet),
      getSheet(gidSKillGroupTagsSheet),
      getSheet(gidExperienceRolesSheet),
    ]);

    // Data JSON

    const parseProfile =
      keyValueParser<
        Omit<
          ProfileData,
          "skill_groups" | "educations" | "certifications" | "experiences"
        >
      >(pullProfileHtml);

    const parseSkillGroups = tableParser<SkillGroup>(pullSkillGroupsHtml);
    const parseSkills = tableParser<Skill>(pullSkillsHtml);
    const parseRoles = tableParser<Role>(pullRolesHtml);
    const parseExperiences = tableParser<Experience>(pullExperiencesHtml);
    const parseEducations = tableParser<Education>(pullEducationsHtml);
    const parseCertifications = tableParser<Certification>(
      pullCertificationsHtml,
    );

    const parseSkillGroupTags = tableParser<SkillGroupTag>(
      pullSkillGroupTagsHtml,
    );
    const parseExperienceRoles = tableParser<ExperienceRole>(
      pullExperienceRolesHtml,
    );

    // console.log(parseExperienceRoles);

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

    const experiences = parseExperiences.map((experience) => ({
      ...experience,
      roles: parseExperienceRoles
        .filter(
          (experienceRole) => experienceRole.experience_id === experience.id,
        )
        .map((er) => ({
          ...er,
          role: parseRoles.find((r) => r.id === er.role_id),
        })),
    }));

    const educations = parseEducations.map((education) => ({
      ...education,
    }));

    const certifications = parseCertifications.map((certification) => ({
      ...certification,
    }));

    console.log(experiences);

    return {
      ...parseProfile,
      skill_groups: skillGroups,
      experiences: experiences,
      educations: educations,
      certifications: certifications,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
