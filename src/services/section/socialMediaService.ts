import { getGidFromNavigationSheet } from "../../helpers/helper";
import { tableParserGviz } from "../../parsers/gvizParser";
import { getNavigationSheets } from "../getNavigationSheet";
import { getSheet } from "../pullData";

export const socialMediaService = async (): Promise<
  SocialMediaSectionData | undefined
> => {
  try {
    const navSheet = await getNavigationSheets();
    const gidSocialMediasSheet = getGidFromNavigationSheet(
      "social_medias",
      navSheet,
    )?.gid;

    const pullSocialMediasHtml = await getSheet(gidSocialMediasSheet);

    const parseSocialMedias =
      tableParserGviz<SocialMedia>(pullSocialMediasHtml);

    return {
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
