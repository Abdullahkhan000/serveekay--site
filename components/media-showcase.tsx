import { VIDEO_POSTER, VIDEO_SRC } from "@/data/site";

export function MediaShowcase() {
  if (!VIDEO_SRC) return null;
  return <section className="container section" aria-label="Selected work video"><p className="eyebrow">/ In motion</p><video className="work-video" src={VIDEO_SRC} poster={VIDEO_POSTER} controls playsInline preload="metadata">Your browser does not support video.</video></section>;
}
