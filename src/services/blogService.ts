import { getGidFromNavigationSheet } from "../helpers/helper";
import { keyValueParser } from "../parsers/keyValueParser";
import { tableParser } from "../parsers/tableParser";
import { getNavigationSheets } from "./getNavigationSheet";
import { getSheet } from "./getSheet";

export const blogService = async () => {
  try {
    const navSheet = await getNavigationSheets();

    // const gidExperienceRolesSheet = getGidFromNavigationSheet(
    //   "experience_roles",
    //   navSheet,
    // )?.gid;

    // const pullExperienceRolesHtml = getSheet(gidExperienceRolesSheet);

    // console.log(pullExperienceRolesHtml);


    // console.log(navSheet);

    // sheet?headers=false&gid=


    // 1982407749

    // const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vT_7JQ2LLQFERGXx5_HJCPn4nUDoyheHPBj_sWqSGaHJUMEYO5MrCO5aQppISA8_J-8Im8RhVJivpWg/pubhtml");
    // const html = await response.text();

    // console.log(html);

    // const parseExperienceRoles = tableParser(pullExperienceRolesHtml);

    // console.log("https://docs.google.com/spreadsheets/d/e/2PACX-1vT_7JQ2LLQFERGXx5_HJCPn4nUDoyheHPBj_sWqSGaHJUMEYO5MrCO5aQppISA8_J-8Im8RhVJivpWg/pubhtml")



  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};