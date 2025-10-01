import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  subLabel?: React.ReactNode;
  placeholder?: string;
  rows?: number;
  infoText?: string;
};

export default function TextareaController<T extends FieldValues>({
  control,
  name,
  label,
  subLabel,
  placeholder,
  rows = 6,
  infoText,
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const hasError = Boolean(fieldState.error?.message);
        return (
          <div className="w-full flex flex-col gap-[2px]">
            <div className="mb-[2px] flex justify-between items-center">
              {label && (
                <span className="text-preset-4 text-(--input-field-label-color)">
                  {label}
                </span>
              )}
              {subLabel && (
                <span className="text-preset-7 text-(--input-field-subLabel-color)">
                  {subLabel}
                </span>
              )}
            </div>

            <textarea
              {...field}
              placeholder={placeholder}
              rows={rows}
              className={`
                rounded-[12px] px-[12px] py-[10px] bg-transparent outline-none text-preset-5 resize-y
                ${
                  hasError
                    ? "border border-(--warning-color)"
                    : "border border-(--input-field-border) hover:bg-(--input-field-hover-bg)"
                }
                active:ring-[2px] active:ring-(--btn-outer-shadow-color)
                active:ring-offset-[2px] active:ring-offset-(--btn-inner-shadow-color)
              `}
            />

            <span className="flex gap-1 items-start min-h-5 mb-1">
              {fieldState.error?.message ? (
                <p className="text-preset-6 text-(--warning-color)">
                  {fieldState.error.message}
                </p>
              ) : infoText ? (
                <p className="text-preset-6 text-(--input-field-info-text)">
                  {infoText}
                </p>
              ) : null}
            </span>
          </div>
        );
      }}
    />
  );
}
