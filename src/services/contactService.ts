import { getGidFromNavigationSheet } from "../helpers/helper";
import { keyValueParser } from "../parsers/keyValueParser";
import { tableParser } from "../parsers/tableParser";
import { getNavigationSheets } from "./getNavigationSheet";
import { getSheet } from "./getSheet";

export const contactService = async (): Promise<ContactData | undefined> => {
  try {
    const navSheet = await getNavigationSheets();
    const gidProfileSheet = getGidFromNavigationSheet("profile", navSheet)?.gid;
    const gidSocialMediasSheet = getGidFromNavigationSheet(
      "social_medias",
      navSheet,
    )?.gid;

    const pullProfileHtml = await getSheet(gidProfileSheet);

    const pullSocialMediasHtml = await getSheet(gidSocialMediasSheet);

    const parseProfile =
      keyValueParser<Omit<ContactData, "social_medias">>(pullProfileHtml);

    const parseSocialMedias = tableParser<SocialMedia>(pullSocialMediasHtml);

    return {
      ...parseProfile,
      social_medias: parseSocialMedias,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
