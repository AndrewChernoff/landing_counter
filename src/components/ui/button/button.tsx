import { ReactNode } from "react";
import s from "./button.module.scss";

interface ButtonProps {
  size?: "small" | "large";
  className: string;
  /* disabled?: boolean */
  callback?: () => void;
  children: ReactNode;
}

export const Button = ({
  size = "small",
  callback,
  children,
  className,
  /*  disabled, */
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className={`${s[size]} ${className}`} onClick={callback} {...props}>
      {children}
    </button>
  );
};
