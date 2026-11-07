import { type CaseStudyBlock } from "@/content/types/caseStudy";

function Table({ block }: { block: Extract<CaseStudyBlock, { type: "table" }> }) {
  const [first, ...rest] = block.columns;
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[30rem] text-left">
        <thead className="font-mono text-[11px] tracking-[0.06em] text-faint uppercase">
          <tr className="border-b border-line">
            <th scope="col" className="py-3 pr-4 font-normal">
              {first}
            </th>
            {rest.map((column) => (
              <th key={column} scope="col" className="py-3 pl-4 text-right font-normal">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => {
            const [label, ...values] = row.cells;
            return (
              <tr key={label} className={`border-b border-line ${row.highlight ? "text-ink" : "text-muted"}`}>
                <th scope="row" className="py-4 pr-4 text-left font-serif text-xl font-normal">
                  {label}
                </th>
                {values.map((value, index) => (
                  <td key={index} className="py-4 pl-4 text-right font-mono text-sm tabular-nums">
                    {value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Block({ block }: { block: CaseStudyBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-base leading-[1.65] text-muted md:text-lg">{block.text}</p>;
    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-[1.55] text-ink-soft">
              <span className="text-accent" aria-hidden="true">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "table":
      return <Table block={block} />;
    case "entries":
      return (
        <ul className="flex flex-col border-b border-line">
          {block.items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col gap-2 border-t border-line py-5 first:border-t-0 first:pt-0"
            >
              <p className="font-serif text-[22px] leading-[1.2]">{item.name}</p>
              <p className="text-[15px] leading-[1.6] text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      );
  }
}

/** Renders a section's blocks in order: paragraphs, lists, a table, or named entries. */
export function CaseStudyBlocks({ blocks }: { blocks: CaseStudyBlock[] }) {
  return blocks.map((block, index) => <Block key={index} block={block} />);
}
