export function keyValueParser<T = Record<string, string | null>>(html: string | undefined): T {
  if (!html) {
    throw new Error("HTML content is undefined");
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const rows = [...doc.querySelectorAll("tbody tr")];

  const result: Record<string, string | null> = {};

  rows.forEach((row, index) => {
    if (index === 0) return;

    const cells = row.querySelectorAll("td");

    if (cells.length < 2) return;

    const keyCell = cells[0];
    const valueCell = cells[1];

    const key = keyCell.textContent?.trim() ?? "";

    const softmergeDiv = valueCell.querySelector(".softmerge-inner");

    const value = softmergeDiv
      ? (softmergeDiv.textContent?.trim() ?? "")
      : (valueCell.textContent?.trim() ?? "");

    if (key) {
      result[key] = value;
    }
  });

  return result as T;
}
