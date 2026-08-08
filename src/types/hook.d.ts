interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}


interface UseSheetData<T> {
  sheetGid: string;
}

interface UseImageSliderOptions {
  length: number;
  intervalMs?: number;
  autoPlay?: boolean;
}
