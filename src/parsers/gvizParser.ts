function parseGvizResponse(raw: string) {
  const jsonMatch = raw.match(
    /google\.visualization\.Query\.setResponse\(([\s\S]*)\)\s*;?\s*$/,
  );

  if (!jsonMatch) {
    throw new Error("Invalid gviz response format");
  }

  return JSON.parse(jsonMatch[1]);
}

function keyValueParserGviz<T = Record<string, string | null>>(
  raw: string | undefined,
): T {
  if (!raw) {
    throw new Error("Gviz response is undefined");
  }

  const parsed = parseGvizResponse(raw);

  const result: Record<string, string | null> = {};

  parsed.table.rows.forEach((row: any, index: any) => {
    if (index === 0) return;

    const cells = row.c;

    if (!cells || cells.length < 2) return;

    const key = cells[0]?.v;
    const value = cells[1]?.v;

    if (key && typeof key === "string") {
      result[key] =
        value !== null && value !== undefined ? String(value) : null;
    }
  });

  return result as T;
}

function tableParserGviz<T = Record<string, string>>(
  raw: string | undefined,
): T[] {
  if (!raw) {
    throw new Error("Gviz response is undefined");
  }

  const parsed = parseGvizResponse(raw);

  if (!parsed.table.rows || parsed.table.rows.length === 0) return [];

  const headers = parsed.table.cols.map((col: any) => col.label || col.id);

  const result: Record<string, string>[] = [];

  parsed.table.rows.forEach((row: any) => {
    const cells = row.c;

    if (!cells || cells.length === 0) return;

    const rowObject: Record<string, string> = {};

    cells.forEach((cell: any, cellIndex: number) => {
      const columnName = headers[cellIndex];
      if (!columnName) return;

      const value = cell?.v;
      rowObject[columnName] =
        value !== null && value !== undefined ? String(value) : "";
    });

    result.push(rowObject);
  });

  return result as T[];
}

export { keyValueParserGviz, tableParserGviz };
