import { useState, useEffect } from "react";

import type { TypewriterProps } from "../../types/typewriter";

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 20,
  pauseDuration = 1500,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setText(currentWord.substring(0, letterIndex - 1));
          setLetterIndex(letterIndex - 1);

          if (letterIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        } else {
          setText(currentWord.substring(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);

          if (letterIndex === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    letterIndex,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <p className="px-4 sm:p-0 text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center text-white">
      We {text}
    </p>
  );
};

export default Typewriter;
