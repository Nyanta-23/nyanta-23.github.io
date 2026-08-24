import { Code2 } from "lucide-react";

import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";

import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

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


function getLucideIconByName(iconName?: string | null): LucideIcon | null {
  if (!iconName) return null;
  const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[iconName];
  return Icon ?? null;
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
  return date.toLocaleDateString("en-En", { month: "short", year: "numeric" });
}

function formatPeriod(
  startDateRaw?: string | null,
  endDateRaw?: string | null,
): string {
  const startDate = parseYearMonth(startDateRaw);
  const endDate = parseYearMonth(endDateRaw);

  return `${formatMonthYear(startDate)} - ${formatMonthYear(endDate)}`;
}

function formatMonthYearPeriod(date: Date | null): string | null {
  if (!date) {
    return null;
  }
  return date.toLocaleDateString("en-En", { month: "short", year: "numeric" });
}

function formatCredentialPeriod(
  startDateRaw?: string | null,
  endDateRaw?: string | null,
): string {
  const startDate = parseYearMonth(startDateRaw);
  const startFormatted = formatMonthYearPeriod(startDate);

  const hasEndDate = !!endDateRaw && endDateRaw.trim().length > 0;

  if (!hasEndDate) {
    return `Issued ${startFormatted}`;
  }

  const endDate = parseYearMonth(endDateRaw);
  const endFormatted = formatMonthYearPeriod(endDate);

  return `Issued ${startFormatted} · Expired ${endFormatted}`;
}

function dateToSortableNumber(date: Date | null): number {
  if (!date) return 0;
  return date.getFullYear() * 100 + (date.getMonth() + 1);
}

// function sortEducationByRecency(educations: Education[]): Education[] {
//   return [...educations].sort((a, b) => {
//     const dateA = parseYearMonth(a.start_date);
//     const dateB = parseYearMonth(b.start_date);
//     if (!dateA || !dateB) return 0;
//     return dateB.getTime() - dateA.getTime();
//   });
// }

// function getLatestEducationId(educations: Education[]): string | null {
//   if (educations.length === 0) return null;

//   const ongoing = educations.find((item) => !item.end_date);
//   if (ongoing) return ongoing.id;

//   return sortEducationByRecency(educations)[0]?.id ?? null;
// }

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
  formatCredentialPeriod,
  // getLatestPositionId,
  // sortExperiencesByRecency,
  // getLatestEducationId,
  // sortEducationByRecency,
  getThemedAsset,
  dateToSortableNumber,
  getLucideIconByName
};
