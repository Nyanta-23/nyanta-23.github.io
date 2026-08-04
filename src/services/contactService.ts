import { getGidFromNavigationSheet } from "../helpers/helper";
import { keyValueParser } from "../parsers/keyValueParser";
import { ContactData } from "../types/page";
import { getNavigationSheets } from "./getNavigationSheet";
import { getSheet } from "./getSheet";

export const contactService = async (): Promise<
  Omit<ContactData, "roles"> | undefined
> => {
  try {
    const navSheet = await getNavigationSheets();
    const gidProfileSheet = getGidFromNavigationSheet("profile", navSheet)?.gid;

    const pullProfileHtml = await getSheet(gidProfileSheet);
    const parseProfile =
      keyValueParser<Omit<ContactData, "roles">>(pullProfileHtml);

    return parseProfile;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
