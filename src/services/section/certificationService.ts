import {
  dateToSortableNumber,
  getGidFromNavigationSheet,
  parseYearMonth,
} from "../../helpers/helper";
import { tableParserGviz } from "../../parsers/gvizParser";
import { getNavigationSheets } from "../getNavigationSheet";
import { getSheet } from "../pullData";

interface CertificationServiceOption {
  limit?: number;
}

export const certificationService = async (
  options: CertificationServiceOption = {},
): Promise<CertificationSectionData | undefined> => {
  try {
    // Raw Data

    const { limit } = options;

    const navSheet = await getNavigationSheets();

    const gidCertificationsSheet = getGidFromNavigationSheet(
      "certifications",
      navSheet,
    )?.gid;

    // Html Data

    const pullCertificationsHtml = await getSheet(gidCertificationsSheet);

    // Data JSON

    const parseCertifications = tableParserGviz<Certification>(
      pullCertificationsHtml,
    );

    // Manage Data

    // let certifications = parseCertifications
    //   .map((certification) => ({ ...certification }))
    //   .sort((a, b) => {
    //     const aSortValue = a.end_date
    //       ? dateToSortableNumber(parseYearMonth(a.end_date))
    //       : Infinity;
    //     const bSortValue = b.end_date
    //       ? dateToSortableNumber(parseYearMonth(b.end_date))
    //       : Infinity;

    //     if (aSortValue !== bSortValue) {
    //       return bSortValue - aSortValue;
    //     }

    //     return (
    //       dateToSortableNumber(parseYearMonth(b.start_date)) -
    //       dateToSortableNumber(parseYearMonth(a.start_date))
    //     );
    //   });

    let certifications = parseCertifications
      .map((certification) => ({ ...certification }))
      .sort(
        (a, b) => {
          const dateA = parseYearMonth(a.start_date);
          const dateB = parseYearMonth(b.start_date);

          const timeA = dateA ? dateA.getTime() : 0;
          const timeB = dateB ? dateB.getTime() : 0;

          return timeB - timeA;
        },
      );

    if (limit !== undefined) {
      certifications = certifications.slice(0, limit);
    }

    return {
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
