import classNames from "classnames";
import React from "react";

type Props = JSX.IntrinsicElements["button"] & {
  size?: "sm" | "md" | "lg";
  isFullWidth?: boolean;
  isShadow?: boolean;
};

const Button: React.FC<Props> = ({
  size = "sm",
  isFullWidth = false,
  isShadow = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        "bg-blue-800 px-4 text-sm font-sans text-white rounded-full",
        {
          "w-full": isFullWidth,
          "h-6": size === "sm" || size === "md",
          "h-10": size === "lg",
          "shadow-md": isShadow,
        }
      )}
    />
  );
};

export default Button;
