import PropTypes from "prop-types";

const Button = ({
  onClick,
  children,
  bgColor = "primary",
  type = "button",
}) => {
  console.log("childrent:", children);
  let bgClassName = "bg-primary";

  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;

    default:
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-1 text-white button bg-[#FF3D71] ${bgClassName}
      rounded-lg max-w-full flex justify-center gap-3 text-center`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Button;
