interface Props {
  /** e.g. https://genralis.substack.com/embed */
  src: string;
  height?: number;
}

export default function SubstackEmbed({ src, height = 220 }: Props) {
  return (
    <div className="rounded-[12px] overflow-hidden ring-1 ring-[var(--divider)] bg-white">
      <iframe
        src={src}
        height={height}
        style={{ width: "100%", background: "transparent" }}
        frameBorder="0"
        scrolling="no"
        title="Substack subscribe"
      />
    </div>
  );
}
