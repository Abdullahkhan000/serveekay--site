import type { CSSProperties } from "react";

export function RollingText({ text }: { text: string }) {
  return <span className="rolling-text"><span className="sr-only">{text}</span>{[0, 1].map(copy => <span className="rolling-copy" aria-hidden="true" key={copy}>{Array.from(text).map((letter, index) => <span key={index} style={{ "--letter": index } as CSSProperties}>{letter === " " ? "\u00a0" : letter}</span>)}</span>)}</span>;
}
