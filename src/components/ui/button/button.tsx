import { ReactNode } from "react";
import s from "./button.module.scss";

interface ButtonProps {
  size?: "small" | "large";
  className?: string;
  disabled?: boolean
  callback?: () => void;
  children: ReactNode;
}

export const Button = ({
  size = "small",
  callback,
  children,
  className,
   disabled,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" disabled={disabled} className={`${s.button} ${s[size]} ${className} ${disabled && s.disabled}`} onClick={callback} {...props}>
      {children}
    </button>
  );
};
