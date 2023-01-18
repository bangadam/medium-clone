import classNames from "classnames";

type Props = JSX.IntrinsicElements["button"] & {
  size: "sm" | "lg";
  label: string;
};

const TagButton: React.FC<Props> = ({ label = "", ...props }) => {
  return (
    <button
      className={classNames(
        `font-sans bg-slate-200 text-sm rounded-full px-4text-slate-900 px-3 cursor-pointer`,
        {
          "h-6": props.size === "sm",
          "h-8": props.size === "lg",
        }
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default TagButton;
