function getAssetUrl(path?: string | null): string {
  if (!path) return "";

  const {
    VITE_USERNAME_GITHUB,
    VITE_REPOSITORY_GITHUB,
    VITE_BRANCH_GITHUB,
  } = import.meta.env;

  return `https://cdn.jsdelivr.net/gh/${VITE_USERNAME_GITHUB}/${VITE_REPOSITORY_GITHUB}@${VITE_BRANCH_GITHUB}/${path}`;
}


function getGidFromNavigationSheet (sheetName: string, sheetNavData: SheetItem[] | undefined) {
  return sheetNavData?.find((item) => item.name === sheetName);
}

export {
  getAssetUrl,
  getGidFromNavigationSheet
};
