export function tableParser<T = Record<string, string>>(html: string | undefined): T[] {
  if (!html) {
    throw new Error("HTML content is undefined");
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const rows = [...doc.querySelectorAll("tbody tr")];

  if (rows.length === 0) return [];

  function getCellText(cell: Element): string {
    const softmergeDiv = cell.querySelector(".softmerge-inner");
    return softmergeDiv
      ? (softmergeDiv.textContent?.trim() ?? "")
      : (cell.textContent?.trim() ?? "");
  }

  const headerCells = [...rows[0].querySelectorAll("td")];
  const headers = headerCells.map((cell) => getCellText(cell));

  const result: Record<string, string>[] = [];

  rows.slice(1).forEach((row) => {
    const cells = [...row.querySelectorAll("td")];

    if (cells.length === 0) return;

    const rowObject: Record<string, string> = {};

    cells.forEach((cell, cellIndex) => {
      const columnName = headers[cellIndex];
      if (!columnName) return;

      rowObject[columnName] = getCellText(cell);
    });

    result.push(rowObject);
  });

  return result as T[];
}
