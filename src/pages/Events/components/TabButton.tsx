const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={
      active
        ? "px-4 py-2 rounded-[10px] bg-(--home-card-bg) text-[var(--home-card-text)] text-preset-5"
        : "px-4 py-2 rounded-[10px] text-(--subheading-text-1) text-preset-5 hover:bg-[var(--input-field-hover-bg)]"
    }
  >
    {children}
  </button>
);

export default TabButton;
