"use client";

import { useEffect, useRef, useState } from "react";

type Props = { email: string; copy: string; copied: string };

export function CopyEmailButton({ email, copy, copied }: Props) {
  const [done, setDone] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function onClick() {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setDone(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-live="polite"
      className="cursor-pointer rounded-full border border-line-strong px-[18px] py-2.5 font-mono text-xs leading-none text-ink-soft transition-colors duration-300 hover:border-accent md:text-[13px]"
    >
      {done ? copied : copy}
    </button>
  );
}
