import Image from "next/image";
import { type ProjectVisual as Visual } from "@/content/data/projects";
import { highlight, type Token } from "@/lib/highlight";

const tokenClass: Record<Token["kind"], string> = {
  comment: "text-faint",
  string: "text-accent-soft",
  keyword: "text-[#d6c7b0]",
  plain: "text-ink-soft",
};

/**
 * The 4:3 slot at the top of a project card. Images are prepared at 4:3, so nothing is cropped;
 * code excerpts are real source, shown in a panel.
 */
export function ProjectVisual({ visual, alt }: { visual: Visual; alt: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded bg-surface">
      {visual.type === "image" ? (
        <Image
          src={visual.src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 540px, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
        />
      ) : (
        <figure className="flex h-full flex-col" aria-label={alt}>
          <figcaption className="flex items-center gap-2 border-b border-line px-4 py-3 font-mono text-[11px] leading-none text-faint">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-rail" />
              <span className="h-2 w-2 rounded-full bg-rail" />
              <span className="h-2 w-2 rounded-full bg-rail" />
            </span>
            <span className="ml-2">{visual.file}</span>
          </figcaption>
          <pre
            className="flex-1 overflow-hidden [mask-image:linear-gradient(to_bottom,black_80%,transparent)] px-4 py-4 font-mono text-[10.5px] leading-[1.65] sm:text-xs md:px-5 md:text-[11px] lg:text-xs"
            aria-hidden="true"
          >
            <code>
              {highlight(visual.code).map((token, index) => (
                <span key={index} className={tokenClass[token.kind]}>
                  {token.text}
                </span>
              ))}
            </code>
          </pre>
        </figure>
      )}
    </div>
  );
}
