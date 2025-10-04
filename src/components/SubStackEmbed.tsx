interface Props {
  /** e.g. https://genralis.substack.com/embed */
  src: string;
  height?: number;
}

export default function SubstackEmbed({ src, height = 220 }: Props) {
  return (
    <div className="w-full">
      <iframe
        src={src}
        title="Substack subscribe"
        width="100%" // ensure width without relying on inline style
        height={height}
        style={{ background: "transparent", border: "0" }}
        loading="lazy" // improve perf
        referrerPolicy="no-referrer-when-downgrade"
        // NOTE: don't add sandbox—Substack needs storage/form features
      />
    </div>
  );
}
