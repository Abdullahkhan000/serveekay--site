import Image from "next/image";
import { VIDEO_POSTER, VIDEO_SRC } from "@/data/site";

export function MediaShowcase() {
  return (
    <div className="media-showcase__frame" data-reveal data-cursor={VIDEO_SRC ? "Play" : "View"}>
        {VIDEO_SRC ? (
          <video autoPlay muted loop playsInline controls preload="metadata" poster={VIDEO_POSTER} aria-label="Serveekay selected work reel">
            <source src={VIDEO_SRC} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        ) : (
          <Image src={VIDEO_POSTER} alt="Serveekay digital product work presented across desktop and mobile screens" fill sizes="100vw" className="media-showcase__poster" />
        )}
        <div className="media-showcase__shade" />
        <div className="media-showcase__badge" aria-hidden="true">
          <span>{VIDEO_SRC ? "Play reel" : "Video ready"}</span>
          <i>↗</i>
        </div>
      <span className="media-showcase__grain" aria-hidden="true" />
    </div>
  );
}
