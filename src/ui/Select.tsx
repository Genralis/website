import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

export type SelectOption = { value: string; label: string };

type SelectProps = {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  /** padding-left on trigger; arrow matches right padding automatically */
  paddingX?: string; // e.g. "px-3" | "px-4"
  /** width classes (defaults to w-full) */
  widthClass?: string;
  /** max height for dropdown list */
  listMaxHeightClass?: string; // e.g. "max-h-60"
  /** aria label if no visible label */
  ariaLabel?: string;
};

export default function Select({
  options,
  value,
  onChange,
  placeholder = "Select…",
  disabled = false,
  className,
  paddingX = "px-3",
  widthClass = "w-full",
  listMaxHeightClass = "max-h-60",
  ariaLabel,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(() => {
    const idx = options.findIndex((o) => o.value === value);
    return idx >= 0 ? idx : 0;
  });

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const selected = useMemo(
    () => options.find((o) => o.value === value) ?? null,
    [options, value]
  );

  // close on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!open) return;
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // when opening, ensure activeIndex is synced and focus the list
  useEffect(() => {
    if (open) {
      const idx = options.findIndex((o) => o.value === (value ?? ""));
      setActiveIndex(idx >= 0 ? idx : 0);
      // focus list for immediate keyboard navigation
      requestAnimationFrame(() => {
        listRef.current?.focus();
      });
    }
  }, [open, options, value]);

  const openList = () => {
    if (disabled) return;
    setOpen(true);
  };

  const closeList = () => setOpen(false);

  const commit = (idx: number) => {
    const opt = options[idx];
    if (!opt) return;
    onChange?.(opt.value);
    setOpen(false);
    // return focus to button
    requestAnimationFrame(() => buttonRef.current?.focus());
  };

  const onButtonKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    switch (e.key) {
      case "ArrowDown":
      case "Enter":
      case " ":
        e.preventDefault();
        openList();
        break;
    }
  };

  const onListKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, options.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case "Enter":
        e.preventDefault();
        commit(activeIndex);
        break;
      case "Escape":
        e.preventDefault();
        closeList();
        // return focus to button
        requestAnimationFrame(() => buttonRef.current?.focus());
        break;
      default:
        break;
    }
  };

  // derive paddings (for arrow alignment)
  // if paddingX = "px-3" we’ll use "right-3" for the arrow
  const rightPad = paddingX.replace("px-", "right-");

  return (
    <div ref={containerRef} className={clsx("relative", widthClass, className)}>
      {/* Trigger */}
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={() => (open ? closeList() : openList())}
        onKeyDown={onButtonKeyDown}
        className={clsx(
          "h-[44px] w-full rounded-[12px] text-left",
          "border border-[var(--input-field-border)]",
          "bg-[var(--container-bg)] text-[var(--container-text)]",
          "hover:bg-[var(--input-field-hover-bg)]",
          "outline-none",
          paddingX,
          "pr-10", // room for arrow
          "text-preset-5",
          !disabled
            ? "active:ring-[2px] active:ring-[var(--btn-outer-shadow-color)] active:ring-offset-[2px] active:ring-offset-[var(--btn-inner-shadow-color)]"
            : "opacity-60 cursor-not-allowed"
        )}
      >
        {selected ? (
          selected.label
        ) : (
          <span className="text-[var(--muted-text)]">{placeholder}</span>
        )}
      </button>

      {/* Custom arrow */}
      <span
        className={clsx(
          "pointer-events-none absolute inset-y-0 flex items-center",
          rightPad // matches left padding
        )}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="opacity-70"
        >
          <path
            d="M7 10l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Dropdown */}
      {open && (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={`opt-${activeIndex}`}
          onKeyDown={onListKeyDown}
          className={clsx(
            "absolute z-50 mt-2 w-full",
            "rounded-[12px] border border-[var(--input-field-border)]",
            "bg-[var(--container-bg)] text-[var(--container-text)]",
            "shadow-lg overflow-auto",
            listMaxHeightClass
          )}
        >
          {options.map((opt, idx) => {
            const active = idx === activeIndex;
            const selected = opt.value === value;
            return (
              <li
                id={`opt-${idx}`}
                key={opt.value}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseDown={(e) => e.preventDefault()} // prevent blur before click
                onClick={() => commit(idx)}
                className={clsx(
                  "cursor-pointer select-none",
                  // item paddings + rounded corners
                  "px-3 py-2 first:rounded-t-[12px] last:rounded-b-[12px]",
                  active
                    ? "bg-[var(--input-field-hover-bg)]"
                    : "bg-transparent",
                  selected && "outline-none"
                )}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
