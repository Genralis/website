import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import TextInput, { type TextInputProps } from "../../../ui/TextInput";

type Props<T extends FieldValues> = Omit<
  TextInputProps,
  "onChange" | "value" | "name" | "error"
> & {
  control: Control<T>;
  name: FieldPath<T>;
};

export default function TextInputController<T extends FieldValues>({
  control,
  name,
  ...rest
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextInput
          {...rest}
          name={field.name}
          value={field.value ?? ""}
          onChange={field.onChange}
          error={
            fieldState.error ? { message: fieldState.error.message } : undefined
          }
        />
      )}
    />
  );
}
