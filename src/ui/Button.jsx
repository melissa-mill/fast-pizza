import { Link } from "react-router-dom";

function Button({ children, disabled, linkTo, type }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase outline-yellow-500 transition-colors duration-300 hover:bg-yellow-500 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    secondary:
      "inline-block text-sm border-2 border-stone-300 rounded-full font-semibold tracking-wide text-stone-400 uppercase outline-stone-300 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  if (linkTo) {
    return (
      <Link to={linkTo} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
