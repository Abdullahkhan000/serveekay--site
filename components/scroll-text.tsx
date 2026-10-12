import type { CSSProperties } from "react";

export function ScrollText({ text }: { text: string }) {
  let character = 0;
  return <p className="scroll-text" data-scrub><span className="sr-only">{text}</span><span aria-hidden="true">{text.split(" ").map((word, wordIndex) => <span className="reading-word" key={wordIndex}>{Array.from(word).map((letter, index) => <span className="reading-character" key={index} style={{ "--char-index": character++ / text.length } as CSSProperties}>{letter}</span>)}<span>{" "}</span></span>)}</span></p>;
}
