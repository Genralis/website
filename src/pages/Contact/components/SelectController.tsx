import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import Select, { type SelectOption } from "../../../ui/Select";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  subLabel?: React.ReactNode;
  placeholder?: string;
  options: SelectOption[];
  infoText?: string;
  disabled?: boolean;
};

export default function SelectCustomController<T extends FieldValues>({
  control,
  name,
  label,
  subLabel,
  placeholder,
  options,
  infoText,
  disabled,
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

            <Select
              options={options}
              value={field.value as string | undefined}
              onChange={field.onChange}
              placeholder={placeholder}
              disabled={disabled}
              paddingX="px-3" // left padding
              widthClass="w-full"
              listMaxHeightClass="max-h-60"
            />

            <span className="flex gap-1 items-start min-h-5 mb-1">
              {hasError ? (
                <p className="text-preset-6 text-(--warning-color)">
                  {fieldState.error?.message}
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
