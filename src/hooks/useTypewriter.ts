import { useEffect, useState } from "react";

export default function useTypeWriter({
  words,
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseDuration = 1000,
}: UseTypewriterOptions) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const isWordComplete = index === currentWord.length && !isDeleting;

    let timingDuration: number;

    if (isWordComplete) {
      timingDuration = pauseDuration;
    } else if (isDeleting) {
      timingDuration = deletingSpeed;
    } else {
      timingDuration = typingSpeed;
    }

    const typing = setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else {
        if (index <= currentWord.length) {
          setText((prev) => prev + currentWord[index]);
          setIndex((prev) => prev + 1);
        }
      }

      if (index === 1 && isDeleting) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, timingDuration);

    return () => clearTimeout(typing);
  }, [text, index, wordIndex, isDeleting]);

  return text;
}
