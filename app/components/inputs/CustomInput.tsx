import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { audiowide } from "../../home-page";

interface Props {
  type: string;
  name: string;
  placeholder: string;
  width: string;
  label: string;
  fontSize: string;
  margin?: string;
  padding?: string;
  maxLength?: number;
}

export const CustomInput: FC<Props> = ({
  type,
  name,
  placeholder,
  width,
  label,
  margin,
  padding,
  fontSize,
  maxLength,
}) => {
  const { register } = useFormContext();
  return (
    <div className="grid">
      <label
        className={`mb-1 font-normal text-base text-blue-text ${audiowide.className}`}
      >
        {label}
      </label>
      <input
        maxLength={maxLength}
        className={`input border ${fontSize} text-blue-text font-normal border-gray-300 outline-0 h-[48px] rounded ${padding} ${width} ${margin}`}
        type={type}
        {...register(name)}
        placeholder={placeholder}
      />
    </div>
  );
};
