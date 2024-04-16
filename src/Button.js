import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  outline,
  rounded,
  primary,
  secondary,
  warning,
  success,
  danger,
  ...rest
}) {
  const classes = twMerge(
    classNames(
      rest.className,
      "flex items-center border my-2 mx-3 px-3 py-1.5",
      {
        // Primary Button
        "bg-blue-500 border-blue-500 text-white": primary,
        // Secondary Button
        "bg-gray-900 border-gray-900 text-white hover:bg-gray-400 hover:border-gray-400 hover:text-gray-800":
          secondary,
        // Warning Button
        "bg-yellow-400 border-yellow-400 text-white": warning,
        // Success Button
        "bg-green-500 border-green-500 text-white": success,
        // Danger Button
        "bg-red-500 border-red-500 text-white": danger,

        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-400": outline && warning,
        "text-red-500": outline && danger,
      }
    )
  );

  return (
    <button
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error("Please keep only one truthy value for purpose!");
    }
  },
};

// purpose can be: primary, secondary, success, warning, danger
