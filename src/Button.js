import PropTypes from "prop-types";

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
  return (
    <button className="border my-2 mx-3 p-2 bg-red-500 text-white">
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
