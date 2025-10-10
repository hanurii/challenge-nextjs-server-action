import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import ErrorMessage from "./ErrorMessage";

export default function FormInput({
  name,
  svg,
  onChangeValue,
  errorMessages,
  ...rest
}: {
  name: string;
  svg: ReactNode;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessages?: string[];
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <div className={`${errorMessages ? "inputBoxWithError" : "inputBox"}`}>
        {svg}

        <input name={name} {...rest} onChange={onChangeValue} />
      </div>
      {errorMessages && <ErrorMessage messages={errorMessages} />}
    </>
  );
}
