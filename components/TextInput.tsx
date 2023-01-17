import classNames from "classnames";

type Props = JSX.IntrinsicElements["input"] & {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
};

const TextInput: React.FC<Props> = ({
  label,
  hasError,
  errorMessage,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className={classNames(
          "font-sans text-sm",
          hasError ? "text-red-500" : "text-slate-900"
        )}
      >
        {label}
      </label>
      <input
        {...props}
        className={classNames(
          "border h-10 font-sans text-slate-900 placeholder-slate-400 w-full rounded-md py-3 pl-4 my-3",
          hasError ? "border-red-500" : "border-slate-200"
        )}
      />
      {hasError && (
        <p className="font-sans text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default TextInput;
