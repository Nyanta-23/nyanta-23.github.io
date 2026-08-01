export function navigationParser(html: string | undefined): SheetItem[] {

  if (!html) {
    throw new Error("HTML content is undefined");
  }


  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const scripts = [...doc.querySelectorAll("script")];

  let result = "";

  scripts.forEach((script) => {
    if (script.textContent?.includes("items.push")) {
      const start = script.textContent.indexOf("items.push");
      const end = script.textContent.indexOf("var sheetsViewport");
      result = script.textContent.slice(start, end);
    }
  });

  const matches = result.split("items.push(").slice(1);

  const sheets: SheetItem[] = matches.map((chunk) => {
    const initialSheetIndex = chunk.indexOf(",initialSheet");

    const trimmedChunk = chunk.slice(0, initialSheetIndex);

    const objectString = trimmedChunk + "}";

    const obj = new Function(`return ${objectString}`)();

    return {
      name: obj.name as string,
      gid: obj.gid as string,
    };
  });

  return sheets;
}
