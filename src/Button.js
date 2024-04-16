import classNames from "classnames";

export default function Button({
  children,
  outline,
  rounded,
  primary,
  secondary,
  warning,
  success,
  danger,
}) {
  const classes = classNames("border my-2 mx-3 px-3 py-1.5", {
    "bg-blue-500 border-blue-500 text-white": primary,
  });
  return <button className={classes}>{children}</button>;
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
