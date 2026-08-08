import { Code2 } from "lucide-react";

import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";

const ALL_ICONS: Record<string, unknown> = {
  ...AiIcons,
  ...BiIcons,
  ...BsIcons,
  ...FaIcons,
  ...FiIcons,
  ...SiIcons,
  ...TbIcons,
};

function getIconByName(iconName: string) {
  const Icon = ALL_ICONS[iconName];
  return (Icon as typeof Code2) ?? Code2;
}

function getAssetUrl(path?: string | null): string {
  if (!path) return "";

  const { VITE_USERNAME_GITHUB, VITE_REPOSITORY_GITHUB, VITE_BRANCH_GITHUB } =
    import.meta.env;

  return `https://cdn.jsdelivr.net/gh/${VITE_USERNAME_GITHUB}/${VITE_REPOSITORY_GITHUB}@${VITE_BRANCH_GITHUB}/${path}`;
}

function getGidFromNavigationSheet(
  sheetName: string,
  sheetNavData: SheetItem[] | undefined,
) {
  return sheetNavData?.find((item) => item.name === sheetName);
}

function formatList(items: string[]) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} & ${items[1]}`;

  const allButLast = items.slice(0, -1);
  const last = items[items.length - 1];

  return `${allButLast.join(", ")} & ${last}`;
}

function formatListFromObjects<T>(
  items: T[],
  getLabel: (item: T) => string,
): string {
  const labels = items.map(getLabel);
  return formatList(labels);
}

function formatRoles(roles: any) {
  return formatListFromObjects(roles, (item) => item?.role?.name);
}

function formatTypes(types: any) {
  return formatListFromObjects(types, (item) => item?.type?.name);
}

function parseYearMonth(value?: string | null): Date | null {
  if (!value) return null;

  const [yearStr, monthStr] = value.split("-").map((v) => v.trim());
  const year = Number(yearStr);
  const month = Number(monthStr);

  if (Number.isNaN(year) || Number.isNaN(month)) return null;

  return new Date(year, month - 1, 1);
}

function formatMonthYear(date: Date | null): string {
  if (!date) return "Present";
  return date.toLocaleDateString("id-ID", { month: "short", year: "numeric" });
}

function formatPeriod(
  startDateRaw?: string | null,
  endDateRaw?: string | null,
): string {
  const startDate = parseYearMonth(startDateRaw);
  const endDate = parseYearMonth(endDateRaw);

  return `${formatMonthYear(startDate)} - ${formatMonthYear(endDate)}`;
}

function getLatestPositionId(experiences: Experience[]): string | null {
  let latestId: string | null = null;
  let latestDate: Date | null = null;

  experiences.forEach((experience) => {
    experience.roles?.forEach((position) => {
      const startDate = parseYearMonth(position.start_date);
      if (!startDate) return;

      const isOngoing = !position.end_date;

      if (isOngoing) {
        if (!latestDate || startDate > latestDate) {
          latestDate = startDate;
          latestId = position.id;
        }
      } else if (!latestId) {
        if (!latestDate || startDate > latestDate) {
          latestDate = startDate;
          latestId = position.id;
        }
      }
    });
  });

  return latestId;
}

function sortExperiencesByRecency(experiences: Experience[]): Experience[] {
  const sorted = experiences.map((experience) => {
    const sortedRoles = [...(experience.roles ?? [])].sort((a, b) => {
      const dateA = parseYearMonth(a.start_date);
      const dateB = parseYearMonth(b.start_date);
      if (!dateA || !dateB) return 0;
      return dateB.getTime() - dateA.getTime();
    });

    return { ...experience, roles: sortedRoles };
  });

  return sorted.sort((expA, expB) => {
    const latestA = parseYearMonth(expA.roles?.[0]?.start_date);
    const latestB = parseYearMonth(expB.roles?.[0]?.start_date);
    if (!latestA || !latestB) return 0;
    return latestB.getTime() - latestA.getTime();
  });
}

function sortEducationByRecency(educations: Education[]): Education[] {
  return [...educations].sort((a, b) => {
    const dateA = parseYearMonth(a.start_date);
    const dateB = parseYearMonth(b.start_date);
    if (!dateA || !dateB) return 0;
    return dateB.getTime() - dateA.getTime();
  });
}

function getLatestEducationId(educations: Education[]): string | null {
  if (educations.length === 0) return null;

  const ongoing = educations.find((item) => !item.end_date);
  if (ongoing) return ongoing.id;

  return sortEducationByRecency(educations)[0]?.id ?? null;
}

function getThemedAsset<T>(theme: boolean, lightAsset: T, darkAsset: T): T {
  return theme ? lightAsset : darkAsset;
}

export {
  getAssetUrl,
  getGidFromNavigationSheet,
  getIconByName,
  formatList,
  formatRoles,
  formatTypes,
  parseYearMonth,
  formatPeriod,
  getLatestPositionId,
  sortExperiencesByRecency,
  getLatestEducationId,
  sortEducationByRecency,
  getThemedAsset
};
