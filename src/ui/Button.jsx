import { Link } from "react-router-dom";

function Button({ children, disabled, linkTo }) {
  const className =
    "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase outline-yellow-500 transition-colors duration-300 hover:bg-yellow-500 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  if (linkTo) {
    return (
      <Link to={linkTo} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
