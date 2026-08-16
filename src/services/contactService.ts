import { getGidFromNavigationSheet } from "../helpers/helper";
import { keyValueParserGviz, tableParserGviz } from "../parsers/gvizParser";
import { getNavigationSheets } from "./getNavigationSheet";
import { getSheet } from "./pullData";
// import { getSheet } from "./getSheet";

export const contactService = async (): Promise<ContactData | undefined> => {
  try {
    const navSheet = await getNavigationSheets();
    const gidProfileSheet = getGidFromNavigationSheet("profile", navSheet)?.gid;
    const gidSocialMediasSheet = getGidFromNavigationSheet(
      "social_medias",
      navSheet,
    )?.gid;

    const [pullProfileHtml, pullSocialMediasHtml] = await Promise.all([
      getSheet(gidProfileSheet),
      getSheet(gidSocialMediasSheet),
    ]);

    const parseProfile =
      keyValueParserGviz<Omit<ContactData, "social_medias">>(pullProfileHtml);

    const parseSocialMedias = tableParserGviz<SocialMedia>(pullSocialMediasHtml);

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
